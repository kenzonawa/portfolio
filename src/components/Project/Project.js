import React from "react"
import styles from "./Project.module.css";
import PropTypes from "prop-types"
import '../../styles/skeleton.css'
import Button from '../Button/Button'
import { Link } from "gatsby"

const Project = (props) => {

    return(
        <>
            <div className={styles.divider} />
            <div className="row">
                <div className="six columns">
                    <Link to={props.link}>
                        <div className={styles.card}>
                            <img className={styles.image} src={props.image} alt="project" />
                        </div>
                    </Link>
                </div>
                <div className="six columns">
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                    <Button primary>Case Study</Button>
                </div>
            </div>
        </>
  )
};

Project.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

export default Project
