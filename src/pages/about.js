import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Project from "../components/Project/Project"
import styles from "./styles/about.module.css"
import Footer from "../components/Footer/footer"
import HomeSection from "../components/HomeSection/homeSection"

var classnames = require("classnames")

const Home = () => {
  let classes = classnames(styles.kenzo, "six", "columns")

  return (
    <Layout>
      <SEO title="Home" />
      <HomeSection>
        <div className={styles.about}>
          <div className="row">
            <div className={classes}>
              <img src="https://i.imgur.com/qeO4Dqc.jpg" />
            </div>
            <div className={classes}>
              <h2>About Kenzo</h2>
              <p>
                I believe in first principles thinking and creating clarity
                around ambigous problem spaces.
              </p>
              <p>
                Currently helping TurboTax customers file taxes through a tax
                expert.
              </p>

              <h4>Interests:</h4>
              <p>
                🎮 Video games
                <br />
                ⚽ Soccer
                <br />
                🎸 Electric guitar
                <br />
                💭 Drifting into thought
              </p>
            </div>
          </div>
        </div>
      </HomeSection>
      <div className={styles.divider}></div>
      <Footer />
    </Layout>
  )
}

export default Home
