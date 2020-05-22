import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Section from "../components/Section/section"
import SeoIcon from "../assets/seo.svg"
import Hero from "../components/Hero/hero"
import Number from "../components/Number/number"
import SectionContent from "../components/SectionContent/sectionContent"

const Intuit = () => (
  <Layout>
    <SEO title="Home" />
    <Hero
      intuitds
      title="Redefining design systems"
      description="What happens when a big product tries to maintain consistency"
    />
    {/** Introduction */}
    <Section gray>
      <SectionContent
        icon={SeoIcon}
        header="Summary"
        title="About this project"
      ></SectionContent>
      <p>
        <strong>Summary:</strong> BLANK
      </p>
      <p>
        <strong>Duration:</strong> 1.5 years
      </p>
      <p>
        <strong>My Role:</strong> BLANK
      </p>
    </Section>
    {/** The Problem */}
    <Section white>
      <Number>01</Number>
      <h1>Trying to control the chaos</h1>

      <p>
        TurboTax is a big product. I was astonished when I came in and they said
        the product has over 40,000 screens. It's not easy to keep such a big
        product consistent.
      </p>
      <p>
        There are multiple teams and in order to maintain order to the chaos,
        the beginnings of a design system involved designers creating wiki pages
        in Confluence where they described design intent of some recurrent UX
        patterns in TurboTax.
      </p>
      <p>
        The initial goal of the design system team was to increase the speed at
        which design decisions were made. By having documentation around
        TurboTax patterns, designers could leverage existing experiences that
        were readily available and familiar to the user.
      </p>
    </Section>
    {/** User Research */}
    <Section gray>
      <Number>02</Number>
      <h1>But all we have is text</h1>

      <p>
        When I came in, the design systems team was in a transition phase where
        all the documentation in Confluence was being brought over to a new
        website. We also had some documentation spread throughout Zeplin and PDF
        files.
      </p>
      <p>
        My principal designer and I were newer to the team, so we partnered to
        understand the landscape a little better. We started talking not only
        with the designers in the product teams but the developers as well. We
        uncovered some interesting insights.
      </p>
      <img className="full-width" src="https://i.imgur.com/GkcGclw.png" />
      <h3>Dispersed documentation</h3>
      <p>
        Designers would consult the website and hunt around for old sketch files
        that had what they needed. They often skimmed through the documentation
        because they could be rather large.
      </p>
      <p>
        It was pretty common for product teams to come asking what was the most
        up-to-date documentation that we had.
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
        symbol library, so designers usually just asked around for Sketch files
        that had what they needed.
      </p>
      <h3>Disconnect between design and development</h3>
      <p>
        When shipping features with their engineers, sometimes designers would
        send them component documentation. What that meant was that the
        developers believed they had to build it from scratch, which resulted in
        teams coding duplicates of the same component. There wasn't a clear
        process for product teams when trying to leverage the design system.
      </p>
      <img src="https://i.imgur.com/Nfun9ST.png" />
      <p>
        There were also cases where designers would try to use components, but
        their developers ran into technical constraints. Which meant that the
        product team would lose the built-in treatment for responsiveness,
        accessibility and interaction behavior - often having to recreate it all
        from scratch.
      </p>
    </Section>
    {/** The Reframe */}
    <Section
      white
      icon={SeoIcon}
      header="The Reframe"
      title="We are not serving them well"
    >
      <Number>03</Number>
      <h1>The word to component gap</h1>
      <p>
        What we had, essentially, was a design-only design system. We had
        components and patterns documented on the website, but some teams were
        unable to use them.  At this point, there was not a lot of trust in the
        design system.
      </p>
      <img src="https://i.imgur.com/bTVjRLH.png" />
      <h3>Revisiting the initial goal</h3>
      <p>
        If our design system was built off the goal of increasing the speed at
        which design decisions were made, we could see that it was no longer
        sufficient. It led to an improvement over having no design system at
        all, but we could do better. We realized that our major opportunity was
        in helping product teams ship experiences faster.
      </p>
    </Section>
    {/** The Requirements */}
    <Section gray>
      <Number>04</Number>
      <h1>Reworking the process and infrastructure</h1>
      <p>
        We had to make sure teams were getting what they needed, so we started
        working closer with our developers. There were two steps to this.
      </p>
      <h4>1. Process</h4>
      <p>
        Creating closer relationships between designers and developers. We made
        it a priority to clearly understand what the engineering gaps were. This
        way, the designer wasn't bridging the communication between us and we
        could have a conversation about how to solve a particular issue.
      </p>
      <h4>2. Storybook</h4>
      <p>
        Using Storybook to display all our components running off code. The goal
        here was that Storybook would become the main source of truth when
        consulting the design system. Here, everyone could see what the
        component actually looked like and play with its interaction behaviors.
      </p>
      <img src="https://i.imgur.com/1BqJoij.png" />
      <p>
        Knowing that having alignment between designers and developers was a
        priority, it was the only tool that fulfilled this need. It could not
        only show components running off the source code, but also display
        design intent documentation.
      </p>
      [Design intent to code journey]
    </Section>
    {/** Design */}
    <Section white>
      <Number>05</Number>
      <h1>Closing all the gaps</h1>
      <p>
        We still had dispersed documentation and now we added one more resource.
      </p>
      <p>
        As we'd regularly talk to our product teams, we knew the most valuable
        quality from the design system is that information is accurate. That was
        not the case in our current situation. We had duplicate information
        everywhere and outdated information still available. We needed to
        consolidate.
      </p>
      <img src="https://i.imgur.com/1BqJoij.png" />
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
      <p>
        What we achieved was a central place with the latest information from
        the design system.
      </p>
      <img src="https://i.imgur.com/bdxuMfj.png" />
    </Section>

    {/** The End */}
    <Section gray icon={SeoIcon} header="The end" title="What I Learned">
      <p>This is where results</p>
    </Section>
  </Layout>
)

export default Intuit
