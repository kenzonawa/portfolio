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
      <div className={classes}>
        <div className="six columns">
          <h1 className={styles.title}>{props.title}</h1>
          <h2 className={styles.subtitle}>{props.subtitle}</h2>
          <Link to={props.link}>
            <Button outline>Case Study  →</Button>
          </Link>
        </div>
        <div className="six columns">
          <Link to={props.link}>
            {props.children}
          </Link>
        </div>
      </div>
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
