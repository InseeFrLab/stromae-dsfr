/**
 * Generated by orval v6.30.2 🍺
 * Do not edit manually.
 * queen-api
 * API for Queen/Stromae
 * OpenAPI spec version: 4.3.8-SNAPSHOT
 */
import type { Logos } from './logos'
import type { MetadataVariable } from './metadataVariable'
import type { SchemaPersonalization } from './schema.personalization/schemaPersonalization'
import type { SurveyUnitMetadataContext } from './surveyUnitMetadataContext'

export interface SurveyUnitMetadata {
  context?: SurveyUnitMetadataContext
  label?: string
  logos?: Logos
  objectives?: string
  personalization?: SchemaPersonalization
  variables?: MetadataVariable[]
}
