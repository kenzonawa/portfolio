import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styles from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <div className={styles.headerContainer}>
      <div></div>
      <div className={styles.links}>
        <Link to="/home/">Work</Link>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
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
