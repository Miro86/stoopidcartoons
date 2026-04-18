import type { Locale } from './i18n';

interface ProductContentText {
  mainFeatureTitle: string;
  screenshotTitle: string;
  screenshotLead: string;
  screenshotPreviousLabel: string;
  screenshotNextLabel: string;
  screenshotIndicatorLabel: string;
  faqTitle: string;
  faqLead: string;
  relatedAppsTitle: string;
  relatedAppsLead: string;
  bottomCtaEyebrow: string;
  bottomCtaTitle: string;
  bottomPrimaryCta: string;
  bottomSecondaryCta: string;
}

export const contentText: Record<Locale, ProductContentText> = {
  en: {
    mainFeatureTitle: 'Main feature',
    screenshotTitle: 'Preview the experience',
    screenshotLead:
      'Swipe through placeholder 9:16 screenshots designed to show the UI moments that should explain the value fastest once final assets are produced.',
    screenshotPreviousLabel: 'Previous screenshot',
    screenshotNextLabel: 'Next screenshot',
    screenshotIndicatorLabel: 'Go to screenshot',
    faqTitle: 'Frequently asked questions',
    faqLead:
      'Here are answers to some of the questions people ask most often about this app.',
    relatedAppsTitle: 'Related apps',
    relatedAppsLead:
      'Keep exploring similar products from the same portfolio to increase session depth and discovery.',
    bottomCtaEyebrow: 'Ready to install?',
    bottomCtaTitle: 'Turn interest into action?',
    bottomPrimaryCta: 'Get it on Google Play',
    bottomSecondaryCta: 'Explore more apps',
  },
  de: {
    mainFeatureTitle: 'Hauptfunktionen',
    screenshotTitle: 'Erlebnisvorschau',
    screenshotLead:
      'Wische durch 9:16-Platzhalter-Screenshots, die genau die UI-Momente zeigen sollen, welche den Mehrwert spaeter am schnellsten vermitteln.',
    screenshotPreviousLabel: 'Vorheriger Screenshot',
    screenshotNextLabel: 'Naechster Screenshot',
    screenshotIndicatorLabel: 'Gehe zu Screenshot',
    faqTitle: 'Haeufig gestellte Fragen',
    faqLead:
      'Hier findest du Antworten auf einige der Fragen, die zu dieser App am haeufigsten gestellt werden.',
    relatedAppsTitle: 'Aehnliche Apps',
    relatedAppsLead:
      'Entdecke weitere passende Produkte aus demselben Portfolio und fuehre Nutzer tiefer durch den Katalog.',
    bottomCtaEyebrow: 'Bereit fuer die Installation?',
    bottomCtaTitle: 'Interesse in Aktion verwandeln?',
    bottomPrimaryCta: 'Bei Google Play herunterladen',
    bottomSecondaryCta: 'Weitere Apps entdecken',
  },
  fr: {
    mainFeatureTitle: 'Fonctionnalites principales',
    screenshotTitle: "Apercu de l'experience",
    screenshotLead:
      'Faites defiler ces captures 9:16 de demonstration pensees pour montrer les moments UI qui expliqueront le plus vite la valeur du produit.',
    screenshotPreviousLabel: 'Capture precedente',
    screenshotNextLabel: 'Capture suivante',
    screenshotIndicatorLabel: 'Aller a la capture',
    faqTitle: 'Questions frequentes',
    faqLead:
      "Voici les reponses a quelques-unes des questions les plus souvent posees sur cette application.",
    relatedAppsTitle: 'Apps associees',
    relatedAppsLead:
      'Continuez a explorer des produits similaires du meme portfolio pour prolonger la session et la decouverte.',
    bottomCtaEyebrow: 'Pret a installer ?',
    bottomCtaTitle: 'Transformer linteret en action ?',
    bottomPrimaryCta: 'Disponible sur Google Play',
    bottomSecondaryCta: "Decouvrir d'autres apps",
  },
  it: {
    mainFeatureTitle: 'Funzioni principali',
    screenshotTitle: "Anteprima dell'esperienza",
    screenshotLead:
      'Scorri questi screenshot 9:16 segnaposto pensati per mostrare i momenti UI che dovranno spiegare il valore piu velocemente.',
    screenshotPreviousLabel: 'Screenshot precedente',
    screenshotNextLabel: 'Screenshot successivo',
    screenshotIndicatorLabel: 'Vai allo screenshot',
    faqTitle: 'Domande frequenti',
    faqLead:
      "Ecco le risposte ad alcune delle domande piu frequenti su questa app.",
    relatedAppsTitle: 'App correlate',
    relatedAppsLead:
      'Continua a esplorare prodotti simili dello stesso portfolio per aumentare profondita di visita e scoperta.',
    bottomCtaEyebrow: 'Pronto per installarla?',
    bottomCtaTitle: 'Trasforma linteresse in azione?',
    bottomPrimaryCta: 'Scaricala da Google Play',
    bottomSecondaryCta: 'Scopri altre app',
  },
  es: {
    mainFeatureTitle: 'Funciones principales',
    screenshotTitle: 'Vista previa de la experiencia',
    screenshotLead:
      'Desliza estas capturas 9:16 de marcador de posicion pensadas para mostrar los momentos de UI que deberian explicar el valor mas rapido.',
    screenshotPreviousLabel: 'Captura anterior',
    screenshotNextLabel: 'Captura siguiente',
    screenshotIndicatorLabel: 'Ir a la captura',
    faqTitle: 'Preguntas frecuentes',
    faqLead:
      'Aqui tienes respuestas a algunas de las preguntas mas frecuentes sobre esta app.',
    relatedAppsTitle: 'Apps relacionadas',
    relatedAppsLead:
      'Sigue explorando productos similares del mismo portfolio para ampliar la sesion y el descubrimiento.',
    bottomCtaEyebrow: 'Listo para instalarla?',
    bottomCtaTitle: 'Convierte el interes en accion?',
    bottomPrimaryCta: 'Consiguela en Google Play',
    bottomSecondaryCta: 'Explorar mas apps',
  },
  pt: {
    mainFeatureTitle: 'Funcionalidades principais',
    screenshotTitle: 'Pre-visualizacao da experiencia',
    screenshotLead:
      'Desliza por estes screenshots 9:16 de demonstracao pensados para mostrar os momentos da interface que devem explicar o valor mais depressa.',
    screenshotPreviousLabel: 'Screenshot anterior',
    screenshotNextLabel: 'Screenshot seguinte',
    screenshotIndicatorLabel: 'Ir para o screenshot',
    faqTitle: 'Perguntas frequentes',
    faqLead:
      'Aqui encontras respostas para algumas das perguntas mais frequentes sobre esta app.',
    relatedAppsTitle: 'Apps relacionadas',
    relatedAppsLead:
      'Continua a explorar produtos semelhantes do mesmo portfolio para aumentar a descoberta e a profundidade da sessao.',
    bottomCtaEyebrow: 'Pronto para instalar?',
    bottomCtaTitle: 'Transforma interesse em acao?',
    bottomPrimaryCta: 'Obter no Google Play',
    bottomSecondaryCta: 'Explorar mais apps',
  },
  sr: {
    mainFeatureTitle: 'Главне функције',
    screenshotTitle: 'Преглед искуства',
    screenshotLead:
      'Превуци кроз 9:16 демонстрационе снимке екрана осмишљене да прикажу делове интерфејса који најбрже објашњавају вредност производа.',
    screenshotPreviousLabel: 'Претходни снимак екрана',
    screenshotNextLabel: 'Следећи снимак екрана',
    screenshotIndicatorLabel: 'Иди на снимак екрана',
    faqTitle: 'Често постављана питања',
    faqLead:
      'Овде ћеш наћи одговоре на нека од питања која се најчешће постављају о овој апликацији.',
    relatedAppsTitle: 'Повезане апликације',
    relatedAppsLead:
      'Настави да истражујеш сличне производе из истог портфолија и откријеш још тога што би могло да ти се допадне.',
    bottomCtaEyebrow: 'Спреман за инсталацију?',
    bottomCtaTitle: 'Претвори интересовање у акцију?',
    bottomPrimaryCta: 'Преузми са Google Play-а',
    bottomSecondaryCta: 'Истражи још апликација',
  },
  hr: {
    mainFeatureTitle: 'Glavne znacajke',
    screenshotTitle: 'Pregled iskustva',
    screenshotLead:
      'Prevuci kroz 9:16 placeholder screenshotove osmisljene da prikazu trenutke sucelja koji trebaju najbrze objasniti vrijednost proizvoda.',
    screenshotPreviousLabel: 'Prethodni screenshot',
    screenshotNextLabel: 'Sljedeci screenshot',
    screenshotIndicatorLabel: 'Idi na screenshot',
    faqTitle: 'Cesta pitanja',
    faqLead:
      'Ovdje ces pronaci odgovore na neka od pitanja koja se najcesce postavljaju o ovoj aplikaciji.',
    relatedAppsTitle: 'Povezane aplikacije',
    relatedAppsLead:
      'Nastavi istrazivati slicne proizvode iz istog portfolija i produlji otkrivanje unutar kataloga.',
    bottomCtaEyebrow: 'Spreman za instalaciju?',
    bottomCtaTitle: 'Pretvori interes u akciju?',
    bottomPrimaryCta: 'Preuzmi na Google Playu',
    bottomSecondaryCta: 'Istrazi jos aplikacija',
  },
  nl: {
    mainFeatureTitle: 'Belangrijkste functies',
    screenshotTitle: 'Voorproef van de ervaring',
    screenshotLead:
      'Veeg door deze 9:16-placeholderscreens die zijn ontworpen om de UI-momenten te tonen die de waarde het snelst moeten uitleggen.',
    screenshotPreviousLabel: 'Vorige screenshot',
    screenshotNextLabel: 'Volgende screenshot',
    screenshotIndicatorLabel: 'Ga naar screenshot',
    faqTitle: 'Veelgestelde vragen',
    faqLead:
      'Hier vind je antwoorden op een paar van de vragen die het vaakst over deze app worden gesteld.',
    relatedAppsTitle: 'Gerelateerde apps',
    relatedAppsLead:
      'Blijf vergelijkbare producten uit hetzelfde portfolio ontdekken om de sessiediepte en verdere verkenning te vergroten.',
    bottomCtaEyebrow: 'Klaar om te installeren?',
    bottomCtaTitle: 'Interesse omzetten in actie?',
    bottomPrimaryCta: 'Download op Google Play',
    bottomSecondaryCta: 'Meer apps ontdekken',
  },
  pl: {
    mainFeatureTitle: 'Glowne funkcje',
    screenshotTitle: 'Podglad doswiadczenia',
    screenshotLead:
      'Przesun przez placeholderowe zrzuty 9:16 zaprojektowane tak, aby pokazac momenty interfejsu, ktore najszybciej wyjasnia wartosc produktu.',
    screenshotPreviousLabel: 'Poprzedni zrzut ekranu',
    screenshotNextLabel: 'Nastepny zrzut ekranu',
    screenshotIndicatorLabel: 'Przejdz do zrzutu ekranu',
    faqTitle: 'Najczesciej zadawane pytania',
    faqLead:
      'Tutaj znajdziesz odpowiedzi na kilka pytan, ktore najczesciej pojawiaja sie w zwiazku z ta aplikacja.',
    relatedAppsTitle: 'Powiazane aplikacje',
    relatedAppsLead:
      'Odkrywaj dalej podobne produkty z tego samego portfolio, aby zwiekszyc glebie sesji i dalsze przegladanie.',
    bottomCtaEyebrow: 'Gotowy do instalacji?',
    bottomCtaTitle: 'Zamien zainteresowanie w dzialanie?',
    bottomPrimaryCta: 'Pobierz z Google Play',
    bottomSecondaryCta: 'Odkryj wiecej aplikacji',
  },
  ro: {
    mainFeatureTitle: 'Functii principale',
    screenshotTitle: 'Previzualizarea experientei',
    screenshotLead:
      'Gliseaza prin aceste screenshoturi 9:16 de tip placeholder, gandite pentru a arata momentele UI care trebuie sa explice cel mai repede valoarea produsului.',
    screenshotPreviousLabel: 'Screenshot anterior',
    screenshotNextLabel: 'Screenshot urmator',
    screenshotIndicatorLabel: 'Mergi la screenshot',
    faqTitle: 'Intrebari frecvente',
    faqLead:
      'Aici gasesti raspunsuri la cateva dintre intrebarile puse cel mai des despre aceasta aplicatie.',
    relatedAppsTitle: 'Aplicatii similare',
    relatedAppsLead:
      'Continua sa explorezi produse similare din acelasi portofoliu pentru a creste profunzimea sesiunii si descoperirea.',
    bottomCtaEyebrow: 'Gata de instalare?',
    bottomCtaTitle: 'Transforma interesul in actiune?',
    bottomPrimaryCta: 'Descarca din Google Play',
    bottomSecondaryCta: 'Descopera mai multe aplicatii',
  },
};
