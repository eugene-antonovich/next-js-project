import React from "react";
import NavbarStyleOne from "@/components/Layouts/NavbarStyleOne";
import PageBannerStyle1 from "@/components/Common/PageBannerStyle1";
import ContactForm from "@/components/Contact/ContactForm";
import ContactInfo from "@/components/Contact/ContactInfo";
import FooterStyleOne from "@/components/Layouts/FooterStyleOne";

export default function Contact() {
  return (
    <>
      <NavbarStyleOne />

      <PageBannerStyle1
        pageTitle="Contact Us"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Contact Us"
      />

      <ContactForm />

      <ContactInfo />

      <FooterStyleOne />
    </>
  );
}
