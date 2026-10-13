import React from 'react';
import { Instagram, Heart, MessageCircle, ExternalLink, Sparkles } from 'lucide-react';
import { INSTAGRAM_POSTS, RESTAURANT_INFO } from '../data/restaurantData';

export const SocialGallery: React.FC = () => {
  return (
    <section className="relative py-20 bg-[#071813] border-b border-[#C8A049]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#e5c678] mb-2">
              <Instagram className="w-4 h-4 text-[#C8A049]" />
              <span>{RESTAURANT_INFO.instagram}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif-title text-[#F7F0DF]">
              Moments from the Royal Court
            </h2>
          </div>

          <a
            href="https://instagram.com/shahetehzeeb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#F3EAD6] border border-[#C8A049]/50 hover:bg-[#C8A049]/15 hover:border-[#C8A049] transition-all"
          >
            <Instagram className="w-4 h-4 text-[#C8A049]" />
            <span>Follow on Instagram</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#a89d8b]" />
          </a>
        </div>

        {/* 6-Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href="https://instagram.com/shahetehzeeb"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden bg-[#0c231c] border border-[#1b4d3e] block shadow-lg hover:border-[#C8A049] transition-all duration-300"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#071813]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between text-[#F3EAD6]">
                <div className="flex justify-end">
                  <Instagram className="w-4 h-4 text-[#C8A049]" />
                </div>

                <p className="text-[11px] text-[#e0d7c4] line-clamp-3 leading-snug font-light">
                  {post.caption}
                </p>

                <div className="flex items-center justify-between text-[11px] text-[#a89d8b] pt-2 border-t border-[#1b4d3e]">
                  <span className="flex items-center gap-1 text-[#e5c678]">
                    <Heart className="w-3.5 h-3.5 fill-current" />
                    <span className="tabular-nums font-mono">{post.likes.toLocaleString()}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span className="tabular-nums font-mono">{post.comments}</span>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
