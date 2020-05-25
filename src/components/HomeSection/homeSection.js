import React, { useEffect } from "react"
import styles from "./homeSection.module.css"
import PropTypes from "prop-types"
import AOS from "aos"

import "aos/dist/aos.css"

var classnames = require("classnames")

const HomeSection = props => {
  let classes = classnames(
    styles.section,
    { [styles.white]: props.white },
    { [styles.gray]: props.gray },
    { [styles.black]: props.black },
    { [styles.reel]: props.reel }
  )

  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  })

  return (
    <>
      <div className={classes}>
        <div className="homeContainer" data-aos="fade-up">
          {props.children}
        </div>
      </div>
    </>
  )
}

export default HomeSection
