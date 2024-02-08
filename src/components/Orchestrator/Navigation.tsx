import Button from '@codegouvfr/react-dsfr/Button'
import ButtonsGroup from '@codegouvfr/react-dsfr/ButtonsGroup'
import { Grid } from 'components/Grid'
import { useMemo, type PropsWithChildren } from 'react'
import { useStyles } from 'tss-react/dsfr'
import type { PageType } from './type'

export function Navigation(
  props: PropsWithChildren<{
    currentPage: PageType
    handlePreviousClick: () => void
    handleNextClick: () => void
    handleDownloadData: () => void
  }>
) {
  const {
    currentPage,
    handleNextClick,
    handlePreviousClick,
    handleDownloadData,
    children,
  } = props
  const { css } = useStyles()

  const nextLabel = useMemo(() => {
    switch (currentPage) {
      case 'welcomePage':
        return 'Commencer'
      case 'lunaticPage':
        return 'Continuer'
      case 'endPage':
        return "Télécharger l'accusé de réception"
      case 'validationPage':
        return 'Envoyer mes réponses'
    }
  }, [currentPage])

  const isPreviousButtonDisable = ['welcomePage', 'endPage'].includes(
    currentPage
  )

  return (
    <>
      <Button
        id="button-precedent"
        title="Revenir à l'étape précédente"
        priority="tertiary no outline"
        iconId="fr-icon-arrow-left-line"
        onClick={handlePreviousClick}
        disabled={isPreviousButtonDisable}
        className={css({
          visibility: isPreviousButtonDisable ? 'hidden' : 'visible',
        })}
      >
        Précédent
      </Button>
      <Grid>
        {children}
        <Button
          priority="primary"
          title={"Passer à l'étape suivante"}
          id="continue-button"
          onClick={handleNextClick}
        >
          {nextLabel}
        </Button>
      </Grid>
      <ButtonsGroup
        buttons={[
          {
            children: 'Télécharger les données',
            priority: 'tertiary no outline',
            id: 'button-saveData',
            iconId: 'ri-download-2-line',
            onClick: handleDownloadData,
          },
        ]}
        alignment="right"
        buttonsEquisized={true}
      />
    </>
  )
}
