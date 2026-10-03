/**
 * =================================================================
 * CONFIGURATION UCA INNOV
 * =================================================================
 */

const SITE_CONFIG = {
  title: "UCA INNOV",
  subtitle: "Club de la Cité de l'Innovation — Université Cadi Ayyad",
  
  // Logos (en haut de la page)
  logoPath: "assets/logo-clean.png",
  logoFallback: "assets/logo.png",
  logoAlt: "UCA INNOV Logo",

  // Email & Contact
  email: "uca.innov@uca.ac.ma",

  // =================================================================
  // DIAPORAMA AUTOMATIQUE DES 12 VRAIES PHOTOS UCA INNOV
  // Défilement automatique toutes les 4 secondes
  // =================================================================
  slideshowDelay: 4000, // Temps d'affichage par image (4000ms = 4 secondes)

  backgrounds: [
    "assets/backgrounds/photo1.jpg",
    "assets/backgrounds/photo2.jpg",
    "assets/backgrounds/photo3.jpg",
    "assets/backgrounds/photo4.jpg",
    "assets/backgrounds/photo5.jpg",
    "assets/backgrounds/photo6.jpg",
    "assets/backgrounds/photo7.jpg",
    "assets/backgrounds/photo8.jpg",
    "assets/backgrounds/photo9.jpg",
    "assets/backgrounds/photo10.jpg",
    "assets/backgrounds/photo11.jpg",
    "assets/backgrounds/photo12.jpg"
  ],

  // =================================================================
  // LIENS UCA INNOV (Mise à jour officielle)
  // =================================================================
  links: [
    {
      id: "uca-innov-site",
      title: "UCA INNOV — SITE OFFICIEL",
      subtitle: "Club de la Cité de l'Innovation — Université Cadi Ayyad",
      url: "https://uca-innov-fa9508f389d2.herokuapp.com/",
      icon: "fa-solid fa-globe",
      color: "#0f766e"
    },
    {
      id: "rejoignez-nous",
      title: "REJOIGNEZ-NOUS !",
      subtitle: "Formulaire d'adhésion & recrutement UCA INNOV",
      url: "https://docs.google.com/forms/d/e/1FAIpQLScNKstV9kvwG6XfR6q3lYiC1ek6JxOv3g_3rWrauOLJJRAIKQ/viewform?usp=dialog",
      icon: "fa-solid fa-user-plus",
      color: "#10b981"
    },
    {
      id: "instagram",
      title: "UCA INNOV — INSTAGRAM",
      subtitle: "Suivez-nous sur Instagram (@uca.innov)",
      url: "https://www.instagram.com/uca.innov/",
      icon: "fa-brands fa-instagram",
      color: "#e1306c"
    },
    {
      id: "linkedin",
      title: "UCA INNOV — LINKEDIN",
      subtitle: "Suivez-nous sur LinkedIn",
      url: "https://www.linkedin.com/company/uca-innov/",
      icon: "fa-brands fa-linkedin-in",
      color: "#0a66c2"
    },
    {
      id: "email",
      title: "UCA INNOV — EMAIL",
      subtitle: "Nous écrire par e-mail (uca.innov@uca.ac.ma)",
      url: "mailto:uca.innov@uca.ac.ma",
      icon: "fa-solid fa-envelope",
      color: "#1e3a8a"
    }
  ]
};

window.SITE_CONFIG = SITE_CONFIG;
