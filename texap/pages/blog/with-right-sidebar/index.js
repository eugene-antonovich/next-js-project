import React from "react";
import NavbarStyleOne from "@/components/Layouts/NavbarStyleOne";
import PageBannerStyle1 from "@/components/Common/PageBannerStyle1";
import FooterStyleOne from "@/components/Layouts/FooterStyleOne";
import BlogWithRightSidebar from "@/components/Blog/BlogWithRightSidebar";

export default function BlogRightSidebar() {
  return (
    <>
      <NavbarStyleOne />

      <PageBannerStyle1
        pageTitle="Blog Right Sidebar"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog Right Sidebar"
      />

      <BlogWithRightSidebar />

      <FooterStyleOne />
    </>
  );
}
