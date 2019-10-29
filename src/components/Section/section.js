import React from "react"
import styles from "./section.module.css";
import PropTypes from "prop-types"

const Section = (props) => {

    return(
        <>
            <div className={styles.section}>
                <div className="container">
                    <h2>This title</h2>
                    <h1>This title</h1>
                    {props.children}
                </div>
            </div>
        </>
  )
};

// Project.propTypes = {
//   image: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   link: PropTypes.string.isRequired
// }

export default Section
