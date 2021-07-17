import "styles/globals.css";
import "styles/nprogress.css";
import nProgress from "nprogress";
import Router from "next/router";
import { Provider } from "next-auth/client";

// Progress bar
Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeComplete", nProgress.done);
Router.events.on("routeChangeError", nProgress.done);

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
