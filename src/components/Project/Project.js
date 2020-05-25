import React from "react"
import styles from "./Project.module.css"
import PropTypes from "prop-types"
import "../../styles/skeleton.css"
import Button from "../Button/Button"
import { Link } from "gatsby"

var classnames = require("classnames")

const Project = props => {
  let classes = classnames(styles.project, "row")

  return (
    <>
      <Link to={props.link}>
        <div className={styles.card}>
          <div className={classes}>
            <div className="six columns">{props.children}</div>
            <div className="six columns">
              <h1 className={styles.title}>{props.title}</h1>
              <h2 className={styles.subtitle}>{props.subtitle}</h2>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

Project.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default Project
