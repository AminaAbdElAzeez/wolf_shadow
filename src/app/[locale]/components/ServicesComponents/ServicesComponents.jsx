"use client"

import ContactUs from "../contactUs/ContactUs"
import ProfileSlider from "../profileSlider/profileSlider"
import ScrollAnimationWrapper from "../ScrollAnimationWrapper/ScrollAnimationWrapper"
import ServicePayment from "../servicePayment/servicePayment"
import ServicesContent from "../ServicesContent/ServicesContent"
import TopServices from "../TopServices/TopServices"

function ServicesComponents() {
  return (
    <>
      <ScrollAnimationWrapper>
      <TopServices />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
      <ServicesContent />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
      <ServicePayment />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
      <ProfileSlider />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
      <ContactUs />
      </ScrollAnimationWrapper>

    </>
  )
}

export default ServicesComponents
