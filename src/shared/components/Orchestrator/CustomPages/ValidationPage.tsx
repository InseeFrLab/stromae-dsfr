import { fr } from '@codegouvfr/react-dsfr'
import { useTranslation } from 'i18n'
import { declareComponentKeys } from 'i18nifty'

export function ValidationPage() {
  const { t } = useTranslation('ValidationPage')
  return (
    <div className={fr.cx('fr-my-4w')}>
      <h1>{t('title')}</h1>
      <p>{t('paragraph')}</p>
    </div>
  )
}

const { i18n } = declareComponentKeys<'title' | 'paragraph'>()('ValidationPage')

export type I18n = typeof i18n
