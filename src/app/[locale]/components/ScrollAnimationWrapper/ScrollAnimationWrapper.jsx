'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function ScrollAnimationWrapper({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true, // الأنيميشن يعمل مرة واحدة فقط عند الظهور لأول مرة
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (inView) {
        controls.start('visible');
      } else {
        controls.start('hidden');
      }
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      style={{ overflow: 'hidden' }} // تجنب مشاكل overflow
    >
      {children}
    </motion.div>
  );
}
