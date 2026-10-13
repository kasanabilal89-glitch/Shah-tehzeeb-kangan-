import React from 'react';
import { X, CheckCircle, Calendar, Users, Clock, MapPin, Share2, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO, Dish } from '../data/restaurantData';

export interface ReservationData {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  seatingArea: string;
  occasion: string;
  specialRequests: string;
  selectedDishes: Dish[];
  bookingRef: string;
}

interface ReservationTicketModalProps {
  reservation: ReservationData | null;
  onClose: () => void;
}

export const ReservationTicketModal: React.FC<ReservationTicketModalProps> = ({
  reservation,
  onClose
}) => {
  if (!reservation) return null;

  const generateWhatsAppMessage = () => {
    let msg = `*Royal Table Reservation Request - ${RESTAURANT_INFO.name}*\n\n`;
    msg += `*Booking Reference:* ${reservation.bookingRef}\n`;
    msg += `*Name:* ${reservation.name}\n`;
    msg += `*Phone:* ${reservation.phone}\n`;
    msg += `*Date:* ${reservation.date}\n`;
    msg += `*Time:* ${reservation.time}\n`;
    msg += `*Guests:* ${reservation.guests} Guests\n`;
    msg += `*Seating:* ${reservation.seatingArea}\n`;
    if (reservation.occasion) {
      msg += `*Occasion:* ${reservation.occasion}\n`;
    }
    if (reservation.specialRequests) {
      msg += `*Special Notes:* ${reservation.specialRequests}\n`;
    }
    if (reservation.selectedDishes.length > 0) {
      msg += `\n*Pre-selected Royal Dishes:*\n`;
      reservation.selectedDishes.forEach((d) => {
        msg += `• ${d.name} (₹${d.price})\n`;
      });
    }
    msg += `\nPlease confirm our table at your earliest convenience. Shukriya!`;

    const cleanNum = RESTAURANT_INFO.phone.replace(/\D/g, '');
    const url = `https://wa.me/${cleanNum}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-xl rounded-3xl bg-[#0c231c] border-2 border-[#C8A049] shadow-2xl overflow-hidden text-[#F3EAD6]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-[#d8b45e] via-[#C8A049] to-[#a36b3b] py-3 px-6 text-[#071813] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-widest">
              Royal Dastarkhwan Confirmed
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-[#071813] hover:bg-black/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Pass Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-[#1b4d3e] border-2 border-[#C8A049] flex items-center justify-center mx-auto mb-3 text-[#C8A049]">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif-title text-[#F7F0DF]">
              We Await Your Gracious Arrival
            </h3>
            <p className="text-xs uppercase tracking-widest text-[#a89d8b] mt-1 font-mono">
              Pass Reference #{reservation.bookingRef}
            </p>
          </div>

          {/* Details Card */}
          <div className="bg-[#071813] rounded-2xl p-5 border border-[#1b4d3e] space-y-3">
            <div className="grid grid-cols-2 gap-3 pb-3 border-b border-[#1b4d3e]/60">
              <div>
                <span className="text-[11px] text-[#a89d8b] uppercase tracking-wider block">Honored Guest</span>
                <span className="text-sm font-semibold text-[#F3EAD6]">{reservation.name}</span>
              </div>
              <div>
                <span className="text-[11px] text-[#a89d8b] uppercase tracking-wider block">Phone / Contact</span>
                <span className="text-sm font-semibold text-[#F3EAD6]">{reservation.phone}</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 py-2 border-b border-[#1b4d3e]/60">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#C8A049]" />
                <span className="text-xs text-[#F3EAD6]">{reservation.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C8A049]" />
                <span className="text-xs text-[#F3EAD6]">{reservation.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#C8A049]" />
                <span className="text-xs text-[#F3EAD6]">{reservation.guests} Guests</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[11px] text-[#a89d8b] uppercase tracking-wider block">Salon / Seating</span>
              <span className="text-sm font-medium text-[#e5c678]">{reservation.seatingArea}</span>
            </div>

            {reservation.selectedDishes.length > 0 && (
              <div className="pt-2 border-t border-[#1b4d3e]/60">
                <span className="text-[11px] text-[#a89d8b] uppercase tracking-wider block mb-1">Pre-Selected Royal Delicacies</span>
                <ul className="text-xs text-[#c5baa6] space-y-1">
                  {reservation.selectedDishes.map((dish, i) => (
                    <li key={i} className="flex justify-between">
                      <span>• {dish.name}</span>
                      <span className="font-mono text-gold-gradient">₹{dish.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <p className="text-xs text-center text-[#a89d8b]">
            A table will be reserved and held for 20 minutes from the confirmed time. For modifications or VIP arrival, tap below to notify our concierge.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={generateWhatsAppMessage}
              className="flex-1 py-3 px-4 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#25D366] hover:bg-[#20bd5a] text-[#071813] transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <Share2 className="w-4 h-4" />
              <span>Send to WhatsApp Concierge</span>
            </button>
            <button
              onClick={onClose}
              className="py-3 px-6 rounded-full text-xs font-semibold uppercase tracking-wider border border-[#C8A049]/60 text-[#F3EAD6] hover:bg-[#C8A049]/20 transition-all"
            >
              Close Pass
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
