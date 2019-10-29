import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Section from '../components/Section/section'

const Intuit = () => (
  <Layout>
    <SEO title="Home" />
    This is Intuit
    <Section> 
        This is some paragrph
    </Section>
  </Layout>
)

export default Intuit
