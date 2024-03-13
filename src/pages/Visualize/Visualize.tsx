import { Orchestrator } from 'components/Orchestrator/Orchestrator'
import { VisualizeForm } from './Form/VisualizeForm'
import { visualizeRoute } from './route'
import { axiosGet } from 'utils/axios'
import { queryOptions, useQueryClient } from '@tanstack/react-query'

export function VisualizePage() {
  const loaderResults = visualizeRoute.useLoaderData()
  const queryClient = useQueryClient()

  if (!loaderResults) {
    return <VisualizeForm />
  }
  const { source, surveyUnitData, nomenclature } = loaderResults

  const getReferentiel = (name: string) => {
    if (!nomenclature) {
      return Promise.reject(new Error('No nomenclature provided'))
    }

    if (!nomenclature[name]) {
      return Promise.reject(
        new Error(`The nomenclature ${name} is not provided`)
      )
    }
    return queryClient.ensureQueryData(
      queryOptions({
        queryKey: [name],
        queryFn: () => axiosGet<Array<unknown>>(nomenclature[name]),
      })
    )
  }

  return (
    <Orchestrator
      source={source}
      surveyUnitData={surveyUnitData}
      getReferentiel={getReferentiel}
    />
  )
}
