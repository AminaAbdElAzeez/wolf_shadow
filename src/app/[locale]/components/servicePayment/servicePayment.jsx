import Image from "next/image";
import styles from "./servicePayment.module.css";
import { Select, Space } from "antd";
import ProfileTitle from "../profileTitle/profileTitle";

function ServicePayment() {
  return (
    <section className={styles.servicePayment} id="servicesPayment">
      <div className="container">
        <ProfileTitle
          subTitle="Our Services"
          text={{ textAlign: "left" }}
          title="Our providing reliable "
          desc={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/> tempor incididunt ut labore et dolore `}
        />
        <div className={styles.servicePaymentItem}>
          <h3 className={styles.servicePaymentItemTitle}>
            <div className={styles.servicePaymentItemTitleNumber}>1</div>
            Details Service
          </h3>
          <div className={styles.servicePaymentWrapper}>
            <div className={styles.servicePaymentLeft}>
              <div className={styles.servicePaymentBox}>
                <div className={styles.servicePaymentBoxTop}>
                  <h4>Vehicle Type</h4>
                  <Space wrap>
                    <Select
                      defaultValue="SEDAN"
                      style={{
                        width: 90,
                      }}
                      options={[
                        {
                          value: "jack",
                          label: "Jack",
                        },
                        {
                          value: "lucy",
                          label: "Lucy",
                        },
                        {
                          value: "Yiminghe",
                          label: "yiminghe",
                        },
                        {
                          value: "disabled",
                          label: "Disabled",
                          disabled: true,
                        },
                      ]}
                    />
                  </Space>
                </div>
                <div className={styles.servicePaymentBoxBottom}>
                  <div className={styles.servicePaymentBoxBottomItem}>
                    <div className={styles.servicePaymentBoxBottomItemImg}>
                      <Image
                        src="/images/sedan-1.png"
                        alt="image"
                        width={80}
                        height={35}
                      />
                    </div>
                    <h4>Toyota Yaris</h4>
                  </div>
                  <div className={styles.servicePaymentBoxBottomItem}>
                    <div className={styles.servicePaymentBoxBottomItemImg}>
                      <Image
                        src="/images/sedan-2.png"
                        alt="image"
                        width={80}
                        height={35}
                      />
                    </div>
                    <h4>Scoda Rapid</h4>
                  </div>
                  <div className={styles.servicePaymentBoxBottomItem}>
                    <div className={styles.servicePaymentBoxBottomItemImg}>
                      <Image
                        src="/images/sedan-3.png"
                        alt="image"
                        width={80}
                        height={35}
                      />
                    </div>
                    <h4>Hyundai Verna</h4>
                  </div>
                </div>
              </div>
              <Space wrap style={{ width: "100%", display: "block" }}>
                <Select
                  defaultValue="Services Type"
                  style={{
                    width: "100%",
                    height: "50px",
                  }}
                  options={[
                    {
                      value: "jack",
                      label: "Jack",
                    },
                    {
                      value: "lucy",
                      label: "Lucy",
                    },
                    {
                      value: "Yiminghe",
                      label: "yiminghe",
                    },
                    {
                      value: "disabled",
                      label: "Disabled",
                      disabled: true,
                    },
                  ]}
                />
              </Space>
            </div>
            <div className={styles.servicePaymentRight}>
              <div className={styles.servicePaymentBox}>
                <div className={styles.servicePaymentBoxTop}>
                  <h4>Vehicle Size </h4>
                  <Space wrap>
                    <Select
                      defaultValue="SEDAN"
                      style={{
                        width: 90,
                      }}
                      options={[
                        {
                          value: "jack",
                          label: "Jack",
                        },
                        {
                          value: "lucy",
                          label: "Lucy",
                        },
                        {
                          value: "Yiminghe",
                          label: "yiminghe",
                        },
                        {
                          value: "disabled",
                          label: "Disabled",
                          disabled: true,
                        },
                      ]}
                    />
                  </Space>
                </div>
                <div className={styles.servicePaymentBoxBottom}>
                  <div className={styles.servicePaymentBoxBottomItem}>
                    <div className={styles.servicePaymentBoxBottomItemImg}>
                      <Image
                        src="/images/sedan-1.png"
                        alt="image"
                        width={80}
                        height={35}
                      />
                    </div>
                    <h4>Vehicle Type</h4>
                  </div>
                </div>
              </div>
              <Space wrap style={{ width: "100%", display: "block" }}>
                <Select
                  defaultValue="Select Branch"
                  style={{
                    width: "100%",
                    height: "50px",
                  }}
                  options={[
                    {
                      value: "jack",
                      label: "Jack",
                    },
                    {
                      value: "lucy",
                      label: "Lucy",
                    },
                    {
                      value: "Yiminghe",
                      label: "yiminghe",
                    },
                    {
                      value: "disabled",
                      label: "Disabled",
                      disabled: true,
                    },
                  ]}
                />
              </Space>
            </div>
          </div>
          <h3 className={styles.servicePaymentItemTitle}>
            <div className={styles.servicePaymentItemTitleNumber}>2</div>
            Date/Time & Payment Service
          </h3>
          <div className={styles.servicePaymentWrapper}>
            <div className={styles.servicePaymentLeft}>
              <Space wrap style={{ width: "100%", display: "block" }}>
                <Select
                  defaultValue="Start Date"
                  style={{
                    width: "100%",
                    height: "50px",
                  }}
                  options={[
                    {
                      value: "jack",
                      label: "Jack",
                    },
                    {
                      value: "lucy",
                      label: "Lucy",
                    },
                    {
                      value: "Yiminghe",
                      label: "yiminghe",
                    },
                    {
                      value: "disabled",
                      label: "Disabled",
                      disabled: true,
                    },
                  ]}
                />
              </Space>
            </div>
            <div className={styles.servicePaymentRight}>
              <Space wrap style={{ width: "100%", display: "block" }}>
                <Select
                  defaultValue="End Date"
                  style={{
                    width: "100%",
                    height: "50px",
                  }}
                  options={[
                    {
                      value: "jack",
                      label: "Jack",
                    },
                    {
                      value: "lucy",
                      label: "Lucy",
                    },
                    {
                      value: "Yiminghe",
                      label: "yiminghe",
                    },
                    {
                      value: "disabled",
                      label: "Disabled",
                      disabled: true,
                    },
                  ]}
                />
              </Space>
            </div>
          </div>
          <div className={styles.servicePaymentType}>
            <h3>Payment Type</h3>
            <div className={styles.servicePaymentTypeWrapper}>
              <div className={styles.servicePaymentTypeItem}>
                <Image
                  src={"/images/Frame-4.png"}
                  alt="img"
                  width={114}
                  height={40}
                />
              </div>
              <div className={styles.servicePaymentTypeItem}>
                <Image
                  src={"/images/Apple_Pay_logo.png"}
                  alt="img"
                  width={114}
                  height={40}
                />
              </div>
              <div className={styles.servicePaymentTypeItem}>
                <Image
                  src={"/images/Visa._logo.png"}
                  alt="img"
                  width={114}
                  height={40}
                />
              </div>
              <div className={styles.servicePaymentTypeItem}>
                <Image
                  src={"/images/Mada_Logo.png"}
                  alt="img"
                  width={114}
                  height={40}
                />
              </div>
              <div className={styles.servicePaymentTypeItem}>
                <Image
                  src={"/images/Mastercard-logo.png"}
                  alt="img"
                  width={114}
                  height={40}
                />
              </div>
              <div className={styles.servicePaymentTypeItem}>
                <Image
                  src={"/images/Apple_Pay_logo.png"}
                  alt="img"
                  width={114}
                  height={40}
                />
              </div>
              <div className={styles.servicePaymentTypeItem}>
                <Image
                  src={"/images/tamara_logo.png"}
                  alt="img"
                  width={114}
                  height={40}
                />
              </div>
              <div className={styles.servicePaymentTypeItem}>
                <Image
                  src={"/images/Frame-1.png"}
                  alt="img"
                  width={114}
                  height={40}
                />
              </div>
            </div>
          </div>
          <h3 className={styles.servicePaymentItemTitle}>
            <div className={styles.servicePaymentItemTitleNumber}>3</div>
            Personal info
          </h3>
          <div className={styles.servicePaymentWrapper}>
            <div className={styles.servicePaymentLeft}>
              <input
                placeholder="Full Name"
                type="text"
                name="name"
                autoComplete="on"
              />
              <input
                placeholder="Email"
                type="email"
                name="email"
                autoComplete="on"
              />
            </div>
            <div className={styles.servicePaymentRight}>
              <input
                placeholder="Phone Number"
                type="text"
                name="phone"
                autoComplete="on"
              />
              <div className={styles.copon}>
                <input
                  placeholder="Copon Code"
                  name="copon"
                  autoComplete="on"
                />
                <button>Apply</button>
              </div>
            </div>
          </div>
        </div>
        <button className={styles.servicePaymentBttn}>Confirm Booking</button>
      </div>
    </section>
  );
}

export default ServicePayment;
