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
import { stromaeInstance } from './axiosInstance'

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

/**
 * @summary Healthcheck, check if api is alive
 */
export const healthCheck = (
  options?: SecondParameter<typeof stromaeInstance>,
  signal?: AbortSignal
) => {
  return stromaeInstance<void>(
    { url: `/api/healthcheck`, method: 'GET', signal },
    options
  )
}

export const getHealthCheckQueryKey = () => {
  return [`/api/healthcheck`] as const
}

export const getHealthCheckQueryOptions = <
  TData = Awaited<ReturnType<typeof healthCheck>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>
  >
  request?: SecondParameter<typeof stromaeInstance>
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getHealthCheckQueryKey()

  const queryFn: QueryFunction<Awaited<ReturnType<typeof healthCheck>>> = ({
    signal,
  }) => healthCheck(requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof healthCheck>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type HealthCheckQueryResult = NonNullable<
  Awaited<ReturnType<typeof healthCheck>>
>
export type HealthCheckQueryError = unknown

/**
 * @summary Healthcheck, check if api is alive
 */
export const useHealthCheck = <
  TData = Awaited<ReturnType<typeof healthCheck>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>
  >
  request?: SecondParameter<typeof stromaeInstance>
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getHealthCheckQueryOptions(options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey
  }

  query.queryKey = queryOptions.queryKey

  return query
}
