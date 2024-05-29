/**
 * Generated by orval v6.29.1 🍺
 * Do not edit manually.
 * queen-api
 * API for Queen/Stromae
 * OpenAPI spec version: 4.3.2-SNAPSHOT
 */
import type { SurveyUnitComment } from './surveyUnitComment'
import type { SchemaData } from './schema.data/schemaData'
import type { SchemaPersonalization } from './schema.personalization/schemaPersonalization'
import type { StateData } from './stateData'

export interface SurveyUnit {
  comment?: SurveyUnitComment
  data?: SchemaData
  id?: string
  personalization?: SchemaPersonalization
  questionnaireId?: string
  stateData?: StateData
}
