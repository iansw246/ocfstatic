import { type GatsbyBrowser } from "gatsby"
import { ReactKeycloakProvider } from "@react-keycloak/web"
import keycloak from "~/utils/keycloak"
import { SWRConfig, SWRConfiguration } from "swr"
import "~/styles/inter.css"

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({
  element,
}) => {
  const options: SWRConfiguration = {
    fetcher: (url: string) => {
      if (process.env.NODE_ENV === "production" && url.startsWith("/api")) {
        url = "https://api.ocf.berkeley.edu" + url.replace("/api", "")
      }
      return fetch(url).then((r) => r.json())
    },
    refreshInterval: 15 * 1000, // 15 seconds
  }

  return (
    <SWRConfig value={options}>
      <ReactKeycloakProvider
        authClient={keycloak}
        initOptions={{
          promiseType: "native",
          onLoad: "check-sso",
          silentCheckSsoRedirectUri:
            window.location.origin + "/silent-check-sso.html",
        }}
      >
        {element}
      </ReactKeycloakProvider>
    </SWRConfig>
  )
}
