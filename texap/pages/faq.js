import React from "react";
import NavbarStyleOne from "@/components/Layouts/NavbarStyleOne";
import PageBannerStyle1 from "@/components/Common/PageBannerStyle1";
import FooterStyleOne from "@/components/Layouts/FooterStyleOne";
import FaqContent from "@/components/Faq/FaqContent";
import ContactInfo from "@/components/Faq/ContactInfo";

export default function FAQ() {
  return (
    <>
      <NavbarStyleOne />

      <PageBannerStyle1
        pageTitle="Frequently Asked Questions"
        homePageUrl="/"
        homePageText="Home"
        activePageText="FAQ"
      />

      <FaqContent />

      <ContactInfo />

      <FooterStyleOne />
    </>
  );
}
