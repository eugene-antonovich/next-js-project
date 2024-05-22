import React from "react";
import NavbarStyleOne from "@/components/Layouts/NavbarStyleOne";
import PageBannerStyle1 from "@/components/Common/PageBannerStyle1";
import PartnerStyle3 from "@/components/Common/PartnerStyle3";
import FooterStyleOne from "@/components/Layouts/FooterStyleOne";
import TeamCard from "@/components/Team/TeamCard";

export default function Team() {
  return (
    <>
      <NavbarStyleOne />

      <PageBannerStyle1
        pageTitle="Team"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Team"
      />

      <TeamCard />

      <PartnerStyle3 />

      <FooterStyleOne />
    </>
  );
}
