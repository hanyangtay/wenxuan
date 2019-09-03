import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql } from "gatsby"

export const query = graphql`
  query {

        image1: file(relativePath: { eq: "maggie_1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        image2: file(relativePath: { eq: "maggie_2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        image3: file(relativePath: { eq: "maggie_cover.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        image4: file(relativePath: { eq: "maggie_3.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        image5: file(relativePath: { eq: "maggie_4.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        image6: file(relativePath: { eq: "maggie_5.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        

      }
`

const MaggiePage = ({ data }) => (
  <Layout>
    <SEO title="Maggie" keywords={[`wenxuan`, `theater`, `theatre`, `play`, `maggie`, `New York Theater Festival`, `One-Act SummerFest`, `Hudson Guild Theater`]} />
    <div
      className="mainWrapper"
    >
      <div>
        <Img fluid={data.image1.childImageSharp.fluid} />
        <br />
        <Img fluid={data.image2.childImageSharp.fluid} />
        <br />
        <Img fluid={data.image3.childImageSharp.fluid} />
        <br />
        <Img fluid={data.image4.childImageSharp.fluid} />
        <br />
        <Img fluid={data.image5.childImageSharp.fluid} />
        <br />
        <Img fluid={data.image6.childImageSharp.fluid} />
      </div>
      <div>
        <h1>Maggie</h1>

        <b>Role: Director </b><br />
        <i>Written by Nathan Liu</i><br />
        <i>New York Theater Festival, One-Act SummerFest, NY</i><br />
        <i>Hudson Guild Theater</i><br /><br />

        <p>Desperate for money, a struggling lesbian musician goes home to visit her estranged, homophobic father in the hopes that he will help her.</p>

        <b>CAST</b> <br />
        Keizo Kaji<br />
        Libby Lee<br />
        Sara Rahman<br />

      </div>
    </div>
  </Layout>
)

export default MaggiePage
