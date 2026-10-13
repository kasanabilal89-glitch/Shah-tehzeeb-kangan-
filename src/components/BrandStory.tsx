import React, { useState } from 'react';
import { Sparkles, CheckCircle2, Flame, HeartHandshake, Compass } from 'lucide-react';
import { IMAGES, CULINARY_PILLARS } from '../data/restaurantData';

export const BrandStory: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'heritage' | 'dumpukht' | 'ingredients'>('heritage');

  return (
    <section id="story" className="relative py-24 bg-[#0a231c] bg-jali-pattern border-t border-b border-[#C8A049]/20 overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#C8A049]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#1b4d3e]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#C8A049]/40 bg-[#102d24] text-xs font-semibold tracking-[0.2em] text-[#e5c678] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Royal Provenance</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif-title tracking-tight text-[#F7F0DF] mb-4">
            The Lost Flavors of the Nawabs
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C8A049] to-transparent mx-auto mb-6" />
          <p className="text-[#c8beaa] text-base sm:text-lg leading-relaxed">
            In the princely courts of Awadh and Mughal Hindustan, cooking was never merely sustenance — it was an elevated fine art of poetry, aromas, and patient alchemy.
          </p>
        </div>

        {/* Split Layout: Image on Left/Right with Heritage Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center mb-20">
          
          {/* Left Column: Framed Photography of Chef Plating */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Golden Geometric Frame */}
              <div className="absolute -inset-3 sm:-inset-4 rounded-3xl border border-[#C8A049]/40 transform -rotate-1 pointer-events-none" />
              <div className="absolute -inset-1 rounded-2xl border-2 border-[#C8A049] shadow-2xl pointer-events-none" />
              
              {/* Main Image Container with Arch Motif */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#071813] aspect-[4/3]">
                <img
                  src={IMAGES.chefPlating}
                  alt="Ustad-e-Matbakh delicately garnishing royal Mughlai dish with edible gold leaf"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                
                {/* Subtle bottom gradient and chef caption */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#071813] via-[#071813]/70 to-transparent p-6 text-left">
                  <span className="text-xs uppercase tracking-widest text-[#e5c678] font-semibold block mb-1">
                    Ustad-e-Matbakh (Head Chef)
                  </span>
                  <p className="text-sm italic text-[#ede3ce] font-serif-title">
                    "Every pinch of saffron and every wisp of smoke must respect the soul of our ancestors."
                  </p>
                </div>
              </div>

              {/* Floating Decorative Seal */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-gradient-to-br from-[#1b4d3e] to-[#071813] border-2 border-[#C8A049] rounded-2xl p-4 shadow-xl text-center hidden sm:block">
                <span className="text-2xl font-bold font-display text-gold-gradient block">1856</span>
                <span className="text-[11px] text-[#e5c678] uppercase tracking-wider font-medium">Ancestral Recipe Archive</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Interactive Story Chapters */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Interactive Tab Selectors */}
            <div className="flex items-center gap-2 p-1.5 rounded-xl bg-[#071813]/80 border border-[#C8A049]/30 mb-8 self-start">
              <button
                onClick={() => setActiveTab('heritage')}
                className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
                  activeTab === 'heritage'
                    ? 'bg-gradient-to-r from-[#d8b45e] to-[#C8A049] text-[#071813] shadow-md'
                    : 'text-[#c8beaa] hover:text-[#F3EAD6]'
                }`}
              >
                Royal Heritage
              </button>
              <button
                onClick={() => setActiveTab('dumpukht')}
                className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
                  activeTab === 'dumpukht'
                    ? 'bg-gradient-to-r from-[#d8b45e] to-[#C8A049] text-[#071813] shadow-md'
                    : 'text-[#c8beaa] hover:text-[#F3EAD6]'
                }`}
              >
                Dum Pukht Art
              </button>
              <button
                onClick={() => setActiveTab('ingredients')}
                className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
                  activeTab === 'ingredients'
                    ? 'bg-gradient-to-r from-[#d8b45e] to-[#C8A049] text-[#071813] shadow-md'
                    : 'text-[#c8beaa] hover:text-[#F3EAD6]'
                }`}
              >
                Pampore Saffron
              </button>
            </div>

            {/* Tab 1: Heritage Content */}
            {activeTab === 'heritage' && (
              <div className="space-y-4 animate-fadeIn">
                <h3 className="text-2xl sm:text-3xl font-bold font-serif-title text-[#F7F0DF]">
                  From the Dastarkhwan of Wajid Ali Shah
                </h3>
                <p className="text-[#c5baa6] text-sm sm:text-base leading-relaxed">
                  Founded upon heirloom formulations guarded by generations of Master Khansamas, <span className="text-[#e5c678] font-semibold">Dastarkhwan-e-Tehzeeb</span> transports the courtly banquets of 19th-century Awadh into the breathtaking serenity of Kangan, Kashmir.
                </p>
                <p className="text-[#c5baa6] text-sm sm:text-base leading-relaxed">
                  In royal tradition, <span className="italic text-[#F3EAD6]">Tehzeeb</span> embodies grace, courtesy, and devotion. We present each platter on silver and hand-hammered copper, treating every visitor as a royal dignitary.
                </p>
                <div className="pt-2 flex flex-col gap-2.5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C8A049] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#e0d7c4]">No industrial tenderizers — only raw green papaya and time-tested braising.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C8A049] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#e0d7c4]">Pure Desi Ghee sourced from alpine Himalayan meadows.</span>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Dum Pukht Content */}
            {activeTab === 'dumpukht' && (
              <div className="space-y-4 animate-fadeIn">
                <h3 className="text-2xl sm:text-3xl font-bold font-serif-title text-[#F7F0DF]">
                  The Gentle Breath of Dum (Breathe in Flavor)
                </h3>
                <p className="text-[#c5baa6] text-sm sm:text-base leading-relaxed">
                  <span className="text-[#e5c678] font-semibold">Dum Pukht</span> — literally meaning "to breathe and cook" — is the revered Persian-Awadhi technique where meat, grains, and spices are sealed hermetically in heavy hand-forged copper degs using fresh wheat dough.
                </p>
                <p className="text-[#c5baa6] text-sm sm:text-base leading-relaxed">
                  Slowly baked over hot coals placed both below and atop the lid, steam cannot escape. The trapped juices condense back into the ingredients, creating an intensely tender texture and fragrance that blooms the moment the seal is sliced at your table.
                </p>
                <div className="pt-2 flex flex-col gap-2.5">
                  <div className="flex items-start gap-3">
                    <Flame className="w-5 h-5 text-[#C8A049] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#e0d7c4]">Sealed with saffron-infused dough for true hermetic flavor retention.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Flame className="w-5 h-5 text-[#C8A049] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#e0d7c4]">Charcoal smoked Dhungar infusion using burning betel nut charcoal and cloves.</span>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Saffron & Spices Content */}
            {activeTab === 'ingredients' && (
              <div className="space-y-4 animate-fadeIn">
                <h3 className="text-2xl sm:text-3xl font-bold font-serif-title text-[#F7F0DF]">
                  Gold-Grade Pampore Saffron &amp; Botanical Ittar
                </h3>
                <p className="text-[#c5baa6] text-sm sm:text-base leading-relaxed">
                  True Awadhi cuisine relies on delicate floral alchemy rather than fiery heat. We directly source hand-plucked crimson stigmas of pure saffron from Pampore, just an hour south of our restaurant.
                </p>
                <p className="text-[#c5baa6] text-sm sm:text-base leading-relaxed">
                  Paired with royal mace (javitri), crushed green cardamom, and micro-drops of food-grade Kannauj rose and kewra distillations, each morsel carries subtle perfume and velvety richness.
                </p>
                <div className="pt-2 flex flex-col gap-2.5">
                  <div className="flex items-start gap-3">
                    <Compass className="w-5 h-5 text-[#C8A049] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#e0d7c4]">All spice blends stone-ground daily in-house in small royal batches.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <HeartHandshake className="w-5 h-5 text-[#C8A049] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#e0d7c4]">Partnered with local Kashmiri growers and sustainable nomadic herders.</span>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* 4 Cultural Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {CULINARY_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-[#071813]/70 border border-[#C8A049]/25 hover:border-[#C8A049] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-9 h-9 rounded-full bg-[#C8A049]/10 text-[#C8A049] flex items-center justify-center font-serif-title text-lg font-bold mb-4 group-hover:bg-[#C8A049] group-hover:text-[#071813] transition-colors">
                0{idx + 1}
              </div>
              <h4 className="text-xl font-bold font-serif-title text-[#F7F0DF] mb-1">
                {pillar.title}
              </h4>
              <p className="text-xs text-[#d4b45d] uppercase tracking-wider font-semibold mb-3">
                {pillar.subtitle}
              </p>
              <p className="text-sm text-[#a89d8b] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
