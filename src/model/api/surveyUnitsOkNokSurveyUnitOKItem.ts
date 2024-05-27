/**
 * Generated by orval v6.29.1 🍺
 * Do not edit manually.
 * queen-api
 * API for Queen/Stromae
 * OpenAPI spec version: 4.3.1-SNAPSHOT
 */
import type { SurveyUnitsOkNokSurveyUnitOKItemComment } from './surveyUnitsOkNokSurveyUnitOKItemComment'
import type { SurveyUnitsOkNokSurveyUnitOKItemData } from './surveyUnitsOkNokSurveyUnitOKItemData'
import type { SurveyUnitsOkNokSurveyUnitOKItemPersonalizationItem } from './surveyUnitsOkNokSurveyUnitOKItemPersonalizationItem'
import type { SurveyUnitsOkNokSurveyUnitOKItemStateData } from './surveyUnitsOkNokSurveyUnitOKItemStateData'

export type SurveyUnitsOkNokSurveyUnitOKItem = {
  comment?: SurveyUnitsOkNokSurveyUnitOKItemComment
  /** Validation of survey unit data */
  data?: SurveyUnitsOkNokSurveyUnitOKItemData
  id?: string
  /** Validation of personalizations for a survey unit */
  personalization?: SurveyUnitsOkNokSurveyUnitOKItemPersonalizationItem[]
  questionnaireId?: string
  stateData?: SurveyUnitsOkNokSurveyUnitOKItemStateData
}