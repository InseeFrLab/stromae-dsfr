import { fr } from '@codegouvfr/react-dsfr'
import { useTranslation } from 'i18n'
import { declareComponentKeys } from 'i18nifty'

export function EndPage(props: { date: number | undefined }) {
  const { date = Date.now() } = props
  const { t } = useTranslation('EndPage')
  const formatedDate = new Date(date).toLocaleString()

  return (
    <div className={fr.cx('fr-my-4w')}>
      <h1>{t('title')}</h1>
      <p>{t('paragraph', { formatedDate })}</p>
    </div>
  )
}

const { i18n } = declareComponentKeys<
  | 'title'
  | {
      K: 'paragraph'
      P: { formatedDate: string }
      R: string
    }
>()('EndPage')

export type I18n = typeof i18n
