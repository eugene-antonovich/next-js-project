import React from "react";
import NavbarStyleOne from "@/components/Layouts/NavbarStyleOne";
import PageBannerStyle1 from "@/components/Common/PageBannerStyle1";
import FooterStyleOne from "@/components/Layouts/FooterStyleOne";
import BlogWithLeftSidebar from "@/components/Blog/BlogWithLeftSidebar";

export default function BlogLeftSidebar() {
  return (
    <>
      <NavbarStyleOne />

      <PageBannerStyle1
        pageTitle="Blog Left Sidebar"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog Left Sidebar"
      />

      <BlogWithLeftSidebar />

      <FooterStyleOne />
    </>
  );
}
