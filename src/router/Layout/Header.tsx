import { useOidc } from 'oidc'
import { Header as DsfrHeader } from '@codegouvfr/react-dsfr/Header'
import logoInsee from 'assets/logo-insee.png'
import { headerFooterDisplayItem } from '@codegouvfr/react-dsfr/Display'
import { Badge } from '@codegouvfr/react-dsfr/Badge'

export function Header() {
  const { isUserLoggedIn, logout } = useOidc()

  return (
    <DsfrHeader
      brandTop={
        <>
          République
          <br />
          Française
        </>
      }
      homeLinkProps={{
        to: '/',
        title:
          "Accueil - Nom de l’entité (ministère, secrétariat d'état, gouvernement)",
      }}
      quickAccessItems={[
        headerFooterDisplayItem,
        {
          iconId: 'fr-icon-mail-fill',
          linkProps: {
            href: 'mailto:mail@assistance.fr',
          },
          text: "Contacter l'assistance",
        },
        isUserLoggedIn ?? {
          buttonProps: {
            onClick: logout,
          },
          iconId: 'ri-account-box-line',
          text: 'Se déconnecter',
        },
      ]}
      serviceTagline="Application de collecte internet"
      serviceTitle={
        <>
          Filière d'enquête{' '}
          <Badge as="span" noIcon severity="success">
            Beta
          </Badge>
        </>
      }
      operatorLogo={{
        alt: 'Insee, mesurer pour comprendre',
        imgUrl: logoInsee,
        orientation: 'vertical',
      }}
    />
  )
}
