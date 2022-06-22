import React from "react";
import Head from "next/head";
import { ThemeProvider } from "theme-ui";
import Router, { AppProps } from "next/dist/shared/lib/router/router";
import dynamic from "next/dynamic";

// import "nprogress/nprogress.css" //styles of nprogress
// import "normalize.css/normalize.css"
import "@solana/wallet-adapter-react-ui/styles.css";

// @ts-ignore
import withGA from "next-ga";

import defaultTheme from "../styles/theme";

const WalletProvider = dynamic(
  () => import("../components/WalletProvider/WalletProvider"),
  {
    ssr: false,
  }
);

function App(props: AppProps) {
  const { Component, pageProps } = props;

  // const [colorMode, setColorMode] = useColorMode()

  return (
    <ThemeProvider theme={defaultTheme}>
      <Head>
        {/** Load font styles directly on the document to prevent flashes */}
        <link href="/fonts/fonts.css" rel="stylesheet" />
        <title>Nose Age - Sniffing Station</title>
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="%PUBLIC_URL%/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="456 Noses sniffing for other body parts for the ultimate reunion into a single 3D metaverse-ready body."
        />

        <meta property="og:url" content="https://noseagenft.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Nose Age - Sniffing Station" />
        <meta
          property="og:description"
          content="456 Noses sniffing for other body parts for the ultimate reunion into a single 3D metaverse-ready body."
        />
        <meta
          property="og:image"
          content="https://user-images.githubusercontent.com/1735634/169247573-23b237b6-be4b-4de2-b49c-e25b2e8b192f.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="noseagenft.com" />
        <meta property="twitter:url" content="https://noseagenft.com/" />
        <meta name="twitter:title" content="Nose Age - Sniffing Station" />
        <meta
          name="twitter:description"
          content="456 Noses sniffing for other body parts for the ultimate reunion into a single 3D metaverse-ready body."
        />
        <meta
          name="twitter:image"
          content="https://user-images.githubusercontent.com/1735634/169247573-23b237b6-be4b-4de2-b49c-e25b2e8b192f.png"
        />
      </Head>

      <WalletProvider>
        <Component {...pageProps} />
      </WalletProvider>
    </ThemeProvider>
  );
}

export default withGA(process.env.NEXT_PUBLIC_GA_ID, Router)(App);
