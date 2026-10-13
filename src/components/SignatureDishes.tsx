import React, { useState, useRef } from 'react';
import { Sparkles, ChevronLeft, ChevronRight, Eye, Heart, Check, LayoutGrid, SlidersHorizontal } from 'lucide-react';
import { SIGNATURE_DISHES, Dish } from '../data/restaurantData';
import { DishModal } from './DishModal';

interface SignatureDishesProps {
  onPreSelectDish: (dish: Dish) => void;
  selectedDishIds: string[];
}

export const SignatureDishes: React.FC<SignatureDishesProps> = ({
  onPreSelectDish,
  selectedDishIds,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'carousel'>('grid');
  const [activeModalDish, setActiveModalDish] = useState<Dish | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'all', label: 'All Royal Offerings' },
    { id: 'kebabs', label: 'Kebab & Sigdi' },
    { id: 'curries', label: 'Shahi Gravies' },
    { id: 'biryani', label: 'Dum Biryanis' },
    { id: 'desserts', label: 'Shahi Meetha' },
  ];

  const filteredDishes = SIGNATURE_DISHES.filter(
    (dish) => activeCategory === 'all' || dish.category === activeCategory
  );

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="menu" className="relative py-24 bg-[#071813] bg-mughal-pattern border-b border-[#C8A049]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#C8A049]/40 bg-[#102d24] text-xs font-semibold tracking-[0.2em] text-[#e5c678] uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Imperial Gastronomy</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-serif-title tracking-tight text-[#F7F0DF]">
              Signature Dastarkhwan
            </h2>
            <p className="text-[#a89d8b] text-base mt-2">
              Time-honored recipes slow-simmered in copper degs, smoked over glowing wood charcoal, and presented with courtly grace.
            </p>
          </div>

          {/* View Mode Controls */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center p-1 rounded-xl bg-[#0c231c] border border-[#1b4d3e]">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-[#C8A049] text-[#071813]'
                    : 'text-[#a89d8b] hover:text-[#F3EAD6]'
                }`}
                title="Grid View"
                aria-label="Switch to grid view"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('carousel')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'carousel'
                    ? 'bg-[#C8A049] text-[#071813]'
                    : 'text-[#a89d8b] hover:text-[#F3EAD6]'
                }`}
                title="Carousel View"
                aria-label="Switch to carousel view"
              >
                <SlidersHorizontal className="w-4 h-4" />
              </button>
            </div>

            {viewMode === 'carousel' && (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => scrollCarousel('left')}
                  className="p-2.5 rounded-full border border-[#C8A049]/40 bg-[#0c231c] text-[#F3EAD6] hover:bg-[#C8A049] hover:text-[#071813] transition-colors"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scrollCarousel('right')}
                  className="p-2.5 rounded-full border border-[#C8A049]/40 bg-[#0c231c] text-[#F3EAD6] hover:bg-[#C8A049] hover:text-[#071813] transition-colors"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[#d8b45e] to-[#C8A049] text-[#071813] shadow-md font-bold'
                  : 'bg-[#0c231c] text-[#b3a893] border border-[#1b4d3e] hover:border-[#C8A049]/60 hover:text-[#F3EAD6]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dishes Container: Grid or Carousel */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDishes.map((dish) => (
              <DishCard
                key={dish.id}
                dish={dish}
                onOpenModal={() => setActiveModalDish(dish)}
                onSelect={() => onPreSelectDish(dish)}
                isSelected={selectedDishIds.includes(dish.id)}
              />
            ))}
          </div>
        ) : (
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: 'none' }}
          >
            {filteredDishes.map((dish) => (
              <div key={dish.id} className="min-w-[320px] sm:min-w-[360px] max-w-[380px] snap-center shrink-0">
                <DishCard
                  dish={dish}
                  onOpenModal={() => setActiveModalDish(dish)}
                  onSelect={() => onPreSelectDish(dish)}
                  isSelected={selectedDishIds.includes(dish.id)}
                />
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Selected Dish Modal */}
      <DishModal
        dish={activeModalDish}
        onClose={() => setActiveModalDish(null)}
        onSelectForReservation={onPreSelectDish}
        isSelected={activeModalDish ? selectedDishIds.includes(activeModalDish.id) : false}
      />
    </section>
  );
};

interface DishCardProps {
  dish: Dish;
  onOpenModal: () => void;
  onSelect: () => void;
  isSelected: boolean;
}

const DishCard: React.FC<DishCardProps> = ({ dish, onOpenModal, onSelect, isSelected }) => {
  return (
    <article className="group relative rounded-2xl overflow-hidden bg-[#0c231c] border border-[#C8A049]/30 hover:border-[#C8A049] transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between">
      {/* Top Media Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#071813]">
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c231c] via-transparent to-black/20" />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
          {dish.isChefSpecial ? (
            <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#C8A049] text-[#071813] shadow-md">
              Chef's Special
            </span>
          ) : <span />}

          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-[#071813]/80 backdrop-blur-sm border border-[#C8A049]/40 text-[#e5c678]">
            {dish.spiceLevel}
          </span>
        </div>

        {/* Quick View Button on Hover */}
        <button
          onClick={onOpenModal}
          className="absolute bottom-3 right-3 p-2.5 rounded-full bg-[#071813]/85 text-[#F3EAD6] border border-[#C8A049]/50 opacity-90 group-hover:opacity-100 hover:bg-[#C8A049] hover:text-[#071813] transition-all shadow-md"
          title="View Tasting Notes"
          aria-label={`View tasting notes for ${dish.name}`}
        >
          <Eye className="w-4 h-4" />
        </button>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-baseline justify-between mb-1.5">
            <span className="text-xs italic font-serif-title text-[#C8A049]">
              {dish.nativeName}
            </span>
            <span className="text-xl font-bold font-display text-gold-gradient tabular-nums">
              ₹{dish.price}
            </span>
          </div>

          <h3 
            onClick={onOpenModal}
            className="text-2xl font-bold font-serif-title text-[#F7F0DF] group-hover:text-[#e5c678] transition-colors cursor-pointer mb-2.5"
          >
            {dish.name}
          </h3>

          <p className="text-sm text-[#a89d8b] line-clamp-2 leading-relaxed mb-4">
            {dish.description}
          </p>
        </div>

        {/* Card Footer Actions */}
        <div className="pt-4 border-t border-[#1b4d3e]/70 flex items-center justify-between gap-3">
          <button
            onClick={onOpenModal}
            className="text-xs uppercase tracking-wider text-[#C8A049] hover:text-[#e5c678] font-semibold underline decoration-transparent hover:decoration-[#C8A049] transition-all"
          >
            Tasting Notes
          </button>

          <button
            onClick={onSelect}
            className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
              isSelected
                ? 'bg-emerald-700 text-white'
                : 'border border-[#C8A049]/60 text-[#F3EAD6] hover:bg-[#C8A049] hover:text-[#071813]'
            }`}
          >
            {isSelected ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Reserved</span>
              </>
            ) : (
              <>
                <Heart className="w-3.5 h-3.5" />
                <span>Pre-Select</span>
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
};
