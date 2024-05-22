import React from "react";
import NavbarStyleOne from "@/components/Layouts/NavbarStyleOne";
import PageBannerStyle1 from "@/components/Common/PageBannerStyle1";
import AppDownloadStyle2 from "@/components/Common/AppDownloadStyle2";
import FooterStyleOne from "@/components/Layouts/FooterStyleOne";
import GalleryContent from "@/components/Gallery/GalleryContent";

export default function Gallery() {
  return (
    <>
      <NavbarStyleOne />

      <PageBannerStyle1
        pageTitle="Gallery"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Gallery"
      />

      <GalleryContent />

      <AppDownloadStyle2 />

      <FooterStyleOne />
    </>
  );
}
