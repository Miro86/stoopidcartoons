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
    slug: 'intermittent-fasting',
    kind: 'app',
    featured: true,
    accent: 'blue',
    icon: 'apps/icons/IntermittentFasting.png',
    googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.stoopidcartoons.intermittentfasting'
  },
  {
    slug: 'hiit-timer',
    kind: 'app',
    featured: true,
    accent: 'red',
    icon: 'apps/icons/HIITTimer.png',
    googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.stoopidcartoons.hiittimer'
  },
  {
    slug: 'habit-tracker',
    kind: 'app',
    featured: true,
    accent: 'orange',
    icon: 'apps/icons/HabitTracker.png',
    googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.stoopidcartoons.habittracker',
  },
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
] as const satisfies readonly ReleaseBase[];

type ReleaseSlug = (typeof releaseBases)[number]['slug'];

const releaseTranslations: Record<Locale, Record<ReleaseSlug, ReleaseTranslation>> = {
  en: {
    'intermittent-fasting': {
      name: 'Intermittent Fasting',
      summary:
        'Build better fasting habits with Intermittent Fasting, a simple fasting tracker with plans, reminders, a journal, and clear progress insights.',
      longDescription: [
        'Intermittent Fasting is a simple and modern fasting tracker app built to help you stay consistent, follow a routine, and better understand your progress. Whether you are starting with 16:8, exploring 18:6, trying 20:4, or following OMAD, Intermittent Fasting gives you a clear and easy way to manage your fasting schedule.',
        'Start a fast in seconds and track every active session with a clean live countdown timer. You can finish and save each fast when you are done, review your fasting history later, and keep your routine organized without unnecessary complexity. Intermittent Fasting is designed to make daily fasting feel structured, focused, and easy to maintain.',
        'Choose from popular intermittent fasting plans or create a schedule that matches your lifestyle. The app helps you build a rhythm that works for weight management, consistency, and habit building, while keeping the experience simple and flexible for everyday use.',
        'Stay motivated with useful fasting insights such as your current streak, longest fast, weekly fasting hours, and saved journal entries. Intermittent Fasting gives you a clear overview of your fasting journey so you can see what is working, stay accountable, and keep moving toward your goals.',
        'With smart reminders, language support, and a clean dark design, Intermittent Fasting is a practical Android app for anyone who wants a reliable intermittent fasting timer, fasting journal, and progress tracker in one place.',
      ],
      category: 'Health & Fitness',
      platforms: ['Android'],
      tags: ['Intermittent Fasting', 'Fasting Tracker', 'Fasting Timer', 'Fasting Plans', 'Health & Fitness'],
    },
    'hiit-timer': {
      name: 'HIIT Timer',
      summary:
        'Train smarter with HIIT Timer, a flexible interval timer for custom workouts, quick starts, workout history, reminders, and full session control.',
      longDescription: [
        'HIIT Timer is a clean and flexible interval timer app built for HIIT workouts, circuit training, cardio sessions, home workouts, and custom fitness routines. Whether you want a simple workout timer for fast sessions or a more advanced interval workout builder, HIIT Timer gives you the tools to train with clarity and control.',
        'Build your workout exactly the way you want with warmup, work, rest, and cooldown intervals. Set the number of rounds, organize the order of each interval block, save your workouts, and launch them quickly when it is time to train. HIIT Timer makes it easy to create structured training sessions for daily exercise, interval running, bodyweight workouts, and home fitness.',
        'Stay focused during every workout with a large, easy-to-read timer and a clean training screen designed for fast use. You can quickly start saved workouts, jump back into your last session, and keep track of completed workouts with workout history that helps you stay consistent over time.',
        'Customize the app to match your training style with sound cues, vibration feedback, countdown beeps, dark mode, language options, and keep-screen-on support during workouts. HIIT Timer is designed to reduce distractions and help you stay locked into each interval and transition.',
        'Made for speed, simplicity, and flexibility, HIIT Timer is a practical Android workout timer for anyone who wants custom intervals, saved routines, session history, and a better way to manage HIIT training, cardio workouts, and interval exercise.',
      ],
      category: 'Health & Fitness',
      platforms: ['Android'],
      tags: ['HIIT Timer', 'Interval Timer', 'Workout Timer', 'HIIT Workouts', 'Fitness'],
    },
    'habit-tracker': {
      name: 'Habit Tracker',
      summary:
        'Build better routines with Habit Tracker, a flexible habit tracker with reminders, streaks, daily check-ins, and clear progress statistics.',
      longDescription: [
        'Habit Tracker is a simple and flexible habit tracker app for building better daily routines, staying consistent, and reaching personal goals. Whether you want to read more, exercise, drink water, meditate, study, or improve productivity, Habit Tracker helps you turn intentions into habits you can keep.',
        'Create habits that fit your lifestyle with multiple tracking types and flexible schedules. Track habits as done or not done, numeric goals, or minutes-based routines. Set habits for every day, specific days, every X days, or a target number of times per week.',
        'Stay consistent with day by day check-ins, habit reminders, and a clean timeline that makes progress easy to follow. Habit Tracker helps you build streaks, review past days, and stay accountable without making the process complicated.',
        'Understand your progress with detailed habit statistics, including current streak, longest streak, weekly completion, monthly completion, consistency score, total check-ins, a 7 day trend, and a calendar heatmap. These insights help you see what is working and where you can improve.',
        'Designed for speed, clarity, and focus, Habit Tracker gives you an easy way to organize habits by title, description, category, and color. With dark mode, language support, and smart reminders, Habit Tracker is a practical Android app for anyone who wants to build lasting habits and stronger routines.',
      ],
      category: 'Productivity',
      platforms: ['Android'],
      tags: ['Habit Tracker', 'Routines', 'Streaks', 'Reminders', 'Productivity'],
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
  },

  de: {
    'intermittent-fasting': {
      name: 'Intermittent Fasting',
      summary:
        'Baue bessere Fastengewohnheiten auf mit Intermittent Fasting, einer einfachen Fasten-App mit Plänen, Erinnerungen, Journal und klaren Fortschrittswerten.',
      longDescription: [
        'Intermittent Fasting ist eine einfache und moderne Fasten-App, mit der du konsequent bleiben, einer Routine folgen und deinen Fortschritt besser verstehen kannst. Egal ob du mit 16:8 beginnst, 18:6 nutzt, 20:4 ausprobierst oder OMAD verfolgst, Intermittent Fasting gibt dir eine klare und unkomplizierte Möglichkeit, deinen Fastenplan zu organisieren.',
        'Starte dein Fasten in Sekunden und verfolge jede aktive Sitzung mit einem übersichtlichen Live-Countdown. Du kannst jedes Fasten am Ende speichern, später deinen Verlauf ansehen und deine Routine ohne unnötige Komplexität organisiert halten. Intermittent Fasting wurde dafür entwickelt, tägliches Fasten strukturiert, fokussiert und einfach umsetzbar zu machen.',
        'Wähle aus beliebten Intervallfasten-Plänen oder erstelle einen Zeitplan, der zu deinem Alltag passt. Die App hilft dir dabei, einen Rhythmus für Gewichtsmanagement, Beständigkeit und bessere Gewohnheiten aufzubauen – einfach, flexibel und alltagstauglich.',
        'Bleib motiviert mit nützlichen Fasten-Einblicken wie aktueller Serie, längstem Fasten, wöchentlichen Fastenstunden und gespeicherten Journal-Einträgen. Intermittent Fasting gibt dir einen klaren Überblick über deinen Weg, damit du erkennst, was funktioniert, dranbleibst und deine Ziele weiter verfolgst.',
        'Mit smarten Erinnerungen, Sprachunterstützung und einem klaren Dark Design ist Intermittent Fasting eine praktische Android-App für alle, die einen zuverlässigen Intervallfasten-Timer, ein Fasten-Journal und eine Fortschrittsübersicht an einem Ort möchten.',
      ],
      category: 'Gesundheit & Fitness',
      platforms: ['Android'],
      tags: ['Intermittent Fasting', 'Fasten App', 'Fasten Timer', 'Intervallfasten', 'Gesundheit & Fitness'],
    },

    'hiit-timer': {
      name: 'HIIT Timer',
      summary:
        'Trainiere smarter mit HIIT Timer, einem flexiblen Intervalltimer für eigene Workouts, Schnellstarts, Trainingsverlauf und volle Kontrolle.',
      longDescription: [
        'HIIT Timer ist eine klare und flexible Intervalltimer-App für HIIT-Workouts, Zirkeltraining, Cardio-Einheiten, Home-Workouts und individuelle Trainingsroutinen. Egal ob du einen einfachen Workout-Timer für schnelle Sessions oder einen vielseitigen Builder für Intervalltraining suchst – HIIT Timer hilft dir, strukturiert und fokussiert zu trainieren.',
        'Erstelle dein Training genau so, wie du es brauchst – mit Aufwärmen, Belastung, Pause und Cooldown. Lege die Anzahl der Runden fest, ordne die Intervalle in der richtigen Reihenfolge an, speichere deine Workouts und starte sie schnell, wenn es losgeht. HIIT Timer macht es einfach, strukturierte Trainings für Alltag, Intervalllaufen, Bodyweight-Training und Home-Fitness zu planen.',
        'Bleib bei jedem Training konzentriert – mit einem großen, gut lesbaren Timer und einem klaren Trainingsbildschirm für schnelle Bedienung. Du kannst gespeicherte Workouts direkt starten, in deine letzte Session zurückspringen und abgeschlossene Einheiten im Trainingsverlauf verfolgen, um langfristig konsequent zu bleiben.',
        'Passe die App an deinen Trainingsstil an – mit Tonsignalen, Vibration, Countdown-Signalen, Dunkelmodus, Spracheinstellungen und der Option, den Bildschirm während des Trainings aktiv zu halten. HIIT Timer hilft dir, Ablenkungen zu reduzieren und dich auf jedes Intervall und jeden Übergang zu konzentrieren.',
        'HIIT Timer wurde für Tempo, Einfachheit und Flexibilität entwickelt und ist eine praktische Android-App für alle, die eigene Intervalle, gespeicherte Routinen, Trainingsverlauf und eine bessere Lösung für HIIT-Training, Cardio-Workouts und Intervalltraining suchen.',
      ],
      category: 'Gesundheit & Fitness',
      platforms: ['Android'],
      tags: ['HIIT Timer', 'Intervalltimer', 'Workout Timer', 'HIIT Training', 'Fitness'],
    },
    'habit-tracker': {
      name: 'Habit Tracker',
      summary:
        'Baue bessere Routinen mit Habit Tracker auf, einem flexiblen Habit Tracker mit Erinnerungen, Streaks, täglichen Check-ins und klaren Fortschrittsstatistiken.',
      longDescription: [
        'Habit Tracker ist eine einfache und flexible Habit-Tracker-App, mit der du bessere tägliche Routinen aufbauen, konsequent bleiben und persönliche Ziele erreichen kannst. Egal ob du mehr lesen, trainieren, Wasser trinken, meditieren, lernen oder produktiver sein möchtest – Habit Tracker hilft dir dabei, gute Vorsätze in Gewohnheiten zu verwandeln, die du wirklich beibehalten kannst.',
        'Erstelle Gewohnheiten, die zu deinem Alltag passen, mit mehreren Tracking-Typen und flexiblen Zeitplänen. Verfolge Gewohnheiten als erledigt oder nicht erledigt, als numerische Ziele oder als minutenbasierte Routinen. Plane Gewohnheiten für jeden Tag, bestimmte Tage, alle X Tage oder eine Zielanzahl pro Woche.',
        'Bleibe konsequent mit täglichen Check-ins, Habit-Erinnerungen und einer klaren Zeitleiste, die deinen Fortschritt leicht nachvollziehbar macht. Habit Tracker hilft dir dabei, Streaks aufzubauen, vergangene Tage zu überprüfen und verantwortlich dranzubleiben, ohne den Prozess unnötig kompliziert zu machen.',
        'Verstehe deinen Fortschritt mit detaillierten Habit-Statistiken wie aktueller Streak, längster Streak, wöchentlicher Erfüllung, monatlicher Erfüllung, Beständigkeitswert, Gesamtzahl der Check-ins, 7-Tage-Trend und Kalender-Heatmap. Diese Einblicke zeigen dir, was gut funktioniert und wo du dich verbessern kannst.',
        'Habit Tracker wurde für Schnelligkeit, Übersicht und Fokus entwickelt und bietet dir eine einfache Möglichkeit, Gewohnheiten nach Titel, Beschreibung, Kategorie und Farbe zu organisieren. Mit Dark Mode, Sprachunterstützung und smarten Erinnerungen ist Habit Tracker eine praktische Android-App für alle, die dauerhafte Gewohnheiten und stärkere Routinen aufbauen möchten.',
      ],
      category: 'Produktivität',
      platforms: ['Android'],
      tags: ['Habit Tracker', 'Routinen', 'Streaks', 'Erinnerungen', 'Produktivität'],
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
  },

  fr: {
    'intermittent-fasting': {
      name: 'Intermittent Fasting',
      summary:
        'Développez de meilleures habitudes avec Intermittent Fasting, une app de jeûne simple avec plans, rappels, journal et suivi clair des progrès.',
      longDescription: [
        'Intermittent Fasting est une application de jeûne simple et moderne conçue pour vous aider à rester régulier, suivre une routine et mieux comprendre vos progrès. Que vous commenciez avec le 16:8, utilisiez le 18:6, testiez le 20:4 ou suiviez OMAD, Intermittent Fasting vous offre une manière claire et pratique d’organiser votre programme de jeûne.',
        'Lancez un jeûne en quelques secondes et suivez chaque session active avec un compte à rebours en direct, lisible et propre. Vous pouvez terminer et enregistrer chaque jeûne une fois fini, consulter votre historique plus tard et garder votre routine organisée sans complexité inutile. Intermittent Fasting est pensé pour rendre le jeûne quotidien structuré, simple et durable.',
        'Choisissez parmi les plans de jeûne intermittent les plus populaires ou créez un programme adapté à votre mode de vie. L’application vous aide à construire un rythme utile pour la gestion du poids, la régularité et de meilleures habitudes, tout en restant flexible et facile à utiliser au quotidien.',
        'Restez motivé grâce à des informations utiles comme votre série actuelle, votre jeûne le plus long, vos heures de jeûne hebdomadaires et vos entrées enregistrées dans le journal. Intermittent Fasting vous donne une vue d’ensemble claire de votre parcours pour voir ce qui fonctionne et continuer à avancer vers vos objectifs.',
        'Avec des rappels intelligents, la prise en charge des langues et un design sombre épuré, Intermittent Fasting est une application Android pratique pour toute personne recherchant un minuteur de jeûne intermittent, un journal de jeûne et un suivi des progrès dans un seul outil.',
      ],
      category: 'Santé et fitness',
      platforms: ['Android'],
      tags: ['Intermittent Fasting', 'Jeûne intermittent', 'Minuteur de jeûne', 'Suivi du jeûne', 'Santé et fitness'],
    },

    'hiit-timer': {
      name: 'HIIT Timer',
      summary:
        'Entraînez-vous mieux avec HIIT Timer, un minuteur d’intervalles flexible pour séances personnalisées, démarrages rapides et historique.',
      longDescription: [
        'HIIT Timer est une application de minuteur d’intervalles claire et flexible conçue pour les entraînements HIIT, le circuit training, les séances cardio, le sport à la maison et les routines personnalisées. Que vous cherchiez un minuteur simple pour vos séances rapides ou un outil complet pour créer vos intervalles, HIIT Timer vous aide à vous entraîner avec structure et précision.',
        'Créez vos séances comme vous le souhaitez avec des intervalles d’échauffement, d’effort, de repos et de retour au calme. Définissez le nombre de séries, organisez l’ordre des blocs, enregistrez vos entraînements et lancez-les rapidement lorsque vous êtes prêt. HIIT Timer permet de préparer facilement des séances structurées pour le fitness à la maison, le cardio, la course par intervalles et les exercices au poids du corps.',
        'Restez concentré pendant chaque séance grâce à un grand minuteur facile à lire et à un écran d’entraînement conçu pour être rapide à utiliser. Vous pouvez lancer rapidement des séances enregistrées, revenir à votre dernière session et suivre vos entraînements terminés dans l’historique pour garder un bon rythme.',
        'Personnalisez l’application selon votre style d’entraînement avec des signaux sonores, des vibrations, des bips de décompte, le mode sombre, les options de langue et le maintien de l’écran allumé pendant l’entraînement. HIIT Timer réduit les distractions et vous aide à rester attentif à chaque intervalle et transition.',
        'Pensé pour la rapidité, la simplicité et la flexibilité, HIIT Timer est une application Android pratique pour celles et ceux qui veulent des intervalles personnalisés, des routines enregistrées, un historique des séances et une meilleure manière de gérer le HIIT, le cardio et l’entraînement par intervalles.',
      ],
      category: 'Santé et fitness',
      platforms: ['Android'],
      tags: ['HIIT Timer', 'Minuteur intervalle', 'Minuteur entraînement', 'HIIT', 'Fitness'],
    },
    'habit-tracker': {
      name: 'Habit Tracker',
      summary:
        'Créez de meilleures routines avec Habit Tracker, un suivi des habitudes flexible avec rappels, séries, validations quotidiennes et statistiques claires.',
      longDescription: [
        'Habit Tracker est une application simple et flexible de suivi des habitudes pour construire de meilleures routines quotidiennes, rester régulier et atteindre des objectifs personnels. Que vous souhaitiez lire davantage, faire du sport, boire plus d eau, méditer, étudier ou améliorer votre productivité, Habit Tracker vous aide à transformer vos intentions en habitudes durables.',
        'Créez des habitudes adaptées à votre mode de vie grâce à plusieurs types de suivi et à une planification flexible. Suivez vos habitudes comme faites ou non faites, sous forme de valeurs numériques ou de routines basées sur le temps en minutes. Planifiez vos habitudes chaque jour, certains jours, tous les X jours ou un nombre cible de fois par semaine.',
        'Restez constant grâce aux validations quotidiennes, aux rappels et à une chronologie claire qui rend votre progression facile à suivre. Habit Tracker vous aide à construire des séries, revoir les jours passés et garder une vraie régularité sans rendre le processus compliqué.',
        'Analysez vos progrès avec des statistiques détaillées, comme la série actuelle, la meilleure série, la progression hebdomadaire, la progression mensuelle, le score de régularité, le total des validations, la tendance sur 7 jours et la carte de chaleur du calendrier. Ces données vous montrent ce qui fonctionne et les points à améliorer.',
        'Conçu pour être rapide, clair et centré sur l essentiel, Habit Tracker vous permet d organiser facilement chaque habitude par titre, description, catégorie et couleur. Avec le mode sombre, la prise en charge de plusieurs langues et des rappels intelligents, Habit Tracker est une application Android pratique pour créer des habitudes solides et des routines durables.',
      ],
      category: 'Productivité',
      platforms: ['Android'],
      tags: ['Habit Tracker', 'Routines', 'Séries', 'Rappels', 'Productivité'],
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
  },

  it: {
    'intermittent-fasting': {
      name: 'Intermittent Fasting',
      summary:
        'Crea abitudini migliori con Intermittent Fasting, un’app semplice per il digiuno con piani, promemoria, diario e statistiche chiare.',
      longDescription: [
        'Intermittent Fasting è un’app semplice e moderna per il digiuno, pensata per aiutarti a essere costante, seguire una routine e capire meglio i tuoi progressi. Che tu stia iniziando con il 16:8, usando il 18:6, provando il 20:4 o seguendo OMAD, Intermittent Fasting ti offre un modo chiaro e pratico per gestire il tuo programma di digiuno.',
        'Avvia un digiuno in pochi secondi e segui ogni sessione attiva con un conto alla rovescia in tempo reale, pulito e facile da leggere. Puoi terminare e salvare ogni digiuno quando hai finito, rivedere la cronologia in seguito e mantenere la tua routine organizzata senza complicazioni inutili. Intermittent Fasting è progettata per rendere il digiuno quotidiano più semplice, strutturato e sostenibile.',
        'Scegli tra i piani di digiuno intermittente più popolari oppure crea un programma adatto al tuo stile di vita. L’app ti aiuta a costruire un ritmo utile per la gestione del peso, la costanza e la creazione di abitudini migliori, mantenendo tutto flessibile e facile da usare ogni giorno.',
        'Resta motivato con statistiche utili come la serie attuale, il digiuno più lungo, le ore settimanali di digiuno e le voci salvate nel diario. Intermittent Fasting ti offre una panoramica chiara del tuo percorso così puoi capire cosa funziona e continuare verso i tuoi obiettivi.',
        'Con promemoria intelligenti, supporto multilingua e un design scuro pulito, Intermittent Fasting è un’app Android pratica per chi cerca un timer per il digiuno intermittente, un diario del digiuno e un tracker dei progressi in un unico posto.',
      ],
      category: 'Salute e benessere',
      platforms: ['Android'],
      tags: ['Intermittent Fasting', 'Digiuno intermittente', 'Timer digiuno', 'Tracker digiuno', 'Salute e benessere'],
    },
    'hiit-timer': {
      name: 'HIIT Timer',
      summary:
        'Allenati meglio con HIIT Timer, un timer a intervalli flessibile per workout personalizzati, avvio rapido e cronologia.',
      longDescription: [
        'HIIT Timer è un’app timer a intervalli semplice e flessibile pensata per allenamenti HIIT, circuit training, sessioni cardio, workout a casa e routine personalizzate. Che tu voglia un workout timer essenziale per sessioni rapide o uno strumento più completo per costruire allenamenti a intervalli, HIIT Timer ti aiuta ad allenarti con chiarezza e controllo.',
        'Crea il tuo allenamento esattamente come vuoi con intervalli di riscaldamento, lavoro, riposo e defaticamento. Imposta il numero di round, organizza l’ordine dei blocchi, salva i tuoi workout e avviali rapidamente quando è il momento di allenarti. HIIT Timer rende semplice preparare sessioni strutturate per esercizi a casa, corsa a intervalli, cardio e allenamenti a corpo libero.',
        'Resta concentrato durante ogni sessione grazie a un timer grande e facile da leggere e a una schermata di allenamento progettata per essere veloce da usare. Puoi avviare subito gli allenamenti salvati, tornare alla tua ultima sessione e controllare la cronologia dei workout completati per mantenere costanza nel tempo.',
        'Personalizza l’app in base al tuo stile di allenamento con segnali sonori, vibrazione, beep del conto alla rovescia, modalità scura, opzioni lingua e supporto per mantenere lo schermo acceso durante i workout. HIIT Timer è pensato per ridurre le distrazioni e aiutarti a restare focalizzato su ogni intervallo e transizione.',
        'Progettato per velocità, semplicità e flessibilità, HIIT Timer è una pratica app Android per chi vuole intervalli personalizzati, routine salvate, cronologia delle sessioni e un modo migliore per gestire allenamenti HIIT, cardio e interval training.',
      ],
      category: 'Salute e benessere',
      platforms: ['Android'],
      tags: ['HIIT Timer', 'Timer intervalli', 'Workout timer', 'Allenamento HIIT', 'Fitness'],
    },
    'habit-tracker': {
      name: 'Habit Tracker',
      summary:
        'Crea routine migliori con Habit Tracker, una app flessibile per le abitudini con promemoria, serie, check-in giornalieri e statistiche chiare sui progressi.',
      longDescription: [
        'Habit Tracker è una app semplice e flessibile per monitorare le abitudini, costruire routine quotidiane migliori, restare costanti e raggiungere obiettivi personali. Che tu voglia leggere di più, allenarti, bere più acqua, meditare, studiare o migliorare la produttività, Habit Tracker ti aiuta a trasformare le intenzioni in abitudini che puoi davvero mantenere.',
        'Crea abitudini adatte al tuo stile di vita con più tipi di monitoraggio e programmi flessibili. Puoi seguire le abitudini come completate o non completate, come obiettivi numerici oppure come routine basate sui minuti. Imposta abitudini per ogni giorno, giorni specifici, ogni X giorni o un numero target di volte a settimana.',
        'Rimani costante con check-in giornalieri, promemoria per le abitudini e una timeline pulita che rende facile seguire i progressi. Habit Tracker ti aiuta a costruire serie, rivedere i giorni passati e restare responsabile senza rendere tutto complicato.',
        'Comprendi i tuoi progressi con statistiche dettagliate come serie attuale, serie più lunga, completamento settimanale, completamento mensile, punteggio di costanza, totale dei check-in, trend di 7 giorni e heatmap del calendario. Questi dati ti aiutano a capire cosa funziona e dove puoi migliorare.',
        'Progettato per essere veloce, chiaro e focalizzato, Habit Tracker ti offre un modo semplice per organizzare le abitudini per titolo, descrizione, categoria e colore. Con modalità scura, supporto lingua e promemoria intelligenti, Habit Tracker è una pratica app Android per chi vuole costruire abitudini durature e routine più forti.',
      ],
      category: 'Produttività',
      platforms: ['Android'],
      tags: ['Habit Tracker', 'Routine', 'Serie', 'Promemoria', 'Produttività'],
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
  },

  es: {
    'intermittent-fasting': {
      name: 'Intermittent Fasting',
      summary:
        'Crea mejores hábitos con Intermittent Fasting, una app de ayuno simple con planes, recordatorios, diario e informes claros.',
      longDescription: [
        'Intermittent Fasting es una app de ayuno simple y moderna diseñada para ayudarte a ser constante, seguir una rutina y entender mejor tu progreso. Tanto si empiezas con 16:8, sigues 18:6, pruebas 20:4 o haces OMAD, Intermittent Fasting te ofrece una forma clara y práctica de gestionar tu horario de ayuno.',
        'Empieza un ayuno en segundos y sigue cada sesión activa con una cuenta atrás en vivo, limpia y fácil de leer. Puedes terminar y guardar cada ayuno cuando acabes, revisar tu historial más tarde y mantener tu rutina organizada sin complejidad innecesaria. Intermittent Fasting está pensada para que el ayuno diario sea más estructurado, claro y fácil de mantener.',
        'Elige entre los planes de ayuno intermitente más populares o crea un horario que se adapte a tu estilo de vida. La app te ayuda a construir un ritmo útil para el control del peso, la constancia y la creación de mejores hábitos, manteniendo una experiencia flexible y sencilla para el día a día.',
        'Mantente motivado con datos útiles como tu racha actual, tu ayuno más largo, tus horas semanales de ayuno y tus entradas guardadas en el diario. Intermittent Fasting te da una visión clara de tu recorrido para que veas qué funciona y sigas avanzando hacia tus objetivos.',
        'Con recordatorios inteligentes, soporte de idiomas y un diseño oscuro limpio, Intermittent Fasting es una app Android práctica para quien busca un temporizador de ayuno intermitente, un diario de ayuno y un seguimiento del progreso en un solo lugar.',
      ],
      category: 'Salud y bienestar',
      platforms: ['Android'],
      tags: ['Intermittent Fasting', 'Ayuno intermitente', 'Temporizador de ayuno', 'Seguimiento del ayuno', 'Salud y bienestar'],
    },
    'hiit-timer': {
      name: 'HIIT Timer',
      summary:
        'Entrena mejor con HIIT Timer, un temporizador de intervalos flexible para workouts personalizados, inicio rápido e historial.',
      longDescription: [
        'HIIT Timer es una app de temporizador de intervalos limpia y flexible creada para entrenamientos HIIT, circuitos, sesiones de cardio, workouts en casa y rutinas personalizadas. Tanto si buscas un workout timer simple para sesiones rápidas como una herramienta más completa para crear entrenamientos por intervalos, HIIT Timer te ayuda a entrenar con claridad y control.',
        'Crea tu entrenamiento exactamente como quieras con intervalos de calentamiento, trabajo, descanso y vuelta a la calma. Define el número de rondas, organiza el orden de cada bloque, guarda tus workouts y lánzalos rápido cuando toque entrenar. HIIT Timer facilita la creación de sesiones estructuradas para cardio, ejercicios en casa, entrenamiento por intervalos y rutinas de peso corporal.',
        'Mantén la concentración en cada sesión con un temporizador grande y fácil de leer y una pantalla de entrenamiento diseñada para usarse con rapidez. Puedes iniciar rápidamente workouts guardados, volver a tu última sesión y llevar un registro de entrenamientos completados con un historial que te ayuda a mantener la constancia.',
        'Personaliza la app según tu estilo de entrenamiento con señales de sonido, vibración, pitidos de cuenta atrás, modo oscuro, opciones de idioma y soporte para mantener la pantalla activa durante los entrenamientos. HIIT Timer está pensada para reducir distracciones y ayudarte a seguir cada intervalo y cada transición.',
        'Diseñada para ser rápida, simple y flexible, HIIT Timer es una práctica app Android para quienes quieren intervalos personalizados, rutinas guardadas, historial de sesiones y una mejor forma de gestionar entrenamientos HIIT, cardio y ejercicio por intervalos.',
      ],
      category: 'Salud y bienestar',
      platforms: ['Android'],
      tags: ['HIIT Timer', 'Temporizador intervalos', 'Workout timer', 'Entrenamiento HIIT', 'Fitness'],
    },
    'habit-tracker': {
      name: 'Habit Tracker',
      summary:
        'Crea mejores rutinas con Habit Tracker, un rastreador de hábitos flexible con recordatorios, rachas, check-ins diarios y estadísticas claras de progreso.',
      longDescription: [
        'Habit Tracker es una aplicación simple y flexible para seguir hábitos, crear mejores rutinas diarias, mantener la constancia y alcanzar metas personales. Ya sea que quieras leer más, hacer ejercicio, beber agua, meditar, estudiar o mejorar tu productividad, Habit Tracker te ayuda a convertir tus intenciones en hábitos que realmente puedes mantener.',
        'Crea hábitos que se adapten a tu estilo de vida con varios tipos de seguimiento y horarios flexibles. Puedes registrar hábitos como hecho o no hecho, metas numéricas o rutinas basadas en minutos. Configura hábitos para todos los días, días específicos, cada X días o un número objetivo de veces por semana.',
        'Mantén la constancia con check-ins diarios, recordatorios de hábitos y una línea de tiempo limpia que facilita seguir tu progreso. Habit Tracker te ayuda a crear rachas, revisar días anteriores y mantenerte responsable sin complicar el proceso.',
        'Comprende tu progreso con estadísticas detalladas, como racha actual, racha más larga, progreso semanal, progreso mensual, puntuación de constancia, total de check-ins, tendencia de 7 días y mapa de calor del calendario. Estas métricas te ayudan a ver qué funciona y dónde puedes mejorar.',
        'Diseñado para ser rápido, claro y enfocado, Habit Tracker te ofrece una forma sencilla de organizar hábitos por título, descripción, categoría y color. Con modo oscuro, compatibilidad con varios idiomas y recordatorios inteligentes, Habit Tracker es una app práctica para Android para quienes quieren construir hábitos duraderos y rutinas más sólidas.',
      ],
      category: 'Productividad',
      platforms: ['Android'],
      tags: ['Habit Tracker', 'Rutinas', 'Rachas', 'Recordatorios', 'Productividad'],
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
  },

  pt: {
    'intermittent-fasting': {
      name: 'Intermittent Fasting',
      summary:
        'Crie melhores hábitos com Intermittent Fasting, uma app simples de jejum com planos, lembretes, diário e progresso claro.',
      longDescription: [
        'Intermittent Fasting é uma app de jejum simples e moderna criada para o ajudar a manter a consistência, seguir uma rotina e compreender melhor o seu progresso. Quer esteja a começar com 16:8, a usar 18:6, a experimentar 20:4 ou a seguir OMAD, Intermittent Fasting oferece uma forma clara e prática de gerir o seu plano de jejum.',
        'Inicie um jejum em segundos e acompanhe cada sessão ativa com uma contagem decrescente em tempo real, limpa e fácil de ler. Pode terminar e guardar cada jejum quando acabar, rever o seu histórico mais tarde e manter a sua rotina organizada sem complexidade desnecessária. Intermittent Fasting foi pensada para tornar o jejum diário mais estruturado, simples e sustentável.',
        'Escolha entre os planos de jejum intermitente mais populares ou crie um horário que se adapte ao seu estilo de vida. A aplicação ajuda-o a construir um ritmo útil para gestão de peso, consistência e criação de melhores hábitos, mantendo tudo flexível e fácil de usar no dia a dia.',
        'Mantenha-se motivado com dados úteis como a sequência atual, o jejum mais longo, as horas semanais de jejum e as entradas guardadas no diário. Intermittent Fasting dá-lhe uma visão clara do seu percurso para perceber o que está a funcionar e continuar focado nos seus objetivos.',
        'Com lembretes inteligentes, suporte de idiomas e um design escuro limpo, Intermittent Fasting é uma app Android prática para quem procura um temporizador de jejum intermitente, um diário de jejum e um acompanhamento de progresso num só lugar.',
      ],
      category: 'Saúde e fitness',
      platforms: ['Android'],
      tags: ['Intermittent Fasting', 'Jejum intermitente', 'Temporizador de jejum', 'Rastreador de jejum', 'Saúde e fitness'],
    },
    'hiit-timer': {
      name: 'HIIT Timer',
      summary:
        'Treine melhor com HIIT Timer, um temporizador de intervalos flexível para treinos personalizados, arranque rápido e histórico.',
      longDescription: [
        'HIIT Timer é uma aplicação de temporizador de intervalos simples e flexível criada para treinos HIIT, circuit training, sessões de cardio, treinos em casa e rotinas personalizadas. Quer procure um workout timer simples para sessões rápidas ou uma ferramenta mais completa para criar treinos por intervalos, HIIT Timer ajuda-o a treinar com clareza e controlo.',
        'Crie o seu treino exatamente como quiser com intervalos de aquecimento, esforço, descanso e retorno à calma. Defina o número de séries, organize a ordem de cada bloco, guarde os seus treinos e inicie-os rapidamente quando estiver pronto para treinar. HIIT Timer facilita a criação de sessões estruturadas para cardio, corrida por intervalos, treino funcional e exercícios em casa.',
        'Mantenha o foco durante cada sessão com um temporizador grande e fácil de ler e um ecrã de treino pensado para utilização rápida. Pode iniciar rapidamente treinos guardados, voltar à sua última sessão e acompanhar os treinos concluídos com um histórico que o ajuda a manter a consistência ao longo do tempo.',
        'Personalize a aplicação de acordo com o seu estilo de treino com sinais sonoros, vibração, sons de contagem decrescente, modo escuro, opções de idioma e suporte para manter o ecrã ligado durante os treinos. HIIT Timer foi criado para reduzir distrações e ajudá-lo a manter a atenção em cada intervalo e transição.',
        'Desenvolvido para velocidade, simplicidade e flexibilidade, HIIT Timer é uma prática aplicação Android para quem procura intervalos personalizados, rotinas guardadas, histórico de sessões e uma melhor forma de gerir treinos HIIT, cardio e treino intervalado.',
      ],
      category: 'Saúde e fitness',
      platforms: ['Android'],
      tags: ['HIIT Timer', 'Temporizador de intervalos', 'Workout timer', 'Treino HIIT', 'Fitness'],
    },
    'habit-tracker': {
      name: 'Habit Tracker',
      summary:
        'Crie rotinas melhores com Habit Tracker, uma app flexível de hábitos com lembretes, sequências, check-ins diários e estatísticas claras de progresso.',
      longDescription: [
        'Habit Tracker é uma aplicação simples e flexível para acompanhar hábitos, criar rotinas diárias melhores, manter consistência e alcançar objetivos pessoais. Quer você queira ler mais, treinar, beber mais água, meditar, estudar ou melhorar a produtividade, Habit Tracker ajuda a transformar intenções em hábitos que você realmente consegue manter.',
        'Crie hábitos que combinem com o seu estilo de vida com vários tipos de acompanhamento e agendas flexíveis. Você pode acompanhar hábitos como concluído ou não concluído, como metas numéricas ou como rotinas baseadas em minutos. Configure hábitos para todos os dias, dias específicos, a cada X dias ou um número alvo de vezes por semana.',
        'Mantenha a consistência com check-ins diários, lembretes de hábitos e uma linha do tempo limpa que torna o progresso fácil de acompanhar. Habit Tracker ajuda você a construir sequências, revisar dias anteriores e manter responsabilidade sem deixar o processo complicado.',
        'Entenda seu progresso com estatísticas detalhadas, incluindo sequência atual, maior sequência, conclusão semanal, conclusão mensal, pontuação de consistência, total de check-ins, tendência de 7 dias e mapa de calor do calendário. Esses dados ajudam você a ver o que funciona e onde pode melhorar.',
        'Desenvolvido para ser rápido, claro e focado, Habit Tracker oferece uma maneira simples de organizar hábitos por título, descrição, categoria e cor. Com modo escuro, suporte a idiomas e lembretes inteligentes, Habit Tracker é uma app prática para Android para qualquer pessoa que queira criar hábitos duradouros e rotinas mais fortes.',
      ],
      category: 'Produtividade',
      platforms: ['Android'],
      tags: ['Habit Tracker', 'Rotinas', 'Sequências', 'Lembretes', 'Produtividade'],
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
  },

  sr: {
    'intermittent-fasting': {
      name: 'Intermittent Fasting',
      summary:
        'Изградите боље навике уз Intermittent Fasting, једноставну апликацију за пост са плановима, подсетницима, дневником и јасним увидима.',
      longDescription: [
        'Intermittent Fasting је једноставна и модерна апликација за праћење поста направљена да вам помогне да будете доследни, пратите рутину и боље разумете свој напредак. Било да почињете са 16:8, користите 18:6, испробавате 20:4 или пратите OMAD, Intermittent Fasting вам даје јасан и практичан начин да организујете свој распоред поста.',
        'Покрените пост за неколико секунди и пратите сваку активну сесију уз чист и прегледан тајмер са одбројавањем уживо. Можете да завршите и сачувате сваки пост када буде готов, касније прегледате историју и одржавате своју рутину организованом без непотребне сложености. Intermittent Fasting је направљен тако да свакодневни пост буде једноставан, структуриран и лак за одржавање.',
        'Изаберите неки од популарних планова интермитентног поста или направите распоред који одговара вашем начину живота. Апликација вам помаже да изградите ритам који подржава контролу тежине, доследност и боље навике, а све то у флексибилном и једноставном искуству за свакодневну употребу.',
        'Останите мотивисани уз корисне увиде као што су тренутни низ, најдужи пост, недељни сати поста и сачувани уноси у дневнику. Intermittent Fasting вам даје јасан преглед вашег пута како бисте видели шта функционише и наставили да се крећете ка својим циљевима.',
        'Уз паметне подсетнике, подршку за језике и чист тамни дизајн, Intermittent Fasting је практична Android апликација за свакога ко жели поуздан тајмер за интермитентни пост, дневник поста и праћење напретка на једном месту.',
      ],
      category: 'Здравље и фитнес',
      platforms: ['Android'],
      tags: ['Intermittent Fasting', 'Интермитентни пост', 'Тајмер поста', 'Праћење поста', 'Здравље и фитнес'],
    },
    'hiit-timer': {
      name: 'HIIT Timer',
      summary:
        'Тренирајте паметније уз HIIT Timer, флексибилан интервални тајмер за прилагођене тренинге, брз старт и историју сесија.',
      longDescription: [
        'HIIT Timer је једноставна и флексибилна апликација са интервалним тајмером направљена за HIIT тренинге, кружне тренинге, кардио сесије, кућне тренинге и прилагођене фитнес рутине. Било да желите једноставан workout timer за брзе сесије или напреднији алат за прављење интервалних тренинга, HIIT Timer вам помаже да тренирате јасно, организовано и под контролом.',
        'Направите тренинг баш онако како вам одговара уз интервале загревања, рада, одмора и хлађења. Подесите број кругова, организујте редослед сваког блока, сачувајте тренинге и покрените их брзо када дође време за вежбање. HIIT Timer олакшава креирање структурираних сесија за кућни фитнес, кардио, интервално трчање и вежбе са сопственом тежином.',
        'Останите фокусирани током сваког тренинга уз велики и јасно читљив тајмер и чист екран за тренинг направљен за брзо коришћење. Можете одмах да покренете сачуване тренинге, вратите се на последњу сесију и пратите завршене тренинге у историји како бисте одржали континуитет.',
        'Прилагодите апликацију свом стилу тренинга уз звучне сигнале, вибрацију, одбројавање пре прелаза, тамни режим, језичке опције и подршку да екран остане укључен током тренинга. HIIT Timer је направљен да смањи ометања и помогне вам да останете усмерени на сваки интервал и сваку промену.',
        'Направљен за брзину, једноставност и флексибилност, HIIT Timer је практична Android апликација за све који желе прилагођене интервале, сачуване рутине, историју сесија и бољи начин за управљање HIIT тренинзима, кардио тренинзима и интервалним вежбањем.',
      ],
      category: 'Здравље и фитнес',
      platforms: ['Android'],
      tags: ['HIIT Timer', 'Интервални тајмер', 'Workout timer', 'HIIT тренинг', 'Фитнес'],
    },
    'habit-tracker': {
      name: 'Habit Tracker',
      summary:
        'Изгради боље рутине уз Habit Tracker, флексибилну апликацију за праћење навика са подсетницима, низовима, дневним пријавама и јасном статистиком напретка.',
      longDescription: [
        'Habit Tracker је једноставна и флексибилна апликација за праћење навика, изградњу бољих дневних рутина, већу доследност и остваривање личних циљева. Било да желиш да више читаш, вежбаш, пијеш више воде, медитираш, учиш или побољшаш продуктивност, Habit Tracker ти помаже да намере претвориш у навике које заиста можеш да задржиш.',
        'Креирај навике које одговарају твом начину живота уз више типова праћења и флексибилне распореде. Навике можеш да пратиш као обављено или необављено, као нумеричке циљеве или као рутине засноване на минутима. Подеси навике за сваки дан, одређене дане, сваких X дана или задати број пута недељно.',
        'Остани доследан уз дневне пријаве, подсетнике за навике и чисту временску линију која олакшава праћење напретка. Habit Tracker ти помаже да градиш низове, прегледаш претходне дане и останеш одговоран без непотребне сложености.',
        'Разуми свој напредак уз детаљну статистику, укључујући тренутни низ, најдужи низ, недељно испуњење, месечно испуњење, резултат доследности, укупан број пријава, тренд за 7 дана и календарски heatmap. Ови подаци ти помажу да видиш шта функционише и где можеш да се побољшаш.',
        'Осмишљен за брзину, прегледност и фокус, Habit Tracker ти нуди једноставан начин да организујеш навике по називу, опису, категорији и боји. Уз тамни режим, подршку за језике и паметне подсетнике, Habit Tracker је практична Android апликација за свакога ко жели да изгради трајне навике и јаче рутине.',
      ],
      category: 'Продуктивност',
      platforms: ['Android'],
      tags: ['Habit Tracker', 'Рутине', 'Низови', 'Подсетници', 'Продуктивност'],
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
  },

  hr: {
    'intermittent-fasting': {
      name: 'Intermittent Fasting',
      summary:
        'Izgradite bolje navike uz Intermittent Fasting, jednostavnu aplikaciju za post s planovima, podsjetnicima, dnevnikom i jasnim uvidima.',
      longDescription: [
        'Intermittent Fasting je jednostavna i moderna aplikacija za praćenje posta napravljena kako bi vam pomogla da ostanete dosljedni, pratite rutinu i bolje razumijete svoj napredak. Bilo da počinjete s 16:8, koristite 18:6, isprobavate 20:4 ili pratite OMAD, Intermittent Fasting daje vam jasan i praktičan način za upravljanje rasporedom posta.',
        'Pokrenite post za nekoliko sekundi i pratite svaku aktivnu sesiju uz čist i pregledan timer s odbrojavanjem uživo. Možete završiti i spremiti svaki post kada završite, kasnije pregledati povijest i održavati svoju rutinu organiziranom bez nepotrebne složenosti. Intermittent Fasting je osmišljen da svakodnevni post učini strukturiranim, jednostavnim i lakim za održavanje.',
        'Birajte među popularnim planovima intermitentnog posta ili izradite raspored koji odgovara vašem načinu života. Aplikacija vam pomaže stvoriti ritam koji podržava kontrolu težine, dosljednost i izgradnju boljih navika, a pritom ostaje fleksibilna i jednostavna za svakodnevno korištenje.',
        'Ostanite motivirani uz korisne uvide kao što su trenutni niz, najduži post, tjedni sati posta i spremljeni unosi u dnevniku. Intermittent Fasting daje vam jasan pregled vašeg puta kako biste vidjeli što funkcionira i nastavili se kretati prema svojim ciljevima.',
        'Uz pametne podsjetnike, podršku za jezike i čist tamni dizajn, Intermittent Fasting je praktična Android aplikacija za svakoga tko želi pouzdan timer za intermitentni post, dnevnik posta i praćenje napretka na jednom mjestu.',
      ],
      category: 'Zdravlje i fitness',
      platforms: ['Android'],
      tags: ['Intermittent Fasting', 'Intermitentni post', 'Timer posta', 'Praćenje posta', 'Zdravlje i fitness'],
    },

    'hiit-timer': {
      name: 'HIIT Timer',
      summary:
        'Trenirajte pametnije uz HIIT Timer, fleksibilan intervalni timer za prilagođene treninge, brzi start i povijest sesija.',
      longDescription: [
        'HIIT Timer je jednostavna i fleksibilna aplikacija s intervalnim timerom napravljena za HIIT treninge, kružne treninge, kardio sesije, kućne treninge i prilagođene fitness rutine. Bilo da želite jednostavan workout timer za brze sesije ili napredniji alat za izradu intervalnih treninga, HIIT Timer pomaže vam trenirati jasno, organizirano i pod kontrolom.',
        'Sastavite trening točno onako kako vam odgovara uz intervale zagrijavanja, rada, odmora i hlađenja. Postavite broj krugova, organizirajte redoslijed svakog bloka, spremite treninge i pokrenite ih brzo kada dođe vrijeme za vježbanje. HIIT Timer olakšava izradu strukturiranih sesija za kućni fitness, kardio, intervalno trčanje i vježbe s vlastitom težinom.',
        'Ostanite fokusirani tijekom svakog treninga uz veliki i lako čitljiv timer te čist ekran za trening dizajniran za brzo korištenje. Možete odmah pokrenuti spremljene treninge, vratiti se na zadnju sesiju i pratiti završene treninge u povijesti kako biste održali kontinuitet.',
        'Prilagodite aplikaciju svom stilu treninga uz zvučne signale, vibraciju, odbrojavanje prije prijelaza, tamni način rada, jezične opcije i podršku da ekran ostane uključen tijekom treninga. HIIT Timer napravljen je kako bi smanjio distrakcije i pomogao vam da ostanete usmjereni na svaki interval i svaku promjenu.',
        'Napravljen za brzinu, jednostavnost i fleksibilnost, HIIT Timer je praktična Android aplikacija za svakoga tko želi prilagođene intervale, spremljene rutine, povijest sesija i bolji način za upravljanje HIIT treninzima, kardio treninzima i intervalnim vježbanjem.',
      ],
      category: 'Zdravlje i fitness',
      platforms: ['Android'],
      tags: ['HIIT Timer', 'Intervalni timer', 'Workout timer', 'HIIT trening', 'Fitness'],
    },
    'habit-tracker': {
      name: 'Habit Tracker',
      summary:
        'Izgradi bolje rutine uz Habit Tracker, fleksibilnu aplikaciju za praćenje navika s podsjetnicima, nizovima, dnevnim prijavama i jasnom statistikom napretka.',
      longDescription: [
        'Habit Tracker je jednostavna i fleksibilna aplikacija za praćenje navika koja pomaže u izgradnji boljih dnevnih rutina, većoj dosljednosti i ostvarivanju osobnih ciljeva. Bilo da želiš više čitati, vježbati, piti više vode, meditirati, učiti ili poboljšati produktivnost, Habit Tracker ti pomaže pretvoriti namjere u navike koje možeš dugoročno zadržati.',
        'Kreiraj navike koje odgovaraju tvom načinu života uz više vrsta praćenja i fleksibilne rasporede. Navike možeš pratiti kao obavljeno ili neobavljeno, kao numeričke ciljeve ili kao rutine temeljene na minutama. Postavi navike za svaki dan, određene dane, svakih X dana ili zadani broj puta tjedno.',
        'Ostani dosljedan uz dnevne prijave, podsjetnike za navike i čistu vremensku liniju koja olakšava praćenje napretka. Habit Tracker ti pomaže graditi nizove, pregledavati prethodne dane i ostati odgovoran bez nepotrebne složenosti.',
        'Razumij svoj napredak uz detaljnu statistiku, uključujući trenutačni niz, najduži niz, tjedno ispunjenje, mjesečno ispunjenje, rezultat dosljednosti, ukupan broj prijava, trend za zadnjih 7 dana i kalendarski heatmap. Ti podaci pomažu ti vidjeti što funkcionira i gdje se možeš poboljšati.',
        'Dizajniran za brzinu, preglednost i fokus, Habit Tracker ti omogućuje jednostavno organiziranje navika po nazivu, opisu, kategoriji i boji. Uz tamni način rada, podršku za jezike i pametne podsjetnike, Habit Tracker je praktična Android aplikacija za svakoga tko želi izgraditi trajne navike i jače rutine.',
      ],
      category: 'Produktivnost',
      platforms: ['Android'],
      tags: ['Habit Tracker', 'Rutine', 'Nizovi', 'Podsjetnici', 'Produktivnost'],
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
  },

  nl: {
    'intermittent-fasting': {
      name: 'Intermittent Fasting',
      summary:
        'Bouw betere gewoontes op met Intermittent Fasting, een eenvoudige vasten-app met schema’s, herinneringen, een journaal en duidelijke inzichten.',
      longDescription: [
        'Intermittent Fasting is een eenvoudige en moderne vasten-app die is ontworpen om je te helpen consequent te blijven, een routine te volgen en je voortgang beter te begrijpen. Of je nu begint met 16:8, 18:6 gebruikt, 20:4 probeert of OMAD volgt, Intermittent Fasting geeft je een duidelijke en praktische manier om je vastenschema te beheren.',
        'Start een vastenperiode in een paar seconden en volg elke actieve sessie met een heldere live afteltimer. Je kunt elke vastenperiode afronden en opslaan wanneer je klaar bent, later je geschiedenis bekijken en je routine georganiseerd houden zonder onnodige complexiteit. Intermittent Fasting is gemaakt om dagelijks vasten gestructureerd, eenvoudig en vol te houden te maken.',
        'Kies uit populaire intermittent fasting-schema’s of maak een planning die past bij jouw levensstijl. De app helpt je een ritme op te bouwen dat werkt voor gewichtsbeheer, consistentie en betere gewoontes, terwijl alles flexibel en eenvoudig blijft voor dagelijks gebruik.',
        'Blijf gemotiveerd met nuttige inzichten zoals je huidige reeks, langste vastenperiode, wekelijkse vastenuren en opgeslagen journaalitems. Intermittent Fasting geeft je een duidelijk overzicht van je traject zodat je kunt zien wat werkt en gericht verder kunt gaan richting je doelen.',
        'Met slimme herinneringen, taalondersteuning en een strak donker ontwerp is Intermittent Fasting een praktische Android-app voor iedereen die een betrouwbare intermittent fasting-timer, vastenjournaal en voortgangstracker op één plek wil.',
      ],
      category: 'Gezondheid en fitness',
      platforms: ['Android'],
      tags: ['Intermittent Fasting', 'Intermittent vasten', 'Vasten timer', 'Vasten tracker', 'Gezondheid en fitness'],
    },
    'hiit-timer': {
      name: 'HIIT Timer',
      summary:
        'Train slimmer met HIIT Timer, een flexibele intervaltimer voor aangepaste workouts, snelle starts en trainingsgeschiedenis.',
      longDescription: [
        'HIIT Timer is een duidelijke en flexibele intervaltimer-app voor HIIT-workouts, circuittraining, cardiotraining, thuisworkouts en aangepaste fitnessroutines. Of je nu een simpele workout timer zoekt voor snelle sessies of een uitgebreidere tool om intervaltrainingen op te bouwen, HIIT Timer helpt je om gestructureerd en met controle te trainen.',
        'Bouw je workout precies zoals jij wilt met warming-up-, werk-, rust- en cooling-downintervallen. Stel het aantal rondes in, bepaal de volgorde van elk blok, sla je workouts op en start ze snel wanneer het tijd is om te trainen. HIIT Timer maakt het eenvoudig om gestructureerde sessies te maken voor home fitness, intervalrunning, cardio en lichaamsgewichttraining.',
        'Blijf gefocust tijdens elke training met een grote, makkelijk leesbare timer en een strak trainingsscherm dat snel te gebruiken is. Je kunt opgeslagen workouts direct starten, teruggaan naar je laatste sessie en voltooide trainingen volgen in je geschiedenis om consistent te blijven.',
        'Pas de app aan jouw trainingsstijl aan met geluidssignalen, trilfeedback, aftelbeeps, donkere modus, taalopties en ondersteuning om je scherm tijdens trainingen ingeschakeld te houden. HIIT Timer is ontworpen om afleiding te verminderen en je aandacht bij elk interval en elke overgang te houden.',
        'HIIT Timer is gebouwd voor snelheid, eenvoud en flexibiliteit en is een praktische Android-app voor iedereen die aangepaste intervallen, opgeslagen routines, trainingsgeschiedenis en een betere manier wil om HIIT-training, cardio en intervaloefeningen te beheren.',
      ],
      category: 'Gezondheid en fitness',
      platforms: ['Android'],
      tags: ['HIIT Timer', 'Intervaltimer', 'Workout timer', 'HIIT workout', 'Fitness'],
    },
    'habit-tracker': {
      name: 'Habit Tracker',
      summary:
        'Bouw betere routines met Habit Tracker, een flexibele gewoonte-app met herinneringen, streaks, dagelijkse check-ins en duidelijke voortgangsstatistieken.',
      longDescription: [
        'Habit Tracker is een eenvoudige en flexibele app voor het bijhouden van gewoontes, het opbouwen van betere dagelijkse routines, het vasthouden van consistentie en het bereiken van persoonlijke doelen. Of je nu meer wilt lezen, sporten, water drinken, mediteren, studeren of productiever wilt worden, Habit Tracker helpt je om voornemens om te zetten in gewoontes die je echt kunt volhouden.',
        'Maak gewoontes die passen bij jouw levensstijl met meerdere trackingtypes en flexibele schema’s. Je kunt gewoontes volgen als gedaan of niet gedaan, als numerieke doelen of als routines op basis van minuten. Stel gewoontes in voor elke dag, specifieke dagen, elke X dagen of een doel aantal keer per week.',
        'Blijf consistent met dagelijkse check-ins, herinneringen voor gewoontes en een overzichtelijke tijdlijn die voortgang makkelijk zichtbaar maakt. Habit Tracker helpt je streaks op te bouwen, eerdere dagen te bekijken en verantwoordelijkheid te houden zonder het proces ingewikkeld te maken.',
        'Begrijp je voortgang met gedetailleerde statistieken zoals huidige streak, langste streak, wekelijkse voltooiing, maandelijkse voltooiing, consistentiescore, totaal aantal check-ins, 7-daagse trend en kalender-heatmap. Deze inzichten laten zien wat goed werkt en waar je kunt verbeteren.',
        'Habit Tracker is ontworpen voor snelheid, duidelijkheid en focus en geeft je een eenvoudige manier om gewoontes te organiseren op titel, beschrijving, categorie en kleur. Met donkere modus, taalondersteuning en slimme herinneringen is Habit Tracker een praktische Android-app voor iedereen die blijvende gewoontes en sterkere routines wil opbouwen.',
      ],
      category: 'Productiviteit',
      platforms: ['Android'],
      tags: ['Habit Tracker', 'Routines', 'Streaks', 'Herinneringen', 'Productiviteit'],
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
  },

  pl: {
    'intermittent-fasting': {
      name: 'Intermittent Fasting',
      summary:
        'Buduj lepsze nawyki z Intermittent Fasting, prostą aplikacją do postu z planami, przypomnieniami, dziennikiem i czytelnymi statystykami.',
      longDescription: [
        'Intermittent Fasting to prosta i nowoczesna aplikacja do śledzenia postu, która pomaga zachować regularność, trzymać się planu i lepiej rozumieć własne postępy. Niezależnie od tego, czy zaczynasz od 16:8, korzystasz z 18:6, próbujesz 20:4 czy stosujesz OMAD, Intermittent Fasting daje Ci jasny i wygodny sposób zarządzania harmonogramem postu.',
        'Rozpocznij post w kilka sekund i śledź każdą aktywną sesję za pomocą przejrzystego licznika z odliczaniem na żywo. Możesz zakończyć i zapisać każdy post po jego ukończeniu, później wrócić do historii i utrzymywać swoją rutynę w porządku bez zbędnej złożoności. Intermittent Fasting została stworzona po to, aby codzienny post był prosty, uporządkowany i łatwy do utrzymania.',
        'Wybieraj spośród popularnych planów intermittent fasting albo stwórz harmonogram dopasowany do swojego stylu życia. Aplikacja pomaga zbudować rytm wspierający kontrolę wagi, regularność i lepsze nawyki, zachowując przy tym elastyczność i prostotę na co dzień.',
        'Pozostań zmotywowany dzięki przydatnym statystykom, takim jak aktualna seria, najdłuższy post, tygodniowe godziny postu i zapisane wpisy w dzienniku. Intermittent Fasting daje Ci czytelny obraz całej drogi, aby łatwiej zobaczyć, co działa i konsekwentnie iść w stronę swoich celów.',
        'Dzięki inteligentnym przypomnieniom, obsłudze języków i przejrzystemu ciemnemu wyglądowi Intermittent Fasting to praktyczna aplikacja Android dla każdego, kto chce mieć niezawodny timer do intermittent fasting, dziennik postu i śledzenie postępów w jednym miejscu.',
      ],
      category: 'Zdrowie i fitness',
      platforms: ['Android'],
      tags: ['Intermittent Fasting', 'Post przerywany', 'Timer postu', 'Śledzenie postu', 'Zdrowie i fitness'],
    },
    'hiit-timer': {
      name: 'HIIT Timer',
      summary:
        'Trenuj skuteczniej z HIIT Timer, elastycznym timerem interwałowym do własnych treningów, szybkiego startu i historii sesji.',
      longDescription: [
        'HIIT Timer to przejrzysta i elastyczna aplikacja z timerem interwałowym stworzona do treningów HIIT, treningu obwodowego, cardio, ćwiczeń w domu i własnych planów fitness. Niezależnie od tego, czy szukasz prostego workout timera do szybkich sesji, czy bardziej rozbudowanego narzędzia do budowania treningów interwałowych, HIIT Timer pomaga trenować w uporządkowany i wygodny sposób.',
        'Twórz trening dokładnie tak, jak chcesz, korzystając z interwałów rozgrzewki, pracy, odpoczynku i schłodzenia. Ustaw liczbę rund, uporządkuj kolejność bloków, zapisuj swoje treningi i uruchamiaj je szybko, gdy przyjdzie czas na ćwiczenia. HIIT Timer ułatwia tworzenie uporządkowanych sesji do fitnessu w domu, biegania interwałowego, cardio i ćwiczeń z masą własnego ciała.',
        'Zachowaj skupienie podczas każdego treningu dzięki dużemu, czytelnemu timerowi i przejrzystemu ekranowi treningowemu zaprojektowanemu do szybkiej obsługi. Możesz od razu uruchamiać zapisane treningi, wracać do ostatniej sesji i śledzić ukończone treningi w historii, aby utrzymać regularność.',
        'Dostosuj aplikację do swojego stylu treningu dzięki sygnałom dźwiękowym, wibracjom, odliczaniu przed przejściami, trybowi ciemnemu, opcjom językowym i funkcji utrzymywania ekranu włączonego podczas ćwiczeń. HIIT Timer został zaprojektowany tak, aby ograniczać rozpraszacze i pomagać Ci skupić się na każdym interwale oraz każdej zmianie.',
        'Stworzony z myślą o szybkości, prostocie i elastyczności, HIIT Timer to praktyczna aplikacja Android dla osób, które chcą własnych interwałów, zapisanych planów, historii sesji i lepszego sposobu na zarządzanie treningami HIIT, cardio i ćwiczeniami interwałowymi.',
      ],
      category: 'Zdrowie i fitness',
      platforms: ['Android'],
      tags: ['HIIT Timer', 'Timer interwałowy', 'Workout timer', 'Trening HIIT', 'Fitness'],
    },
    'habit-tracker': {
      name: 'Habit Tracker',
      summary:
        'Buduj lepsze rutyny z Habit Tracker, elastyczną aplikacją do śledzenia nawyków z przypomnieniami, seriami, codziennymi check-inami i czytelną statystyką postępów.',
      longDescription: [
        'Habit Tracker to prosta i elastyczna aplikacja do śledzenia nawyków, budowania lepszych codziennych rutyn, utrzymywania regularności i realizowania osobistych celów. Niezależnie od tego, czy chcesz więcej czytać, ćwiczyć, pić więcej wody, medytować, uczyć się czy zwiększyć produktywność, Habit Tracker pomaga zamienić intencje w nawyki, których naprawdę da się trzymać.',
        'Twórz nawyki dopasowane do swojego stylu życia dzięki wielu typom śledzenia i elastycznym harmonogramom. Możesz śledzić nawyki jako wykonane lub niewykonane, jako cele liczbowe albo jako rutyny oparte na minutach. Ustaw nawyki na każdy dzień, wybrane dni, co X dni albo określoną liczbę razy w tygodniu.',
        'Zachowaj regularność dzięki codziennym check-inom, przypomnieniom i przejrzystej osi czasu, która ułatwia śledzenie postępów. Habit Tracker pomaga budować serie, przeglądać poprzednie dni i zachować odpowiedzialność bez zbędnego komplikowania całego procesu.',
        'Analizuj postępy dzięki szczegółowym statystykom, takim jak aktualna seria, najdłuższa seria, realizacja tygodniowa, realizacja miesięczna, wskaźnik regularności, łączna liczba check-inów, trend z 7 dni oraz kalendarzowa mapa aktywności. Te dane pomagają zobaczyć, co działa i gdzie można się poprawić.',
        'Zaprojektowany z myślą o szybkości, przejrzystości i skupieniu, Habit Tracker daje prosty sposób organizowania nawyków według tytułu, opisu, kategorii i koloru. Dzięki trybowi ciemnemu, obsłudze języków i inteligentnym przypomnieniom Habit Tracker jest praktyczną aplikacją na Androida dla każdego, kto chce budować trwałe nawyki i mocniejsze rutyny.',
      ],
      category: 'Produktywność',
      platforms: ['Android'],
      tags: ['Habit Tracker', 'Rutyny', 'Serie', 'Przypomnienia', 'Produktywność'],
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
  },

  ro: {
    'intermittent-fasting': {
      name: 'Intermittent Fasting',
      summary:
        'Construiește obiceiuri mai bune cu Intermittent Fasting, o aplicație simplă pentru post cu planuri, mementouri, jurnal și statistici clare.',
      longDescription: [
        'Intermittent Fasting este o aplicație simplă și modernă pentru urmărirea postului, creată pentru a te ajuta să rămâi consecvent, să urmezi o rutină și să înțelegi mai bine progresul tău. Fie că începi cu 16:8, folosești 18:6, încerci 20:4 sau urmezi OMAD, Intermittent Fasting îți oferă o metodă clară și practică de a-ți gestiona programul de post.',
        'Pornește un post în câteva secunde și urmărește fiecare sesiune activă cu un timer clar, cu numărătoare inversă live. Poți încheia și salva fiecare post când ai terminat, poți reveni mai târziu la istoric și îți poți păstra rutina organizată fără complexitate inutilă. Intermittent Fasting este concepută pentru a face postul zilnic mai structurat, mai simplu și mai ușor de menținut.',
        'Alege dintre planuri populare de intermittent fasting sau creează un program care se potrivește stilului tău de viață. Aplicația te ajută să construiești un ritm util pentru controlul greutății, consecvență și obiceiuri mai bune, păstrând experiența flexibilă și ușor de folosit în fiecare zi.',
        'Rămâi motivat cu informații utile precum seria curentă, cel mai lung post, orele săptămânale de post și notițele salvate în jurnal. Intermittent Fasting îți oferă o imagine clară asupra parcursului tău, astfel încât să vezi ce funcționează și să continui spre obiectivele tale.',
        'Cu mementouri inteligente, suport pentru limbi și un design dark curat, Intermittent Fasting este o aplicație Android practică pentru oricine își dorește un timer de intermittent fasting, un jurnal de post și urmărirea progresului într-un singur loc.',
      ],
      category: 'Sănătate și fitness',
      platforms: ['Android'],
      tags: ['Intermittent Fasting', 'Post intermitent', 'Timer post', 'Monitorizare post', 'Sănătate și fitness'],
    },
    'hiit-timer': {
      name: 'HIIT Timer',
      summary:
        'Antrenează-te mai bine cu HIIT Timer, un timer de intervale flexibil pentru antrenamente personalizate, pornire rapidă și istoric.',
      longDescription: [
        'HIIT Timer este o aplicație clară și flexibilă cu timer de intervale, creată pentru antrenamente HIIT, circuit training, sesiuni cardio, antrenamente acasă și rutine fitness personalizate. Fie că ai nevoie de un workout timer simplu pentru sesiuni rapide sau de un instrument mai avansat pentru construirea antrenamentelor pe intervale, HIIT Timer te ajută să te antrenezi organizat și cu mai mult control.',
        'Construiește-ți antrenamentul exact cum vrei, cu intervale de încălzire, efort, pauză și revenire. Setează numărul de runde, organizează ordinea fiecărui bloc, salvează antrenamentele și pornește-le rapid când este timpul să începi. HIIT Timer face ușoară crearea unor sesiuni structurate pentru fitness acasă, alergare pe intervale, cardio și exerciții cu greutatea corpului.',
        'Rămâi concentrat în timpul fiecărui antrenament cu un timer mare, ușor de citit, și un ecran curat, gândit pentru utilizare rapidă. Poți porni imediat antrenamentele salvate, reveni la ultima sesiune și urmări antrenamentele finalizate în istoric pentru a rămâne consecvent.',
        'Personalizează aplicația după stilul tău de antrenament cu semnale sonore, vibrații, bipuri pentru numărătoare inversă, mod întunecat, opțiuni de limbă și suport pentru a menține ecranul aprins în timpul antrenamentelor. HIIT Timer este creat pentru a reduce distragerile și pentru a te ajuta să rămâi atent la fiecare interval și fiecare tranziție.',
        'Creat pentru viteză, simplitate și flexibilitate, HIIT Timer este o aplicație Android practică pentru oricine își dorește intervale personalizate, rutine salvate, istoric al sesiunilor și o metodă mai bună de a gestiona antrenamente HIIT, cardio și exerciții pe intervale.',
      ],
      category: 'Sănătate și fitness',
      platforms: ['Android'],
      tags: ['HIIT Timer', 'Timer intervale', 'Workout timer', 'Antrenament HIIT', 'Fitness'],
    },
    'habit-tracker': {
      name: 'Habit Tracker',
      summary:
        'Construiește rutine mai bune cu Habit Tracker, o aplicație flexibilă pentru obiceiuri cu mementouri, serii, check-in-uri zilnice și statistici clare de progres.',
      longDescription: [
        'Habit Tracker este o aplicație simplă și flexibilă pentru urmărirea obiceiurilor, construirea unor rutine zilnice mai bune, menținerea consecvenței și atingerea obiectivelor personale. Fie că vrei să citești mai mult, să faci mișcare, să bei mai multă apă, să meditezi, să studiezi sau să îți îmbunătățești productivitatea, Habit Tracker te ajută să transformi intențiile în obiceiuri pe care le poți păstra.',
        'Creează obiceiuri potrivite stilului tău de viață cu mai multe tipuri de urmărire și programe flexibile. Poți urmări obiceiurile ca realizat sau nerealizat, ca obiective numerice sau ca rutine bazate pe minute. Setează obiceiuri pentru fiecare zi, anumite zile, la fiecare X zile sau un număr țintă de ori pe săptămână.',
        'Rămâi consecvent cu check-in-uri zilnice, mementouri pentru obiceiuri și o cronologie clară care face progresul ușor de urmărit. Habit Tracker te ajută să construiești serii, să revizuiești zilele anterioare și să rămâi responsabil fără să complice procesul.',
        'Înțelege progresul tău cu statistici detaliate, inclusiv seria curentă, cea mai lungă serie, completarea săptămânală, completarea lunară, scorul de consecvență, totalul check-in-urilor, trendul pe 7 zile și calendarul heatmap. Aceste informații te ajută să vezi ce funcționează și unde poți îmbunătăți.',
        'Creat pentru viteză, claritate și focus, Habit Tracker îți oferă o modalitate simplă de a organiza obiceiurile după titlu, descriere, categorie și culoare. Cu mod întunecat, suport pentru limbi și mementouri inteligente, Habit Tracker este o aplicație Android practică pentru oricine vrea să construiască obiceiuri durabile și rutine mai puternice.',
      ],
      category: 'Productivitate',
      platforms: ['Android'],
      tags: ['Habit Tracker', 'Rutine', 'Serii', 'Mementouri', 'Productivitate'],
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