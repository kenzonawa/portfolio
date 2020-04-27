import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Project from "../components/Project/Project"
import styles from "./styles/home.module.css"
import Button from "../components/Button/Button"
import lottie from "lottie-web"
import Lottie from "react-lottie"
import Footer from '../components/Footer/footer'

const Home = () => {

  return (
    <Layout>
      <SEO title="Home" />
      <div className="homeContainer">
        <div className="row vertical-align">
          <div className="seven columns">
            <div className={styles.hero}>
              <div>
                <h1 className={styles.kenzo}>
                  Hi, I'm Kenzo
            </h1>
                <h3 className={styles.designer}>
                  Product Designer at <span className={styles.intuit}>Intuit.</span>
                </h3>
                <p>
                  I strive to push the world forward by creating a bridge between
                  people and technology. YEP
            </p>
              </div>
            </div>
          </div>
          <div className="five columns">
            <img src="https://i.imgur.com/FicuBlx.png" />
          </div>
        </div>
        <br />
        <h1 className={styles.featured}>FEATURED WORK</h1>
        <div className={styles.featurehighlight}></div>
        <Project
          title="Redefining design systems at Intuit"
          subtitle="How do you do something"
          link="/intuit/"
        >
          <div className={styles.intuitds}>
            <img src="https://i.imgur.com/0FDQO88.png" />
          </div>
        </Project>
        <div className={styles.divider}></div>
        <Project
          title="Launching my own iOS app"
          subtitle="How do you build"
          link="/remember/"
        >
          <img className={styles.remember} src="https://i.imgur.com/DpW1RTY.png" />
        </Project>


      </div>
      <Footer />
    </Layout>
  )
}

export default Home
