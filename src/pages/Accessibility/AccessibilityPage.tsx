import { Breadcrumb } from '@codegouvfr/react-dsfr/Breadcrumb'
import { declareComponentKeys, useTranslation } from 'i18n'
import { Grid } from 'shared/components/Grid'

export function AccessibilityPage() {
  const { t } = useTranslation({ AccessibilityPage })
  return (
    <Grid>
      <Breadcrumb
        currentPageLabel={t('accessibility title')}
        homeLinkProps={{}}
        segments={[]}
      />
      <h2>{t('accessibility title')}</h2>
    </Grid>
  )
}

const { i18n } = declareComponentKeys<'accessibility title'>()({
  AccessibilityPage,
})

export type I18n = typeof i18n
