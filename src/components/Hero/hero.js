import React from "react"
import styles from "./hero.module.css"
import PropTypes from "prop-types"
import Fade from "react-reveal/Fade"

const Hero = props => {
  return (
    <div className={styles.hero}>
      <div className={styles.background}>
        <Fade bottom>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>{props.title}</h1>
            <h4 className={styles.description}>{props.description}</h4>
          </div>
        </Fade>
      </div>
    </div>
  )
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Hero
