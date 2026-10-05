# Royal Islamic Engagement & Nikah Invitation Website

An authentic, modern luxury digital invitation website created with Islamic architectural aesthetics, refined calligraphy, and an interactive guest experience.

---

## 🌟 Key Features

1. **Opening Invitation Cover Experience**:
   - Regal emerald and gold gatefold cover with Bismillah calligraphy (*بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ*).
   - "Enter Invitation" button with smooth curtain opening animation.

2. **Authentic Islamic Aesthetics & Visual Language**:
   - Curated palette: Deep Emerald Green (`#0B3B2C`), Dark Forest Green, Warm Ivory & Cream (`#FAF7F2`), and Champagne Gold accents.
   - Moorish horseshoe arch portrait frames with double gold filigree borders.
   - Subtle 8-point Islamic geometric stars (*Khatim*) and minaret/crescent silhouettes.
   - Arabic typography (`Amiri`, `Scheherazade New`) and regal serifs (`Cinzel`, `Cormorant Garamond`).
   - Zero generic or non-Islamic motifs.

3. **Holy Qur'an Verses**:
   - Primary: *"And We created you in pairs."* (وَخَلَقْنَاكُمْ أَزْوَاجًا — Surah An-Naba 78:8).
   - Secondary: Surah Ar-Rum 30:21 with accurate Arabic text and translation.

4. **Bride & Groom Cards**:
   - High-definition portrait frames with 3D hover effects.
   - Bride: Amina Fatima (Daughter of Dr. Tariq & Mrs. Yasmin Al-Mansoor).
   - Groom: Zayd Ibrahim (Son of Mr. Farooq & Mrs. Samira Rahman).

5. **Our Story Timeline**:
   - Vertical timeline with 8-point Islamic star markers celebrating the journey from Istikhara to Engagement.

6. **Live Animated Countdown Timer**:
   - Dynamic counter for Days, Hours, Minutes, and Seconds.
   - Automatic celebratory message (*"Alhamdulillah — Today is the Day!"*) upon reaching zero.

7. **Ceremony Itinerary & Event Details**:
   - Engagement Ceremony, Dua-e-Khair Gathering, and Royal Banquet cards.
   - Dynamic **"Add to Calendar"** button generating standard `.ics` calendar events for Apple Calendar, Google Calendar, and Outlook.

8. **Venue Showcase & Navigation**:
   - The Royal Al-Andalus Palace with high-res photography.
   - "Get Directions" button connecting directly to Google Maps navigation.
   - "Copy Address" button with live toast notification.
   - Embedded Google Map.

9. **Interactive Photo Gallery with Lightbox**:
   - Filterable categories: All, The Couple, The Bride, The Groom, Details, Venue.
   - Fullscreen lightbox modal with Previous/Next controls, zoom, and keyboard escape.

10. **Interactive RSVP Form**:
    - Full Name, Phone, Email, Number of Guests, Attendance ("Yes, Insha'Allah" / "Sorry, unable to attend"), and Message.
    - Saves responses to `localStorage`.
    - Instant confirmation card: *"JazakAllahu Khairan for your response."*

11. **Digital Guestbook**:
    - Guests can submit warm Du'as and blessings.
    - Interactive **"Ameen"** counter button on each message.
    - Persisted in `localStorage`.

12. **Permissible Ambient Sound**:
    - Soothing procedural acoustic ambient oud/harmonic chimes via Web Audio API.
    - **Muted by default** with a single-click toggle button.

13. **Social Sharing**:
    - WhatsApp, Facebook, X (Twitter), and Copy Link modal with pre-composed invitation messages.

14. **Baraka Closing Section**:
    - Fullscreen closing dua: *بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ* ("May Allah bless your journey together").

---

## 🛠️ How to Customize Details

All invitation text, photos, dates, parents' names, and venue addresses can be customized in a single file:

📁 **[js/config.js](file:///c:/Users/DELL/Engagement/js/config.js)**

```javascript
const INVITATION_CONFIG = {
  couple: {
    bride: {
      fullName: "Amina Fatima",
      arabicName: "أمينة فاطمة",
      fatherName: "Dr. Tariq Al-Mansoor",
      photo: "assets/images/bride.jpg"
    },
    groom: {
      fullName: "Zayd Ibrahim",
      arabicName: "زيد إبراهيم",
      fatherName: "Mr. Farooq Rahman",
      photo: "assets/images/groom.jpg"
    }
  },
  eventDate: "2026-10-24T17:30:00",
  venue: {
    name: "The Royal Al-Andalus Palace",
    address: "Palace Boulevard, Dubai, UAE"
  }
  // ...
};
```

---

## 🚀 Running Locally

You can open `index.html` directly in any web browser, or run a simple local web server:

```powershell
python -m http.server 8080
```
Then visit: `http://localhost:8080`
