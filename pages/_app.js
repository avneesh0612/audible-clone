import "styles/globals.css";
import "styles/nprogress.css";
import nProgress from "nprogress";
import Router, { useRouter } from "next/router";
import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";

// Progress bar
Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeComplete", nProgress.done);
Router.events.on("routeChangeError", nProgress.done);
const publicPages = ["/", "/sign-in/[[...index]]", "/sign-up/[[...index]]"];

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <ClerkProvider
      frontendApi={process.env.NEXT_PUBLIC_CLERK_FRONTEND_API}
      navigate={(to) => router.push(to)}
    >
      {publicPages.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <>
          <SignedIn>
            <Component {...pageProps} />
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </>
      )}
    </ClerkProvider>
  );
}

export default MyApp;
