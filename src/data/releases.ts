import type { Locale } from '../utils/translations';

export type ReleaseKind = 'app' | 'game';
export type ReleaseAccent = 'red' | 'blue' | 'green' | 'orange';

interface ReleaseBase {
  slug: string;
  kind: ReleaseKind;
  featured: boolean;
  accent: ReleaseAccent;
  icon: string;
  googlePlayUrl?: string;
  websiteUrl?: string;
}

interface ReleaseTranslation {
  name: string;
  summary: string;
  longDescription: string[];
  category: string;
  platforms: string[];
  tags: string[];
}

export interface Release extends ReleaseBase, ReleaseTranslation { }

const releaseBases = [
  {
    slug: 'water-reminder',
    kind: 'app',
    featured: true,
    accent: 'green',
    icon: 'apps/icons/WaterReminder.png',
    googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.stoopidcartoons.waterreminder',
  },
  {
    slug: 'big-ben',
    kind: 'app',
    featured: true,
    accent: 'blue',
    icon: 'apps/icons/BigBen.png',
    googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.stoopidcartoons.bigben',
  },
  {
    slug: 'gastarbajter',
    kind: 'game',
    featured: true,
    accent: 'red',
    icon: 'apps/icons/Gastarbajter.png',
    googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.stoopidcartoons.gastarbajter',
  },
  {
    slug: 'the-birds',
    kind: 'game',
    featured: false,
    accent: 'orange',
    icon: 'apps/icons/TheBirds.png',
    googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.stoopidcartoons.thebirds'
  },
  {
    slug: 'bank-escape',
    kind: 'game',
    featured: false,
    accent: 'green',
    icon: 'apps/icons/BankEscape.png',
    googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.stoopidcartoons.bankescape'
  },
  {
    slug: 'zigzag-ski',
    kind: 'game',
    featured: false,
    accent: 'blue',
    icon: 'apps/icons/ZigZag.png',
    googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.stoopidcartoons.zigzagski'
  },
  {
    slug: 'kiss-the-boss',
    kind: 'game',
    featured: false,
    accent: 'red',
    icon: 'apps/icons/KissTheBoss.png',
    googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.stoopidcartoons.kisstheboss'
  },
  {
    slug: 'santas-lost-presents',
    kind: 'game',
    featured: false,
    accent: 'orange',
    icon: 'apps/icons/Santa.png',
    googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.stoopidcartoons.santaslostpresents'
  },
] as const satisfies readonly ReleaseBase[];

type ReleaseSlug = (typeof releaseBases)[number]['slug'];

