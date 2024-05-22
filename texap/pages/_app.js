import React from "react";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import "@/styles/bootstrap.min.css";
import "@/styles/fontawesome.min.css";
import "@/styles/remixicon.css";
import "@/styles/animate.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "react-18-image-lightbox/style.css";
import "react-tabs/style/react-tabs.css";
import "swiper/css";
import "swiper/css/bundle";

// Global CSS
import "@/styles/styles.css";

import Head from "next/head";
import GoTop from "../components/Layouts/GoTop";
import Preloader from "../components/Layouts/Preloader";

export default function App({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init();
  }, []);

  // Preloader
  const [loader, setLoader] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => setLoader(false), 1500);
  }, []);

  return (
    <>
      <Head>
        {/* Required meta tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Texap - React Next Software App & SaaS Startup Template</title>
      </Head>

      <Component {...pageProps} />

      {loader ? <Preloader /> : null}

      {/* Go Top Button */}
      <GoTop scrollStepInPx="50" delayInMs="10.50" />
    </>
  );
}
