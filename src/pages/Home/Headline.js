import React from "react"
import styles from "./Home.module.css"
import Marquee from "react-fast-marquee"

const Headline = () => {
  return (
    <Marquee>
      <p className={styles.headline}>
        NUST <span className={styles.warningText}>LIVING</span>{" "}
        <span className={styles.primaryText}>LAB</span> PROEJECT
      </p>
      <p className={styles.headline}>
        NUST <span className={styles.warningText}>LIVING</span>{" "}
        <span className={styles.primaryText}>LAB</span> PROEJECT
      </p>
      <p className={styles.headline}>
        NUST <span className={styles.warningText}>LIVING</span>{" "}
        <span className={styles.primaryText}>LAB</span> PROEJECT
      </p>
      <p className={styles.headline}>
        NUST <span className={styles.warningText}>LIVING</span>{" "}
        <span className={styles.primaryText}>LAB</span> PROEJECT
      </p>
    </Marquee>
  )
}

export default Headline
