"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import styles from "./VideoSection.module.css";

function VideoSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

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
        Your browser does not support the video tag.
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
          <h3 className={styles.title}>WELCOME TO THE MOTORS WORLD</h3>
          <p className={styles.description}>
            Praesent consequat pharetra commodo. Vestibulum nec <br />
            lectus nibh. Curabitur tellus leo, euismod sit amet gravida at,
            <br />
            egestas sed lectus.
          </p>
        </div>
      )}
    </div>
  );
}

export default VideoSection;
