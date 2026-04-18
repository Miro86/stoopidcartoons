import { legalTranslations } from "./legal-translations-full";

export const locales = [
  "en",
  "de",
  "fr",
  "it",
  "es",
  "pt",
  "sr",
  "hr",
  "nl",
  "pl",
  "ro",
] as const;

export const localeMeta: Record<Locale, { nativeLabel: string }> = {
  en: { nativeLabel: "English" },
  de: { nativeLabel: "Deutsch" },
  fr: { nativeLabel: "Français" },
  it: { nativeLabel: "Italiano" },
  es: { nativeLabel: "Español" },
  pt: { nativeLabel: "Português" },
  sr: { nativeLabel: "Српски" },
  hr: { nativeLabel: "Hrvatski" },
  nl: { nativeLabel: "Nederlands" },
  pl: { nativeLabel: "Polski" },
  ro: { nativeLabel: "Română" },
};

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: "English",
  de: "Deutsch",
  fr: "Français",
  it: "Italiano",
  es: "Español",
  pt: "Português",
  sr: "Српски",
  hr: "Hrvatski",
  nl: "Nederlands",
  pl: "Polski",
  ro: "Română",
};

interface TranslationShape {
  tagline: string;
  nav: {
    home: string;
    showcase: string;
    privacy: string;
    terms: string;
    contact: string;
  };
  seo: Record<string, string>;
  hero: Record<string, string>;
  stats: Array<{ value: string; label: string }>;
  about: Record<string, string>;
  services: {
    title: string;
    intro: string;
    items: Array<{ title: string; description: string }>;
  };
  showcase: {
    eyebrow: string;
    title: string;
    description: string;
    fallbackItems: Array<{ title: string; description: string; badge: string }>;
    emptyLabel: string;
    filledLabel: string;
    kindApp: string;
    kindGame: string;
    playStore: string;
    website: string;
    detailsLabel: string;
  };
  contact: Record<string, string>;
  privacy: {
    title: string;
    intro: string;
    sections: ReadonlyArray<{ title: string; body: string }>;
    disclaimer: string;
  };
  terms: {
    title: string;
    intro: string;
    sections: ReadonlyArray<{ title: string; body: string }>;
    disclaimer: string;
  };
  footer: {
    tagline: string;
    rights: string;
    switcher: string;
  };
  common: Record<string, string>;
}

