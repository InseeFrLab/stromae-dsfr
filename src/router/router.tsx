import { useIsDark } from '@codegouvfr/react-dsfr/useIsDark'
import type { QueryClient } from '@tanstack/react-query'
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import { accessibilityRoute } from 'pages/Accessibility/route'
import { collectRoute } from 'pages/Collect/route'
import { legalsRoute } from 'pages/Legals/route'
import { navigationAssistanceRoute } from 'pages/NavigationAssistance/route'
import { reviewRoute } from 'pages/Review/route'
import { securityRoute } from 'pages/Security/route'
import { siteMapRoute } from 'pages/SiteMap/route'
import { visualizeRoute } from 'pages/Visualize/route'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ErrorComponent } from 'shared/components/Error/ErrorComponent'
import { Footer } from 'shared/components/Layout/Footer'
import { Header } from 'shared/components/Layout/Header'
import { NotFoundError } from 'shared/error/notFoundError'

export const rootRoute = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  component: RootComponent,
  notFoundComponent: () => (
    <ErrorComponent error={new NotFoundError()} redirectTo="home" />
  ),
})

// eslint-disable-next-line react-refresh/only-export-components
function RootComponent() {
  const { isDark } = useIsDark()
  return (
    <div
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <Header />
      <main id="main" role="main">
        <ToastContainer
          position="top-right"
          theme={isDark ? 'dark' : 'light'}
          stacked
        />
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export const routeTree = rootRoute.addChildren([
  ...(import.meta.env.VITE_VISUALIZE_DISABLED === 'true'
    ? []
    : [visualizeRoute]),
  accessibilityRoute,
  securityRoute,
  siteMapRoute,
  legalsRoute,
  navigationAssistanceRoute,
  collectRoute,
  reviewRoute,
])
