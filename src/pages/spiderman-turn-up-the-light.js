import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql } from "gatsby"

export const query = graphql`
  query {

        image1: file(relativePath: { eq: "spiderman_william_halliday.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        image2: file(relativePath: { eq: "spiderman_william_halliday3.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        image3: file(relativePath: { eq: "spiderman_william_halliday2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }

      }
`

const SpidermanPage = ({ data }) => (
  <Layout>
    <SEO title="Spiderman, Turn Up the Light" keywords={[`wenxuan`, `theater`, `theatre`, `play`, `actor`, `spiderman`, `turn up the light`]} />
    <div
      className="mainWrapper"
    >
      <div>
        <Img fluid={data.image1.childImageSharp.fluid} />
        <br />
        <Img fluid={data.image2.childImageSharp.fluid} />
        <br />
        <Img fluid={data.image3.childImageSharp.fluid} />
      </div>
      <div>
        <h1>Spiderman, Turn Up the Light</h1>

        <b>Role: Music Director/Composer</b> <br />
        <i>Written by Will McGhee  <br />
        Directed by Elizaveta Kravchenko</i> <br /> <br />

        <p><a href="http://wesleyanargus.com/2016/12/05/spider-man-turn-up-the-light-is-hilariously-disorienting/" target="_blank" rel="noopener noreferrer"> Read the review by Wesleyan Argus.</a></p>
        
        <p>"Spiderman, Turn up the Light" is a fun, bizarre student-written musical featuring songs from Imagine Dragons album <i>Night Vision</i> and student-written songs. The use of puppetry not only capturarizes the human personalities and the potential of the superhero, separating the humans and their counterparts. </p>

        <p><i>"Hilariously disorienting"</i> - The Wesleyan Argus</p>

        <b>CAST</b> <br />
        Isaac Jacobs<br />
        Robin Waterman<br />
        Ryan Nelson<br />
        Dimitri Fulconis<br />
        Connor Aberle<br />
        Griffin Barich<br />
        Olive Wexler<br />
        Jordan Witzel<br />
        Chelsea Shanis<br />
        Justin Campos<br /><br />

        <b>CREW</b> <br />
        Director: Elizaveta Kravchenko<br />
        Stage Managers: Maya Dorn, Erin Hussey<br />
        Music Director: Wenxuan Xue<br /><br />

        Photos by William Halliday<br />


      </div>
    </div>
  </Layout>
)

export default SpidermanPage
