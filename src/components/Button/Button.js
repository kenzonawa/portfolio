import React from "react"
import styles from "./Button.module.css"

var classnames = require("classnames")

const Button = props => {
  let classes = classnames(
    styles.button,
    { [styles.primary]: props.primary },
    { [styles.ghost]: props.ghost },
    { [styles.outline]: props.outline }
  )

  return (
    <>
      <button className={classes}>{props.children}</button>
    </>
  )
}

export default Button
