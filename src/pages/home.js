import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Project from "../components/Project/Project"
import styles from "./styles/home.module.css"
import Button from "../components/Button/Button"
import lottie from "lottie-web"
import Lottie from "react-lottie"
import animation from "./animation.json"

const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  return (
    <Layout>
      <SEO title="Home" />
      <div className="homeContainer">
        <div className="row">
          <div className="seven columns">
            <h1 className={styles.kenzo}>
              Kenzo <br />
              Nawa
            </h1>
            <h3 className={styles.designer}>
              Product Designer at <span className={styles.intuit}>Intuit.</span>
            </h3>
            <p>
              I strive to push the world forward by creating a bridge between
              people and technology.
            </p>
            <Button primary>Get in touch</Button>
          </div>
          <div className="five columns">
            <Lottie options={defaultOptions} height={300} width={300} />
          </div>
        </div>
        <br />
        <Project
          image="https://i.imgur.com/iqnYzLw.png"
          title="Intuit"
          subtitle="Redefining design systems"
          description="How do you help multiple teams on different tech stacks achieve a cohesive process for building out their products?"
          link="/intuit/"
        />
        <Project
          image="https://i.imgur.com/iqnYzLw.png"
          title="Remember"
          subtitle="Launching my own iOS app"
          description="Building and launching my own product."
          link="/remember/"
        />
      </div>
    </Layout>
  )
}

export default Home
