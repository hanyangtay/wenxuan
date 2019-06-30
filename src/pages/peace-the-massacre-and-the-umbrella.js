import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql } from "gatsby"

export const query = graphql`
  query {

        image1: file(relativePath: { eq: "pmu_1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        image2: file(relativePath: { eq: "pmu_2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        image3: file(relativePath: { eq: "pmu_3.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        image4: file(relativePath: { eq: "pmu_4.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        image5: file(relativePath: { eq: "pmu_cover.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
     }
`

const PeaceTheMassacreAndTheUmbrellaPage = ({ data }) => (
  <Layout>
    <SEO title="Peace,the Massacre, And the Umbrella" keywords={[`wenxuan`, `theater`, `theatre`, `play`, `actor`, `peace`]} />
    <div
      className="mainWrapper"
    >
      <div>
        <Img fluid={data.image2.childImageSharp.fluid} />
        <br />
        <Img fluid={data.image5.childImageSharp.fluid} />
        <br />
        <Img fluid={data.image1.childImageSharp.fluid} />
        <br />
        <Img fluid={data.image3.childImageSharp.fluid} />
        <br />
        <Img fluid={data.image4.childImageSharp.fluid} />
      </div>
      <div>
        <h1>Peace,the Massacre, And the Umbrella</h1>
        <b> Role: Assistant Director </b> <br />
        <i> The Plaxall Gallery, NYC </i> <br /><br />
        <i> Playwright: Katrin Arefy </i> <br /> 
        <i> Directed by Ali Jamali </i> <br /> <br />

        <p>PMU aims to question the idea of us versus the other. In the first play of the trilogy, THE ELBISNOPSRES!, breaking news about a distant civilization turns the prosaic tedium of a middle-class households day to a tempest in a teapot. Their attempt to overcome their fear-inducing ignorance by turning to their limited resources results in a farcical event. In the second play, A MASSACRE, discovering a pile of dead bodies in the middle of an office, work colleagues become embroiled in repetitive, predetermined, and nonnegotiable discussions. In the final play, LOVE IS A CARROT! OR CAN YOU LOVE THE UMBRELLA?, six pseudo-intellectual housemates get into endless groundless arguments, contradicting themselves and creating a cacophony of mad unreason. Unable to listen to each other or think outside of their very limited open minds, the characters are truer to our own world than we would like to believe.</p>

        <b>CAST</b> <br />
        Isaac J. Conner <br />
        Marie Dinolan <br />
        Louise Heller <br />
        Ali Jamali <br />
        Feryal Kilisli <br />
        Jonas Kobberdal <br />
        Andy Lachman <br />
        Anuj Parikh <br />
        Giselle Samson <br />
        Danny Schwarz <br /> <br />

        Photos by Aline Salloum<br />


      </div>
    </div>
  </Layout>
)

export default PeaceTheMassacreAndTheUmbrellaPage
