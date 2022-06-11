export const fadeInMotion = {
  initial: {
    opacity: 0,
    y: 30,
    scale: 0.97,
    transition: {
      duration: 0.5
    }
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 30,
    transition: {
      duration: 0
    }
  }
}
