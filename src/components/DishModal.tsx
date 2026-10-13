import React from 'react';
import { X, Sparkles, Flame, Check, Utensils, Heart } from 'lucide-react';
import { Dish } from '../data/restaurantData';

interface DishModalProps {
  dish: Dish | null;
  onClose: () => void;
  onSelectForReservation: (dish: Dish) => void;
  isSelected?: boolean;
}

export const DishModal: React.FC<DishModalProps> = ({
  dish,
  onClose,
  onSelectForReservation,
  isSelected = false
}) => {
  if (!dish) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0c231c] border-2 border-[#C8A049] shadow-2xl text-[#F3EAD6]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#071813]/80 border border-[#C8A049]/50 text-[#F3EAD6] hover:text-[#C8A049] hover:bg-[#071813] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Banner Image */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c231c] via-transparent to-black/30" />
          
          {/* Badge over image */}
          <div className="absolute top-4 left-4 flex gap-2">
            {dish.isChefSpecial && (
              <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#C8A049] text-[#071813] shadow-md">
                Royal Signature
              </span>
            )}
            <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#071813]/80 backdrop-blur-sm border border-[#C8A049]/40 text-[#e5c678]">
              {dish.spiceLevel}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#1b4d3e] pb-5">
            <div>
              <span className="text-sm font-serif-title italic text-[#C8A049] block mb-1">
                {dish.nativeName}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif-title text-[#F7F0DF]">
                {dish.name}
              </h3>
            </div>
            <div className="text-2xl sm:text-3xl font-bold font-display text-gold-gradient">
              ₹{dish.price}
            </div>
          </div>

          {/* Long Description */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#a89d8b] font-semibold mb-2">
              Culinary Profile
            </h4>
            <p className="text-sm sm:text-base text-[#e0d7c4] leading-relaxed">
              {dish.longDescription}
            </p>
          </div>

          {/* Heritage Lore */}
          <div className="bg-[#071813]/70 rounded-2xl p-5 border border-[#C8A049]/25">
            <div className="flex items-center gap-2 mb-2 text-[#e5c678]">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs uppercase tracking-widest font-semibold">
                Royal Lore &amp; Provenance
              </span>
            </div>
            <p className="text-sm text-[#c8beaa] italic leading-relaxed font-serif-title text-base">
              "{dish.heritageStory}"
            </p>
          </div>

          {/* Details Grid: Prep, Ingredients, Pairing */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#102d24]/60 border border-[#1b4d3e]">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#a89d8b] mb-1 font-semibold">
                <Flame className="w-4 h-4 text-[#C8A049]" />
                <span>Preparation</span>
              </div>
              <p className="text-sm font-medium text-[#F3EAD6]">{dish.preparation}</p>
            </div>

            <div className="p-4 rounded-xl bg-[#102d24]/60 border border-[#1b4d3e]">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#a89d8b] mb-1 font-semibold">
                <Utensils className="w-4 h-4 text-[#C8A049]" />
                <span>Sommelier &amp; Bread Pairing</span>
              </div>
              <p className="text-sm font-medium text-[#F3EAD6]">{dish.pairing}</p>
            </div>
          </div>

          {/* Key Botanicals / Ingredients */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#a89d8b] font-semibold mb-3">
              Principal Botanicals &amp; Ingredients
            </h4>
            <div className="flex flex-wrap gap-2">
              {dish.ingredients.map((ing, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-xs bg-[#102d24] border border-[#C8A049]/30 text-[#e0d7c4]"
                >
                  {ing}
                </span>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#1b4d3e]">
            <span className="text-xs text-[#a89d8b]">
              Portion: {dish.serves || '2 persons'} · {dish.calories || '350 kcal'}
            </span>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => {
                  onSelectForReservation(dish);
                  onClose();
                }}
                className={`w-full sm:w-auto px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                  isSelected
                    ? 'bg-emerald-700 text-white'
                    : 'bg-gradient-to-r from-[#d8b45e] via-[#C8A049] to-[#a36b3b] text-[#071813] hover:brightness-110'
                }`}
              >
                {isSelected ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Selected for Table Request</span>
                  </>
                ) : (
                  <>
                    <Heart className="w-4 h-4" />
                    <span>Include in Table Reservation</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
