import React from "react";
import NavbarStyleOne from "@/components/Layouts/NavbarStyleOne";
import PageBannerStyle1 from "@/components/Common/PageBannerStyle1";
import FooterStyleOne from "@/components/Layouts/FooterStyleOne";
import BlogGridPost from "@/components/Blog/BlogGridPost";

export default function BlogGrid() {
  return (
    <>
      <NavbarStyleOne />

      <PageBannerStyle1
        pageTitle="Blog Grid"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog Grid"
      />

      <BlogGridPost />

      <FooterStyleOne />
    </>
  );
}
