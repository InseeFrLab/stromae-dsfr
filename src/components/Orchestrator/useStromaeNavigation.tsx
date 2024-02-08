import { useState } from 'react'
import type { PageType } from './type'
import { assert, type Equals } from 'tsafe/assert'

type Params = {
  isFirstPage: boolean
  isLastPage: boolean
  initialCurrentPage: string | undefined
  goNextLunatic: () => void
  goPrevLunatic: () => void
  openValidationModal: () => Promise<{ doProceed: boolean }>
}

export function useStromaeNavigation({
  isFirstPage,
  isLastPage,
  goNextLunatic,
  goPrevLunatic,
  initialCurrentPage,
  openValidationModal,
}: Params) {
  const getInitialCurrentPage = () => {
    switch (initialCurrentPage) {
      case undefined:
        return 'welcomePage'
      case 'welcomePage':
      case 'validationPage':
      case 'endPage':
        return initialCurrentPage
      default:
        //string value (pageTag in fact)
        return 'lunaticPage'
    }
  }

  const [currentPage, setCurrentPage] = useState<PageType>(
    getInitialCurrentPage //Avoiding recreating the initialState https://react.dev/reference/react/useState#avoiding-recreating-the-initial-state
  )

  const goNext = () => {
    switch (currentPage) {
      case 'validationPage':
        //return setCurrentPage('validationModal')
        openValidationModal().then(({ doProceed }) => {
          if (!doProceed) {
            return
          }
          setCurrentPage('endPage')
        })
        return
      case 'welcomePage':
        return setCurrentPage('lunaticPage')
      case 'lunaticPage':
        return isLastPage ? setCurrentPage('validationPage') : goNextLunatic()
      case 'endPage':
        return setCurrentPage('downloadPage')
      case 'downloadPage':
        return
    }
    assert<Equals<typeof currentPage, never>>(false)
  }
  const goPrevious = () => {
    switch (currentPage) {
      case 'validationPage':
        return setCurrentPage('lunaticPage')
      case 'lunaticPage':
        return isFirstPage ? setCurrentPage('welcomePage') : goPrevLunatic()
      case 'downloadPage':
      case 'endPage':
      case 'welcomePage':
        return
    }
    assert<Equals<typeof currentPage, never>>(false)
  }

  return { goNext, goPrevious, currentPage: currentPage }
}
