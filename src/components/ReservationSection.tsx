import React, { useState } from 'react';
import { Calendar, Clock, Users, Sparkles, MapPin, Check, Heart, ShieldCheck, Phone } from 'lucide-react';
import { RESTAURANT_INFO, Dish } from '../data/restaurantData';
import { ReservationData, ReservationTicketModal } from './ReservationTicketModal';

interface ReservationSectionProps {
  preSelectedDishes: Dish[];
  onRemovePreSelectedDish: (dishId: string) => void;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({
  preSelectedDishes,
  onRemovePreSelectedDish
}) => {
  // Form state
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState(() => {
    // Default to today in YYYY-MM-DD
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [time, setTime] = useState('08:00 PM');
  const [guests, setGuests] = useState(4);
  const [seatingArea, setSeatingArea] = useState('Royal Diwan-e-Khaas (Private Alcove)');
  const [occasion, setOccasion] = useState('Celebration / Anniversary');
  const [specialRequests, setSpecialRequests] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedReservation, setConfirmedReservation] = useState<ReservationData | null>(null);

  const timeSlots = [
    { time: '12:30 PM', label: 'Lunch Seating' },
    { time: '01:30 PM', label: 'Lunch Seating' },
    { time: '02:45 PM', label: 'Afternoon Dastarkhwan' },
    { time: '07:00 PM', label: 'Twilight Dinner' },
    { time: '08:00 PM', label: 'Prime Royal Dinner' },
    { time: '09:00 PM', label: 'Grand Feast Seating' },
    { time: '10:00 PM', label: 'Late Royal Repast' },
  ];

  const seatingOptions = [
    { id: 'Royal Diwan-e-Khaas (Private Alcove)', label: 'Diwan-e-Khaas', desc: 'Private royal alcove with silk cushions & antique brassware' },
    { id: 'Grand Dastarkhwan Central Hall', label: 'Grand Dastarkhwan', desc: 'Central palace hall under crystal chandeliers & live sitar' },
    { id: 'Chinar Courtyard & Jharokha', label: 'Chinar Jharokha', desc: 'Semi-open veranda overlooking mountain mist' },
    { id: 'Mehman-Khana Family Suite', label: 'Mehman-Khana Suite', desc: 'Dedicated banquet table for 6 to 16 guests' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert("Please provide your name and contact phone number to secure your table.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const randomRef = 'TZB-' + Math.floor(1000 + Math.random() * 9000);
      const resData: ReservationData = {
        name,
        phone,
        email,
        date,
        time,
        guests,
        seatingArea,
        occasion,
        specialRequests,
        selectedDishes: preSelectedDishes,
        bookingRef: randomRef
      };
      setConfirmedReservation(resData);
      setIsSubmitting(false);
    }, 600);
  };

  return (
    <section id="reservations" className="relative py-24 bg-[#0a231c] bg-jali-pattern border-b border-[#C8A049]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#C8A049]/40 bg-[#102d24] text-xs font-semibold tracking-[0.2em] text-[#e5c678] uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Hospitality of Kings</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif-title tracking-tight text-[#F7F0DF] mb-4">
            Reserve Your Dastarkhwan
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C8A049] to-transparent mx-auto mb-4" />
          <p className="text-[#a89d8b] text-base">
            Grace us with your presence. Every reservation receives our signature silver-tray welcome and bespoke culinary orchestration.
          </p>
        </div>

        {/* Main Form Card */}
        <div className="max-w-4xl mx-auto bg-[#0c231c] rounded-3xl border border-[#C8A049]/40 p-6 sm:p-10 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Step 1: Date, Time & Guests */}
            <div>
              <h3 className="text-lg font-serif-title text-[#e5c678] flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-[#C8A049] text-[#071813] text-xs font-bold flex items-center justify-center font-sans">1</span>
                <span>Select Date, Seating &amp; Party Size</span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Date */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#a89d8b] font-semibold mb-2">
                    Date of Visit
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-[#071813] border border-[#1b4d3e] focus:border-[#C8A049] rounded-xl px-4 py-3 text-sm text-[#F3EAD6] outline-none transition-colors"
                      required
                    />
                  </div>
                </div>

                {/* Time */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#a89d8b] font-semibold mb-2">
                    Preferred Time
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-[#071813] border border-[#1b4d3e] focus:border-[#C8A049] rounded-xl px-4 py-3 text-sm text-[#F3EAD6] outline-none transition-colors"
                  >
                    {timeSlots.map((slot, i) => (
                      <option key={i} value={slot.time} className="bg-[#0c231c] text-[#F3EAD6]">
                        {slot.time} ({slot.label})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Guests Counter */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#a89d8b] font-semibold mb-2">
                    Number of Guests
                  </label>
                  <div className="flex items-center justify-between bg-[#071813] border border-[#1b4d3e] rounded-xl px-3 py-1.5">
                    <button
                      type="button"
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                      className="w-8 h-8 rounded-lg bg-[#102d24] text-[#C8A049] text-lg font-bold hover:bg-[#C8A049] hover:text-[#071813] transition-colors"
                    >
                      -
                    </button>
                    <span className="font-display text-base font-bold text-[#F3EAD6] tabular-nums">
                      {guests} {guests === 1 ? 'Guest' : 'Guests'}
                    </span>
                    <button
                      type="button"
                      onClick={() => setGuests(Math.min(24, guests + 1))}
                      className="w-8 h-8 rounded-lg bg-[#102d24] text-[#C8A049] text-lg font-bold hover:bg-[#C8A049] hover:text-[#071813] transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Seating Area Selection */}
            <div>
              <h3 className="text-lg font-serif-title text-[#e5c678] flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-[#C8A049] text-[#071813] text-xs font-bold flex items-center justify-center font-sans">2</span>
                <span>Choose Your Dining Ambience</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {seatingOptions.map((opt) => (
                  <div
                    key={opt.id}
                    onClick={() => setSeatingArea(opt.id)}
                    className={`p-4 rounded-xl cursor-pointer border transition-all ${
                      seatingArea === opt.id
                        ? 'bg-[#102d24] border-[#C8A049] shadow-lg shadow-[#040e0b]/40'
                        : 'bg-[#071813]/70 border-[#1b4d3e] hover:border-[#C8A049]/40'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-serif-title text-base font-bold text-[#F7F0DF]">
                        {opt.label}
                      </span>
                      {seatingArea === opt.id && (
                        <span className="w-5 h-5 rounded-full bg-[#C8A049] text-[#071813] flex items-center justify-center">
                          <Check className="w-3.5 h-3.5" />
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#a89d8b] leading-relaxed">
                      {opt.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Optional Pre-selected Dishes Notification */}
            {preSelectedDishes.length > 0 && (
              <div className="p-4 rounded-xl bg-[#071813] border border-[#C8A049]/40">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#e5c678]">
                    <Sparkles className="w-4 h-4 text-[#C8A049]" />
                    <span>Pre-Selected Dishes for Your Table ({preSelectedDishes.length})</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {preSelectedDishes.map((dish) => (
                    <span
                      key={dish.id}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs bg-[#102d24] border border-[#1b4d3e] text-[#F3EAD6]"
                    >
                      <span>{dish.name}</span>
                      <button
                        type="button"
                        onClick={() => onRemovePreSelectedDish(dish.id)}
                        className="text-[#a89d8b] hover:text-red-400 ml-1 text-sm"
                        title="Remove"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Guest Details & Occasion */}
            <div>
              <h3 className="text-lg font-serif-title text-[#e5c678] flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-[#C8A049] text-[#071813] text-xs font-bold flex items-center justify-center font-sans">3</span>
                <span>Guest Information &amp; Special Occasions</span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#a89d8b] font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mirza Jahangir"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#071813] border border-[#1b4d3e] focus:border-[#C8A049] rounded-xl px-4 py-3 text-sm text-[#F3EAD6] outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#a89d8b] font-semibold mb-2">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#071813] border border-[#1b4d3e] focus:border-[#C8A049] rounded-xl px-4 py-3 text-sm text-[#F3EAD6] outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#a89d8b] font-semibold mb-2">
                    Special Occasion
                  </label>
                  <select
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    className="w-full bg-[#071813] border border-[#1b4d3e] focus:border-[#C8A049] rounded-xl px-4 py-3 text-sm text-[#F3EAD6] outline-none transition-colors"
                  >
                    <option value="Royal Dining">Just an Exquisite Dinner</option>
                    <option value="Anniversary">Anniversary Celebration</option>
                    <option value="Birthday">Birthday Gathering</option>
                    <option value="Business Feast">Corporate / Business Dinner</option>
                    <option value="Family Reunion">Family Dastarkhwan</option>
                    <option value="Traveler Layover">Kashmir Explorer / Transit</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#a89d8b] font-semibold mb-2">
                  Special Notes or Dietary Preferences (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us if anyone has dietary restrictions (Jain, nut-free, mild spice) or if you'd like a custom cake or rose petal decor..."
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full bg-[#071813] border border-[#1b4d3e] focus:border-[#C8A049] rounded-xl px-4 py-3 text-sm text-[#F3EAD6] outline-none transition-colors resize-none"
                />
              </div>
            </div>

            {/* Submission button & guarantee */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#1b4d3e]">
              <div className="flex items-center gap-2 text-xs text-[#a89d8b]">
                <ShieldCheck className="w-4 h-4 text-[#C8A049]" />
                <span>Instant Confirmation · No booking fee required</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-10 py-4 rounded-full text-sm font-semibold uppercase tracking-widest bg-gradient-to-r from-[#d8b45e] via-[#C8A049] to-[#9E6435] text-[#071813] shadow-xl hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-3 cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-[#071813]" />
                <span>{isSubmitting ? 'Confirming Table...' : 'Confirm Reservation'}</span>
              </button>
            </div>

          </form>
        </div>
      </div>

      {/* Confirmation Pass Modal */}
      <ReservationTicketModal
        reservation={confirmedReservation}
        onClose={() => setConfirmedReservation(null)}
      />
    </section>
  );
};
