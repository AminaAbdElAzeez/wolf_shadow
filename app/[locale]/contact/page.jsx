import React from "react";
import TopContact from "../components/topContact/topContact";
import ContactInfo from "../components/contactsInfo/contactsInfo";
import GoogleMaps from "../components/googleMaps/googleMaps";
import ContactUs from "../components/contactUs/ContactUs";
import Sent from "../components/sent/sent";
import Serve from "../components/serve/serve";

function Contact() {
  return (
    <section>
      <TopContact />
      <ContactInfo />
      <GoogleMaps />
      <ContactUs />
      <Sent />
      <Serve />
    </section>
  );
}

export default Contact;
