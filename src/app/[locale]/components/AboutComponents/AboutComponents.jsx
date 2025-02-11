"use client"

import ChooseUs from "../chooseUs/ChooseUs"
import ContactUs from "../contactUs/ContactUs"
import Mission from "../mission/mission"
import Performance from "../performance/performance"
import ScrollAnimationWrapper from "../ScrollAnimationWrapper/ScrollAnimationWrapper"
import Slider from "../slider/slider"
import Solution from "../solution/solution"
import Statistics from "../statistics/Statistics"

function AboutComponents() {
  return (
    <>
      <ScrollAnimationWrapper>
      <Mission />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
      <Statistics />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
      <Slider />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
      <Solution />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
      <ChooseUs />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
      <Performance />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
      <ContactUs />
      </ScrollAnimationWrapper>

    </>
  )
}

export default AboutComponents
