import React, { useEffect } from "react"
import styles from "./section.module.css"
import PropTypes from "prop-types"
import AOS from 'aos';

import 'aos/dist/aos.css'

var classnames = require("classnames")

const Section = props => {
  const Icon = props.icon
  let classes = classnames(
    styles.section,
    { [styles.white]: props.white },
    { [styles.gray]: props.gray }
  )

  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  });

  return (
    <>
      <div className={classes}>
        <div className="section" data-aos="fade-up">
          <div>
            <Icon className={styles.icon} />
          </div>
          <h2 className={styles.header}>{props.header}</h2>
          <h1>{props.title}</h1>
          {props.children}
        </div>
      </div>
    </>
  )
}

Section.propTypes = {
  header: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Section
