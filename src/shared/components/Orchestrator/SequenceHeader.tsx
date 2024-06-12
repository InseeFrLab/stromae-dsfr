import { fr } from '@codegouvfr/react-dsfr'
import { declareComponentKeys, useTranslation } from 'i18n'
import type { LunaticOverview } from './utils/lunaticType'

type SequenceHeaderProps = {
  pagination: 'question' | 'sequence'
  overview: LunaticOverview
}

export function SequenceHeader(props: SequenceHeaderProps) {
  const { overview, pagination } = props

  const { t } = useTranslation('SequenceHeader')
  const currentSequenceIndex = overview.findIndex(
    (sequence) => sequence.current
  )

  if (currentSequenceIndex < 0) return null

  const currentSequence = overview[currentSequenceIndex]

  const stepCount = overview.length
  const currentStep = currentSequenceIndex + 1 //overview is sorted and index starts at 0

  if (pagination === 'question')
    return (
      <div>
        <h2 className={fr.cx('fr-stepper__title')}>{currentSequence.label}</h2>
      </div>
    )

  return (
    <div className={fr.cx('fr-stepper')}>
      <h2 className={fr.cx('fr-stepper__title')}>{currentSequence.label}</h2>
      <p>{currentSequence.description}</p>
      <span className={fr.cx('fr-stepper__state')}>
        {t('stepper state', { currentStep, stepCount })}
      </span>
      <div
        className={fr.cx('fr-stepper__steps')}
        data-fr-current-step={currentStep}
        data-fr-steps={stepCount}
      ></div>
    </div>
  )
}

const { i18n } = declareComponentKeys<{
  K: 'stepper state'
  P: { currentStep: number; stepCount: number }
  R: string
}>()({ SequenceHeader })

export type I18n = typeof i18n
