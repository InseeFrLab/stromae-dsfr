/**
 * Generated by orval v6.29.1 🍺
 * Do not edit manually.
 * queen-api
 * API for Queen/Stromae
 * OpenAPI spec version: 4.3.2-SNAPSHOT
 */
import { useQuery } from '@tanstack/react-query'
import type {
  QueryFunction,
  QueryKey,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query'
import type { SchemaMetadata } from '../model/api/schema.metadata'
import { stromaeInstance } from './axiosInstance'

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

/**
 * Authorized roles: ADMIN / WEBCLIENT / REVIEWER / REVIEWER_ALTERNATIVE / INTERVIEWER / SURVEY_UNIT /
 * @summary Get metadata for a questionnaire
 */
export const getMetadataByQuestionnaireId = (
  id: string,
  options?: SecondParameter<typeof stromaeInstance>,
  signal?: AbortSignal
) => {
  return stromaeInstance<SchemaMetadata>(
    { url: `/api/questionnaire/${id}/metadata`, method: 'GET', signal },
    options
  )
}

export const getGetMetadataByQuestionnaireIdQueryKey = (id: string) => {
  return [`/api/questionnaire/${id}/metadata`] as const
}

export const getGetMetadataByQuestionnaireIdQueryOptions = <
  TData = Awaited<ReturnType<typeof getMetadataByQuestionnaireId>>,
  TError = unknown,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getMetadataByQuestionnaireId>>,
        TError,
        TData
      >
    >
    request?: SecondParameter<typeof stromaeInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey =
    queryOptions?.queryKey ?? getGetMetadataByQuestionnaireIdQueryKey(id)

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getMetadataByQuestionnaireId>>
  > = ({ signal }) => getMetadataByQuestionnaireId(id, requestOptions, signal)

  return {
    queryKey,
    queryFn,
    enabled: !!id,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof getMetadataByQuestionnaireId>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type GetMetadataByQuestionnaireIdQueryResult = NonNullable<
  Awaited<ReturnType<typeof getMetadataByQuestionnaireId>>
>
export type GetMetadataByQuestionnaireIdQueryError = unknown

/**
 * @summary Get metadata for a questionnaire
 */
export const useGetMetadataByQuestionnaireId = <
  TData = Awaited<ReturnType<typeof getMetadataByQuestionnaireId>>,
  TError = unknown,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getMetadataByQuestionnaireId>>,
        TError,
        TData
      >
    >
    request?: SecondParameter<typeof stromaeInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetMetadataByQuestionnaireIdQueryOptions(id, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * Authorized roles: ADMIN / WEBCLIENT / REVIEWER / REVIEWER_ALTERNATIVE / INTERVIEWER / SURVEY_UNIT /
 * @summary Get metadata for a campaign
 */
export const getMetadataByCampaignId = (
  id: string,
  options?: SecondParameter<typeof stromaeInstance>,
  signal?: AbortSignal
) => {
  return stromaeInstance<SchemaMetadata>(
    { url: `/api/campaign/${id}/metadata`, method: 'GET', signal },
    options
  )
}

export const getGetMetadataByCampaignIdQueryKey = (id: string) => {
  return [`/api/campaign/${id}/metadata`] as const
}

export const getGetMetadataByCampaignIdQueryOptions = <
  TData = Awaited<ReturnType<typeof getMetadataByCampaignId>>,
  TError = unknown,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getMetadataByCampaignId>>,
        TError,
        TData
      >
    >
    request?: SecondParameter<typeof stromaeInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey =
    queryOptions?.queryKey ?? getGetMetadataByCampaignIdQueryKey(id)

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getMetadataByCampaignId>>
  > = ({ signal }) => getMetadataByCampaignId(id, requestOptions, signal)

  return {
    queryKey,
    queryFn,
    enabled: !!id,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof getMetadataByCampaignId>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type GetMetadataByCampaignIdQueryResult = NonNullable<
  Awaited<ReturnType<typeof getMetadataByCampaignId>>
>
export type GetMetadataByCampaignIdQueryError = unknown

/**
 * @summary Get metadata for a campaign
 */
export const useGetMetadataByCampaignId = <
  TData = Awaited<ReturnType<typeof getMetadataByCampaignId>>,
  TError = unknown,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getMetadataByCampaignId>>,
        TError,
        TData
      >
    >
    request?: SecondParameter<typeof stromaeInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetMetadataByCampaignIdQueryOptions(id, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey
  }

  query.queryKey = queryOptions.queryKey

  return query
}