export const baseTranslations = {
  en: {
    tagline: "Android apps and games with bold personality.",
    nav: {
      home: "Home",
      showcase: "Showcase",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      contact: "Contact",
    },
    seo: {
      homeTitle: "StoopidCartoons — Android Apps and Games",
      homeDescription:
        "StoopidCartoons creates Android apps and games with bold personality, clean UX, and ideas designed to be used, played, and remembered.",
      showcaseTitle: "Showcase — StoopidCartoons",
      showcaseDescription:
        "Explore StoopidCartoons's growing catalog of Android apps and games.",
      privacyTitle: "Privacy Policy — StoopidCartoons",
      privacyDescription:
        "Read the privacy information for StoopidCartoons websites, apps, and games.",
      termsTitle: "Terms of Service — StoopidCartoons",
      termsDescription:
        "Read the terms of service for StoopidCartoons products and website.",
      contactTitle: "Contact — StoopidCartoons",
      contactDescription:
        "Contact StoopidCartoons through email, Play Store, and social links.",
    },
    hero: {
      title: "Android apps and games with bold personality.",
      description:
        "At StoopidCartoons, we create playful games and useful apps that are easy to pick up, satisfying to use, and made to stand out.",
      primaryCta: "Explore our apps & games",
      secondaryCta: "Contact us",
    },
    stats: [
      { value: "20+", label: "releases and counting" },
      { value: "Android", label: "our main platform" },
      { value: "Apps", label: "built with personality" },
      { value: "New ideas", label: "always in progress" },
    ],
    about: {
      eyebrow: "About us",
      title: "A small studio making products with character.",
      description:
        "StoopidCartoons is focused on building Android apps and games that feel lively, polished, and instantly recognizable. We care about usability, visual identity, and creating products people enjoy coming back to.",
    },
    services: {
      title: "What we create",
      intro:
        "We build primarily Android apps and games today, with iOS planned for a later stage as the catalog keeps growing.",
      items: [
        {
          title: "Games that pull you in",
          description:
            "Fast, fun, and visually bold game experiences designed for replayability and personality.",
        },
        {
          title: "Apps with real purpose",
          description:
            "Useful Android apps with clean UX, smooth flows, and features that solve everyday needs.",
        },
        {
          title: "Made to stand out",
          description:
            "From icon to interface, we build products with a strong identity people recognize at a glance.",
        },
      ],
    },
    showcase: {
      eyebrow: "Our work",
      title: "Explore our apps and games.",
      description:
        "From playful games to useful mobile tools, our releases are built to entertain, help, and leave a strong first impression.",
      fallbackItems: [
        {
          title: "Action & arcade games",
          description:
            "Fast sessions, clear controls, and energetic ideas made for quick fun.",
          badge: "Game",
        },
        {
          title: "Casual & puzzle games",
          description:
            "Simple to start, satisfying to master, and built to keep players coming back.",
          badge: "Game",
        },
        {
          title: "Utility apps",
          description:
            "Practical Android tools built to be fast, clear, and genuinely useful.",
          badge: "App",
        },
        {
          title: "Productivity apps",
          description:
            "Focused mobile experiences that help users organize, create, and stay on track.",
          badge: "App",
        },
        {
          title: "Family-friendly releases",
          description:
            "Accessible products with playful design and broad appeal.",
          badge: "App",
        },
        {
          title: "Fresh experiments",
          description:
            "New concepts, prototypes, and ideas we explore as the studio keeps growing.",
          badge: "Lab",
        },
      ],
      emptyLabel: "New releases coming soon.",
      filledLabel: "20+ apps and games, and counting.",
      kindApp: "App",
      kindGame: "Game",
      playStore: "Google Play",
      website: "Website",
      detailsLabel: "View details",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let’s talk.",
      description:
        "No contact form here — just direct links for business, legal, support, and social contact.",
      email: "General email",
      legal: "Legal email",
      playStore: "Google Play developer page",
      facebook: "Facebook",
      linkedin: "LinkedIn",
      x: "X / Twitter",
      instagram: "Instagram",
      tiktok: "TikTok",
      youtube: "YouTube",
    },
    privacy: {
      title: "Privacy Policy",
      intro:
        "This page explains how StoopidCartoons may handle information related to its website, apps, games, and support channels.",
      sections: [
        {
          title: "What we collect",
          body:
            "We collect only the information needed to operate our websites, apps, analytics, and support channels. This may include device data, crash logs, store identifiers, and messages you send us.",
        },
        {
          title: "How we use information",
          body:
            "We use data to run our products, improve performance, respond to support requests, and comply with legal obligations.",
        },
        {
          title: "Third parties and processors",
          body:
            "We do not sell personal data. We may use trusted service providers such as analytics, crash reporting, hosting, or payment partners where required to operate our products.",
        },
        {
          title: "Retention",
          body:
            "We keep data only for as long as needed for the purpose it was collected, unless a longer retention period is required by law.",
        },
        {
          title: "Children’s privacy",
          body:
            "Some games and apps may be designed for broad audiences. Where a product is intended for children, we aim to reduce data collection and follow applicable platform and privacy requirements.",
        },
        {
          title: "Questions and requests",
          body:
            "If you have a privacy question, data request, or takedown request, contact us at the email listed on this website.",
        },
      ],
      disclaimer:
        "Replace this starter policy with your final app-specific policy text before publishing live legal pages.",
    },
    terms: {
      title: "Terms of Service",
      intro:
        "These starter terms apply to the StoopidCartoons website and may be adapted for individual apps or games.",
      sections: [
        {
          title: "Acceptance",
          body:
            "By using our website, apps, or games, you agree to these terms and to any product-specific rules shown inside the product or store listing.",
        },
        {
          title: "Acceptable use",
          body:
            "You may use our products only in a lawful way. You must not copy, reverse engineer, abuse, disrupt, or misuse our services or content.",
        },
        {
          title: "Intellectual property",
          body:
            "All branding, artwork, code, text, and product materials are owned by StoopidCartoons or used with permission unless stated otherwise.",
        },
        {
          title: "Availability",
          body:
            "We may change, update, pause, or discontinue products, features, or content at any time without notice.",
        },
        {
          title: "Disclaimers and liability",
          body:
            "Our products are provided on an 'as is' and 'as available' basis to the fullest extent permitted by law.",
        },
        {
          title: "Contact",
          body:
            "For legal questions, business inquiries, or rights-related requests, use the contact links listed on this website.",
        },
      ],
      disclaimer: "Have a lawyer review your final legal text before launch.",
    },
    footer: {
      tagline: "Android apps and games with bold personality.",
      rights: "All rights reserved.",
      switcher: "Language",
    },
    common: {
      backHome: "Back home",
      viewShowcase: "View showcase",
    },
  },

  de: {
    tagline: "Android-Apps und Spiele mit starker Persönlichkeit.",
    nav: {
      home: "Start",
      showcase: "Katalog",
      privacy: "Datenschutzerklärung",
      terms: "Nutzungsbedingungen",
      contact: "Kontakt",
    },
    seo: {
      homeTitle: "StoopidCartoons — Android-Apps und Spiele",
      homeDescription:
        "StoopidCartoons entwickelt Android-Apps und Spiele mit starker Persönlichkeit, klarem UX und Ideen, die genutzt, gespielt und erinnert werden.",
      showcaseTitle: "Katalog — StoopidCartoons",
      showcaseDescription:
        "Entdecke den wachsenden Katalog von Android-Apps und Spielen von StoopidCartoons.",
      privacyTitle: "Datenschutzerklärung — StoopidCartoons",
      privacyDescription:
        "Datenschutzhinweise für Websites, Apps und Spiele von StoopidCartoons.",
      termsTitle: "Nutzungsbedingungen — StoopidCartoons",
      termsDescription:
        "Nutzungsbedingungen für Produkte und Website von StoopidCartoons.",
      contactTitle: "Kontakt — StoopidCartoons",
      contactDescription:
        "Kontaktiere StoopidCartoons per E-Mail, Play Store und Social Links.",
    },
    hero: {
      title: "Android-Apps und Spiele mit starker Persönlichkeit.",
      description:
        "Bei StoopidCartoons entwickeln wir spielerische Games und nützliche Apps, die leicht zugänglich sind, Spaß machen und im Gedächtnis bleiben.",
      primaryCta: "Unsere Apps & Spiele entdecken",
      secondaryCta: "Kontakt aufnehmen",
    },
    stats: [
      { value: "20+", label: "Veröffentlichungen und mehr" },
      { value: "Android", label: "unsere Hauptplattform" },
      { value: "Apps", label: "mit Persönlichkeit gebaut" },
      { value: "Neue Ideen", label: "ständig in Arbeit" },
    ],
    about: {
      eyebrow: "Über uns",
      title: "Ein kleines Studio mit Produkten voller Charakter.",
      description:
        "StoopidCartoons entwickelt Android-Apps und Spiele, die lebendig, hochwertig und sofort wiedererkennbar wirken. Wir legen Wert auf Bedienbarkeit, visuelle Identität und Produkte, zu denen Menschen gern zurückkehren.",
    },
    services: {
      title: "Was wir entwickeln",
      intro:
        "Heute entwickeln wir vor allem Android-Apps und Spiele, während iOS zu einem späteren Zeitpunkt geplant ist, wenn der Katalog weiter wächst.",
      items: [
        {
          title: "Spiele, die mitreißen",
          description:
            "Schnelle, unterhaltsame und visuell starke Spielerlebnisse mit Wiedererkennungswert und Persönlichkeit.",
        },
        {
          title: "Apps mit echtem Nutzen",
          description:
            "Praktische Android-Apps mit klarem UX, flüssigen Abläufen und Funktionen für den Alltag.",
        },
        {
          title: "Gemacht, um aufzufallen",
          description:
            "Vom Icon bis zur Oberfläche entwickeln wir Produkte mit einer starken Identität, die man sofort erkennt.",
        },
      ],
    },
    showcase: {
      eyebrow: "Unsere Arbeit",
      title: "Entdecke unsere Apps und Spiele.",
      description:
        "Von verspielten Games bis zu nützlichen mobilen Tools sind unsere Produkte darauf ausgelegt, zu unterhalten, zu helfen und sofort positiv aufzufallen.",
      fallbackItems: [
        {
          title: "Action- und Arcade-Spiele",
          description:
            "Kurze Sessions, klare Steuerung und energiegeladene Ideen für schnellen Spielspaß.",
          badge: "Spiel",
        },
        {
          title: "Casual- und Puzzle-Spiele",
          description:
            "Einfach zu starten, befriedigend zu meistern und ideal, um immer wieder zurückzukehren.",
          badge: "Spiel",
        },
        {
          title: "Utility-Apps",
          description:
            "Praktische Android-Tools, die schnell, klar und wirklich nützlich sind.",
          badge: "App",
        },
        {
          title: "Produktivitäts-Apps",
          description:
            "Fokussierte mobile Erlebnisse, die Nutzern beim Organisieren und Arbeiten helfen.",
          badge: "App",
        },
        {
          title: "Family-friendly Releases",
          description:
            "Zugängliche Produkte mit verspieltem Design und breiter Zielgruppe.",
          badge: "App",
        },
        {
          title: "Frische Experimente",
          description:
            "Neue Konzepte, Prototypen und Ideen, die wir beim Wachstum des Studios erkunden.",
          badge: "Lab",
        },
      ],
      emptyLabel: "Neue Veröffentlichungen folgen bald.",
      filledLabel: "20+ Apps und Spiele – und es werden mehr.",
      kindApp: "App",
      kindGame: "Spiel",
      playStore: "Google Play",
      website: "Website",
      detailsLabel: "Details ansehen",
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Lass uns sprechen.",
      description:
        "Kein Formular — nur direkte Links für Business, Recht, Support und Social Media.",
      email: "Allgemeine E-Mail",
      legal: "Rechtliche E-Mail",
      playStore: "Google-Play-Entwicklerseite",
      facebook: "Facebook",
      linkedin: "LinkedIn",
      x: "X / Twitter",
      instagram: "Instagram",
      tiktok: "TikTok",
      youtube: "YouTube",
    },
    privacy: {
      title: "Datenschutzerklärung",
      intro:
        "Diese Seite erklärt, wie StoopidCartoons Informationen im Zusammenhang mit Website, Apps, Spielen und Support-Kanälen verarbeiten kann.",
      sections: [
        {
          title: "Welche Daten wir erfassen",
          body:
            "Wir erfassen nur die Informationen, die für den Betrieb unserer Websites, Apps, Analysen und Support-Kanäle erforderlich sind. Dazu können Gerätedaten, Absturzprotokolle, Store-Kennungen und Nachrichten gehören, die du uns sendest.",
        },
        {
          title: "Wie wir Daten nutzen",
          body:
            "Wir verwenden Daten, um unsere Produkte zu betreiben, die Leistung zu verbessern, Support-Anfragen zu beantworten und rechtliche Verpflichtungen einzuhalten.",
        },
        {
          title: "Dritte und Auftragsverarbeiter",
          body:
            "Wir verkaufen keine personenbezogenen Daten. Soweit für den Betrieb unserer Produkte erforderlich, können wir vertrauenswürdige Dienstleister wie Analytics-, Crash-Reporting-, Hosting- oder Zahlungspartner einsetzen.",
        },
        {
          title: "Speicherung",
          body:
            "Wir bewahren Daten nur so lange auf, wie es für den Zweck erforderlich ist, für den sie erhoben wurden, es sei denn, gesetzliche Vorgaben verlangen eine längere Aufbewahrung.",
        },
        {
          title: "Datenschutz von Kindern",
          body:
            "Einige Spiele und Apps können für ein breites Publikum bestimmt sein. Wenn ein Produkt für Kinder gedacht ist, bemühen wir uns, die Datenerhebung zu reduzieren und geltende Plattform- und Datenschutzanforderungen einzuhalten.",
        },
        {
          title: "Fragen und Anfragen",
          body:
            "Wenn du eine Datenschutzfrage, einen Datenantrag oder eine Löschanfrage hast, kontaktiere uns über die auf dieser Website angegebene E-Mail-Adresse.",
        },
      ],
      disclaimer:
        "Ersetze diese Startvorlage vor dem Livegang durch eine endgültige, produktspezifische Datenschutzerklärung.",
    },
    terms: {
      title: "Nutzungsbedingungen",
      intro:
        "Diese Startbedingungen gelten für die StoopidCartoons-Website und können für einzelne Apps oder Spiele angepasst werden.",
      sections: [
        {
          title: "Akzeptanz",
          body:
            "Durch die Nutzung unserer Website, Apps oder Spiele stimmst du diesen Bedingungen sowie allen produktspezifischen Regeln zu, die innerhalb des Produkts oder in der Store-Beschreibung angezeigt werden.",
        },
        {
          title: "Zulässige Nutzung",
          body:
            "Du darfst unsere Produkte nur rechtmäßig nutzen. Du darfst unsere Dienste oder Inhalte nicht kopieren, zurückentwickeln, missbrauchen, stören oder anderweitig missbrauchen.",
        },
        {
          title: "Geistiges Eigentum",
          body:
            "Alle Marken, Grafiken, Codes, Texte und Produktmaterialien gehören StoopidCartoons oder werden mit Genehmigung verwendet, sofern nicht anders angegeben.",
        },
        {
          title: "Verfügbarkeit",
          body:
            "Wir können Produkte, Funktionen oder Inhalte jederzeit ohne vorherige Ankündigung ändern, aktualisieren, pausieren oder einstellen.",
        },
        {
          title: "Haftungsausschluss",
          body:
            "Unsere Produkte werden im gesetzlich zulässigen Umfang ohne Gewähr und nach Verfügbarkeit bereitgestellt.",
        },
        {
          title: "Kontakt",
          body:
            "Für rechtliche Fragen, geschäftliche Anfragen oder Rechte-bezogene Anliegen nutze bitte die auf dieser Website aufgeführten Kontaktlinks.",
        },
      ],
      disclaimer:
        "Lass deine finalen Rechtstexte vor dem Start prüfen.",
    },
    footer: {
      tagline: "Android-Apps und Spiele mit starker Persönlichkeit.",
      rights: "Alle Rechte vorbehalten.",
      switcher: "Sprache",
    },
    common: {
      backHome: "Zur Startseite",
      viewShowcase: "Zum Katalog",
    },
  },

  fr: {
    tagline: "Des apps et jeux Android avec une vraie personnalité.",
    nav: {
      home: "Accueil",
      showcase: "Catalogue",
      privacy: "Politique de confidentialité",
      terms: "Conditions d’utilisation",
      contact: "Contact",
    },
    seo: {
      homeTitle: "StoopidCartoons — Applications et jeux Android",
      homeDescription:
        "StoopidCartoons crée des applications et des jeux Android avec une forte personnalité, une UX claire et des idées conçues pour être utilisées, jouées et retenues.",
      showcaseTitle: "Catalogue — StoopidCartoons",
      showcaseDescription:
        "Découvrez le catalogue croissant d’applications et de jeux Android de StoopidCartoons.",
      privacyTitle: "Politique de confidentialité — StoopidCartoons",
      privacyDescription:
        "Informations de confidentialité pour le site, les applications et les jeux de StoopidCartoons.",
      termsTitle: "Conditions d’utilisation — StoopidCartoons",
      termsDescription:
        "Conditions d’utilisation des produits et du site de StoopidCartoons.",
      contactTitle: "Contact — StoopidCartoons",
      contactDescription:
        "Contactez StoopidCartoons par e-mail, page Play Store et réseaux sociaux.",
    },
    hero: {
      title: "Des apps et jeux Android avec une vraie personnalité.",
      description:
        "Chez StoopidCartoons, nous créons des jeux ludiques et des applications utiles, faciles à prendre en main, agréables à utiliser et faites pour se démarquer.",
      primaryCta: "Découvrir nos apps et jeux",
      secondaryCta: "Nous contacter",
    },
    stats: [
      { value: "20+", label: "sorties et ça continue" },
      { value: "Android", label: "notre plateforme principale" },
      { value: "Apps", label: "avec du caractère" },
      { value: "Nouvelles idées", label: "toujours en cours" },
    ],
    about: {
      eyebrow: "À propos",
      title: "Un petit studio qui crée des produits avec du caractère.",
      description:
        "StoopidCartoons se concentre sur des apps et jeux Android vivants, soignés et immédiatement reconnaissables. Nous accordons de l’importance à l’utilisabilité, à l’identité visuelle et à des produits auxquels on aime revenir.",
    },
    services: {
      title: "Ce que nous créons",
      intro:
        "Nous développons aujourd’hui principalement des applications et jeux Android, avec iOS prévu plus tard à mesure que le catalogue grandit.",
      items: [
        {
          title: "Des jeux qui accrochent",
          description:
            "Des expériences rapides, amusantes et visuellement marquées, pensées pour donner envie de rejouer.",
        },
        {
          title: "Des apps vraiment utiles",
          description:
            "Des applications Android utiles avec une UX claire, des parcours fluides et des fonctions pensées pour le quotidien.",
        },
        {
          title: "Pensés pour se démarquer",
          description:
            "De l’icône à l’interface, nous créons des produits avec une identité forte qu’on reconnaît au premier regard.",
        },
      ],
    },
    showcase: {
      eyebrow: "Nos créations",
      title: "Explorez nos apps et nos jeux.",
      description:
        "Des jeux ludiques aux outils mobiles utiles, nos sorties sont conçues pour divertir, aider et laisser une forte première impression.",
      fallbackItems: [
        {
          title: "Jeux d’action et d’arcade",
          description:
            "Des sessions rapides, des contrôles clairs et des idées pleines d’énergie.",
          badge: "Jeu",
        },
        {
          title: "Jeux casual et puzzle",
          description:
            "Faciles à lancer, satisfaisants à maîtriser et pensés pour faire revenir les joueurs.",
          badge: "Jeu",
        },
        {
          title: "Applications utilitaires",
          description:
            "Des outils Android rapides, clairs et vraiment utiles au quotidien.",
          badge: "App",
        },
        {
          title: "Applications de productivité",
          description:
            "Des expériences mobiles ciblées pour aider les utilisateurs à organiser et avancer.",
          badge: "App",
        },
        {
          title: "Produits family-friendly",
          description:
            "Des produits accessibles avec un design ludique et une large audience.",
          badge: "App",
        },
        {
          title: "Nouvelles expérimentations",
          description:
            "Des concepts, prototypes et idées que nous explorons en faisant grandir le studio.",
          badge: "Lab",
        },
      ],
      emptyLabel: "Nouvelles sorties à venir bientôt.",
      filledLabel: "20+ apps et jeux, et ce n’est qu’un début.",
      kindApp: "App",
      kindGame: "Jeu",
      playStore: "Google Play",
      website: "Site web",
      detailsLabel: "Voir les détails",
    },
    contact: {
      eyebrow: "Contact",
      title: "Parlons-en.",
      description:
        "Pas de formulaire — uniquement des liens directs pour le business, le juridique, le support et les réseaux.",
      email: "E-mail général",
      legal: "E-mail juridique",
      playStore: "Page développeur Google Play",
      facebook: "Facebook",
      linkedin: "LinkedIn",
      x: "X / Twitter",
      instagram: "Instagram",
      tiktok: "TikTok",
      youtube: "YouTube",
    },
    privacy: {
      title: "Politique de confidentialité",
      intro:
        "Cette page explique comment StoopidCartoons peut traiter des informations liées à son site, ses applications, ses jeux et ses canaux de support.",
      sections: [
        {
          title: "Ce que nous collectons",
          body:
            "Nous collectons uniquement les informations nécessaires au fonctionnement de nos sites, applications, analyses et canaux de support. Cela peut inclure des données d’appareil, des journaux de crash, des identifiants de store et les messages que vous nous envoyez.",
        },
        {
          title: "Comment nous utilisons les informations",
          body:
            "Nous utilisons les données pour faire fonctionner nos produits, améliorer les performances, répondre aux demandes de support et respecter nos obligations légales.",
        },
        {
          title: "Tiers et prestataires",
          body:
            "Nous ne vendons pas de données personnelles. Nous pouvons faire appel à des prestataires de confiance pour l’analytics, le crash reporting, l’hébergement ou les paiements lorsque cela est nécessaire au fonctionnement de nos produits.",
        },
        {
          title: "Conservation",
          body:
            "Nous conservons les données uniquement pendant la durée nécessaire à l’objectif pour lequel elles ont été collectées, sauf si la loi impose une durée plus longue.",
        },
        {
          title: "Vie privée des enfants",
          body:
            "Certains jeux et applications peuvent être destinés à un large public. Lorsqu’un produit s’adresse aux enfants, nous cherchons à limiter la collecte de données et à respecter les exigences applicables des plateformes et de la vie privée.",
        },
        {
          title: "Questions et demandes",
          body:
            "Si vous avez une question sur la confidentialité, une demande liée à vos données ou une demande de retrait, contactez-nous à l’adresse e-mail indiquée sur ce site.",
        },
      ],
      disclaimer:
        "Remplacez cette politique de départ par votre texte juridique final avant mise en ligne.",
    },
    terms: {
      title: "Conditions d’utilisation",
      intro:
        "Ces conditions de départ s’appliquent au site StoopidCartoons et peuvent être adaptées pour chaque application ou jeu.",
      sections: [
        {
          title: "Acceptation",
          body:
            "En utilisant notre site, nos applications ou nos jeux, vous acceptez ces conditions ainsi que les éventuelles règles propres au produit affichées dans le produit ou sa fiche de store.",
        },
        {
          title: "Utilisation autorisée",
          body:
            "Vous ne pouvez utiliser nos produits que de manière légale. Vous ne devez pas copier, rétroconcevoir, détourner, perturber ou utiliser abusivement nos services ou contenus.",
        },
        {
          title: "Propriété intellectuelle",
          body:
            "Tous les éléments de marque, illustrations, codes, textes et supports produits appartiennent à StoopidCartoons ou sont utilisés avec autorisation, sauf indication contraire.",
        },
        {
          title: "Disponibilité",
          body:
            "Nous pouvons modifier, mettre à jour, suspendre ou arrêter des produits, fonctionnalités ou contenus à tout moment et sans préavis.",
        },
        {
          title: "Limitation de responsabilité",
          body:
            "Nos produits sont fournis “en l’état” et “selon disponibilité” dans les limites autorisées par la loi.",
        },
        {
          title: "Contact",
          body:
            "Pour les questions juridiques, demandes commerciales ou demandes liées aux droits, utilisez les liens de contact indiqués sur ce site.",
        },
      ],
      disclaimer:
        "Faites relire vos textes juridiques finaux avant le lancement.",
    },
    footer: {
      tagline: "Des apps et jeux Android avec une vraie personnalité.",
      rights: "Tous droits réservés.",
      switcher: "Langue",
    },
    common: {
      backHome: "Retour à l’accueil",
      viewShowcase: "Voir le catalogue",
    },
  },

  it: {
    tagline: "App e giochi Android con una forte personalità.",
    nav: {
      home: "Home",
      showcase: "Catalogo",
      privacy: "Privacy Policy",
      terms: "Termini di servizio",
      contact: "Contatti",
    },
    seo: {
      homeTitle: "StoopidCartoons — App e giochi Android",
      homeDescription:
        "StoopidCartoons crea app e giochi Android con forte personalità, UX pulita e idee pensate per essere usate, giocate e ricordate.",
      showcaseTitle: "Catalogo — StoopidCartoons",
      showcaseDescription:
        "Esplora il catalogo in crescita di app e giochi Android di StoopidCartoons.",
      privacyTitle: "Privacy Policy — StoopidCartoons",
      privacyDescription:
        "Informazioni sulla privacy per sito, app e giochi di StoopidCartoons.",
      termsTitle: "Termini di servizio — StoopidCartoons",
      termsDescription:
        "Termini di servizio per i prodotti e il sito di StoopidCartoons.",
      contactTitle: "Contatti — StoopidCartoons",
      contactDescription:
        "Contatta StoopidCartoons tramite email, pagina Play Store e social.",
    },
    hero: {
      title: "App e giochi Android con una forte personalità.",
      description:
        "In StoopidCartoons creiamo giochi divertenti e app utili, facili da usare, soddisfacenti e pensati per distinguersi.",
      primaryCta: "Scopri le nostre app e i nostri giochi",
      secondaryCta: "Contattaci",
    },
    stats: [
      { value: "20+", label: "uscite e il numero cresce" },
      { value: "Android", label: "la nostra piattaforma principale" },
      { value: "App", label: "con vero carattere" },
      { value: "Nuove idee", label: "sempre in sviluppo" },
    ],
    about: {
      eyebrow: "Chi siamo",
      title: "Un piccolo studio che crea prodotti con carattere.",
      description:
        "StoopidCartoons è focalizzato su app e giochi Android vivaci, curati e immediatamente riconoscibili. Diamo importanza all’usabilità, all’identità visiva e a prodotti a cui le persone vogliono tornare.",
    },
    services: {
      title: "Cosa creiamo",
      intro:
        "Oggi realizziamo soprattutto app e giochi Android, con iOS previsto in una fase successiva mentre il catalogo continua a crescere.",
      items: [
        {
          title: "Giochi che coinvolgono",
          description:
            "Esperienze di gioco rapide, divertenti e visivamente forti, progettate per essere rigiocate.",
        },
        {
          title: "App con uno scopo reale",
          description:
            "App Android utili con UX pulita, flussi fluidi e funzioni pensate per bisogni quotidiani.",
        },
        {
          title: "Create per emergere",
          description:
            "Dall’icona all’interfaccia, costruiamo prodotti con un’identità forte che si riconosce subito.",
        },
      ],
    },
    showcase: {
      eyebrow: "I nostri lavori",
      title: "Esplora le nostre app e i nostri giochi.",
      description:
        "Dai giochi più giocosi agli strumenti mobile utili, i nostri prodotti sono creati per intrattenere, aiutare e lasciare una forte prima impressione.",
      fallbackItems: [
        {
          title: "Giochi action e arcade",
          description:
            "Sessioni rapide, controlli chiari e idee energiche pensate per il divertimento immediato.",
          badge: "Gioco",
        },
        {
          title: "Giochi casual e puzzle",
          description:
            "Facili da iniziare, soddisfacenti da padroneggiare e progettati per far tornare i giocatori.",
          badge: "Gioco",
        },
        {
          title: "App utility",
          description:
            "Strumenti Android pratici, veloci, chiari e davvero utili ogni giorno.",
          badge: "App",
        },
        {
          title: "App di produttività",
          description:
            "Esperienze mobile focalizzate per aiutare gli utenti a organizzarsi e restare produttivi.",
          badge: "App",
        },
        {
          title: "Release family-friendly",
          description:
            "Prodotti accessibili con design giocoso e ampia attrattiva.",
          badge: "App",
        },
        {
          title: "Nuovi esperimenti",
          description:
            "Concept, prototipi e idee fresche che esploriamo mentre lo studio cresce.",
          badge: "Lab",
        },
      ],
      emptyLabel: "Nuove uscite in arrivo.",
      filledLabel: "20+ app e giochi, e il catalogo continua a crescere.",
      kindApp: "App",
      kindGame: "Gioco",
      playStore: "Google Play",
      website: "Sito web",
      detailsLabel: "Vedi dettagli",
    },
    contact: {
      eyebrow: "Contatti",
      title: "Parliamone.",
      description:
        "Nessun form — solo link diretti per business, legale, supporto e social.",
      email: "Email generale",
      legal: "Email legale",
      playStore: "Pagina sviluppatore Google Play",
      facebook: "Facebook",
      linkedin: "LinkedIn",
      x: "X / Twitter",
      instagram: "Instagram",
      tiktok: "TikTok",
      youtube: "YouTube",
    },
    privacy: {
      title: "Privacy Policy",
      intro:
        "Questa pagina spiega come StoopidCartoons può gestire le informazioni relative al sito, alle app, ai giochi e ai canali di supporto.",
      sections: [
        {
          title: "Cosa raccogliamo",
          body:
            "Raccogliamo solo le informazioni necessarie per gestire i nostri siti, le app, le analisi e i canali di supporto. Questo può includere dati del dispositivo, log di crash, identificatori dello store e i messaggi che ci invii.",
        },
        {
          title: "Come usiamo le informazioni",
          body:
            "Usiamo i dati per far funzionare i nostri prodotti, migliorare le prestazioni, rispondere alle richieste di supporto e rispettare gli obblighi legali.",
        },
        {
          title: "Terze parti e fornitori",
          body:
            "Non vendiamo dati personali. Possiamo usare fornitori affidabili per analytics, crash reporting, hosting o pagamenti quando necessario per il funzionamento dei nostri prodotti.",
        },
        {
          title: "Conservazione",
          body:
            "Conserviamo i dati solo per il tempo necessario allo scopo per cui sono stati raccolti, salvo quando la legge richiede un periodo più lungo.",
        },
        {
          title: "Privacy dei minori",
          body:
            "Alcuni giochi e app possono essere destinati a un pubblico ampio. Quando un prodotto è pensato per bambini, cerchiamo di ridurre la raccolta dati e di rispettare i requisiti applicabili della piattaforma e della privacy.",
        },
        {
          title: "Domande e richieste",
          body:
            "Se hai una domanda sulla privacy, una richiesta relativa ai dati o una richiesta di rimozione, contattaci all’indirizzo email indicato su questo sito.",
        },
      ],
      disclaimer:
        "Sostituisci questo testo iniziale con la tua informativa finale prima della pubblicazione.",
    },
    terms: {
      title: "Termini di servizio",
      intro:
        "Questi termini iniziali si applicano al sito di StoopidCartoons e possono essere adattati per singole app o giochi.",
      sections: [
        {
          title: "Accettazione",
          body:
            "Utilizzando il nostro sito, le nostre app o i nostri giochi, accetti questi termini e qualsiasi regola specifica del prodotto mostrata nel prodotto stesso o nella pagina dello store.",
        },
        {
          title: "Uso consentito",
          body:
            "Puoi usare i nostri prodotti solo in modo conforme alla legge. Non devi copiare, fare reverse engineering, abusare, interrompere o usare impropriamente i nostri servizi o contenuti.",
        },
        {
          title: "Proprietà intellettuale",
          body:
            "Tutti i marchi, le grafiche, il codice, i testi e i materiali dei prodotti appartengono a StoopidCartoons o sono usati con autorizzazione, salvo diversa indicazione.",
        },
        {
          title: "Disponibilità",
          body:
            "Possiamo modificare, aggiornare, sospendere o interrompere prodotti, funzionalità o contenuti in qualsiasi momento senza preavviso.",
        },
        {
          title: "Esclusioni di responsabilità",
          body:
            "I nostri prodotti sono forniti “così come sono” e “secondo disponibilità” nella misura massima consentita dalla legge.",
        },
        {
          title: "Contatto",
          body:
            "Per questioni legali, richieste commerciali o domande relative ai diritti, usa i link di contatto indicati su questo sito.",
        },
      ],
      disclaimer:
        "Fai revisionare i testi legali finali prima del lancio.",
    },
    footer: {
      tagline: "App e giochi Android con una forte personalità.",
      rights: "Tutti i diritti riservati.",
      switcher: "Lingua",
    },
    common: {
      backHome: "Torna alla home",
      viewShowcase: "Vai al catalogo",
    },
  },

  es: {
    tagline: "Apps y juegos para Android con mucha personalidad.",
    nav: {
      home: "Inicio",
      showcase: "Catalogo",
      privacy: "Política de privacidad",
      terms: "Términos del servicio",
      contact: "Contacto",
    },
    seo: {
      homeTitle: "StoopidCartoons — Apps y juegos para Android",
      homeDescription:
        "StoopidCartoons crea apps y juegos para Android con personalidad, UX limpia e ideas pensadas para usarse, jugarse y recordarse.",
      showcaseTitle: "Catalogo — StoopidCartoons",
      showcaseDescription:
        "Explora el catálogo en crecimiento de apps y juegos para Android de StoopidCartoons.",
      privacyTitle: "Política de privacidad — StoopidCartoons",
      privacyDescription:
        "Información de privacidad para el sitio, las apps y los juegos de StoopidCartoons.",
      termsTitle: "Términos del servicio — StoopidCartoons",
      termsDescription:
        "Términos del servicio para los productos y el sitio de StoopidCartoons.",
      contactTitle: "Contacto — StoopidCartoons",
      contactDescription:
        "Contacta con StoopidCartoons por email, Play Store y redes sociales.",
    },
    hero: {
      title: "Apps y juegos para Android con mucha personalidad.",
      description:
        "En StoopidCartoons creamos juegos divertidos y apps útiles, fáciles de usar, satisfactorias y hechas para destacar.",
      primaryCta: "Explora nuestras apps y juegos",
      secondaryCta: "Ponte en contacto",
    },
    stats: [
      { value: "20+", label: "lanzamientos y seguimos creciendo" },
      { value: "Android", label: "nuestra plataforma principal" },
      { value: "Apps", label: "hechos con carácter" },
      { value: "Nuevas ideas", label: "siempre en marcha" },
    ],
    about: {
      eyebrow: "Sobre nosotros",
      title: "Un estudio pequeño que crea productos con carácter.",
      description:
        "StoopidCartoons se enfoca en apps y juegos para Android que se sienten vivos, pulidos y reconocibles al instante. Nos importa la usabilidad, la identidad visual y crear productos a los que la gente quiera volver.",
    },
    services: {
      title: "Lo que creamos",
      intro:
        "Hoy nos centramos sobre todo en apps y juegos para Android, con iOS previsto para más adelante a medida que el catálogo siga creciendo.",
      items: [
        {
          title: "Juegos que atrapan",
          description:
            "Experiencias de juego rápidas, divertidas y visualmente fuertes, diseñadas para invitar a volver.",
        },
        {
          title: "Apps con propósito real",
          description:
            "Apps Android útiles con UX limpia, flujos fluidos y funciones pensadas para necesidades del día a día.",
        },
        {
          title: "Hechas para destacar",
          description:
            "Desde el icono hasta la interfaz, creamos productos con una identidad fuerte que se reconoce al instante.",
        },
      ],
    },
    showcase: {
      eyebrow: "Nuestro trabajo",
      title: "Explora nuestras apps y juegos.",
      description:
        "Desde juegos desenfadados hasta herramientas móviles útiles, nuestros lanzamientos están hechos para entretener, ayudar y dejar una gran primera impresión.",
      fallbackItems: [
        {
          title: "Juegos de acción y arcade",
          description:
            "Sesiones rápidas, controles claros e ideas llenas de energía para divertirse al instante.",
          badge: "Juego",
        },
        {
          title: "Juegos casual y de puzzle",
          description:
            "Fáciles de empezar, satisfactorios de dominar y pensados para que la gente vuelva.",
          badge: "Juego",
        },
        {
          title: "Apps de utilidad",
          description:
            "Herramientas Android prácticas, rápidas, claras y realmente útiles.",
          badge: "App",
        },
        {
          title: "Apps de productividad",
          description:
            "Experiencias móviles enfocadas para ayudar a organizarse y avanzar.",
          badge: "App",
        },
        {
          title: "Lanzamientos para toda la familia",
          description:
            "Productos accesibles con diseño lúdico y atractivo amplio.",
          badge: "App",
        },
        {
          title: "Nuevos experimentos",
          description:
            "Conceptos, prototipos e ideas frescas que exploramos mientras el estudio crece.",
          badge: "Lab",
        },
      ],
      emptyLabel: "Nuevos lanzamientos muy pronto.",
      filledLabel: "20+ apps y juegos, y seguimos creciendo.",
      kindApp: "App",
      kindGame: "Juego",
      playStore: "Google Play",
      website: "Sitio web",
      detailsLabel: "Ver detalles",
    },
    contact: {
      eyebrow: "Contacto",
      title: "Hablemos.",
      description:
        "Sin formulario — solo enlaces directos para negocio, legal, soporte y redes sociales.",
      email: "Email general",
      legal: "Email legal",
      playStore: "Página de desarrollador en Google Play",
      facebook: "Facebook",
      linkedin: "LinkedIn",
      x: "X / Twitter",
      instagram: "Instagram",
      tiktok: "TikTok",
      youtube: "YouTube",
    },
    privacy: {
      title: "Política de privacidad",
      intro:
        "Esta página explica cómo StoopidCartoons puede tratar información relacionada con su sitio, apps, juegos y canales de soporte.",
      sections: [
        {
          title: "Qué recopilamos",
          body:
            "Recopilamos solo la información necesaria para operar nuestros sitios web, apps, analítica y canales de soporte. Esto puede incluir datos del dispositivo, registros de fallos, identificadores de tienda y los mensajes que nos envías.",
        },
        {
          title: "Cómo usamos la información",
          body:
            "Usamos los datos para operar nuestros productos, mejorar el rendimiento, responder a solicitudes de soporte y cumplir con obligaciones legales.",
        },
        {
          title: "Terceros y proveedores",
          body:
            "No vendemos datos personales. Podemos usar proveedores de confianza para analítica, informes de fallos, alojamiento o pagos cuando sea necesario para operar nuestros productos.",
        },
        {
          title: "Retención",
          body:
            "Conservamos los datos solo durante el tiempo necesario para el propósito con el que fueron recopilados, salvo que la ley exija un período mayor.",
        },
        {
          title: "Privacidad infantil",
          body:
            "Algunos juegos y apps pueden estar diseñados para audiencias amplias. Cuando un producto está destinado a menores, intentamos reducir la recopilación de datos y seguir los requisitos aplicables de plataforma y privacidad.",
        },
        {
          title: "Preguntas y solicitudes",
          body:
            "Si tienes una pregunta de privacidad, una solicitud de datos o una solicitud de retirada, contáctanos al email indicado en este sitio.",
        },
      ],
      disclaimer:
        "Sustituye este texto inicial por tu política final antes de publicar.",
    },
    terms: {
      title: "Términos del servicio",
      intro:
        "Estos términos iniciales se aplican al sitio de StoopidCartoons y pueden adaptarse para apps o juegos concretos.",
      sections: [
        {
          title: "Aceptación",
          body:
            "Al usar nuestro sitio web, apps o juegos, aceptas estos términos y cualquier regla específica del producto que se muestre dentro del producto o en la ficha de la tienda.",
        },
        {
          title: "Uso aceptable",
          body:
            "Solo puedes usar nuestros productos de forma legal. No debes copiar, realizar ingeniería inversa, abusar, interrumpir ni hacer un uso indebido de nuestros servicios o contenidos.",
        },
        {
          title: "Propiedad intelectual",
          body:
            "Toda la marca, ilustraciones, código, texto y materiales del producto pertenecen a StoopidCartoons o se usan con permiso, salvo que se indique lo contrario.",
        },
        {
          title: "Disponibilidad",
          body:
            "Podemos cambiar, actualizar, pausar o interrumpir productos, funciones o contenido en cualquier momento y sin previo aviso.",
        },
        {
          title: "Descargos y responsabilidad",
          body:
            "Nuestros productos se ofrecen “tal cual” y “según disponibilidad” en la máxima medida permitida por la ley.",
        },
        {
          title: "Contacto",
          body:
            "Para preguntas legales, consultas comerciales o solicitudes relacionadas con derechos, usa los enlaces de contacto indicados en este sitio.",
        },
      ],
      disclaimer:
        "Haz revisar los textos legales finales antes del lanzamiento.",
    },
    footer: {
      tagline: "Apps y juegos para Android con mucha personalidad.",
      rights: "Todos los derechos reservados.",
      switcher: "Idioma",
    },
    common: {
      backHome: "Volver al inicio",
      viewShowcase: "Ver catalogo",
    },
  },

  pt: {
    tagline: "Apps e jogos Android com personalidade forte.",
    nav: {
      home: "Início",
      showcase: "Catalogo",
      privacy: "Política de privacidade",
      terms: "Termos de serviço",
      contact: "Contacto",
    },
    seo: {
      homeTitle: "StoopidCartoons — Apps e jogos Android",
      homeDescription:
        "A StoopidCartoons cria apps e jogos Android com personalidade forte, UX limpa e ideias feitas para serem usadas, jogadas e lembradas.",
      showcaseTitle: "Catalogo — StoopidCartoons",
      showcaseDescription:
        "Explora o catálogo em crescimento de apps e jogos Android da StoopidCartoons.",
      privacyTitle: "Política de privacidade — StoopidCartoons",
      privacyDescription:
        "Informações de privacidade para o site, apps e jogos da StoopidCartoons.",
      termsTitle: "Termos de serviço — StoopidCartoons",
      termsDescription:
        "Termos de serviço dos produtos e do site da StoopidCartoons.",
      contactTitle: "Contacto — StoopidCartoons",
      contactDescription:
        "Contacta a StoopidCartoons por email, Play Store e redes sociais.",
    },
    hero: {
      title: "Apps e jogos Android com personalidade forte.",
      description:
        "Na StoopidCartoons criamos jogos divertidos e apps úteis, fáceis de usar, satisfatórios e feitos para se destacar.",
      primaryCta: "Explorar os nossos apps e jogos",
      secondaryCta: "Entrar em contacto",
    },
    stats: [
      { value: "20+", label: "lançamentos e a crescer" },
      { value: "Android", label: "a nossa plataforma principal" },
      { value: "Apps", label: "feitos com carácter" },
      { value: "Novas ideias", label: "sempre em andamento" },
    ],
    about: {
      eyebrow: "Sobre nós",
      title: "Um pequeno estúdio a criar produtos com carácter.",
      description:
        "A StoopidCartoons está focada em apps e jogos Android vivos, bem-acabados e imediatamente reconhecíveis. Valorizamos a usabilidade, a identidade visual e produtos aos quais as pessoas gostam de voltar.",
    },
    services: {
      title: "O que criamos",
      intro:
        "Hoje criamos sobretudo apps e jogos Android, com iOS planeado para mais tarde à medida que o catálogo continua a crescer.",
      items: [
        {
          title: "Jogos que prendem",
          description:
            "Experiências de jogo rápidas, divertidas e visualmente marcantes, feitas para dar vontade de voltar.",
        },
        {
          title: "Apps com utilidade real",
          description:
            "Apps Android úteis com UX limpa, fluxos suaves e funcionalidades pensadas para necessidades do dia a dia.",
        },
        {
          title: "Feitos para se destacar",
          description:
            "Do ícone à interface, criamos produtos com uma identidade forte que se reconhece de imediato.",
        },
      ],
    },
    showcase: {
      eyebrow: "O nosso trabalho",
      title: "Explora os nossos apps e jogos.",
      description:
        "De jogos descontraídos a ferramentas móveis úteis, os nossos lançamentos são feitos para entreter, ajudar e causar uma forte primeira impressão.",
      fallbackItems: [
        {
          title: "Jogos de ação e arcade",
          description:
            "Sessões rápidas, controlos claros e ideias cheias de energia para diversão imediata.",
          badge: "Jogo",
        },
        {
          title: "Jogos casuais e puzzle",
          description:
            "Fáceis de começar, satisfatórios de dominar e pensados para fazer os jogadores voltar.",
          badge: "Jogo",
        },
        {
          title: "Apps utilitárias",
          description:
            "Ferramentas Android práticas, rápidas, claras e realmente úteis.",
          badge: "App",
        },
        {
          title: "Apps de produtividade",
          description:
            "Experiências mobile focadas para ajudar a organizar e manter o ritmo.",
          badge: "App",
        },
        {
          title: "Lançamentos family-friendly",
          description:
            "Produtos acessíveis com design divertido e apelo amplo.",
          badge: "App",
        },
        {
          title: "Novas experiências",
          description:
            "Conceitos, protótipos e ideias frescas que exploramos enquanto o estúdio cresce.",
          badge: "Lab",
        },
      ],
      emptyLabel: "Novos lançamentos em breve.",
      filledLabel: "20+ apps e jogos, e sempre a crescer.",
      kindApp: "App",
      kindGame: "Jogo",
      playStore: "Google Play",
      website: "Website",
      detailsLabel: "Ver detalhes",
    },
    contact: {
      eyebrow: "Contacto",
      title: "Vamos falar.",
      description:
        "Sem formulário — apenas links diretos para negócio, legal, suporte e redes sociais.",
      email: "Email geral",
      legal: "Email legal",
      playStore: "Página de programador Google Play",
      facebook: "Facebook",
      linkedin: "LinkedIn",
      x: "X / Twitter",
      instagram: "Instagram",
      tiktok: "TikTok",
      youtube: "YouTube",
    },
    privacy: {
      title: "Política de privacidade",
      intro:
        "Esta página explica como a StoopidCartoons pode tratar informações relacionadas com o seu site, apps, jogos e canais de suporte.",
      sections: [
        {
          title: "O que recolhemos",
          body:
            "Recolhemos apenas as informações necessárias para operar os nossos sites, apps, análises e canais de suporte. Isto pode incluir dados do dispositivo, registos de falhas, identificadores da loja e mensagens que nos envias.",
        },
        {
          title: "Como usamos as informações",
          body:
            "Usamos dados para operar os nossos produtos, melhorar o desempenho, responder a pedidos de suporte e cumprir obrigações legais.",
        },
        {
          title: "Terceiros e fornecedores",
          body:
            "Não vendemos dados pessoais. Podemos usar fornecedores de confiança para analytics, crash reporting, alojamento ou pagamentos quando isso for necessário para operar os nossos produtos.",
        },
        {
          title: "Retenção",
          body:
            "Mantemos os dados apenas pelo tempo necessário para a finalidade para a qual foram recolhidos, salvo quando a lei exigir um período mais longo.",
        },
        {
          title: "Privacidade infantil",
          body:
            "Alguns jogos e apps podem ser concebidos para públicos amplos. Quando um produto é destinado a crianças, procuramos reduzir a recolha de dados e seguir os requisitos aplicáveis da plataforma e da privacidade.",
        },
        {
          title: "Perguntas e pedidos",
          body:
            "Se tiveres uma pergunta de privacidade, um pedido de dados ou um pedido de remoção, contacta-nos através do email indicado neste site.",
        },
      ],
      disclaimer:
        "Substitui este texto inicial pela tua política final antes de publicar.",
    },
    terms: {
      title: "Termos de serviço",
      intro:
        "Estes termos iniciais aplicam-se ao site da StoopidCartoons e podem ser adaptados para apps ou jogos específicos.",
      sections: [
        {
          title: "Aceitação",
          body:
            "Ao utilizares o nosso site, apps ou jogos, concordas com estes termos e com quaisquer regras específicas do produto apresentadas dentro do produto ou na respetiva página da loja.",
        },
        {
          title: "Uso aceitável",
          body:
            "Só podes usar os nossos produtos de forma legal. Não deves copiar, fazer engenharia inversa, abusar, interromper ou fazer uso indevido dos nossos serviços ou conteúdos.",
        },
        {
          title: "Propriedade intelectual",
          body:
            "Toda a marca, arte, código, texto e materiais do produto pertencem à StoopidCartoons ou são usados com permissão, salvo indicação em contrário.",
        },
        {
          title: "Disponibilidade",
          body:
            "Podemos alterar, atualizar, pausar ou descontinuar produtos, funcionalidades ou conteúdos a qualquer momento sem aviso prévio.",
        },
        {
          title: "Isenções e responsabilidade",
          body:
            "Os nossos produtos são fornecidos “tal como estão” e “conforme disponíveis”, na máxima medida permitida por lei.",
        },
        {
          title: "Contacto",
          body:
            "Para questões legais, pedidos comerciais ou assuntos relacionados com direitos, usa os links de contacto listados neste site.",
        },
      ],
      disclaimer:
        "Revê os textos legais finais antes do lançamento.",
    },
    footer: {
      tagline: "Apps e jogos Android com personalidade forte.",
      rights: "Todos os direitos reservados.",
      switcher: "Idioma",
    },
    common: {
      backHome: "Voltar ao início",
      viewShowcase: "Ver catalogo",
    },
  },

  sr: {
    tagline: "Андроид апликације и игре са јаким карактером.",
    nav: {
      home: "Почетна",
      showcase: "Каталог",
      privacy: "Политика приватности",
      terms: "Услови коришћења",
      contact: "Контакт",
    },
    seo: {
      homeTitle: "StoopidCartoons — Андроид апликације и игре",
      homeDescription:
        "StoopidCartoons прави Андроид апликације и игре са карактером, јасним корисничким искуством и идејама које су направљене да се користе, играју и памте.",
      showcaseTitle: "Каталог — StoopidCartoons",
      showcaseDescription:
        "Истражи растући каталог Андроид апликација и игара које прави StoopidCartoons.",
      privacyTitle: "Политика приватности — StoopidCartoons",
      privacyDescription:
        "Информације о приватности за StoopidCartoons сајт, апликације и игре.",
      termsTitle: "Услови коришћења — StoopidCartoons",
      termsDescription:
        "Услови коришћења за StoopidCartoons производе и сајт.",
      contactTitle: "Контакт — StoopidCartoons",
      contactDescription:
        "Контактирај StoopidCartoons путем мејла, Google Play странице и друштвених мрежа.",
    },
    hero: {
      title: "Андроид апликације и игре са јаким карактером.",
      description:
        "У StoopidCartoons-у правимо забавне игре и корисне апликације које су лаке за коришћење, пријатне и направљене да се издвоје.",
      primaryCta: "Погледај наше апликације и игре",
      secondaryCta: "Контактирај нас",
    },
    stats: [
      { value: "20+", label: "издања и број расте" },
      { value: "Андроид", label: "наша главна платформа" },
      { value: "Апликације", label: "са карактером" },
      { value: "Нове идеје", label: "увек у настајању" },
    ],
    about: {
      eyebrow: "О нама",
      title: "Мали студио који прави производе са карактером.",
      description:
        "StoopidCartoons је фокусиран на Андроид апликације и игре које делују живо, углађено и одмах препознатљиво. Важни су нам употребљивост, визуелни идентитет и производи којима се људи радо враћају.",
    },
    services: {
      title: "Шта правимо",
      intro:
        "Данас правимо пре свега Андроид апликације и игре, док је iOS планиран за каснију фазу како каталог буде растао.",
      items: [
        {
          title: "Игре које привлаче",
          description:
            "Брза, забавна и визуелно јака гејминг искуства направљена за враћање и препознатљив карактер.",
        },
        {
          title: "Апликације са правом сврхом",
          description:
            "Корисне Андроид апликације са јасним корисничким искуством, глатким током и функцијама за свакодневне потребе.",
        },
        {
          title: "Направљено да се издвоји",
          description:
            "Од иконице до интерфејса, градимо производе са снажним идентитетом који се одмах препознаје.",
        },
      ],
    },
    showcase: {
      eyebrow: "Наши радови",
      title: "Истражи наше апликације и игре.",
      description:
        "Од разиграних игара до корисних мобилних алата, наша издања су направљена да забаве, помогну и оставе снажан први утисак.",
      fallbackItems: [
        {
          title: "Акционе и аркадне игре",
          description:
            "Брзе сесије, јасне контроле и енергичне идеје за тренутну забаву.",
          badge: "Игра",
        },
        {
          title: "Лежерне игре и слагалице",
          description:
            "Лако се почињу, пријатне су за савладавање и прављене су да играчи пожеле да се врате.",
          badge: "Игра",
        },
        {
          title: "Помоћне апликације",
          description:
            "Практични Андроид алати који су брзи, јасни и заиста корисни.",
          badge: "Апликација",
        },
        {
          title: "Продуктивне апликације",
          description:
            "Фокусирана мобилна искуства која помажу корисницима да организују обавезе и остану у току.",
          badge: "Апликација",
        },
        {
          title: "Породична издања",
          description:
            "Приступачни производи са разиграним дизајном и широком привлачношћу.",
          badge: "Апликација",
        },
        {
          title: "Нови експерименти",
          description:
            "Свежи концепти, прототипи и идеје које истражујемо док студио расте.",
          badge: "Лаб",
        },
      ],
      emptyLabel: "Нова издања ускоро стижу.",
      filledLabel: "20+ апликација и игара, и број расте.",
      kindApp: "Апликација",
      kindGame: "Игра",
      playStore: "Google Play",
      website: "Веб сајт",
      detailsLabel: "Погледај детаље",
    },
    contact: {
      eyebrow: "Контакт",
      title: "Хајде да причамо.",
      description:
        "Нема контакт форме — само директни линкови за бизнис, правна питања, подршку и друштвене мреже.",
      email: "Општи мејл",
      legal: "Правни мејл",
      playStore: "Google Play страница за програмере",
      facebook: "Facebook",
      linkedin: "LinkedIn",
      x: "X / Twitter",
      instagram: "Instagram",
      tiktok: "TikTok",
      youtube: "YouTube",
    },
    privacy: {
      title: "Политика приватности",
      intro:
        "Ова страница објашњава како StoopidCartoons може обрађивати информације везане за свој сајт, апликације, игре и канале подршке.",
      sections: [
        {
          title: "Шта прикупљамо",
          body:
            "Прикупљамо само информације које су потребне за рад наших сајтова, апликација, аналитике и канала подршке. То може укључивати податке о уређају, логове о падовима, идентификаторе продавнице и поруке које нам шаљеш.",
        },
        {
          title: "Како користимо информације",
          body:
            "Податке користимо да бисмо покретали наше производе, унапређивали перформансе, одговарали на захтеве за подршку и поштовали законске обавезе.",
        },
        {
          title: "Треће стране и партнери",
          body:
            "Не продајемо личне податке. Можемо користити поуздане пружаоце услуга за аналитику, извештавање о падовима, хостинг или плаћања када је то потребно за рад наших производа.",
        },
        {
          title: "Чување података",
          body:
            "Податке чувамо само онолико дуго колико је потребно за сврху због које су прикупљени, осим ако закон не захтева дужи рок чувања.",
        },
        {
          title: "Приватност деце",
          body:
            "Неке игре и апликације могу бити намењене широј публици. Када је производ намењен деци, трудимо се да смањимо прикупљање података и поштујемо важеће захтеве платформи и приватности.",
        },
        {
          title: "Питања и захтеви",
          body:
            "Ако имаш питање о приватности, захтев за податке или захтев за уклањање садржаја, контактирај нас путем мејла наведеног на овом сајту.",
        },
      ],
      disclaimer:
        "Замени ову почетну верзију коначним текстом политике приватности пре објаве.",
    },
    terms: {
      title: "Услови коришћења",
      intro:
        "Ови почетни услови важе за StoopidCartoons сајт и могу се прилагодити за појединачне апликације или игре.",
      sections: [
        {
          title: "Прихватање",
          body:
            "Коришћењем нашег сајта, апликација или игара прихваташ ове услове и сва правила специфична за производ приказана унутар производа или на страници продавнице.",
        },
        {
          title: "Дозвољено коришћење",
          body:
            "Наше производе можеш користити само на законит начин. Не смеш копирати, вршити реверзни инжењеринг, злоупотребљавати, ометати или непрописно користити наше услуге или садржај.",
        },
        {
          title: "Интелектуално власништво",
          body:
            "Сав брендинг, илустрације, код, текст и материјали производа припадају StoopidCartoons-у или се користе уз дозволу, осим ако није другачије наведено.",
        },
        {
          title: "Доступност",
          body:
            "Можемо мењати, ажурирати, паузирати или укинути производе, функције или садржај у било ком тренутку без претходне најаве.",
        },
        {
          title: "Одрицање од одговорности",
          body:
            "Наши производи се пружају по принципу “такви какви јесу” и “у складу са доступношћу”, у највећој мери дозвољеној законом.",
        },
        {
          title: "Контакт",
          body:
            "За правна питања, пословне упите или захтеве везане за права користи контакт линкове наведене на овом сајту.",
        },
      ],
      disclaimer:
        "Нека правник прегледа коначни текст пре објаве.",
    },
    footer: {
      tagline: "Андроид апликације и игре са јаким карактером.",
      rights: "Сва права задржана.",
      switcher: "Језик",
    },
    common: {
      backHome: "Назад на почетну",
      viewShowcase: "Погледај каталог",
    },
  },

  hr: {
    tagline: "Android aplikacije i igre sa snažnim karakterom.",
    nav: {
      home: "Početna",
      showcase: "Katalog",
      privacy: "Pravila privatnosti",
      terms: "Uvjeti korištenja",
      contact: "Kontakt",
    },
    seo: {
      homeTitle: "StoopidCartoons — Android aplikacije i igre",
      homeDescription:
        "StoopidCartoons izrađuje Android aplikacije i igre sa snažnim karakterom, čistim UX-om i idejama koje su stvorene da se koriste, igraju i pamte.",
      showcaseTitle: "Katalog — StoopidCartoons",
      showcaseDescription:
        "Istraži rastući katalog Android aplikacija i igara koje izrađuje StoopidCartoons.",
      privacyTitle: "Pravila privatnosti — StoopidCartoons",
      privacyDescription:
        "Informacije o privatnosti za StoopidCartoons web stranicu, aplikacije i igre.",
      termsTitle: "Uvjeti korištenja — StoopidCartoons",
      termsDescription:
        "Uvjeti korištenja za StoopidCartoons proizvode i web stranicu.",
      contactTitle: "Kontakt — StoopidCartoons",
      contactDescription:
        "Kontaktiraj StoopidCartoons putem emaila, Play Store stranice i društvenih mreža.",
    },
    hero: {
      title: "Android aplikacije i igre sa snažnim karakterom.",
      description:
        "U StoopidCartoonsu radimo zabavne igre i korisne aplikacije koje su jednostavne za korištenje, ugodne i napravljene da se istaknu.",
      primaryCta: "Istraži naše aplikacije i igre",
      secondaryCta: "Javi nam se",
    },
    stats: [
      { value: "20+", label: "izdanja i broj raste" },
      { value: "Android", label: "naša glavna platforma" },
      { value: "Aplikacije", label: "s karakterom" },
      { value: "Nove ideje", label: "stalno u nastajanju" },
    ],
    about: {
      eyebrow: "O nama",
      title: "Mali studio koji stvara proizvode s karakterom.",
      description:
        "StoopidCartoons je fokusiran na Android aplikacije i igre koje djeluju živo, uglađeno i odmah prepoznatljivo. Važni su nam upotrebljivost, vizualni identitet i proizvodi kojima se ljudi vole vraćati.",
    },
    services: {
      title: "Što stvaramo",
      intro:
        "Danas stvaramo prvenstveno Android aplikacije i igre, dok je iOS planiran za kasniju fazu kako katalog bude rastao.",
      items: [
        {
          title: "Igre koje privlače",
          description:
            "Brza, zabavna i vizualno upečatljiva gaming iskustva stvorena za ponovno igranje i prepoznatljiv karakter.",
        },
        {
          title: "Aplikacije s pravom svrhom",
          description:
            "Korisne Android aplikacije s čistim UX-om, glatkim tokom i funkcijama za svakodnevne potrebe.",
        },
        {
          title: "Stvoreno da se istakne",
          description:
            "Od ikone do sučelja, gradimo proizvode sa snažnim identitetom koji se odmah prepoznaje.",
        },
      ],
    },
    showcase: {
      eyebrow: "Naši radovi",
      title: "Istraži naše aplikacije i igre.",
      description:
        "Od razigranih igara do korisnih mobilnih alata, naša izdanja stvorena su da zabave, pomognu i ostave snažan prvi dojam.",
      fallbackItems: [
        {
          title: "Akcijske i arkadne igre",
          description:
            "Brze sesije, jasne kontrole i energične ideje za trenutačnu zabavu.",
          badge: "Igra",
        },
        {
          title: "Casual i puzzle igre",
          description:
            "Lako ih je započeti, zadovoljavajuće ih je svladati i napravljene su da se igrači vraćaju.",
          badge: "Igra",
        },
        {
          title: "Utility aplikacije",
          description:
            "Praktični Android alati koji su brzi, jasni i zaista korisni.",
          badge: "Aplikacija",
        },
        {
          title: "Produktivne aplikacije",
          description:
            "Fokusirana mobilna iskustva koja pomažu korisnicima da se organiziraju i ostanu u toku.",
          badge: "Aplikacija",
        },
        {
          title: "Obiteljska izdanja",
          description:
            "Pristupačni proizvodi s razigranim dizajnom i širokom privlačnošću.",
          badge: "Aplikacija",
        },
        {
          title: "Novi eksperimenti",
          description:
            "Svježi koncepti, prototipi i ideje koje istražujemo dok studio raste.",
          badge: "Lab",
        },
      ],
      emptyLabel: "Nova izdanja uskoro dolaze.",
      filledLabel: "20+ aplikacija i igara, i broj stalno raste.",
      kindApp: "Aplikacija",
      kindGame: "Igra",
      playStore: "Google Play",
      website: "Web stranica",
      detailsLabel: "Pogledaj detalje",
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Idemo razgovarati.",
      description:
        "Nema kontakt forme — samo direktni linkovi za biznis, pravna pitanja, podršku i društvene mreže.",
      email: "Opći email",
      legal: "Pravni email",
      playStore: "Google Play developer stranica",
      facebook: "Facebook",
      linkedin: "LinkedIn",
      x: "X / Twitter",
      instagram: "Instagram",
      tiktok: "TikTok",
      youtube: "YouTube",
    },
    privacy: {
      title: "Pravila privatnosti",
      intro:
        "Ova stranica objašnjava kako StoopidCartoons može obrađivati informacije vezane uz svoju web stranicu, aplikacije, igre i kanale podrške.",
      sections: [
        {
          title: "Što prikupljamo",
          body:
            "Prikupljamo samo informacije potrebne za rad naših web stranica, aplikacija, analitike i kanala podrške. To može uključivati podatke o uređaju, zapise o rušenju aplikacije, identifikatore trgovine i poruke koje nam šalješ.",
        },
        {
          title: "Kako koristimo informacije",
          body:
            "Podatke koristimo za rad naših proizvoda, poboljšanje performansi, odgovaranje na zahtjeve za podršku i ispunjavanje zakonskih obveza.",
        },
        {
          title: "Treće strane i partneri",
          body:
            "Ne prodajemo osobne podatke. Možemo koristiti pouzdane pružatelje usluga za analitiku, prijavu rušenja, hosting ili plaćanja kada je to potrebno za rad naših proizvoda.",
        },
        {
          title: "Zadržavanje podataka",
          body:
            "Podatke zadržavamo samo onoliko dugo koliko je potrebno za svrhu za koju su prikupljeni, osim ako zakon ne zahtijeva dulje razdoblje čuvanja.",
        },
        {
          title: "Privatnost djece",
          body:
            "Neke igre i aplikacije mogu biti namijenjene široj publici. Kada je proizvod namijenjen djeci, nastojimo smanjiti prikupljanje podataka i slijediti primjenjive zahtjeve platforme i privatnosti.",
        },
        {
          title: "Pitanja i zahtjevi",
          body:
            "Ako imaš pitanje o privatnosti, zahtjev za podacima ili zahtjev za uklanjanje sadržaja, kontaktiraj nas putem emaila navedenog na ovoj stranici.",
        },
      ],
      disclaimer:
        "Zamijeni ovu početnu verziju konačnim tekstom pravila privatnosti prije objave.",
    },
    terms: {
      title: "Uvjeti korištenja",
      intro:
        "Ovi početni uvjeti vrijede za StoopidCartoons web stranicu i mogu se prilagoditi za pojedinačne aplikacije ili igre.",
      sections: [
        {
          title: "Prihvaćanje",
          body:
            "Korištenjem naše web stranice, aplikacija ili igara prihvaćaš ove uvjete i sva pravila specifična za proizvod prikazana unutar proizvoda ili na stranici trgovine.",
        },
        {
          title: "Dopušteno korištenje",
          body:
            "Naše proizvode smiješ koristiti samo na zakonit način. Ne smiješ kopirati, raditi reverzni inženjering, zloupotrebljavati, ometati ili nepropisno koristiti naše usluge ili sadržaj.",
        },
        {
          title: "Intelektualno vlasništvo",
          body:
            "Sav branding, ilustracije, kod, tekst i materijali proizvoda pripadaju StoopidCartoonsu ili se koriste uz dopuštenje, osim ako nije drukčije navedeno.",
        },
        {
          title: "Dostupnost",
          body:
            "Možemo mijenjati, ažurirati, pauzirati ili ukinuti proizvode, značajke ili sadržaj u bilo kojem trenutku bez prethodne najave.",
        },
        {
          title: "Odricanje odgovornosti",
          body:
            "Naši proizvodi pružaju se po načelu “takvi kakvi jesu” i “ovisno o dostupnosti”, u najvećoj mjeri dopuštenoj zakonom.",
        },
        {
          title: "Kontakt",
          body:
            "Za pravna pitanja, poslovne upite ili zahtjeve povezane s pravima, koristi kontakt linkove navedene na ovoj stranici.",
        },
      ],
      disclaimer:
        "Neka pravnik pregleda konačni tekst prije objave.",
    },
    footer: {
      tagline: "Android aplikacije i igre sa snažnim karakterom.",
      rights: "Sva prava pridržana.",
      switcher: "Jezik",
    },
    common: {
      backHome: "Natrag na početnu",
      viewShowcase: "Pogledaj katalog",
    },
  },

  nl: {
    tagline: "Android-apps en games met een sterke persoonlijkheid.",
    nav: {
      home: "Home",
      showcase: "Catalogus",
      privacy: "Privacybeleid",
      terms: "Servicevoorwaarden",
      contact: "Contact",
    },
    seo: {
      homeTitle: "StoopidCartoons — Android-apps en games",
      homeDescription:
        "StoopidCartoons maakt Android-apps en games met een sterke persoonlijkheid, een heldere UX en ideeën die gemaakt zijn om gebruikt, gespeeld en onthouden te worden.",
      showcaseTitle: "Catalogus — StoopidCartoons",
      showcaseDescription:
        "Ontdek de groeiende catalogus van Android-apps en games van StoopidCartoons.",
      privacyTitle: "Privacybeleid — StoopidCartoons",
      privacyDescription:
        "Privacy-informatie voor de website, apps en games van StoopidCartoons.",
      termsTitle: "Servicevoorwaarden — StoopidCartoons",
      termsDescription:
        "Servicevoorwaarden voor de producten en website van StoopidCartoons.",
      contactTitle: "Contact — StoopidCartoons",
      contactDescription:
        "Neem contact op met StoopidCartoons via e-mail, Play Store en sociale links.",
    },
    hero: {
      title: "Android-apps en games met een sterke persoonlijkheid.",
      description:
        "Bij StoopidCartoons maken we speelse games en handige apps die makkelijk op te pakken zijn, prettig werken en gemaakt zijn om op te vallen.",
      primaryCta: "Ontdek onze apps en games",
      secondaryCta: "Neem contact op",
    },
    stats: [
      { value: "20+", label: "releases en nog groeiend" },
      { value: "Android", label: "ons hoofdplatform" },
      { value: "Apps", label: "gemaakt met karakter" },
      { value: "Nieuwe ideeën", label: "altijd in ontwikkeling" },
    ],
    about: {
      eyebrow: "Over ons",
      title: "Een kleine studio die producten met karakter maakt.",
      description:
        "StoopidCartoons richt zich op Android-apps en games die levendig, verzorgd en direct herkenbaar aanvoelen. We hechten veel waarde aan gebruiksgemak, visuele identiteit en producten waar mensen graag naar terugkeren.",
    },
    services: {
      title: "Wat we maken",
      intro:
        "Vandaag bouwen we vooral Android-apps en games, met iOS later op de planning terwijl de catalogus blijft groeien.",
      items: [
        {
          title: "Games die je meenemen",
          description:
            "Snelle, leuke en visueel sterke game-ervaringen, ontworpen voor herhaalbaar plezier en karakter.",
        },
        {
          title: "Apps met echt nut",
          description:
            "Handige Android-apps met een heldere UX, soepele flows en functies voor dagelijkse behoeften.",
        },
        {
          title: "Gemaakt om op te vallen",
          description:
            "Van icoon tot interface bouwen we producten met een sterke identiteit die direct herkenbaar zijn.",
        },
      ],
    },
    showcase: {
      eyebrow: "Ons werk",
      title: "Ontdek onze apps en games.",
      description:
        "Van speelse games tot handige mobiele tools: onze releases zijn gemaakt om te vermaken, te helpen en meteen een sterke indruk achter te laten.",
      fallbackItems: [
        {
          title: "Actie- en arcadegames",
          description:
            "Snelle sessies, duidelijke besturing en energieke ideeën voor direct plezier.",
          badge: "Game",
        },
        {
          title: "Casual- en puzzelgames",
          description:
            "Makkelijk om te starten, leuk om onder de knie te krijgen en gemaakt om spelers terug te laten komen.",
          badge: "Game",
        },
        {
          title: "Utility-apps",
          description:
            "Praktische Android-tools die snel, duidelijk en echt bruikbaar zijn.",
          badge: "App",
        },
        {
          title: "Productiviteitsapps",
          description:
            "Gerichte mobiele ervaringen die helpen bij organiseren en vooruitgang boeken.",
          badge: "App",
        },
        {
          title: "Familievriendelijke releases",
          description:
            "Toegankelijke producten met een speels ontwerp en brede aantrekkingskracht.",
          badge: "App",
        },
        {
          title: "Nieuwe experimenten",
          description:
            "Frisse concepten, prototypes en ideeën die we verkennen terwijl de studio groeit.",
          badge: "Lab",
        },
      ],
      emptyLabel: "Nieuwe releases volgen binnenkort.",
      filledLabel: "20+ apps en games, en nog steeds groeiend.",
      kindApp: "App",
      kindGame: "Game",
      playStore: "Google Play",
      website: "Website",
      detailsLabel: "Bekijk details",
    },
    contact: {
      eyebrow: "Contact",
      title: "Laten we praten.",
      description:
        "Geen formulier — alleen directe links voor business, juridisch, support en social media.",
      email: "Algemene e-mail",
      legal: "Juridische e-mail",
      playStore: "Google Play-ontwikkelaarspagina",
      facebook: "Facebook",
      linkedin: "LinkedIn",
      x: "X / Twitter",
      instagram: "Instagram",
      tiktok: "TikTok",
      youtube: "YouTube",
    },
    privacy: {
      title: "Privacybeleid",
      intro:
        "Deze pagina legt uit hoe StoopidCartoons informatie met betrekking tot de website, apps, games en supportkanalen kan verwerken.",
      sections: [
        {
          title: "Wat we verzamelen",
          body:
            "We verzamelen alleen de informatie die nodig is om onze websites, apps, analyses en supportkanalen te laten werken. Dit kan apparaatgegevens, crashlogs, winkel-ID’s en berichten die je naar ons stuurt omvatten.",
        },
        {
          title: "Hoe we informatie gebruiken",
          body:
            "We gebruiken gegevens om onze producten te laten werken, prestaties te verbeteren, op supportverzoeken te reageren en aan wettelijke verplichtingen te voldoen.",
        },
        {
          title: "Derden en verwerkers",
          body:
            "We verkopen geen persoonlijke gegevens. We kunnen vertrouwde dienstverleners gebruiken voor analytics, crashrapportage, hosting of betalingen wanneer dat nodig is om onze producten te laten werken.",
        },
        {
          title: "Bewaartermijn",
          body:
            "We bewaren gegevens alleen zolang als nodig is voor het doel waarvoor ze zijn verzameld, tenzij de wet een langere bewaartermijn vereist.",
        },
        {
          title: "Privacy van kinderen",
          body:
            "Sommige games en apps kunnen voor een breed publiek bedoeld zijn. Wanneer een product voor kinderen is bedoeld, proberen we de gegevensverzameling te beperken en de geldende platform- en privacyvereisten te volgen.",
        },
        {
          title: "Vragen en verzoeken",
          body:
            "Als je een privacyvraag, gegevensverzoek of verwijderingsverzoek hebt, neem dan contact met ons op via het e-mailadres dat op deze website staat.",
        },
      ],
      disclaimer:
        "Vervang dit startbeleid door je definitieve product-specifieke beleid voordat je live gaat.",
    },
    terms: {
      title: "Servicevoorwaarden",
      intro:
        "Deze startvoorwaarden zijn van toepassing op de website van StoopidCartoons en kunnen worden aangepast voor afzonderlijke apps of games.",
      sections: [
        {
          title: "Aanvaarding",
          body:
            "Door onze website, apps of games te gebruiken, ga je akkoord met deze voorwaarden en met eventuele productspecifieke regels die in het product of in de storevermelding worden getoond.",
        },
        {
          title: "Toegestaan gebruik",
          body:
            "Je mag onze producten alleen op een wettige manier gebruiken. Je mag onze diensten of inhoud niet kopiëren, reverse engineeren, misbruiken, verstoren of verkeerd gebruiken.",
        },
        {
          title: "Intellectueel eigendom",
          body:
            "Alle branding, illustraties, code, tekst en productmaterialen zijn eigendom van StoopidCartoons of worden met toestemming gebruikt, tenzij anders vermeld.",
        },
        {
          title: "Beschikbaarheid",
          body:
            "We kunnen producten, functies of inhoud op elk moment zonder kennisgeving wijzigen, updaten, pauzeren of stopzetten.",
        },
        {
          title: "Vrijwaring en aansprakelijkheid",
          body:
            "Onze producten worden geleverd “zoals ze zijn” en “zoals beschikbaar”, voor zover wettelijk toegestaan.",
        },
        {
          title: "Contact",
          body:
            "Gebruik voor juridische vragen, zakelijke verzoeken of rechten-gerelateerde verzoeken de contactlinks die op deze website staan vermeld.",
        },
      ],
      disclaimer:
        "Laat je definitieve juridische teksten vóór de lancering controleren.",
    },
    footer: {
      tagline: "Android-apps en games met een sterke persoonlijkheid.",
      rights: "Alle rechten voorbehouden.",
      switcher: "Taal",
    },
    common: {
      backHome: "Terug naar home",
      viewShowcase: "Bekijk catalogus",
    },
  },

  pl: {
    tagline: "Aplikacje i gry na Androida z wyrazistym charakterem.",
    nav: {
      home: "Strona główna",
      showcase: "Katalog",
      privacy: "Polityka prywatności",
      terms: "Warunki korzystania",
      contact: "Kontakt",
    },
    seo: {
      homeTitle: "StoopidCartoons — Aplikacje i gry na Androida",
      homeDescription:
        "StoopidCartoons tworzy aplikacje i gry na Androida z charakterem, przejrzystym UX i pomysłami stworzonymi po to, by z nich korzystać, grać i je zapamiętać.",
      showcaseTitle: "Katalog — StoopidCartoons",
      showcaseDescription:
        "Poznaj rosnący katalog aplikacji i gier na Androida od StoopidCartoons.",
      privacyTitle: "Polityka prywatności — StoopidCartoons",
      privacyDescription:
        "Informacje o prywatności dla strony, aplikacji i gier StoopidCartoons.",
      termsTitle: "Warunki korzystania — StoopidCartoons",
      termsDescription:
        "Warunki korzystania dla produktów i strony StoopidCartoons.",
      contactTitle: "Kontakt — StoopidCartoons",
      contactDescription:
        "Skontaktuj się ze StoopidCartoons przez email, Play Store i media społecznościowe.",
    },
    hero: {
      title: "Aplikacje i gry na Androida z wyrazistym charakterem.",
      description:
        "W StoopidCartoons tworzymy gry i przydatne aplikacje, które są łatwe w użyciu, dają satysfakcję i zostały stworzone po to, by się wyróżniać.",
      primaryCta: "Poznaj nasze aplikacje i gry",
      secondaryCta: "Skontaktuj się z nami",
    },
    stats: [
      { value: "20+", label: "premier i wciąż rośnie" },
      { value: "Android", label: "nasza główna platforma" },
      { value: "Aplikacje", label: "tworzone z charakterem" },
      { value: "Nowe pomysły", label: "zawsze w toku" },
    ],
    about: {
      eyebrow: "O nas",
      title: "Małe studio tworzące produkty z charakterem.",
      description:
        "StoopidCartoons skupia się na aplikacjach i grach na Androida, które są żywe, dopracowane i natychmiast rozpoznawalne. Liczy się dla nas użyteczność, identyfikacja wizualna i produkty, do których ludzie chcą wracać.",
    },
    services: {
      title: "Co tworzymy",
      intro:
        "Dziś koncentrujemy się głównie na aplikacjach i grach na Androida, a iOS planujemy na później wraz z dalszym rozwojem katalogu.",
      items: [
        {
          title: "Gry, które wciągają",
          description:
            "Szybkie, zabawne i wyraziste wizualnie doświadczenia, zaprojektowane z myślą o powrotach i charakterze.",
        },
        {
          title: "Aplikacje z realnym celem",
          description:
            "Przydatne aplikacje na Androida z czystym UX, płynnymi przepływami i funkcjami odpowiadającymi na codzienne potrzeby.",
        },
        {
          title: "Stworzone, by się wyróżniać",
          description:
            "Od ikony po interfejs budujemy produkty z mocną tożsamością, które można rozpoznać od razu.",
        },
      ],
    },
    showcase: {
      eyebrow: "Nasze projekty",
      title: "Poznaj nasze aplikacje i gry.",
      description:
        "Od lekkich gier po przydatne narzędzia mobilne — nasze produkty mają bawić, pomagać i robić świetne pierwsze wrażenie.",
      fallbackItems: [
        {
          title: "Gry akcji i arcade",
          description:
            "Szybkie sesje, czytelne sterowanie i energetyczne pomysły na natychmiastową zabawę.",
          badge: "Gra",
        },
        {
          title: "Gry casual i puzzle",
          description:
            "Łatwe do rozpoczęcia, satysfakcjonujące do opanowania i stworzone tak, by gracze chcieli wracać.",
          badge: "Gra",
        },
        {
          title: "Aplikacje użytkowe",
          description:
            "Praktyczne narzędzia na Androida, które są szybkie, jasne i naprawdę użyteczne.",
          badge: "Aplikacja",
        },
        {
          title: "Aplikacje produktywności",
          description:
            "Skoncentrowane doświadczenia mobilne pomagające organizować pracę i utrzymać tempo.",
          badge: "Aplikacja",
        },
        {
          title: "Produkty rodzinne",
          description:
            "Przystępne produkty z zabawnym designem i szeroką atrakcyjnością.",
          badge: "Aplikacja",
        },
        {
          title: "Nowe eksperymenty",
          description:
            "Świeże koncepcje, prototypy i pomysły, które badamy wraz z rozwojem studia.",
          badge: "Lab",
        },
      ],
      emptyLabel: "Nowe premiery już wkrótce.",
      filledLabel: "20+ aplikacji i gier — i ciągle przybywa.",
      kindApp: "Aplikacja",
      kindGame: "Gra",
      playStore: "Google Play",
      website: "Strona",
      detailsLabel: "Zobacz szczegóły",
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Porozmawiajmy.",
      description:
        "Bez formularza — tylko bezpośrednie linki do kontaktu biznesowego, prawnego, wsparcia i social mediów.",
      email: "Główny email",
      legal: "Email prawny",
      playStore: "Strona dewelopera Google Play",
      facebook: "Facebook",
      linkedin: "LinkedIn",
      x: "X / Twitter",
      instagram: "Instagram",
      tiktok: "TikTok",
      youtube: "YouTube",
    },
    privacy: {
      title: "Polityka prywatności",
      intro:
        "Ta strona wyjaśnia, w jaki sposób StoopidCartoons może przetwarzać informacje związane ze swoją stroną, aplikacjami, grami i kanałami wsparcia.",
      sections: [
        {
          title: "Co zbieramy",
          body:
            "Zbieramy tylko informacje potrzebne do działania naszych stron internetowych, aplikacji, analityki i kanałów wsparcia. Może to obejmować dane urządzenia, logi awarii, identyfikatory sklepu i wiadomości, które do nas wysyłasz.",
        },
        {
          title: "Jak wykorzystujemy informacje",
          body:
            "Wykorzystujemy dane do działania naszych produktów, poprawy wydajności, odpowiadania na prośby o wsparcie i spełniania obowiązków prawnych.",
        },
        {
          title: "Strony trzecie i podmioty przetwarzające",
          body:
            "Nie sprzedajemy danych osobowych. Możemy korzystać z zaufanych usługodawców do analityki, raportowania awarii, hostingu lub płatności, gdy jest to potrzebne do działania naszych produktów.",
        },
        {
          title: "Przechowywanie",
          body:
            "Przechowujemy dane tylko tak długo, jak jest to potrzebne do celu, w jakim zostały zebrane, chyba że prawo wymaga dłuższego okresu przechowywania.",
        },
        {
          title: "Prywatność dzieci",
          body:
            "Niektóre gry i aplikacje mogą być przeznaczone dla szerokiej publiczności. Gdy produkt jest przeznaczony dla dzieci, staramy się ograniczać zbieranie danych i przestrzegać odpowiednich wymogów platform i prywatności.",
        },
        {
          title: "Pytania i żądania",
          body:
            "Jeśli masz pytanie dotyczące prywatności, wniosek dotyczący danych lub prośbę o usunięcie treści, skontaktuj się z nami przez adres email podany na tej stronie.",
        },
      ],
      disclaimer:
        "Zastąp ten tekst startowy ostateczną wersją polityki prywatności przed publikacją.",
    },
    terms: {
      title: "Warunki korzystania",
      intro:
        "Te wstępne warunki mają zastosowanie do strony StoopidCartoons i mogą zostać dostosowane do poszczególnych aplikacji lub gier.",
      sections: [
        {
          title: "Akceptacja",
          body:
            "Korzystając z naszej strony, aplikacji lub gier, akceptujesz te warunki oraz wszelkie zasady dotyczące konkretnego produktu pokazane w samym produkcie lub na stronie sklepu.",
        },
        {
          title: "Dozwolone korzystanie",
          body:
            "Możesz korzystać z naszych produktów wyłącznie zgodnie z prawem. Nie wolno kopiować, odtwarzać, nadużywać, zakłócać ani niewłaściwie wykorzystywać naszych usług lub treści.",
        },
        {
          title: "Własność intelektualna",
          body:
            "Cały branding, grafiki, kod, tekst i materiały produktu należą do StoopidCartoons lub są używane za zgodą, chyba że zaznaczono inaczej.",
        },
        {
          title: "Dostępność",
          body:
            "Możemy w dowolnym momencie bez powiadomienia zmienić, zaktualizować, wstrzymać lub zakończyć działanie produktów, funkcji lub treści.",
        },
        {
          title: "Wyłączenia odpowiedzialności",
          body:
            "Nasze produkty są udostępniane “tak jak są” i “w miarę dostępności” w maksymalnym zakresie dozwolonym przez prawo.",
        },
        {
          title: "Kontakt",
          body:
            "W sprawach prawnych, biznesowych lub związanych z prawami użyj linków kontaktowych podanych na tej stronie.",
        },
      ],
      disclaimer:
        "Zleć sprawdzenie końcowych tekstów prawnych przed uruchomieniem.",
    },
    footer: {
      tagline: "Aplikacje i gry na Androida z wyrazistym charakterem.",
      rights: "Wszelkie prawa zastrzeżone.",
      switcher: "Język",
    },
    common: {
      backHome: "Wróć do strony głównej",
      viewShowcase: "Zobacz katalog",
    },
  },

  ro: {
    tagline: "Aplicații și jocuri Android cu personalitate puternică.",
    nav: {
      home: "Acasă",
      showcase: "Catalog",
      privacy: "Politica de confidențialitate",
      terms: "Termeni de utilizare",
      contact: "Contact",
    },
    seo: {
      homeTitle: "StoopidCartoons — Aplicații și jocuri Android",
      homeDescription:
        "StoopidCartoons creează aplicații și jocuri Android cu personalitate puternică, UX curat și idei gândite pentru a fi folosite, jucate și ținute minte.",
      showcaseTitle: "Catalog — StoopidCartoons",
      showcaseDescription:
        "Explorează catalogul în creștere de aplicații și jocuri Android al StoopidCartoons.",
      privacyTitle: "Politica de confidențialitate — StoopidCartoons",
      privacyDescription:
        "Informații despre confidențialitate pentru site-ul, aplicațiile și jocurile StoopidCartoons.",
      termsTitle: "Termeni de utilizare — StoopidCartoons",
      termsDescription:
        "Termeni de utilizare pentru produsele și site-ul StoopidCartoons.",
      contactTitle: "Contact — StoopidCartoons",
      contactDescription:
        "Contactează StoopidCartoons prin email, Play Store și social media.",
    },
    hero: {
      title: "Aplicații și jocuri Android cu personalitate puternică.",
      description:
        "La StoopidCartoons creăm jocuri distractive și aplicații utile, ușor de folosit, plăcute și făcute să iasă în evidență.",
      primaryCta: "Descoperă aplicațiile și jocurile noastre",
      secondaryCta: "Contactează-ne",
    },
    stats: [
      { value: "20+", label: "lansări și numărul crește" },
      { value: "Android", label: "platforma noastră principală" },
      { value: "Aplicații", label: "create cu personalitate" },
      { value: "Idei noi", label: "mereu în dezvoltare" },
    ],
    about: {
      eyebrow: "Despre noi",
      title: "Un studio mic care creează produse cu caracter.",
      description:
        "StoopidCartoons se concentrează pe aplicații și jocuri Android care se simt vii, bine finisate și imediat recognoscibile. Punem preț pe utilitate, identitate vizuală și produse la care oamenii vor să revină.",
    },
    services: {
      title: "Ce creăm",
      intro:
        "Astăzi ne concentrăm în principal pe aplicații și jocuri Android, iar iOS este planificat pentru mai târziu, pe măsură ce catalogul continuă să crească.",
      items: [
        {
          title: "Jocuri care te atrag",
          description:
            "Experiențe de joc rapide, distractive și vizual puternice, create pentru rejucabilitate și personalitate.",
        },
        {
          title: "Aplicații cu scop real",
          description:
            "Aplicații Android utile, cu UX curat, fluxuri line și funcții gândite pentru nevoile de zi cu zi.",
        },
        {
          title: "Create să iasă în evidență",
          description:
            "De la iconiță la interfață, construim produse cu o identitate puternică, recognoscibilă dintr-o privire.",
        },
      ],
    },
    showcase: {
      eyebrow: "Munca noastră",
      title: "Explorează aplicațiile și jocurile noastre.",
      description:
        "De la jocuri jucăușe la instrumente mobile utile, lansările noastre sunt făcute să distreze, să ajute și să lase o primă impresie puternică.",
      fallbackItems: [
        {
          title: "Jocuri de acțiune și arcade",
          description:
            "Sesiuni rapide, controale clare și idei pline de energie pentru distracție imediată.",
          badge: "Joc",
        },
        {
          title: "Jocuri casual și puzzle",
          description:
            "Ușor de început, satisfăcătoare de stăpânit și create ca jucătorii să revină.",
          badge: "Joc",
        },
        {
          title: "Aplicații utilitare",
          description:
            "Instrumente Android practice, rapide, clare și cu adevărat utile.",
          badge: "Aplicație",
        },
        {
          title: "Aplicații de productivitate",
          description:
            "Experiențe mobile concentrate care ajută utilizatorii să se organizeze și să rămână pe drumul bun.",
          badge: "Aplicație",
        },
        {
          title: "Lansări pentru familie",
          description:
            "Produse accesibile cu design jucăuș și atractivitate largă.",
          badge: "Aplicație",
        },
        {
          title: "Experimente noi",
          description:
            "Concepte proaspete, prototipuri și idei pe care le explorăm pe măsură ce studioul crește.",
          badge: "Lab",
        },
      ],
      emptyLabel: "Lansări noi în curând.",
      filledLabel: "20+ aplicații și jocuri, și numărul continuă să crească.",
      kindApp: "Aplicație",
      kindGame: "Joc",
      playStore: "Google Play",
      website: "Website",
      detailsLabel: "Vezi detalii",
    },
    contact: {
      eyebrow: "Contact",
      title: "Hai să vorbim.",
      description:
        "Fără formular de contact — doar linkuri directe pentru business, legal, suport și social media.",
      email: "Email general",
      legal: "Email juridic",
      playStore: "Pagina de dezvoltator Google Play",
      facebook: "Facebook",
      linkedin: "LinkedIn",
      x: "X / Twitter",
      instagram: "Instagram",
      tiktok: "TikTok",
      youtube: "YouTube",
    },
    privacy: {
      title: "Politica de confidențialitate",
      intro:
        "Această pagină explică modul în care StoopidCartoons poate prelucra informații legate de site-ul, aplicațiile, jocurile și canalele sale de suport.",
      sections: [
        {
          title: "Ce colectăm",
          body:
            "Colectăm doar informațiile necesare pentru operarea site-urilor, aplicațiilor, analizelor și canalelor noastre de suport. Acestea pot include date despre dispozitiv, jurnale de erori, identificatori ai magazinului și mesajele pe care ni le trimiți.",
        },
        {
          title: "Cum folosim informațiile",
          body:
            "Folosim datele pentru a opera produsele noastre, pentru a îmbunătăți performanța, pentru a răspunde solicitărilor de suport și pentru a respecta obligațiile legale.",
        },
        {
          title: "Terți și procesatori",
          body:
            "Nu vindem date personale. Putem folosi furnizori de încredere pentru analytics, raportare de erori, găzduire sau plăți atunci când este necesar pentru operarea produselor noastre.",
        },
        {
          title: "Păstrarea datelor",
          body:
            "Păstrăm datele doar atât timp cât este necesar pentru scopul pentru care au fost colectate, cu excepția cazului în care legea impune o perioadă mai lungă.",
        },
        {
          title: "Confidențialitatea copiilor",
          body:
            "Unele jocuri și aplicații pot fi destinate unui public larg. Atunci când un produs este destinat copiilor, încercăm să reducem colectarea de date și să respectăm cerințele aplicabile ale platformei și ale confidențialității.",
        },
        {
          title: "Întrebări și solicitări",
          body:
            "Dacă ai o întrebare despre confidențialitate, o solicitare de date sau o cerere de eliminare, contactează-ne la adresa de email afișată pe acest site.",
        },
      ],
      disclaimer:
        "Înlocuiește acest text de bază cu versiunea finală a politicii de confidențialitate înainte de publicare.",
    },
    terms: {
      title: "Termeni de utilizare",
      intro:
        "Acești termeni inițiali se aplică site-ului StoopidCartoons și pot fi adaptați pentru aplicații sau jocuri individuale.",
      sections: [
        {
          title: "Acceptare",
          body:
            "Prin utilizarea site-ului, aplicațiilor sau jocurilor noastre, ești de acord cu acești termeni și cu orice reguli specifice produsului afișate în produs sau în pagina magazinului.",
        },
        {
          title: "Utilizare acceptabilă",
          body:
            "Poți folosi produsele noastre doar într-un mod legal. Nu ai voie să copiezi, să faci inginerie inversă, să abuzezi, să perturbi sau să folosești necorespunzător serviciile sau conținutul nostru.",
        },
        {
          title: "Proprietate intelectuală",
          body:
            "Toate elementele de branding, grafica, codul, textul și materialele produsului aparțin StoopidCartoons sau sunt folosite cu permisiune, dacă nu se specifică altfel.",
        },
        {
          title: "Disponibilitate",
          body:
            "Putem modifica, actualiza, întrerupe temporar sau opri produse, funcții sau conținut în orice moment, fără notificare prealabilă.",
        },
        {
          title: "Declinări și răspundere",
          body:
            "Produsele noastre sunt oferite “ca atare” și “în funcție de disponibilitate”, în măsura maximă permisă de lege.",
        },
        {
          title: "Contact",
          body:
            "Pentru întrebări legale, solicitări de business sau cereri legate de drepturi, folosește linkurile de contact afișate pe acest site.",
        },
      ],
      disclaimer:
        "Verifică textele juridice finale înainte de lansare.",
    },
    footer: {
      tagline: "Aplicații și jocuri Android cu personalitate puternică.",
      rights: "Toate drepturile rezervate.",
      switcher: "Limbă",
    },
    common: {
      backHome: "Înapoi acasă",
      viewShowcase: "Vezi catalogul",
    },
  },
} satisfies Record<Locale, TranslationShape>;

export const translations: Record<Locale, TranslationShape> = locales.reduce(
  (accumulator, locale) => {
    accumulator[locale] = {
      ...baseTranslations[locale],
      seo: {
        ...baseTranslations[locale].seo,
        ...legalTranslations[locale].seo,
      },
      privacy: legalTranslations[locale].privacy,
      terms: legalTranslations[locale].terms,
    };

    return accumulator;
  },
  {} as Record<Locale, TranslationShape>,
);
