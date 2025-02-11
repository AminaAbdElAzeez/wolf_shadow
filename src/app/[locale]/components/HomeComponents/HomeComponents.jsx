import ScrollAnimationWrapper from '../ScrollAnimationWrapper/ScrollAnimationWrapper';
import Platform from '../platform/Platform';
import Statistics from '../statistics/Statistics';
import Slider from '../slider/slider';
import AboutUs from '../aboutUs/AboutUs';
import ChooseUs from '../chooseUs/ChooseUs';
import Offer from '../offer/Offer';
import OurServices from '../ourServices/OurServices';
import ProfileSlider from '../profileSlider/profileSlider';
import ContactUs from '../contactUs/ContactUs';

function HomeComponents() {
    return (
        <>
          <ScrollAnimationWrapper>
            <Platform />
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <Statistics />
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <Slider />
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <AboutUs />
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <ChooseUs />
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <Offer />
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <OurServices />
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <ProfileSlider />
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <ContactUs />
          </ScrollAnimationWrapper>
        </>
      );
}

export default HomeComponents
