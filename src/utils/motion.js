export const customEase = [0.215, 0.61, 0.355, 1];

export const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7, delay, ease: customEase }
});

export const fadeInLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7, delay, ease: customEase }
});

export const fadeInRight = (delay = 0) => ({
  initial: { opacity: 0, x: 40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7, delay, ease: customEase }
});

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0.2) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren
    }
  }
});

export const floatingTransition = (delay = 0) => ({
  duration: 3.5 + Math.random() * 2,
  repeat: Infinity,
  repeatType: "mirror",
  ease: "easeInOut",
  delay: delay
});
