import React, { useEffect } from "react"
import styles from "./hero.module.css"
import PropTypes from "prop-types"
import AOS from 'aos';

import 'aos/dist/aos.css'

var classnames = require('classnames');



const Hero = props => {

  let classes = classnames(styles.background, { [styles.intuitds]: props.intuitds }, { [styles.remember]: props.remember });

  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  });

  return (
    <div className={styles.hero}>
      <div className={classes}>
        <div className={styles.textContainer} data-aos="fade-up">
          <h1 className={styles.title}>{props.title}</h1>
          <h4 className={styles.description}>{props.description}</h4>
        </div>
      </div>
    </div>
  )
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Hero
