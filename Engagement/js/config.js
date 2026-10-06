/**
 * Muslim Engagement / Nikah Invitation Configuration
 * Couple: Ayan Malnas & Afreen Khokar
 * Venue: Haji Palace, Khaspura, Behind Urdu School, Khandwa (M.P.)
 * Date: 08 October 2026 | Time: 12:00 PM
 */
const INVITATION_CONFIG = {
  // Couple Information
  couple: {
    groom: {
      fullName: "Ayan Malnas",
      arabicName: "أيان مالناس",
      fatherName: "Akram Malnas",
      relation: "Son of Akram Malnas",
      photo: "assets/images/groom.jpg",
      bio: "A humble soul with vision and compassion. Blessed to embark on this sacred half of deen.",
      instagram: "#"
    },
    bride: {
      fullName: "Afreen Khokar",
      arabicName: "أفرين خوكر",
      fatherName: "Sultan Khokar",
      relation: "Daughter of Sultan Khokar",
      photo: "assets/images/bride.jpg",
      bio: "An architect of dreams and grace. Grounded in faith, kindness, and deep love for her family.",
      instagram: "#"
    },
    couplePhoto: "assets/images/couple.jpg",
    subtitle: "Two Hearts, One Beautiful Journey, Insha'Allah."
  },

  // Engagement Ceremony Date & Target Countdown (YYYY-MM-DDTHH:mm:ss)
  // 08 October 2026 at 12:00 PM
  eventDate: "2026-10-08T12:00:00",
  dateDisplay: "08/10/2026",
  dateFormatted: "08 October 2026",
  timeFormatted: "12:00 PM",

  // Primary Venue
  venue: {
    name: "Haji Palace",
    address: "Khaspura, Behind Urdu School, Khandwa (M.P.)",
    landmark: "Behind Urdu School, Khaspura, Khandwa (M.P.)",
    mapEmbedUrl: "https://maps.google.com/maps?q=Khaspura,+Khandwa,+Madhya+Pradesh&t=&z=15&ie=UTF8&iwloc=&output=embed",
    mapDirectLink: "https://www.google.com/maps/search/?api=1&query=Haji+Palace+Khaspura+Behind+Urdu+School+Khandwa",
    dressCode: "Modest Luxury / Traditional Formal (Emerald & Champagne Tones Welcomed)"
  },

  // Events Schedule
  events: [
    {
      id: "ceremony",
      title: "Engagement Ceremony",
      arabicTitle: "حفل الخطوبة",
      date: "08 October 2026",
      time: "12:00 PM",
      venue: "Haji Palace",
      address: "Khaspura, Behind Urdu School, Khandwa (M.P.)",
      description: "Exchange of rings, recitation of holy verses, and family blessing announcement.",
      icon: "fa-ring",
      badge: "Main Ceremony"
    },
    {
      id: "dua",
      title: "Dua-e-Khair & Gathering",
      arabicTitle: "دعاء الخير",
      date: "08 October 2026",
      time: "1:30 PM",
      venue: "Haji Palace",
      address: "Khaspura, Behind Urdu School, Khandwa (M.P.)",
      description: "A blessed gathering for prayer, seeking Allah's eternal barakah, tranquility, and guidance.",
      icon: "fa-hands-praying",
      badge: "Spiritual Gathering"
    },
    {
      id: "lunch",
      title: "Celebratory Feast & Lunch",
      arabicTitle: "مأدبة الغداء",
      date: "08 October 2026",
      time: "2:00 PM Onwards",
      venue: "Haji Palace",
      address: "Khaspura, Behind Urdu School, Khandwa (M.P.)",
      description: "An auspicious celebratory lunch served with love and hospitality for our respected guests and elders.",
      icon: "fa-utensils",
      badge: "Celebratory Feast"
    }
  ],

  // Love Story Milestones
  story: [
    {
      date: "December 2024",
      title: "The First Meeting & Istikhara",
      arabicSubtitle: "بداية الخير",
      description: "Introduced through respected family elders, our first conversation was filled with serene alignment of faith, shared values, and mutual respect. We both prayed Istikhara and felt peace in our hearts."
    },
    {
      date: "August 2025",
      title: "Family Blessings & The Proposal",
      arabicSubtitle: "بركة العائلات",
      description: "With the gracious dua and blessing of both our parents—Akram Malnas and Sultan Khokar—our families united in joy as Ayan asked for Afreen's hand in marriage."
    },
    {
      date: "October 2026",
      title: "The Engagement & Celebration",
      arabicSubtitle: "عقد القلوب",
      description: "Surrounded by our loved ones at Haji Palace, Khaspura, Behind Urdu School, Khandwa (M.P.), we commit our hearts in honor of Allah's decree: 'And We created you in pairs.' Two families officially becoming one."
    }
  ],

  // Photo Gallery Items
  gallery: [
    {
      url: "assets/images/couple.jpg",
      caption: "Ayan Malnas & Afreen Khokar — By Grace and Faith",
      category: "couple"
    },
    {
      url: "assets/images/rings.jpg",
      caption: "Sacred Symbols of Commitment & Deen",
      category: "details"
    },
    {
      url: "assets/images/groom.jpg",
      caption: "The Blessed Groom — Ayan Malnas",
      category: "groom"
    },
    {
      url: "assets/images/bride.jpg",
      caption: "The Radiant Bride — Afreen Khokar",
      category: "bride"
    },
    {
      url: "assets/images/decor.jpg",
      caption: "Celebratory Table & Royal Hospitality",
      category: "venue"
    },
    {
      url: "assets/images/venue.jpg",
      caption: "Haji Palace, Khandwa — The Auspicious Venue",
      category: "venue"
    }
  ],

  // Quran Verses
  verses: {
    primary: {
      arabic: "وَخَلَقْنَاكُمْ أَزْوَاجًا",
      english: "“And We created you in pairs.”",
      reference: "Surah An-Naba [78:8]"
    },
    secondary: {
      arabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
      english: "“And among His signs is that He created for you from yourselves spouses that you may find tranquility in them; and He placed between you affection and mercy.”",
      reference: "Surah Ar-Rum [30:21]"
    },
    closingDua: {
      arabic: "بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
      english: "“May Allah bless you, and shower His blessings upon you, and join you together in goodness.”",
      reference: "Sunan Abi Dawud 2130"
    }
  },

  // Contact Details for queries
  contact: {
    phone: "+91 98000 00000",
    email: "celebration@ayan-afreen.wedding",
    whatsapp: "+919800000000"
  },

  // Social Sharing metadata
  sharing: {
    title: "Ayan Malnas & Afreen Khokar — Engagement Invitation",
    description: "You are warmly invited to celebrate the engagement of Ayan Malnas and Afreen Khokar on 08 October 2026 at Haji Palace, Khandwa."
  }
};
