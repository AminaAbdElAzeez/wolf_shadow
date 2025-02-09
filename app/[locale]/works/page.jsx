import ContactUs from "../components/contactUs/ContactUs";
import Custom from "../components/custom/Custom";
import Profile from "../components/profile/Profile";
import Slider from "../components/slider/slider";
import Statistics from "../components/statistics/Statistics";
import VideoSection from "../components/videoSection/VideoSection";

function Works() {
  return (
    <section>
      <Custom />
      <Statistics />
      <Slider />
      <VideoSection />
      <Profile />
      <ContactUs />
    </section>
  );
}

export default Works;
