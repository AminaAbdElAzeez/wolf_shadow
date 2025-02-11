"use client";
import ScrollAnimationWrapper from '../ScrollAnimationWrapper/ScrollAnimationWrapper'
import Custom from '../custom/Custom'
import Statistics from '../statistics/Statistics'
import Slider from '../slider/slider'
import VideoSection from '../videoSection/VideoSection'
import Profile from '../profile/Profile'
import ContactUs from '../contactUs/ContactUs'

function WorksComponents() {
  return (
    <>
      <ScrollAnimationWrapper>
      <Custom />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
      <Statistics />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
      <Slider />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
      <VideoSection />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
      <Profile />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
      <ContactUs />
      </ScrollAnimationWrapper>
    </>
  )
}

export default WorksComponents
