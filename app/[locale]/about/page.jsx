import React from "react";
import Mission from "../components/mission/mission";
import Statistics from "../components/statistics/Statistics";
import Slider from "../components/slider/slider";
import Solution from "../components/solution/solution";
import ChooseUs from "../components/chooseUs/ChooseUs";
import Performance from "../components/performance/performance";
import ContactUs from "../components/contactUs/ContactUs";

function About() {
  return (
    <section>
      <Mission />
      <Statistics />
      <Slider />
      <Solution />
      <ChooseUs />
      <Performance />
      <ContactUs />
    </section>
  );
}

export default About;
