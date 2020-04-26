import React from "react"
import styles from "./hero.module.css"
import PropTypes from "prop-types"
import Fade from "react-reveal/Fade"

var classnames = require('classnames');



const Hero = props => {

  let classes = classnames(styles.background, { [styles.intuitds]: props.intuitds }, { [styles.remember]: props.remember });

  return (
    <div className={styles.hero}>
      <div className={classes}>
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
