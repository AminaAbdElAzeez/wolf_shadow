"use client";
import ContactInfo from '../contactsInfo/contactsInfo';
import ContactUs from '../contactUs/ContactUs';
import GoogleMaps from '../googleMaps/googleMaps';
import ScrollAnimationWrapper from '../ScrollAnimationWrapper/ScrollAnimationWrapper'
import Sent from '../sent/sent';
import Serve from '../serve/serve';
import TopContact from '../topContact/topContact';

function ContactComponents() {
  return (
    <>
      <ScrollAnimationWrapper>
      <TopContact />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
      <ContactInfo />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
      <GoogleMaps />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
      <ContactUs />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
      <Sent />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
      <Serve />
      </ScrollAnimationWrapper>

    </>
  )
}

export default ContactComponents
