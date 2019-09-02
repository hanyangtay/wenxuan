import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql } from "gatsby"

export const query = graphql`
  query {

        image1: file(relativePath: { eq: "life_as_drama_1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        image2: file(relativePath: { eq: "life_as_drama_2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        image3: file(relativePath: { eq: "life_as_drama_cover.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        image4: file(relativePath: { eq: "life_as_drama_3.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        image5: file(relativePath: { eq: "life_as_drama_4.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        

      }
`

const LifeAsDramaPage = ({ data }) => (
  <Layout>
    <SEO title="Life As Drama: Making Performance Art" keywords={[`wenxuan`, `theater`, `theatre`, `play`, `sound`, `designer`, `人生如戏`, `行为艺术表演创作`, `life as drama`, `making performance art`]} />
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
      </div>
      <div>
        <h1>Life As Drama: Making Performance Art
        <br />人生如戏： 行为艺术表演创作</h1>

        <b>Role: Teacher and Mentor </b><br />
        <i>Xupu No. 1 High School</i><br />
        <i>Hunan, China</i><br />
        <i>PEER 毅恒挚友</i><br /><br />

        <p> The 3-week long seminar course introduces the world of performance art to 10th graders in China. The students learned how to construct performances that are body-based, text-based, durational, site-specific, as well as audience-interactive. With Theater of the Oppressed methodologies, they collaborated among one another and created scenes that speak to the larger community about school bullying, government corruption as well as empty-nest families. </p>

      </div>
    </div>
  </Layout>
)

export default LifeAsDramaPage
