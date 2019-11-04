import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Pdf from "../../Kenzo_Nawa_Product_Designer_Resume.pdf"

import styles from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <div className={styles.headerContainer}>
      <div></div>
      <div className={styles.links}>
        <Link to="/home/">Work</Link>
        <a href="#about">About</a>
        <a href={Pdf} target="_blank">
          Resume
        </a>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
