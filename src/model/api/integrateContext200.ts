/**
 * Generated by orval v6.29.1 🍺
 * Do not edit manually.
 * queen-api
 * API for Queen/Stromae
 * OpenAPI spec version: 4.3.1-SNAPSHOT
 */
import type { IntegrateContext200Campaign } from './integrateContext200Campaign'
import type { IntegrateContext200NomenclaturesItem } from './integrateContext200NomenclaturesItem'
import type { IntegrateContext200QuestionnaireModelsItem } from './integrateContext200QuestionnaireModelsItem'

export type IntegrateContext200 = {
  campaign?: IntegrateContext200Campaign
  nomenclatures?: IntegrateContext200NomenclaturesItem[]
  questionnaireModels?: IntegrateContext200QuestionnaireModelsItem[]
}