const releaseTranslations: Record<Locale, Record<ReleaseSlug, ReleaseTranslation>> = {
  en: {
    'water-reminder': {
      name: 'Water Reminder',
      summary:
        'Track your daily water intake, build healthy hydration habits, and stay consistent with smart reminders and progress insights.',
      longDescription: [
        'Water Reminder is a simple and effective hydration tracking app designed to help you build a consistent daily water drinking habit. With quick-add buttons and an intuitive interface, logging your water intake takes just a second.',
        'Stay motivated with daily streak tracking that shows how many days in a row you have reached your hydration goal. The app encourages consistency and helps you turn healthy hydration into a long-term routine.',
        'Get a clear overview of your progress with weekly statistics, detailed history, and insights such as your average water consumption and best-performing day. This allows you to understand your habits and improve over time.',
        'Customizable reminders help you stay on track throughout the day. Set your own schedule and never forget to drink water, whether you are at work, at home, or on the go.',
        'Designed for simplicity and efficiency, Water Reminder is perfect for anyone looking to improve their health, increase energy levels, and maintain proper hydration with minimal effort.',
      ],
      category: 'Health & Fitness',
      platforms: ['Android'],
      tags: ['Hydration', 'Health', 'Habit Tracker', 'Reminders', 'Water Tracking'],
    },
    'big-ben': {
      name: 'Big Ben (Chiming)',
      summary:
        'Carry the iconic Big Ben chimes wherever you go with realistic clock sounds and simple, offline playback.',
      longDescription: [
        'Big Ben (Chiming) brings the legendary sound of London’s most famous clock tower directly to your Android device. Whether you love classic clock chimes, need a unique ringtone, or simply enjoy ambient timekeeping sounds, this app delivers authentic Big Ben audio anytime, anywhere.',
        'Designed for simplicity and accessibility, the app lets you play high-quality chimes on demand, making it perfect for relaxation, nostalgia, or adding a touch of British charm to your day. With lightweight performance and offline functionality, you can enjoy the sound of Big Ben without needing an internet connection.',
        'Ideal for fans of traditional clock sounds, London landmarks, and minimalistic audio apps, Big Ben (Chiming) offers a straightforward experience focused purely on what matters — the iconic bell sound itself.',
        'Use it as a background ambiance, a reminder of travels, or even as a creative ringtone alternative. Whether you’re at home, at work, or on the move, the timeless chime of Big Ben is always within reach.',
      ],
      category: 'Lifestyle',
      platforms: ['Android'],
      tags: ['Big Ben', 'Clock Sounds', 'Chimes', 'London', 'Offline Audio'],
    },
    'gastarbajter': {
      name: 'Gastarbajter',
      summary:
        'Help Djuro navigate life abroad by learning the language, collecting documents, and chasing the dream of working in Europe.',
      longDescription: [
        'Gastarbajter is a story-driven casual game that follows Djuro on his journey to build a better life in Europe. Starting from humble beginnings, your goal is to help him learn a new language, gather all required documents, and successfully prepare for life abroad.',
        'Inspired by real-life experiences of workers moving overseas, the game blends humor, cultural references, and light challenges into a unique gameplay experience. Each step of the journey reflects common obstacles faced when relocating — from paperwork and bureaucracy to communication barriers.',
        'Players progress by completing tasks, unlocking milestones, and guiding Djuro toward his ultimate goal: becoming a successful gastarbajter. The gameplay is simple, accessible, and designed for short sessions, making it ideal for casual players.',
        'Whether you’re familiar with the concept of working abroad or discovering it for the first time, Gastarbajter offers a relatable and entertaining perspective on migration, ambition, and everyday struggles.',
        'With its minimalist design and humorous tone, the game provides a light yet meaningful experience that connects with players from across Europe and beyond.',
      ],
      category: 'Casual',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade', 'Platformer'],
    },
    'the-birds': {
      name: 'The Birds',
      summary:
        'Fly through obstacles, flap your wings, and master fast-paced arcade gameplay across multiple worlds and bird abilities.',
      longDescription: [
        'The Birds is a fast-paced arcade flying game where timing, precision, and quick reflexes are the key to survival. Tap to flap your wings, guide your bird through narrow gaps, and avoid obstacles as you aim for the highest possible score.',
        'Set across multiple stages, the game challenges players to progress through different worlds while mastering simple one-touch controls. Each run is a test of focus and rhythm, making it easy to play but difficult to master.',
        'With seven unique birds and multiple abilities to unlock, The Birds adds variety to every attempt. Players can explore different playstyles while pushing further distances and improving their performance.',
        'The game features colorful visuals, smooth animations, and short, replayable sessions that make it perfect for quick gameplay anytime, anywhere.',
        'Whether you enjoy classic arcade mechanics or endless runner-style challenges, The Birds delivers a lightweight and addictive experience built around pure gameplay.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade'],
    },
    'bank-escape': {
      name: 'Bank Escape',
      summary:
        'Escape the bank with the money, avoid getting caught, and test your reflexes in a simple but highly addictive arcade challenge.',
      longDescription: [
        'Fast-paced arcade escape game.',
        'Collect money and avoid getting arrested.',
        'Simple controls, challenging gameplay.',
        'Improve your score with each run.',
        'Perfect for short sessions.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade', 'Platformer'],
    },
    'zigzag-ski': {
      name: 'ZigZag Ski',
      summary:
        'Carve your way down snowy slopes, dodge obstacles, and master precise zigzag movement in a fast-paced arcade skiing challenge.',
      longDescription: [
        'ZigZag Ski is a fast-paced arcade action game where precision and timing are everything. Guide your skier down a winding mountain path, making sharp turns and avoiding obstacles as the speed gradually increases.',
        'The gameplay is built around simple tap controls — change direction at the right moment to stay on track and survive as long as possible. Each run becomes more intense, testing your reflexes and focus with every turn.',
        'As you descend through snowy environments, you’ll need to navigate tight zigzag paths, avoid barriers, and collect items along the way to improve your performance. The challenge lies in maintaining control while reacting quickly to changing terrain. :contentReference[oaicite:0]{index=0}',
        'Designed for quick and replayable sessions, ZigZag Ski is easy to learn but difficult to master. Whether you’re aiming to beat your high score or simply enjoy fast arcade gameplay, every run offers a new opportunity to improve.',
        'With clean visuals, smooth controls, and addictive mechanics, ZigZag Ski delivers a lightweight action experience perfect for players who enjoy reflex-based challenges and endless gameplay loops.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade', 'Action'],
    },
    'kiss-the-boss': {
      name: 'Kiss The Boss',
      summary:
        'Test your speed and reflexes in a humorous workplace arcade game where kissing the boss is the key to survival.',
      longDescription: [
        'Kiss The Boss is a quirky casual arcade game that turns workplace humor into a fast-paced reflex challenge. Your goal is simple — kiss your boss as quickly and efficiently as possible to keep your job and climb the ranks.',
        'Built around a unique and comedic concept, the game challenges players to react fast, time their actions, and improve their performance with each attempt. The better and faster you perform, the higher your chances of success.',
        'Inspired by exaggerated workplace scenarios, Kiss The Boss blends satire, humor, and simple gameplay mechanics into an experience that is both entertaining and easy to pick up. :contentReference[oaicite:0]{index=0}',
        'The controls are minimal and accessible, making it perfect for short play sessions while still offering a competitive edge through score improvement and replayability.',
        'Whether you’re looking for a lighthearted arcade game or something different from traditional mechanics, Kiss The Boss delivers a fun and unconventional gameplay loop designed for quick entertainment.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade', 'Action'],
    },
    'santas-lost-presents': {
      name: 'Santa’s Lost Presents',
      summary:
        'Help Santa recover lost gifts, avoid obstacles, and save Christmas in a festive arcade action adventure.',
      longDescription: [
        'Santa’s Lost Presents is a festive arcade action game where your mission is to help Santa recover all the gifts he accidentally lost on his journey from the North Pole. With Christmas at stake, every present counts.',
        'As Santa travels across different environments, players must collect scattered presents and overcome obstacles to ensure every child receives their gift on time. The gameplay is simple, fast-paced, and focused on movement, timing, and awareness.',
        'Inspired by classic arcade mechanics, the game challenges players to improve their reflexes while navigating through increasingly difficult situations. Each run brings new opportunities to collect more presents and improve your score.',
        'With a cheerful holiday theme and accessible controls, Santa’s Lost Presents is perfect for quick play sessions during the festive season or anytime you want a light and engaging experience.',
        'Whether you enjoy Christmas-themed games or classic action arcade challenges, Santa’s Lost Presents delivers a fun and replayable gameplay loop centered around collecting, avoiding, and saving the holiday spirit.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade', 'Action'],
    },
  },

  de: {
    'water-reminder': {
      name: 'Water Reminder',
      summary:
        'Verfolge deine tägliche Wasseraufnahme, baue gesunde Gewohnheiten auf und bleibe mit intelligenten Erinnerungen konsequent hydriert.',
      longDescription: [
        'Water Reminder ist eine einfache und effektive App zur Verfolgung deiner täglichen Wasseraufnahme. Mit schnellen Eingabetasten und einer intuitiven Oberfläche kannst du deine Wasserzufuhr in Sekundenschnelle protokollieren.',
        'Bleibe motiviert mit der Verfolgung deiner täglichen Serie, die zeigt, wie viele Tage in Folge du dein Trinkziel erreicht hast. Die App hilft dir, eine gesunde Routine aufzubauen und langfristig beizubehalten.',
        'Erhalte einen klaren Überblick über deinen Fortschritt mit wöchentlichen Statistiken, detaillierter Historie und Einblicken wie deinem durchschnittlichen Wasserverbrauch und deinem besten Tag.',
        'Individuell anpassbare Erinnerungen helfen dir, den ganzen Tag über ausreichend zu trinken. Lege deinen eigenen Zeitplan fest und vergiss nie wieder, Wasser zu trinken.',
        'Entwickelt für Einfachheit und Effizienz ist Water Reminder ideal für alle, die ihre Gesundheit verbessern und mit minimalem Aufwand hydriert bleiben möchten.',
      ],
      category: 'Health & Fitness',
      platforms: ['Android'],
      tags: ['Hydration', 'Health', 'Habit Tracker', 'Reminders', 'Water Tracking'],
    },
    'big-ben': {
      name: 'Big Ben (Glockenspiel)',
      summary:
        'Nehmen Sie die ikonischen Big-Ben-Glocken überallhin mit – mit realistischen Uhrklängen und einfacher Offline-Wiedergabe.',
      longDescription: [
        'Big Ben (Glockenspiel) bringt den legendären Klang des berühmtesten Uhrturms Londons direkt auf Ihr Android-Gerät. Egal, ob Sie klassische Glockenschläge lieben, einen einzigartigen Klingelton suchen oder einfach entspannende Uhrgeräusche genießen möchten – diese App liefert authentische Big-Ben-Klänge jederzeit und überall.',
        'Die App wurde für Einfachheit und Benutzerfreundlichkeit entwickelt und ermöglicht es Ihnen, hochwertige Glockenschläge jederzeit abzuspielen. Perfekt zur Entspannung, für nostalgische Momente oder um Ihrem Alltag einen Hauch britischen Charmes zu verleihen. Dank Offline-Funktionalität benötigen Sie keine Internetverbindung.',
        'Ideal für Fans traditioneller Uhrgeräusche, Londoner Sehenswürdigkeiten und minimalistischer Audio-Apps bietet Big Ben (Glockenspiel) ein klares Erlebnis, das sich auf das Wesentliche konzentriert – den ikonischen Klang der Glocke.',
        'Nutzen Sie die App als Hintergrundgeräusch, Reiseerinnerung oder als kreativen Klingelton. Ob zu Hause, bei der Arbeit oder unterwegs – der zeitlose Klang von Big Ben ist immer dabei.',
      ],
      category: 'Lifestyle',
      platforms: ['Android'],
      tags: ['Big Ben', 'Uhrgeräusche', 'Glocken', 'London', 'Offline Audio'],
    },
    'gastarbajter': {
      name: 'Gastarbajter',
      summary:
        'Hilf Djuro, das Leben im Ausland zu meistern, indem du die Sprache lernst, Dokumente sammelst und den Traum vom Arbeiten in Europa verfolgst.',
      longDescription: [
        'Gastarbajter ist ein storybasiertes Casual-Game, das Djuro auf seinem Weg zu einem besseren Leben in Europa begleitet.',
        'Inspiriert von echten Erfahrungen kombiniert das Spiel Humor, Kultur und Herausforderungen.',
        'Erledige Aufgaben, sammle Dokumente und erreiche dein Ziel.',
        'Ein unterhaltsamer Blick auf Migration und Alltag.',
        'Einfaches Gameplay, perfekt für kurze Sessions.',
      ],
      category: 'Casual',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade', 'Platformer'],
    },
    'the-birds': {
      name: 'The Birds',
      summary:
        'Fliege durch Hindernisse, schlage mit den Flügeln und meistere schnelles Arcade-Gameplay.',
      longDescription: [
        'Ein schnelles Arcade-Flugspiel mit Fokus auf Reaktion.',
        'Tippen zum Fliegen und Hindernisse vermeiden.',
        'Verschiedene Vögel und Welten freischalten.',
        'Einfach zu spielen, schwer zu meistern.',
        'Perfekt für kurze Spielrunden.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade'],
    },
    'bank-escape': {
      name: 'Bank Escape',
      summary:
        'Fliehe mit dem Geld aus der Bank, vermeide die Festnahme und teste deine Reflexe.',
      longDescription: [
        'Schnelles Arcade-Fluchtspiel.',
        'Sammle Geld und entkomme.',
        'Einfache Steuerung.',
        'Verbessere deinen Score.',
        'Kurze Spielrunden.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade', 'Platformer'],
    },
    'zigzag-ski': {
      name: 'ZigZag Ski',
      summary:
        'Fahre die Pisten hinunter, weiche Hindernissen aus und meistere schnelle Ski-Action.',
      longDescription: [
        'Schnelles Arcade-Skispiel.',
        'Tippen zum Richtungswechsel.',
        'Endlose Abfahrt.',
        'Verbessere deine Reflexe.',
        'Kurze Spielrunden.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade', 'Action'],
    },
    'kiss-the-boss': {
      name: 'Kiss The Boss',
      summary:
        'Teste deine Reflexe in einem humorvollen Spiel, in dem du den Chef küssen musst.',
      longDescription: [
        'Schnelles Arcade-Spiel mit Humor.',
        'Küsse den Chef so schnell wie möglich.',
        'Einfache Steuerung.',
        'Verbessere deinen Score.',
        'Kurze Spielrunden.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade', 'Action'],
    },
    'santas-lost-presents': {
      name: 'Santa’s Lost Presents',
      summary:
        'Hilf dem Weihnachtsmann, verlorene Geschenke zu sammeln und Weihnachten zu retten.',
      longDescription: [
        'Festliches Arcade-Spiel.',
        'Sammle Geschenke und weiche Hindernissen aus.',
        'Einfache Steuerung.',
        'Verbessere deinen Score.',
        'Kurze Spielrunden.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade', 'Action'],
    },
  },

  fr: {
    'water-reminder': {
      name: 'Water Reminder',
      summary:
        'Suivez votre consommation d’eau quotidienne, adoptez de bonnes habitudes et restez hydraté grâce à des rappels intelligents.',
      longDescription: [
        'Water Reminder est une application simple et efficace conçue pour vous aider à suivre votre consommation d’eau au quotidien. Grâce à des boutons rapides et une interface intuitive, enregistrer votre hydratation ne prend qu’une seconde.',
        'Restez motivé grâce au suivi des séries quotidiennes qui indique combien de jours consécutifs vous avez atteint votre objectif. L’application vous aide à transformer l’hydratation en habitude durable.',
        'Obtenez une vue claire de vos progrès avec des statistiques hebdomadaires, un historique détaillé et des informations comme votre consommation moyenne et votre meilleure journée.',
        'Les rappels personnalisables vous permettent de rester sur la bonne voie tout au long de la journée. Définissez votre propre planning et n’oubliez plus jamais de boire de l’eau.',
        'Conçue pour être simple et efficace, Water Reminder est idéale pour améliorer votre santé, augmenter votre énergie et maintenir une bonne hydratation sans effort.',
      ],
      category: 'Health & Fitness',
      platforms: ['Android'],
      tags: ['Hydration', 'Health', 'Habit Tracker', 'Reminders', 'Water Tracking'],
    },
    'big-ben': {
      name: 'Big Ben (Carillon)',
      summary:
        'Emportez les célèbres carillons de Big Ben partout avec vous grâce à des sons réalistes et une lecture hors ligne simple.',
      longDescription: [
        'Big Ben (Carillon) apporte le son légendaire de la tour de l’horloge la plus célèbre de Londres directement sur votre appareil Android. Que vous aimiez les carillons classiques, cherchiez une sonnerie unique ou appréciiez les sons d’ambiance, cette application offre un audio authentique de Big Ben à tout moment.',
        'Conçue pour être simple et accessible, l’application vous permet de jouer des carillons de haute qualité à la demande. Parfaite pour la détente, la nostalgie ou pour ajouter une touche britannique à votre quotidien. Fonctionne également hors ligne.',
        'Idéale pour les amateurs de sons d’horloge traditionnels, des monuments de Londres et des applications audio minimalistes, Big Ben (Carillon) se concentre sur l’essentiel : le son emblématique de la cloche.',
        'Utilisez-la comme ambiance sonore, souvenir de voyage ou sonnerie originale. Où que vous soyez, le carillon intemporel de Big Ben vous accompagne.',
      ],
      category: 'Lifestyle',
      platforms: ['Android'],
      tags: ['Big Ben', 'Sons d’horloge', 'Carillon', 'Londres', 'Audio hors ligne'],
    },
    'gastarbajter': {
      name: 'Gastarbajter',
      summary:
        'Aidez Djuro à réussir à l’étranger en apprenant la langue et en collectant des documents.',
      longDescription: [
        'Gastarbajter est un jeu casual narratif sur la vie à l’étranger.',
        'Inspiré d’expériences réelles, il mélange humour et défis.',
        'Progressez en accomplissant des tâches.',
        'Une vision accessible de la migration.',
        'Gameplay simple et rapide.',
      ],
      category: 'Casual',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade', 'Platformer'],
    },
    'the-birds': {
      name: 'The Birds',
      summary:
        'Volez à travers les obstacles et maîtrisez un gameplay arcade rapide.',
      longDescription: [
        'Jeu arcade rapide basé sur les réflexes.',
        'Touchez pour voler et éviter les obstacles.',
        'Débloquez oiseaux et mondes.',
        'Simple mais difficile.',
        'Sessions rapides.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade'],
    },
    'bank-escape': {
      name: 'Bank Escape',
      summary:
        'Échappez-vous de la banque avec l’argent et évitez de vous faire arrêter.',
      longDescription: [
        'Jeu arcade rapide.',
        'Collectez de l’argent et fuyez.',
        'Commandes simples.',
        'Améliorez votre score.',
        'Sessions rapides.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade', 'Platformer'],
    },
    'zigzag-ski': {
      name: 'ZigZag Ski',
      summary:
        'Descendez les pistes et évitez les obstacles dans un jeu arcade rapide.',
      longDescription: [
        'Jeu de ski arcade rapide.',
        'Touchez pour changer de direction.',
        'Descente infinie.',
        'Améliorez vos réflexes.',
        'Sessions rapides.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade', 'Action'],
    },
    'kiss-the-boss': {
      name: 'Kiss The Boss',
      summary:
        'Testez vos réflexes dans un jeu humoristique où il faut embrasser le patron.',
      longDescription: [
        'Jeu arcade rapide et amusant.',
        'Embrassez le patron rapidement.',
        'Commandes simples.',
        'Améliorez votre score.',
        'Sessions rapides.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade', 'Action'],
    },
    'santas-lost-presents': {
      name: 'Santa’s Lost Presents',
      summary:
        'Aidez le Père Noël à récupérer les cadeaux perdus et sauver Noël.',
      longDescription: [
        'Jeu arcade festif.',
        'Collectez les cadeaux et évitez les obstacles.',
        'Commandes simples.',
        'Améliorez votre score.',
        'Sessions rapides.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade', 'Action'],
    },
  },

  it: {
    'water-reminder': {
      name: 'Water Reminder',
      summary:
        'Monitora l’assunzione quotidiana di acqua, crea abitudini sane e resta idratato con promemoria intelligenti.',
      longDescription: [
        'Water Reminder è un’app semplice ed efficace progettata per aiutarti a monitorare il consumo quotidiano di acqua. Grazie a pulsanti rapidi e a un’interfaccia intuitiva, registrare l’acqua bevuta richiede solo un secondo.',
        'Rimani motivato con il tracciamento delle serie giornaliere che mostra per quanti giorni consecutivi hai raggiunto il tuo obiettivo di idratazione.',
        'Ottieni una panoramica chiara dei tuoi progressi con statistiche settimanali, cronologia dettagliata e dati come il consumo medio e il giorno migliore.',
        'I promemoria personalizzabili ti aiutano a bere acqua durante tutta la giornata. Imposta il tuo programma e non dimenticare mai di idratarti.',
        'Water Reminder è progettata per essere semplice ed efficiente, ideale per migliorare la salute e mantenere una corretta idratazione con il minimo sforzo.',
      ],
      category: 'Health & Fitness',
      platforms: ['Android'],
      tags: ['Hydration', 'Health', 'Habit Tracker', 'Reminders', 'Water Tracking'],
    },
    'big-ben': {
      name: 'Big Ben (Rintocchi)',
      summary:
        'Porta con te i famosi rintocchi del Big Ben con suoni realistici e riproduzione offline semplice.',
      longDescription: [
        'Big Ben (Rintocchi) porta il suono leggendario della torre dell’orologio più famosa di Londra direttamente sul tuo dispositivo Android. Che tu ami i rintocchi classici, voglia una suoneria unica o semplicemente suoni rilassanti, questa app offre audio autentico ovunque.',
        'Progettata per essere semplice e accessibile, consente di riprodurre rintocchi di alta qualità in qualsiasi momento. Perfetta per relax, nostalgia o per aggiungere un tocco britannico alla tua giornata. Funziona anche offline.',
        'Ideale per gli amanti dei suoni tradizionali, dei monumenti londinesi e delle app audio minimaliste.',
        'Usala come sottofondo, ricordo di viaggio o suoneria creativa. Il suono senza tempo del Big Ben è sempre con te.',
      ],
      category: 'Lifestyle',
      platforms: ['Android'],
      tags: ['Big Ben', 'Suoni orologio', 'Rintocchi', 'Londra', 'Offline'],
    },
    'gastarbajter': {
      name: 'Gastarbajter',
      summary:
        'Aiuta Djuro a vivere all’estero imparando la lingua e raccogliendo documenti.',
      longDescription: [
        'Gastarbajter è un gioco casual narrativo.',
        'Ispirato a esperienze reali.',
        'Completa attività e avanza.',
        'Tema: vita all’estero.',
        'Gameplay semplice.',
      ],
      category: 'Casual',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade', 'Platformer'],
    },
    'the-birds': {
      name: 'The Birds',
      summary:
        'Vola tra gli ostacoli e padroneggia un gameplay arcade veloce.',
      longDescription: [
        'Gioco arcade veloce basato sui riflessi.',
        'Tocca per volare ed evitare ostacoli.',
        'Sblocca uccelli e livelli.',
        'Facile ma impegnativo.',
        'Perfetto per sessioni brevi.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade'],
    },
    'bank-escape': {
      name: 'Bank Escape',
      summary:
        'Fuggi dalla banca con il denaro ed evita di essere catturato.',
      longDescription: [
        'Gioco arcade veloce.',
        'Raccogli soldi e scappa.',
        'Controlli semplici.',
        'Migliora il punteggio.',
        'Sessioni brevi.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade', 'Platformer'],
    },
    'zigzag-ski': {
      name: 'ZigZag Ski',
      summary:
        'Scendi lungo le piste evitando ostacoli in un gioco arcade veloce.',
      longDescription: [
        'Gioco arcade di sci veloce.',
        'Tocca per cambiare direzione.',
        'Discesa infinita.',
        'Migliora i riflessi.',
        'Sessioni brevi.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade', 'Action'],
    },
    'kiss-the-boss': {
      name: 'Kiss The Boss',
      summary:
        'Metti alla prova i tuoi riflessi in un gioco divertente dove devi baciare il capo.',
      longDescription: [
        'Gioco arcade veloce e divertente.',
        'Bacia il capo rapidamente.',
        'Controlli semplici.',
        'Migliora il punteggio.',
        'Sessioni brevi.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade', 'Action'],
    },
    'santas-lost-presents': {
      name: 'Santa’s Lost Presents',
      summary:
        'Aiuta Babbo Natale a recuperare i regali e salvare il Natale.',
      longDescription: [
        'Gioco arcade natalizio.',
        'Raccogli regali ed evita ostacoli.',
        'Controlli semplici.',
        'Migliora il punteggio.',
        'Sessioni brevi.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade', 'Action'],
    },
  },

  es: {
    'water-reminder': {
      name: 'Water Reminder',
      summary:
        'Controla tu consumo diario de agua, crea hábitos saludables y mantente constante con recordatorios inteligentes.',
      longDescription: [
        'Water Reminder es una aplicación sencilla y eficaz diseñada para ayudarte a controlar tu consumo diario de agua. Con botones rápidos y una interfaz intuitiva, registrar tu ingesta es fácil y rápido.',
        'Mantente motivado con el seguimiento de rachas que muestra cuántos días consecutivos has alcanzado tu objetivo de hidratación.',
        'Obtén una visión clara de tu progreso con estadísticas semanales, historial detallado y datos como tu consumo promedio y tu mejor día.',
        'Los recordatorios personalizables te ayudan a mantenerte hidratado durante todo el día. Configura tu propio horario y no olvides beber agua.',
        'Diseñada para ser simple y eficiente, Water Reminder es perfecta para mejorar tu salud y mantenerte hidratado sin esfuerzo.',
      ],
      category: 'Health & Fitness',
      platforms: ['Android'],
      tags: ['Hydration', 'Health', 'Habit Tracker', 'Reminders', 'Water Tracking'],
    },
    'big-ben': {
      name: 'Big Ben (Campanadas)',
      summary:
        'Lleva contigo las icónicas campanadas del Big Ben con sonidos realistas y reproducción offline.',
      longDescription: [
        'Big Ben (Campanadas) trae el sonido legendario del reloj más famoso de Londres directamente a tu dispositivo Android. Ideal para quienes disfrutan de campanas clásicas o buscan un tono único.',
        'La app es simple y ligera, permitiendo reproducir sonidos de alta calidad en cualquier momento, incluso sin conexión.',
        'Perfecta para relajación, nostalgia o como ambiente sonoro.',
        'Disfruta del sonido atemporal del Big Ben estés donde estés.',
      ],
      category: 'Lifestyle',
      platforms: ['Android'],
      tags: ['Big Ben', 'Campanadas', 'Reloj', 'Londres', 'Offline'],
    },
    'gastarbajter': {
      name: 'Gastarbajter',
      summary:
        'Ayuda a Djuro a trabajar en Europa aprendiendo el idioma y reuniendo documentos.',
      longDescription: [
        'Gastarbajter es un juego casual con historia.',
        'Inspirado en experiencias reales.',
        'Completa tareas y progresa.',
        'Sobre vivir en el extranjero.',
        'Fácil de jugar.',
      ],
      category: 'Casual',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade', 'Platformer'],
    },
    'the-birds': {
      name: 'The Birds',
      summary:
        'Vuela entre obstáculos y domina un arcade rápido y adictivo.',
      longDescription: [
        'Juego arcade basado en reflejos.',
        'Toca para volar y evitar obstáculos.',
        'Desbloquea aves y mundos.',
        'Fácil de jugar, difícil de dominar.',
        'Ideal para partidas cortas.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade'],
    },
    'bank-escape': {
      name: 'Bank Escape',
      summary:
        'Escapa del banco con el dinero y evita ser atrapado.',
      longDescription: [
        'Juego arcade rápido.',
        'Recoge dinero y escapa.',
        'Controles simples.',
        'Mejora tu puntuación.',
        'Partidas cortas.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade', 'Platformer'],
    },
    'zigzag-ski': {
      name: 'ZigZag Ski',
      summary:
        'Desciende la montaña evitando obstáculos en un juego arcade rápido.',
      longDescription: [
        'Juego arcade de esquí rápido.',
        'Toca para cambiar dirección.',
        'Descenso infinito.',
        'Mejora tus reflejos.',
        'Partidas cortas.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade', 'Action'],
    },
    'kiss-the-boss': {
      name: 'Kiss The Boss',
      summary:
        'Pon a prueba tus reflejos en un juego divertido donde debes besar al jefe.',
      longDescription: [
        'Juego arcade rápido y humorístico.',
        'Besa al jefe rápidamente.',
        'Controles simples.',
        'Mejora tu puntuación.',
        'Partidas cortas.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade', 'Action'],
    },
    'santas-lost-presents': {
      name: 'Santa’s Lost Presents',
      summary:
        'Ayuda a Papá Noel a recuperar los regalos y salvar la Navidad.',
      longDescription: [
        'Juego arcade navideño.',
        'Recoge regalos y evita obstáculos.',
        'Controles simples.',
        'Mejora tu puntuación.',
        'Partidas cortas.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade', 'Action'],
    },
  },

  pt: {
    'water-reminder': {
      name: 'Water Reminder',
      summary:
        'Acompanhe sua ingestão diária de água, crie hábitos saudáveis e mantenha-se hidratado com lembretes inteligentes.',
      longDescription: [
        'Water Reminder é um aplicativo simples e eficaz projetado para ajudar você a monitorar sua ingestão diária de água.',
        'Acompanhe suas sequências diárias e mantenha a consistência.',
        'Visualize estatísticas e histórico detalhado.',
        'Configure lembretes personalizados.',
        'Melhore sua saúde e energia com hidratação adequada.',
      ],
      category: 'Health & Fitness',
      platforms: ['Android'],
      tags: ['Hydration', 'Health', 'Habit Tracker', 'Reminders', 'Water Tracking'],
    },
    'big-ben': {
      name: 'Big Ben (Badaladas)',
      summary:
        'Leve as icônicas badaladas do Big Ben com sons realistas e reprodução offline.',
      longDescription: [
        'Big Ben (Badaladas) traz o som lendário do relógio mais famoso de Londres para o seu dispositivo Android.',
        'Simples e leve, permite reproduzir sons de alta qualidade sem internet.',
        'Ideal para relaxamento, nostalgia ou como som ambiente.',
        'O som clássico do Big Ben sempre com você.',
      ],
      category: 'Lifestyle',
      platforms: ['Android'],
      tags: ['Big Ben', 'Badaladas', 'Relógio', 'Londres', 'Offline'],
    },
    'gastarbajter': {
      name: 'Gastarbajter',
      summary:
        'Ajude Djuro a trabalhar na Europa aprendendo o idioma e reunindo documentos.',
      longDescription: [
        'Gastarbajter é um jogo casual com história.',
        'Baseado em experiências reais.',
        'Complete tarefas e avance.',
        'Sobre vida no exterior.',
        'Jogabilidade simples.',
      ],
      category: 'Casual',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade', 'Platformer'],
    },
    'the-birds': {
      name: 'The Birds',
      summary:
        'Voe pelos obstáculos e domine um gameplay arcade rápido.',
      longDescription: [
        'Jogo arcade rápido baseado em reflexos.',
        'Toque para voar e evitar obstáculos.',
        'Desbloqueie pássaros e mundos.',
        'Simples e desafiador.',
        'Sessões rápidas.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade'],
    },
    'bank-escape': {
      name: 'Bank Escape',
      summary:
        'Fuja do banco com o dinheiro e evite ser capturado.',
      longDescription: [
        'Jogo arcade rápido.',
        'Colete dinheiro e escape.',
        'Controles simples.',
        'Melhore sua pontuação.',
        'Sessões rápidas.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade', 'Platformer'],
    },
    'zigzag-ski': {
      name: 'ZigZag Ski',
      summary:
        'Desça a montanha evitando obstáculos em um jogo arcade rápido.',
      longDescription: [
        'Jogo arcade de esqui rápido.',
        'Toque para mudar direção.',
        'Descida infinita.',
        'Melhore seus reflexos.',
        'Sessões rápidas.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade', 'Action'],
    },
    'kiss-the-boss': {
      name: 'Kiss The Boss',
      summary:
        'Teste seus reflexos em um jogo divertido onde você precisa beijar o chefe.',
      longDescription: [
        'Jogo arcade rápido e divertido.',
        'Beije o chefe rapidamente.',
        'Controles simples.',
        'Melhore sua pontuação.',
        'Sessões rápidas.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade', 'Action'],
    },
    'santas-lost-presents': {
      name: 'Santa’s Lost Presents',
      summary:
        'Ajude o Papai Noel a recuperar presentes e salvar o Natal.',
      longDescription: [
        'Jogo arcade festivo.',
        'Colete presentes e evite obstáculos.',
        'Controles simples.',
        'Melhore sua pontuação.',
        'Sessões rápidas.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade', 'Action'],
    },
  },

  sr: {
    'water-reminder': {
      name: 'Water Reminder',
      summary:
        'Пратите дневни унос воде, развијте здраве навике и останите хидрирани уз паметне подсетнике.',
      longDescription: [
        'Water Reminder је једноставна и ефикасна апликација за праћење дневног уноса воде.',
        'Пратите низ дана у којима сте достигли циљ.',
        'Прегледајте статистику и историју.',
        'Подесите подсетнике.',
        'Побољшајте здравље и енергију.',
      ],
      category: 'Здравље и фитнес',
      platforms: ['Android'],
      tags: ['Хидратација', 'Здравље', 'Праћење навика', 'Подсетници', 'Праћење уноса воде'],
    },
    'big-ben': {
      name: 'Big Ben (Zvona)',
      summary:
        'Носите звуке Big Bena са собом уз реалистичне звуке сата и офлајн репродукцију.',
      longDescription: [
        'Big Ben (Zvona) доноси легендарни звук најпознатијег лондонског сата на ваш Android уређај.',
        'Једноставна апликација омогућава репродукцију квалитетних звона у било ком тренутку, чак и без интернета.',
        'Идеално за опуштање, носталгију или као јединствен звук телефона.',
        'Уживајте у безвременском звуку Big Bena где год да сте.',
      ],
      category: 'Стил живота',
      platforms: ['Android'],
      tags: ['Big Ben', 'Звона', 'Сат', 'Лондон', 'Офлајн'],
    },
    'gastarbajter': {
      name: 'Gastarbajter',
      summary:
        'Помозите Ђури да успе у иностранству учењем језика и сакупљањем докумената.',
      longDescription: [
        'Gastarbajter је наративна casual игра.',
        'Инспирисана стварним искуствима.',
        'Испуњавајте задатке и напредујте.',
        'Тема: живот у иностранству.',
        'Једноставан гејмплеј.',
      ],
      category: 'Лежерна',
      platforms: ['Android'],
      tags: ['Лежерна игра', 'Аркадна', 'Платформска'],
    },
    'the-birds': {
      name: 'The Birds',
      summary:
        'Летите кроз препреке и савладајте брзи аркадни гејмплеј.',
      longDescription: [
        'Брза аркадна игра заснована на рефлексима.',
        'Додирните за лет и избегавајте препреке.',
        'Откључајте птице и светове.',
        'Једноставно али изазовно.',
        'Идеално за кратке сесије.',
      ],
      category: 'Аркадна',
      platforms: ['Android'],
      tags: ['Лежерна игра', 'Аркадна'],
    },
    'bank-escape': {
      name: 'Bank Escape',
      summary:
        'Побегните из банке са новцем и избегните хапшење.',
      longDescription: [
        'Брза аркадна игра бекства.',
        'Скупљајте новац и бежите.',
        'Једноставне контроле.',
        'Побољшајте резултат.',
        'Кратке сесије.',
      ],
      category: 'Аркадна',
      platforms: ['Android'],
      tags: ['Лежерна игра', 'Аркадна', 'Платформска'],
    },
    'zigzag-ski': {
      name: 'ZigZag Ski',
      summary:
        'Спуштајте се низ планину и избегавајте препреке у брзој аркадној игри.',
      longDescription: [
        'Брза аркадна ски игра.',
        'Додирните за промену правца.',
        'Бескрајни спуст.',
        'Побољшајте рефлексе.',
        'Кратке сесије.',
      ],
      category: 'Аркадна',
      platforms: ['Android'],
      tags: ['Лежерна игра', 'Аркадна', 'Акција'],
    },
    'kiss-the-boss': {
      name: 'Kiss The Boss',
      summary:
        'Тестирајте рефлексе у забавној игри где морате да љубите шефа.',
      longDescription: [
        'Брза и хумористична аркадна игра.',
        'Љубите шефа што брже.',
        'Једноставне контроле.',
        'Побољшајте резултат.',
        'Кратке сесије.',
      ],
      category: 'Аркадна',
      platforms: ['Android'],
      tags: ['Лежерна игра', 'Аркадна', 'Акција'],
    },
    'santas-lost-presents': {
      name: 'Santa’s Lost Presents',
      summary:
        'Помозите Деда Мразу да сакупи поклоне и спасе Нову годину.',
      longDescription: [
        'Празнична аркадна игра.',
        'Скупљајте поклоне и избегавајте препреке.',
        'Једноставне контроле.',
        'Побољшајте резултат.',
        'Кратке сесије.',
      ],
      category: 'Аркадна',
      platforms: ['Android'],
      tags: ['Лежерна игра', 'Аркадна', 'Акција'],
    },
  },

  hr: {
    'water-reminder': {
      name: 'Water Reminder',
      summary:
        'Pratite unos vode i razvijte zdrave navike uz pametne podsjetnike.',
      longDescription: [
        'Water Reminder je jednostavna aplikacija za praćenje unosa vode.',
        'Pratite niz dana uspjeha.',
        'Statistika i povijest.',
        'Podsjetnici za vodu.',
        'Bolje zdravlje.',
      ],
      category: 'Health & Fitness',
      platforms: ['Android'],
      tags: ['Hydration', 'Health', 'Habit Tracker', 'Reminders', 'Water Tracking'],
    },
    'big-ben': {
      name: 'Big Ben (Zvona)',
      summary:
        'Ponesite zvuk Big Bena sa sobom uz realistične zvukove sata i offline reprodukciju.',
      longDescription: [
        'Big Ben (Zvona) donosi legendarni zvuk najpoznatijeg londonskog sata na vaš Android uređaj.',
        'Jednostavna aplikacija omogućuje reprodukciju kvalitetnih zvona u bilo kojem trenutku, čak i bez interneta.',
        'Savršeno za opuštanje ili kao jedinstvena melodija.',
        'Bezvremenski zvuk Big Bena uvijek s vama.',
      ],
      category: 'Lifestyle',
      platforms: ['Android'],
      tags: ['Big Ben', 'Zvona', 'Sat', 'London', 'Offline'],
    },
    'gastarbajter': {
      name: 'Gastarbajter',
      summary:
        'Pomozite Djuri da uspije u inozemstvu učenjem jezika i prikupljanjem dokumenata.',
      longDescription: [
        'Gastarbajter je narativna casual igra.',
        'Inspirirana stvarnim iskustvima.',
        'Rješavajte zadatke i napredujte.',
        'Tema: život u inozemstvu.',
        'Jednostavno igranje.',
      ],
      category: 'Casual',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade', 'Platformer'],
    },
    'the-birds': {
      name: 'The Birds',
      summary:
        'Letite kroz prepreke i savladajte brzi arkadni gameplay.',
      longDescription: [
        'Brza arkadna igra temeljena na refleksima.',
        'Dodirnite za let i izbjegavajte prepreke.',
        'Otključajte ptice i svjetove.',
        'Jednostavno ali izazovno.',
        'Za kratke sesije.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade'],
    },
    'bank-escape': {
      name: 'Bank Escape',
      summary:
        'Pobjegnite iz banke s novcem i izbjegnite uhićenje.',
      longDescription: [
        'Brza arkadna igra bijega.',
        'Skupljajte novac i bježite.',
        'Jednostavne kontrole.',
        'Poboljšajte rezultat.',
        'Kratke sesije.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade', 'Platformer'],
    },
    'zigzag-ski': {
      name: 'ZigZag Ski',
      summary:
        'Spuštajte se niz padine i izbjegavajte prepreke u brzoj arkadnoj igri.',
      longDescription: [
        'Brza arkadna ski igra.',
        'Dodir za promjenu smjera.',
        'Beskrajna vožnja.',
        'Poboljšajte reflekse.',
        'Kratke sesije.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade', 'Action'],
    },
    'kiss-the-boss': {
      name: 'Kiss The Boss',
      summary:
        'Testirajte reflekse u zabavnoj igri gdje morate ljubiti šefa.',
      longDescription: [
        'Brza arkadna igra s humorom.',
        'Ljubite šefa što brže.',
        'Jednostavne kontrole.',
        'Poboljšajte rezultat.',
        'Kratke sesije.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade', 'Action'],
    },
    'santas-lost-presents': {
      name: 'Santa’s Lost Presents',
      summary:
        'Pomozite Djedu Božićnjaku prikupiti poklone i spasiti Božić.',
      longDescription: [
        'Blagdanska arkadna igra.',
        'Skupljajte poklone i izbjegavajte prepreke.',
        'Jednostavne kontrole.',
        'Poboljšajte rezultat.',
        'Kratke sesije.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade', 'Action'],
    },
  },

  nl: {
    'water-reminder': {
      name: 'Water Reminder',
      summary:
        'Houd je dagelijkse waterinname bij, ontwikkel gezonde gewoonten en blijf gehydrateerd met slimme herinneringen.',
      longDescription: [
        'Water Reminder is een eenvoudige en effectieve app om je dagelijkse waterinname bij te houden en een gezonde drinkroutine op te bouwen.',
        'Blijf gemotiveerd met dagelijkse streaks die laten zien hoeveel dagen je je doel hebt gehaald.',
        'Bekijk je voortgang met statistieken, geschiedenis en inzichten.',
        'Stel herinneringen in om regelmatig water te drinken.',
        'Ideaal om je gezondheid en energie te verbeteren door goede hydratatie.',
      ],
      category: 'Health & Fitness',
      platforms: ['Android'],
      tags: ['Hydration', 'Health', 'Habit Tracker', 'Reminders', 'Water Tracking'],
    },
    'big-ben': {
      name: 'Big Ben (Klokken)',
      summary:
        'Neem de iconische Big Ben-klokken overal mee naartoe met realistische geluiden en offline afspelen.',
      longDescription: [
        'Big Ben (Klokken) brengt het beroemde geluid van de Londense klok direct naar je Android-apparaat.',
        'Eenvoudig en licht, met offline ondersteuning.',
        'Perfect voor ontspanning of als uniek geluid.',
        'Geniet altijd van de klokken van Big Ben.',
      ],
      category: 'Lifestyle',
      platforms: ['Android'],
      tags: ['Big Ben', 'Klokken', 'Geluid', 'Londen', 'Offline'],
    },
    'gastarbajter': {
      name: 'Gastarbajter',
      summary:
        'Help Djuro om in het buitenland te slagen door taal te leren en documenten te verzamelen.',
      longDescription: [
        'Gastarbajter is een casual spel met verhaal.',
        'Gebaseerd op echte ervaringen.',
        'Voltooi taken en ga vooruit.',
        'Over leven in het buitenland.',
        'Eenvoudige gameplay.',
      ],
      category: 'Casual',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade', 'Platformer'],
    },
    'the-birds': {
      name: 'The Birds',
      summary:
        'Vlieg door obstakels en beheers snelle arcade gameplay.',
      longDescription: [
        'Snelle arcadegame gebaseerd op reflexen.',
        'Tik om te vliegen en obstakels te vermijden.',
        'Ontgrendel vogels en werelden.',
        'Eenvoudig maar uitdagend.',
        'Korte speelsessies.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade'],
    },
    'bank-escape': {
      name: 'Bank Escape',
      summary:
        'Ontsnap uit de bank met het geld en voorkom dat je gepakt wordt.',
      longDescription: [
        'Snelle arcadegame.',
        'Verzamel geld en ontsnap.',
        'Eenvoudige bediening.',
        'Verbeter je score.',
        'Korte sessies.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade', 'Platformer'],
    },
    'zigzag-ski': {
      name: 'ZigZag Ski',
      summary:
        'Ski naar beneden, ontwijk obstakels en beheers snelle arcade gameplay.',
      longDescription: [
        'Snelle arcade ski game.',
        'Tik om richting te veranderen.',
        'Eindeloze afdaling.',
        'Verbeter je reflexen.',
        'Korte sessies.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade', 'Action'],
    },
    'kiss-the-boss': {
      name: 'Kiss The Boss',
      summary:
        'Test je reflexen in een grappige game waarin je de baas moet kussen.',
      longDescription: [
        'Snelle arcadegame met humor.',
        'Kus de baas zo snel mogelijk.',
        'Eenvoudige bediening.',
        'Verbeter je score.',
        'Korte sessies.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade', 'Action'],
    },
    'santas-lost-presents': {
      name: 'Santa’s Lost Presents',
      summary:
        'Help de kerstman verloren cadeaus verzamelen en Kerstmis redden.',
      longDescription: [
        'Feestelijke arcadegame.',
        'Verzamel cadeaus en ontwijk obstakels.',
        'Eenvoudige bediening.',
        'Verbeter je score.',
        'Korte sessies.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade', 'Action'],
    },
  },

  pl: {
    'water-reminder': {
      name: 'Water Reminder',
      summary:
        'Śledź dzienne spożycie wody, buduj zdrowe nawyki i utrzymuj nawodnienie dzięki przypomnieniom.',
      longDescription: [
        'Water Reminder to prosta i skuteczna aplikacja do monitorowania dziennego spożycia wody i budowania zdrowych nawyków.',
        'Śledź kolejne dni realizacji celu i utrzymuj motywację.',
        'Analizuj statystyki, historię i średnie wartości.',
        'Ustaw przypomnienia o piciu wody.',
        'Popraw zdrowie i samopoczucie dzięki odpowiedniemu nawodnieniu.',
      ],
      category: 'Health & Fitness',
      platforms: ['Android'],
      tags: ['Hydration', 'Health', 'Habit Tracker', 'Reminders', 'Water Tracking'],
    },
    'big-ben': {
      name: 'Big Ben (Dzwony)',
      summary:
        'Zabierz ze sobą dźwięk Big Bena dzięki realistycznym odgłosom i trybowi offline.',
      longDescription: [
        'Big Ben (Dzwony) przenosi legendarny dźwięk londyńskiego zegara na Twoje urządzenie Android.',
        'Prosta aplikacja z wysokiej jakości dźwiękiem, działająca offline.',
        'Idealna do relaksu lub jako unikalny dzwonek.',
        'Ciesz się dźwiękiem Big Bena gdziekolwiek jesteś.',
      ],
      category: 'Lifestyle',
      platforms: ['Android'],
      tags: ['Big Ben', 'Dzwony', 'Zegar', 'Londyn', 'Offline'],
    },
    'gastarbajter': {
      name: 'Gastarbajter',
      summary:
        'Pomóż Djuro osiągnąć sukces za granicą ucząc się języka i zbierając dokumenty.',
      longDescription: [
        'Gastarbajter to gra casual z fabułą.',
        'Oparta na prawdziwych doświadczeniach.',
        'Wykonuj zadania i rozwijaj się.',
        'O życiu za granicą.',
        'Prosta rozgrywka.',
      ],
      category: 'Casual',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade', 'Platformer'],
    },
    'the-birds': {
      name: 'The Birds',
      summary:
        'Lataj między przeszkodami i opanuj dynamiczną grę arcade.',
      longDescription: [
        'Szybka gra arcade oparta na refleksie.',
        'Dotknij, aby lecieć i unikać przeszkód.',
        'Odblokuj ptaki i światy.',
        'Prosta, ale wymagająca.',
        'Idealna na krótkie sesje.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade'],
    },
    'bank-escape': {
      name: 'Bank Escape',
      summary:
        'Uciekaj z banku z pieniędzmi i unikaj aresztowania.',
      longDescription: [
        'Szybka gra arcade.',
        'Zbieraj pieniądze i uciekaj.',
        'Proste sterowanie.',
        'Popraw wynik.',
        'Krótkie sesje.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade', 'Platformer'],
    },
    'zigzag-ski': {
      name: 'ZigZag Ski',
      summary:
        'Zjeżdżaj ze stoku, unikaj przeszkód i opanuj szybką rozgrywkę.',
      longDescription: [
        'Szybka gra arcade o narciarstwie.',
        'Dotknij, aby zmienić kierunek.',
        'Nieskończony zjazd.',
        'Popraw refleks.',
        'Krótkie sesje.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade', 'Action'],
    },
    'kiss-the-boss': {
      name: 'Kiss The Boss',
      summary:
        'Sprawdź refleks w zabawnej grze, gdzie musisz całować szefa.',
      longDescription: [
        'Szybka gra arcade z humorem.',
        'Całuj szefa jak najszybciej.',
        'Proste sterowanie.',
        'Popraw wynik.',
        'Krótkie sesje.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade', 'Action'],
    },
    'santas-lost-presents': {
      name: 'Santa’s Lost Presents',
      summary:
        'Pomóż Świętemu Mikołajowi odzyskać prezenty i uratować święta.',
      longDescription: [
        'Świąteczna gra arcade.',
        'Zbieraj prezenty i unikaj przeszkód.',
        'Proste sterowanie.',
        'Popraw wynik.',
        'Krótkie sesje.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade', 'Action'],
    },
  },

  ro: {
    'water-reminder': {
      name: 'Water Reminder',
      summary:
        'Urmărește consumul zilnic de apă, creează obiceiuri sănătoase și rămâi hidratat.',
      longDescription: [
        'Water Reminder este o aplicație simplă și eficientă pentru monitorizarea consumului zilnic de apă.',
        'Rămâi motivat urmărind progresul zilnic.',
        'Vezi statistici și istoricul consumului.',
        'Setează mementouri pentru hidratare.',
        'Îmbunătățește sănătatea prin hidratare corectă.',
      ],
      category: 'Health & Fitness',
      platforms: ['Android'],
      tags: ['Hydration', 'Health', 'Habit Tracker', 'Reminders', 'Water Tracking'],
    },
    'big-ben': {
      name: 'Big Ben (Clopote)',
      summary:
        'Ia cu tine sunetul Big Ben cu redare offline și sunete realiste.',
      longDescription: [
        'Big Ben (Clopote) aduce sunetul celebrului ceas din Londra pe dispozitivul tău Android.',
        'Aplicație simplă, cu sunet de calitate și funcționare offline.',
        'Perfectă pentru relaxare sau ca ton de apel.',
        'Sunetul clasic Big Ben oriunde te-ai afla.',
      ],
      category: 'Lifestyle',
      platforms: ['Android'],
      tags: ['Big Ben', 'Clopote', 'Ceas', 'Londra', 'Offline'],
    },
    'gastarbajter': {
      name: 'Gastarbajter',
      summary:
        'Ajută-l pe Djuro să reușească în străinătate învățând limba și colectând documente.',
      longDescription: [
        'Gastarbajter este un joc casual narativ.',
        'Inspirat din experiențe reale.',
        'Completează sarcini și avansează.',
        'Despre viața în străinătate.',
        'Gameplay simplu.',
      ],
      category: 'Casual',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade', 'Platformer'],
    },
    'the-birds': {
      name: 'The Birds',
      summary:
        'Zboară printre obstacole și stăpânește gameplay-ul arcade rapid.',
      longDescription: [
        'Joc arcade rapid bazat pe reflexe.',
        'Atinge pentru a zbura și evită obstacolele.',
        'Deblochează păsări și lumi.',
        'Simplu dar provocator.',
        'Perfect pentru sesiuni scurte.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade'],
    },
    'bank-escape': {
      name: 'Bank Escape',
      summary:
        'Evadă din bancă cu banii și evită să fii prins.',
      longDescription: [
        'Joc arcade rapid.',
        'Colectează bani și scapă.',
        'Controale simple.',
        'Îmbunătățește scorul.',
        'Sesiuni scurte.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade', 'Platformer'],
    },
    'zigzag-ski': {
      name: 'ZigZag Ski',
      summary:
        'Coboară panta și evită obstacolele într-un joc arcade rapid.',
      longDescription: [
        'Joc arcade rapid de schi.',
        'Atinge pentru a schimba direcția.',
        'Coborâre infinită.',
        'Îmbunătățește reflexele.',
        'Sesiuni scurte.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade', 'Action'],
    },
    'kiss-the-boss': {
      name: 'Kiss The Boss',
      summary:
        'Testează-ți reflexele într-un joc amuzant unde trebuie să săruți șeful.',
      longDescription: [
        'Joc arcade rapid și amuzant.',
        'Sărută șeful cât mai repede.',
        'Controale simple.',
        'Îmbunătățește scorul.',
        'Sesiuni scurte.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade', 'Action'],
    },
    'santas-lost-presents': {
      name: 'Santa’s Lost Presents',
      summary:
        'Ajută-l pe Moș Crăciun să recupereze cadourile și să salveze Crăciunul.',
      longDescription: [
        'Joc arcade festiv.',
        'Colectează cadouri și evită obstacole.',
        'Controale simple.',
        'Îmbunătățește scorul.',
        'Sesiuni scurte.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade', 'Action'],
    },
  },
};

export function getReleases(locale: Locale): Release[] {
  return releaseBases.map((base) => ({
    ...base,
    ...releaseTranslations[locale][base.slug],
  }));
}

export function getFeaturedReleases(locale: Locale): Release[] {
  return getReleases(locale).filter((release) => release.featured);
}

export function getReleaseBySlug(locale: Locale, slug: string): Release | undefined {
  return getReleases(locale).find((release) => release.slug === slug);
}