import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Project from "../components/Project/Project"

const Home = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <Project
        image="https://i.imgur.com/iqnYzLw.png"
        title="This is a project"
        description="This is the description of this project."
        link="/intuit/"
      />
      <Project
        image="https://i.imgur.com/iqnYzLw.png"
        title="Remember"
        description="Building and launching my own product."
        link="/remember/"
      />
    </div>
  </Layout>
)

export default Home
