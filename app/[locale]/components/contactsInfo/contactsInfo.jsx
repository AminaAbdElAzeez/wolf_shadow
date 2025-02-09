import Image from "next/image";
import styles from "./contactsInfo.module.css";
import { Card } from "antd";
import ProfileTitle from "../profileTitle/profileTitle";

function ContactInfo() {
  return (
    <section className={styles.chooseUs}>
      <div className="container">
        <ProfileTitle subTitle="Contacts" text={{ textAlign: "center" }} title="Contact Information" 
        desc={`Have a question or feedback? Reach out to us! We're here to assist <br/> you promptly and efficiently. Contact us today`} 

        />
        <div className={styles.chooseUsContent}>
          <Card className={styles.chooseUsItem} hoverable>
            <div className={styles.chooseUsImg}>
              <Image
                src={"/images/location-tick.png"}
                alt="icon"
                width={40}
                height={40}
              />
            </div>
            <h3 className={styles.chooseUsItemTitle}>Work location</h3>
            <p className={styles.chooseUsItemDesc}>
            Saudi Arabia, Dammam, <br/> Jeddah
            </p>
          </Card>
          <Card className={styles.chooseUsItem} hoverable>
            <div className={styles.chooseUsImg}>
              <Image
                src={"/images/calendar.png"}
                alt="icon"
                width={40}
                height={40}
              />
            </div>
            <h3 className={styles.chooseUsItemTitle}>Working hours</h3>
            <p className={styles.chooseUsItemDesc}>
            Work start Every day <br/> from <span>9 AM to 10 PM</span>
            </p>
          </Card>
          <Card className={styles.chooseUsItem} hoverable>
            <div className={styles.chooseUsImg}>
              <Image
                src={"/images/call-2.png"}
                alt="icon"
                width={40}
                height={40}
              />
            </div>
            <h3 className={styles.chooseUsItemTitle}>Contact Via Phone Number</h3>
            <p className={styles.chooseUsItemDescContent}>
            <Image
                src={"/images/Calling-2.svg"}
                alt="icon"
                width={20}
                height={20}
              />
            +5526587878
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
