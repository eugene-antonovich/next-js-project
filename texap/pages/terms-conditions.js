import React from "react";
import NavbarStyleOne from "@/components/Layouts/NavbarStyleOne";
import PageBannerStyle1 from "@/components/Common/PageBannerStyle1";
import AppDownloadStyle2 from "@/components/Common/AppDownloadStyle2";
import FooterStyleOne from "@/components/Layouts/FooterStyleOne";
import TermsConditionsContent from "@/components/TermsConditions/TermsConditionsContent";

export default function TermsConditions() {
  return (
    <>
      <NavbarStyleOne />

      <PageBannerStyle1
        pageTitle="Terms & Conditions"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Terms & Conditions"
      />

      <TermsConditionsContent />

      <AppDownloadStyle2 />

      <FooterStyleOne />
    </>
  );
}
