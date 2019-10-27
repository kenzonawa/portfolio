import React from "react"
import PropTypes from "prop-types"
import styles from "./Landing.module.css"
import '../../styles/skeleton.css'


const Landing = ({ children }) => {
  return (
    <>
      <div className={styles.screen}>
        <div className="container">
            <main>{children}</main>
        </div>
      </div>
    </>
  )
}

Landing.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Landing
