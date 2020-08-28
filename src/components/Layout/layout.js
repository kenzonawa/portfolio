import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, withPrefix, Link } from "gatsby"
import Helmet from "react-helmet"
import Header from "../Header/header"
import "./layout.css"

const Layout = ({ children, color }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} color={color} />
      <Helmet>
        <script src={withPrefix("script.js")} type="text/javascript" />
        <script async src="//static.getclicky.com/js"></script>
      </Helmet>
      <div className="precontainer">
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
