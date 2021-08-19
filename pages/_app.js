import "tailwindcss/tailwind.css";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../libs/gtag";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          name="google-site-verification"
          content="AAI7Dr6aPAFwLpXo8WTM-6XIu8cxGnlrmcgqJWqzV6c"
        />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
