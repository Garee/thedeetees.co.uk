import type { AppProps } from "next/app";
import "../styles/globals.scss";

// https://nextjs.org/docs/advanced-features/custom-app

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
