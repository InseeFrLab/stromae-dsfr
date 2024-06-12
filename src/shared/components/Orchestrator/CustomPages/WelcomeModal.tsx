import { createModal } from '@codegouvfr/react-dsfr/Modal'
import { declareComponentKeys, useTranslation } from 'i18n'
import { useId, useState } from 'react'

export function WelcomeModal(props: { goBack: () => void }) {
  const { goBack } = props
  const id = useId()
  const { t } = useTranslation({ WelcomeModal })
  const [modal] = useState(() =>
    createModal({
      id: `welcomeModal-${id}`,
      isOpenedByDefault: true,
    })
  )
  return (
    <modal.Component
      title={t('title')}
      buttons={[
        {
          doClosesModal: true, //Default true, clicking a button close the modal.
          children: t('button first page'),
        },
        {
          doClosesModal: true,
          children: t('button go back'),
          onClick: goBack,
        },
      ]}
      concealingBackdrop={true}
    >
      {t('content')}
    </modal.Component>
  )
}

const { i18n } = declareComponentKeys<
  'title' | 'button first page' | 'button go back' | 'content'
>()({ WelcomeModal })

export type I18n = typeof i18n
