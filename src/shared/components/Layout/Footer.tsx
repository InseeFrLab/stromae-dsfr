import { fr } from '@codegouvfr/react-dsfr'
import { Footer as DSFRFooter } from '@codegouvfr/react-dsfr/Footer'
import logoInsee from 'assets/logo-insee.png'
import { declareComponentKeys, useTranslation } from 'i18n'

export function Footer() {
  const { t } = useTranslation('Footer')
  return (
    <DSFRFooter
      accessibility="partially compliant"
      contentDescription={t('content description')}
      license={t('license')}
      websiteMapLinkProps={{
        to: '/plan-du-site',
      }}
      accessibilityLinkProps={{
        to: '/accessibilite',
      }}
      termsLinkProps={{
        to: '/mentions-legales',
      }}
      operatorLogo={{
        alt: t('operator logo alt'),
        imgUrl: logoInsee,
        orientation: 'vertical',
      }}
      bottomItems={[
        {
          text: 'Sécurité',
          linkProps: {
            to: '/securite',
          },
        },
        {
          text: 'Aide à la navigation',
          linkProps: {
            to: '/aide-a-la-navigation',
          },
        },
        <span className={fr.cx('fr-footer__bottom-link')}>
          Stromae : {import.meta.env.APP_VERSION} | Lunatic :{' '}
          {import.meta.env.LUNATIC_VERSION.replace('^', '')}
        </span>,
      ]}
    />
  )
}

const { i18n } = declareComponentKeys<
  'content description' | 'operator logo alt' | { K: 'license'; R: JSX.Element }
>()('Footer')

export type I18n = typeof i18n
