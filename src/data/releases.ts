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
  {
    slug: 'cowboy-duel',
    kind: 'game',
    featured: false,
    accent: 'red',
    icon: 'apps/icons/CowboyDuel.webp',
    googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.stoopidcartoons.cowboyduel'
  },
] as const satisfies readonly ReleaseBase[];

type ReleaseSlug = (typeof releaseBases)[number]['slug'];

const releaseTranslations: Record<Locale, Record<ReleaseSlug, ReleaseTranslation>> = {
  en: {
    'cowboy-duel': {
      name: 'Cowboy Duel',
      summary:
        'Test your reflexes in fast-paced western duels where timing is everything—draw faster than your opponent and become the ultimate gunslinger.',
      longDescription: [
        'Cowboy Duel is a fast-paced reaction game set in the wild west, where your goal is simple: draw your weapon faster than your opponent and win the duel. Every match is a test of timing, focus, and nerves.',
        'Step into the boots of a gunslinger and face off against opponents in intense one-on-one duels. Wait for the perfect moment, react instantly, and fire before your rival gets the chance. But be careful—shoot too early and you lose.',
        'The gameplay is easy to understand but difficult to master, making it perfect for quick sessions while still offering a challenge for players who want to improve their reaction speed.',
        'With its simple controls and engaging mechanics, Cowboy Duel keeps you coming back to beat your best times and sharpen your reflexes. Each duel feels tense and rewarding, especially when victory comes down to split-second decisions.',
        'Whether you are looking to pass time or compete with friends for the fastest draw, Cowboy Duel delivers a fun and addictive experience inspired by classic western shootouts.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Reflex Game', 'Arcade', 'Reaction Time', 'Western', 'Casual'],
    },
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
        'Escape the bank with the money, avoid capture, and test your reflexes in a fast-paced arcade action challenge built for quick, addictive play sessions.',
      longDescription: [
        'Bank Escape is a fast-paced arcade action game where your mission is simple: grab the money, escape the bank, and avoid getting caught. Every run puts your reflexes and timing to the test as you try to survive for as long as possible and finish with the best score.',
        'Built around simple controls and instant action, the game is easy to start playing but increasingly difficult to master. As the pressure rises, you will need to react quickly, stay focused, and make smart movements to keep your escape going.',
        'The gameplay is designed for players who enjoy quick reaction games, score-chasing, and short but intense sessions. Each attempt gives you a new opportunity to collect more money, improve your performance, and beat your previous results.',
        'With its heist-inspired theme, accessible mechanics, and fast arcade pacing, Bank Escape delivers a lightweight but highly replayable experience for casual players and reflex-game fans alike.',
        'Whether you want a simple offline arcade game for a short break or an addictive action challenge you can return to again and again, Bank Escape offers a fun escape-based gameplay loop focused on speed, movement, and survival.',
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
        'As you descend through snowy environments, you’ll need to navigate tight zigzag paths, avoid barriers, and collect items along the way to improve your performance. The challenge lies in maintaining control while reacting quickly to changing terrain.',
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
        'Inspired by exaggerated workplace scenarios, Kiss The Boss blends satire, humor, and simple gameplay mechanics into an experience that is both entertaining and easy to pick up.',
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
    'cowboy-duel': {
      name: 'Cowboy Duel',
      summary:
        'Teste deine Reflexe in schnellen Western-Duellen, bei denen Timing alles ist – ziehe schneller als dein Gegner und werde zum ultimativen Revolverhelden.',
      longDescription: [
        'Cowboy Duel ist ein rasantes Reaktionsspiel im Wilden Westen, bei dem dein Ziel einfach ist: Ziehe deine Waffe schneller als dein Gegner und gewinne das Duell.',
        'Schlüpfe in die Rolle eines Revolverhelden und tritt in intensiven Eins-gegen-eins-Duellen an. Warte auf den richtigen Moment, reagiere blitzschnell und schieße vor deinem Rivalen.',
        'Das Gameplay ist leicht zu verstehen, aber schwer zu meistern – perfekt für kurze Spielsessions mit einer echten Herausforderung.',
        'Mit einfachen Steuerungen und fesselnder Mechanik wirst du immer wieder zurückkommen, um deine Reaktionszeit zu verbessern.',
        'Ob zum Zeitvertreib oder zum Wettbewerb mit Freunden – Cowboy Duel bietet ein spannendes und süchtig machendes Spielerlebnis.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Reflexspiel', 'Arcade', 'Reaktionszeit', 'Western', 'Casual'],
    },
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
        'Gastarbajter ist ein storybasiertes Casual-Game, das Djuro auf seinem Weg zu einem besseren Leben in Europa begleitet. Aus bescheidenen Anfängen heraus ist dein Ziel, ihm dabei zu helfen, eine neue Sprache zu lernen, alle erforderlichen Dokumente zu sammeln und sich erfolgreich auf das Leben im Ausland vorzubereiten.',
        'Inspiriert von echten Erfahrungen von Arbeitskräften, die ins Ausland ziehen, verbindet das Spiel Humor, kulturelle Bezüge und leichte Herausforderungen zu einem einzigartigen Spielerlebnis. Jeder Schritt der Reise spiegelt typische Hindernisse wider, die bei einem Umzug auftreten — von Papierkram und Bürokratie bis hin zu Sprachbarrieren.',
        'Die Spieler machen Fortschritte, indem sie Aufgaben erledigen, Meilensteine freischalten und Djuro auf seinem Weg zu seinem großen Ziel begleiten: ein erfolgreicher Gastarbajter zu werden. Das Gameplay ist einfach, zugänglich und für kurze Sessions konzipiert, wodurch es ideal für Gelegenheitsspieler ist.',
        'Egal, ob dir das Thema Arbeiten im Ausland vertraut ist oder du es zum ersten Mal entdeckst — Gastarbajter bietet einen nachvollziehbaren und unterhaltsamen Blick auf Migration, Ehrgeiz und alltägliche Herausforderungen.',
        'Mit seinem minimalistischen Design und seinem humorvollen Ton bietet das Spiel eine leichte und zugleich bedeutungsvolle Erfahrung, die Spieler aus ganz Europa und darüber hinaus anspricht.',
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
        'The Birds ist ein rasantes Arcade-Flugspiel, bei dem Timing, Präzision und schnelle Reflexe der Schlüssel zum Überleben sind. Tippe, um mit den Flügeln zu schlagen, steuere deinen Vogel durch enge Lücken und weiche Hindernissen aus, während du versuchst, den höchstmöglichen Punktestand zu erreichen.',
        'Das Spiel ist auf mehrere Stufen verteilt und fordert die Spieler heraus, verschiedene Welten zu durchqueren, während sie die einfache Ein-Tipp-Steuerung meistern. Jeder Lauf ist ein Test für Konzentration und Rhythmus, wodurch das Spiel leicht zu erlernen, aber schwer zu meistern ist.',
        'Mit sieben einzigartigen Vögeln und mehreren Fähigkeiten zum Freischalten bringt The Birds Abwechslung in jeden Versuch. Spieler können unterschiedliche Spielstile entdecken, weitere Strecken schaffen und ihre Leistung stetig verbessern.',
        'Das Spiel bietet farbenfrohe Grafiken, flüssige Animationen und kurze, wiederholbare Sessions, die es perfekt für schnelles Spielen jederzeit und überall machen.',
        'Ob du klassische Arcade-Mechaniken oder Herausforderungen im Stil von Endless Runnern magst — The Birds liefert ein leichtes und süchtig machendes Spielerlebnis, das ganz auf pures Gameplay setzt.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade'],
    },
    'bank-escape': {
      name: 'Bank Escape',
      summary:
        'Fliehe mit dem Geld aus der Bank, vermeide die Festnahme und teste deine Reflexe in einer rasanten Arcade-Action-Herausforderung für kurze, süchtig machende Spielsessions.',
      longDescription: [
        'Bank Escape ist ein rasantes Arcade-Actionspiel, in dem deine Mission einfach ist: Schnapp dir das Geld, fliehe aus der Bank und vermeide es, geschnappt zu werden. Jeder Lauf stellt deine Reflexe und dein Timing auf die Probe, während du versuchst, so lange wie möglich zu überleben und den besten Punktestand zu erreichen.',
        'Dank einfacher Steuerung und sofortigem Spieleinstieg ist das Spiel leicht zu beginnen, aber zunehmend schwer zu meistern. Mit steigendem Druck musst du schnell reagieren, konzentriert bleiben und clevere Bewegungen machen, um deine Flucht fortzusetzen.',
        'Das Gameplay ist ideal für Spieler, die schnelle Reaktionsspiele, Highscore-Jagd und kurze, intensive Sessions mögen. Jeder Versuch gibt dir eine neue Chance, mehr Geld zu sammeln, deine Leistung zu verbessern und deine bisherigen Ergebnisse zu übertreffen.',
        'Mit seinem von Bankraub inspirierten Thema, zugänglichen Mechaniken und hohem Arcade-Tempo bietet Bank Escape ein leichtgewichtiges, aber sehr wiederspielbares Erlebnis für Gelegenheitsspieler und Fans reflexbasierter Spiele.',
        'Ob du ein einfaches Offline-Arcade-Spiel für eine kurze Pause suchst oder eine fesselnde Action-Herausforderung, zu der du immer wieder zurückkehren kannst — Bank Escape bietet eine unterhaltsame Flucht-Gameplay-Schleife rund um Geschwindigkeit, Bewegung und Überleben.',
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
        'ZigZag Ski ist ein rasantes Arcade-Actionspiel, bei dem Präzision und Timing alles sind. Steuere deinen Skifahrer einen kurvigen Bergpfad hinunter, mache scharfe Wendungen und weiche Hindernissen aus, während das Tempo nach und nach zunimmt.',
        'Das Gameplay basiert auf einer einfachen Tipp-Steuerung — wechsle im richtigen Moment die Richtung, um auf der Strecke zu bleiben und so lange wie möglich zu überleben. Jeder Lauf wird intensiver und stellt deine Reflexe und Konzentration mit jeder Kurve auf die Probe.',
        'Während du durch verschneite Umgebungen fährst, musst du enge Zickzack-Strecken meistern, Barrieren ausweichen und unterwegs Gegenstände sammeln, um deine Leistung zu verbessern. Die Herausforderung besteht darin, die Kontrolle zu behalten und gleichzeitig schnell auf das wechselnde Gelände zu reagieren.',
        'ZigZag Ski ist für kurze und wiederholbare Sessions konzipiert, leicht zu lernen und schwer zu meistern. Ganz gleich, ob du deinen Highscore schlagen oder einfach schnelles Arcade-Gameplay genießen möchtest — jeder Lauf bietet eine neue Chance, dich zu verbessern.',
        'Mit klaren Grafiken, flüssiger Steuerung und süchtig machender Mechanik bietet ZigZag Ski ein leichtgewichtiges Action-Erlebnis für Spieler, die reflexbasierte Herausforderungen und endlose Gameplay-Schleifen mögen.',
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
        'Kiss The Boss ist ein skurriles Casual-Arcade-Spiel, das Bürohumor in eine rasante Reflex-Herausforderung verwandelt. Dein Ziel ist einfach — küsse deinen Chef so schnell und effizient wie möglich, um deinen Job zu behalten und die Karriereleiter hinaufzusteigen.',
        'Rund um ein einzigartiges und komödiantisches Konzept fordert das Spiel die Spieler dazu auf, schnell zu reagieren, ihre Aktionen gut zu timen und ihre Leistung mit jedem Versuch zu verbessern. Je besser und schneller du spielst, desto höher sind deine Erfolgschancen.',
        'Inspiriert von überzeichneten Arbeitsplatzszenarien verbindet Kiss The Boss Satire, Humor und einfache Spielmechaniken zu einem Erlebnis, das sowohl unterhaltsam als auch leicht zugänglich ist.',
        'Die Steuerung ist minimalistisch und zugänglich, wodurch sich das Spiel perfekt für kurze Sessions eignet und gleichzeitig durch Highscores und Wiederspielwert einen Wettbewerbseffekt bietet.',
        'Wenn du ein lockeres Arcade-Spiel suchst oder etwas anderes als klassische Spielmechaniken erleben möchtest, liefert Kiss The Boss eine spaßige und ungewöhnliche Gameplay-Schleife für schnelle Unterhaltung.',
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
        'Santa’s Lost Presents ist ein festliches Arcade-Actionspiel, in dem deine Mission darin besteht, dem Weihnachtsmann dabei zu helfen, alle Geschenke wiederzufinden, die er auf seiner Reise vom Nordpol versehentlich verloren hat. Da Weihnachten auf dem Spiel steht, zählt jedes einzelne Geschenk.',
        'Während Santa durch verschiedene Umgebungen reist, müssen die Spieler verstreute Geschenke einsammeln und Hindernisse überwinden, damit jedes Kind sein Geschenk rechtzeitig erhält. Das Gameplay ist einfach, schnell und konzentriert sich auf Bewegung, Timing und Aufmerksamkeit.',
        'Inspiriert von klassischen Arcade-Mechaniken fordert das Spiel die Spieler dazu auf, ihre Reflexe zu verbessern, während sie sich durch immer schwierigere Situationen bewegen. Jeder Lauf bietet neue Chancen, mehr Geschenke zu sammeln und den eigenen Punktestand zu steigern.',
        'Mit seinem fröhlichen Feiertagsthema und der zugänglichen Steuerung ist Santa’s Lost Presents perfekt für kurze Spielsessions in der Weihnachtszeit oder jederzeit, wenn du ein leichtes und unterhaltsames Erlebnis suchst.',
        'Ob du Weihnachts-Spiele oder klassische Action-Arcade-Herausforderungen magst — Santa’s Lost Presents bietet eine spaßige und wiederspielbare Gameplay-Schleife rund ums Sammeln, Ausweichen und Retten des Weihnachtsgeistes.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade', 'Action'],
    },
  },

  fr: {
    'cowboy-duel': {
      name: 'Cowboy Duel',
      summary:
        'Testez vos réflexes dans des duels de western rapides où le timing est essentiel – dégainez plus vite que votre adversaire.',
      longDescription: [
        'Cowboy Duel est un jeu de réaction rapide dans l’univers du Far West, où votre objectif est simple : dégainer votre arme plus vite que votre adversaire et remporter le duel. Chaque partie met à l’épreuve votre timing, votre concentration et votre sang-froid.',
        'Glissez-vous dans la peau d’un tireur d’élite et affrontez des adversaires dans des duels intenses en un contre un. Attendez le moment parfait, réagissez instantanément et tirez avant votre rival. Mais attention : si vous tirez trop tôt, vous perdez.',
        'Le gameplay est facile à comprendre mais difficile à maîtriser, ce qui le rend parfait pour de courtes sessions tout en offrant un vrai défi à ceux qui veulent améliorer leur vitesse de réaction.',
        'Avec ses commandes simples et ses mécaniques captivantes, Cowboy Duel vous donne envie de revenir pour battre vos meilleurs temps et affûter vos réflexes. Chaque duel est tendu et gratifiant, surtout lorsque la victoire se joue à une fraction de seconde.',
        'Que vous cherchiez à passer le temps ou à rivaliser avec vos amis pour le tir le plus rapide, Cowboy Duel offre une expérience amusante et addictive inspirée des fusillades classiques du western.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Réflexes', 'Arcade', 'Temps de réaction', 'Western', 'Casual'],
    },
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
        'Gastarbajter est un jeu casual narratif qui suit Djuro dans son parcours vers une vie meilleure en Europe. En partant de peu, votre objectif est de l’aider à apprendre une nouvelle langue, à rassembler tous les documents nécessaires et à se préparer avec succès à la vie à l’étranger.',
        'Inspiré d’expériences réelles de travailleurs qui partent à l’étranger, le jeu mêle humour, références culturelles et défis légers dans une expérience de jeu originale. Chaque étape du voyage reflète les obstacles courants liés à la relocalisation — des démarches administratives aux barrières de communication.',
        'Les joueurs progressent en accomplissant des tâches, en débloquant des étapes clés et en guidant Djuro vers son objectif ultime : devenir un gastarbajter accompli. Le gameplay est simple, accessible et pensé pour de courtes sessions, ce qui le rend idéal pour les joueurs occasionnels.',
        'Que vous connaissiez déjà la réalité du travail à l’étranger ou que vous la découvriez pour la première fois, Gastarbajter offre un regard à la fois attachant et divertissant sur la migration, l’ambition et les difficultés du quotidien.',
        'Avec son design minimaliste et son ton humoristique, le jeu propose une expérience légère mais pleine de sens, capable de parler aux joueurs de toute l’Europe et au-delà.',
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
        'The Birds est un jeu d’arcade aérien rapide où le timing, la précision et les réflexes sont essentiels pour survivre. Touchez pour battre des ailes, guidez votre oiseau à travers des passages étroits et évitez les obstacles afin d’atteindre le meilleur score possible.',
        'Réparti sur plusieurs étapes, le jeu pousse les joueurs à progresser dans différents mondes tout en maîtrisant des commandes simples à un seul toucher. Chaque partie est un test de concentration et de rythme, ce qui le rend facile à prendre en main mais difficile à maîtriser.',
        'Avec sept oiseaux uniques et plusieurs capacités à débloquer, The Birds apporte de la variété à chaque tentative. Les joueurs peuvent explorer différents styles de jeu, parcourir de plus longues distances et améliorer leurs performances.',
        'Le jeu propose des visuels colorés, des animations fluides et des sessions courtes et rejouables qui le rendent parfait pour jouer rapidement à tout moment et n’importe où.',
        'Que vous aimiez les mécaniques d’arcade classiques ou les défis de type endless runner, The Birds offre une expérience légère et addictive centrée sur la pure sensation de gameplay.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade'],
    },
    'bank-escape': {
      name: 'Bank Escape',
      summary:
        'Échappez-vous de la banque avec l’argent, évitez la capture et testez vos réflexes dans un défi d’action arcade rapide conçu pour des sessions courtes et addictives.',
      longDescription: [
        'Bank Escape est un jeu d’action arcade rapide dans lequel votre mission est simple : prendre l’argent, fuir la banque et éviter de vous faire attraper. Chaque partie met vos réflexes et votre sens du timing à l’épreuve alors que vous essayez de survivre le plus longtemps possible et d’obtenir le meilleur score.',
        'Grâce à des commandes simples et une action immédiate, le jeu est facile à prendre en main, mais de plus en plus difficile à maîtriser. À mesure que la pression augmente, vous devrez réagir vite, rester concentré et effectuer les bons mouvements pour poursuivre votre fuite.',
        'Le gameplay est conçu pour les joueurs qui aiment les jeux de réflexe, la chasse au meilleur score et les sessions courtes mais intenses. Chaque tentative vous donne une nouvelle occasion de collecter plus d’argent, d’améliorer vos performances et de battre vos précédents résultats.',
        'Avec son thème inspiré des braquages, ses mécaniques accessibles et son rythme arcade soutenu, Bank Escape offre une expérience légère mais hautement rejouable pour les joueurs occasionnels comme pour les amateurs de défis basés sur les réflexes.',
        'Que vous cherchiez un jeu arcade hors ligne simple pour une courte pause ou un défi d’action addictif auquel revenir encore et encore, Bank Escape propose une boucle de gameplay amusante centrée sur la vitesse, le mouvement et la survie.',
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
        'ZigZag Ski est un jeu d’action arcade rapide où la précision et le timing sont essentiels. Guidez votre skieur sur un sentier de montagne sinueux, effectuez des virages serrés et évitez les obstacles à mesure que la vitesse augmente progressivement.',
        'Le gameplay repose sur des commandes simples au toucher — changez de direction au bon moment pour rester sur la piste et survivre le plus longtemps possible. Chaque partie devient plus intense et met vos réflexes ainsi que votre concentration à l’épreuve à chaque virage.',
        'En descendant à travers des environnements enneigés, vous devrez traverser des tracés étroits en zigzag, éviter les barrières et ramasser des objets en chemin pour améliorer vos performances. Le défi consiste à garder le contrôle tout en réagissant vite aux changements de terrain.',
        'Pensé pour des sessions rapides et rejouables, ZigZag Ski est facile à apprendre mais difficile à maîtriser. Que vous cherchiez à battre votre meilleur score ou simplement à profiter d’un gameplay arcade nerveux, chaque partie offre une nouvelle occasion de progresser.',
        'Avec des visuels épurés, des commandes fluides et des mécaniques addictives, ZigZag Ski propose une expérience d’action légère parfaite pour les joueurs qui aiment les défis basés sur les réflexes et les boucles de jeu sans fin.',
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
        'Kiss The Boss est un jeu casual arcade décalé qui transforme l’humour du monde du travail en un défi de réflexes au rythme rapide. Votre objectif est simple : embrasser votre patron aussi vite et efficacement que possible pour garder votre emploi et gravir les échelons.',
        'Construit autour d’un concept unique et comique, le jeu pousse les joueurs à réagir vite, à bien synchroniser leurs actions et à améliorer leurs performances à chaque tentative. Plus vous êtes rapide et efficace, plus vos chances de réussite augmentent.',
        'Inspiré de situations professionnelles volontairement exagérées, Kiss The Boss mêle satire, humour et mécaniques simples dans une expérience à la fois divertissante et facile à prendre en main.',
        'Les commandes sont minimalistes et accessibles, ce qui le rend parfait pour de courtes sessions de jeu tout en conservant un aspect compétitif grâce à l’amélioration du score et à la rejouabilité.',
        'Que vous cherchiez un jeu d’arcade léger ou quelque chose de différent des mécaniques traditionnelles, Kiss The Boss propose une boucle de gameplay amusante et originale conçue pour un divertissement immédiat.',
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
        'Santa’s Lost Presents est un jeu d’action arcade festif dans lequel votre mission est d’aider le Père Noël à récupérer tous les cadeaux qu’il a accidentellement perdus lors de son voyage depuis le pôle Nord. Avec Noël en jeu, chaque cadeau compte.',
        'Au fil de son voyage à travers différents environnements, les joueurs doivent ramasser les cadeaux dispersés et surmonter les obstacles afin que chaque enfant reçoive son présent à temps. Le gameplay est simple, rapide et centré sur le mouvement, le timing et l’attention.',
        'Inspiré des mécaniques d’arcade classiques, le jeu met les joueurs au défi d’améliorer leurs réflexes en traversant des situations de plus en plus difficiles. Chaque partie offre de nouvelles occasions de collecter davantage de cadeaux et d’améliorer son score.',
        'Avec son ambiance de fête joyeuse et ses commandes accessibles, Santa’s Lost Presents est parfait pour de courtes sessions pendant la période de Noël ou à tout moment où vous avez envie d’une expérience légère et engageante.',
        'Que vous aimiez les jeux sur le thème de Noël ou les défis d’action arcade classiques, Santa’s Lost Presents propose une boucle de gameplay amusante et rejouable centrée sur la collecte, l’esquive et la sauvegarde de l’esprit des fêtes.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade', 'Action'],
    },
  },

  it: {
    'cowboy-duel': {
      name: 'Cowboy Duel',
      summary:
        'Metti alla prova i tuoi riflessi in duelli western veloci dove il tempismo è tutto.',
      longDescription: [
        'Cowboy Duel è un gioco di reazione frenetico ambientato nel selvaggio West, dove il tuo obiettivo è semplice: estrarre l’arma più velocemente del tuo avversario e vincere il duello. Ogni sfida mette alla prova tempismo, concentrazione e sangue freddo.',
        'Mettiti nei panni di un pistolero e affronta avversari in intensi duelli uno contro uno. Aspetta il momento perfetto, reagisci all’istante e spara prima del tuo rivale. Ma fai attenzione: se spari troppo presto, perdi.',
        'Il gameplay è facile da capire ma difficile da padroneggiare, quindi è perfetto per sessioni rapide ma offre comunque una vera sfida a chi vuole migliorare la propria velocità di reazione.',
        'Con controlli semplici e meccaniche coinvolgenti, Cowboy Duel ti spinge a tornare per battere i tuoi tempi migliori e affinare i riflessi. Ogni duello è teso e appagante, soprattutto quando la vittoria dipende da una frazione di secondo.',
        'Che tu voglia passare il tempo o sfidare gli amici per il draw più veloce, Cowboy Duel offre un’esperienza divertente e coinvolgente ispirata ai classici scontri a fuoco western.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Riflessi', 'Arcade', 'Tempo di reazione', 'Western', 'Casual'],
    },
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
        'Big Ben (Rintocchi) porta il suono leggendario della torre dell’orologio più famosa di Londra direttamente sul tuo dispositivo Android. Che tu ami i classici rintocchi, abbia bisogno di una suoneria originale o semplicemente apprezzi i suoni ambientali del tempo che passa, questa app offre l’autentico audio del Big Ben in qualsiasi momento e ovunque.',
        'Progettata per essere semplice e accessibile, l’app ti permette di riprodurre rintocchi di alta qualità su richiesta, rendendola perfetta per il relax, la nostalgia o per aggiungere un tocco britannico alla tua giornata. Grazie alle prestazioni leggere e al funzionamento offline, puoi goderti il suono del Big Ben senza bisogno di una connessione Internet.',
        'Ideale per chi ama i suoni tradizionali degli orologi, i monumenti di Londra e le app audio minimaliste, Big Ben (Rintocchi) offre un’esperienza diretta che si concentra esclusivamente su ciò che conta davvero: l’iconico suono della campana.',
        'Usala come sottofondo, come ricordo di viaggio o persino come alternativa creativa alla classica suoneria. A casa, al lavoro o in movimento, il rintocco senza tempo del Big Ben è sempre a portata di mano.',
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
        'Gastarbajter è un gioco casual narrativo che segue Djuro nel suo percorso verso una vita migliore in Europa. Partendo da condizioni modeste, il tuo obiettivo è aiutarlo a imparare una nuova lingua, raccogliere tutti i documenti necessari e prepararsi con successo alla vita all’estero.',
        'Ispirato alle esperienze reali di chi si trasferisce per lavoro, il gioco unisce umorismo, riferimenti culturali e sfide leggere in un’esperienza unica. Ogni fase del viaggio riflette gli ostacoli più comuni del trasferimento — dalla burocrazia ai problemi di comunicazione.',
        'I giocatori progrediscono completando compiti, sbloccando traguardi e guidando Djuro verso il suo obiettivo finale: diventare un gastarbajter di successo. Il gameplay è semplice, accessibile e pensato per sessioni brevi, rendendolo ideale per i giocatori casual.',
        'Che tu conosca bene il tema del lavoro all’estero o lo stia scoprendo per la prima volta, Gastarbajter offre uno sguardo coinvolgente e divertente su migrazione, ambizione e difficoltà quotidiane.',
        'Con il suo design minimalista e il tono umoristico, il gioco propone un’esperienza leggera ma significativa, capace di entrare in sintonia con giocatori di tutta Europa e non solo.',
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
        'The Birds è un gioco arcade di volo frenetico in cui tempismo, precisione e riflessi rapidi sono fondamentali per sopravvivere. Tocca per sbattere le ali, guida il tuo uccello attraverso passaggi stretti ed evita gli ostacoli mentre cerchi di ottenere il punteggio più alto possibile.',
        'Distribuito su più fasi, il gioco sfida i giocatori a progredire attraverso mondi diversi mentre padroneggiano comandi semplici a un solo tocco. Ogni corsa è una prova di concentrazione e ritmo, quindi è facile da giocare ma difficile da dominare.',
        'Con sette uccelli unici e diverse abilità da sbloccare, The Birds aggiunge varietà a ogni tentativo. I giocatori possono esplorare stili di gioco differenti, coprire distanze maggiori e migliorare costantemente le proprie prestazioni.',
        'Il gioco offre grafica colorata, animazioni fluide e sessioni brevi e rigiocabili che lo rendono perfetto per partite veloci ovunque e in qualsiasi momento.',
        'Che tu ami le meccaniche arcade classiche o le sfide in stile endless runner, The Birds propone un’esperienza leggera e coinvolgente costruita attorno al puro gameplay.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade'],
    },
    'bank-escape': {
      name: 'Bank Escape',
      summary:
        'Fuggi dalla banca con il denaro, evita la cattura e metti alla prova i tuoi riflessi in una sfida arcade d’azione veloce pensata per sessioni brevi e coinvolgenti.',
      longDescription: [
        'Bank Escape è un gioco arcade d’azione dal ritmo veloce in cui la tua missione è semplice: prendi il denaro, scappa dalla banca ed evita di essere catturato. Ogni partita mette alla prova i tuoi riflessi e il tuo tempismo mentre cerchi di sopravvivere il più a lungo possibile e ottenere il punteggio migliore.',
        'Grazie a controlli semplici e azione immediata, il gioco è facile da iniziare ma sempre più difficile da padroneggiare. Man mano che la pressione aumenta, dovrai reagire rapidamente, restare concentrato e muoverti con intelligenza per continuare la fuga.',
        'Il gameplay è pensato per i giocatori che amano i giochi di riflessi, la caccia al punteggio e le sessioni brevi ma intense. Ogni tentativo ti offre una nuova occasione per raccogliere più denaro, migliorare le tue prestazioni e superare i tuoi risultati precedenti.',
        'Con il suo tema ispirato alle rapine, meccaniche accessibili e un ritmo arcade elevato, Bank Escape offre un’esperienza leggera ma altamente rigiocabile per i giocatori casual e per gli amanti delle sfide basate sui riflessi.',
        'Che tu stia cercando un semplice gioco arcade offline per una pausa veloce o una sfida d’azione coinvolgente a cui tornare più volte, Bank Escape offre un divertente loop di fuga basato su velocità, movimento e sopravvivenza.',
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
        'ZigZag Ski è un gioco arcade d’azione frenetico in cui precisione e tempismo sono tutto. Guida il tuo sciatore lungo un sentiero di montagna tortuoso, affronta curve strette ed evita gli ostacoli mentre la velocità aumenta gradualmente.',
        'Il gameplay si basa su semplici controlli tap — cambia direzione al momento giusto per restare sul percorso e sopravvivere il più a lungo possibile. Ogni corsa diventa sempre più intensa e mette alla prova riflessi e concentrazione a ogni curva.',
        'Mentre scendi attraverso ambientazioni innevate, dovrai affrontare tracciati stretti a zigzag, evitare barriere e raccogliere oggetti lungo il percorso per migliorare le tue prestazioni. La sfida consiste nel mantenere il controllo reagendo rapidamente ai cambiamenti del terreno.',
        'Pensato per sessioni rapide e rigiocabili, ZigZag Ski è facile da imparare ma difficile da padroneggiare. Che tu voglia battere il tuo record o semplicemente goderti un arcade veloce, ogni corsa offre una nuova occasione per migliorare.',
        'Con grafica pulita, controlli fluidi e meccaniche coinvolgenti, ZigZag Ski offre un’esperienza d’azione leggera perfetta per i giocatori che amano le sfide basate sui riflessi e i loop di gioco infiniti.',
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
        'Kiss The Boss è un bizzarro gioco casual arcade che trasforma l’umorismo da ufficio in una frenetica sfida di riflessi. Il tuo obiettivo è semplice — baciare il capo nel modo più rapido ed efficiente possibile per mantenere il posto di lavoro e fare carriera.',
        'Basato su un concetto unico e comico, il gioco sfida i giocatori a reagire velocemente, sincronizzare bene le proprie azioni e migliorare la prestazione a ogni tentativo. Più sei bravo e veloce, maggiori sono le possibilità di successo.',
        'Ispirato a scenari lavorativi volutamente esagerati, Kiss The Boss mescola satira, umorismo e meccaniche semplici in un’esperienza divertente e immediata.',
        'I controlli sono minimi e accessibili, il che lo rende perfetto per sessioni di gioco brevi ma comunque capaci di offrire un lato competitivo grazie al miglioramento del punteggio e alla rigiocabilità.',
        'Se cerchi un arcade leggero o qualcosa di diverso dalle meccaniche tradizionali, Kiss The Boss offre un loop di gameplay divertente e insolito pensato per l’intrattenimento veloce.',
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
        'Santa’s Lost Presents è un gioco arcade d’azione festivo in cui la tua missione è aiutare Babbo Natale a recuperare tutti i regali che ha perso accidentalmente durante il viaggio dal Polo Nord. Con il Natale in pericolo, ogni regalo conta.',
        'Mentre Babbo Natale attraversa ambientazioni diverse, i giocatori devono raccogliere i regali sparsi e superare gli ostacoli per fare in modo che ogni bambino riceva il proprio dono in tempo. Il gameplay è semplice, rapido e si concentra su movimento, tempismo e attenzione.',
        'Ispirato alle classiche meccaniche arcade, il gioco mette i giocatori alla prova chiedendo loro di migliorare i riflessi mentre affrontano situazioni sempre più difficili. Ogni corsa offre nuove opportunità per raccogliere più regali e aumentare il punteggio.',
        'Con la sua allegra atmosfera natalizia e i controlli accessibili, Santa’s Lost Presents è perfetto per sessioni veloci durante il periodo delle feste o in qualsiasi momento in cui desideri un’esperienza leggera e coinvolgente.',
        'Che tu ami i giochi a tema natalizio o le classiche sfide arcade d’azione, Santa’s Lost Presents offre un loop di gameplay divertente e rigiocabile basato su raccolta, schivate e salvataggio dello spirito delle feste.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade', 'Action'],
    },
  },

  es: {
    'cowboy-duel': {
      name: 'Cowboy Duel',
      summary:
        'Pon a prueba tus reflejos en duelos del oeste donde el tiempo lo es todo.',
      longDescription: [
        'Cowboy Duel es un juego de reacción trepidante ambientado en el viejo oeste, donde tu objetivo es simple: desenfundar el arma más rápido que tu oponente y ganar el duelo. Cada partida pone a prueba tu precisión, tu concentración y tus nervios.',
        'Ponte en la piel de un pistolero y enfréntate a rivales en intensos duelos uno contra uno. Espera el momento perfecto, reacciona al instante y dispara antes que tu contrincante. Pero cuidado: si disparas demasiado pronto, pierdes.',
        'La jugabilidad es fácil de entender pero difícil de dominar, así que es perfecta para partidas rápidas y al mismo tiempo ofrece un verdadero reto para quienes quieren mejorar su velocidad de reacción.',
        'Con controles simples y mecánicas atractivas, Cowboy Duel te hace volver una y otra vez para superar tus mejores tiempos y afinar tus reflejos. Cada duelo se siente tenso y gratificante, sobre todo cuando la victoria se decide en una fracción de segundo.',
        'Tanto si quieres pasar el rato como competir con tus amigos por el desenfunde más rápido, Cowboy Duel ofrece una experiencia divertida y adictiva inspirada en los clásicos tiroteos del oeste.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Reflejos', 'Arcade', 'Tiempo de reacción', 'Western', 'Casual'],
    },
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
        'Big Ben (Campanadas) lleva el sonido legendario de la torre del reloj más famosa de Londres directamente a tu dispositivo Android. Tanto si te encantan las campanadas clásicas, necesitas un tono único o simplemente disfrutas de sonidos ambientales de relojería, esta app ofrece audio auténtico de Big Ben en cualquier momento y lugar.',
        'Diseñada para ser simple y accesible, la aplicación te permite reproducir campanadas de alta calidad bajo demanda, por lo que es perfecta para relajarte, sentir nostalgia o añadir un toque británico a tu día. Gracias a su rendimiento ligero y a la función offline, puedes disfrutar del sonido de Big Ben sin necesidad de conexión a Internet.',
        'Ideal para quienes aman los sonidos tradicionales de reloj, los monumentos de Londres y las apps de audio minimalistas, Big Ben (Campanadas) ofrece una experiencia directa centrada exclusivamente en lo que importa: el icónico sonido de la campana.',
        'Úsala como sonido de ambiente, como recuerdo de viajes o incluso como una alternativa creativa al tono de llamada. En casa, en el trabajo o mientras te desplazas, la campanada atemporal de Big Ben siempre está a tu alcance.',
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
        'Gastarbajter es un juego casual narrativo que sigue a Djuro en su camino hacia una vida mejor en Europa. Empezando desde cero, tu objetivo es ayudarle a aprender un nuevo idioma, reunir todos los documentos necesarios y prepararse con éxito para la vida en el extranjero.',
        'Inspirado en experiencias reales de personas que emigran por trabajo, el juego combina humor, referencias culturales y retos ligeros en una experiencia única. Cada paso del viaje refleja obstáculos habituales al mudarse — desde el papeleo y la burocracia hasta las barreras de comunicación.',
        'Los jugadores avanzan completando tareas, desbloqueando hitos y guiando a Djuro hacia su objetivo final: convertirse en un gastarbajter de éxito. La jugabilidad es simple, accesible y pensada para sesiones cortas, por lo que resulta ideal para jugadores casuales.',
        'Tanto si conoces bien la idea de trabajar en el extranjero como si la descubres por primera vez, Gastarbajter ofrece una mirada cercana y entretenida sobre la migración, la ambición y las dificultades del día a día.',
        'Con su diseño minimalista y su tono humorístico, el juego ofrece una experiencia ligera pero con significado, capaz de conectar con jugadores de toda Europa y de otros lugares.',
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
        'The Birds es un juego arcade de vuelo trepidante en el que el ritmo, la precisión y los reflejos rápidos son la clave para sobrevivir. Toca para batir las alas, guía a tu pájaro por huecos estrechos y esquiva obstáculos mientras intentas alcanzar la mayor puntuación posible.',
        'Repartido en varias etapas, el juego desafía a los jugadores a avanzar por distintos mundos mientras dominan unos controles sencillos de un solo toque. Cada partida pone a prueba la concentración y el ritmo, por lo que es fácil de jugar pero difícil de dominar.',
        'Con siete pájaros únicos y varias habilidades por desbloquear, The Birds aporta variedad a cada intento. Los jugadores pueden explorar diferentes estilos de juego, llegar más lejos y mejorar su rendimiento.',
        'El juego cuenta con gráficos coloridos, animaciones fluidas y sesiones cortas y rejugables que lo hacen perfecto para partidas rápidas en cualquier momento y lugar.',
        'Tanto si disfrutas de las mecánicas arcade clásicas como de los desafíos tipo endless runner, The Birds ofrece una experiencia ligera y adictiva construida alrededor del puro gameplay.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade'],
    },
    'bank-escape': {
      name: 'Bank Escape',
      summary:
        'Escapa del banco con el dinero, evita que te atrapen y pon a prueba tus reflejos en un desafío arcade de acción rápida creado para partidas cortas y adictivas.',
      longDescription: [
        'Bank Escape es un juego arcade de acción a toda velocidad en el que tu misión es simple: tomar el dinero, salir del banco y evitar que te atrapen. Cada partida pone a prueba tus reflejos y tu precisión mientras intentas sobrevivir el mayor tiempo posible y lograr la mejor puntuación.',
        'Con controles sencillos y acción inmediata, el juego es fácil de empezar pero cada vez más difícil de dominar. A medida que aumenta la presión, tendrás que reaccionar rápido, mantener la concentración y moverte con inteligencia para seguir escapando.',
        'La jugabilidad está diseñada para jugadores que disfrutan de los juegos de reflejos, la competencia por puntuaciones altas y las sesiones cortas pero intensas. Cada intento te da una nueva oportunidad de recoger más dinero, mejorar tu rendimiento y superar tus resultados anteriores.',
        'Con su temática inspirada en atracos, mecánicas accesibles y ritmo arcade rápido, Bank Escape ofrece una experiencia ligera pero muy rejugable tanto para jugadores casuales como para fans de los desafíos basados en reflejos.',
        'Tanto si buscas un juego arcade offline simple para un descanso corto como un reto de acción adictivo al que volver una y otra vez, Bank Escape ofrece un divertido bucle de juego centrado en velocidad, movimiento y supervivencia.',
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
        'ZigZag Ski es un juego de acción arcade trepidante en el que la precisión y el tiempo lo son todo. Guía a tu esquiador por un sinuoso camino de montaña, realiza giros cerrados y esquiva obstáculos mientras la velocidad aumenta poco a poco.',
        'La jugabilidad se basa en controles simples con toques — cambia de dirección en el momento justo para seguir en la pista y sobrevivir el mayor tiempo posible. Cada partida se vuelve más intensa y pone a prueba tus reflejos y tu concentración en cada giro.',
        'Mientras desciendes por entornos nevados, tendrás que atravesar trazados estrechos en zigzag, evitar barreras y recoger objetos por el camino para mejorar tu rendimiento. El desafío está en mantener el control mientras reaccionas rápido a los cambios del terreno.',
        'Diseñado para sesiones rápidas y rejugables, ZigZag Ski es fácil de aprender pero difícil de dominar. Tanto si quieres superar tu récord como si solo quieres disfrutar de una acción arcade veloz, cada partida te da una nueva oportunidad de mejorar.',
        'Con gráficos limpios, controles suaves y mecánicas adictivas, ZigZag Ski ofrece una experiencia ligera de acción perfecta para quienes disfrutan de desafíos basados en reflejos y bucles de juego infinitos.',
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
        'Kiss The Boss es un peculiar juego casual arcade que convierte el humor de oficina en un desafío de reflejos a toda velocidad. Tu objetivo es simple — besar a tu jefe lo más rápido y eficazmente posible para conservar tu trabajo y seguir ascendiendo.',
        'Construido alrededor de una idea única y cómica, el juego desafía a los jugadores a reaccionar rápido, calcular bien sus acciones y mejorar su rendimiento en cada intento. Cuanto mejor y más rápido lo hagas, mayores serán tus posibilidades de éxito.',
        'Inspirado en situaciones laborales exageradas, Kiss The Boss combina sátira, humor y mecánicas sencillas en una experiencia que resulta entretenida y fácil de entender.',
        'Los controles son mínimos y accesibles, lo que lo hace perfecto para partidas cortas, pero al mismo tiempo mantiene un punto competitivo gracias a la mejora de puntuación y a su rejugabilidad.',
        'Si buscas un arcade desenfadado o algo distinto a las mecánicas tradicionales, Kiss The Boss ofrece un bucle de juego divertido y poco convencional pensado para el entretenimiento rápido.',
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
        'Santa’s Lost Presents es un juego de acción arcade festivo en el que tu misión es ayudar a Santa a recuperar todos los regalos que perdió accidentalmente durante su viaje desde el Polo Norte. Con la Navidad en juego, cada regalo cuenta.',
        'Mientras Santa recorre diferentes entornos, los jugadores deben recoger los regalos dispersos y superar obstáculos para asegurarse de que cada niño reciba su regalo a tiempo. La jugabilidad es simple, rápida y se centra en el movimiento, el tiempo y la atención.',
        'Inspirado en las mecánicas arcade clásicas, el juego desafía a los jugadores a mejorar sus reflejos mientras avanzan por situaciones cada vez más difíciles. Cada partida trae nuevas oportunidades para recoger más regalos y mejorar la puntuación.',
        'Con su alegre temática navideña y controles accesibles, Santa’s Lost Presents es perfecto para sesiones cortas durante las fiestas o en cualquier momento en el que te apetezca una experiencia ligera y entretenida.',
        'Tanto si disfrutas de los juegos navideños como de los desafíos clásicos de acción arcade, Santa’s Lost Presents ofrece un bucle jugable divertido y rejugable centrado en recoger, esquivar y salvar el espíritu navideño.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade', 'Action'],
    },
  },

  pt: {
    'cowboy-duel': {
      name: 'Cowboy Duel',
      summary:
        'Teste seus reflexos em duelos do velho oeste onde o tempo é essencial.',
      longDescription: [
        'Cowboy Duel é um jogo de reação em ritmo acelerado ambientado no velho oeste, onde o seu objetivo é simples: sacar a arma mais rápido do que o seu oponente e vencer o duelo. Cada partida testa o seu tempo de reação, foco e nervos.',
        'Entre na pele de um pistoleiro e enfrente adversários em duelos intensos um contra um. Espere o momento perfeito, reaja instantaneamente e atire antes do seu rival. Mas cuidado — se atirar cedo demais, você perde.',
        'A jogabilidade é fácil de entender, mas difícil de dominar, tornando o jogo perfeito para sessões rápidas e ao mesmo tempo desafiador para quem quer melhorar a velocidade de reação.',
        'Com controles simples e mecânicas envolventes, Cowboy Duel faz você voltar para bater seus melhores tempos e aprimorar seus reflexos. Cada duelo é tenso e recompensador, especialmente quando a vitória depende de decisões em frações de segundo.',
        'Seja para passar o tempo ou competir com amigos pelo saque mais rápido, Cowboy Duel oferece uma experiência divertida e viciante inspirada nos clássicos tiroteios de faroeste.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Reflexos', 'Arcade', 'Tempo de reação', 'Western', 'Casual'],
    },
    'water-reminder': {
      name: 'Water Reminder',
      summary:
        'Acompanhe sua ingestão diária de água, crie hábitos saudáveis e mantenha-se hidratado com lembretes inteligentes.',
      longDescription: [
        'Water Reminder é um aplicativo simples e eficaz de rastreamento de hidratação, criado para ajudar você a desenvolver o hábito consistente de beber água todos os dias. Com botões de adição rápida e uma interface intuitiva, registrar a sua ingestão de água leva apenas um segundo.',
        'Mantenha-se motivado com o acompanhamento de sequências diárias que mostra por quantos dias seguidos você atingiu a sua meta de hidratação. O aplicativo incentiva a constância e ajuda a transformar a hidratação saudável em uma rotina de longo prazo.',
        'Tenha uma visão clara do seu progresso com estatísticas semanais, histórico detalhado e informações como o seu consumo médio de água e o dia com melhor desempenho. Isso permite entender os seus hábitos e melhorar ao longo do tempo.',
        'Lembretes personalizáveis ajudam você a manter o foco durante todo o dia. Defina o seu próprio horário e nunca mais esqueça de beber água, esteja você no trabalho, em casa ou em movimento.',
        'Projetado para ser simples e eficiente, Water Reminder é perfeito para quem deseja melhorar a saúde, aumentar os níveis de energia e manter a hidratação adequada com o mínimo de esforço.',
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
        'Big Ben (Badaladas) leva o som lendário da torre do relógio mais famosa de Londres diretamente para o seu dispositivo Android. Se você adora badaladas clássicas, precisa de um toque único ou simplesmente gosta de sons ambientes marcando o tempo, este aplicativo oferece o autêntico áudio do Big Ben a qualquer hora e em qualquer lugar.',
        'Projetado para ser simples e acessível, o aplicativo permite reproduzir badaladas de alta qualidade sob demanda, sendo perfeito para relaxamento, nostalgia ou para adicionar um toque britânico ao seu dia. Com desempenho leve e funcionamento offline, você pode aproveitar o som do Big Ben sem precisar de conexão com a internet.',
        'Ideal para fãs de sons tradicionais de relógio, pontos turísticos de Londres e aplicativos de áudio minimalistas, Big Ben (Badaladas) oferece uma experiência direta focada apenas no que realmente importa — o icônico som do sino.',
        'Use-o como som ambiente, como lembrança de viagens ou até mesmo como uma alternativa criativa de toque. Em casa, no trabalho ou em movimento, a badalada atemporal do Big Ben está sempre ao seu alcance.',
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
        'Gastarbajter é um jogo casual com narrativa que acompanha Djuro em sua jornada para construir uma vida melhor na Europa. Começando de origens humildes, o seu objetivo é ajudá-lo a aprender um novo idioma, reunir todos os documentos necessários e se preparar com sucesso para a vida no exterior.',
        'Inspirado em experiências reais de trabalhadores que se mudam para outro país, o jogo combina humor, referências culturais e desafios leves em uma experiência única. Cada etapa da jornada reflete obstáculos comuns enfrentados na mudança — desde papelada e burocracia até barreiras de comunicação.',
        'Os jogadores avançam completando tarefas, desbloqueando marcos e guiando Djuro em direção ao objetivo final: tornar-se um gastarbajter bem-sucedido. A jogabilidade é simples, acessível e pensada para sessões curtas, sendo ideal para jogadores casuais.',
        'Se você já conhece a realidade de trabalhar fora ou está descobrindo esse tema pela primeira vez, Gastarbajter oferece uma visão envolvente e divertida sobre migração, ambição e lutas do dia a dia.',
        'Com design minimalista e tom bem-humorado, o jogo entrega uma experiência leve, mas significativa, que se conecta com jogadores de toda a Europa e de outros lugares.',
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
        'The Birds é um jogo arcade de voo em ritmo acelerado no qual timing, precisão e reflexos rápidos são a chave para sobreviver. Toque para bater as asas, conduza o seu pássaro por espaços estreitos e desvie dos obstáculos enquanto tenta alcançar a maior pontuação possível.',
        'Dividido em várias fases, o jogo desafia os jogadores a avançar por mundos diferentes enquanto dominam controles simples de um toque. Cada partida é um teste de foco e ritmo, tornando-o fácil de jogar, mas difícil de dominar.',
        'Com sete pássaros únicos e várias habilidades para desbloquear, The Birds adiciona variedade a cada tentativa. Os jogadores podem explorar diferentes estilos de jogo, ir cada vez mais longe e melhorar o próprio desempenho.',
        'O jogo apresenta visuais coloridos, animações suaves e sessões curtas e rejogáveis, o que o torna perfeito para partidas rápidas a qualquer hora e em qualquer lugar.',
        'Se você gosta de mecânicas arcade clássicas ou de desafios no estilo endless runner, The Birds oferece uma experiência leve e viciante construída em torno da pura jogabilidade.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade'],
    },
    'bank-escape': {
      name: 'Bank Escape',
      summary:
        'Fuja do banco com o dinheiro, evite ser capturado e teste seus reflexos em um desafio arcade de ação em ritmo acelerado feito para sessões curtas e viciantes.',
      longDescription: [
        'Bank Escape é um jogo arcade de ação em ritmo acelerado no qual sua missão é simples: pegar o dinheiro, fugir do banco e evitar ser capturado. Cada partida coloca seus reflexos e seu tempo de reação à prova enquanto você tenta sobreviver o máximo possível e alcançar a melhor pontuação.',
        'Com controles simples e ação imediata, o jogo é fácil de começar, mas cada vez mais difícil de dominar. À medida que a pressão aumenta, você precisa reagir rápido, manter o foco e fazer movimentos inteligentes para continuar sua fuga.',
        'A jogabilidade foi pensada para jogadores que gostam de jogos de reflexo, disputa por pontuação e sessões curtas, porém intensas. Cada tentativa oferece uma nova chance de coletar mais dinheiro, melhorar seu desempenho e superar seus resultados anteriores.',
        'Com tema inspirado em assaltos, mecânicas acessíveis e ritmo arcade veloz, Bank Escape entrega uma experiência leve, mas altamente rejogável, para jogadores casuais e fãs de desafios baseados em reflexos.',
        'Seja para jogar um arcade offline simples durante uma pausa rápida ou para encarar um desafio de ação viciante ao qual você vai querer voltar sempre, Bank Escape oferece um loop divertido de fuga focado em velocidade, movimento e sobrevivência.',
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
        'ZigZag Ski é um jogo de ação arcade em ritmo acelerado no qual precisão e timing são tudo. Guie seu esquiador por um caminho sinuoso na montanha, faça curvas fechadas e desvie de obstáculos enquanto a velocidade aumenta gradualmente.',
        'A jogabilidade é construída em torno de controles simples de toque — mude de direção no momento certo para permanecer na pista e sobreviver o máximo possível. Cada partida fica mais intensa, testando seus reflexos e sua concentração a cada curva.',
        'Enquanto desce por ambientes nevados, você precisará atravessar trajetos apertados em zigue-zague, evitar barreiras e coletar itens pelo caminho para melhorar o desempenho. O desafio está em manter o controle enquanto reage rapidamente às mudanças do terreno.',
        'Projetado para sessões rápidas e rejogáveis, ZigZag Ski é fácil de aprender, mas difícil de dominar. Seja para bater seu recorde ou apenas curtir uma ação arcade veloz, cada partida oferece uma nova chance de melhorar.',
        'Com visuais limpos, controles suaves e mecânicas viciantes, ZigZag Ski oferece uma experiência leve de ação, perfeita para jogadores que gostam de desafios baseados em reflexos e loops de jogabilidade infinitos.',
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
        'Kiss The Boss é um jogo casual arcade excêntrico que transforma o humor de escritório em um desafio de reflexos em ritmo acelerado. Seu objetivo é simples — beijar o chefe o mais rápido e eficientemente possível para manter o emprego e subir na carreira.',
        'Construído em torno de um conceito único e cômico, o jogo desafia os jogadores a reagirem rápido, cronometrar bem suas ações e melhorar o desempenho a cada tentativa. Quanto melhor e mais rápido você jogar, maiores serão as suas chances de sucesso.',
        'Inspirado em cenários exagerados de ambiente de trabalho, Kiss The Boss mistura sátira, humor e mecânicas simples em uma experiência divertida e fácil de entender.',
        'Os controles são mínimos e acessíveis, o que o torna perfeito para sessões curtas de jogo, ao mesmo tempo em que mantém um lado competitivo por meio da melhora de pontuação e da rejogabilidade.',
        'Se você procura um arcade descontraído ou algo diferente das mecânicas tradicionais, Kiss The Boss oferece um loop de jogabilidade divertido e incomum, pensado para entretenimento rápido.',
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
        'Santa’s Lost Presents é um jogo arcade de ação festivo em que sua missão é ajudar o Papai Noel a recuperar todos os presentes que ele perdeu acidentalmente durante sua viagem saindo do Polo Norte. Com o Natal em jogo, cada presente conta.',
        'Enquanto o Papai Noel atravessa diferentes ambientes, os jogadores precisam coletar os presentes espalhados e superar obstáculos para garantir que cada criança receba o seu presente a tempo. A jogabilidade é simples, rápida e focada em movimento, timing e atenção.',
        'Inspirado em mecânicas arcade clássicas, o jogo desafia os jogadores a melhorar seus reflexos enquanto enfrentam situações cada vez mais difíceis. Cada partida traz novas oportunidades de coletar mais presentes e melhorar a pontuação.',
        'Com seu clima alegre de fim de ano e controles acessíveis, Santa’s Lost Presents é perfeito para sessões rápidas durante a temporada de festas ou em qualquer momento em que você queira uma experiência leve e envolvente.',
        'Se você gosta de jogos com tema natalino ou de desafios clássicos de ação arcade, Santa’s Lost Presents oferece um loop de jogabilidade divertido e rejogável centrado em coletar, desviar e salvar o espírito natalino.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade', 'Action'],
    },
  },

  sr: {
    'cowboy-duel': {
      name: 'Cowboy Duel',
      summary:
        'Тестирај своје рефлексе у брзим каубојским двобојима где је тајминг пресудан.',
      longDescription: [
        'Cowboy Duel је брза игра реакције смештена на Дивљем западу, у којој је твој циљ једноставан: потегни оружје брже од противника и победи у двобоју. Сваки меч је тест тајминга, концентрације и живаца.',
        'Ускочи у чизме револвераша и суочи се са противницима у интензивним дуелима један на један. Сачекај савршен тренутак, реагуј тренутно и пуцај пре свог ривала. Али пази — ако опалиш прерано, губиш.',
        'Гејмплеј је лако разумети, али га је тешко савладати, што игру чини савршеном за кратке сесије, а истовремено довољно изазовном за све који желе да побољшају брзину реакције.',
        'Са једноставним контролама и занимљивом механиком, Cowboy Duel те непрестано враћа да обориш своја најбоља времена и изоштриш рефлексе. Сваки двобој делује напето и награђујуће, посебно када победа зависи од делића секунде.',
        'Било да желиш само да прекратиш време или да се такмичиш са пријатељима ко има најбрже потезање, Cowboy Duel доноси забавно и заразно искуство инспирисано класичним вестерн обрачунима.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Рефлекси', 'Аркада', 'Време реакције', 'Вестерн', 'Кежуал'],
    },
    'water-reminder': {
      name: 'Water Reminder',
      summary:
        'Пратите дневни унос воде, развијте здраве навике и останите хидрирани уз паметне подсетнике.',
      longDescription: [
        'Water Reminder је једноставна и ефикасна апликација за праћење хидратације, осмишљена да ти помогне да изградиш доследну дневну навику пијења воде. Захваљујући дугмадима за брзи унос и интуитивном интерфејсу, бележење уноса воде траје само секунд.',
        'Остани мотивисан праћењем дневног низа који показује колико дана заредом си достигао свој циљ хидратације. Апликација подстиче доследност и помаже ти да здраву хидратацију претвориш у дугорочну рутину.',
        'Добиј јасан преглед свог напретка уз недељну статистику, детаљну историју и увиде као што су просечна потрошња воде и дан са најбољим резултатом. То ти омогућава да боље разумеш своје навике и временом их унапредиш.',
        'Прилагодљиви подсетници ти помажу да останеш на правом путу током целог дана. Подеси свој распоред и никада не заборави да попијеш воду, било да си на послу, код куће или у покрету.',
        'Осмишљен за једноставност и ефикасност, Water Reminder је савршен за свакога ко жели да побољша здравље, повећа ниво енергије и одржи правилну хидратацију уз минималан труд.',
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
        'Big Ben (Zvona) доноси легендарни звук најпознатије лондонске куле са сатом директно на твој Android уређај. Било да волиш класична звона, тражиш јединствену мелодију звона или једноставно уживаш у амбијенталним звуцима мерења времена, ова апликација ти пружа аутентичан звук Big Bena било када и било где.',
        'Направљена са фокусом на једноставност и приступачност, апликација ти омогућава да пушташ висококвалитетна звона на захтев, што је чини савршеном за опуштање, носталгију или додавање мало британског шарма у свакодневицу. Захваљујући лаганим перформансама и офлајн раду, у звуку Big Bena можеш уживати и без интернет везе.',
        'Идеална за љубитеље традиционалних звукова сатова, лондонских знаменитости и минималистичких аудио апликација, Big Ben (Zvona) нуди једноставно искуство усмерено само на оно што је најважније — препознатљив звук звона.',
        'Користи је као позадински амбијент, подсетник на путовања или чак као креативну алтернативу класичној мелодији телефона. Било да си код куће, на послу или у покрету, безвременско звоно Big Bena ти је увек надохват руке.',
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
        'Gastarbajter је наративна casual игра која прати Ђура на његовом путу ка бољем животу у Европи. Почевши од скромних околности, твој циљ је да му помогнеш да научи нови језик, сакупи све потребне документе и успешно се припреми за живот у иностранству.',
        'Инспирисана стварним искуствима људи који одлазе у иностранство ради посла, игра спаја хумор, културне референце и лагане изазове у јединствено играчко искуство. Сваки корак на том путу одражава честе препреке приликом селидбе — од папирологије и бирократије до комуникационих баријера.',
        'Играчи напредују тако што завршавају задатке, откључавају прекретнице и воде Ђура ка његовом коначном циљу: да постане успешан gastarbajter. Гејмплеј је једноставан, приступачан и осмишљен за кратке сесије, што га чини идеалним за casual играче.',
        'Било да ти је идеја рада у иностранству већ добро позната или је откриваш први пут, Gastarbajter нуди блиску и забавну перспективу на миграцију, амбицију и свакодневне борбе.',
        'Са минималистичким дизајном и хумористичним тоном, игра пружа лагано, али значајно искуство које може да се допадне играчима широм Европе и ван ње.',
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
        'The Birds је брза аркадна летачка игра у којој су тајминг, прецизност и брзи рефлекси кључ за опстанак. Додирни да замахнеш крилима, води своју птицу кроз уске пролазе и избегавај препреке док покушаваш да оствариш што већи резултат.',
        'Постављена кроз више етапа, игра изазива играче да напредују кроз различите светове док савладавају једноставне контроле на један додир. Свако трчање је тест фокуса и ритма, па је игру лако играти, али тешко потпуно савладати.',
        'Са седам јединствених птица и више способности за откључавање, The Birds уноси разноврсност у сваки покушај. Играчи могу да истражују различите стилове игре, прелећу веће даљине и стално побољшавају свој учинак.',
        'Игра доноси шарене визуале, глатке анимације и кратке, поновљиве сесије које је чине савршеном за брзо играње било када и било где.',
        'Без обзира на то да ли волиш класичне аркадне механике или изазове у endless runner стилу, The Birds пружа лагано и заразно искуство изграђено око чистог гејмплеја.',
      ],
      category: 'Аркадна',
      platforms: ['Android'],
      tags: ['Лежерна игра', 'Аркадна'],
    },
    'bank-escape': {
      name: 'Bank Escape',
      summary:
        'Побегни из банке са новцем, избегни хватање и тестирај своје рефлексе у брзој аркадној акционој игри створеној за кратке и заразне сесије.',
      longDescription: [
        'Bank Escape је брза аркадна акциона игра у којој је твоја мисија једноставна: узми новац, побегни из банке и избегни да будеш ухваћен. Свака партија тестира твоје рефлексе и осећај за тајминг док покушаваш да преживиш што дуже и освојиш најбољи резултат.',
        'Захваљујући једноставним контролама и тренутној акцији, игру је лако започети, али је све теже савладати је. Како притисак расте, мораћеш да реагујеш брзо, останеш фокусиран и правиш паметне покрете како би наставио бекство.',
        'Гејмплеј је направљен за играче који воле игре рефлекса, јурњење високог резултата и кратке, али интензивне сесије. Сваки покушај ти даје нову прилику да сакупиш више новца, побољшаш своју игру и обориш претходне резултате.',
        'Са темом инспирисаном пљачком, приступачним механикама и брзим аркадним ритмом, Bank Escape пружа лагано, али веома репетитивно и забавно искуство за лежерне играче и љубитеље изазова заснованих на рефлексима.',
        'Било да тражиш једноставну офлајн аркадну игру за кратку паузу или заразан акциони изазов коме ћеш се враћати изнова, Bank Escape нуди забавну петљу бекства фокусирану на брзину, кретање и преживљавање.',
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
        'ZigZag Ski је брза аркадна акциона игра у којој су прецизност и тајминг све. Води свог скијаша низ кривудаву планинску стазу, прави оштре заокрете и избегавај препреке док се брзина постепено повећава.',
        'Гејмплеј је заснован на једноставним контролама на додир — промени смер у правом тренутку да останеш на стази и преживиш што дуже. Свака партија постаје све интензивнија и тестира твоје рефлексе и концентрацију на сваком скретању.',
        'Док се спушташ кроз снежна окружења, мораћеш да пролазиш кроз уске цик-цак деонице, избегаваш баријере и успут сакупљаш предмете како би побољшао резултат. Изазов је у томе да задржиш контролу док брзо реагујеш на промене терена.',
        'Осмишљен за брзе и поновљиве сесије, ZigZag Ski је лак за учење, али тежак за савладавање. Било да желиш да обориш свој рекорд или само уживаш у брзој аркадној акцији, свака партија нуди нову прилику за напредак.',
        'Са чистим визуалима, глатким контролама и заразним механикама, ZigZag Ski доноси лагано акционо искуство савршено за играче који воле изазове засноване на рефлексима и бескрајне петље играња.',
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
        'Kiss The Boss је необична casual аркадна игра која канцеларијски хумор претвара у брзи изазов рефлекса. Твој циљ је једноставан — пољуби шефа што брже и што ефикасније како би задржао посао и напредовао на лествици успеха.',
        'Заснована на јединственом и комичном концепту, игра тера играче да брзо реагују, добро темпирају своје акције и побољшавају учинак из покушаја у покушај. Што боље и брже играш, то су ти веће шансе за успех.',
        'Инспирисана преувеличаним сценаријима са радног места, Kiss The Boss комбинује сатиру, хумор и једноставне механике у искуство које је и забавно и лако за схватити.',
        'Контроле су минималне и приступачне, што игру чини савршеном за кратке сесије, а истовремено јој даје такмичарски дух кроз побољшавање резултата и високу поновљивост.',
        'Ако тражиш лагану аркадну игру или нешто другачије од уобичајених механика, Kiss The Boss доноси забаван и неконвенционалан loop играња осмишљен за брзу забаву.',
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
        'Santa’s Lost Presents је празнична аркадна акциона игра у којој је твоја мисија да помогнеш Деда Мразу да поврати све поклоне које је случајно изгубио на путу са Северног пола. Пошто је Божић у питању, сваки поклон је важан.',
        'Док Деда Мраз путује кроз различита окружења, играчи морају да сакупљају разбацане поклоне и савладавају препреке како би свако дете добило свој поклон на време. Гејмплеј је једноставан, брз и усмерен на кретање, тајминг и пажњу.',
        'Инспирисана класичним аркадним механикама, игра изазива играче да побољшају своје рефлексе док пролазе кроз све тежe ситуације. Свака партија доноси нове прилике да сакупиш више поклона и поправиш резултат.',
        'Са веселом празничном атмосфером и приступачним контролама, Santa’s Lost Presents је савршена за кратке сесије током празничне сезоне или кад год пожелиш лагано и занимљиво искуство.',
        'Без обзира на то да ли волиш игре са божићном темом или класичне аркадне акционе изазове, Santa’s Lost Presents нуди забаван и поновљив loop играња заснован на сакупљању, избегавању и спасавању празничног духа.',
      ],
      category: 'Аркадна',
      platforms: ['Android'],
      tags: ['Лежерна игра', 'Аркадна', 'Акција'],
    },
  },

  hr: {
    'cowboy-duel': {
      name: 'Cowboy Duel',
      summary:
        'Testiraj svoje reflekse u brzim kaubojskim dvobojima gdje je vrijeme presudno.',
      longDescription: [
        'Cowboy Duel je brza igra reakcije smještena na Divljem zapadu, u kojoj je tvoj cilj jednostavan: povuci oružje brže od protivnika i pobijedi u dvoboju. Svaki meč testira tvoj timing, fokus i živce.',
        'Uđi u čizme revolveraša i suoči se s protivnicima u intenzivnim dvobojima jedan na jedan. Pričekaj savršen trenutak, reagiraj odmah i pucaj prije svog suparnika. Ali pazi — ako zapucaš prerano, gubiš.',
        'Gameplay je lako razumjeti, ali teško svladati, što igru čini savršenom za kratke sesije, a istodobno dovoljno izazovnom za sve koji žele poboljšati brzinu reakcije.',
        'Sa svojim jednostavnim kontrolama i zanimljivim mehanikama, Cowboy Duel te stalno vraća da srušiš svoja najbolja vremena i izoštriš reflekse. Svaki dvoboj djeluje napeto i nagrađujuće, posebno kada pobjeda ovisi o djeliću sekunde.',
        'Bilo da želiš kratko ubiti vrijeme ili se natjecati s prijateljima za najbrže potezanje, Cowboy Duel donosi zabavno i zarazno iskustvo inspirirano klasičnim vestern obračunima.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Refleksi', 'Arkada', 'Vrijeme reakcije', 'Western', 'Casual'],
    },
    'water-reminder': {
      name: 'Water Reminder',
      summary:
        'Pratite unos vode i razvijte zdrave navike uz pametne podsjetnike.',
      longDescription: [
        'Water Reminder je jednostavna i učinkovita aplikacija za praćenje hidratacije osmišljena kako bi ti pomogla izgraditi dosljednu dnevnu naviku pijenja vode. Uz gumbe za brzi unos i intuitivno sučelje, bilježenje unosa vode traje samo sekundu.',
        'Ostani motiviran uz praćenje dnevnog niza koje pokazuje koliko si dana zaredom dosegnuo svoj cilj hidratacije. Aplikacija potiče dosljednost i pomaže ti pretvoriti zdravu hidrataciju u dugoročnu rutinu.',
        'Dobij jasan pregled svog napretka uz tjednu statistiku, detaljnu povijest i uvide kao što su prosječna potrošnja vode i tvoj najbolji dan. To ti omogućuje da bolje razumiješ svoje navike i s vremenom ih poboljšaš.',
        'Prilagodljivi podsjetnici pomažu ti da ostaneš na pravom putu tijekom cijelog dana. Postavi vlastiti raspored i više nikada ne zaboravi popiti vodu, bilo da si na poslu, kod kuće ili u pokretu.',
        'Dizajniran za jednostavnost i učinkovitost, Water Reminder savršen je za svakoga tko želi poboljšati zdravlje, povećati razinu energije i održavati pravilnu hidrataciju uz minimalan trud.',
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
        'Big Ben (Zvona) donosi legendarni zvuk najpoznatijeg londonskog tornja sa satom izravno na vaš Android uređaj. Bilo da volite klasična zvona, trebate jedinstvenu melodiju ili jednostavno uživate u ambijentalnim zvukovima mjerenja vremena, ova aplikacija isporučuje autentičan zvuk Big Bena bilo kada i bilo gdje.',
        'Dizajnirana za jednostavnost i pristupačnost, aplikacija vam omogućuje reprodukciju visokokvalitetnih zvona na zahtjev, što je čini savršenom za opuštanje, nostalgiju ili dodavanje daška britanskog šarma vašem danu. Zahvaljujući laganim performansama i offline radu, u zvuku Big Bena možete uživati bez internetske veze.',
        'Idealna za ljubitelje tradicionalnih zvukova sata, londonskih znamenitosti i minimalističkih audio aplikacija, Big Ben (Zvona) nudi jednostavno iskustvo usmjereno isključivo na ono što je najvažnije — prepoznatljiv zvuk zvona.',
        'Koristite je kao pozadinski ambijent, podsjetnik na putovanja ili čak kao kreativnu alternativu klasičnoj melodiji zvona. Kod kuće, na poslu ili u pokretu, bezvremensko zvono Big Bena uvijek vam je nadohvat ruke.',
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
        'Gastarbajter je narativna casual igra koja prati Djuru na njegovu putu prema boljem životu u Europi. Počevši od skromnih početaka, tvoj je cilj pomoći mu naučiti novi jezik, prikupiti sve potrebne dokumente i uspješno se pripremiti za život u inozemstvu.',
        'Inspirirana stvarnim iskustvima ljudi koji odlaze raditi u inozemstvo, igra spaja humor, kulturne reference i lagane izazove u jedinstveno igraće iskustvo. Svaki korak tog puta odražava česte prepreke pri preseljenju — od papirologije i birokracije do komunikacijskih barijera.',
        'Igrači napreduju izvršavanjem zadataka, otključavanjem prekretnica i vođenjem Djure prema njegovu konačnom cilju: postati uspješan gastarbajter. Gameplay je jednostavan, pristupačan i osmišljen za kratke sesije, što ga čini idealnim za casual igrače.',
        'Bilo da ti je ideja rada u inozemstvu već poznata ili je otkrivaš prvi put, Gastarbajter nudi blisku i zabavnu perspektivu o migraciji, ambiciji i svakodnevnim borbama.',
        'Sa svojim minimalističkim dizajnom i humorističnim tonom, igra pruža lagano, ali smisleno iskustvo koje se može povezati s igračima diljem Europe i šire.',
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
        'The Birds je brza arkadna igra letenja u kojoj su timing, preciznost i brzi refleksi ključ opstanka. Dodirni za mahanje krilima, vodi svoju pticu kroz uske prolaze i izbjegavaj prepreke dok pokušavaš postići što veći rezultat.',
        'Raspoređena kroz više faza, igra izaziva igrače da napreduju kroz različite svjetove dok svladavaju jednostavne kontrole na jedan dodir. Svaka vožnja testira fokus i ritam, pa je igru lako igrati, ali teško potpuno savladati.',
        'Sa sedam jedinstvenih ptica i više sposobnosti za otključavanje, The Birds unosi raznolikost u svaki pokušaj. Igrači mogu istraživati različite stilove igre, letjeti dalje i stalno poboljšavati svoj učinak.',
        'Igra donosi šarene vizuale, glatke animacije i kratke, ponovno igrive sesije koje je čine savršenom za brzo igranje bilo kada i bilo gdje.',
        'Bez obzira voliš li klasične arkadne mehanike ili izazove u endless runner stilu, The Birds pruža lagano i zarazno iskustvo izgrađeno oko čistog gameplaya.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade'],
    },
    'bank-escape': {
      name: 'Bank Escape',
      summary:
        'Pobjegni iz banke s novcem, izbjegni da te uhvate i testiraj svoje reflekse u brzoj arkadnoj akcijskoj igri stvorenoj za kratke i zarazne sesije.',
      longDescription: [
        'Bank Escape je brza arkadna akcijska igra u kojoj je tvoja misija jednostavna: uzmi novac, pobjegni iz banke i izbjegni da te uhvate. Svaka partija testira tvoje reflekse i osjećaj za timing dok pokušavaš preživjeti što dulje i ostvariti najbolji rezultat.',
        'Zahvaljujući jednostavnim kontrolama i trenutnoj akciji, igru je lako započeti, ali ju je sve teže savladati. Kako pritisak raste, morat ćeš reagirati brzo, ostati fokusiran i donositi pametne poteze kako bi nastavio bijeg.',
        'Gameplay je osmišljen za igrače koji vole igre refleksa, lov na visoke rezultate i kratke, ali intenzivne sesije. Svaki pokušaj daje ti novu priliku da skupiš više novca, poboljšaš svoju izvedbu i nadmašiš prethodne rezultate.',
        'Sa svojom temom inspiriranom pljačkom, pristupačnim mehanikama i brzim arkadnim ritmom, Bank Escape donosi lagano, ali vrlo ponovno igrivo iskustvo za casual igrače i ljubitelje izazova temeljenih na refleksima.',
        'Bilo da tražiš jednostavnu offline arkadnu igru za kratku pauzu ili zarazan akcijski izazov kojem ćeš se vraćati iznova, Bank Escape nudi zabavnu petlju bijega usmjerenu na brzinu, kretanje i preživljavanje.',
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
        'ZigZag Ski je brza arkadna akcijska igra u kojoj su preciznost i timing sve. Vodi svog skijaša niz zavojitu planinsku stazu, radi oštre zavoje i izbjegavaj prepreke dok se brzina postupno povećava.',
        'Gameplay se temelji na jednostavnim kontrolama na dodir — promijeni smjer u pravom trenutku kako bi ostao na stazi i preživio što duže. Svaka vožnja postaje sve intenzivnija i testira tvoje reflekse i koncentraciju na svakom zavoju.',
        'Dok se spuštaš kroz snježna okruženja, morat ćeš prolaziti kroz uske cik-cak dionice, izbjegavati barijere i usput skupljati predmete kako bi poboljšao svoje rezultate. Izazov je zadržati kontrolu dok brzo reagiraš na promjene terena.',
        'Osmišljen za brze i ponovno igrive sesije, ZigZag Ski je lagan za naučiti, ali težak za svladati. Bilo da želiš srušiti svoj rekord ili jednostavno uživati u brzoj arkadnoj akciji, svaka vožnja nudi novu priliku za napredak.',
        'Uz čiste vizuale, glatke kontrole i zarazne mehanike, ZigZag Ski donosi lagano akcijsko iskustvo savršeno za igrače koji vole izazove temeljene na refleksima i beskonačne petlje igranja.',
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
        'Kiss The Boss je neobična casual arkadna igra koja uredski humor pretvara u brzi izazov refleksa. Tvoj cilj je jednostavan — poljubi šefa što brže i učinkovitije kako bi zadržao posao i napredovao na ljestvici uspjeha.',
        'Izgrađena oko jedinstvenog i komičnog koncepta, igra izaziva igrače da brzo reagiraju, dobro tempiraju svoje poteze i poboljšavaju izvedbu iz pokušaja u pokušaj. Što si bolji i brži, veće su ti šanse za uspjeh.',
        'Inspirirana pretjeranim scenarijima s radnog mjesta, Kiss The Boss spaja satiru, humor i jednostavne mehanike u iskustvo koje je istovremeno zabavno i lako za razumjeti.',
        'Kontrole su minimalne i pristupačne, što je čini savršenom za kratke sesije igranja, a istodobno zadržava natjecateljski element kroz poboljšavanje rezultata i visoku ponovno igrivost.',
        'Ako tražiš laganu arkadnu igru ili nešto drukčije od tradicionalnih mehanika, Kiss The Boss donosi zabavnu i nekonvencionalnu gameplay petlju osmišljenu za brzu razonodu.',
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
        'Santa’s Lost Presents je blagdanska arkadna akcijska igra u kojoj je tvoja misija pomoći Djedu Božićnjaku da vrati sve poklone koje je slučajno izgubio na putu sa Sjevernog pola. Budući da je Božić u pitanju, svaki poklon je važan.',
        'Dok Djed Božićnjak putuje kroz različita okruženja, igrači moraju skupljati rasute poklone i savladavati prepreke kako bi svako dijete na vrijeme dobilo svoj dar. Gameplay je jednostavan, brz i usmjeren na kretanje, timing i pažnju.',
        'Inspirirana klasičnim arkadnim mehanikama, igra izaziva igrače da poboljšaju svoje reflekse dok prolaze kroz sve teže situacije. Svaka vožnja donosi nove prilike za skupljanje više poklona i poboljšavanje rezultata.',
        'Sa svojom veselom blagdanskom atmosferom i pristupačnim kontrolama, Santa’s Lost Presents savršena je za kratke sesije tijekom božićne sezone ili kad god poželiš lagano i zanimljivo iskustvo.',
        'Bez obzira voliš li božićne igre ili klasične arkadne akcijske izazove, Santa’s Lost Presents nudi zabavnu i ponovno igrivu gameplay petlju usredotočenu na skupljanje, izbjegavanje i spašavanje blagdanskog duha.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade', 'Action'],
    },
  },

  nl: {
    'cowboy-duel': {
      name: 'Cowboy Duel',
      summary:
        'Test je reflexen in snelle western-duels waar timing alles is.',
      longDescription: [
        'Cowboy Duel is een snel reactiespel in het wilde westen, waarin je doel eenvoudig is: trek je wapen sneller dan je tegenstander en win het duel. Elke wedstrijd is een test van timing, focus en zenuwen.',
        'Stap in de laarzen van een revolverheld en neem het op tegen tegenstanders in intense één-tegen-één-duels. Wacht op het perfecte moment, reageer direct en schiet voordat je rivaal de kans krijgt. Maar pas op — schiet je te vroeg, dan verlies je.',
        'De gameplay is gemakkelijk te begrijpen maar lastig te beheersen, waardoor het perfect is voor korte speelsessies en tegelijk genoeg uitdaging biedt voor spelers die hun reactiesnelheid willen verbeteren.',
        'Met eenvoudige besturing en boeiende mechanieken laat Cowboy Duel je steeds terugkomen om je beste tijden te verbeteren en je reflexen aan te scherpen. Elk duel voelt spannend en belonend, vooral wanneer de overwinning op een fractie van een seconde aankomt.',
        'Of je nu de tijd wilt doden of met vrienden wilt strijden om de snelste draw, Cowboy Duel biedt een leuke en verslavende ervaring geïnspireerd op klassieke western shoot-outs.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Reflex', 'Arcade', 'Reactietijd', 'Western', 'Casual'],
    },
    'water-reminder': {
      name: 'Water Reminder',
      summary:
        'Houd je dagelijkse waterinname bij, ontwikkel gezonde gewoonten en blijf gehydrateerd met slimme herinneringen.',
      longDescription: [
        'Water Reminder is een eenvoudige en effectieve hydratatie-app die is ontworpen om je te helpen een consequente dagelijkse gewoonte van water drinken op te bouwen. Met snelle toevoegeknoppen en een intuïtieve interface kost het registreren van je waterinname maar een seconde.',
        'Blijf gemotiveerd met dagelijkse streak-tracking die laat zien hoeveel dagen achter elkaar je je hydratatiedoel hebt bereikt. De app stimuleert consistentie en helpt je om gezonde hydratatie om te zetten in een routine voor de lange termijn.',
        'Krijg een duidelijk overzicht van je voortgang met wekelijkse statistieken, gedetailleerde geschiedenis en inzichten zoals je gemiddelde waterverbruik en je beste dag. Daardoor kun je je gewoonten beter begrijpen en ze in de loop van de tijd verbeteren.',
        'Aanpasbare herinneringen helpen je de hele dag op schema te blijven. Stel je eigen planning in en vergeet nooit meer water te drinken, of je nu op het werk bent, thuis of onderweg.',
        'Water Reminder is ontworpen voor eenvoud en efficiëntie en is perfect voor iedereen die de gezondheid wil verbeteren, meer energie wil krijgen en met minimale moeite goed gehydrateerd wil blijven.',
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
        'Big Ben (Klokken) brengt het legendarische geluid van Londens beroemdste klokkentoren rechtstreeks naar je Android-apparaat. Of je nu houdt van klassieke klokslagen, een unieke ringtone zoekt of gewoon geniet van sfeervolle tijdgeluiden, deze app levert authentiek Big Ben-audio wanneer en waar je maar wilt.',
        'De app is ontworpen voor eenvoud en toegankelijkheid en laat je op elk moment klokslagen van hoge kwaliteit afspelen. Daardoor is hij perfect voor ontspanning, nostalgie of om een vleugje Britse charme aan je dag toe te voegen. Dankzij de lichte prestaties en offline functionaliteit kun je van het geluid van Big Ben genieten zonder internetverbinding.',
        'Ideaal voor liefhebbers van traditionele klokgeluiden, Londense bezienswaardigheden en minimalistische audio-apps biedt Big Ben (Klokken) een directe ervaring die volledig draait om wat echt telt — het iconische geluid van de bel.',
        'Gebruik het als achtergrondgeluid, als herinnering aan reizen of zelfs als creatief alternatief voor een ringtone. Of je nu thuis bent, op het werk of onderweg, de tijdloze klank van Big Ben is altijd binnen handbereik.',
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
        'Gastarbajter is een verhalende casual game die Djuro volgt op zijn reis naar een beter leven in Europa. Vanuit een bescheiden begin is het jouw doel om hem te helpen een nieuwe taal te leren, alle benodigde documenten te verzamelen en zich succesvol voor te bereiden op het leven in het buitenland.',
        'Geïnspireerd door echte ervaringen van mensen die voor werk naar het buitenland trekken, combineert de game humor, culturele verwijzingen en lichte uitdagingen tot een unieke spelervaring. Elke stap van de reis weerspiegelt veelvoorkomende obstakels bij verhuizen — van papierwerk en bureaucratie tot communicatiebarrières.',
        'Spelers boeken vooruitgang door taken te voltooien, mijlpalen vrij te spelen en Djuro te begeleiden naar zijn uiteindelijke doel: een succesvolle gastarbajter worden. De gameplay is eenvoudig, toegankelijk en ontworpen voor korte sessies, waardoor hij ideaal is voor casual spelers.',
        'Of je het idee van werken in het buitenland nu al goed kent of er voor het eerst mee kennismaakt, Gastarbajter biedt een herkenbare en onderhoudende blik op migratie, ambitie en alledaagse worstelingen.',
        'Met zijn minimalistische ontwerp en humoristische toon biedt de game een lichte maar betekenisvolle ervaring die spelers uit heel Europa en daarbuiten kan aanspreken.',
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
        'The Birds is een snelle arcade-vlieggame waarin timing, precisie en snelle reflexen de sleutel tot overleven zijn. Tik om met je vleugels te slaan, stuur je vogel door smalle openingen en ontwijk obstakels terwijl je probeert de hoogst mogelijke score te halen.',
        'Verspreid over meerdere fases daagt de game spelers uit om door verschillende werelden te gaan terwijl ze eenvoudige one-touch-besturing onder de knie krijgen. Elke run is een test van focus en ritme, waardoor het gemakkelijk te spelen maar moeilijk te beheersen is.',
        'Met zeven unieke vogels en meerdere vaardigheden om vrij te spelen voegt The Birds variatie toe aan elke poging. Spelers kunnen verschillende speelstijlen ontdekken, verder vliegen en hun prestaties blijven verbeteren.',
        'De game bevat kleurrijke visuals, vloeiende animaties en korte, herhaalbare sessies die hem perfect maken voor snel spelen op elk moment en op elke plek.',
        'Of je nu houdt van klassieke arcade-mechanieken of endless-runner-achtige uitdagingen, The Birds levert een lichte en verslavende ervaring die helemaal draait om pure gameplay.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade'],
    },
    'bank-escape': {
      name: 'Bank Escape',
      summary:
        'Ontsnap uit de bank met het geld, voorkom dat je gepakt wordt en test je reflexen in een snelle arcade-actie-uitdaging voor korte en verslavende speelsessies.',
      longDescription: [
        'Bank Escape is een snelle arcade-actiegame waarin je missie eenvoudig is: pak het geld, ontsnap uit de bank en voorkom dat je wordt gepakt. Elke run stelt je reflexen en timing op de proef terwijl je probeert zo lang mogelijk te overleven en de hoogste score te behalen.',
        'Dankzij de eenvoudige besturing en directe actie is het spel makkelijk om te beginnen, maar steeds moeilijker om echt te beheersen. Naarmate de druk toeneemt, moet je snel reageren, gefocust blijven en slimme bewegingen maken om je ontsnapping vol te houden.',
        'De gameplay is ontworpen voor spelers die houden van reflexgames, scorejagen en korte maar intense sessies. Elke poging geeft je een nieuwe kans om meer geld te verzamelen, je prestaties te verbeteren en je eerdere resultaten te verslaan.',
        'Met zijn op overvallen geïnspireerde thema, toegankelijke mechanics en snelle arcade-tempo biedt Bank Escape een lichte maar zeer herspeelbare ervaring voor casual spelers en fans van reflexgebaseerde uitdagingen.',
        'Of je nu een eenvoudige offline arcadegame zoekt voor een korte pauze of een verslavende actie-uitdaging waar je steeds naar terug wilt keren, Bank Escape biedt een leuke ontsnappingsgameplay die draait om snelheid, beweging en overleving.',
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
        'ZigZag Ski is een snelle arcade-actiegame waarin precisie en timing alles zijn. Leid je skiër over een kronkelend bergpad, maak scherpe bochten en ontwijk obstakels terwijl de snelheid geleidelijk toeneemt.',
        'De gameplay draait om eenvoudige tikbesturing — verander op het juiste moment van richting om op het pad te blijven en zo lang mogelijk te overleven. Elke run wordt intenser en stelt je reflexen en concentratie bij elke bocht op de proef.',
        'Terwijl je door besneeuwde omgevingen afdaalt, moet je smalle zigzagpaden volgen, barrières ontwijken en onderweg items verzamelen om je prestaties te verbeteren. De uitdaging zit in het behouden van controle terwijl je snel reageert op veranderend terrein.',
        'ZigZag Ski is ontworpen voor snelle, herhaalbare sessies en is gemakkelijk te leren maar moeilijk te beheersen. Of je nu je highscore wilt verbeteren of gewoon wilt genieten van snelle arcade-actie, elke run biedt een nieuwe kans om beter te worden.',
        'Met strakke visuals, soepele besturing en verslavende mechanieken levert ZigZag Ski een lichte actie-ervaring die perfect is voor spelers die houden van reflexgebaseerde uitdagingen en eindeloze gameplay-lussen.',
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
        'Kiss The Boss is een eigenzinnige casual arcadegame die kantoorhumor omzet in een snelle reflexuitdaging. Je doel is eenvoudig — kus je baas zo snel en efficiënt mogelijk om je baan te behouden en hogerop te komen.',
        'Gebouwd rond een uniek en komisch concept daagt de game spelers uit om snel te reageren, hun acties goed te timen en hun prestaties bij elke poging te verbeteren. Hoe beter en sneller je speelt, hoe groter je kans op succes.',
        'Geïnspireerd door overdreven werksituaties combineert Kiss The Boss satire, humor en eenvoudige spelmechanieken tot een ervaring die zowel vermakelijk als makkelijk op te pakken is.',
        'De besturing is minimaal en toegankelijk, waardoor het perfect is voor korte speelsessies en tegelijk een competitief randje houdt dankzij scoreverbetering en hoge herspeelbaarheid.',
        'Of je nu op zoek bent naar een luchtige arcadegame of iets anders dan traditionele mechanieken, Kiss The Boss biedt een leuke en ongewone gameplay-loop die is gemaakt voor snelle entertainment.',
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
        'Santa’s Lost Presents is een feestelijke arcade-actiegame waarin het jouw missie is om de Kerstman te helpen alle cadeaus terug te vinden die hij per ongeluk kwijtgeraakt is tijdens zijn reis vanaf de Noordpool. Omdat Kerstmis op het spel staat, telt elk cadeau.',
        'Terwijl de Kerstman door verschillende omgevingen reist, moeten spelers verspreide cadeaus verzamelen en obstakels overwinnen zodat elk kind zijn cadeau op tijd krijgt. De gameplay is eenvoudig, snel en gericht op beweging, timing en oplettendheid.',
        'Geïnspireerd door klassieke arcade-mechanieken daagt de game spelers uit om hun reflexen te verbeteren terwijl ze door steeds moeilijkere situaties navigeren. Elke run biedt nieuwe kansen om meer cadeaus te verzamelen en je score te verhogen.',
        'Met zijn vrolijke kerstsfeer en toegankelijke besturing is Santa’s Lost Presents perfect voor korte speelsessies tijdens de feestdagen of op elk moment waarop je zin hebt in een lichte en boeiende ervaring.',
        'Of je nu van kerstgames houdt of van klassieke arcade-actie-uitdagingen, Santa’s Lost Presents biedt een leuke en herspeelbare gameplay-loop die draait om verzamelen, ontwijken en het redden van de kerstsfeer.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade', 'Action'],
    },
  },

  pl: {
    'cowboy-duel': {
      name: 'Cowboy Duel',
      summary:
        'Sprawdź swój refleks w szybkich pojedynkach na Dzikim Zachodzie.',
      longDescription: [
        'Cowboy Duel to szybka gra refleksowa osadzona na Dzikim Zachodzie, w której cel jest prosty: wyciągnąć broń szybciej niż przeciwnik i wygrać pojedynek. Każda rozgrywka sprawdza wyczucie czasu, koncentrację i nerwy.',
        'Wciel się w rewolwerowca i zmierz się z przeciwnikami w intensywnych pojedynkach jeden na jednego. Poczekaj na idealny moment, zareaguj natychmiast i strzel zanim zrobi to rywal. Ale uważaj — jeśli strzelisz za wcześnie, przegrywasz.',
        'Rozgrywka jest łatwa do zrozumienia, ale trudna do opanowania, dzięki czemu świetnie nadaje się na krótkie sesje, a jednocześnie stanowi prawdziwe wyzwanie dla graczy chcących poprawić szybkość reakcji.',
        'Dzięki prostemu sterowaniu i wciągającym mechanikom Cowboy Duel sprawia, że chce się wracać, by pobijać własne najlepsze czasy i doskonalić refleks. Każdy pojedynek jest napięty i satysfakcjonujący, zwłaszcza gdy zwycięstwo zależy od ułamka sekundy.',
        'Niezależnie od tego, czy chcesz tylko zabić czas, czy rywalizować ze znajomymi o najszybsze dobycie broni, Cowboy Duel oferuje zabawne i uzależniające doświadczenie inspirowane klasycznymi westernowymi strzelaninami.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Refleks', 'Arcade', 'Czas reakcji', 'Western', 'Casual'],
    },
    'water-reminder': {
      name: 'Water Reminder',
      summary:
        'Śledź dzienne spożycie wody, buduj zdrowe nawyki i utrzymuj nawodnienie dzięki przypomnieniom.',
      longDescription: [
        'Water Reminder to prosta i skuteczna aplikacja do śledzenia nawodnienia, zaprojektowana tak, aby pomóc Ci zbudować regularny codzienny nawyk picia wody. Dzięki przyciskom szybkiego dodawania i intuicyjnemu interfejsowi zapisanie wypitej wody zajmuje tylko chwilę.',
        'Pozostań zmotywowany dzięki śledzeniu codziennych serii, które pokazuje, przez ile dni z rzędu udało Ci się osiągnąć cel nawodnienia. Aplikacja wspiera regularność i pomaga zamienić zdrowe nawodnienie w długoterminową rutynę.',
        'Zyskaj jasny obraz swoich postępów dzięki tygodniowym statystykom, szczegółowej historii i informacjom takim jak średnie spożycie wody oraz Twój najlepszy dzień. Pozwala to lepiej zrozumieć własne nawyki i poprawiać je z czasem.',
        'Konfigurowalne przypomnienia pomagają Ci trzymać się planu przez cały dzień. Ustaw własny harmonogram i już nigdy nie zapomnij napić się wody — w pracy, w domu i w drodze.',
        'Zaprojektowana z myślą o prostocie i skuteczności, Water Reminder jest idealna dla każdego, kto chce poprawić zdrowie, zwiększyć poziom energii i utrzymać prawidłowe nawodnienie przy minimalnym wysiłku.',
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
        'Big Ben (Dzwony) przenosi legendarny dźwięk najsłynniejszej londyńskiej wieży zegarowej bezpośrednio na Twoje urządzenie z Androidem. Niezależnie od tego, czy kochasz klasyczne bicie zegara, szukasz wyjątkowego dzwonka, czy po prostu lubisz nastrojowe odgłosy odmierzania czasu, ta aplikacja zapewnia autentyczny dźwięk Big Bena zawsze i wszędzie.',
        'Zaprojektowana z myślą o prostocie i wygodzie, aplikacja pozwala odtwarzać wysokiej jakości dźwięki na żądanie, dzięki czemu świetnie nadaje się do relaksu, nostalgii lub dodania odrobiny brytyjskiego klimatu do codzienności. Dzięki lekkiej pracy i trybowi offline możesz cieszyć się brzmieniem Big Bena bez połączenia z internetem.',
        'Idealna dla miłośników tradycyjnych dźwięków zegarów, londyńskich zabytków i minimalistycznych aplikacji audio, Big Ben (Dzwony) oferuje proste doświadczenie skupione wyłącznie na tym, co najważniejsze — kultowym brzmieniu dzwonu.',
        'Używaj jej jako dźwięku tła, wspomnienia z podróży albo nawet jako kreatywnej alternatywy dla dzwonka telefonu. W domu, w pracy czy w drodze ponadczasowy dźwięk Big Bena jest zawsze pod ręką.',
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
        'Gastarbajter to narracyjna gra casualowa, która śledzi Djuro w jego drodze do lepszego życia w Europie. Zaczynając od skromnych warunków, Twoim celem jest pomóc mu nauczyć się nowego języka, zebrać wszystkie wymagane dokumenty i skutecznie przygotować się do życia za granicą.',
        'Zainspirowana prawdziwymi doświadczeniami osób wyjeżdżających do pracy za granicę, gra łączy humor, odniesienia kulturowe i lekkie wyzwania w wyjątkowe doświadczenie. Każdy etap podróży odzwierciedla typowe przeszkody związane z przeprowadzką — od papierologii i biurokracji po bariery komunikacyjne.',
        'Gracze robią postępy, wykonując zadania, odblokowując kolejne etapy i prowadząc Djuro do jego ostatecznego celu: zostania odnoszącym sukcesy gastarbajterem. Rozgrywka jest prosta, przystępna i zaprojektowana z myślą o krótkich sesjach, dzięki czemu idealnie pasuje do graczy casualowych.',
        'Niezależnie od tego, czy temat pracy za granicą jest Ci dobrze znany, czy dopiero odkrywasz go po raz pierwszy, Gastarbajter oferuje bliskie i zabawne spojrzenie na migrację, ambicję i codzienne zmagania.',
        'Dzięki minimalistycznej oprawie i humorystycznemu tonowi gra zapewnia lekkie, a jednocześnie znaczące doświadczenie, które może trafić do graczy z całej Europy i nie tylko.',
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
        'The Birds to szybka arcade’owa gra o lataniu, w której timing, precyzja i szybki refleks są kluczem do przetrwania. Dotknij, aby machać skrzydłami, prowadź swojego ptaka przez wąskie przejścia i omijaj przeszkody, próbując osiągnąć jak najwyższy wynik.',
        'Podzielona na wiele etapów gra zachęca graczy do przechodzenia przez różne światy przy użyciu prostego sterowania jednym dotknięciem. Każdy bieg to test skupienia i rytmu, dzięki czemu gra jest łatwa do rozpoczęcia, ale trudna do pełnego opanowania.',
        'Dzięki siedmiu unikalnym ptakom i wielu umiejętnościom do odblokowania The Birds wnosi różnorodność do każdej próby. Gracze mogą eksperymentować z różnymi stylami gry, pokonywać większe dystanse i stale poprawiać swoje wyniki.',
        'Gra oferuje kolorową oprawę, płynne animacje oraz krótkie, powtarzalne sesje, które sprawiają, że idealnie nadaje się do szybkiej rozgrywki w dowolnym miejscu i czasie.',
        'Niezależnie od tego, czy lubisz klasyczne mechaniki arcade, czy wyzwania w stylu endless runner, The Birds zapewnia lekkie i wciągające doświadczenie zbudowane wokół czystej rozgrywki.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade'],
    },
    'bank-escape': {
      name: 'Bank Escape',
      summary:
        'Uciekaj z banku z pieniędzmi, unikaj schwytania i sprawdź swój refleks w szybkiej zręcznościowej grze arcade stworzonej do krótkich, wciągających sesji.',
      longDescription: [
        'Bank Escape to szybka zręcznościowa gra arcade, w której twoja misja jest prosta: zgarnij pieniądze, ucieknij z banku i uniknij schwytania. Każda rozgrywka wystawia na próbę twój refleks i wyczucie czasu, gdy próbujesz przetrwać jak najdłużej i zdobyć jak najlepszy wynik.',
        'Dzięki prostemu sterowaniu i natychmiastowej akcji gra jest łatwa do rozpoczęcia, ale coraz trudniejsza do opanowania. Wraz ze wzrostem presji musisz reagować szybko, utrzymać koncentrację i wykonywać mądre ruchy, aby kontynuować ucieczkę.',
        'Rozgrywka została zaprojektowana dla graczy, którzy lubią gry refleksowe, bicie rekordów i krótkie, ale intensywne sesje. Każda próba daje ci nową szansę na zebranie większej ilości pieniędzy, poprawę swoich wyników i pobicie poprzednich osiągnięć.',
        'Dzięki tematyce inspirowanej napadem, przystępnym mechanikom i szybkiemu tempu arcade, Bank Escape oferuje lekkie, ale bardzo regrywalne doświadczenie dla casualowych graczy i fanów wyzwań opartych na refleksie.',
        'Niezależnie od tego, czy szukasz prostej gry arcade offline na krótką przerwę, czy wciągającego wyzwania akcji, do którego będziesz wracać wielokrotnie, Bank Escape zapewnia zabawną pętlę rozgrywki opartą na szybkości, ruchu i przetrwaniu.',
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
        'ZigZag Ski to szybka gra akcji arcade, w której precyzja i timing są wszystkim. Prowadź swojego narciarza w dół krętej górskiej trasy, wykonuj ostre skręty i omijaj przeszkody, gdy prędkość stopniowo rośnie.',
        'Rozgrywka opiera się na prostym sterowaniu dotykiem — zmieniaj kierunek w odpowiednim momencie, aby utrzymać się na trasie i przetrwać jak najdłużej. Każdy kolejny przejazd staje się coraz bardziej intensywny i wystawia na próbę Twoje refleks oraz koncentrację przy każdym zakręcie.',
        'Podczas zjazdu przez śnieżne otoczenie musisz pokonywać wąskie zygzakowate odcinki, unikać barier i zbierać po drodze przedmioty, aby poprawiać swoje wyniki. Wyzwanie polega na utrzymaniu kontroli przy jednoczesnym szybkim reagowaniu na zmieniający się teren.',
        'Zaprojektowana z myślą o szybkich, powtarzalnych sesjach, ZigZag Ski jest łatwa do nauczenia, ale trudna do opanowania. Niezależnie od tego, czy chcesz pobić własny rekord, czy po prostu cieszyć się dynamiczną akcją arcade, każdy przejazd daje nową szansę na poprawę.',
        'Dzięki czystej oprawie, płynnemu sterowaniu i uzależniającym mechanikom ZigZag Ski oferuje lekkie doświadczenie akcji idealne dla graczy, którzy lubią wyzwania oparte na refleksie i nieskończone pętle rozgrywki.',
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
        'Kiss The Boss to nietypowa gra casual arcade, która zamienia biurowy humor w szybkie wyzwanie refleksu. Twój cel jest prosty — pocałować szefa tak szybko i skutecznie, jak to możliwe, aby utrzymać pracę i piąć się wyżej.',
        'Zbudowana wokół wyjątkowego i komicznego pomysłu gra zmusza graczy do szybkiej reakcji, dobrego wyczucia momentu i poprawiania wyników z każdą kolejną próbą. Im lepiej i szybciej grasz, tym większe masz szanse na sukces.',
        'Zainspirowana przesadzonymi sytuacjami z miejsca pracy, Kiss The Boss łączy satyrę, humor i proste mechaniki w doświadczenie, które jest zarówno zabawne, jak i łatwe do zrozumienia.',
        'Sterowanie jest minimalne i przystępne, dzięki czemu gra świetnie sprawdza się w krótkich sesjach, a jednocześnie zachowuje rywalizacyjny charakter dzięki poprawianiu wyników i wysokiej regrywalności.',
        'Jeśli szukasz lekkiej gry arcade albo czegoś innego niż tradycyjne mechaniki, Kiss The Boss oferuje zabawną i nietypową pętlę rozgrywki stworzoną do szybkiej rozrywki.',
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
        'Santa’s Lost Presents to świąteczna gra akcji arcade, w której Twoją misją jest pomóc Świętemu Mikołajowi odzyskać wszystkie prezenty, które przypadkowo zgubił podczas podróży z bieguna północnego. Gdy stawką są święta, każdy prezent ma znaczenie.',
        'Podczas podróży przez różne otoczenia gracze muszą zbierać porozrzucane prezenty i pokonywać przeszkody, aby każde dziecko otrzymało swój podarunek na czas. Rozgrywka jest prosta, szybka i skupiona na ruchu, timingu oraz uważności.',
        'Zainspirowana klasycznymi mechanikami arcade, gra zachęca graczy do poprawiania refleksu podczas pokonywania coraz trudniejszych sytuacji. Każdy bieg przynosi nowe okazje do zebrania większej liczby prezentów i poprawienia wyniku.',
        'Dzięki radosnemu świątecznemu klimatowi i przystępnemu sterowaniu Santa’s Lost Presents idealnie nadaje się do krótkich sesji w okresie świątecznym lub w dowolnym momencie, gdy masz ochotę na lekką i angażującą zabawę.',
        'Niezależnie od tego, czy lubisz gry o tematyce świątecznej, czy klasyczne wyzwania arcade akcji, Santa’s Lost Presents oferuje zabawną i regrywalną pętlę rozgrywki skupioną na zbieraniu, unikaniu i ratowaniu świątecznego ducha.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade', 'Action'],
    },
  },

  ro: {
    'cowboy-duel': {
      name: 'Cowboy Duel',
      summary:
        'Testează-ți reflexele în dueluri rapide din vestul sălbatic.',
      longDescription: [
        'Cowboy Duel este un joc de reacție rapidă plasat în vestul sălbatic, unde obiectivul tău este simplu: scoate arma mai repede decât adversarul și câștigă duelul. Fiecare confruntare îți testează sincronizarea, concentrarea și stăpânirea de sine.',
        'Intră în pielea unui pistolar și înfruntă adversari în dueluri intense unu la unu. Așteaptă momentul perfect, reacționează instant și trage înaintea rivalului tău. Dar ai grijă — dacă tragi prea devreme, pierzi.',
        'Gameplay-ul este ușor de înțeles, dar greu de stăpânit, ceea ce îl face perfect pentru sesiuni scurte și, în același timp, suficient de provocator pentru jucătorii care vor să își îmbunătățească viteza de reacție.',
        'Cu controale simple și mecanici captivante, Cowboy Duel te face să revii mereu pentru a-ți bate cele mai bune timpuri și pentru a-ți ascuți reflexele. Fiecare duel este tensionat și satisfăcător, mai ales când victoria se decide într-o fracțiune de secundă.',
        'Fie că vrei doar să treacă timpul sau să concurezi cu prietenii pentru cel mai rapid draw, Cowboy Duel oferă o experiență distractivă și captivantă inspirată de confruntările western clasice.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Reflexe', 'Arcade', 'Timp de reacție', 'Western', 'Casual'],
    },
    'water-reminder': {
      name: 'Water Reminder',
      summary:
        'Urmărește consumul zilnic de apă, creează obiceiuri sănătoase și rămâi hidratat.',
      longDescription: [
        'Water Reminder este o aplicație simplă și eficientă de monitorizare a hidratării, creată pentru a te ajuta să îți formezi un obicei zilnic constant de a bea apă. Cu butoane de adăugare rapidă și o interfață intuitivă, înregistrarea consumului de apă durează doar o clipă.',
        'Rămâi motivat cu urmărirea seriilor zilnice, care îți arată câte zile la rând ți-ai atins obiectivul de hidratare. Aplicația încurajează consecvența și te ajută să transformi hidratarea sănătoasă într-o rutină pe termen lung.',
        'Obține o imagine clară a progresului tău prin statistici săptămânale, istoric detaliat și informații precum consumul mediu de apă și ziua în care ai avut cea mai bună performanță. Astfel, îți poți înțelege mai bine obiceiurile și le poți îmbunătăți în timp.',
        'Mementourile personalizabile te ajută să rămâi pe drumul cel bun pe parcursul întregii zile. Setează-ți propriul program și nu mai uita să bei apă, fie că ești la muncă, acasă sau în deplasare.',
        'Creată pentru simplitate și eficiență, Water Reminder este perfectă pentru oricine vrea să își îmbunătățească sănătatea, să își crească nivelul de energie și să mențină o hidratare corectă cu efort minim.',
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
        'Big Ben (Clopote) aduce sunetul legendar al celui mai faimos turn cu ceas din Londra direct pe dispozitivul tău Android. Fie că îți plac clopotele clasice, ai nevoie de un ton de apel unic sau pur și simplu te bucuri de sunete ambientale care marchează timpul, această aplicație oferă autenticul audio Big Ben oricând și oriunde.',
        'Concepută pentru simplitate și accesibilitate, aplicația îți permite să redai la cerere clopote de înaltă calitate, fiind perfectă pentru relaxare, nostalgie sau pentru a adăuga o notă britanică zilei tale. Datorită performanței ușoare și funcționării offline, te poți bucura de sunetul Big Ben fără conexiune la internet.',
        'Ideală pentru fanii sunetelor tradiționale de ceas, ai reperelor londoneze și ai aplicațiilor audio minimaliste, Big Ben (Clopote) oferă o experiență directă concentrată doar pe ceea ce contează cu adevărat — sunetul emblematic al clopotului.',
        'Folosește-o ca ambianță de fundal, ca amintire din călătorii sau chiar ca alternativă creativă la tonul de apel. Acasă, la birou sau în mișcare, bătaia atemporală a lui Big Ben este mereu la îndemână.',
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
        'Gastarbajter este un joc casual narativ care îl urmărește pe Djuro în drumul său spre o viață mai bună în Europa. Pornind din condiții modeste, obiectivul tău este să-l ajuți să învețe o limbă nouă, să strângă toate documentele necesare și să se pregătească cu succes pentru viața în străinătate.',
        'Inspirat din experiențele reale ale celor care pleacă la muncă în alte țări, jocul combină umor, referințe culturale și provocări ușoare într-o experiență unică. Fiecare pas al călătoriei reflectă obstacole obișnuite ale relocării — de la hârtii și birocrație până la bariere de comunicare.',
        'Jucătorii avansează completând sarcini, deblocând etape și ghidându-l pe Djuro spre obiectivul final: să devină un gastarbajter de succes. Gameplay-ul este simplu, accesibil și gândit pentru sesiuni scurte, ceea ce îl face ideal pentru jucătorii casual.',
        'Fie că ești familiarizat cu ideea de a lucra în străinătate sau o descoperi pentru prima dată, Gastarbajter oferă o perspectivă apropiată și amuzantă asupra migrației, ambiției și dificultăților de zi cu zi.',
        'Cu designul său minimalist și tonul său plin de umor, jocul oferă o experiență ușoară, dar cu sens, care poate rezona cu jucători din toată Europa și nu numai.',
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
        'The Birds este un joc arcade de zbor în ritm rapid, unde timingul, precizia și reflexele rapide sunt cheia supraviețuirii. Atinge pentru a bate din aripi, ghidează-ți pasărea prin spații înguste și evită obstacolele în timp ce încerci să obții cel mai mare scor posibil.',
        'Structurat pe mai multe etape, jocul îi provoacă pe jucători să avanseze prin lumi diferite în timp ce stăpânesc controale simple, cu o singură atingere. Fiecare rundă este un test de concentrare și ritm, ceea ce îl face ușor de jucat, dar greu de stăpânit complet.',
        'Cu șapte păsări unice și mai multe abilități de deblocat, The Birds adaugă varietate fiecărei încercări. Jucătorii pot explora stiluri diferite de joc, pot zbura mai departe și își pot îmbunătăți constant performanțele.',
        'Jocul oferă imagini colorate, animații fluide și sesiuni scurte, rejucabile, ceea ce îl face perfect pentru partide rapide oricând și oriunde.',
        'Fie că îți plac mecanicile arcade clasice sau provocările de tip endless runner, The Birds oferă o experiență ușoară și captivantă construită în jurul gameplay-ului pur.',
      ],
      category: 'Arcade',
      platforms: ['Android'],
      tags: ['Casual Game', 'Arcade'],
    },
    'bank-escape': {
      name: 'Bank Escape',
      summary:
        'Evadă din bancă cu banii, evită să fii prins și pune-ți reflexele la încercare într-o provocare arcade de acțiune rapidă, creată pentru sesiuni scurte și captivante.',
      longDescription: [
        'Bank Escape este un joc arcade de acțiune în ritm rapid în care misiunea ta este simplă: ia banii, evadează din bancă și evită să fii prins. Fiecare rundă îți testează reflexele și sincronizarea în timp ce încerci să supraviețuiești cât mai mult și să obții cel mai bun scor.',
        'Datorită controalelor simple și acțiunii imediate, jocul este ușor de început, dar din ce în ce mai greu de stăpânit. Pe măsură ce presiunea crește, va trebui să reacționezi rapid, să rămâi concentrat și să faci mișcări inteligente pentru a-ți continua evadarea.',
        'Gameplay-ul este conceput pentru jucătorii care se bucură de jocuri bazate pe reflexe, de vânătoarea de scoruri mari și de sesiuni scurte, dar intense. Fiecare încercare îți oferă o nouă oportunitate de a colecta mai mulți bani, de a-ți îmbunătăți performanța și de a-ți depăși rezultatele anterioare.',
        'Cu o temă inspirată de jafuri, mecanici accesibile și un ritm arcade alert, Bank Escape oferă o experiență ușoară, dar foarte rejucabilă, pentru jucătorii casual și pentru fanii provocărilor bazate pe reflexe.',
        'Fie că vrei un joc arcade offline simplu pentru o pauză scurtă sau o provocare de acțiune captivantă la care să revii iar și iar, Bank Escape oferă o buclă de gameplay distractivă, axată pe viteză, mișcare și supraviețuire.',
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
        'ZigZag Ski este un joc arcade de acțiune în ritm rapid, în care precizia și sincronizarea sunt totul. Ghidează-ți schiorul pe un traseu montan sinuos, fă viraje strânse și evită obstacolele pe măsură ce viteza crește treptat.',
        'Gameplay-ul este construit în jurul unor controale simple prin atingere — schimbă direcția la momentul potrivit pentru a rămâne pe traseu și a supraviețui cât mai mult posibil. Fiecare rundă devine mai intensă și îți testează reflexele și concentrarea la fiecare cotitură.',
        'Pe măsură ce cobori prin medii înzăpezite, va trebui să navighezi pe trasee înguste în zigzag, să eviți barierele și să colectezi obiecte pe drum pentru a-ți îmbunătăți performanța. Provocarea constă în a păstra controlul în timp ce reacționezi rapid la schimbările de teren.',
        'Conceput pentru sesiuni rapide și rejucabile, ZigZag Ski este ușor de învățat, dar greu de stăpânit. Fie că vrei să îți depășești recordul sau doar să te bucuri de acțiune arcade rapidă, fiecare rundă oferă o nouă șansă de a progresa.',
        'Cu imagini curate, controale fluide și mecanici captivante, ZigZag Ski oferă o experiență de acțiune ușoară, perfectă pentru jucătorii care iubesc provocările bazate pe reflexe și buclele de gameplay fără sfârșit.',
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
        'Kiss The Boss este un joc casual arcade neobișnuit care transformă umorul de birou într-o provocare rapidă de reflexe. Obiectivul tău este simplu — să îți săruți șeful cât mai repede și mai eficient pentru a-ți păstra locul de muncă și a urca în ierarhie.',
        'Construit în jurul unui concept unic și comic, jocul îi provoacă pe jucători să reacționeze repede, să își cronometreze bine acțiunile și să își îmbunătățească performanța la fiecare încercare. Cu cât joci mai bine și mai rapid, cu atât șansele de succes sunt mai mari.',
        'Inspirat de scenarii exagerate din mediul de lucru, Kiss The Boss combină satira, umorul și mecanici simple într-o experiență care este în același timp distractivă și ușor de înțeles.',
        'Controalele sunt minimale și accesibile, ceea ce îl face perfect pentru sesiuni scurte de joc, păstrând în același timp o latură competitivă prin îmbunătățirea scorului și rejucabilitate.',
        'Dacă vrei un joc arcade relaxat sau ceva diferit de mecanicile tradiționale, Kiss The Boss oferă o buclă de gameplay distractivă și neconvențională, concepută pentru divertisment rapid.',
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
        'Santa’s Lost Presents este un joc arcade de acțiune festiv în care misiunea ta este să-l ajuți pe Moș Crăciun să recupereze toate cadourile pe care le-a pierdut accidental în călătoria sa de la Polul Nord. Cum Crăciunul este în joc, fiecare cadou contează.',
        'În timp ce Moș Crăciun călătorește prin medii diferite, jucătorii trebuie să colecteze cadourile împrăștiate și să depășească obstacolele pentru ca fiecare copil să își primească darul la timp. Gameplay-ul este simplu, rapid și concentrat pe mișcare, timing și atenție.',
        'Inspirat de mecanicile arcade clasice, jocul îi provoacă pe jucători să își îmbunătățească reflexele în timp ce trec prin situații din ce în ce mai dificile. Fiecare rundă aduce noi oportunități de a strânge mai multe cadouri și de a îmbunătăți scorul.',
        'Cu tema sa veselă de sărbătoare și controale accesibile, Santa’s Lost Presents este perfect pentru sesiuni scurte în perioada Crăciunului sau oricând îți dorești o experiență ușoară și captivantă.',
        'Fie că îți plac jocurile cu tematică de Crăciun sau provocările clasice de acțiune arcade, Santa’s Lost Presents oferă o buclă de gameplay distractivă și rejucabilă centrată pe colectare, evitare și salvarea spiritului sărbătorilor.',
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