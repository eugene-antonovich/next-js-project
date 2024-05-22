import React from "react";
import NavbarStyleTwo from "@/components/Layouts/NavbarStyleTwo";
import PageBannerStyle2 from "@/components/Common/PageBannerStyle2";
import AppDownloadStyle1 from "@/components/Common/AppDownloadStyle1";
import FooterStyleTwo from "@/components/Layouts/FooterStyleTwo";
import TeamCard2 from "@/components/Team/TeamCard2";

export default function Team2() {
  return (
    <>
      <NavbarStyleTwo />

      <PageBannerStyle2
        pageTitle="Meet With Our Team Member"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Team"
      />

      <TeamCard2 />

      <div className="pb-100">
        <AppDownloadStyle1 />
      </div>

      <FooterStyleTwo />
    </>
  );
}
