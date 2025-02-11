"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import styles from "./slider.module.css";

function Slider() {
  const slidesData = [
    { img: "/images/Subaru.png", label: "Subaru" },
    { img: "/images/Nissan.png", label: "Nissan" },
    { img: "/images/Chery.png", label: "Chery" },
    { img: "/images/Suzuki.png", label: "Suzuki" },
    { img: "/images/Datsun.png", label: "Datsun" },
    { img: "/images/Hyundai.png", label: "Hyundai" },
    { img: "/images/Honda.png", label: "Honda" },
    { img: "/images/BMW.png", label: "BMW" },
    { img: "/images/Mazda.png", label: "Mazda" },
  ];

  return (
    <section className={styles.slider}>
      <div className="container">
        <Swiper
          slidesPerView={6}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 2 },
            400: { slidesPerView: 3 },
            500: { slidesPerView: 3 },
            650: { slidesPerView: 4 },
            750: { slidesPerView: 5 },
            850: { slidesPerView: 6 },
            1000: { slidesPerView: 8 },
            1500: { slidesPerView: 8 },
          }}
          loop={true}
          pagination={{
            clickable: true,
            type: "bullets",
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[
            // Pagination,
            Autoplay,
          ]}
          className={styles.swiper}
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              <div className={styles.slide}>
                <div className={styles.circle}>
                  <Image
                    src={slide.img}
                    alt={slide.label}
                    width={100}
                    height={100}
                    className={styles.circle}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Slider;
