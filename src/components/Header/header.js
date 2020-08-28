import { Link } from "gatsby"
import React from "react"
import Pdf from "../../KenzoNawa_Resume.pdf"

import styles from "./header.module.css"

var classnames = require("classnames")

const Header = props => {
  let header = classnames(
    styles.header,
    { [styles.white]: props.color === "white" },
    { [styles.black]: props.color === "black" }
  )

  return (
    <header className={header}>
      <div className={styles.headerContainer}>
        <div></div>
        <div className={styles.links}>
          <Link to="/">Work</Link>
          <Link to="/about/">About</Link>
          <a href={Pdf} target="_blank">
            Resume
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
