"use client";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./Statistics.module.css";
import { useTranslations } from "next-intl";
function Counter({ end, duration }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 10);

    const counterInterval = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counterInterval);
      } else {
        setCount(Math.ceil(start));
      }
    }, 10);

    return () => clearInterval(counterInterval);
  }, [end, duration]);

  return <p>{count}</p>;
}

function Statistics() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const t = useTranslations("Statistics");

  return (
    <section className={styles.statistics} ref={ref}>
      <div className="container">
        {inView && (
          <div className={styles.statisticsContent}>
            <div className={styles.statisticsItem}>
              <h5 className={styles.subTitle}>{t("CARRENTED")}</h5>
              <h2 className={styles.title}>
                <Counter end={240} duration={2000} />
              </h2>
            </div>
            <div className={styles.statisticsItem}>
              <h5 className={styles.subTitle}>{t("SATISFIEDCLIENTS")}</h5>
              <h2 className={styles.title}>
                <Counter end={235} duration={2000} />
              </h2>
            </div>
            <div className={styles.statisticsItem}>
              <h5 className={styles.subTitle}>{t("YEARSEXPERIENCE")}</h5>
              <h2 className={styles.title}>
                <Counter end={12} duration={2000} />
              </h2>
            </div>
            <div className={styles.statisticsItem}>
              <h5 className={styles.subTitle}>{t("CARTYPES")}</h5>
              <h2 className={styles.title}>
                <Counter end={18} duration={2000} />
              </h2>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Statistics;
