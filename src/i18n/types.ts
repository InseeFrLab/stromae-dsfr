import type { GenericTranslations } from 'i18nifty'

//List the languages you with to support
export const languages = ['en', 'fr'] as const

//If the user's browser language doesn't match any
//of the languages above specify the language to fallback to:
export const fallbackLanguage = 'en'

export type Language = (typeof languages)[number]

export type ComponentKey =
  | import('shared/components/Layout/Footer').I18n
  | import('shared/components/Layout/Header').I18n
  | import('shared/components/Error/ErrorComponent').I18n
  | import('shared/components/Orchestrator/CustomPages/EndPage').I18n
  | import('shared/components/Orchestrator/CustomPages/ValidationModal').I18n
  | import('shared/components/Orchestrator/CustomPages/ValidationPage').I18n
  | import('shared/components/Orchestrator/CustomPages/WelcomePage').I18n
  | import('shared/components/Orchestrator/CustomPages/WelcomeModal').I18n
  | import('shared/components/Orchestrator/SequenceHeader').I18n
  | import('shared/components/Orchestrator/SurveyContainer').I18n

export type Translations<L extends Language> = GenericTranslations<
  ComponentKey,
  Language,
  typeof fallbackLanguage,
  L
>
