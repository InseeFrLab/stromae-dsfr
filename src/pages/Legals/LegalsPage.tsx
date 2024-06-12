import { Breadcrumb } from '@codegouvfr/react-dsfr/Breadcrumb'
import { declareComponentKeys, useTranslation } from 'i18n'
import type { ReactNode } from 'react'
import { Grid } from 'shared/components/Grid'

export function LegalsPage() {
  const { t } = useTranslation({ LegalsPage })
  return (
    <Grid>
      <Breadcrumb
        currentPageLabel={t('legals title')}
        homeLinkProps={{}}
        segments={[]}
      />
      <h2>{t('legals title')}</h2>
      {t('legals content')}
    </Grid>
  )
}

const { i18n } = declareComponentKeys<
  'legals title' | { K: 'legals content'; R: ReactNode }
>()({ LegalsPage })

export type I18n = typeof i18n
