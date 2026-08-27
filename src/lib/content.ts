export type Locale = "fr" | "en"

export const PHONE_DISPLAY = "819 346-2909"
export const PHONE_TEL = "+18193462909"
export const EMAIL = "hameltv@videotron.ca"
export const ADDRESS_LINE = "2685, rue Galt Ouest"
export const ADDRESS_CITY = "Sherbrooke, QC J1K 1L8"
export const MAPS_QUERY = "2685 Rue Galt O, Sherbrooke, QC J1K 1L8"
export const MAPS_EMBED = `https://maps.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&z=16&output=embed`
export const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`
export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/Hamel+TV+Service/@45.3874549,-71.941327,17z/data=!3m1!4b1!4m6!3m5!1s0x4cb7b357d97fd2c3:0x7c2dbfdf4f0b960c!8m2!3d45.3874512!4d-71.9387521!16s%2Fg%2F1tczk26w?entry=ttu"

export const BRANDS = [
  "Samsung",
  "LG",
  "Sony",
  "Panasonic",
  "Toshiba",
  "Sharp",
  "Philips",
  "Hisense",
  "Vizio",
  "JVC",
  "Haier",
  "Insignia",
  "Dynex",
  "Magnavox",
] as const

export const copy = {
  fr: {
    skip: "Aller au contenu",
    nav: {
      services: "Services",
      about: "À propos",
      reviews: "Avis",
      contact: "Contact",
      daisy: "À propos de Daisy",
      call: "Appeler",
      menu: "Menu",
      close: "Fermer",
    },
    lang: { label: "Langue", fr: "FR", en: "EN" },
    hero: {
      kicker: "Sherbrooke et les environs",
      title: "On répare encore ce que d’autres jettent.",
      lede: "Téléviseurs, systèmes de son et micro-ondes : Hamel TV Service diagnostique, répare et installe à l’atelier ou chez vous.",
      ctaPrimary: "Demander une estimation",
      ctaSecondary: "Voir les services",
      rating: "4,7 / 5",
      ratingNote: "sur Google · 42 avis",
      openNow: "Ouvert maintenant",
      closedNow: "Fermé pour le moment",
      hoursHint: "Lun–ven, 9 h à 17 h 30",
      photoAlt: "Téléviseur sur l’établi de réparation Hamel TV.",
    },
    services: {
      eyebrow: "Ce que nous faisons",
      title: "Réparation, installation, service à domicile.",
      intro:
        "Un atelier local qui prend le temps d’expliquer le diagnostic, et qui ne facture que ce qui est nécessaire.",
      items: [
        {
          title: "Téléviseurs",
          body: "Écrans noirs, rétroéclairage, cartes, alimentations, ports HDMI. Marques courantes et moins courantes.",
        },
        {
          title: "Installation TV murale",
          body: "Fixation au mur, cache-fils et conseils sur le support et l’emplacement qui conviennent à votre pièce.",
        },
        {
          title: "Systèmes de son",
          body: "Barres de son, home cinéma, branchements et mise en service pour que tout fonctionne du premier coup.",
        },
        {
          title: "Fours micro-ondes",
          body: "Plateau, magnétron, commandes et sécurité. Un appareil qui chauffe encore n’a pas à finir au recyclage.",
        },
        {
          title: "Appareils exerciseurs",
          body: "Tapis roulant, elliptique et vélo stationnaire : entretien et réparation à domicile.",
        },
        {
          title: "Service à domicile",
          body: "Diagnostic et réparation chez vous à Sherbrooke et dans les environs. Estimation avant de commencer.",
        },
      ],
    },
    about: {
      eyebrow: "À propos",
      title: "Un réparateur de télé, ça se fait rare. On est encore là.",
      body: [
        "Chez Hamel TV Service, nous réparons vos appareils électroniques à Sherbrooke et les environs. Pour l’installation d’une télévision ou d’un système de son, vous pouvez aussi faire appel à notre équipe.",
        "Profitez du service à domicile pour faire installer ou réparer votre téléviseur et vos appareils exerciseurs. Nous installons aussi votre télé murale et vous conseillons sur l’équipement qui répondra le mieux à vos besoins.",
      ],
      photoAlt: "Téléviseur installé au mur dans un salon, avec barre de son.",
      facts: [
        { label: "Langues", value: "Français et anglais" },
        { label: "Stationnement", value: "Accessible" },
        { label: "Devis", value: "Sur demande" },
      ],
    },
    brands: {
      eyebrow: "Marques",
      title: "Samsung, LG, Sony, et bien d’autres.",
      note: "Nous travaillons sur la plupart des téléviseurs grand public. Si votre marque n’est pas listée, appelez : on vous dira rapidement si on peut aider.",
    },
    reviews: {
      eyebrow: "Avis clients",
      title: "Honnête, précis, sans surcharge.",
      seeAll: "Voir les avis Google",
      items: [
        {
          quote:
            "J’ai fait réparer mon téléviseur Toshiba dernièrement. Le technicien est très sympathique et super compétent. C’est devenu rare, un réparateur de télévision. Je recommande.",
          name: "Patrice B.",
        },
        {
          quote:
            "Bon diagnostic, honnête, de bonnes explications, et on m’a facturé seulement ce dont j’avais besoin, aucune surcharge.",
          name: "Patrick L.",
        },
        {
          quote:
            "Réparation de ma télé à domicile, très rapide. Mario est sympathique et explique avec passion chaque étape. Je les recommande grandement.",
          name: "Daniel R.",
        },
        {
          quote:
            "Excellent service et prix pour la réparation de notre micro-ondes. Explications claires sur l’origine du problème.",
          name: "Demilaine",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Appelez, passez, ou écrivez-nous.",
      intro:
        "L’atelier est au 2685, rue Galt Ouest à Sherbrooke. Pour une estimation, décrivez l’appareil et le problème. On vous répond.",
      hoursTitle: "Horaires",
      hours: [
        { day: "Lundi", time: "9 h – 17 h 30" },
        { day: "Mardi", time: "9 h – 17 h 30" },
        { day: "Mercredi", time: "9 h – 17 h 30" },
        { day: "Jeudi", time: "9 h – 17 h 30" },
        { day: "Vendredi", time: "9 h – 17 h 30" },
        { day: "Samedi", time: "Fermé" },
        { day: "Dimanche", time: "Fermé" },
      ],
      addressTitle: "Adresse",
      directions: "Itinéraire",
      formTitle: "Demander une estimation",
      name: "Nom",
      email: "Courriel",
      phone: "Téléphone",
      phoneOptional: "facultatif",
      service: "Appareil",
      servicePlaceholder: "Choisir…",
      services: [
        "Téléviseur",
        "Installation murale",
        "Système de son",
        "Four micro-ondes",
        "Appareil exerciseur",
        "Autre",
      ],
      message: "Décrivez le problème",
      submit: "Envoyer",
      sending: "Envoi…",
      successTitle: "Message reçu.",
      successBody:
        "Merci. Pour un suivi plus rapide, n’hésitez pas à nous appeler au 819 346-2909 pendant les heures d’ouverture.",
      errorTitle: "L’envoi a échoué.",
      errorBody: "Réessayez, ou appelez-nous directement.",
      retry: "Réessayer",
      errors: {
        name: "Indiquez votre nom.",
        email: "Entrez un courriel valide.",
        phone: "Indiquez un numéro de téléphone (10 chiffres).",
        message: "Décrivez le problème en quelques mots (au moins 10 caractères).",
      },
      mapTitle: "Carte de l’atelier Hamel TV à Sherbrooke",
    },
    footer: {
      blurb: "Réparation d’appareils électroniques à Sherbrooke.",
      rights: "Tous droits réservés.",
    },
    daisy: {
      kicker: "Hamel TV Service",
      title: "À propos de Daisy",
      photoAlt: "Daisy, souriante, photographiée le 23 mars 2009.",
      back: "Retour à l’accueil",
    },
  },
  en: {
    skip: "Skip to content",
    nav: {
      services: "Services",
      about: "About",
      reviews: "Reviews",
      contact: "Contact",
      daisy: "About Daisy",
      call: "Call",
      menu: "Menu",
      close: "Close",
    },
    lang: { label: "Language", fr: "FR", en: "EN" },
    hero: {
      kicker: "Sherbrooke and nearby",
      title: "We still repair what others throw away.",
      lede: "TVs, sound systems, and microwaves: Hamel TV Service diagnoses, repairs, and installs in the shop or at your home.",
      ctaPrimary: "Request an estimate",
      ctaSecondary: "See services",
      rating: "4.7 / 5",
      ratingNote: "on Google · 42 reviews",
      openNow: "Open now",
      closedNow: "Currently closed",
      hoursHint: "Mon–Fri, 9:00 a.m. to 5:30 p.m.",
      photoAlt: "Television on the Hamel TV repair bench.",
    },
    services: {
      eyebrow: "What we do",
      title: "Repair, installation, house calls.",
      intro:
        "A local shop that takes time to explain the diagnosis, and only charges for what you actually need.",
      items: [
        {
          title: "Televisions",
          body: "Black screens, backlights, boards, power supplies, HDMI ports. Common brands and the odd ones too.",
        },
        {
          title: "Wall-mount installation",
          body: "Secure mounting, cable management, and advice on the bracket and placement that fit your room.",
        },
        {
          title: "Sound systems",
          body: "Soundbars, home theatre, hookups and setup so everything works the first time.",
        },
        {
          title: "Microwave ovens",
          body: "Turntables, magnetrons, controls, and safety. If it still heats, it doesn’t have to go to recycling.",
        },
        {
          title: "Exercise equipment",
          body: "Treadmills, ellipticals, and stationary bikes: service and repair at your home.",
        },
        {
          title: "In-home service",
          body: "Diagnosis and repair at your place in Sherbrooke and the surrounding area. Estimate before we start.",
        },
      ],
    },
    about: {
      eyebrow: "About",
      title: "TV repair shops are rare. We’re still here.",
      body: [
        "Hamel TV Service repairs electronics in Sherbrooke and nearby. You can also call us to install a television or a sound system.",
        "Use our in-home service to install or repair your TV and exercise equipment. We also mount TVs on the wall and advise on the gear that actually fits your needs.",
      ],
      photoAlt: "Wall-mounted television in a living room, with a soundbar.",
      facts: [
        { label: "Languages", value: "French and English" },
        { label: "Parking", value: "Accessible" },
        { label: "Estimates", value: "On request" },
      ],
    },
    brands: {
      eyebrow: "Brands",
      title: "Samsung, LG, Sony, and plenty more.",
      note: "We work on most consumer TVs. If your brand isn’t listed, call: we’ll tell you quickly whether we can help.",
    },
    reviews: {
      eyebrow: "Customer reviews",
      title: "Honest, precise, no padding the bill.",
      seeAll: "See Google reviews",
      items: [
        {
          quote:
            "I had my Toshiba TV repaired recently. The technician is friendly and highly skilled. TV repair people are rare these days. I recommend them.",
          name: "Patrice B.",
        },
        {
          quote:
            "Good diagnosis, honest, clear explanations, and I was only charged for what I needed, no extras.",
          name: "Patrick L.",
        },
        {
          quote:
            "In-home TV repair, very fast. Mario is friendly and walks through each step with real care. Highly recommended.",
          name: "Daniel R.",
        },
        {
          quote:
            "Excellent service and price for our microwave repair. Clear explanation of what actually went wrong.",
          name: "Demilaine",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Call, drop in, or write to us.",
      intro:
        "The shop is at 2685 Galt Street West in Sherbrooke. For an estimate, describe the device and the problem. We’ll get back to you.",
      hoursTitle: "Hours",
      hours: [
        { day: "Monday", time: "9:00 a.m. – 5:30 p.m." },
        { day: "Tuesday", time: "9:00 a.m. – 5:30 p.m." },
        { day: "Wednesday", time: "9:00 a.m. – 5:30 p.m." },
        { day: "Thursday", time: "9:00 a.m. – 5:30 p.m." },
        { day: "Friday", time: "9:00 a.m. – 5:30 p.m." },
        { day: "Saturday", time: "Closed" },
        { day: "Sunday", time: "Closed" },
      ],
      addressTitle: "Address",
      directions: "Directions",
      formTitle: "Request an estimate",
      name: "Name",
      email: "Email",
      phone: "Phone",
      phoneOptional: "optional",
      service: "Device",
      servicePlaceholder: "Choose…",
      services: [
        "Television",
        "Wall-mount installation",
        "Sound system",
        "Microwave",
        "Exercise equipment",
        "Other",
      ],
      message: "Describe the problem",
      submit: "Send",
      sending: "Sending…",
      successTitle: "Message received.",
      successBody:
        "Thank you. For a faster reply, feel free to call 819 346-2909 during business hours.",
      errorTitle: "Couldn’t send that.",
      errorBody: "Please try again, or call us directly.",
      retry: "Try again",
      errors: {
        name: "Please enter your name.",
        email: "Enter a valid email address.",
        phone: "Enter a phone number (10 digits).",
        message: "Describe the problem in a few words (at least 10 characters).",
      },
      mapTitle: "Map of the Hamel TV shop in Sherbrooke",
    },
    footer: {
      blurb: "Electronics repair in Sherbrooke.",
      rights: "All rights reserved.",
    },
    daisy: {
      kicker: "Hamel TV Service",
      title: "About Daisy",
      photoAlt: "Daisy, smiling, photographed on 23 March 2009.",
      back: "Back to the home page",
    },
  },
} as const

export type Copy = (typeof copy)[Locale]
