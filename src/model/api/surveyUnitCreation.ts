/**
 * Generated by orval v6.30.2 🍺
 * Do not edit manually.
 * queen-api
 * API for Queen/Stromae
 * OpenAPI spec version: 4.3.8-SNAPSHOT
 */
import type { SchemaData } from './schema.data/schemaData'
import type { SchemaPersonalization } from './schema.personalization/schemaPersonalization'
import type { StateDataUpdate } from './stateDataUpdate'
import type { SurveyUnitCreationComment } from './surveyUnitCreationComment'

export interface SurveyUnitCreation {
  comment: SurveyUnitCreationComment
  data: SchemaData
  id?: string
  personalization: SchemaPersonalization
  questionnaireId: string
  stateData?: StateDataUpdate
}
