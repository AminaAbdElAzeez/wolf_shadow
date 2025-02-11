import ContactUs from "../components/contactUs/ContactUs";
import ProfileSlider from "../components/profileSlider/profileSlider";
import ServicePayment from "../components/servicePayment/servicePayment";
import ServicesContent from "../components/ServicesContent/ServicesContent";
import TopServices from "../components/TopServices/TopServices";

function Services() {
  return (
    <section>
      <TopServices />
      <ServicesContent />
      <ServicePayment />
      <ProfileSlider />
      <ContactUs />
    </section>
  );
}

export default Services;
