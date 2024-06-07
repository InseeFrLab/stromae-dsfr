/**
 * Generated by orval v6.29.1 🍺
 * Do not edit manually.
 * queen-api
 * API for Queen/Stromae
 * OpenAPI spec version: 4.3.4-SNAPSHOT
 */
import type { SchemaData } from '../schema.data/schemaData'
import type { SchemaPersonalization } from '../schema.personalization/schemaPersonalization'
import type { SchemaSurveyUnitTempZoneComment } from './schemaSurveyUnitTempZoneComment'
import type { StateData } from './stateData'

/**
 * Validation of survey unit temp zone
 */
export interface SchemaSurveyUnitTempZone {
  comment?: SchemaSurveyUnitTempZoneComment
  data: SchemaData
  personalization?: SchemaPersonalization
  /** @minLength 1 */
  questionnaireId: string
  stateData: StateData
}
