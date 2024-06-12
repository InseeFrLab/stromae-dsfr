import { fr } from '@codegouvfr/react-dsfr'
import { Footer as DSFRFooter } from '@codegouvfr/react-dsfr/Footer'
import logoInsee from 'assets/logo-insee.png'
import { declareComponentKeys, useTranslation } from 'i18n'
import { NavigationAssistancePage } from 'pages/NavigationAssistance/NavigationAssistancePage'
import { SecurityPage } from 'pages/Security/SecurityPage'

export function Footer() {
  const { t } = useTranslation({
    Footer,
  })
  const { t: t_NavigationAssistancePage } = useTranslation({
    NavigationAssistancePage,
  })

  const { t: t_SecurityPage } = useTranslation({
    SecurityPage,
  })

  return (
    <DSFRFooter
      accessibility="partially compliant"
      contentDescription={t('footer content description')}
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
        alt: t('footer operator logo alt'),
        imgUrl: logoInsee,
        orientation: 'vertical',
      }}
      bottomItems={[
        {
          text: t_SecurityPage('security title'),
          linkProps: {
            to: '/securite',
          },
        },
        {
          text: t_NavigationAssistancePage('navigation assistance title'),
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
  | 'footer content description'
  | 'footer operator logo alt'
  | { K: 'license'; R: JSX.Element }
>()({ Footer })

export type I18n = typeof i18n
