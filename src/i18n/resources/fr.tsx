import Badge from '@codegouvfr/react-dsfr/Badge'
import type { Translations } from 'i18n/types'

export const translations: Translations<'fr'> = {
  Footer: {
    'footer operator logo alt': 'Insee, mesurer pour comprendre',
    'footer content description': `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
    eu fugiat nulla pariatur.
    `,
    license: (
      <>
        Ce site utilise les applications Insee 'Stromae' et 'Lunatic', qui sont
        sous{' '}
        <a
          title="licence MIT - nouvelle fenêtre"
          href="https://github.com/InseeFrLab/stromae-dsfr/blob/main/LICENSE"
          target="_blank"
        >
          licence MIT
        </a>
        , en s’appuyant sur le système de design de l'Etat disponible sous{' '}
        <a
          href="https://github.com/etalab/licence-ouverte/blob/master/LO.md"
          title="licence etalab-2.0 - nouvelle fenêtre"
          target="_blank"
        >
          licence etalab-2.0
        </a>
        .
      </>
    ),
  },
  Header: {
    'home link title':
      "Accueil - Nom de l’entité (ministère, secrétariat d'état, gouvernement)",
    'quick access support': "Contacter l'assistance",
    'quick access logout': 'Se déconnecter',
    'service tag line': 'Application de collecte internet',
    'service title': (
      <>
        Filière d'enquête{' '}
        <Badge as="span" noIcon severity="success">
          Beta
        </Badge>
      </>
    ),
    'operator logo alt': 'Insee, mesurer pour comprendre',
  },
  ErrorComponent: {
    'error button redirect to': ({ redirectTo }) => {
      switch (redirectTo) {
        case 'portal':
          return 'Retourner sur le portail'
        case 'visualizeForm':
          return 'Retourner au formulaire de visualisation'
        case 'home':
        default:
          return "Retourner à la page d'accueil"
      }
    },
  },
  WelcomePage: {
    title: 'Bienvenue sur le questionnaire de votre enquête',
    paragraph:
      "Cette enquête permet de connaître plus d'informations sur le domaine concerné",
  },
  WelcomeModal: {
    title: 'Bienvenue',
    'button first page': 'Revenir à la première page',
    'button go back': "Reprendre là où j'en étais",
    content:
      'Vous avez déjà commencé à renseigner le questionnaire. Souhaitez-vous reprendre là où vous en étiez ou revenir à la première page ?',
  },
  EndPage: {
    title: 'Nous vous remercions pour votre collaboration à cette enquête.',
    paragraph: ({ formatedDate }) =>
      `Vos réponses ont été envoyées le ${formatedDate}.`,
  },
  ValidationPage: {
    title: 'Vous êtes arrivé à la fin du questionnaire',
    paragraph:
      'Après envoi, vous ne pourrez plus modifier vos réponses et vous pourrez télécharger un accusé de réception.',
  },
  ValidationModal: {
    title: 'Voulez vous envoyer vos réponses',
    'button cancel': 'Annuler',
    'button validate': 'Envoyer mes réponses',
    content:
      "Vous êtes sur le point d'envoyer vos réponses au questionnaire. Après envoi, vous ne pourrez plus modifier vos réponses.",
  },
  SequenceHeader: {
    'stepper state': ({ currentStep, stepCount }) =>
      `Étape ${currentStep} sur ${stepCount}`,
  },
  SurveyContainer: {
    'button continue label': ({ currentPage }) => {
      switch (currentPage) {
        case 'welcomePage':
          return 'Commencer'
        case 'lunaticPage':
          return 'Continuer'
        case 'endPage':
          return "Télécharger l'accusé de réception"
        case 'validationPage':
          return 'Envoyer mes réponses'
      }
    },
    'button continue title': "Passer à l'étape suivante",
    'button download': 'Télécharger les données',
    'button expand': 'Étendre la vue',
    'button previous title': "Revenir à l'étape précédente",
    'button previous label': 'Précédent',
  },
  AccessibilityPage: {
    'accessibility title': 'Accessibilité',
  },
  LegalsPage: {
    'legals title': 'Mentions légales',
    'legals content': (
      <>
        <h3>Copyright</h3>
        <p>
          Toute reproduction pour un usage autre que strictement privé des
          marques et logos affichés sur le présent site est rigoureusement
          interdite.
        </p>

        <h3>Informations éditeurs</h3>
        <p>
          Institut National de la Statistique et des Études Économiques CS 70058
        </p>

        <p>88 avenue Verdier</p>
        <p> 92541 MONTROUGE CEDEX FRANCE</p>
        <p>Tél. : 01 87 69 50 00</p>
        <p>
          Conformément à la réglementation, la déclaration nécessaire a été
          effectuée auprès de la Commission nationale de l'informatique et des
          libertés.
        </p>

        <h3>Données nominatives</h3>
        <p>
          <a href="https://www.insee.fr/fr/information/3719162">
            Données à caractère personnel
          </a>
        </p>
      </>
    ),
  },
  NavigationAssistancePage: {
    'navigation assistance title': 'Aide à la navigation',
    'navigation assistance content': (
      <>
        <p>
          Les boutons « Précédent » et « Continuer » vous permettent de naviguer
          dans le questionnaire.
        </p>
        <p>
          Vos réponses sont enregistrées à chaque fois que vous changez de page
          mais ne sont pas transmises. Tant que vous ne l'avez pas transmis,
          vous pouvez revenir sur le questionnaire à tout moment, pour le
          compléter ou le finaliser.
        </p>
        <p>
          Le bouton « Envoyer mes réponses », accessible à la fin du
          questionnaire, vous permet de transmettre votre questionnaire
          renseigné à nos services et de télécharger votre accusé de réception.
        </p>
      </>
    ),
  },
  SecurityPage: {
    'security title': 'Sécurité',
  },
  SiteMapPage: {
    'sitemap title': 'Plan du site',
  },
  VisualizeForm: {
    'form title': "Prévisualisation d'enquête.",
    'source file title': "Fichier source de l'enquête.",
    'metadata file title': "Fichier de métadonnées de l'enquête.",
    'data file title': "Fichier de données de l'enquête.",
    'source file error': 'Vous devez au moins fournir un URI de fichier source',
    'source label': 'Uri Source.',
    'metadata label': 'Uri metadata',
    'data label': 'Uri Data.',
    'hint text': 'une url valide',
    'state related message': "Text de validation / d'explication de l'erreur",
    'submit button': 'Visualiser le questionnaire',
  },
  SelectNomenclatures: {
    'nomenclatures title': 'Référentiels de suggestion.',
    'nomenclatures description': `
      Ajouter de nouveaux référentiels de suggestion. Pour être utilisés, ils
      devront aussi figurer dans la section suggesters du fichier source.
    `,
    'add nomenclature button': 'Ajouter un nouveau référentiel',
    'name label': 'Nom',
    'uri label': 'Uri',
    'delete button title': 'Supprimer',
  },
}
