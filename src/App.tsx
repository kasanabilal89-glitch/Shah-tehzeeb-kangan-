/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandStory } from './components/BrandStory';
import { SignatureDishes } from './components/SignatureDishes';
import { ReservationSection } from './components/ReservationSection';
import { SocialGallery } from './components/SocialGallery';
import { CustomerReviews } from './components/CustomerReviews';
import { Footer } from './components/Footer';
import { SIGNATURE_DISHES, Dish, RESTAURANT_INFO } from './data/restaurantData';
import { MessageCircle, Check, Calendar } from 'lucide-react';

export default function App() {
  const [selectedDishIds, setSelectedDishIds] = useState<string[]>([
    'kangan-murgh-tikka',
    'shahi-nihari'
  ]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handlePreSelectDish = (dish: Dish) => {
    setSelectedDishIds((prev) => {
      const exists = prev.includes(dish.id);
      if (exists) {
        showToast(`Removed ${dish.name} from your reservation list.`);
        return prev.filter((id) => id !== dish.id);
      } else {
        showToast(`Added ${dish.name} to your table reservation!`);
        return [...prev, dish.id];
      }
    });
  };

  const handleRemovePreSelectedDish = (dishId: string) => {
    setSelectedDishIds((prev) => prev.filter((id) => id !== dishId));
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleOpenReservation = () => {
    const el = document.getElementById('reservations');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Pre-selected dish objects
  const preSelectedDishes = SIGNATURE_DISHES.filter((d) =>
    selectedDishIds.includes(d.id)
  );

  return (
    <div className="min-h-screen bg-[#071813] text-[#F3EAD6] flex flex-col font-sans">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenReservation={handleOpenReservation} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenReservation={handleOpenReservation}
          onExploreMenu={handleExploreMenu}
        />

        {/* About & Brand Story Section */}
        <BrandStory />

        {/* Signature Dishes Grid / Carousel */}
        <SignatureDishes
          onPreSelectDish={handlePreSelectDish}
          selectedDishIds={selectedDishIds}
        />

        {/* Table Reservation Form */}
        <ReservationSection
          preSelectedDishes={preSelectedDishes}
          onRemovePreSelectedDish={handleRemovePreSelectedDish}
        />

        {/* Guest Reviews & Testimonials */}
        <CustomerReviews />

        {/* Instagram Social Feed & Gallery */}
        <SocialGallery />
      </main>

      {/* Footer */}
      <Footer />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 bg-[#102d24] border border-[#C8A049] text-[#F3EAD6] px-5 py-3 rounded-full shadow-2xl flex items-center gap-2.5 text-xs sm:text-sm animate-bounce font-medium">
          <Check className="w-4 h-4 text-[#C8A049]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Quick Action Floating Bar on bottom right */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
        {/* Quick WhatsApp Chat */}
        <a
          href={`https://wa.me/${RESTAURANT_INFO.phone.replace(/\D/g, '')}?text=${encodeURIComponent(
            `Hello ${RESTAURANT_INFO.name}, I would like to inquire about a table reservation.`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#25D366] text-[#071813] flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
          title="Chat with Royal Concierge on WhatsApp"
          aria-label="WhatsApp Concierge"
        >
          <MessageCircle className="w-6 h-6 fill-current" />
        </a>

        {/* Floating Reserve Button */}
        <button
          onClick={handleOpenReservation}
          className="hidden md:flex items-center gap-2 py-3 px-5 rounded-full bg-gradient-to-r from-[#d8b45e] to-[#C8A049] text-[#071813] font-bold text-xs uppercase tracking-wider shadow-2xl hover:brightness-110 active:scale-95 transition-all"
          title="Reserve a Table"
        >
          <Calendar className="w-4 h-4 text-[#071813]" />
          <span>Book Table</span>
        </button>
      </div>
    </div>
  );
}
