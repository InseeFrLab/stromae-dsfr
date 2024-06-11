import Badge from '@codegouvfr/react-dsfr/Badge'
import type { Translations } from '../types'

export const translations: Translations<'fr'> = {
  Footer: {
    'operator logo alt': 'Insee, mesurer pour comprendre',
    'content description': `
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
    'button redirect to': ({ redirectTo }) => {
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
}
