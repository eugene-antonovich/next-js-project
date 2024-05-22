import React from "react";
import NavbarStyleThree from "@/components/Layouts/NavbarStyleThree";
import PageBannerStyle3 from "@/components/Common/PageBannerStyle3";
import AppDownloadStyle3 from "@/components/Common/AppDownloadStyle3";
import FooterStyleOne from "@/components/Layouts/FooterStyleOne";
import FeaturesCardStyle2 from "@/components/Features/FeaturesCardStyle2";

export default function Features2() {
  return (
    <>
      <NavbarStyleThree />

      <PageBannerStyle3
        pageTitle="Features"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Features"
      />

      <FeaturesCardStyle2 />

      <AppDownloadStyle3 />

      <FooterStyleOne />
    </>
  );
}
