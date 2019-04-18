import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql } from "gatsby"

export const query = graphql`
  query {

        image1: file(relativePath: { eq: "xingtai_zihao_zhang.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        image2: file(relativePath: { eq: "xingtai_minglu_gao_1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        image3: file(relativePath: { eq: "xingtai_minglu_gao_2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        image4: file(relativePath: { eq: "xingtai_minglu_gao_3.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        

      }
`

const ShapePage = ({ data }) => (
  <Layout>
    <SEO title="形态 Shape: Shaped" keywords={[`wenxuan`, `theater`, `theatre`, `play`, `sound`, `designer`, `shape`, `shaped`]} />
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
      </div>
      <div>
        <h1>形态 Shape: Shaped</h1>

        <b> Role: Sound Designer </b> <br />
        <i>Directed by Yiyi Liu</i><br /><br />

        <p> "形态Shape: Shaped" is an immersive, multimedia physical theater show conceived and directed by Yiyi Liu at various locations in Beijing including China Art Gallery  and 798 Art District, with a group of young Chinese actors. </p>





      </div>
    </div>
  </Layout>
)

export default ShapePage
