import { declareComponentKeys } from 'i18n'
import { reviewRoute } from './route'

export function ReviewPage() {
  const params = reviewRoute.useParams()

  const loaderResults = reviewRoute.useLoaderData()

  console.log({ params, loaderResults })

  return <>Review Page</>
}

const { i18n } = declareComponentKeys()({ ReviewPage })

export type I18n = typeof i18n
