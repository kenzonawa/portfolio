import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Project from "../components/Project/Project"
import styles from "./styles/about.module.css"

var classnames = require("classnames")

const Home = () => {
  let classes = classnames(styles.kenzo, "six", "columns")

  return (
    <Layout>
      <SEO title="Home" />
      <div className="container">
        <div className="row">
          <div className={classes}>
            <img src="http://kenzonawa.com/images/bandwhitef2f2.png" />
          </div>
          <div className={classes}>
            <h1>Kenzo Nawa</h1>
            <p>
              I'm currently working on design systems at Intuit. My technical
              background allows me to execute on scalability issues so products
              can ship more efficiently.
            </p>
            <p>
              Most people see me and think: "Oh, that guy is Japanese (or
              Chinese)" and that's where I like to come in with my easter egg.
              "That guy" is actually from Brazil.
            </p>
            <p>
              In short, I'm of Japanese heritage, born and raised in Brazil,
              living the American dream.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
