import Image from "next/image";
import styles from "./servicePayment.module.css";
import { Select, Space } from "antd";
import ProfileTitle from "../profileTitle/profileTitle";
import { useLocale, useTranslations } from "next-intl";

function ServicePayment() {
    const locale = useLocale();
      const t = useTranslations("ServicePayment");
  return (
    <section className={styles.servicePayment} id="servicesPayment">
      <div className="container">
        <ProfileTitle
          subTitle= {t('ourServicesSubTitle')}
          text={{ textAlign: locale === "ar" ? "right" : "left" }}
          title= {t('ourServicesTitle')}
          desc= {t('ourServicesDesc')}
        />
        <div className={styles.servicePaymentItem}>
          <h3 className={styles.servicePaymentItemTitle}>
            <div className={styles.servicePaymentItemTitleNumber}>1</div>
             {t('servicePaymentItemTitle')}
          </h3>
          <div className={styles.servicePaymentWrapper}>
            <div className={styles.servicePaymentLeft}>
              <div className={styles.servicePaymentBox}>
                <div className={styles.servicePaymentBoxTop}>
                  <h4>{t('servicePaymentItemTitle2')}</h4>
                  <Space wrap>
                    <Select
                      defaultValue={t('select1')}
                      style={{
                        width: 90,
                      }}
                      options={[
                        {
                          value: t('select2'),
                          label: t('select3'),
                        },
                        {
                          value:t('select4'),
                          label:t('select5'),
                        },
                        {
                          value:t('select6'),
                          label:t('select7'),
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
                    <h4>{t('servicePaymentItemTitle3')}</h4>
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
                    <h4>{t('servicePaymentItemTitle4')}</h4>
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
                    <h4>{t('servicePaymentItemTitle5')}</h4>
                  </div>
                </div>
              </div>
              <Space wrap style={{ width: "100%", display: "block" }}>
                <Select
                  defaultValue={t('selectService')}
                  style={{
                    width: "100%",
                    height: "50px",
                  }}
                  options={[
                        {
                          value: t('select2'),
                          label: t('select3'),
                        },
                        {
                          value:t('select4'),
                          label:t('select5'),
                        },
                        {
                          value:t('select6'),
                          label:t('select7'),
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
                  <h4> {t('servicePaymentItemTitle6')}</h4>
                  <Space wrap>
                    <Select
                      defaultValue={t('select1')}
                      style={{
                        width: 90,
                      }}
                      options={[
                        {
                          value: t('select2'),
                          label: t('select3'),
                        },
                        {
                          value:t('select4'),
                          label:t('select5'),
                        },
                        {
                          value:t('select6'),
                          label:t('select7'),
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
                    <h4>{t('servicePaymentItemTitle7')}</h4>
                  </div>
                </div>
              </div>
              <Space wrap style={{ width: "100%", display: "block" }}>
                <Select
                  defaultValue={t('selectBranch')}
                  style={{
                    width: "100%",
                    height: "50px",
                  }}
                  options={[
                        {
                          value: t('select2'),
                          label: t('select3'),
                        },
                        {
                          value:t('select4'),
                          label:t('select5'),
                        },
                        {
                          value:t('select6'),
                          label:t('select7'),
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
             {t('servicePaymentItemTitle8')}
          </h3>
          <div className={styles.servicePaymentWrapper}>
            <div className={styles.servicePaymentLeft}>
              <Space wrap style={{ width: "100%", display: "block" }}>
                <Select
                  defaultValue={t("date")}
                  style={{
                    width: "100%",
                    height: "50px",
                  }}
                  options={[
                        {
                          value: t('select2'),
                          label: t('select3'),
                        },
                        {
                          value:t('select4'),
                          label:t('select5'),
                        },
                        {
                          value:t('select6'),
                          label:t('select7'),
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
                  defaultValue={t("endDate")}
                  style={{
                    width: "100%",
                    height: "50px",
                  }}
                  options={[
                        {
                          value: t('select2'),
                          label: t('select3'),
                        },
                        {
                          value:t('select4'),
                          label:t('select5'),
                        },
                        {
                          value:t('select6'),
                          label:t('select7'),
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
            <h3>{t('servicePaymentItemTitle9')}</h3>
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
             {t('servicePaymentItemTitle10')}
          </h3>
          <div className={styles.servicePaymentWrapper}>
            <div className={styles.servicePaymentLeft}>
              <input
                placeholder={t('fullname')}
                type="text"
                name="name"
                autoComplete="on"
              />
              <input
                placeholder={t('email')}
                type="email"
                name="email"
                autoComplete="on"
              />
            </div>
            <div className={styles.servicePaymentRight}>
              <input
                placeholder={t("phone")}
                type="text"
                name="phone"
                autoComplete="on"
              />
              <div className={styles.copon}>
                <input
                  placeholder={t("copon")}
                  name="copon"
                  autoComplete="on"
                />
                <button>{t("ApplyBtn")}</button>
              </div>
            </div>
          </div>
        </div>
        <button className={styles.servicePaymentBttn}>{t("confirm")}</button>
      </div>
    </section>
  );
}

export default ServicePayment;
