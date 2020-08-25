import React from "react"
import styles from "./pfooter.module.css"
import IconControl from "../IconControl/iconControl"
import Button from "../Button/Button"
import { Link } from "gatsby"

const Footer = props => {
  return (
    <div className={styles.footerBackground}>
      <div className="homeContainer">
        <footer className={styles.footer}>
          <div className={styles.flexItem}>
            {props.previous != "" && (
              <Link to={props.previousLink}>
                <Button secondary>{props.previous}</Button>
              </Link>
            )}
          </div>
          <Link to="/home/">
            <Button className={styles.flexItem} outline>
              Home
            </Button>
          </Link>
          <div className={styles.flexItem}>
            {props.next != "" && (
              <Link to={props.nextLink}>
                <Button className={styles.flexItem} secondary>
                  {props.next}
                </Button>
              </Link>
            )}
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer
