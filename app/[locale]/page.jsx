"use client"
import Image from "next/image";
// import styles from "./page.module.css";
import Statistics from "./components/statistics/Statistics";
import AboutUs from "./components/aboutUs/AboutUs";
import Offer from "./components/offer/Offer";
import OurServices from "./components/ourServices/OurServices";
import ContactUs from "./components/contactUs/ContactUs";
import ProfileSlider from "./components/profileSlider/profileSlider";
import Slider from "./components/slider/slider";
import ChooseUs from "./components/chooseUs/ChooseUs";
import Platform from "./components/platform/Platform";
export default function Home({ params }) {
  console.log(params);
  return (
    <section className="home">
    
      {/* <Platform />
      <Statistics />
      <Slider />
      <AboutUs />
      <ChooseUs />
      <Offer />
      <OurServices />
      <ProfileSlider />
      <ContactUs /> */}
    </section>
  );
}
