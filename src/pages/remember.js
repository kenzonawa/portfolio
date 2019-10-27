import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Project from '../components/Project/Project'

const Remember = () => (
  <Layout>
    <SEO title="Home" />
    This is remember
    <Project 
      image="https://i.imgur.com/iqnYzLw.png"
      title="This is a project"
      description="This is the description of this project."
      link="/intuit/"
      />
    <Project 
      image="https://i.imgur.com/iqnYzLw.png"
      title="This is a project"
      description="This is the description of this project."
      link="/remember/"
      />
  </Layout>
)

export default Remember
