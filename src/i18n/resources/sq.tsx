import Badge from '@codegouvfr/react-dsfr/Badge'
import type { Translations } from 'i18n/types'

export const translations: Translations<'sq'> = {
  Footer: {
    'footer operator logo alt': 'Insee, mat për të kuptuar',
    'footer content description': `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
    eu fugiat nulla pariatur.
    `,
    license: (
      <>
        Ky sajt përdor aplikacionet e Insee 'Stromae' dhe 'Lunatic', të cilat
        janë nën{' '}
        <a
          title="licencë MIT - dritare e re"
          href="https://github.com/InseeFrLab/stromae-dsfr/blob/main/LICENSE"
          target="_blank"
        >
          licencë MIT
        </a>
        , bazuar në sistemin e dizajnit të Shtetit të disponueshëm nën{' '}
        <a
          href="https://github.com/etalab/licence-ouverte/blob/master/LO.md"
          title="licencë etalab-2.0 - dritare e re"
          target="_blank"
        >
          licencë etalab-2.0
        </a>
        .
      </>
    ),
  },
  Header: {
    'home link title':
      'Faqja kryesore - Emri i entitetit (ministria, sekretariati i shtetit, qeveria)',
    'quick access support': 'Kontakto asistencën',
    'quick access logout': 'Dil',
    'service tag line': 'Aplikacioni i mbledhjes në internet',
    'service title': (
      <>
        Sektori i anketës{' '}
        <Badge as="span" noIcon severity="success">
          Beta
        </Badge>
      </>
    ),
    'operator logo alt': 'Insee, mat për të kuptuar',
  },
  ErrorComponent: {
    'error button redirect to': ({ redirectTo }) => {
      switch (redirectTo) {
        case 'portal':
          return 'Kthehu në portal'
        case 'visualizeForm':
          return 'Kthehu te formulari i vizualizimit'
        case 'home':
        default:
          return 'Kthehu në faqen kryesore'
      }
    },
  },
  WelcomePage: {
    title: 'Mirë se vini në pyetësorin e anketës tuaj',
    paragraph:
      'Kjo anketë na lejon të mbledhim më shumë informacione mbi fushën përkatëse',
  },
  WelcomeModal: {
    title: 'Mirë se vini',
    'button first page': 'Kthehu në faqen e parë',
    'button go back': 'Vazhdo aty ku kam mbetur',
    content:
      'Ju tashmë keni filluar të plotësoni pyetësorin. Dëshironi të vazhdoni aty ku keni mbetur apo të ktheheni në faqen e parë?',
  },
  EndPage: {
    title: 'Ju falënderojmë për bashkëpunimin tuaj në këtë anketë.',
    paragraph: ({ formatedDate }) =>
      `Përgjigjet tuaja janë dërguar më ${formatedDate}.`,
  },
  ValidationPage: {
    title: 'Ju keni arritur në fund të pyetësorit',
    paragraph:
      'Pasi të dërgoni, nuk do të mund të modifikoni më përgjigjet tuaja dhe mund të shkarkoni një njoftim për pranimin.',
  },
  ValidationModal: {
    title: 'Dëshironi të dërgoni përgjigjet tuaja',
    'button cancel': 'Anulo',
    'button validate': 'Dërgo përgjigjet e mia',
    content:
      'Jeni gati të dërgoni përgjigjet tuaja në pyetësor. Pasi të dërgoni, nuk do të mund të modifikoni më përgjigjet tuaja.',
  },
  SequenceHeader: {
    'stepper state': ({ currentStep, stepCount }) =>
      `Hapi ${currentStep} nga ${stepCount}`,
  },
  SurveyContainer: {
    'button continue label': ({ currentPage }) => {
      switch (currentPage) {
        case 'welcomePage':
          return 'Fillo'
        case 'lunaticPage':
          return 'Vazhdo'
        case 'endPage':
          return 'Shkarko njoftimin për pranimin'
        case 'validationPage':
          return 'Dërgo përgjigjet e mia'
      }
    },
    'button continue title': 'Kalo në hapin tjetër',
    'button download': 'Shkarko të dhënat',
    'button expand': 'Zgjero pamjen',
    'button previous title': 'Kthehu në hapin e mëparshëm',
    'button previous label': 'I mëparshmi',
  },
  AccessibilityPage: {
    'accessibility title': 'Aksesueshmëria',
  },
  LegalsPage: {
    'legals title': 'Shënimet ligjore',
    'legals content': (
      <>
        <h3>Copyright</h3>
        <p>
          Çdo riprodhim për përdorim tjetër përveç atij strikt privat të markave
          dhe logove të shfaqura në këtë sajt është rreptësisht i ndaluar.
        </p>

        <h3>Informacionet e botuesit</h3>
        <p>
          Instituti Kombëtar i Statistikave dhe Studimeve Ekonomike CS 70058
        </p>

        <p>88 Rruga Verdier</p>
        <p> 92541 MONTROUGE CEDEX FRANCË</p>
        <p>Tel.: 01 87 69 50 00</p>
        <p>
          Në përputhje me rregulloren, deklarata e nevojshme është kryer pranë
          Komisionit Kombëtar për Informatikë dhe Liri.
        </p>

        <h3>Të dhënat personale</h3>
        <p>
          <a href="https://www.insee.fr/fr/information/3719162">
            Të dhënat personale
          </a>
        </p>
      </>
    ),
  },
  NavigationAssistancePage: {
    'navigation assistance title': 'Ndihmë për navigimin',
    'navigation assistance content': (
      <>
        <p>
          Butonat "I mëparshmi" dhe "Vazhdo" ju lejojnë të navigoni nëpër
          pyetësor.
        </p>
        <p>
          Përgjigjet tuaja ruhen sa herë që ndryshoni faqen por nuk janë të
          transmetuara. Përderisa nuk e keni transmetuar, mund të ktheheni në
          pyetësor në çdo kohë për ta plotësuar ose përfunduar atë.
        </p>
        <p>
          Butoni "Dërgo përgjigjet e mia", i disponueshëm në fund të pyetësorit,
          ju lejon të transmetoni pyetësorin tuaj të plotësuar në shërbimet tona
          dhe të shkarkoni njoftimin për pranimin.
        </p>
      </>
    ),
  },
  SecurityPage: {
    'security title': 'Siguria',
  },
  SiteMapPage: {
    'sitemap title': 'Harta e sajtit',
  },
  VisualizeForm: {
    'form title': 'Parashikimi i anketës.',
    'source file title': 'Dosja burimore e anketës.',
    'metadata file title': 'Dosja e metadhenave të anketës.',
    'data file title': 'Dosja e të dhënave të anketës.',
    'source file error':
      'Ju duhet të siguroni të paktën një URI të dosjes burimore',
    'source label': 'URI Burimore.',
    'metadata label': 'URI e metadhenave',
    'data label': 'URI e të dhënave.',
    'hint text': 'një URL e vlefshme',
    'state related message': 'Teksti i vlefshmërisë / shpjegimi i gabimit',
    'submit button': 'Parashiko pyetësorin',
  },
  SelectNomenclatures: {
    'nomenclatures title': 'Referencat e sugjerimeve.',
    'nomenclatures description': `
      Shtoni referenca të reja sugjerimesh. Për t'u përdorur, ato
      duhet të shfaqen gjithashtu në seksionin e sugjeruesve të dosjes burimore.
    `,
    'add nomenclature button': 'Shto një referencë të re',
    'name label': 'Emri',
    'uri label': 'Uri',
    'delete button title': 'Fshi',
  },
}
