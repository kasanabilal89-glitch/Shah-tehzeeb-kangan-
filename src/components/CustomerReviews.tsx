import React from 'react';
import { Star, Quote, Sparkles } from 'lucide-react';
import { REVIEWS } from '../data/restaurantData';

export const CustomerReviews: React.FC = () => {
  return (
    <section className="py-20 bg-[#0a231c] bg-mughal-pattern border-b border-[#C8A049]/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#C8A049]/40 bg-[#102d24] text-xs font-semibold tracking-[0.2em] text-[#e5c678] uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Words of Praise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-title text-[#F7F0DF] mb-3">
            Acclaimed by Connoisseurs
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#C8A049] to-transparent mx-auto" />
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#0c231c] border border-[#C8A049]/30 rounded-2xl p-7 flex flex-col justify-between shadow-xl relative group hover:border-[#C8A049] transition-colors"
            >
              <Quote className="w-8 h-8 text-[#C8A049]/20 absolute top-6 right-6 group-hover:text-[#C8A049]/40 transition-colors" />

              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#e5c678] mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-sm text-[#d5cbba] leading-relaxed italic font-serif-title text-base mb-6">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#1b4d3e]">
                <div className="flex items-baseline justify-between">
                  <h4 className="font-serif-title text-base font-bold text-[#F7F0DF]">
                    {rev.author}
                  </h4>
                  <span className="text-[11px] text-[#a89d8b]">{rev.date}</span>
                </div>
                <div className="text-xs text-[#C8A049]">{rev.role}</div>
                <div className="text-[11px] text-[#a89d8b] mt-1">
                  Favored: <span className="text-[#e0d7c4]">{rev.favoriteDish}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
