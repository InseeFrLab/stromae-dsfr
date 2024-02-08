import {
  useLunatic,
  LunaticComponents,
  type LunaticSource,
} from '@inseefr/lunatic'
import * as custom from '@inseefr/lunatic-dsfr'
import { fr } from '@codegouvfr/react-dsfr'
import { downloadAsJson } from 'utils/downloadAsJson'
import { useNavigate } from '@tanstack/react-router'
import { Welcome } from './CustomPages/Welcome'
import { Navigation } from './Navigation'
import type { StateData, SurveyUnitData } from './type'
import { useEffect, useState } from 'react'
import { Validation } from './CustomPages/Validation'
import { useStromaeNavigation } from './useStromaeNavigation'
import { EndPage } from './CustomPages/EndPage'
import { ValidationModal } from './CustomPages/ValidationModal'
import { assert } from 'tsafe/assert'

export function Orchestrator(props: {
  source: LunaticSource
  surveyUnitData?: SurveyUnitData
  getReferentiel?: (name: string) => Promise<Array<unknown>>
}) {
  const { source, surveyUnitData, getReferentiel } = props
  const navigate = useNavigate()

  const initialCurrentPage = surveyUnitData?.stateData?.currentPage

  const {
    getComponents,
    Provider,
    goPreviousPage: goPrevLunatic,
    goNextPage: goNextLunatic,
    getData,
    isFirstPage,
    isLastPage,
    pageTag,
  } = useLunatic(source, surveyUnitData?.data, {
    // @ts-expect-error need some work on lunatic-dsfr to remove this
    custom,
    activeControls: true,
    getReferentiel,
    initialPage: initialCurrentPage,
  })

  const [validationModalActions] = useState<{
    open?: () => Promise<{ doProceed: boolean }>
  }>({})

  const { currentPage, goNext, goPrevious } = useStromaeNavigation({
    goNextLunatic,
    goPrevLunatic,
    isFirstPage,
    isLastPage,
    initialCurrentPage,
    openValidationModal: () => {
      assert(validationModalActions.open !== undefined)
      return validationModalActions.open()
    },
  })

  const getStateData = (): StateData => {
    switch (currentPage) {
      case 'endPage':
        return { date: Date.now(), currentPage, state: 'VALIDATED' }
      case 'lunaticPage':
        return { date: Date.now(), currentPage: pageTag, state: 'INIT' }
      case 'downloadPage':
        //downloadPage is not really a page, this is only use internally to manage state
        return { date: Date.now(), currentPage: 'endPage', state: 'VALIDATED' }
      case 'validationPage':
      case 'welcomePage':
      default:
        return { date: Date.now(), currentPage, state: 'INIT' }
    }
  }

  function handleDownloadData() {
    downloadAsJson<SurveyUnitData>({
      dataToDownload: {
        data: getData(false),
        stateData: getStateData(),
        personalization: surveyUnitData?.personalization,
      },
    })
  }

  const isDownloadPage = currentPage === 'downloadPage'

  useEffect(() => {
    if (!isDownloadPage) return
    handleDownloadData()
    navigate({ to: '/visualize' })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDownloadPage])

  return (
    <div className={fr.cx('fr-container--fluid', 'fr-mt-1w', 'fr-mb-7w')}>
      <Provider>
        <div className={fr.cx('fr-col-12', 'fr-container')}>
          <Navigation
            handleNextClick={goNext}
            handlePreviousClick={goPrevious}
            handleDownloadData={handleDownloadData}
            currentPage={currentPage}
          >
            {currentPage === 'welcomePage' && <Welcome />}
            {currentPage === 'lunaticPage' && (
              <LunaticComponents
                components={getComponents()}
                wrapper={({ children }) => (
                  <div className={fr.cx('fr-mb-1w')}>{children}</div>
                )}
              />
            )}
            {currentPage === 'validationPage' && <Validation />}
            {currentPage === 'endPage' && <EndPage date={Date.now()} />}
            <ValidationModal actions={validationModalActions} />
          </Navigation>
        </div>
      </Provider>
    </div>
  )
}
