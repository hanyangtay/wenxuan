import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql } from "gatsby"

export const query = graphql`
  query {

        image1: file(relativePath: { eq: "borderline_cover.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }

      }
`

const BorderlinePage = ({ data }) => (
  <Layout>
    <SEO title="Borderline" keywords={[`wenxuan`, `theater`, `theatre`, `play`, `actor`, `music`, `assistant`, `borderline`, `benjamin`, `velez`, `aryanna`, `garber`, `jaki`, `bradley`]} />
    <div
      className="mainWrapper"
    >
      <div>
        <Img fluid={data.image1.childImageSharp.fluid} />
      </div>
      <div>
        <h1>Borderline</h1>
        <b> Role: Music Assistant </b> <br />
        <i> Location: Eugene O’Neill Theater Center, CT </i> <br /> <br />   

        <i> Book: Aryanna Garber </i> <br />
        <i> Music & Lyrics: Benjamin Velez </i> <br />
        <i> Directed by Jaki Bradley </i> <br />
        <i> Music Directed by David Gardos </i> <br />
        <i> National Music Theater Conference </i> <br /> <br /> 

        <p>After being expelled from college, Anna is stuck with her soon-to-be-remarried father and a revolving door of therapists — thanks to court-mandated probation. This, coupled with a new diagnosis of Borderline Personality Disorder, forces Anna to grapple with demons she has always lived with but never had a name for, until now. Through a unique fusion of pop melodies, jazz harmonies, funk beats and hypnotic waltzes, the score captures the chaotic beauty of a psyche. As this darkly comedic musical asks, how do you reach out for help when you’re afraid to admit you’re sick? </p>

        

      </div>
    </div>
  </Layout>
)

export default BorderlinePage
