import { fr } from '@codegouvfr/react-dsfr'
import { declareComponentKeys, useTranslation } from 'i18n'
import type { PageType } from 'model/Page'
import { useEffect } from 'react'
import type { useStromaeNavigation } from '../useStromaeNavigation'
import { WelcomeModal } from './WelcomeModal'

export function WelcomePage(props: {
  initialCurrentPage: PageType | undefined
  goToPage: ReturnType<typeof useStromaeNavigation>['goToPage']
}) {
  const { initialCurrentPage, goToPage } = props

  const { t } = useTranslation({ WelcomePage })
  useEffect(() => {
    // Reset the scroll on component unmount
    return () => {
      window.scrollTo(0, 0)
    }
  }, [])

  return (
    <>
      <div className={fr.cx('fr-my-4w')}>
        <h1>{t('title')}</h1>
        <p className={fr.cx('fr-text--lead')}>{t('paragraph')}</p>
        {/* Not internationalized yet because must cames from metadata from backend */}
        <h2>Qui doit répondre à ce questionnaire ?</h2>
        <ul>
          <li>Alice Doe</li>
          <li>Bernard Doe</li>
          <li>Charlotte Doe</li>
        </ul>
      </div>
      {initialCurrentPage && (
        <WelcomeModal goBack={() => goToPage({ page: initialCurrentPage })} />
      )}
    </>
  )
}

const { i18n } = declareComponentKeys<'title' | 'paragraph'>()({ WelcomePage })

export type I18n = typeof i18n
