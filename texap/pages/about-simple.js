import React from "react";
import NavbarStyleOne from "@/components/Layouts/NavbarStyleOne";
import PageBannerStyle1 from "@/components/Common/PageBannerStyle1";
import FunfactStyleOne from "@/components/Common/FunfactStyleOne";
import AppProgressStyle2 from "@/components/Common/AppProgressStyle2";
import SoftwareIntegrationsTwo from "@/components/Common/SoftwareIntegrationsTwo";
import TeamMemberStyle1 from "@/components/Common/TeamMemberStyle1";
import PartnerStyle3 from "@/components/Common/PartnerStyle3";
import ClientFeedbackStyle1 from "@/components/Feedbacks/ClientFeedbackStyle1";
import FooterStyleOne from "@/components/Layouts/FooterStyleOne";
import AboutUsContent2 from "@/components/AboutUs/AboutUsContent2";
import TotalUserInThisWorld from "@/components/AboutUs/TotalUserInThisWorld";

export default function AboutSimple() {
  return (
    <>
      <NavbarStyleOne />

      <PageBannerStyle1
        pageTitle="About Us"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About Us"
      />

      <AboutUsContent2 />

      <FunfactStyleOne />

      <AppProgressStyle2 />

      <TotalUserInThisWorld />

      <SoftwareIntegrationsTwo />

      <TeamMemberStyle1 />

      <PartnerStyle3 />

      <ClientFeedbackStyle1 />

      <FooterStyleOne />
    </>
  );
}
