export interface Dish {
  id: string;
  name: string;
  nativeName: string;
  category: 'kebabs' | 'curries' | 'biryani' | 'desserts' | 'all';
  price: number;
  description: string;
  longDescription: string;
  heritageStory: string;
  spiceLevel: 'Mild & Delicate' | 'Fragrant & Medium' | 'Robust & Spiced';
  preparation: string;
  ingredients: string[];
  pairing: string;
  isChefSpecial?: boolean;
  image: string;
  calories?: string;
  serves?: string;
}

export interface Review {
  id: string;
  author: string;
  role: string;
  rating: number;
  date: string;
  comment: string;
  favoriteDish: string;
}

export interface InstagramPost {
  id: string;
  image: string;
  likes: number;
  comments: number;
  caption: string;
  tag: string;
}

import heroBiryaniImg from '../assets/images/awadhi_royal_biryani_hero_1791915314566.jpg';
import chefPlatingImg from '../assets/images/royal_chef_plating_gourmet_1791915315982.jpg';
import murghTikkaImg from '../assets/images/kangan_murgh_tikka_1791915317436.jpg';
import shahiNihariImg from '../assets/images/shahi_nihari_curry_1791915318462.jpg';
import royalAmbianceImg from '../assets/images/royal_dining_ambiance_1791915318757.jpg';

export const IMAGES = {
  heroBiryani: heroBiryaniImg,
  chefPlating: chefPlatingImg,
  murghTikka: murghTikkaImg,
  shahiNihari: shahiNihariImg,
  royalAmbiance: royalAmbianceImg,
};

export const RESTAURANT_INFO = {
  name: "Dastarkhwan-e-Tehzeeb",
  tagline: "Experience the Legacy of Taste",
  subTagline: "The Royal Sanctuary of Awadhi & Mughlai Gastronomy",
  address: "Rather Plaza, NH-1D Srinagar-Leh Highway, Kangan, Kashmir 191202",
  phone: "+91 99063 93011",
  secondaryPhone: "+91 87150 00292",
  email: "reservations@tehzeebkangan.com",
  instagram: "@tehzeeb_kangan",
  googleMapsUrl: "https://maps.app.goo.gl/qZnEq31spPH8RZtNA",
  timings: {
    lunch: "12:30 PM – 03:45 PM",
    dinner: "07:00 PM – 11:30 PM",
    days: "Tuesday – Sunday (Mondays Royal Prep)",
    dastarkhwanSpecial: "Friday & Saturday Evenings by Prior Booking"
  }
};

