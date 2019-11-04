import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Project from "../components/Project/Project"

const Home = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <div className="row">
        <div className="six columns">
          <img src="http://kenzonawa.com/images/bandwhitef2f2.png" />
        </div>
        <div className="six columns">
          <h1>Kenzo Nawa</h1>
          <p>I'm bla bla bla</p>
        </div>
      </div>
    </div>
  </Layout>
)

export default Home
