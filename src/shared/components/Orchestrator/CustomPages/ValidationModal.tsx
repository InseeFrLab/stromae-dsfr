import { createModal } from '@codegouvfr/react-dsfr/Modal'
import { useState, useEffect, useId, type MutableRefObject } from 'react'
import { assert } from 'tsafe/assert'

export type Props = {
  actionsRef: MutableRefObject<{
    open?: () => Promise<void>
  }>
}
export function ValidationModal({ actionsRef }: Props) {
  const id = useId()

  const [modal] = useState(() =>
    createModal({
      id: `validationModal-${id}`,
      isOpenedByDefault: false,
    })
  )

  const [openState, setOpenState] = useState<
    | {
        resolve: () => void
      }
    | undefined
  >(undefined)

  useEffect(() => {
    actionsRef.current.open = () =>
      new Promise<void>((resolve) => {
        setOpenState({ resolve })
        modal.open()
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            openState.resolve()
            setOpenState(undefined)
          },
        },
      ]}
      concealingBackdrop={true}
    >
      Vous êtes sur le point d'envoyer vos réponses au questionnaire. Après
      envoi, vous ne pourrez plus modifier vos réponses.
    </modal.Component>
  )
}