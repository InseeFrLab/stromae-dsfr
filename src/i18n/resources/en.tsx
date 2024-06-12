import Badge from '@codegouvfr/react-dsfr/Badge'
import type { Translations } from 'i18n/types'

export const translations: Translations<'en'> = {
  Footer: {
    'footer operator logo alt': 'Insee, measure to understand',
    'footer content description': `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
    eu fugiat nulla pariatur.
    `,
    license: (
      <>
        This site uses Insee's 'Stromae' and 'Lunatic' applications, which are
        under{' '}
        <a
          title="MIT license - new window"
          href="https://github.com/InseeFrLab/stromae-dsfr/blob/main/LICENSE"
          target="_blank"
        >
          MIT license
        </a>
        , based on the State's design system available under{' '}
        <a
          href="https://github.com/etalab/licence-ouverte/blob/master/LO.md"
          title="etalab-2.0 license - new window"
          target="_blank"
        >
          etalab-2.0 license
        </a>
        .
      </>
    ),
  },
  Header: {
    'home link title':
      'Home - Name of the entity (ministry, state secretariat, government)',
    'quick access support': 'Contact support',
    'quick access logout': 'Log out',
    'service tag line': 'Internet collection application',
    'service title': (
      <>
        Survey sector{' '}
        <Badge as="span" noIcon severity="success">
          Beta
        </Badge>
      </>
    ),
    'operator logo alt': 'Insee, measure to understand',
  },
  ErrorComponent: {
    'error button redirect to': ({ redirectTo }) => {
      switch (redirectTo) {
        case 'portal':
          return 'Return to portal'
        case 'visualizeForm':
          return 'Return to the visualization form'
        case 'home':
        default:
          return 'Return to the homepage'
      }
    },
  },
  WelcomePage: {
    title: 'Welcome to your survey questionnaire',
    paragraph:
      'This survey allows us to gather more information on the relevant field',
  },
  WelcomeModal: {
    title: 'Welcome',
    'button first page': 'Return to the first page',
    'button go back': 'Resume where I left off',
    content:
      'You have already started filling out the questionnaire. Would you like to resume where you left off or return to the first page?',
  },
  EndPage: {
    title: 'Thank you for your participation in this survey.',
    paragraph: ({ formatedDate }) =>
      `Your responses were sent on ${formatedDate}.`,
  },
  ValidationPage: {
    title: 'You have reached the end of the questionnaire',
    paragraph:
      'Once submitted, you will not be able to modify your responses, and you can download a receipt.',
  },
  ValidationModal: {
    title: 'Do you want to submit your responses',
    'button cancel': 'Cancel',
    'button validate': 'Submit my responses',
    content:
      'You are about to submit your responses to the questionnaire. After submission, you will not be able to modify your responses.',
  },
  SequenceHeader: {
    'stepper state': ({ currentStep, stepCount }) =>
      `Step ${currentStep} of ${stepCount}`,
  },
  SurveyContainer: {
    'button continue label': ({ currentPage }) => {
      switch (currentPage) {
        case 'welcomePage':
          return 'Start'
        case 'lunaticPage':
          return 'Continue'
        case 'endPage':
          return 'Download the receipt'
        case 'validationPage':
          return 'Submit my responses'
      }
    },
    'button continue title': 'Proceed to the next step',
    'button download': 'Download data',
    'button expand': 'Expand view',
    'button previous title': 'Return to the previous step',
    'button previous label': 'Previous',
  },
  AccessibilityPage: {
    'accessibility title': 'Accessibility',
  },
  LegalsPage: {
    'legals title': 'Legal notices',
    'legals content': (
      <>
        <h3>Copyright</h3>
        <p>
          Any reproduction for any use other than strictly private of the
          trademarks and logos displayed on this site is strictly prohibited.
        </p>

        <h3>Publisher information</h3>
        <p>National Institute of Statistics and Economic Studies CS 70058</p>

        <p>88 Verdier Avenue</p>
        <p> 92541 MONTROUGE CEDEX FRANCE</p>
        <p>Phone: 01 87 69 50 00</p>
        <p>
          In accordance with the regulations, the necessary declaration has been
          made to the National Commission for Information Technology and
          Liberties.
        </p>

        <h3>Personal data</h3>
        <p>
          <a href="https://www.insee.fr/fr/information/3719162">
            Personal data
          </a>
        </p>
      </>
    ),
  },
  NavigationAssistancePage: {
    'navigation assistance title': 'Navigation assistance',
    'navigation assistance content': (
      <>
        <p>
          The "Previous" and "Continue" buttons allow you to navigate through
          the questionnaire.
        </p>
        <p>
          Your responses are saved each time you change the page but are not
          transmitted. As long as you have not submitted it, you can return to
          the questionnaire at any time to complete or finalize it.
        </p>
        <p>
          The "Submit my responses" button, accessible at the end of the
          questionnaire, allows you to send your completed questionnaire to our
          services and download your receipt.
        </p>
      </>
    ),
  },
  SecurityPage: {
    'security title': 'Security',
  },
  SiteMapPage: {
    'sitemap title': 'Site map',
  },
  VisualizeForm: {
    'form title': 'Survey preview.',
    'source file title': 'Survey source file.',
    'metadata file title': 'Survey metadata file.',
    'data file title': 'Survey data file.',
    'source file error': 'You must provide at least one source file URI',
    'source label': 'Source URI.',
    'metadata label': 'Metadata URI',
    'data label': 'Data URI.',
    'hint text': 'a valid url',
    'state related message': 'Validation / error explanation text',
    'submit button': 'Preview the questionnaire',
  },
  SelectNomenclatures: {
    'nomenclatures title': 'Suggestion references.',
    'nomenclatures description': `
      Add new suggestion references. To be used, they
      must also appear in the suggesters section of the source file.
    `,
    'add nomenclature button': 'Add a new reference',
    'name label': 'Name',
    'uri label': 'Uri',
    'delete button title': 'Delete',
  },
}
