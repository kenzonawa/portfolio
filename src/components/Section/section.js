import React from "react"
import styles from "./section.module.css"
import PropTypes from "prop-types"
import Fade from "react-reveal/Fade"

var classnames = require("classnames")

const Section = props => {
  const Icon = props.icon
  let classes = classnames(
    styles.section,
    { [styles.white]: props.white },
    { [styles.gray]: props.gray }
  )

  return (
    <>
      <div className={classes}>
        <div className="section">
          <Fade bottom>
            <div>
              <Icon className={styles.icon} />
            </div>
            <h2 className={styles.header}>{props.header}</h2>
            <h1>{props.title}</h1>
            {props.children}
          </Fade>
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
