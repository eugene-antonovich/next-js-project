import React from "react";
import NavbarStyleOne from "@/components/Layouts/NavbarStyleOne";
import MainBanner from "@/components/HomeDemo4/MainBanner";
import PartnerStyle2 from "@/components/Common/PartnerStyle2";
import IntroVideo from "@/components/HomeDemo4/IntroVideo";
import Features from "@/components/HomeDemo4/Features";
import BestAppEver from "@/components/HomeDemo4/BestAppEver";
import KeyFeatures from "@/components/HomeDemo4/KeyFeatures";
import AppProgressStyle3 from "@/components/Common/AppProgressStyle3";
import AppDownloadStyle3 from "@/components/Common/AppDownloadStyle3";
import AppScreenshotsStyle4 from "@/components/AppScreenshots/AppScreenshotsStyle4";
import SoftwareIntegrationsThree from "@/components/Common/SoftwareIntegrationsThree";
import PricingPlanStyle4 from "@/components/PricingPlan/PricingPlanStyle4";
import ClientFeedbackStyle4 from "@/components/Feedbacks/ClientFeedbackStyle4";
import FreeTrialStyle2 from "@/components/Common/FreeTrialStyle2";
import FooterStyleTwo from "@/components/Layouts/FooterStyleTwo";

export default function Home4() {
  return (
    <>
      <NavbarStyleOne />

      <MainBanner />

      <PartnerStyle2 />

      <IntroVideo />

      <Features />

      <BestAppEver />

      <KeyFeatures />

      <AppProgressStyle3 />

      <AppDownloadStyle3 />

      <AppScreenshotsStyle4 />

      <SoftwareIntegrationsThree />

      <PricingPlanStyle4 />

      <ClientFeedbackStyle4 />

      <div className="ptb-100">
        <FreeTrialStyle2 />
      </div>

      <FooterStyleTwo />
    </>
  );
}
