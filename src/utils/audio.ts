// Ambient royal Indian instrumental sound generator using Web Audio API
// Generates a soft, soothing tanpura-like acoustic drone chord (Sa-Pa-Sa-Sa in C#)
// No external MP3 downloads required! Completely self-contained and lightweight.

class RoyalAmbientAudio {
  private ctx: AudioContext | null = null;
  private oscillators: OscillatorNode[] = [];
  private gainNode: GainNode | null = null;
  private isPlaying: boolean = false;

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  public play(): void {
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;

      this.ctx = new AudioContextClass();
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      this.gainNode = this.ctx.createGain();
      this.gainNode.gain.setValueAtTime(0, this.ctx.currentTime);
      // Gentle fade in over 2 seconds
      this.gainNode.gain.linearRampToValueAtTime(0.08, this.ctx.currentTime + 2);
      this.gainNode.connect(this.ctx.destination);

      // C# frequencies for traditional peaceful Indian drone (approx. 138.59 Hz, 207.65 Hz, 277.18 Hz)
      const frequencies = [138.59, 207.65, 277.18, 415.3, 554.37];
      this.oscillators = frequencies.map((freq, idx) => {
        const osc = this.ctx!.createOscillator();
        let panner: StereoPannerNode | null = null;
        try {
          panner = this.ctx!.createStereoPanner();
        } catch {
          panner = null;
        }
        const filter = this.ctx!.createBiquadFilter();

        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, this.ctx!.currentTime);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(600 + idx * 80, this.ctx!.currentTime);

        if (panner) {
          panner.pan.value = (idx - 2) * 0.35;
          osc.connect(filter).connect(panner).connect(this.gainNode!);
        } else {
          osc.connect(filter).connect(this.gainNode!);
        }

        osc.start();
        return osc;
      });

      this.isPlaying = true;
    } catch (e) {
      console.warn("Audio playback not supported or blocked", e);
      this.isPlaying = false;
    }
  }

  public stop(): void {
    if (!this.ctx || !this.gainNode) return;
    try {
      this.gainNode.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 0.8);
      setTimeout(() => {
        this.oscillators.forEach(osc => {
          try { osc.stop(); osc.disconnect(); } catch {}
        });
        this.oscillators = [];
        if (this.ctx) {
          this.ctx.close();
          this.ctx = null;
        }
      }, 850);
    } catch {
      // ignore
    }
    this.isPlaying = false;
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }
}

export const royalAudio = new RoyalAmbientAudio();
