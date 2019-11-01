import React from "react"
import styles from "./landing.module.css"

const LandingNav = () => {
  return (
    <>
      <div className={styles.topnav}>
        <a href="#home">Work</a>
        <a href="#about">About</a>        
        <a href="#contact">Contact</a>
      </div>
    </>
  )
}

export default LandingNav
