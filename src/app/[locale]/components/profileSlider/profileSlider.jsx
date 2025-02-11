"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import styles from "./profileSlider.module.css";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import ProfileTitle from "../profileTitle/profileTitle";
import { useTranslations } from "next-intl";

function ProfileSlider() {
  const t = useTranslations("ProfileSlider");
  const slidesData = [
    {
      img: "/images/Rectangle-14.png",
      label: `${t("ProfileSliderItemTitle")}`,
    },
    {
      img: "/images/Rectangle-7.png",
      label: `${t("ProfileSliderItemTitle")}`,
    },
    {
      img: "/images/Rectangle-11.png",
      label: `${t("ProfileSliderItemTitle")}`,
    },
    {
      img: "/images/Rectangle-12.png",
      label: `${t("ProfileSliderItemTitle")}`,
    },
    {
      img: "/images/Rectangle-13.png",
      label: `${t("ProfileSliderItemTitle")}`,
    },
  ];

  return (
    <section className={styles.profile}>
      <div className="container">
        <ProfileTitle
          subTitle={t("ProfileSliderSubTitle")}
          text={{ textAlign: "center" }}
          title={t("ProfileSliderTitle")}
          desc={t("ProfileSliderDesc")}
        />
        <Swiper
          slidesPerView={2}
          spaceBetween={40}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
          loop={true}
          pagination={{
            clickable: true,
            type: "bullets",
          }}
          navigation={{
            nextEl: `.${styles.swiperButtonNext}`,
            prevEl: `.${styles.swiperButtonPrev}`,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay, Navigation]}
          className={styles.swiper}
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index} className={styles.profileItem}>
              <Image
                src={slide.img}
                width={400}
                height={470}
                alt={slide.label}
              />
              <h4>{slide.label}</h4>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.swiperButtonPrev}>
          <FaLongArrowAltLeft />
        </div>
        <div className={styles.swiperButtonNext}>
          <FaLongArrowAltRight />
        </div>
      </div>
    </section>
  );
}

export default ProfileSlider;
