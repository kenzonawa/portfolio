import React from "react"
import { Link } from "gatsby"
import Layout from "../Layout/layout"
import SEO from "../seo"
import Section from "../Section/section"
import SeoIcon from "../../assets/seo.svg"
import Number from "../Number/number"
import SectionContent from "../SectionContent/sectionContent"
import styles from "./project.module.css"
import Pfooter from "../Pfooter/pfooter"

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
            How do you enable a design system to unlock even more speed and
            cohesivenss?
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
          in <strong>Confluence</strong> where the design team described intent
          of recurrent UX patterns in TurboTax.
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
          send them component specs. That meant the developers believed they had
          to build it from scratch, which resulted in teams coding duplicates of
          the same component. There wasn't a clear process for product teams to
          leverage the design system.
        </p>
        {/*
        <img src="https://i.imgur.com/Nfun9ST.png" />
      */}
        <p>
          There were also cases where developers would try to use components,
          but they ran into technical constraints. In this case, they often had
          to recreate it from scratch, which meant they would lose the built-in
          treatment for responsiveness, accessibility and interaction behavior.
        </p>
        <br />
        <h3>Dispersed documentation</h3>
        <img className="big-width" src="https://i.imgur.com/hO3vddI.jpg" />
        <p>
          There was no one-stop shop and we had documentation on multiple
          mediums. It was pretty common for product teams to just reach out for
          the latest.
        </p>
        <p>
          If they didn't feel like reaching out, designers would hunt around on
          their own and skim through our resources. Some people missed what they
          needed because the documentation could be rather large.
        </p>
        <p>
          We also had an outdated Sketch symbol library. It had been part of our
          (the design systems team) process to create component specs, but not
          to update the symbol library. Product-team designers usually just
          asked around for Sketch files that had what they needed.
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
          What we had, essentially, was a disorganized{" "}
          <strong>design-only</strong> design system. We had design guidelines
          on the website, but we rarely had code to support them. Product teams
          might have been sticking to similar UI patterns, but the design system
          hardly had any value for the software engineers.
        </p>
        <p>
          Coupled with the hassle to find the latest documentation around any
          particular topic, there was not a ton of trust in the design system.
        </p>
        <img src="https://i.imgur.com/2lCUBZB.jpg" />
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
          working closer with all developers. There were two main steps to this.
        </p>
        <h4>1. Process</h4>
        <img className="big-width" src="https://i.imgur.com/mrScSQR.jpg" />
        <p>
          It was common for there to be a 4-way game of telephone between design
          systems and product team designers and developers, and we decided to
          put a stop to this. Creating closer relationships between designers
          and developers was one of our goals. We made it a priority to
          understand what the engineering gaps were and ensure our system fit
          those needs.
        </p>
        <h4>2. Storybook</h4>
        <video autoPlay muted loop playsInline className={styles.video}>
          <source
            src="https://storybook.js.org/videos/storybook-hero-video-optimized.mp4"
            type="video/mp4"
          ></source>
        </video>
        <p>
          We decided to use Storybook to display all our components running off
          code. The goal here was that Storybook would become the main source of
          truth when consulting the design system.
        </p>
        <p>
          Everyone could see what the component actually looked like and play
          with its interaction behaviors. Not only did it show components
          running off the source code, but it also displayed design intent
          documentation.
        </p>
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
        <img src="https://i.imgur.com/wSwZqZc.jpg" />
        <p>
          We scrambled to consolidate and get rid of duplicate/outdated
          resources. Product teams running on incorrect information was the last
          thing we wanted as that had previously led to many unnecessary
          discussions.
        </p>
        <p>
          We also recreated a new Sketch symbol library to be referenced within
          Storybook along with all live components. Gone were the days where
          designers would waste time looking for specific design assets in
          Sketch.
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
        <p>
          Far from perfect, there was still some documentation stored elsewhere,
          but the new Storybook website became a useful resource not only for
          our product designers, but product development and even product
          management as well.
        </p>
        <img className="big-width" src="https://i.imgur.com/Q7ztagk.jpg" />
      </div>
    </Section>

    {/** The End */}
    <Section white icon={SeoIcon}>
      <Number>07</Number>
      <h1>Conclusion</h1>
      <div className={styles.paragraph}>
        <p>
          I believe design systems work and product design work are a bit
          different.
        </p>
        <p>
          We had no product managers in design systems, so it was up to us to
          figure out what had to be done. I learned how to be proactive in
          solving problems before anyone asks to solve them.
        </p>
        <p>
          We also had the floor for ownership within the team and it's a skill
          that I'm glad to have picked up along this journey.
        </p>
      </div>
    </Section>
    <div className={styles.divider}></div>
    <Pfooter previous="" next="Remember App" nextLink="/remember" />
  </Layout>
)

export default Intuit
