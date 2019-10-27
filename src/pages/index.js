import React from "react"
import { Link } from "gatsby"

import Landing from "../components/Landing/Landing"
import LandingNav from "../components/Landing/LandingNav"
import SEO from "../components/seo"
import {useSpring, animated} from 'react-spring'
import styles from './index.module.css'
import '../styles/skeleton.css'

const config = { mass: 1, tension: 280, friction: 60 }

const IndexPage = () => {

  const animation = useSpring({config, transform: 'translate3d(0px,0,0)', opacity: 1, from: {opacity:0, transform: 'translate3d(-250px,0,0)'}})
  const animation2 = useSpring({config, delay: 750, transform: 'translate3d(0px,0,0)', opacity: 1, from: {opacity:0, transform: 'translate3d(-250px,0,0)'}})
  const animation3 = useSpring({config, delay: 2000, transform: 'translate3d(0px,0,0)', opacity: 1, from: {opacity:0, transform: 'translate3d(-250px,0,0)'}})
  return(
  <Landing>
    <SEO title="Home" />
    <LandingNav />
      <div className={["row", styles.flex].join(' ')}>  
        <div className={["eight","columns", styles.left].join(' ')}>
          <animated.h1 className={[styles.copy, styles.h1].join(' ')} style={animation}>
            Kenzo Nawa
          </animated.h1>
          <animated.h2 className={[styles.copy, styles.h2].join(' ')} style={animation2}>
            Product Designer
          </animated.h2>
          <animated.h3 className={[styles.copy, styles.h3].join(' ')} style={animation3}>
            I'm deeply passionate about consumer-facing mobile apps and artificial intelligence.        
          </animated.h3>
        </div>
        <div className={["four","columns", styles.right].join(' ')}> 
          <div className={styles.rightContainer}>
            <div className={[styles.circle, styles.moving].join(' ')}></div>            
            <div className={styles.circle}></div>
          </div>
        </div>
      </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Landing>
)}

export default IndexPage
