import React from "react";
import NavbarStyleOne from "@/components/Layouts/NavbarStyleOne";
import PageBannerStyle1 from "@/components/Common/PageBannerStyle1";
import AppDownloadStyle2 from "@/components/Common/AppDownloadStyle2";
import FooterStyleOne from "@/components/Layouts/FooterStyleOne";
import HowItWorksContent from "@/components/HowItWorks/HowItWorksContent";

export default function HowItWorks() {
  return (
    <>
      <NavbarStyleOne />

      <PageBannerStyle1
        pageTitle="How It Works"
        homePageUrl="/"
        homePageText="Home"
        activePageText="How It Works"
      />

      <HowItWorksContent />

      <AppDownloadStyle2 />

      <FooterStyleOne />
    </>
  );
}
