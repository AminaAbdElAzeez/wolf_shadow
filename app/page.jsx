"use client"

import Image from "next/image";
import Platform from "./[locale]/components/platform/Platform";
import Statistics from "./[locale]/components/statistics/Statistics";
import Slider from "./[locale]/components/slider/slider";
import AboutUs from "./[locale]/components/aboutUs/AboutUs";
import ChooseUs from "./[locale]/components/chooseUs/ChooseUs";
import Offer from "./[locale]/components/offer/Offer";
import OurServices from "./[locale]/components/ourServices/OurServices";
import ProfileSlider from "./[locale]/components/profileSlider/profileSlider";
import ContactUs from "./[locale]/components/contactUs/ContactUs";
// import styles from "./page.module.css";

export default function Home() {
  return (
    <section className="home">
      <Platform />
      <Statistics />
      <Slider />
      <AboutUs />
      <ChooseUs />
      <Offer />
      <OurServices />
      <ProfileSlider />
      <ContactUs />
    </section>
  );
}
