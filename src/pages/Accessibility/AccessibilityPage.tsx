import { Breadcrumb } from '@codegouvfr/react-dsfr/Breadcrumb'
import { Grid } from 'components/Grid'

export function AccessibilityPage() {
  return (
    <Grid>
      <Breadcrumb
        currentPageLabel="Accessibilité"
        homeLinkProps={{
          to: '/',
        }}
        segments={[]}
      />
      <h2>Accessibilité</h2>
    </Grid>
  )
}
