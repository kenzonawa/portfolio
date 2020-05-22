import React from "react"
import styles from "./number.module.css"

const Number = props => {
  return (
    <>
      <div className={styles.number}>
        <div className={styles.value}>{props.children}</div>
      </div>
    </>
  )
}

export default Number
