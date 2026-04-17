import type { Locale } from '../utils/translations';
import type { Release, ReleaseSlug } from './releases';

type CategoryKey =
  | 'healthFitness'
  | 'productivity'
  | 'lifestyle'
  | 'casual'
  | 'arcade';

type TagKey =
  | 'brandHiitTimer'
  | 'intervalTimer'
  | 'workoutTimer'
  | 'hiitTraining'
  | 'fitness'
  | 'brandHabitTracker'
  | 'routines'
  | 'streaks'
  | 'reminders'
  | 'productivity'
  | 'brandWaterReminder'
  | 'hydration'
  | 'waterTracking'
  | 'wellness'
  | 'brandBigBen'
  | 'clockSounds'
  | 'chimes'
  | 'london'
  | 'offlineAudio'
  | 'casualGame'
  | 'storyGame'
  | 'migrationJourney'
  | 'shortSessions'
  | 'humor'
  | 'arcade'
  | 'flyingGame'
  | 'reflexes'
  | 'unlockables'
  | 'escapeGame'
  | 'scoreChasing'
  | 'skiingGame'
  | 'precisionControls';

type AnswerBlueprint =
  | { type: 'summary' }
  | { type: 'paragraphs'; indices: number[] };

export interface FeatureBullet {
  title: string;
  description: string;
}

