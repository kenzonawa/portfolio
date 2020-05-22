import React, { useEffect } from "react"
import styles from "./section.module.css"
import PropTypes from "prop-types"
import AOS from "aos"

import "aos/dist/aos.css"

var classnames = require("classnames")

const Section = props => {
  let classes = classnames(
    styles.section,
    { [styles.white]: props.white },
    { [styles.gray]: props.gray },
    { [styles.black]: props.black }
  )

  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  })

  return (
    <>
      <div className={classes}>
        <div className="section" data-aos="fade-up">
          {props.children}
        </div>
      </div>
    </>
  )
}

export default Section
