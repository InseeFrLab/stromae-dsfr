/// <reference types="vite-envs/client" />

type ImportMetaEnv = {
  // Auto-generated by `npx vite-envs update-types` and hot-reloaded by the `vite-env` plugin
  VITE_OIDC_ISSUER: string
  VITE_OIDC_CLIENT_ID: string
  VITE_PORTAIL_URL: string
  BASE_URL: string
  MODE: string
  DEV: boolean
  PROD: boolean
  APP_VERSION: string
  LUNATIC_VERSION: string
  // @user-defined-start
  /*
   * Here you can define your own special variables
   * that would be available on `import.meta.env` but
   * that vite-envs does not know about.
   * This section will be preserved thanks to the special comments.
   * Example:
   */
  SSR: boolean
  // @user-defined-end
}

interface ImportMeta {
  // Auto-generated by `npx vite-envs update-types`

  url: string

  readonly hot?: import('vite-envs/types/hot').ViteHotContext

  readonly env: ImportMetaEnv

  glob: import('vite-envs/types/importGlob').ImportGlobFunction
}
