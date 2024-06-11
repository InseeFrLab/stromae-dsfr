import { Breadcrumb } from '@codegouvfr/react-dsfr/Breadcrumb'
import { useTranslation } from 'i18n'
import { declareComponentKeys } from 'i18nifty'
import { Grid } from 'shared/components/Grid'

export function AccessibilityPage() {
  const { t } = useTranslation('AccessibilityPage')
  return (
    <Grid>
      <Breadcrumb
        currentPageLabel={t('title')}
        homeLinkProps={{}}
        segments={[]}
      />
      <h2>{t('title')}</h2>
    </Grid>
  )
}

const { i18n } = declareComponentKeys<'title'>()('AccessibilityPage')

export type I18n = typeof i18n
