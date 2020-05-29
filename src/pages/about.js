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
              <h2>Kenzo is a straight edge designer</h2>
              <p>
                Currently helping TurboTax customers connect to tax experts at
                Intuit.
              </p>
              <p>
                My technical background allows me to execute on scalability
                issues so products can ship more efficiently.
              </p>
              <h4>Interests:</h4>
              <p>
                🎮 Video games
                <br />
                ⚽ Soccer
                <br />
                🎸 Electric guitar
                <br />
                💭 Drift into thought
              </p>
            </div>
          </div>
        </div>
      </HomeSection>
      <Footer />
    </Layout>
  )
}

export default Home
