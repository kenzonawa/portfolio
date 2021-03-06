import React from "react"
import styles from "./Project.module.css"
import PropTypes from "prop-types"
import "../../styles/skeleton.css"
import Button from "../Button/Button"
import { Link } from "gatsby"
import LockIcon from "../../assets/lock.svg"

const Project = props => {
  return (
    <div className={styles.linker}>
      <Link to={props.link}>
        <div className={styles.card}>
          <div className={styles.project}>
            {props.children}
            <div className={styles.text}>
              <div className={styles.header}>
                {props.locked ? <LockIcon className={styles.lock} /> : ""}

                <h1 className={styles.title}>{props.title}</h1>
              </div>
              <p className={styles.subtitle}>{props.subtitle}</p>
              <p className={styles.time}>{props.time}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

Project.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default Project
