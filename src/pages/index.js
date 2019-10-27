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
  const props = useSpring({
    from: { transform: 'scale(0.2)' },
    to: async next => {
      while (1) {
        await next({ transform: 'scale(3.2)' })
        await next({ transform: 'scale(0.2)' })
        await next({ transform: 'scale(1.2)' })
      }
    },
  })
  const animation = useSpring({config, transform: 'translate3d(0px,0,0)', opacity: 1, from: {opacity:0, transform: 'translate3d(-250px,0,0)'}})
  const animation2 = useSpring({config, delay: 750, transform: 'translate3d(0px,0,0)', opacity: 1, from: {opacity:0, transform: 'translate3d(-250px,0,0)'}})
  const animation3 = useSpring({config, delay: 2000, transform: 'translate3d(0px,0,0)', opacity: 1, from: {opacity:0, transform: 'translate3d(-250px,0,0)'}})
  return(
  <Landing>
    <SEO title="Home" />
    <LandingNav />
      <div class="row">  
        <div class="eight columns">
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
        <div class="four columns" style={{backgroundColor: 'red'}}> 
          <div className={styles.circle}></div>
          <animated.div className={[styles.circle, styles.h3].join(' ')} style={props}>
          </animated.div>
        </div>
      </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Landing>
)}

export default IndexPage
