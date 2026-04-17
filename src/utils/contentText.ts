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
      'These answers are synthesized from the current product description so the page stays aligned with the app listing.',
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
      'Diese Antworten sind aus der aktuellen Produktbeschreibung abgeleitet, damit die Seite mit dem App-Listing konsistent bleibt.',
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
      "Ces reponses sont synthetisees a partir de la description actuelle du produit afin de rester coherentes avec la fiche de l'application.",
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
      "Queste risposte sono sintetizzate dalla descrizione attuale del prodotto, cosi la pagina resta coerente con la scheda dell'app.",
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
      'Estas respuestas se sintetizan a partir de la descripcion actual del producto para mantener la pagina alineada con la ficha de la app.',
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
      'Estas respostas sao sintetizadas a partir da descricao atual do produto para manter a pagina alinhada com a listagem da app.',
    relatedAppsTitle: 'Apps relacionadas',
    relatedAppsLead:
      'Continua a explorar produtos semelhantes do mesmo portfolio para aumentar a descoberta e a profundidade da sessao.',
    bottomCtaEyebrow: 'Pronto para instalar?',
    bottomCtaTitle: 'Transforma interesse em acao?',
    bottomPrimaryCta: 'Obter no Google Play',
    bottomSecondaryCta: 'Explorar mais apps',
  },
  sr: {
    mainFeatureTitle: 'Glavne funkcije',
    screenshotTitle: 'Pregled iskustva',
    screenshotLead:
      'Prevuci kroz 9:16 placeholder snimke ekrana osmislene da prikazu UI trenutke koji treba najbrze da objasne vrednost proizvoda.',
    screenshotPreviousLabel: 'Prethodni snimak ekrana',
    screenshotNextLabel: 'Sledeci snimak ekrana',
    screenshotIndicatorLabel: 'Idi na snimak ekrana',
    faqTitle: 'Cesto postavljana pitanja',
    faqLead:
      'Ovi odgovori su sintetizovani iz trenutnog opisa proizvoda kako bi stranica ostala uskladena sa listingom aplikacije.',
    relatedAppsTitle: 'Povezane aplikacije',
    relatedAppsLead:
      'Nastavi da istrazujes slicne proizvode iz istog portfolija i povecaj dubinu pregledanja.',
    bottomCtaEyebrow: 'Spreman za instalaciju?',
    bottomCtaTitle: 'Pretvori interesovanje u akciju?',
    bottomPrimaryCta: 'Preuzmi sa Google Play-a',
    bottomSecondaryCta: 'Istrazi jos aplikacija',
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
      'Ovi odgovori sintetizirani su iz trenutnog opisa proizvoda kako bi stranica ostala uskladena s listingom aplikacije.',
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
      'Deze antwoorden zijn samengevat uit de huidige productbeschrijving zodat de pagina aansluit op de appvermelding.',
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
      'Te odpowiedzi zostaly zsyntetyzowane na podstawie obecnego opisu produktu, aby strona pozostawala spojna z listingiem aplikacji.',
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
      'Aceste raspunsuri sunt sintetizate din descrierea actuala a produsului pentru ca pagina sa ramana aliniata cu listarea aplicatiei.',
    relatedAppsTitle: 'Aplicatii similare',
    relatedAppsLead:
      'Continua sa explorezi produse similare din acelasi portofoliu pentru a creste profunzimea sesiunii si descoperirea.',
    bottomCtaEyebrow: 'Gata de instalare?',
    bottomCtaTitle: 'Transforma interesul in actiune?',
    bottomPrimaryCta: 'Descarca din Google Play',
    bottomSecondaryCta: 'Descopera mai multe aplicatii',
  },
};
