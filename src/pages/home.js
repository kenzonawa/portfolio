import React from "react"
import { Link } from "gatsby"
import Section from "../components/Section/section"
import HomeSection from "../components/HomeSection/homeSection"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Project from "../components/Project/Project"
import styles from "./styles/home.module.css"
import Button from "../components/Button/Button"
import lottie from "lottie-web"
import Lottie from "react-lottie"
import Footer from "../components/Footer/footer"
import IntuitVideo from "../videos/intuit.mp4"
import { Router } from "@reach/router"
import Login from "../components/Login/Login"
import Intuit from "../components/Cases/Intuit"

const Home = () => {
  return (
    <Layout>
      <SEO title="Home" />

      <Section white>
        <div className={styles.hero}>
          <h1 className={styles.kenzo}>Hi, I'm Kenzo</h1>
          <h3 className={styles.designer}>
            Product Designer at <span className={styles.intuit}>Intuit.</span>
          </h3>
          <p>
            I strive to push the world forward by creating a bridge between
            people and technology. YEP
          </p>
        </div>
      </Section>

      <Section gray>
        <div className={styles.hero}>
          <h1 className={styles.kenzo}>Here are some of my projects</h1>
        </div>
      </Section>

      <HomeSection reel>
        <div className={styles.flexGrid}>
          <Project
            title="What happens when a 4,000+ screen app tries to use a design system"
            subtitle="There's a lot of people involved"
            time="7 min read"
            link="app/intuit"
            locked
          >
            <img
              className={styles.noBottom}
              src="https://i.imgur.com/0FDQO88.png"
            />
          </Project>
          <Project
            title="Behind the scenes of a designer who launched an iOS app"
            subtitle="This is more process than you find for your regular app"
            time="6 min read"
            link="/remember/"
          >
            <img
              className={styles.noBottom}
              src="https://i.imgur.com/DpW1RTY.png"
            />
          </Project>
        </div>
      </HomeSection>
      <Footer />
    </Layout>
  )
}

export default Home
