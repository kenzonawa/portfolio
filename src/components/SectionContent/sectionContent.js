import React, { useEffect } from "react"
import styles from "./sectionContent.module.css"
import PropTypes from "prop-types"
import AOS from "aos"

import "aos/dist/aos.css"

var classnames = require("classnames")

const SectionContent = props => {
  const Icon = props.icon

  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  })

  return (
    <>
      <div>
        <Icon className={styles.icon} />
      </div>
      <h2 className={styles.header}>{props.header}</h2>
      <h1>{props.title}</h1>
      {props.children}
    </>
  )
}

SectionContent.propTypes = {
  header: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default SectionContent
