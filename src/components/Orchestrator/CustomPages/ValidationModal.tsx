import { createModal } from '@codegouvfr/react-dsfr/Modal'
import { useState, useEffect, useId } from 'react'
import { assert } from 'tsafe/assert'

export type Props = {
  actions: {
    open?: () => Promise<{
      doProceed: boolean
    }>
  }
}
export function ValidationModal(props: Props) {
  const { actions } = props

  const id = useId()

  const [modal] = useState(() =>
    createModal({
      id: `validationModal-${id}`,
      isOpenedByDefault: false,
    })
  )

  const [openState, setOpenState] = useState<
    | {
        resolve: (params: { doProceed: boolean }) => void
      }
    | undefined
  >(undefined)

  useEffect(() => {
    actions.open = () =>
      new Promise<{ doProceed: boolean }>((resolve) => {
        setOpenState({
          resolve,
        })
        modal.open()
      })
  }, [])

  return (
    <modal.Component
      title="Voulez vous envoyer vos réponses"
      buttons={[
        {
          doClosesModal: true, //Default true, clicking a button close the modal.
          children: 'Annuler',
        },
        {
          doClosesModal: true,
          children: 'Envoyer mes réponses',
          onClick: () => {
            assert(openState !== undefined)

            openState.resolve({
              doProceed: true,
            })

            setOpenState(undefined)
          },
        },
      ]}
      concealingBackdrop={true}
    >
      Vous êtes sur le point d'envoyer vos réponses au questionnaire. Après
      envoi, vous ne pourrez plus modifier vos réponses
    </modal.Component>
  )
}
