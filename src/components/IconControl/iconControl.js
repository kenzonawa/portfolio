import React from "react"
import styles from "./iconControl.module.css";
import PropTypes from "prop-types"

const IconControl = (props) => {

    return(
        <a href={props.link} className={styles.link} target="_blank">
            <div className={styles.icon}>{props.children}</div>
            <span className={styles.label}>{props.label}</span>
        </a>
  )
};

IconControl.propTypes = {
    link: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default IconControl
