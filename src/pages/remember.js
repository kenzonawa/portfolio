import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Section from "../components/Section/section"
import SeoIcon from "../assets/seo.svg"
import Hero from "../components/Hero/hero"

const Remember = () => (
  <Layout>
    <SEO title="Home" />
    <Hero remember title="Remember" description="Quick and easy reminders" />
    {/** Introduction */}
    <Section
      gray
      icon={SeoIcon}
      header="Introduction"
      title="About this project"
    >
      <p>
        <strong>Summary:</strong> I created an iOS app that helps forgetful
        people remember to do tasks that are easily forgotten. This is the
        design process.
      </p>
      <p>
        <strong>Duration:</strong> 8 months
      </p>
      <p>
        <strong>My Role:</strong> User Research, Design, Development, User
        Testing, Publishing
      </p>
    </Section>
    {/** The Problem */}
    <Section
      white
      icon={SeoIcon}
      header="The Problem"
      title="My Personal Story"
    >
      <p>
        This happened a few years ago when I still lived in São Paulo, Brazil. I
        was alone at home playing a video game with my dog sitting next to me.
        The telephone rang and it was my grandma, who wanted to talk to my mom
        about something (I can’t remember what). I said I would relay the
        message to her as soon as she got home. I got back to playing my video
        game and as you would have guessed it, I never remembered to tell my
        mom.
      </p>
      <p>
        The next day, we were going to my grandma’s for lunch and the one thing
        I remember was the disappointed look she gave me as she said: “You never
        told your mom, did you?” I was deeply saddened as I saw how I’d let her
        down. At that moment, I thought just how it all could’ve been fine if I
        had simply taken note.
      </p>
    </Section>
    {/** User Research */}
    <Section
      gray
      icon={SeoIcon}
      header="User Research"
      title="Validating The Problem"
    >
      <p>
        I talked to a few friends and asked them if they ever ran into the same
        problem. To my surprise, most of them could relate and said they forget
        to do stuff all the time! I probed them further on what they forget and
        how they currently dealt with this problem.
      </p>
      <p>
        I found that they marked down important things like meetings and
        appointments on apps like Trello, Google Calendar and even on post-it
        notes. These were things that they absolutely could not forget.
      </p>
      <img src="https://i.imgur.com/Ahu4K4G.png" />
      <p>
        However, there was another category of tasks that went unnoticed. These
        were small tasks that they knew they had to do, but ended up forgetting.
        Since these tasks were trivial, they didn't put it on their usual
        productivity apps and, often times, forgot to do it when they intended
        to.
      </p>
      <p>
        <strong>Examples:</strong> One of my friends mentioned she had physical
        exam results she needed to pick up, but kept forgetting to go get them.
        Another friend said she had library books to renew, but forgot to do it
        before the right time.
      </p>
    </Section>
    {/** The Reframe */}
    <Section
      white
      icon={SeoIcon}
      header="The Reframe"
      title="Narrowing The Problem"
    >
      <p>
        The reason these little tasks were forgotten was because they are so
        small that it’s not worth the effort of putting them up on Trello or
        Calendars. In these apps, users have to go through multiple taps and
        screens to set up a simple reminder.
      </p>
      <p>
        Here is an example from the default Reminders app by Apple. You need to
        tap 6 different UI elements and go through 2 screens and 1 modal to set
        up a reminder (aside from typing the task and choosing a time).
      </p>
      <img src="https://i.imgur.com/1BqJoij.png" />
      <p>
        That's a lot of steps and a lot of time! There are enough steps and
        interactions to make users think twice about whether it'll be worth the
        effort to set up the reminder.
      </p>
      <p>
        What I noticed is that it comes down to the return on investment and the
        potential negative consequences. For example, you might not want to
        spend 1 minute setting up a reminder for something that'll have close to
        no negative consequence if you forget to do it. If that negative
        consequence increased, however, then the 1 minute might start looking
        like it's worth it. But what if we could decrease the investment (the
        time)? The negative consequences wouldn't need to be so high, for the
        investment to be worth it.
      </p>
      <img src="https://i.imgur.com/1BqJoij.png" />
    </Section>
    {/** The Requirements */}
    <Section
      gray
      icon={SeoIcon}
      header="The Requirements"
      title="Addressing The Needs"
    >
      <p>With this information, I had an idea of what the app needed to be.</p>
      <p>
        As opposed to the 2 screens and 1 modal from Apple, I wanted my app to
        be 1 screen and 1 modal. All the user would need to fill out was the
        task name and the time to be reminded.
      </p>
      <img src="https://i.imgur.com/1BqJoij.png" />
      <p>
        With a layout like this, the Call-To-Action on the home screen is the
        text input. Once that's filled in, you get a modal with the time picker
        and a finish button. That's it!
      </p>
    </Section>
    {/** Design */}
    <Section
      white
      icon={SeoIcon}
      header="Design"
      title="Pixels With Functionality"
    >
      <p>
        With the main functionality and the flow defined, all that was left was
        to style the UI elements. Here's the design of adding and deleting
        reminders:
      </p>
      <img src="https://i.imgur.com/1BqJoij.png" />
      <h2>Quick reminders</h2>
      <p>
        The empty state contains instructions on how to get started with the
        app. The flow of setting up a reminder is the same as the one
        illustrated in the low-fi design.
      </p>
      <img src="https://i.imgur.com/1BqJoij.png" />
      <h2>Easy deletion</h2>
      <p>
        While adding a reminder is easy, deleting should be just as easy. Just
        dragging the item to the right will casually remove the reminder from
        your list.
      </p>
    </Section>
    {/** Development & Iterating */}
    <Section
      gray
      icon={SeoIcon}
      header="Development & Iterating"
      title="User Testing With TestFlight"
    >
      <p>
        Coding this app was a long journey, but one that I will not cover in
        this case study. With the design on one hand and XCode on the other, I
        eventually got myself to a working beta app.
      </p>
      <p>
        I gathered a couple of friends and asked them if they wanted to beta
        test the app I was creating. This turned out to be very different from
        the usual user testing that's done on the spot.
      </p>
      <p>
        Because of the time factor (users had to wait to receive the reminders),
        I let my testers use the app as they wanted for a few days. I came back
        to them and asked what they thought about it, if it was helping them,
        and if they had any other feedback. Turns out there was one key part of
        this app that I had forgotten about.
      </p>
      <img src="https://i.imgur.com/1BqJoij.png" />
      <h2>Sent reminders</h2>
      <p>
        Most of them talked about how they wish they could act upon a reminder
        that was already sent. The way the app originally worked was that even
        after a reminder had already been sent, it still looked the same in the
        app. So, from their feedback, I changed the top bar color to gray to
        indicate inactiveness and added two actionable buttons.
      </p>
    </Section>
    {/** Shipping */}
    <Section
      white
      icon={SeoIcon}
      header="SHIPPING"
      title="Launching On The App Store"
    >
      <p>
        After refining my app with my beta testers' feedback, I decided to ship
        my product. Publishing the app turned out to be much tougher than I
        expected. I ran into many rejections along the way, but ultimately found
        my way to the App Store!
      </p>
    </Section>
    {/** The End */}
    <Section gray icon={SeoIcon} header="The end" title="What I Learned">
      <p>
        This project gave me the opportunity to wear both the designer and the
        developer hat. I certainly learned a lot from having to work both these
        roles. For example, I had no idea that color codes on Sketch don't
        translate directly into Swift colors. There were many times where I did
        not understand why my app looked so different from the screens I had
        designed in Sketch.
      </p>
      <h1>Check it out yourself!</h1>
      [icon]
    </Section>
  </Layout>
)

export default Remember
