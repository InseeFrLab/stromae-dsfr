import { headerFooterDisplayItem } from '@codegouvfr/react-dsfr/Display'
import { Header as DsfrHeader } from '@codegouvfr/react-dsfr/Header'
import { useMatchRoute, useSearch } from '@tanstack/react-router'
import logoInsee from 'assets/logo-insee.png'
import { declareComponentKeys, useTranslation } from 'i18n'
import { useOidc } from 'oidc'
import { collectPath } from 'pages/Collect/route'
import { executePreLogoutActions } from 'shared/hooks/prelogout'

export function Header() {
  const { t } = useTranslation({ Header })
  const { isUserLoggedIn, logout } = useOidc()

  /**
   * There is an issue with this part of code, search is not will type inferred with isCollectRoute, waiting for better solution
   */
  const matchRoute = useMatchRoute()
  const isCollectRoute = !!matchRoute({ to: collectPath })
  const search = useSearch({ strict: false })

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
        title: t('home link title'),
      }}
      quickAccessItems={[
        headerFooterDisplayItem,
        {
          iconId: 'fr-icon-mail-fill',
          linkProps: {
            href: collectPath
              ? `${import.meta.env.VITE_PORTAIL_URL}${(search as any)['pathAssistance'] ?? ''}`
              : '',
            disabled: isCollectRoute,
          },
          text: t('quick access support'),
        },
        ...(!isUserLoggedIn
          ? []
          : [
              {
                iconId: 'ri-account-box-line',
                buttonProps: {
                  onClick: async () => {
                    await executePreLogoutActions()
                    logout({
                      redirectTo: 'specific url',
                      url: `${import.meta.env.VITE_PORTAIL_URL}${(search as any)['pathLogout'] ?? ''}`,
                    })
                  },
                  disabled: !isCollectRoute,
                },
                text: t('quick access logout'),
              } as const,
            ]),
      ]}
      serviceTagline={t('service tag line')}
      serviceTitle={t('service title')}
      operatorLogo={{
        alt: t('operator logo alt'),
        imgUrl: logoInsee,
        orientation: 'vertical',
      }}
    />
  )
}

const { i18n } = declareComponentKeys<
  | 'home link title'
  | 'quick access support'
  | 'quick access logout'
  | 'service tag line'
  | { K: 'service title'; R: JSX.Element }
  | 'operator logo alt'
>()({ Header })

export type I18n = typeof i18n
