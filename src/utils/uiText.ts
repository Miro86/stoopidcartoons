import type { Locale } from './i18n';

interface HeroPanel {
  title: string;
  description: string;
}

interface UiText {
  heroChips: {
    apps: string;
    games: string;
    platform: string;
  };
  heroPanels: HeroPanel[];
  product: {
    platforms: string;
    category: string;
    tags: string;
    overview: string;
    highlights: string;
    studio: string;
    primaryPlatform: string;
    productType: string;
  };
}

export const uiText: Record<Locale, UiText> = {
  en: {
    heroChips: {
      apps: '20+ releases',
      games: 'Apps & games',
      platform: 'Android',
    },
    heroPanels: [
      {
        title: 'Android-focused',
        description: 'We create Android apps and games that feel smooth, polished, and fun to use.',
      },
      {
        title: 'Bold visual identity',
        description: 'Strong colors, clean interfaces, and playful presentation help our products stand out instantly.',
      },
      {
        title: 'Built to be remembered',
        description: 'We aim for clarity, personality, and experiences people want to come back to.',
      },
      {
        title: 'Always growing',
        description: 'Our catalog keeps expanding with new apps, fresh ideas, and games worth checking out.',
      },
    ],
    product: {
      platforms: 'Platforms',
      category: 'Category',
      tags: 'Tags',
      overview: 'Overview',
      highlights: 'Highlights',
      studio: 'Studio',
      primaryPlatform: 'Primary platform',
      productType: 'Product type',
    },
  },

  de: {
    heroChips: {
      apps: '20+ Veröffentlichungen',
      games: 'Apps & Spiele',
      platform: 'Android',
    },
    heroPanels: [
      {
        title: 'Android im Fokus',
        description: 'Wir entwickeln Android-Apps und -Spiele, die flüssig, hochwertig und angenehm zu nutzen sind.',
      },
      {
        title: 'Markante Optik',
        description: 'Starke Farben, klare Oberflächen und eine verspielte Präsentation lassen unsere Produkte sofort auffallen.',
      },
      {
        title: 'Bleibt im Kopf',
        description: 'Wir setzen auf Klarheit, Persönlichkeit und Erlebnisse, zu denen Menschen gern zurückkehren.',
      },
      {
        title: 'Ständig im Wachstum',
        description: 'Unser Katalog wächst laufend mit neuen Apps, frischen Ideen und Spielen, die man entdecken möchte.',
      },
    ],
    product: {
      platforms: 'Plattformen',
      category: 'Kategorie',
      tags: 'Tags',
      overview: 'Überblick',
      highlights: 'Highlights',
      studio: 'Studio',
      primaryPlatform: 'Hauptplattform',
      productType: 'Produkttyp',
    },
  },

  fr: {
    heroChips: {
      apps: '20+ sorties',
      games: 'Apps & jeux',
      platform: 'Android',
    },
    heroPanels: [
      {
        title: 'Axé Android',
        description: 'Nous créons des applications et des jeux Android fluides, soignés et agréables à utiliser.',
      },
      {
        title: 'Identité visuelle forte',
        description: 'Des couleurs marquées, des interfaces claires et une touche ludique rendent nos produits immédiatement reconnaissables.',
      },
      {
        title: 'Pensés pour marquer',
        description: 'Nous visons la clarté, la personnalité et des expériences auxquelles on a envie de revenir.',
      },
      {
        title: 'Toujours en évolution',
        description: 'Notre catalogue s’agrandit sans cesse avec de nouvelles apps, de nouvelles idées et des jeux à découvrir.',
      },
    ],
    product: {
      platforms: 'Plateformes',
      category: 'Catégorie',
      tags: 'Tags',
      overview: 'Aperçu',
      highlights: 'Points forts',
      studio: 'Studio',
      primaryPlatform: 'Plateforme principale',
      productType: 'Type de produit',
    },
  },

  it: {
    heroChips: {
      apps: '20+ uscite',
      games: 'App e giochi',
      platform: 'Android',
    },
    heroPanels: [
      {
        title: 'Focus su Android',
        description: 'Creiamo app e giochi Android fluidi, curati e piacevoli da usare.',
      },
      {
        title: 'Identità visiva forte',
        description: 'Colori decisi, interfacce pulite e uno stile giocoso fanno risaltare subito i nostri prodotti.',
      },
      {
        title: 'Pensati per restare impressi',
        description: 'Puntiamo su chiarezza, personalità ed esperienze a cui le persone vogliono tornare.',
      },
      {
        title: 'Catalogo in crescita',
        description: 'Il nostro catalogo continua a crescere con nuove app, nuove idee e giochi da scoprire.',
      },
    ],
    product: {
      platforms: 'Piattaforme',
      category: 'Categoria',
      tags: 'Tag',
      overview: 'Panoramica',
      highlights: 'Punti salienti',
      studio: 'Studio',
      primaryPlatform: 'Piattaforma principale',
      productType: 'Tipo di prodotto',
    },
  },

  es: {
    heroChips: {
      apps: '20+ lanzamientos',
      games: 'Apps y juegos',
      platform: 'Android',
    },
    heroPanels: [
      {
        title: 'Enfoque en Android',
        description: 'Creamos apps y juegos para Android que se sienten fluidos, pulidos y divertidos de usar.',
      },
      {
        title: 'Identidad visual fuerte',
        description: 'Colores potentes, interfaces limpias y una presentación con personalidad hacen que nuestros productos destaquen al instante.',
      },
      {
        title: 'Hechos para recordar',
        description: 'Buscamos claridad, personalidad y experiencias a las que la gente quiera volver.',
      },
      {
        title: 'Siempre creciendo',
        description: 'Nuestro catálogo sigue creciendo con nuevas apps, ideas frescas y juegos que vale la pena descubrir.',
      },
    ],
    product: {
      platforms: 'Plataformas',
      category: 'Categoría',
      tags: 'Etiquetas',
      overview: 'Resumen',
      highlights: 'Destacados',
      studio: 'Estudio',
      primaryPlatform: 'Plataforma principal',
      productType: 'Tipo de producto',
    },
  },

  pt: {
    heroChips: {
      apps: '20+ lançamentos',
      games: 'Apps e jogos',
      platform: 'Android',
    },
    heroPanels: [
      {
        title: 'Foco em Android',
        description: 'Criamos apps e jogos para Android que são fluidos, bem-acabados e agradáveis de usar.',
      },
      {
        title: 'Identidade visual forte',
        description: 'Cores marcantes, interfaces limpas e uma apresentação divertida fazem os nossos produtos destacar-se de imediato.',
      },
      {
        title: 'Feitos para ficar na memória',
        description: 'Procuramos clareza, personalidade e experiências às quais as pessoas queiram voltar.',
      },
      {
        title: 'Sempre a crescer',
        description: 'O nosso catálogo continua a crescer com novas apps, ideias frescas e jogos que merecem ser descobertos.',
      },
    ],
    product: {
      platforms: 'Plataformas',
      category: 'Categoria',
      tags: 'Etiquetas',
      overview: 'Visão geral',
      highlights: 'Destaques',
      studio: 'Estúdio',
      primaryPlatform: 'Plataforma principal',
      productType: 'Tipo de produto',
    },
  },

  sr: {
    heroChips: {
      apps: '20+ издања',
      games: 'Апликације и игре',
      platform: 'Андроид',
    },
    heroPanels: [
      {
        title: 'Фокус на Андроид',
        description: 'Правимо Андроид апликације и игре које су углађене, брзе и забавне за коришћење.',
      },
      {
        title: 'Јак визуелни идентитет',
        description: 'Снажне боје, чист интерфејс и разигран стил помажу да се наши производи одмах издвоје.',
      },
      {
        title: 'Направљено да се памти',
        description: 'Тежимо јасноћи, карактеру и искуствима којима људи желе да се враћају.',
      },
      {
        title: 'Стално растемо',
        description: 'Наш каталог стално расте уз нове апликације, свеже идеје и игре које вреди испробати.',
      },
    ],
    product: {
      platforms: 'Платформе',
      category: 'Категорија',
      tags: 'Ознаке',
      overview: 'Преглед',
      highlights: 'Издвојено',
      studio: 'Студио',
      primaryPlatform: 'Главна платформа',
      productType: 'Тип производа',
    },
  },

  hr: {
    heroChips: {
      apps: '20+ izdanja',
      games: 'Aplikacije i igre',
      platform: 'Android',
    },
    heroPanels: [
      {
        title: 'Fokus na Android',
        description: 'Radimo Android aplikacije i igre koje su uglađene, brze i zabavne za korištenje.',
      },
      {
        title: 'Snažan vizualni identitet',
        description: 'Jarke boje, čisto sučelje i razigran stil pomažu da se naši proizvodi odmah istaknu.',
      },
      {
        title: 'Stvoreno da ostane u pamćenju',
        description: 'Težimo jasnoći, karakteru i iskustvima kojima se ljudi žele vraćati.',
      },
      {
        title: 'Stalno rastemo',
        description: 'Naš katalog stalno raste uz nove aplikacije, svježe ideje i igre koje vrijedi isprobati.',
      },
    ],
    product: {
      platforms: 'Platforme',
      category: 'Kategorija',
      tags: 'Oznake',
      overview: 'Pregled',
      highlights: 'Izdvojeno',
      studio: 'Studio',
      primaryPlatform: 'Glavna platforma',
      productType: 'Vrsta proizvoda',
    },
  },

  nl: {
    heroChips: {
      apps: '20+ releases',
      games: 'Apps & games',
      platform: 'Android',
    },
    heroPanels: [
      {
        title: 'Gericht op Android',
        description: 'We maken Android-apps en games die soepel, verzorgd en prettig in gebruik zijn.',
      },
      {
        title: 'Sterke visuele identiteit',
        description: 'Krachtige kleuren, heldere interfaces en een speelse presentatie zorgen dat onze producten meteen opvallen.',
      },
      {
        title: 'Gemaakt om te blijven hangen',
        description: 'We mikken op duidelijkheid, karakter en ervaringen waar mensen graag naar terugkeren.',
      },
      {
        title: 'Steeds groter',
        description: 'Onze catalogus groeit voortdurend met nieuwe apps, frisse ideeën en games die het ontdekken waard zijn.',
      },
    ],
    product: {
      platforms: 'Platforms',
      category: 'Categorie',
      tags: 'Tags',
      overview: 'Overzicht',
      highlights: 'Hoogtepunten',
      studio: 'Studio',
      primaryPlatform: 'Hoofdplatform',
      productType: 'Producttype',
    },
  },

  pl: {
    heroChips: {
      apps: '20+ premier',
      games: 'Aplikacje i gry',
      platform: 'Android',
    },
    heroPanels: [
      {
        title: 'Skupienie na Androidzie',
        description: 'Tworzymy aplikacje i gry na Androida, które są płynne, dopracowane i przyjemne w użyciu.',
      },
      {
        title: 'Mocna identyfikacja wizualna',
        description: 'Wyraziste kolory, czytelne interfejsy i lekko zabawny styl sprawiają, że nasze produkty od razu się wyróżniają.',
      },
      {
        title: 'Stworzone, by zapadać w pamięć',
        description: 'Stawiamy na klarowność, charakter i doświadczenia, do których chce się wracać.',
      },
      {
        title: 'Ciągły rozwój',
        description: 'Nasz katalog stale rośnie o nowe aplikacje, świeże pomysły i gry warte sprawdzenia.',
      },
    ],
    product: {
      platforms: 'Platformy',
      category: 'Kategoria',
      tags: 'Tagi',
      overview: 'Przegląd',
      highlights: 'Najważniejsze',
      studio: 'Studio',
      primaryPlatform: 'Główna platforma',
      productType: 'Typ produktu',
    },
  },

  ro: {
    heroChips: {
      apps: '20+ lansări',
      games: 'Aplicații și jocuri',
      platform: 'Android',
    },
    heroPanels: [
      {
        title: 'Focus pe Android',
        description: 'Creăm aplicații și jocuri Android fluide, bine finisate și plăcute de folosit.',
      },
      {
        title: 'Identitate vizuală puternică',
        description: 'Culorile puternice, interfețele curate și prezentarea jucăușă fac ca produsele noastre să iasă imediat în evidență.',
      },
      {
        title: 'Create pentru a fi memorabile',
        description: 'Ne concentrăm pe claritate, personalitate și experiențe la care oamenii vor să revină.',
      },
      {
        title: 'În continuă creștere',
        description: 'Catalogul nostru crește constant cu aplicații noi, idei proaspete și jocuri care merită descoperite.',
      },
    ],
    product: {
      platforms: 'Platforme',
      category: 'Categorie',
      tags: 'Etichete',
      overview: 'Prezentare generală',
      highlights: 'Puncte forte',
      studio: 'Studio',
      primaryPlatform: 'Platformă principală',
      productType: 'Tip de produs',
    },
  },
};