export const SIGNATURE_DISHES: Dish[] = [
  {
    id: "kangan-murgh-tikka",
    name: "Kangan Murgh Tikka",
    nativeName: "कंगन मुर्ग़ टिक्का",
    category: "kebabs",
    price: 495,
    description: "Tender chicken suprêmes marinated in Kashmiri saffron, crushed shahi jeera, and cold-pressed mustard oil, blistered over mountain charcoal.",
    longDescription: "A prized recipe native to our hearth. Boneless morsels of grain-fed chicken are infused overnight in a marinade of velvety curd, raw green papaya, wild cardamom, and sun-dried Kashmiri chilies, then flame-roasted over acacia embers on iron skewers.",
    heritageStory: "Named after the historic river-valley town of Kangan, this kebab was perfected to warm travellers journeying the silk route through Kashmir with fragrant charcoal smoke and hand-ground spices.",
    spiceLevel: "Fragrant & Medium",
    preparation: "Charcoal Sigdi roasted, basted with cultured butter",
    ingredients: ["Farm Chicken", "Kashmiri Mirch", "Saffron Essence", "Hung Curd", "Smoked Mustard Oil", "Wild Mint"],
    pairing: "Kashmiri Shirmal & Pomegranate Raita",
    isChefSpecial: true,
    image: murghTikkaImg,
    calories: "380 kcal",
    serves: "2 persons"
  },
  {
    id: "shahi-nihari",
    name: "Shahi Nihari",
    nativeName: "शाही नहारी",
    category: "curries",
    price: 680,
    description: "Prime cut lamb shank gently stewed for twelve hours with fifty-two secret potli spices, served in a rich bone-marrow glossed gravy.",
    longDescription: "The crown jewel of old Lucknow and Delhi courts. Succulent shanks slow-cooked overnight in sealed copper handis over dying embers until the meat falls away at the whisper of a fork. Finished with fresh julienned ginger, crisp brown onions, and lime squeeze.",
    heritageStory: "Derived from the Arabic word 'Nahar' meaning morning, Nihari was the royal dawn breakfast of Mughal emperors and nobility during the 18th century, designed to invigorate the body in crisp alpine mornings.",
    spiceLevel: "Robust & Spiced",
    preparation: "12-hour slow braise in sealed clay-dough handi",
    ingredients: ["Tender Lamb Shank", "Bone Marrow Nalli", "Potli Masala (52 spices)", "Ghee", "Brown Shallots", "Fresh Ginger"],
    pairing: "Khamiri Roti or Roghani Kulcha",
    isChefSpecial: true,
    image: shahiNihariImg,
    calories: "620 kcal",
    serves: "2-3 persons"
  },
  {
    id: "dal-tehzeeb",
    name: "Dal Tehzeeb",
    nativeName: "दाल-ए-तहज़ीब",
    category: "curries",
    price: 385,
    description: "Slow-simmered whole black lentils with plum vine tomatoes, churned white butter, and gentle charcoal dhungar smoke.",
    longDescription: "Our signature vegetarian offering. Black Urad dal soaked and simmered for twenty-four hours over charcoal fires, whipped with cream and hand-churned mountain butter, finished with an authentic hickory and clove smoke treatment.",
    heritageStory: "An homage to the courtly 'Tehzeeb' (grace & refinement) of the Awadh kings, who believed that even the humblest pulse deserved the patient mastery of royal chefs.",
    spiceLevel: "Mild & Delicate",
    preparation: "24-hour slow coal-simmered with clove smoke",
    ingredients: ["Organic Black Urad", "Vine Tomatoes", "Hand-churned Makkhan", "Smoked Cloves", "Fenugreek Leaves"],
    pairing: "Butter Garlic Naan & Steamed Zeera Rice",
    isChefSpecial: true,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    calories: "340 kcal",
    serves: "2 persons"
  },
  {
    id: "awadhi-dum-biryani",
    name: "Nawabi Gosht Dum Biryani",
    nativeName: "नवाबी गोश्त दम बिरयानी",
    category: "biryani",
    price: 720,
    description: "Aged long-grain basmati layered with tender goat meat, perfumed with saffron, kewra water, and sealed under a purdah of dough.",
    longDescription: "True Awadhi pakki dum biryani. Fragrant rice steamed to slender elegance in the vapor of spiced mutton yakhni stock. Each grain is separate, kissed with pure saffron strands, rose water, and crispy golden birista.",
    heritageStory: "Originated in the royal kitchens of Asaf-ud-Daula in Lucknow. The royal method allowed aromatic vapours to circulate freely without losing a single trace of fragrance.",
    spiceLevel: "Fragrant & Medium",
    preparation: "Traditional Dum Pukht in heavy-bottomed copper deg",
    ingredients: ["Kashmiri Mutton", "7-Year Aged Basmati", "Kashmiri Kesar", "Kewra Floral Water", "Fried Onions"],
    pairing: "Burani Raita & Mirchi ka Salan",
    isChefSpecial: true,
    image: heroBiryaniImg,
    calories: "690 kcal",
    serves: "2-3 persons"
  },
  {
    id: "galouti-kebab",
    name: "Galouti Kebab-e-Khas",
    nativeName: "गलौटी कबाब-ए-खास",
    category: "kebabs",
    price: 540,
    description: "Melt-in-the-mouth minced lamb patties infused with raw papaya and 160 aromatic botanicals, served on mini saffron sheermal.",
    longDescription: "Finely pounded lamb ground seven times with potli spices and saffron, cooked on an inverted griddle (ulta tawa) to an impossibly silky consistency that dissolves instantaneously on the palate.",
    heritageStory: "Crafted specifically for the toothless Nawab Asad-ud-Daula, who demanded a royal kebab so tender it required zero chewing yet retained the deep royal essence.",
    spiceLevel: "Fragrant & Medium",
    preparation: "Pan-seared on inverted brass tawa with clarified ghee",
    ingredients: ["Fine Minced Lamb", "Green Papaya", "Stone Flowers", "Vetiver Root", "Rose Petals", "Pure Saffron"],
    pairing: "Mini Zafrani Sheermal & Mint Chutney",
    isChefSpecial: false,
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
    calories: "410 kcal",
    serves: "2 persons"
  },
  {
    id: "murgh-musallam",
    name: "Darbari Murgh Musallam",
    nativeName: "दरबारी मुर्ग़ मुसल्लम",
    category: "curries",
    price: 890,
    description: "Whole tender spring chicken stuffed with spiced nuts and boiled eggs, roasted in a rich almond and mace gravy.",
    longDescription: "The centerpiece of the Grand Mughal feast. A whole chicken marinated in saffron milk and whole aromatic spices, roasted to gilded bronze and served in an intoxicating almond and brown onion reduction.",
    heritageStory: "Celebrated in the Akbarnama as the ultimate courtly spectacle, presented to emperors during grand coronation feasts.",
    spiceLevel: "Robust & Spiced",
    preparation: "Spit-roasted then simmered in cashew-almond paste",
    ingredients: ["Whole Spring Chicken", "Almond Paste", "Mace", "Hard-boiled Eggs", "Cardamom Pearls"],
    pairing: "Warqi Paratha & Shirazi Salad",
    isChefSpecial: true,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
    calories: "850 kcal",
    serves: "3-4 persons"
  },
  {
    id: "shahi-tukda",
    name: "Shahi Tukda Aur Zaffrani Rabri",
    nativeName: "शाही टुकड़ा और ज़ाफ़रानी राबड़ी",
    category: "desserts",
    price: 320,
    description: "Ghee-crisped brioche steeped in cardamom saffron syrup, blanketed with slow-reduced rabri and pure edible silver varak.",
    longDescription: "Golden toasted artisan bread soaked in a fragrant sugar reduction, topped with creamy malai rabri simmered for 6 hours, crushed pistachio, and delicate 24k silver leaf.",
    heritageStory: "The crowning delight of every royal banquet across Awadh, representing the pinnacle of imperial sweetness and hospitality.",
    spiceLevel: "Mild & Delicate",
    preparation: "Clarified butter fried & chilled slow-cooked rabri",
    ingredients: ["Artisan Bread", "Cow Milk Rabri", "Pistachio Slivers", "Saffron Strands", "Silver Varak"],
    pairing: "Peshawari Kahwa with crushed green cardamom",
    isChefSpecial: false,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
    calories: "450 kcal",
    serves: "2 persons"
  },
  {
    id: "zaffrani-phirni",
    name: "Kashmiri Zaffrani Phirni",
    nativeName: "ज़ाफ़रानी फिरनी",
    category: "desserts",
    price: 260,
    description: "Slow-set ground rice pudding infused with pure Pampore saffron, served chilled in traditional unglazed terracotta shikoras.",
    longDescription: "Smooth velvety dessert made with ground basmati rice slowly cooked with whole milk, infused with real saffron and scented with Kewra water, garnished with roasted almonds.",
    heritageStory: "Served exclusively in unglazed clay pots that breathe an earthy aroma into the floral saffron notes.",
    spiceLevel: "Mild & Delicate",
    preparation: "Slow-boiled, set in terracotta bowls",
    ingredients: ["Ground Rice", "Full Fat Milk", "Pampore Saffron", "Cardamom", "Chipped Almonds"],
    pairing: "Saffron Green Tea (Kahwa)",
    isChefSpecial: false,
    image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80",
    calories: "290 kcal",
    serves: "1 person"
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: "ig-1",
    image: royalAmbianceImg,
    likes: 1420,
    comments: 86,
    caption: "The evening glow at Diwan-e-Khaas. Welcome to timeless Awadhi grandeur in the valley of Kangan. ✨ #DastarkhwanETehzeeb",
    tag: "Ambiance"
  },
  {
    id: "ig-2",
    image: heroBiryaniImg,
    likes: 2180,
    comments: 134,
    caption: "Breaking the dough seal of our 12-hour Dum Pukht Biryani. Fragrance that travels centuries. 🍚🔥",
    tag: "DumPukht"
  },
  {
    id: "ig-3",
    image: murghTikkaImg,
    likes: 1890,
    comments: 92,
    caption: "Freshly pulled from the Sigdi: Kangan Murgh Tikka with wild mint and smoked lime. 🍗🌿",
    tag: "SigdiKebab"
  },
  {
    id: "ig-4",
    image: chefPlatingImg,
    likes: 3120,
    comments: 205,
    caption: "Ustad-e-Matbakh finishing tonight’s Shahi Korma with edible 24K gold foil. A devotion to culinary craft. 👑",
    tag: "MasterChef"
  },
  {
    id: "ig-5",
    image: shahiNihariImg,
    likes: 2540,
    comments: 147,
    caption: "Slow-simmered all night, served hot with freshly baked Roghani Kulchas. Warmth for cold Himalayan winds. 🍲",
    tag: "ShahiNihari"
  },
  {
    id: "ig-6",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    likes: 1760,
    comments: 79,
    caption: "Handcrafted brass goblets and bespoke Mughal jali screens. Every detail is curated for royalty. 🕌",
    tag: "HeritageVibes"
  }
];

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    author: "Zubair Ahmad Mir",
    role: "Food Historian & Author",
    rating: 5,
    date: "October 2026",
    comment: "A genuine revival of the Lucknowi Dastarkhwan in the heart of Kashmir. The Shahi Nihari's depth of spice and marrow texture is equal to what one would find only in the finest old royal households.",
    favoriteDish: "Shahi Nihari"
  },
  {
    id: "rev-2",
    author: "Aarushi Singhania",
    role: "Culinary Critic, Delhi",
    rating: 5,
    date: "September 2026",
    comment: "The Kangan Murgh Tikka has that unmistakable smoky charcoal kiss combined with delicate saffron aromas. The ambient deep green and gold decor transports you directly into an Emperor’s private salon.",
    favoriteDish: "Kangan Murgh Tikka"
  },
  {
    id: "rev-3",
    author: "Capt. Raghav Varma",
    role: "Traveler & Food Enthusiast",
    rating: 5,
    date: "August 2026",
    comment: "We stopped at Tehzeeb while driving up to Sonamarg. The hospitality is unmatched. That Dum Biryani with the puff of scented steam when they cut the dough seal is an unforgettable memory.",
    favoriteDish: "Nawabi Gosht Dum Biryani"
  }
];

export const CULINARY_PILLARS = [
  {
    title: "Dum Pukht Alchemy",
    subtitle: "Cooking in its own steam",
    description: "Meats and basmati seal inside heavy copper vessels with kneaded dough, cooking over gentle embers so every nuance of aromatics remains trapped within the dish."
  },
  {
    title: "Potli of 52 Spices",
    subtitle: "Ancient secret formulations",
    description: "Our masalas are hand-pounded using heirloom ratios: green cardamom, rose petals, star anise, cubeb pepper, and mountain stone flowers curated across the Indian subcontinent."
  },
  {
    title: "Pampore Saffron & Ittar",
    subtitle: "Subtle royal perfumes",
    description: "We use Grade-1 saffron harvested from nearby Pampore fields alongside rare edible vetiver (khus) and screwpine (kewra) distillations to create olfactory poetry."
  },
  {
    title: "Nawabi Mehmaan-Nawazi",
    subtitle: "A legacy of gracious hosting",
    description: "To dine at Tehzeeb is to be received as an honored guest of the court. Silver-plated tableware, hand-poured rose water, and attentive yet discreet service."
  }
];
