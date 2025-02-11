"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import styles from "./VideoSection.module.css";
import { useTranslations } from "next-intl";

function VideoSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const t = useTranslations("VideoSection");

  const handlePlay = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  return (
    <div className={styles.videoSection}>
      <video
        className={styles.video}
        ref={videoRef}
        controls
        poster="/images/Rectangle-6.png"
      >
        <source src="/videos/video2.mp4" />
        {t("videoNotSupported")}
      </video>

      {!isPlaying && (
        <div className={styles.overlay} onClick={handlePlay}>
          <Image
            src={"/images/Group-11.png"}
            alt="Play Button"
            width={60}
            height={60}
            className={styles.playIcon}
          />
          <h3 className={styles.title}>{t("videoTitle")}</h3>
          <p
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: t("videoDesc") }}
          ></p>
        </div>
      )}
    </div>
  );
}

export default VideoSection;
