import React from "react"
import { Link } from "gatsby"
import Layout from "../Layout/layout"
import SEO from "../seo"
import Section from "../Section/section"
import SeoIcon from "../../assets/seo.svg"
import Number from "../Number/number"
import SectionContent from "../SectionContent/sectionContent"
import styles from "./project.module.css"

const Intuit = () => (
  <Layout>
    <SEO title="Home" />
    <div className={styles.hero}>
      <div className={styles.textContainer} data-aos="fade-up">
        <h1 className={styles.title}>Redefining design systems</h1>
        <h3 className={styles.description}>
          What happens when a big product tries to maintain consistency
        </h3>
      </div>
      <div className={styles.heroImage}>
        <img src="https://i.imgur.com/O0kR2G3.png" data-aos="fade-up" />
      </div>
    </div>

    {/** Introduction */}
    <Section black>
      <div className={styles.spacious}>
        <h4 className={styles.about}>ABOUT THIS PROJECT</h4>
        <div className={styles.paragraph}>
          <h3 className={styles.summary}>
            How do you change the game of a growing design system in favor of
            product speed and cohesivenss?
          </h3>
        </div>
      </div>
    </Section>

    {/** OLD SUMMARY 
    <Section gray>
      <SectionContent
        icon={SeoIcon}
        header="Summary"
        title="Redefining design systems in TurboTax"
      ></SectionContent>
      <p>
        <strong>Summary:</strong> How do you change the game of a nascent design
        system in favor of product speed and cohesivenss?
      </p>
      <p>
        <strong>Duration:</strong> 1.5 years
      </p>
      <p>
        <strong>My Role:</strong> For the most part, my principal designer led
        the vision of our work and I took care of getting things done.
      </p>
    </Section>
    */}

    {/** The Problem */}
    <Section white>
      <Number>01</Number>
      <h3 className={styles.subheader}>PROBLEM</h3>
      <h1>Trying to contain the chaos</h1>
      <div className={styles.paragraph}>
        <p>TurboTax is a big product.</p>
        <p>It has over 40,000 screens.</p>
        <p>It's not easy to keep such a big product consistent.</p>

        <img
          className="full-width"
          height="400px"
          src="https://i.imgur.com/h3Reh7C.jpg"
        />
        <p>
          The start of the design system involved designers creating wiki pages
          in Confluence where they described design intent of some recurrent UX
          patterns in TurboTax.
        </p>
        <p>
          The initial goal of the design system team was to increase the speed
          at which design decisions were made ("No, that button is always
          teal!"). By codifying TurboTax patterns, designers could rely on
          documentation to ensure a cohesive experience in the product.
        </p>
      </div>
    </Section>
    {/** User Research */}
    <Section gray>
      <Number>02</Number>
      <h3 className={styles.subheader}>RESEARCH</h3>
      <h1>But all we have is scattered text</h1>
      <div className={styles.paragraph}>
        {/** USELESS?
        <p>
          When I came in, the design systems team was in a transition phase
          where all the documentation in Confluence was being brought over to a
          new website. We also had some documentation spread throughout Zeplin
          and PDF files.
        </p>
        */}

        <p>
          My principal designer and I were newer to the team, so we partnered to
          understand the landscape a little better. We talked with a lot of
          designers in our design studio at first. We then talked to a few of
          the developers and uncovered even more insights:
        </p>

        <h3>Disconnect between design and development</h3>
        <img className="big-width" src="https://i.imgur.com/ezDNqP4.jpg" />

        <p>
          When shipping features with their engineers, sometimes designers would
          send them component documentation. What that meant was that the
          developers believed they had to build it from scratch, which resulted
          in teams coding duplicates of the same component. There wasn't a clear
          process for product teams when trying to leverage the design system.
        </p>
        {/*
        <img src="https://i.imgur.com/Nfun9ST.png" />
      */}
        <p>
          There were also cases where designers would try to use components, but
          their developers ran into technical constraints. Which meant that the
          product team would lose the built-in treatment for responsiveness,
          accessibility and interaction behavior - often having to recreate it
          all from scratch.
        </p>
        <br />
        <h3>Dispersed documentation</h3>
        <img className="big-width" src="https://i.imgur.com/hO3vddI.jpg" />
        <p>
          Designers would consult the website and hunt around for old sketch
          files that had what they needed. They often skimmed through the
          documentation because they could be rather large.
        </p>
        <p>
          It was pretty common for product teams to come asking what was the
          most up-to-date documentation that we had.
        </p>
        <ul>
          <li>
            Hunt for documentation first on the website, then Zeplin, and then
            PDFs
          </li>
          <li>
            Ask the DS team which was most up-to-date documentation and ask for
            Sketch files
          </li>
        </ul>
        <p>
          We had an outdated Sketch library. No one had taken ownership of the
          symbol library, so designers usually just asked around for Sketch
          files that had what they needed.
        </p>
      </div>
    </Section>
    {/** The Reframe */}
    <Section
      white
      icon={SeoIcon}
      header="The Reframe"
      title="We are not serving them well"
    >
      <Number>03</Number>
      <h3 className={styles.subheader}>EVALUATION</h3>
      <h1>The word to component gap</h1>
      <div className={styles.paragraph}>
        <p>
          What we had, essentially, was a design-only design system. We had
          components and patterns documented on the website, but some teams were
          unable to use them.  At this point, there was not a lot of trust in
          the design system.
        </p>
        [this also meant teams could experiment less]
        <img src="https://i.imgur.com/bTVjRLH.png" />
        <h3>Revisiting the initial goal</h3>
        <p>
          If our design system was built off the goal of increasing the speed at
          which design decisions were made, we could see that it was no longer
          sufficient. It led to an improvement over having no design system at
          all, but we could do better. We realized that our major opportunity
          was in helping product teams ship experiences faster.
        </p>
      </div>
    </Section>

    {/** BREAK */}
    <Section black>
      <div className={styles.spacious}>
        <h4 className={styles.about}>ABOUT MY ROLE</h4>
        <div className={styles.paragraph}>
          <h3 className={styles.summary}>
            For the most part, my principal designer led the vision of our work
            and I took care of getting things done.
          </h3>
        </div>
      </div>
    </Section>

    {/** The Requirements */}
    <Section gray>
      <Number>04</Number>
      <h3 className={styles.subheader}>ACTION</h3>
      <h1>Reworking the process and infrastructure</h1>
      <div className={styles.paragraph}>
        <p>
          We had to make sure teams were getting what they needed, so we started
          working closer with our developers. There were two steps to this.
        </p>
        <h4>1. Process</h4>
        <img className="big-width" src="https://i.imgur.com/mrScSQR.jpg" />
        <p>
          Creating closer relationships between designers and developers. We
          made it a priority to clearly understand what the engineering gaps
          were. This way, the designer wasn't bridging the communication between
          us and we could have a conversation about how to solve a particular
          issue.
        </p>
        <h4>2. Storybook</h4>
        <video autoPlay muted loop playsInline className={styles.video}>
          <source
            src="https://storybook.js.org/videos/storybook-hero-video-optimized.mp4"
            type="video/mp4"
          ></source>
        </video>
        <p>
          Using Storybook to display all our components running off code. The
          goal here was that Storybook would become the main source of truth
          when consulting the design system. Here, everyone could see what the
          component actually looked like and play with its interaction
          behaviors.
        </p>
        <p>
          Knowing that having alignment between designers and developers was a
          priority, it was the only tool that fulfilled this need. It could not
          only show components running off the source code, but also display
          design intent documentation.
        </p>
        [Design intent to code journey]
      </div>
    </Section>

    {/** Design */}
    <Section white>
      <Number>05</Number>
      <h3 className={styles.subheader}>REFINE</h3>
      <h1>Closing all the gaps</h1>
      <div className={styles.paragraph}>
        <p>
          We still had dispersed documentation and now we added one more
          resource.
        </p>
        <p>
          As we'd regularly talk to our product teams, we knew the most valuable
          quality from the design system is that information is accurate. That
          was not the case in our current situation. We had duplicate
          information everywhere and outdated information still available. We
          needed to consolidate.
        </p>
      </div>
    </Section>
    {/** Development & Iterating */}
    <Section
      gray
      icon={SeoIcon}
      header="Outcome"
      title="Design Systems at work"
    >
      <Number>06</Number>
      <h1>Design Systems 2.0</h1>
      <div className={styles.paragraph}>
        <p>
          What we achieved was a central place with the latest information from
          the design system.
        </p>
        <img src="https://i.imgur.com/bdxuMfj.png" />
      </div>
    </Section>

    {/** The End */}
    <Section gray icon={SeoIcon} header="The end" title="What I Learned">
      <p>This is where results</p>
    </Section>
  </Layout>
)

export default Intuit
