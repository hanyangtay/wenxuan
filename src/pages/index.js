import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql } from "gatsby"

export const query = graphql`
  query {
        placeholderImage: file(relativePath: { eq: "wenxuan_cover.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="About" keywords={[`wenxuan`, `theater`, `theatre`, `play`, `actor`]} />
    <div
      className="mainWrapper"
    >
      <div>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        <span style={{fontSize:"12px"}}><i>Photo by Nina Wurtzel Photography</i></span>
      </div>
      <div>
        <h1>About</h1>
        
        <span style={{
          fontSize: `16px`,
          fontFamily: `serif`,
          fontWeight: `800`,
          }}>Wenxuan Xue</span><br />
        <span style={{
          fontFamily: `serif`,
          fontStyle: `italic`,
          }}>wen-shoo-an, shoo-e</span><br />
        <span style={{
          fontFamily: `serif`,
          }}> he/him/his </span><br /><br />

        <p>Wenxuan Xue is an international theater maker, arts administrator, and teaching artist based in New York. Originally from Beijing, China, he recently graduated from Wesleyan University. He is currently the 19-20 Communication Apprentice at the Lark Play Development Center.</p>

        <p>He previously worked as an assistant tour manager at Ping Pong Productions, bringing contemporary Chinese dance to the U.S. and served as an assistant director for the world premiere of Mara Nelson-Greenberg’s The Clitorish directed by Jennifer Chang. He also participated in new musical theater development as a music assistant in New York Stage and Film Powerhouse and the Eugene O’Neill Theater Center. As a teaching artist, he taught a student-led course "Performing Asian Transnationalism" at Wesleyan and a seminar “Life as Drama: Making Performance Arts” at a high school in an underdeveloped region in China. He is committed to creating bridges across cultures and highlighting stories beyond political, social, and national boundaries. He firmly believes that theater, as both a reflection and an imagination of humanity, should be and must be transnational, inclusive, and diverse.</p>

        <p>He was the recipient of Rachel Henderson Theater Prize, Ganbarg Music Grant, and Honors for Thesis in Playwriting at Wesleyan University.</p>

      </div>
    </div>
  </Layout>
)

export default IndexPage
