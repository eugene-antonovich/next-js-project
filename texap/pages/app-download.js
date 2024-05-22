import React from "react";
import NavbarStyleOne from "@/components/Layouts/NavbarStyleOne";
import PageBannerStyle1 from "@/components/Common/PageBannerStyle1";
import AppDownloadStyle1 from "@/components/Common/AppDownloadStyle1";
import AppDownloadStyle2 from "@/components/Common/AppDownloadStyle2";
import PartnerStyle3 from "@/components/Common/PartnerStyle3";
import FooterStyleOne from "@/components/Layouts/FooterStyleOne";

export default function AppDownload() {
  return (
    <>
      <NavbarStyleOne />

      <PageBannerStyle1
        pageTitle="App Download"
        homePageUrl="/"
        homePageText="Home"
        activePageText="App Download"
      />

      <div className="pt-100">
        <AppDownloadStyle2 />
      </div>

      <div className="pb-100">
        <AppDownloadStyle1 />
      </div>

      <PartnerStyle3 />

      <FooterStyleOne />
    </>
  );
}
