import { createBrowserRouter } from "react-router-dom"
import { Layout } from "./Layout";
import { ProtectedPage } from "../pages/ProtectedPage";
import { PublicPage } from "../pages/PublicPage";
import { prOidc } from "oidc";

export const router = createBrowserRouter(
  [
    {
      path: '/',
      Component: Layout,
      children: [
        {
          path: 'protected',
          element: <ProtectedPage />,
          loader: protectedRouteLoader
        },
        {
          index: true,
          Component: PublicPage
        },
        {
          path: 'visualize',
          element: <div>Visualize</div>,
        },
      ]
    }], { basename: "/v3" });

async function protectedRouteLoader() {

  const oidc = await prOidc;

  if (oidc.isUserLoggedIn) {
    return;
  }

  await oidc.login({
    doesCurrentHrefRequiresAuth: true
  });

}
