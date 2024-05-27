/**
 * Generated by orval v6.29.1 🍺
 * Do not edit manually.
 * queen-api
 * API for Queen/Stromae
 * OpenAPI spec version: 4.3.1-SNAPSHOT
 */
import type { GetInterviewerSurveyUnits200ItemComment } from './getInterviewerSurveyUnits200ItemComment'
import type { GetInterviewerSurveyUnits200ItemData } from './getInterviewerSurveyUnits200ItemData'
import type { GetInterviewerSurveyUnits200ItemPersonalizationItem } from './getInterviewerSurveyUnits200ItemPersonalizationItem'
import type { GetInterviewerSurveyUnits200ItemStateData } from './getInterviewerSurveyUnits200ItemStateData'

export type GetInterviewerSurveyUnits200Item = {
  comment?: GetInterviewerSurveyUnits200ItemComment
  /** Validation of survey unit data */
  data?: GetInterviewerSurveyUnits200ItemData
  id?: string
  /** Validation of personalizations for a survey unit */
  personalization?: GetInterviewerSurveyUnits200ItemPersonalizationItem[]
  questionnaireId?: string
  stateData?: GetInterviewerSurveyUnits200ItemStateData
}