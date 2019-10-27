import React from "react"
import styles from "./Button.module.css";

var classnames = require('classnames');

const Button = (props) => {

    let classes = classnames(styles.button, { [styles.primary]: props.primary }, { [styles.ghost]: props.ghost });

    return(
        <>
            <button
            className={classes}
            > 
            <main>{props.children}</main>
            </button>
        </>
  )
};

export default Button
