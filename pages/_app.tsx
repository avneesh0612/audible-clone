import { ClerkProvider } from "@clerk/clerk-react";
import { NextSeo } from "next-seo";
import { AppProps } from "next/dist/shared/lib/router/router";
import Head from "next/head";
import { useRouter } from "next/router";
import NextNProgress from "nextjs-progressbar";
import "../styles/globals.css";

const clerkFrontendApi = process.env.NEXT_PUBLIC_CLERK_FRONTEND_API;

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  return (
    <ClerkProvider
      frontendApi={clerkFrontendApi}
      navigate={(to) => router.push(to)}
    >
      <NextSeo
        title="Audible India | Free Audiobook with Trial | Audible.in"
        description="This is an audible clone"
        canonical="https://audible.vercel.app/"
        openGraph={{
          url: "https://audible.vercel.app/",
          title: "Audible clone",
          description: "Audible clone",
          images: [
            {
              url: "/icon.jpg",
              width: 512,
              height: 512,
              alt: "Auible",
            },
          ],
          site_name: "Audible",
        }}
      />
      <NextNProgress height={6} color="#F6981C" />
      <Component {...pageProps} />
    </ClerkProvider>
  );
};

export default MyApp;
