import { createOidcProvider } from "oidc-spa/react";

export const { OidcProvider, prOidc } = createOidcProvider({
  clientId: import.meta.env.VITE_OIDC_CLIENT_ID, 
  issuerUri: import.meta.env.VITE_OIDC_ISSUER, 
  publicUrl: import.meta.env.BASE_URL
})
