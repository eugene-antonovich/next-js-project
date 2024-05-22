import React from "react";
import NavbarStyleTwo from "@/components/Layouts/NavbarStyleTwo";
import PageBannerStyle2 from "@/components/Common/PageBannerStyle2";
import AppProgressStyle4 from "@/components/Common/AppProgressStyle4";
import AppDownloadStyle1 from "@/components/Common/AppDownloadStyle1";
import FunfactStyleTwo from "@/components/Common/FunfactStyleTwo";
import ClientFeedbackStyle5 from "@/components/Feedbacks/ClientFeedbackStyle5";
import IntroVideo from "@/components/Common/IntroVideo";
import TeamMemberStyle2 from "@/components/Common/TeamMemberStyle2";
import SoftwareIntegrations from "@/components/Common/SoftwareIntegrations";
import PartnerStyle3 from "@/components/Common/PartnerStyle3";
import FooterStyleTwo from "@/components/Layouts/FooterStyleTwo";
import AboutUsContent from "@/components/AboutUs/AboutUsContent";

export default function AboutModern() {
  return (
    <>
      <NavbarStyleTwo />

      <PageBannerStyle2
        pageTitle="About Us"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About Us"
      />

      <AboutUsContent />

      <AppProgressStyle4 />

      <AppDownloadStyle1 />

      <FunfactStyleTwo />

      <ClientFeedbackStyle5 />

      <div className="pt-100">
        <IntroVideo />
      </div>

      <TeamMemberStyle2 />

      <PartnerStyle3 />

      <SoftwareIntegrations />

      <FooterStyleTwo />
    </>
  );
}