export interface ScreenshotRequirement {
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ReleaseExtraContent {
  category: string;
  tags: string[];
  metaTitle: string;
  metaDescription: string;
  schemaApplicationCategory: string;
  featureBullets: FeatureBullet[];
  screenshotRequirements: ScreenshotRequirement[];
  faqs: FaqItem[];
  relatedSlugs: ReleaseSlug[];
}

interface FeatureBlueprint {
  paragraphIndex: number;
  title: Record<Locale, string>;
}

interface FaqBlueprint {
  question: Record<Locale, string>;
  answer: AnswerBlueprint;
}

interface ReleaseEnhancementBlueprint {
  categoryKey: CategoryKey;
  tagKeys: TagKey[];
  relatedSlugs: ReleaseSlug[];
  schemaApplicationCategory: string;
  metaTopic: Record<Locale, string>;
  features: FeatureBlueprint[];
  screenshotRequirements: Record<Locale, ScreenshotRequirement[]>;
  faqs: FaqBlueprint[];
}

const categoryLabels: Record<CategoryKey, Record<Locale, string>> = {
  healthFitness: {
    en: 'Health & Fitness',
    de: 'Gesundheit & Fitness',
    fr: 'Sante et fitness',
    it: 'Salute e benessere',
    es: 'Salud y bienestar',
    pt: 'Saude e fitness',
    sr: 'Zdravlje i fitnes',
    hr: 'Zdravlje i fitness',
    nl: 'Gezondheid & fitness',
    pl: 'Zdrowie i fitness',
    ro: 'Sanatate si fitness',
  },
  productivity: {
    en: 'Productivity',
    de: 'Produktivitaet',
    fr: 'Productivite',
    it: 'Produttivita',
    es: 'Productividad',
    pt: 'Produtividade',
    sr: 'Produktivnost',
    hr: 'Produktivnost',
    nl: 'Productiviteit',
    pl: 'Produktywnosc',
    ro: 'Productivitate',
  },
  lifestyle: {
    en: 'Lifestyle',
    de: 'Lebensstil',
    fr: 'Style de vie',
    it: 'Stile di vita',
    es: 'Estilo de vida',
    pt: 'Estilo de vida',
    sr: 'Zivotni stil',
    hr: 'Zivotni stil',
    nl: 'Levensstijl',
    pl: 'Styl zycia',
    ro: 'Stil de viata',
  },
  casual: {
    en: 'Casual',
    de: 'Locker',
    fr: 'Detente',
    it: 'Casual',
    es: 'Casual',
    pt: 'Casual',
    sr: 'Lezerno',
    hr: 'Lezerno',
    nl: 'Casual',
    pl: 'Casual',
    ro: 'Casual',
  },
  arcade: {
    en: 'Arcade',
    de: 'Arcade',
    fr: 'Arcade',
    it: 'Arcade',
    es: 'Arcade',
    pt: 'Arcade',
    sr: 'Arkadno',
    hr: 'Arkadno',
    nl: 'Arcade',
    pl: 'Arcade',
    ro: 'Arcade',
  },
};

const tagLabels: Record<TagKey, Record<Locale, string>> = {
  brandHiitTimer: {
    en: 'HIIT Timer',
    de: 'HIIT Timer',
    fr: 'HIIT Timer',
    it: 'HIIT Timer',
    es: 'HIIT Timer',
    pt: 'HIIT Timer',
    sr: 'HIIT Timer',
    hr: 'HIIT Timer',
    nl: 'HIIT Timer',
    pl: 'HIIT Timer',
    ro: 'HIIT Timer',
  },
  intervalTimer: {
    en: 'Interval Timer',
    de: 'Intervalltimer',
    fr: 'Minuteur intervalle',
    it: 'Timer intervalli',
    es: 'Temporizador de intervalos',
    pt: 'Temporizador de intervalos',
    sr: 'Intervalni tajmer',
    hr: 'Intervalni timer',
    nl: 'Intervaltimer',
    pl: 'Timer interwalowy',
    ro: 'Timer pentru intervale',
  },
  workoutTimer: {
    en: 'Workout Timer',
    de: 'Workout-Timer',
    fr: "Minuteur d'entrainement",
    it: 'Timer allenamento',
    es: 'Temporizador de entrenamiento',
    pt: 'Timer de treino',
    sr: 'Tajmer za trening',
    hr: 'Timer za trening',
    nl: 'Work-outtimer',
    pl: 'Timer treningowy',
    ro: 'Timer pentru antrenament',
  },
  hiitTraining: {
    en: 'HIIT Training',
    de: 'HIIT-Training',
    fr: 'Entrainement HIIT',
    it: 'Allenamento HIIT',
    es: 'Entrenamiento HIIT',
    pt: 'Treino HIIT',
    sr: 'HIIT trening',
    hr: 'HIIT trening',
    nl: 'HIIT-training',
    pl: 'Trening HIIT',
    ro: 'Antrenament HIIT',
  },
  fitness: {
    en: 'Fitness',
    de: 'Fitness',
    fr: 'Fitness',
    it: 'Fitness',
    es: 'Fitness',
    pt: 'Fitness',
    sr: 'Fitnes',
    hr: 'Fitness',
    nl: 'Fitness',
    pl: 'Fitness',
    ro: 'Fitness',
  },
  brandHabitTracker: {
    en: 'Habit Tracker',
    de: 'Habit Tracker',
    fr: 'Habit Tracker',
    it: 'Habit Tracker',
    es: 'Habit Tracker',
    pt: 'Habit Tracker',
    sr: 'Habit Tracker',
    hr: 'Habit Tracker',
    nl: 'Habit Tracker',
    pl: 'Habit Tracker',
    ro: 'Habit Tracker',
  },
  routines: {
    en: 'Routines',
    de: 'Routinen',
    fr: 'Routines',
    it: 'Routine',
    es: 'Rutinas',
    pt: 'Rotinas',
    sr: 'Rutine',
    hr: 'Rutine',
    nl: 'Routines',
    pl: 'Rutyny',
    ro: 'Rutine',
  },
  streaks: {
    en: 'Streaks',
    de: 'Serien',
    fr: 'Series',
    it: 'Serie',
    es: 'Rachas',
    pt: 'Sequencias',
    sr: 'Nizovi',
    hr: 'Nizovi',
    nl: 'Reeksen',
    pl: 'Serie',
    ro: 'Serii',
  },
  reminders: {
    en: 'Reminders',
    de: 'Erinnerungen',
    fr: 'Rappels',
    it: 'Promemoria',
    es: 'Recordatorios',
    pt: 'Lembretes',
    sr: 'Podsetnici',
    hr: 'Podsjetnici',
    nl: 'Herinneringen',
    pl: 'Przypomnienia',
    ro: 'Mementouri',
  },
  productivity: {
    en: 'Productivity',
    de: 'Produktivitaet',
    fr: 'Productivite',
    it: 'Produttivita',
    es: 'Productividad',
    pt: 'Produtividade',
    sr: 'Produktivnost',
    hr: 'Produktivnost',
    nl: 'Productiviteit',
    pl: 'Produktywnosc',
    ro: 'Productivitate',
  },
  brandWaterReminder: {
    en: 'Water Reminder',
    de: 'Water Reminder',
    fr: 'Water Reminder',
    it: 'Water Reminder',
    es: 'Water Reminder',
    pt: 'Water Reminder',
    sr: 'Water Reminder',
    hr: 'Water Reminder',
    nl: 'Water Reminder',
    pl: 'Water Reminder',
    ro: 'Water Reminder',
  },
  hydration: {
    en: 'Hydration',
    de: 'Hydrierung',
    fr: 'Hydratation',
    it: 'Idratazione',
    es: 'Hidratacion',
    pt: 'Hidratacao',
    sr: 'Hidratacija',
    hr: 'Hidratacija',
    nl: 'Hydratatie',
    pl: 'Nawodnienie',
    ro: 'Hidratare',
  },
  waterTracking: {
    en: 'Water Tracking',
    de: 'Wassertracking',
    fr: "Suivi de l'eau",
    it: "Monitoraggio dell'acqua",
    es: 'Seguimiento de agua',
    pt: 'Monitorizacao de agua',
    sr: 'Pracenje vode',
    hr: 'Pracenje vode',
    nl: 'Watertracking',
    pl: 'Monitorowanie wody',
    ro: 'Monitorizarea apei',
  },
  wellness: {
    en: 'Wellness',
    de: 'Wohlbefinden',
    fr: 'Bien-etre',
    it: 'Benessere',
    es: 'Bienestar',
    pt: 'Bem-estar',
    sr: 'Dobro stanje',
    hr: 'Dobrobit',
    nl: 'Welzijn',
    pl: 'Dobrostan',
    ro: 'Stare de bine',
  },
  brandBigBen: {
    en: 'Big Ben',
    de: 'Big Ben',
    fr: 'Big Ben',
    it: 'Big Ben',
    es: 'Big Ben',
    pt: 'Big Ben',
    sr: 'Big Ben',
    hr: 'Big Ben',
    nl: 'Big Ben',
    pl: 'Big Ben',
    ro: 'Big Ben',
  },
  clockSounds: {
    en: 'Clock Sounds',
    de: 'Uhrgeraeusche',
    fr: "Sons d'horloge",
    it: 'Suoni di orologio',
    es: 'Sonidos de reloj',
    pt: 'Sons de relogio',
    sr: 'Zvuci sata',
    hr: 'Zvukovi sata',
    nl: 'Klokgeluiden',
    pl: 'Dzwieki zegara',
    ro: 'Sunete de ceas',
  },
  chimes: {
    en: 'Chimes',
    de: 'Glockenschlaege',
    fr: 'Carillons',
    it: 'Rintocchi',
    es: 'Campanadas',
    pt: 'Badaladas',
    sr: 'Zvona',
    hr: 'Zvona',
    nl: 'Klokslagen',
    pl: 'Bicia dzwonow',
    ro: 'Batai',
  },
  london: {
    en: 'London',
    de: 'London',
    fr: 'Londres',
    it: 'Londra',
    es: 'Londres',
    pt: 'Londres',
    sr: 'London',
    hr: 'London',
    nl: 'Londen',
    pl: 'Londyn',
    ro: 'Londra',
  },
  offlineAudio: {
    en: 'Offline Audio',
    de: 'Audio ohne Internet',
    fr: 'Audio hors ligne',
    it: 'Audio offline',
    es: 'Audio sin conexion',
    pt: 'Audio sem internet',
    sr: 'Zvuk bez interneta',
    hr: 'Zvuk bez interneta',
    nl: 'Audio zonder internet',
    pl: 'Dzwiek bez internetu',
    ro: 'Audio fara internet',
  },
  casualGame: {
    en: 'Casual Game',
    de: 'Casual-Spiel',
    fr: 'Jeu occasionnel',
    it: 'Gioco casual',
    es: 'Juego casual',
    pt: 'Jogo casual',
    sr: 'Lezerna igra',
    hr: 'Lezerna igra',
    nl: 'Ontspannen spel',
    pl: 'Gra casualowa',
    ro: 'Joc casual',
  },
  storyGame: {
    en: 'Story Game',
    de: 'Story-Spiel',
    fr: 'Jeu narratif',
    it: 'Gioco narrativo',
    es: 'Juego narrativo',
    pt: 'Jogo narrativo',
    sr: 'Pripovedna igra',
    hr: 'Narativna igra',
    nl: 'Verhaalspel',
    pl: 'Gra fabularna',
    ro: 'Joc narativ',
  },
  migrationJourney: {
    en: 'Migration Journey',
    de: 'Migrationsreise',
    fr: 'Parcours migratoire',
    it: 'Percorso migratorio',
    es: 'Recorrido migratorio',
    pt: 'Jornada migratoria',
    sr: 'Put u inostranstvo',
    hr: 'Put u inozemstvo',
    nl: 'Migratiereis',
    pl: 'Droga emigracji',
    ro: 'Drum migrator',
  },
  shortSessions: {
    en: 'Short Sessions',
    de: 'Kurze Sessions',
    fr: 'Sessions courtes',
    it: 'Sessioni brevi',
    es: 'Sesiones cortas',
    pt: 'Sessoes curtas',
    sr: 'Kratke sesije',
    hr: 'Kratke sesije',
    nl: 'Korte sessies',
    pl: 'Krotkie sesje',
    ro: 'Sesiuni scurte',
  },
  humor: {
    en: 'Humor',
    de: 'Humor',
    fr: 'Humour',
    it: 'Umorismo',
    es: 'Humor',
    pt: 'Humor',
    sr: 'Humor',
    hr: 'Humor',
    nl: 'Humor',
    pl: 'Humor',
    ro: 'Umor',
  },
  arcade: {
    en: 'Arcade',
    de: 'Arcade',
    fr: 'Arcade',
    it: 'Arcade',
    es: 'Arcade',
    pt: 'Arcade',
    sr: 'Arkadno',
    hr: 'Arkadno',
    nl: 'Arcade',
    pl: 'Arcade',
    ro: 'Arcade',
  },
  flyingGame: {
    en: 'Flying Game',
    de: 'Flugspiel',
    fr: 'Jeu de vol',
    it: 'Gioco di volo',
    es: 'Juego de vuelo',
    pt: 'Jogo de voo',
    sr: 'Igra letenja',
    hr: 'Igra letenja',
    nl: 'Vliegspel',
    pl: 'Gra o lataniu',
    ro: 'Joc de zbor',
  },
  reflexes: {
    en: 'Reflexes',
    de: 'Reflexe',
    fr: 'Reflexes',
    it: 'Riflessi',
    es: 'Reflejos',
    pt: 'Reflexos',
    sr: 'Refleksi',
    hr: 'Refleksi',
    nl: 'Reflexen',
    pl: 'Refleks',
    ro: 'Reflexe',
  },
  unlockables: {
    en: 'Unlockables',
    de: 'Freischaltungen',
    fr: 'Elements a debloquer',
    it: 'Sblocchi',
    es: 'Desbloqueables',
    pt: 'Desbloqueios',
    sr: 'Otkljucavanja',
    hr: 'Otkljucavanja',
    nl: 'Vrijspeelbare extra’s',
    pl: 'Odblokowania',
    ro: 'Deblocari',
  },
  escapeGame: {
    en: 'Escape Game',
    de: 'Fluchtspiel',
    fr: "Jeu d'evasion",
    it: 'Gioco di fuga',
    es: 'Juego de escape',
    pt: 'Jogo de fuga',
    sr: 'Igra bekstva',
    hr: 'Igra bijega',
    nl: 'Ontsnappingsspel',
    pl: 'Gra ucieczkowa',
    ro: 'Joc de evadare',
  },
  scoreChasing: {
    en: 'Score Chasing',
    de: 'Punktejagd',
    fr: 'Chasse au score',
    it: 'Caccia al punteggio',
    es: 'Caza de puntuacion',
    pt: 'Caca à pontuacao',
    sr: 'Lov na rezultat',
    hr: 'Lov na rezultat',
    nl: 'Scorejacht',
    pl: 'Bicie wynikow',
    ro: 'Urmarirea scorului',
  },
  skiingGame: {
    en: 'Skiing Game',
    de: 'Skispiel',
    fr: 'Jeu de ski',
    it: 'Gioco di sci',
    es: 'Juego de esqui',
    pt: 'Jogo de ski',
    sr: 'Skijaska igra',
    hr: 'Skijaska igra',
    nl: 'Skispel',
    pl: 'Gra narciarska',
    ro: 'Joc de schi',
  },
  precisionControls: {
    en: 'Precision Control',
    de: 'Praezise Steuerung',
    fr: 'Controle precis',
    it: 'Controllo preciso',
    es: 'Control preciso',
    pt: 'Controlo preciso',
    sr: 'Precizna kontrola',
    hr: 'Precizna kontrola',
    nl: 'Precieze besturing',
    pl: 'Precyzyjne sterowanie',
    ro: 'Control precis',
  },
};

const releaseEnhancements: Record<ReleaseSlug, ReleaseEnhancementBlueprint> = {
  'hiit-timer': {
    categoryKey: 'healthFitness',
    tagKeys: [
      'brandHiitTimer',
      'intervalTimer',
      'workoutTimer',
      'hiitTraining',
      'fitness',
    ],
    relatedSlugs: ['habit-tracker', 'water-reminder', 'big-ben'],
    schemaApplicationCategory: 'HealthApplication',
    metaTopic: {
      en: 'custom interval timer for Android',
      de: 'Intervalltimer fuer Android',
      fr: 'minuteur HIIT pour Android',
      it: 'timer HIIT per Android',
      es: 'temporizador HIIT para Android',
      pt: 'temporizador HIIT para Android',
      sr: 'HIIT tajmer za Android',
      hr: 'HIIT timer za Android',
      nl: 'HIIT-timer voor Android',
      pl: 'HIIT timer na Androida',
      ro: 'timer HIIT pentru Android',
    },
    features: [
      {
        paragraphIndex: 1,
        title: {
          en: 'Build custom interval flows',
          de: 'Baue eigene Intervallablaeufe',
          fr: 'Cree des intervalles sur mesure',
          it: 'Crea intervalli su misura',
          es: 'Crea intervalos a tu medida',
          pt: 'Cria intervalos a tua medida',
          sr: 'Napravi svoje intervale',
          hr: 'Slozi vlastite intervale',
          nl: 'Bouw je eigen intervalflow',
          pl: 'Tworz wlasne interwaly',
          ro: 'Construieste intervale personalizate',
        },
      },
      {
        paragraphIndex: 2,
        title: {
          en: 'Launch saved workouts fast',
          de: 'Starte gespeicherte Workouts schnell',
          fr: 'Lance vite les seances enregistrees',
          it: 'Avvia subito i workout salvati',
          es: 'Inicia rapido tus entrenamientos guardados',
          pt: 'Inicia rapido os treinos guardados',
          sr: 'Brzo pokreni sacuvane treninge',
          hr: 'Brzo pokreni spremljene treninge',
          nl: 'Start opgeslagen workouts snel',
          pl: 'Szybko uruchamiaj zapisane treningi',
          ro: 'Porneste rapid antrenamentele salvate',
        },
      },
      {
        paragraphIndex: 3,
        title: {
          en: 'Stay focused through every round',
          de: 'Bleib in jeder Runde fokussiert',
          fr: 'Reste concentre a chaque tour',
          it: 'Resta concentrato in ogni round',
          es: 'Manten el foco en cada ronda',
          pt: 'Mantem o foco em cada ronda',
          sr: 'Ostani fokusiran u svakoj rundi',
          hr: 'Ostani fokusiran u svakoj rundi',
          nl: 'Blijf gefocust in elke ronde',
          pl: 'Utrzymuj fokus w kazdej rundzie',
          ro: 'Ramai concentrat in fiecare runda',
        },
      },
    ],
    screenshotRequirements: {
      en: [
        {
          title: 'Workout builder',
          description:
            'Show warmup, work, rest, and cooldown blocks with rounds and the save action visible.',
        },
        {
          title: 'Live session screen',
          description:
            'Show the large active timer, current phase, next phase, and pause or resume controls mid-workout.',
        },
        {
          title: 'History and reminders',
          description:
            'Show saved routines, recent sessions, and reminder settings in one believable setup.',
        },
      ],
      de: [
        {
          title: 'Workout-Builder',
          description:
            'Zeige Aufwaermen, Belastung, Pause und Cooldown mit Rundenzahl und sichtbarer Speichern-Aktion.',
        },
        {
          title: 'Aktiver Trainingsbildschirm',
          description:
            'Zeige den grossen Timer, die aktuelle Phase, die naechste Phase sowie Pause- oder Fortsetzen-Steuerung im Workout.',
        },
        {
          title: 'Verlauf und Erinnerungen',
          description:
            'Zeige gespeicherte Routinen, letzte Sessions und Erinnerungseinstellungen in einem glaubwuerdigen Setup.',
        },
      ],
      fr: [
        {
          title: 'Constructeur de seance',
          description:
            'Montre les blocs echauffement, effort, repos et retour au calme avec le nombre de tours et l’action de sauvegarde visible.',
        },
        {
          title: 'Ecran de session active',
          description:
            'Montre le grand minuteur, la phase en cours, la phase suivante et les commandes pause ou reprise pendant l’entrainement.',
        },
        {
          title: 'Historique et rappels',
          description:
            'Montre les routines enregistrees, les sessions recentes et les reglages de rappel dans un ecran credible.',
        },
      ],
      it: [
        {
          title: 'Builder del workout',
          description:
            'Mostra riscaldamento, lavoro, pausa e defaticamento con numero di round e azione di salvataggio visibile.',
        },
        {
          title: 'Schermata sessione attiva',
          description:
            'Mostra il timer grande, la fase corrente, la fase successiva e i controlli di pausa o ripresa durante il workout.',
        },
        {
          title: 'Cronologia e promemoria',
          description:
            'Mostra routine salvate, sessioni recenti e impostazioni dei promemoria in un’unica schermata credibile.',
        },
      ],
      es: [
        {
          title: 'Constructor de entrenamiento',
          description:
            'Muestra bloques de calentamiento, trabajo, descanso y vuelta a la calma con rondas y accion de guardado visible.',
        },
        {
          title: 'Pantalla de sesion activa',
          description:
            'Muestra el temporizador grande, la fase actual, la siguiente fase y los controles de pausa o reanudacion durante el entrenamiento.',
        },
        {
          title: 'Historial y recordatorios',
          description:
            'Muestra rutinas guardadas, sesiones recientes y ajustes de recordatorios en una sola pantalla creible.',
        },
      ],
      pt: [
        {
          title: 'Construtor de treino',
          description:
            'Mostra blocos de aquecimento, trabalho, descanso e retorno a calma com rondas e acao de guardar visivel.',
        },
        {
          title: 'Ecra de sessao ativa',
          description:
            'Mostra o temporizador grande, a fase atual, a fase seguinte e os controlos de pausa ou retoma durante o treino.',
        },
        {
          title: 'Historico e lembretes',
          description:
            'Mostra rotinas guardadas, sessoes recentes e definicoes de lembretes no mesmo contexto visual.',
        },
      ],
      sr: [
        {
          title: 'Builder treninga',
          description:
            'Prikazi zagrevanje, rad, odmor i hladjenje sa brojem rundi i jasno vidljivim cuvanjem treninga.',
        },
        {
          title: 'Aktivna sesija',
          description:
            'Prikazi veliki tajmer, trenutnu fazu, sledecu fazu i komande za pauzu ili nastavak usred treninga.',
        },
        {
          title: 'Istorija i podsetnici',
          description:
            'Prikazi sacuvane rutine, skorasnje sesije i podesavanja podsetnika u jednom uverljivom ekranu.',
        },
      ],
      hr: [
        {
          title: 'Builder treninga',
          description:
            'Prikazi zagrijavanje, rad, odmor i hladenje s brojem rundi i jasno vidljivom akcijom spremanja.',
        },
        {
          title: 'Aktivna sesija',
          description:
            'Prikazi veliki timer, trenutnu fazu, sljedecu fazu i kontrole za pauzu ili nastavak usred treninga.',
        },
        {
          title: 'Povijest i podsjetnici',
          description:
            'Prikazi spremljene rutine, nedavne sesije i postavke podsjetnika u jednom uvjerljivom ekranu.',
        },
      ],
      nl: [
        {
          title: 'Workoutbouwer',
          description:
            'Toon warming-up, werk, rust en cooling-down met rondes en een duidelijke bewaaractie.',
        },
        {
          title: 'Actief sessiescherm',
          description:
            'Toon de grote timer, de huidige fase, de volgende fase en pauze- of hervatknoppen tijdens de workout.',
        },
        {
          title: 'Geschiedenis en herinneringen',
          description:
            'Toon opgeslagen routines, recente sessies en herinneringsinstellingen in een geloofwaardige opzet.',
        },
      ],
      pl: [
        {
          title: 'Kreator treningu',
          description:
            'Pokaz rozgrzewke, prace, odpoczynek i schlodzenie z liczba rund oraz widoczna akcja zapisu.',
        },
        {
          title: 'Ekran aktywnej sesji',
          description:
            'Pokaz duzy timer, aktualna faze, kolejna faze oraz przyciski pauzy lub wznowienia w trakcie treningu.',
        },
        {
          title: 'Historia i przypomnienia',
          description:
            'Pokaz zapisane rutyny, ostatnie sesje i ustawienia przypomnien w jednym wiarygodnym widoku.',
        },
      ],
      ro: [
        {
          title: 'Constructor de antrenament',
          description:
            'Arata incalzirea, lucrul, pauza si revenirea cu numarul de runde si actiunea de salvare vizibila.',
        },
        {
          title: 'Ecran de sesiune activa',
          description:
            'Arata timerul mare, faza curenta, faza urmatoare si controalele de pauza sau reluare in timpul antrenamentului.',
        },
        {
          title: 'Istoric si mementouri',
          description:
            'Arata rutine salvate, sesiuni recente si setari de mementouri intr-un singur ecran credibil.',
        },
      ],
    },
    faqs: [
      {
        question: {
          en: 'What is {name} best for?',
          de: 'Wofuer eignet sich {name} am besten?',
          fr: 'Pour quoi {name} est-il le plus utile ?',
          it: 'Per cosa e piu utile {name}?',
          es: 'Para que sirve mejor {name}?',
          pt: 'Para que e mais util o {name}?',
          sr: 'Za sta je {name} najbolji?',
          hr: 'Za sto je {name} najbolji?',
          nl: 'Waar is {name} het meest geschikt voor?',
          pl: 'Do czego najlepiej nadaje sie {name}?',
          ro: 'Pentru ce este cel mai potrivit {name}?',
        },
        answer: { type: 'summary' },
      },
      {
        question: {
          en: 'Can I create custom interval workouts in {name}?',
          de: 'Kann ich in {name} eigene Intervall-Workouts erstellen?',
          fr: 'Puis-je creer des entrainements a intervalles personnalises dans {name} ?',
          it: 'Posso creare allenamenti a intervalli personalizzati in {name}?',
          es: 'Puedo crear entrenamientos por intervalos personalizados en {name}?',
          pt: 'Posso criar treinos por intervalos personalizados no {name}?',
          sr: 'Mogu li u {name} da napravim prilagodjene intervalne treninge?',
          hr: 'Mogu li u {name} izraditi prilagodene intervalne treninge?',
          nl: 'Kan ik in {name} eigen intervalworkouts maken?',
          pl: 'Czy w {name} moge tworzyc wlasne treningi interwalowe?',
          ro: 'Pot crea antrenamente pe intervale personalizate in {name}?',
        },
        answer: { type: 'paragraphs', indices: [1] },
      },
      {
        question: {
          en: 'Does {name} support saved sessions and workout history?',
          de: 'Unterstuetzt {name} gespeicherte Sessions und Trainingsverlauf?',
          fr: 'Est-ce que {name} prend en charge les seances enregistrees et l’historique ?',
          it: ' {name} supporta sessioni salvate e cronologia degli allenamenti?',
          es: ' {name} incluye sesiones guardadas e historial de entrenamiento?',
          pt: 'O {name} suporta sessoes guardadas e historico de treino?',
          sr: 'Da li {name} podrzava sacuvane sesije i istoriju treninga?',
          hr: 'Podrzava li {name} spremljene sesije i povijest treninga?',
          nl: 'Ondersteunt {name} opgeslagen sessies en workoutgeschiedenis?',
          pl: 'Czy {name} obsluguje zapisane sesje i historie treningow?',
          ro: 'Suporta {name} sesiuni salvate si istoric de antrenament?',
        },
        answer: { type: 'paragraphs', indices: [2, 3] },
      },
    ],
  },
  'habit-tracker': {
    categoryKey: 'productivity',
    tagKeys: [
      'brandHabitTracker',
      'routines',
      'streaks',
      'reminders',
      'productivity',
    ],
    relatedSlugs: ['water-reminder', 'hiit-timer', 'big-ben'],
    schemaApplicationCategory: 'ProductivityApplication',
    metaTopic: {
      en: 'habit tracking and streaks for Android',
      de: 'Habit-Tracking und Serien fuer Android',
      fr: "suivi d'habitudes et series sur Android",
      it: 'tracciamento abitudini e serie su Android',
      es: 'seguimiento de habitos y rachas en Android',
      pt: 'habitos e sequencias no Android',
      sr: 'pracenje navika i nizova na Androidu',
      hr: 'pracenje navika i nizova na Androidu',
      nl: 'gewoonten en reeksen op Android',
      pl: 'nawyki i serie na Androida',
      ro: 'obiceiuri si serii pe Android',
    },
    features: [
      {
        paragraphIndex: 1,
        title: {
          en: 'Track habits your way',
          de: 'Tracke Gewohnheiten auf deine Weise',
          fr: 'Suis tes habitudes a ta facon',
          it: 'Traccia le abitudini a modo tuo',
          es: 'Sigue tus habitos a tu manera',
          pt: 'Acompanha habitos a tua maneira',
          sr: 'Prati navike na svoj nacin',
          hr: 'Prati navike na svoj nacin',
          nl: 'Volg gewoonten op jouw manier',
          pl: 'Sledz nawyki po swojemu',
          ro: 'Urmareste obiceiurile in felul tau',
        },
      },
      {
        paragraphIndex: 2,
        title: {
          en: 'Keep streaks moving every day',
          de: 'Halte Serien taeglich am Laufen',
          fr: 'Fais avancer tes series chaque jour',
          it: 'Mantieni vive le serie ogni giorno',
          es: 'Mantiene tus rachas cada dia',
          pt: 'Mantem as sequencias todos os dias',
          sr: 'Odrzavaj nizove svakog dana',
          hr: 'Odrzavaj nizove svaki dan',
          nl: 'Houd reeksen elke dag levend',
          pl: 'Podtrzymuj serie kazdego dnia',
          ro: 'Pastreaza seriile zi de zi',
        },
      },
      {
        paragraphIndex: 3,
        title: {
          en: 'See what is actually improving',
          de: 'Sieh, was sich wirklich verbessert',
          fr: 'Vois ce qui s’amelioore vraiment',
          it: 'Vedi cosa sta davvero migliorando',
          es: 'Ve que esta mejorando de verdad',
          pt: 'Ve o que esta mesmo a melhorar',
          sr: 'Vidi sta se zaista popravlja',
          hr: 'Vidi sto se stvarno poboljsava',
          nl: 'Zie wat echt verbetert',
          pl: 'Zobacz, co naprawde sie poprawia',
          ro: 'Vezi ce se imbunatateste cu adevarat',
        },
      },
    ],
    screenshotRequirements: {
      en: [
        {
          title: 'Habit setup',
          description:
            'Show habit title, tracking type, schedule rules, and reminder options while creating a habit.',
        },
        {
          title: 'Daily check-in',
          description:
            "Show today's habit list with quick check-ins, streak cues, and a clean progress view.",
        },
        {
          title: 'Stats dashboard',
          description:
            'Show the calendar heatmap, completion rates, streak metrics, and recent trend cards together.',
        },
      ],
      de: [
        {
          title: 'Habit-Setup',
          description:
            'Zeige Titel, Tracking-Typ, Zeitplan-Regeln und Erinnerungsoptionen waehrend der Habit-Erstellung.',
        },
        {
          title: 'Taeglicher Check-in',
          description:
            'Zeige die heutige Habit-Liste mit schnellen Check-ins, Serien-Hinweisen und einer klaren Fortschrittsansicht.',
        },
        {
          title: 'Statistik-Dashboard',
          description:
            'Zeige Kalender-Heatmap, Abschlussraten, Serienmetriken und letzte Trends gemeinsam.',
        },
      ],
      fr: [
        {
          title: 'Creation d’habitude',
          description:
            'Montre le titre de l’habitude, le type de suivi, les regles de calendrier et les options de rappel pendant la creation.',
        },
        {
          title: 'Check-in quotidien',
          description:
            'Montre la liste du jour avec validation rapide, indicateurs de serie et progression lisible.',
        },
        {
          title: 'Tableau de stats',
          description:
            'Montre la heatmap calendrier, les taux de completion, les indicateurs de serie et les tendances recentes.',
        },
      ],
      it: [
        {
          title: 'Configurazione abitudine',
          description:
            'Mostra titolo, tipo di tracciamento, regole di pianificazione e opzioni di promemoria mentre crei un’abitudine.',
        },
        {
          title: 'Check-in giornaliero',
          description:
            'Mostra la lista del giorno con check-in rapidi, segnali delle serie e una vista pulita dei progressi.',
        },
        {
          title: 'Dashboard statistiche',
          description:
            'Mostra heatmap del calendario, tassi di completamento, metriche delle serie e trend recenti insieme.',
        },
      ],
      es: [
        {
          title: 'Configuracion del habito',
          description:
            'Muestra titulo del habito, tipo de seguimiento, reglas de calendario y opciones de recordatorio al crear un habito.',
        },
        {
          title: 'Check-in diario',
          description:
            'Muestra la lista de hoy con marcados rapidos, señales de racha y una vista limpia del progreso.',
        },
        {
          title: 'Panel de estadisticas',
          description:
            'Muestra mapa de calor del calendario, tasas de cumplimiento, metricas de racha y tendencias recientes juntas.',
        },
      ],
      pt: [
        {
          title: 'Configuracao do habito',
          description:
            'Mostra titulo do habito, tipo de acompanhamento, regras de agenda e opcoes de lembrete durante a criacao.',
        },
        {
          title: 'Check-in diario',
          description:
            'Mostra a lista do dia com marcacoes rapidas, sinais de sequencia e uma vista limpa do progresso.',
        },
        {
          title: 'Painel de estatisticas',
          description:
            'Mostra mapa de calor do calendario, taxas de conclusao, metricas de sequencia e tendencias recentes no mesmo ecra.',
        },
      ],
      sr: [
        {
          title: 'Podesavanje navike',
          description:
            'Prikazi naziv navike, tip pracenja, pravila rasporeda i opcije podsetnika dok se navika pravi.',
        },
        {
          title: 'Dnevni check-in',
          description:
            'Prikazi danasnju listu navika sa brzim potvrđivanjem, signalima niza i cistim prikazom napretka.',
        },
        {
          title: 'Statisticki pregled',
          description:
            'Prikazi kalendarsku heatmap-u, stope ispunjenja, metrike nizova i skorije trendove zajedno.',
        },
      ],
      hr: [
        {
          title: 'Postavljanje navike',
          description:
            'Prikazi naziv navike, vrstu pracenja, pravila rasporeda i opcije podsjetnika dok se navika stvara.',
        },
        {
          title: 'Dnevni check-in',
          description:
            'Prikazi danasnji popis navika s brzim oznacavanjem, signalima niza i cistim prikazom napretka.',
        },
        {
          title: 'Statisticki pregled',
          description:
            'Prikazi kalendarsku heatmapu, stope dovrsetka, metrike nizova i nedavne trendove zajedno.',
        },
      ],
      nl: [
        {
          title: 'Gewoonte instellen',
          description:
            'Toon de naam van de gewoonte, het type tracking, planningsregels en herinneringsopties tijdens het aanmaken.',
        },
        {
          title: 'Dagelijkse check-in',
          description:
            'Toon de gewoontelijst van vandaag met snelle check-ins, reeksignalen en een overzichtelijke voortgangsweergave.',
        },
        {
          title: 'Statistiekdashboard',
          description:
            'Toon de kalenderheatmap, voltooiingspercentages, reeksstatistieken en recente trends samen.',
        },
      ],
      pl: [
        {
          title: 'Konfiguracja nawyku',
          description:
            'Pokaz nazwe nawyku, typ sledzenia, zasady harmonogramu i opcje przypomnien podczas tworzenia.',
        },
        {
          title: 'Codzienny check-in',
          description:
            'Pokaz dzisiejsza liste nawykow z szybkim odhaczaniem, sygnalami serii i czytelnym widokiem postepu.',
        },
        {
          title: 'Panel statystyk',
          description:
            'Pokaz heatmape kalendarza, poziomy realizacji, metryki serii i ostatnie trendy razem.',
        },
      ],
      ro: [
        {
          title: 'Configurarea obiceiului',
          description:
            'Arata titlul obiceiului, tipul de urmarire, regulile de programare si optiunile de memento in timpul crearii.',
        },
        {
          title: 'Check-in zilnic',
          description:
            'Arata lista de azi cu bifari rapide, indicii de serie si o vedere curata a progresului.',
        },
        {
          title: 'Panou de statistici',
          description:
            'Arata heatmap-ul din calendar, ratele de completare, metricele seriilor si tendintele recente impreuna.',
        },
      ],
    },
    faqs: [
      {
        question: {
          en: 'What is {name} best for?',
          de: 'Wofuer eignet sich {name} am besten?',
          fr: 'Pour quoi {name} est-il le plus utile ?',
          it: 'Per cosa e piu utile {name}?',
          es: 'Para que sirve mejor {name}?',
          pt: 'Para que e mais util o {name}?',
          sr: 'Za sta je {name} najbolji?',
          hr: 'Za sto je {name} najbolji?',
          nl: 'Waar is {name} het meest geschikt voor?',
          pl: 'Do czego najlepiej nadaje sie {name}?',
          ro: 'Pentru ce este cel mai potrivit {name}?',
        },
        answer: { type: 'summary' },
      },
      {
        question: {
          en: 'Can {name} track different habit types?',
          de: 'Kann {name} verschiedene Habit-Typen verfolgen?',
          fr: 'Est-ce que {name} peut suivre plusieurs types d’habitudes ?',
          it: '{name} puo tracciare diversi tipi di abitudini?',
          es: 'Puede {name} seguir distintos tipos de habitos?',
          pt: 'O {name} consegue acompanhar varios tipos de habitos?',
          sr: 'Da li {name} moze da prati razlicite tipove navika?',
          hr: 'Moze li {name} pratiti razlicite vrste navika?',
          nl: 'Kan {name} verschillende soorten gewoonten volgen?',
          pl: 'Czy {name} obsluguje rozne typy nawykow?',
          ro: 'Poate {name} sa urmareasca tipuri diferite de obiceiuri?',
        },
        answer: { type: 'paragraphs', indices: [1] },
      },
      {
        question: {
          en: 'Does {name} show streaks and progress stats?',
          de: 'Zeigt {name} Serien und Fortschrittsstatistiken an?',
          fr: 'Est-ce que {name} affiche les series et les stats de progression ?',
          it: '{name} mostra serie e statistiche dei progressi?',
          es: 'Muestra {name} rachas y estadisticas de progreso?',
          pt: 'O {name} mostra sequencias e estatisticas de progresso?',
          sr: 'Da li {name} prikazuje nizove i statistiku napretka?',
          hr: 'Prikazuje li {name} nizove i statistiku napretka?',
          nl: 'Laat {name} reeksen en voortgangsstatistieken zien?',
          pl: 'Czy {name} pokazuje serie i statystyki postepu?',
          ro: 'Afiseaza {name} serii si statistici de progres?',
        },
        answer: { type: 'paragraphs', indices: [2, 3] },
      },
    ],
  },
  'water-reminder': {
    categoryKey: 'healthFitness',
    tagKeys: [
      'brandWaterReminder',
      'hydration',
      'reminders',
      'waterTracking',
      'wellness',
    ],
    relatedSlugs: ['habit-tracker', 'hiit-timer', 'big-ben'],
    schemaApplicationCategory: 'HealthApplication',
    metaTopic: {
      en: 'daily hydration reminders for Android',
      de: 'Trink-Erinnerungen fuer Android',
      fr: "rappels d'hydratation sur Android",
      it: 'promemoria per l’idratazione su Android',
      es: 'recordatorios de hidratacion para Android',
      pt: 'lembretes de hidratacao para Android',
      sr: 'podsetnici za hidrataciju na Androidu',
      hr: 'podsjetnici za hidrataciju na Androidu',
      nl: 'dagelijkse hydratatie op Android',
      pl: 'przypomnienia o nawodnieniu na Androida',
      ro: 'mementouri de hidratare pe Android',
    },
    features: [
      {
        paragraphIndex: 0,
        title: {
          en: 'Log water in seconds',
          de: 'Erfasse Wasser in Sekunden',
          fr: 'Enregistre ton eau en quelques secondes',
          it: 'Registra l’acqua in pochi secondi',
          es: 'Registra agua en segundos',
          pt: 'Regista agua em segundos',
          sr: 'Upisi vodu za nekoliko sekundi',
          hr: 'Unesi vodu u nekoliko sekundi',
          nl: 'Log water in seconden',
          pl: 'Zapisuj wode w kilka sekund',
          ro: 'Inregistreaza apa in cateva secunde',
        },
      },
      {
        paragraphIndex: 1,
        title: {
          en: 'Keep hydration streaks alive',
          de: 'Halte deine Trink-Serie am Leben',
          fr: 'Fais durer ta serie d’hydratation',
          it: 'Mantieni vive le serie di idratazione',
          es: 'Mantiene vivas tus rachas de hidratacion',
          pt: 'Mantem vivas as sequencias de hidratacao',
          sr: 'Odrzavaj niz hidratacije',
          hr: 'Odrzavaj niz hidratacije',
          nl: 'Houd je hydratatiereeks levend',
          pl: 'Podtrzymuj serie nawodnienia',
          ro: 'Pastreaza seriile de hidratare',
        },
      },
      {
        paragraphIndex: 3,
        title: {
          en: 'Use reminders that fit your day',
          de: 'Nutze Erinnerungen, die zu deinem Tag passen',
          fr: 'Utilise des rappels adaptes a ta journee',
          it: 'Usa promemoria adatti alla tua giornata',
          es: 'Usa recordatorios que encajan en tu dia',
          pt: 'Usa lembretes que encaixam no teu dia',
          sr: 'Koristi podsetnike koji prate tvoj dan',
          hr: 'Koristi podsjetnike koji prate tvoj dan',
          nl: 'Gebruik herinneringen die bij je dag passen',
          pl: 'Korzystaj z przypomnien dopasowanych do dnia',
          ro: 'Foloseste mementouri potrivite pentru ziua ta',
        },
      },
    ],
    screenshotRequirements: {
      en: [
        {
          title: 'Fast water log',
          description:
            'Show quick-add cup buttons, current goal progress, and one-tap logging on the main screen.',
        },
        {
          title: 'Reminder plan',
          description:
            'Show active reminder hours, interval settings, and notification controls in one simple view.',
        },
        {
          title: 'Hydration insights',
          description:
            'Show weekly stats, streak count, average intake, and best-day history together.',
        },
      ],
      de: [
        {
          title: 'Schnelles Wasser-Log',
          description:
            'Zeige Schnellbuttons fuer Becher, den aktuellen Ziel-Fortschritt und Eintragen mit einem Tippen auf dem Hauptbildschirm.',
        },
        {
          title: 'Erinnerungsplan',
          description:
            'Zeige aktive Erinnerungszeiten, Intervall-Einstellungen und Benachrichtigungssteuerung in einer einfachen Ansicht.',
        },
        {
          title: 'Trink-Insights',
          description:
            'Zeige Wochenstatistiken, Serienzaehler, Durchschnitt und den besten Tag gemeinsam.',
        },
      ],
      fr: [
        {
          title: 'Ajout rapide d’eau',
          description:
            'Montre les boutons d’ajout rapide, la progression vers l’objectif et l’enregistrement en un geste sur l’ecran principal.',
        },
        {
          title: 'Plan de rappels',
          description:
            'Montre les heures de rappel actives, les intervalles et les reglages de notification dans une vue simple.',
        },
        {
          title: 'Infos d’hydratation',
          description:
            'Montre les stats hebdomadaires, le compteur de serie, la moyenne et le meilleur jour ensemble.',
        },
      ],
      it: [
        {
          title: 'Log acqua veloce',
          description:
            'Mostra pulsanti rapidi per i bicchieri, avanzamento verso l’obiettivo e registrazione con un tocco nella schermata principale.',
        },
        {
          title: 'Piano promemoria',
          description:
            'Mostra ore attive dei promemoria, intervalli e controlli delle notifiche in una vista semplice.',
        },
        {
          title: 'Insight sull’idratazione',
          description:
            'Mostra statistiche settimanali, conteggio serie, media di assunzione e giorno migliore insieme.',
        },
      ],
      es: [
        {
          title: 'Registro rapido de agua',
          description:
            'Muestra botones rapidos por vaso, progreso hacia la meta y registro con un toque en la pantalla principal.',
        },
        {
          title: 'Plan de recordatorios',
          description:
            'Muestra horas activas de aviso, intervalos y controles de notificacion en una vista simple.',
        },
        {
          title: 'Datos de hidratacion',
          description:
            'Muestra estadisticas semanales, contador de racha, consumo medio y mejor dia juntos.',
        },
      ],
      pt: [
        {
          title: 'Registo rapido de agua',
          description:
            'Mostra botoes rapidos por copo, progresso da meta e registo com um toque no ecra principal.',
        },
        {
          title: 'Plano de lembretes',
          description:
            'Mostra horas ativas, intervalos e controlos de notificacao numa vista simples.',
        },
        {
          title: 'Indicadores de hidratacao',
          description:
            'Mostra estatisticas semanais, contador de sequencia, media de consumo e melhor dia em conjunto.',
        },
      ],
      sr: [
        {
          title: 'Brz unos vode',
          description:
            'Prikazi brze tastere za case, napredak ka cilju i unos jednim dodirom na glavnom ekranu.',
        },
        {
          title: 'Plan podsetnika',
          description:
            'Prikazi aktivne sate podsetnika, intervale i kontrole notifikacija u jednom jednostavnom prikazu.',
        },
        {
          title: 'Uvid u hidrataciju',
          description:
            'Prikazi nedeljnu statistiku, broj niza, prosecan unos i najbolji dan zajedno.',
        },
      ],
      hr: [
        {
          title: 'Brz unos vode',
          description:
            'Prikazi brze tipke za case, napredak prema cilju i unos jednim dodirom na glavnom ekranu.',
        },
        {
          title: 'Plan podsjetnika',
          description:
            'Prikazi aktivne sate podsjetnika, intervale i kontrole obavijesti u jednom jednostavnom prikazu.',
        },
        {
          title: 'Uvid u hidrataciju',
          description:
            'Prikazi tjednu statistiku, broj niza, prosjecan unos i najbolji dan zajedno.',
        },
      ],
      nl: [
        {
          title: 'Snelle waterlog',
          description:
            'Toon snelle bekerknoppen, voortgang naar het doel en loggen met een tik op het hoofdscherm.',
        },
        {
          title: 'Herinneringsplan',
          description:
            'Toon actieve herinneringsuren, intervalinstellingen en meldingsopties in een eenvoudige weergave.',
        },
        {
          title: 'Hydratatie-inzichten',
          description:
            'Toon weekstatistieken, reeksteller, gemiddelde inname en beste dag samen.',
        },
      ],
      pl: [
        {
          title: 'Szybki zapis wody',
          description:
            'Pokaz szybkie przyciski pojemnosci, postep celu i zapis jednym dotknieciem na glownym ekranie.',
        },
        {
          title: 'Plan przypomnien',
          description:
            'Pokaz aktywne godziny przypomnien, interwaly i ustawienia powiadomien w jednym prostym widoku.',
        },
        {
          title: 'Wglad w nawodnienie',
          description:
            'Pokaz tygodniowe statystyki, licznik serii, srednie spozycie i najlepszy dzien razem.',
        },
      ],
      ro: [
        {
          title: 'Log rapid de apa',
          description:
            'Arata butoane rapide pentru pahare, progresul spre tinta si inregistrarea cu o atingere pe ecranul principal.',
        },
        {
          title: 'Plan de mementouri',
          description:
            'Arata orele active, intervalele si controalele de notificare intr-o vedere simpla.',
        },
        {
          title: 'Informatii despre hidratare',
          description:
            'Arata statisticile saptamanale, numarul seriilor, consumul mediu si cea mai buna zi impreuna.',
        },
      ],
    },
    faqs: [
      {
        question: {
          en: 'What is {name} best for?',
          de: 'Wofuer eignet sich {name} am besten?',
          fr: 'Pour quoi {name} est-il le plus utile ?',
          it: 'Per cosa e piu utile {name}?',
          es: 'Para que sirve mejor {name}?',
          pt: 'Para que e mais util o {name}?',
          sr: 'Za sta je {name} najbolji?',
          hr: 'Za sto je {name} najbolji?',
          nl: 'Waar is {name} het meest geschikt voor?',
          pl: 'Do czego najlepiej nadaje sie {name}?',
          ro: 'Pentru ce este cel mai potrivit {name}?',
        },
        answer: { type: 'summary' },
      },
      {
        question: {
          en: 'Can I log water quickly in {name}?',
          de: 'Kann ich Wasser in {name} schnell eintragen?',
          fr: 'Puis-je enregistrer mon eau rapidement dans {name} ?',
          it: 'Posso registrare l’acqua rapidamente in {name}?',
          es: 'Puedo registrar agua rapidamente en {name}?',
          pt: 'Posso registar agua rapidamente no {name}?',
          sr: 'Mogu li brzo da upisem vodu u {name}?',
          hr: 'Mogu li brzo upisati vodu u {name}?',
          nl: 'Kan ik water snel loggen in {name}?',
          pl: 'Czy moge szybko zapisywac wode w {name}?',
          ro: 'Pot inregistra rapid apa in {name}?',
        },
        answer: { type: 'paragraphs', indices: [0] },
      },
      {
        question: {
          en: 'Does {name} include reminders and hydration stats?',
          de: 'Enthaelt {name} Erinnerungen und Trink-Statistiken?',
          fr: 'Est-ce que {name} inclut des rappels et des statistiques ?',
          it: '{name} include promemoria e statistiche sull’idratazione?',
          es: 'Incluye {name} recordatorios y estadisticas de hidratacion?',
          pt: 'O {name} inclui lembretes e estatisticas de hidratacao?',
          sr: 'Da li {name} ima podsetnike i statistiku hidratacije?',
          hr: 'Ima li {name} podsjetnike i statistiku hidratacije?',
          nl: 'Bevat {name} herinneringen en hydratatiestatistieken?',
          pl: 'Czy {name} zawiera przypomnienia i statystyki nawodnienia?',
          ro: 'Include {name} mementouri si statistici despre hidratare?',
        },
        answer: { type: 'paragraphs', indices: [2, 3] },
      },
    ],
  },
  'big-ben': {
    categoryKey: 'lifestyle',
    tagKeys: [
      'brandBigBen',
      'clockSounds',
      'chimes',
      'london',
      'offlineAudio',
    ],
    relatedSlugs: ['water-reminder', 'habit-tracker', 'hiit-timer'],
    schemaApplicationCategory: 'LifestyleApplication',
    metaTopic: {
      en: 'Big Ben chimes and offline audio',
      de: 'Big Ben Gelaeut und Audio ohne Internet',
      fr: 'carillons Big Ben et audio hors ligne',
      it: 'rintocchi di Big Ben e audio offline',
      es: 'campanadas de Big Ben y audio sin conexion',
      pt: 'toques do Big Ben e audio sem internet',
      sr: 'Big Ben zvona i zvuk bez interneta',
      hr: 'Big Ben zvona i zvuk bez interneta',
      nl: 'Big Ben-klokken en audio zonder internet',
      pl: 'dzwony Big Bena i dzwiek bez internetu',
      ro: 'sunete Big Ben si audio fara internet',
    },
    features: [
      {
        paragraphIndex: 0,
        title: {
          en: 'Play iconic chimes on demand',
          de: 'Spiele ikonische Glockenschlaege sofort ab',
          fr: 'Lance des carillons iconiques a la demande',
          it: 'Riproduci i rintocchi iconici quando vuoi',
          es: 'Reproduce campanadas iconicas al instante',
          pt: 'Ouve badaladas iconicas a qualquer momento',
          sr: 'Pusti legendarna zvona kad god pozelis',
          hr: 'Pusti legendarna zvona kad god pozelis',
          nl: 'Speel iconische klokslagen direct af',
          pl: 'Odtwarzaj ikoniczne dzwony na zawołanie',
          ro: 'Reda clopotele iconice oricand',
        },
      },
      {
        paragraphIndex: 1,
        title: {
          en: 'Listen offline without friction',
          de: 'Hoere offline ohne Umwege',
          fr: 'Ecoute hors ligne sans friction',
          it: 'Ascolta offline senza complicazioni',
          es: 'Escucha sin conexion y sin complicaciones',
          pt: 'Ouve offline sem complicacoes',
          sr: 'Slusaj bez interneta i bez komplikacija',
          hr: 'Slusaj bez interneta i bez komplikacija',
          nl: 'Luister offline zonder gedoe',
          pl: 'Sluchaj offline bez komplikacji',
          ro: 'Asculta offline fara complicatii',
        },
      },
      {
        paragraphIndex: 3,
        title: {
          en: 'Use it for ambience or nostalgia',
          de: 'Nutze es fuer Ambiente oder Nostalgie',
          fr: 'Utilise-le pour l’ambiance ou la nostalgie',
          it: 'Usalo per atmosfera o nostalgia',
          es: 'Usalo para ambiente o nostalgia',
          pt: 'Usa-o para ambiente ou nostalgia',
          sr: 'Koristi ga za atmosferu ili nostalgiju',
          hr: 'Koristi ga za atmosferu ili nostalgiju',
          nl: 'Gebruik het voor sfeer of nostalgie',
          pl: 'Uzywaj dla klimatu albo nostalgii',
          ro: 'Foloseste-l pentru atmosfera sau nostalgie',
        },
      },
    ],
    screenshotRequirements: {
      en: [
        {
          title: 'Main chime player',
          description:
            'Show the primary playback screen with the Big Ben visual identity and clear audio controls.',
        },
        {
          title: 'Offline listening',
          description:
            'Show playback in a clean screen that communicates instant use without an internet connection.',
        },
        {
          title: 'Everyday use context',
          description:
            'Show the app framed for ambience, nostalgia, or ringtone inspiration with minimal distraction.',
        },
      ],
      de: [
        {
          title: 'Haupt-Player',
          description:
            'Zeige den zentralen Wiedergabebildschirm mit Big-Ben-Optik und klaren Audio-Steuerungen.',
        },
        {
          title: 'Offline-Wiedergabe',
          description:
            'Zeige eine saubere Wiedergabeansicht, die sofortige Nutzung ohne Internet klar vermittelt.',
        },
        {
          title: 'Alltagskontext',
          description:
            'Zeige die App als Stimmung, Nostalgie oder Klingelton-Inspiration mit moeglichst wenig Ablenkung.',
        },
      ],
      fr: [
        {
          title: 'Lecteur principal',
          description:
            'Montre l’ecran principal de lecture avec l’identite visuelle Big Ben et des commandes audio claires.',
        },
        {
          title: 'Ecoute hors ligne',
          description:
            'Montre la lecture dans un ecran propre qui communique un usage immediat sans connexion.',
        },
        {
          title: 'Contexte du quotidien',
          description:
            'Montre l’app comme source d’ambiance, de nostalgie ou d’inspiration pour sonnerie avec peu de distraction.',
        },
      ],
      it: [
        {
          title: 'Player principale',
          description:
            'Mostra la schermata principale di riproduzione con identita visiva Big Ben e controlli audio chiari.',
        },
        {
          title: 'Ascolto offline',
          description:
            'Mostra la riproduzione in una schermata pulita che comunichi uso immediato senza connessione.',
        },
        {
          title: 'Uso quotidiano',
          description:
            'Mostra l’app come fonte di atmosfera, nostalgia o ispirazione per suonerie con poche distrazioni.',
        },
      ],
      es: [
        {
          title: 'Reproductor principal',
          description:
            'Muestra la pantalla principal de reproduccion con identidad visual de Big Ben y controles de audio claros.',
        },
        {
          title: 'Escucha sin conexion',
          description:
            'Muestra la reproduccion en una pantalla limpia que comunique uso inmediato sin internet.',
        },
        {
          title: 'Uso diario',
          description:
            'Muestra la app como fuente de ambiente, nostalgia o inspiracion para tonos con minima distraccion.',
        },
      ],
      pt: [
        {
          title: 'Leitor principal',
          description:
            'Mostra o ecra principal de reproducao com identidade visual Big Ben e controlos de audio claros.',
        },
        {
          title: 'Escuta offline',
          description:
            'Mostra a reproducao num ecra limpo que comunique utilizacao imediata sem internet.',
        },
        {
          title: 'Contexto do dia a dia',
          description:
            'Mostra a app para ambiente, nostalgia ou inspiracao de toque com o minimo de distracao.',
        },
      ],
      sr: [
        {
          title: 'Glavni plejer',
          description:
            'Prikazi glavni ekran reprodukcije sa Big Ben vizuelnim identitetom i jasnim audio komandama.',
        },
        {
          title: 'Slusanje bez interneta',
          description:
            'Prikazi reprodukciju u cistom ekranu koji jasno govori da radi odmah i bez internet veze.',
        },
        {
          title: 'Svakodnevni kontekst',
          description:
            'Prikazi aplikaciju za atmosferu, nostalgiju ili inspiraciju za zvono uz minimalno ometanje.',
        },
      ],
      hr: [
        {
          title: 'Glavni player',
          description:
            'Prikazi glavni ekran reprodukcije s Big Ben vizualnim identitetom i jasnim audio kontrolama.',
        },
        {
          title: 'Slusanje bez interneta',
          description:
            'Prikazi reprodukciju u cistom ekranu koji jasno pokazuje trenutno koristenje bez interneta.',
        },
        {
          title: 'Svakodnevni kontekst',
          description:
            'Prikazi aplikaciju za atmosferu, nostalgiju ili inspiraciju za melodiju uz minimalna ometanja.',
        },
      ],
      nl: [
        {
          title: 'Hoofdspeler',
          description:
            'Toon het hoofdscherm voor afspelen met Big Ben-uitstraling en duidelijke audioknoppen.',
        },
        {
          title: 'Offline luisteren',
          description:
            'Toon afspelen in een schoon scherm dat direct gebruik zonder internet duidelijk maakt.',
        },
        {
          title: 'Dagelijkse context',
          description:
            'Toon de app voor sfeer, nostalgie of ringtone-inspiratie met zo min mogelijk afleiding.',
        },
      ],
      pl: [
        {
          title: 'Glowny odtwarzacz',
          description:
            'Pokaz glowny ekran odtwarzania z oprawa Big Bena i czytelnymi kontrolkami audio.',
        },
        {
          title: 'Sluchanie offline',
          description:
            'Pokaz odtwarzanie na czystym ekranie, ktory jasno komunikuje dzialanie bez internetu.',
        },
        {
          title: 'Codzienny kontekst',
          description:
            'Pokaz aplikacje jako zrodlo klimatu, nostalgii lub inspiracji dla dzwonka przy minimalnych rozproszeniach.',
        },
      ],
      ro: [
        {
          title: 'Player principal',
          description:
            'Arata ecranul principal de redare cu identitatea vizuala Big Ben si controale audio clare.',
        },
        {
          title: 'Ascultare offline',
          description:
            'Arata redarea intr-un ecran curat care comunica folosirea imediata fara internet.',
        },
        {
          title: 'Context de zi cu zi',
          description:
            'Arata aplicatia pentru atmosfera, nostalgie sau inspiratie de ton cu distractii minime.',
        },
      ],
    },
    faqs: [
      {
        question: {
          en: 'What is {name} best for?',
          de: 'Wofuer eignet sich {name} am besten?',
          fr: 'Pour quoi {name} est-il le plus utile ?',
          it: 'Per cosa e piu utile {name}?',
          es: 'Para que sirve mejor {name}?',
          pt: 'Para que e mais util o {name}?',
          sr: 'Za sta je {name} najbolji?',
          hr: 'Za sto je {name} najbolji?',
          nl: 'Waar is {name} het meest geschikt voor?',
          pl: 'Do czego najlepiej nadaje sie {name}?',
          ro: 'Pentru ce este cel mai potrivit {name}?',
        },
        answer: { type: 'summary' },
      },
      {
        question: {
          en: 'Does {name} work offline?',
          de: 'Funktioniert {name} offline?',
          fr: 'Est-ce que {name} fonctionne hors ligne ?',
          it: '{name} funziona offline?',
          es: 'Funciona {name} sin conexion?',
          pt: 'O {name} funciona offline?',
          sr: 'Da li {name} radi bez interneta?',
          hr: 'Radi li {name} bez interneta?',
          nl: 'Werkt {name} offline?',
          pl: 'Czy {name} dziala offline?',
          ro: 'Functioneaza {name} offline?',
        },
        answer: { type: 'paragraphs', indices: [1] },
      },
      {
        question: {
          en: 'Can I use {name} for ambience or ringtone ideas?',
          de: 'Kann ich {name} fuer Ambiente oder Klingelton-Ideen nutzen?',
          fr: 'Puis-je utiliser {name} pour l’ambiance ou des idees de sonnerie ?',
          it: 'Posso usare {name} per atmosfera o idee per suonerie?',
          es: 'Puedo usar {name} para ambiente o ideas de tono?',
          pt: 'Posso usar o {name} para ambiente ou ideias de toque?',
          sr: 'Mogu li da koristim {name} za atmosferu ili ideje za zvono?',
          hr: 'Mogu li koristiti {name} za atmosferu ili ideje za melodiju?',
          nl: 'Kan ik {name} gebruiken voor sfeer of ringtone-ideeen?',
          pl: 'Czy moge uzywac {name} dla klimatu albo pomyslow na dzwonek?',
          ro: 'Pot folosi {name} pentru atmosfera sau idei de ton?',
        },
        answer: { type: 'paragraphs', indices: [0, 3] },
      },
    ],
  },
  gastarbajter: {
    categoryKey: 'casual',
    tagKeys: [
      'casualGame',
      'storyGame',
      'migrationJourney',
      'shortSessions',
      'humor',
    ],
    relatedSlugs: [],
    schemaApplicationCategory: 'GameApplication',
    metaTopic: {
      en: 'story-driven casual game for Android',
      de: 'storygetriebenes Casual-Spiel fuer Android',
      fr: 'jeu casual narratif sur Android',
      it: 'gioco casual narrativo per Android',
      es: 'juego casual narrativo para Android',
      pt: 'jogo casual narrativo para Android',
      sr: 'narativna lezerna igra za Android',
      hr: 'narativna lezerna igra za Android',
      nl: 'verhaalgedreven casual game voor Android',
      pl: 'fabularna gra casualowa na Androida',
      ro: 'joc casual narativ pentru Android',
    },
    features: [
      {
        paragraphIndex: 0,
        title: {
          en: 'Follow a move-abroad story',
          de: 'Erlebe eine Auswanderungs-Geschichte',
          fr: 'Suis une histoire de depart a l’etranger',
          it: 'Segui una storia di vita all’estero',
          es: 'Sigue una historia de emigracion',
          pt: 'Segue uma historia de emigracao',
          sr: 'Prati pricu o odlasku u inostranstvo',
          hr: 'Prati pricu o odlasku u inozemstvo',
          nl: 'Volg een verhaal over verhuizen naar het buitenland',
          pl: 'Sledz historie o wyjezdzie za granice',
          ro: 'Urmareste o poveste despre plecarea in strainatate',
        },
      },
      {
        paragraphIndex: 1,
        title: {
          en: 'Play through relatable migration steps',
          de: 'Spiele nachvollziehbare Migrationsschritte',
          fr: 'Joue a travers des etapes migratoires concretes',
          it: 'Gioca attraverso tappe migratorie riconoscibili',
          es: 'Juega a traves de pasos migratorios reconocibles',
          pt: 'Joga atraves de etapas migratorias reconheciveis',
          sr: 'Igraj kroz prepoznatljive korake selidbe',
          hr: 'Igraj kroz prepoznatljive korake preseljenja',
          nl: 'Speel door herkenbare migratiestappen',
          pl: 'Przechodz przez znajome etapy emigracji',
          ro: 'Joaca prin etape migratorii usor de recunoscut',
        },
      },
      {
        paragraphIndex: 2,
        title: {
          en: 'Enjoy short sessions with personality',
          de: 'Geniesse kurze Sessions mit Persoenlichkeit',
          fr: 'Profite de courtes sessions pleines de caractere',
          it: 'Goditi sessioni brevi con personalita',
          es: 'Disfruta sesiones cortas con personalidad',
          pt: 'Desfruta de sessoes curtas com personalidade',
          sr: 'Uzivaj u kratkim sesijama sa karakterom',
          hr: 'Uzivaj u kratkim sesijama s karakterom',
          nl: 'Geniet van korte sessies met karakter',
          pl: 'Ciesz sie krotkimi sesjami z charakterem',
          ro: 'Bucura-te de sesiuni scurte cu personalitate',
        },
      },
    ],
    screenshotRequirements: {
      en: [
        {
          title: 'Language and document goals',
          description:
            'Show early objectives around learning the language and collecting required documents.',
        },
        {
          title: 'Milestone progression',
          description:
            'Show Djuro moving through humorous relocation checkpoints and visible progress markers.',
        },
        {
          title: 'Short-session gameplay',
          description:
            'Show simple controls, readable goals, and a playful in-run moment that feels easy to pick up.',
        },
      ],
      de: [
        {
          title: 'Sprach- und Dokumentziele',
          description:
            'Zeige fruehe Ziele rund um Sprache lernen und das Sammeln benoetigter Dokumente.',
        },
        {
          title: 'Meilenstein-Fortschritt',
          description:
            'Zeige Djuro auf humorvollen Auswanderungs-Checkpoints mit sichtbaren Fortschrittsmarkern.',
        },
        {
          title: 'Kurze Gameplay-Session',
          description:
            'Zeige einfache Steuerung, lesbare Ziele und einen spielerischen Moment, der direkt zugaenglich wirkt.',
        },
      ],
      fr: [
        {
          title: 'Objectifs langue et papiers',
          description:
            'Montre les premiers objectifs autour de la langue et de la collecte des documents necessaires.',
        },
        {
          title: 'Progression par etapes',
          description:
            'Montre Djuro avancant entre des checkpoints de relocalisation humoristiques avec des marqueurs visibles.',
        },
        {
          title: 'Gameplay en session courte',
          description:
            'Montre des commandes simples, des objectifs lisibles et un moment de jeu facile a prendre en main.',
        },
      ],
      it: [
        {
          title: 'Obiettivi lingua e documenti',
          description:
            'Mostra i primi obiettivi legati alla lingua e alla raccolta dei documenti necessari.',
        },
        {
          title: 'Progressione per tappe',
          description:
            'Mostra Djuro mentre attraversa checkpoint ironici del trasferimento con indicatori di avanzamento visibili.',
        },
        {
          title: 'Gameplay in sessione breve',
          description:
            'Mostra controlli semplici, obiettivi leggibili e un momento di gioco leggero e immediato.',
        },
      ],
      es: [
        {
          title: 'Objetivos de idioma y papeles',
          description:
            'Muestra objetivos tempranos relacionados con aprender el idioma y reunir los documentos necesarios.',
        },
        {
          title: 'Progresion por hitos',
          description:
            'Muestra a Djuro avanzando por checkpoints de mudanza con humor y marcadores visibles de progreso.',
        },
        {
          title: 'Gameplay de sesion corta',
          description:
            'Muestra controles simples, metas legibles y un momento de partida facil de entender.',
        },
      ],
      pt: [
        {
          title: 'Objetivos de lingua e documentos',
          description:
            'Mostra objetivos iniciais ligados a aprender a lingua e a reunir os documentos necessarios.',
        },
        {
          title: 'Progressao por marcos',
          description:
            'Mostra Djuro a passar por checkpoints de mudanca com humor e marcadores claros de progresso.',
        },
        {
          title: 'Gameplay para sessoes curtas',
          description:
            'Mostra controlos simples, objetivos legiveis e um momento de jogo facil de agarrar.',
        },
      ],
      sr: [
        {
          title: 'Ciljevi jezika i papira',
          description:
            'Prikazi rane ciljeve oko ucenja jezika i skupljanja potrebnih dokumenata.',
        },
        {
          title: 'Napredak po koracima',
          description:
            'Prikazi Djuru kako prolazi kroz duhovite tacke preseljenja sa jasno vidljivim napretkom.',
        },
        {
          title: 'Kratka gameplay sesija',
          description:
            'Prikazi jednostavne kontrole, citljive ciljeve i razigran trenutak koji deluje lako za ulazak.',
        },
      ],
      hr: [
        {
          title: 'Ciljevi jezika i papira',
          description:
            'Prikazi rane ciljeve oko ucenja jezika i skupljanja potrebnih dokumenata.',
        },
        {
          title: 'Napredak po koracima',
          description:
            'Prikazi Djuru kako prolazi kroz duhovite tocke preseljenja s jasno vidljivim napretkom.',
        },
        {
          title: 'Kratka gameplay sesija',
          description:
            'Prikazi jednostavne kontrole, citljive ciljeve i razigran trenutak koji djeluje lako za ulazak.',
        },
      ],
      nl: [
        {
          title: 'Taal- en documentdoelen',
          description:
            'Toon vroege doelen rond taal leren en het verzamelen van de nodige documenten.',
        },
        {
          title: 'Voortgang per mijlpaal',
          description:
            'Toon Djuro bij humoristische verhuischeckpoints met duidelijke voortgangsmarkeringen.',
        },
        {
          title: 'Gameplay voor korte sessies',
          description:
            'Toon simpele besturing, leesbare doelen en een speels moment dat direct toegankelijk voelt.',
        },
      ],
      pl: [
        {
          title: 'Cele jezykowe i dokumenty',
          description:
            'Pokaz wczesne cele zwiazane z nauka jezyka i zbieraniem potrzebnych dokumentow.',
        },
        {
          title: 'Postep etapami',
          description:
            'Pokaz Djure przechodzacego przez zabawne punkty emigracyjnej drogi z widocznym postepem.',
        },
        {
          title: 'Krotka sesja rozgrywki',
          description:
            'Pokaz proste sterowanie, czytelne cele i lekki moment rozgrywki, w ktory latwo wejsc.',
        },
      ],
      ro: [
        {
          title: 'Obiective de limba si documente',
          description:
            'Arata obiective timpurii legate de invatarea limbii si strangerea documentelor necesare.',
        },
        {
          title: 'Progres pe etape',
          description:
            'Arata-l pe Djuro trecand prin checkpoint-uri amuzante de relocare cu marcatori de progres vizibili.',
        },
        {
          title: 'Gameplay pentru sesiuni scurte',
          description:
            'Arata controale simple, obiective usor de citit si un moment de joc jucaus, usor de prins.',
        },
      ],
    },
    faqs: [
      {
        question: {
          en: 'What is the goal of {name}?',
          de: 'Was ist das Ziel von {name}?',
          fr: 'Quel est l’objectif de {name} ?',
          it: 'Qual e l’obiettivo di {name}?',
          es: 'Cual es el objetivo de {name}?',
          pt: 'Qual e o objetivo de {name}?',
          sr: 'Koji je cilj igre {name}?',
          hr: 'Koji je cilj igre {name}?',
          nl: 'Wat is het doel van {name}?',
          pl: 'Jaki jest cel gry {name}?',
          ro: 'Care este scopul jocului {name}?',
        },
        answer: { type: 'summary' },
      },
      {
        question: {
          en: 'What makes {name} different from a typical casual game?',
          de: 'Was unterscheidet {name} von einem typischen Casual-Spiel?',
          fr: 'Qu’est-ce qui differencie {name} d’un jeu casual classique ?',
          it: 'Cosa rende {name} diverso da un tipico gioco casual?',
          es: 'Que hace diferente a {name} frente a un juego casual tipico?',
          pt: 'O que torna {name} diferente de um jogo casual tipico?',
          sr: 'Sta {name} razlikuje od tipicne lezerne igre?',
          hr: 'Sto {name} razlikuje od tipicne lezerne igre?',
          nl: 'Wat maakt {name} anders dan een typische casual game?',
          pl: 'Co odroznia {name} od typowej gry casualowej?',
          ro: 'Ce face {name} diferit fata de un joc casual obisnuit?',
        },
        answer: { type: 'paragraphs', indices: [1, 3] },
      },
      {
        question: {
          en: 'Is {name} good for short play sessions?',
          de: 'Eignet sich {name} fuer kurze Spielsessions?',
          fr: 'Est-ce que {name} convient aux sessions courtes ?',
          it: '{name} va bene per sessioni di gioco brevi?',
          es: 'Es {name} bueno para sesiones cortas?',
          pt: 'O {name} resulta bem em sessoes curtas?',
          sr: 'Da li je {name} dobar za kratke sesije igranja?',
          hr: 'Je li {name} dobar za kratke sesije igranja?',
          nl: 'Is {name} geschikt voor korte speelsessies?',
          pl: 'Czy {name} nadaje sie do krotkich sesji gry?',
          ro: 'Este {name} bun pentru sesiuni scurte de joc?',
        },
        answer: { type: 'paragraphs', indices: [2] },
      },
    ],
  },
};

function fillName(template: string, name: string): string {
  return template.replaceAll('{name}', name);
}

function buildAnswer(release: Release, blueprint: AnswerBlueprint): string {
  if (blueprint.type === 'summary') {
    return release.summary;
  }

  return blueprint.indices
    .map((index) => release.longDescription[index] ?? '')
    .filter(Boolean)
    .join(' ');
}

export function getReleaseExtraContent(
  locale: Locale,
  release: Release,
): ReleaseExtraContent {
  const blueprint: ReleaseEnhancementBlueprint = releaseEnhancements[release.slug];

  return {
    category: categoryLabels[blueprint.categoryKey][locale],
    tags: blueprint.tagKeys.map((tag: TagKey) => tagLabels[tag][locale]),
    metaTitle: `${release.name} | ${blueprint.metaTopic[locale]} | StoopidCartoons`,
    metaDescription: release.summary,
    schemaApplicationCategory: blueprint.schemaApplicationCategory,
    featureBullets: blueprint.features.map((feature: FeatureBlueprint) => ({
      title: feature.title[locale],
      description:
        release.longDescription[feature.paragraphIndex] ?? release.summary,
    })),
    screenshotRequirements: blueprint.screenshotRequirements[locale],
    faqs: blueprint.faqs.map((faq: FaqBlueprint) => ({
      question: fillName(faq.question[locale], release.name),
      answer: buildAnswer(release, faq.answer),
    })),
    relatedSlugs: blueprint.relatedSlugs,
  };
}
