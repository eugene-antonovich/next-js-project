import React from "react";
import NavbarStyleOne from "@/components/Layouts/NavbarStyleOne";
import PageBannerStyle1 from "@/components/Common/PageBannerStyle1";
import AppDownloadStyle2 from "@/components/Common/AppDownloadStyle2";
import FooterStyleOne from "@/components/Layouts/FooterStyleOne";
import PrivacyPolicyContent from "@/components/PrivacyPolicy/PrivacyPolicyContent";

export default function PrivacyPolicy() {
  return (
    <>
      <NavbarStyleOne />

      <PageBannerStyle1
        pageTitle="Privacy Policy"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Privacy Policy"
      />

      <PrivacyPolicyContent />

      <AppDownloadStyle2 />

      <FooterStyleOne />
    </>
  );
}
