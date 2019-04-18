import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql } from "gatsby"

export const query = graphql`
  query {

        image1: file(relativePath: { eq: "halliday_mr-burns-13.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        image2: file(relativePath: { eq: "halliday_mr-burns-18.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        image3: file(relativePath: { eq: "halliday_mr-burns-21.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        image4: file(relativePath: { eq: "halliday_mr-burns-22.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        image5: file(relativePath: { eq: "halliday_mr-burns-27.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        image6: file(relativePath: { eq: "halliday_mr-burns-28.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
`

const BurnsPage = ({ data }) => (
  <Layout>
    <SEO title="Mr. Burns, A Post Electric Play" keywords={[`wenxuan`, `theater`, `theatre`, `play`, `actor`, `Burns`, `post-electric`, `electric`]} />
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
        <h1>Mr. Burns, A Post Electric Play</h1>

        <b>Role: Music Director</b> <br />
        <i>Written by Anne Washburn & Michael Friedman <br />
        Directed by Pirronne Yousefzadeh</i> <br /> <br />

        <a href="http://wesleyanargus.com/2018/11/26/mr-burns-is-a-darkly-surreal-tribute-to-the-power-of-narrative/" target="_blank" rel="noopener noreferrer"> Read the review by Wesleyan Argus</a>.<br /><br />
        
        <p>“Mr. Burns, a post-electric play” reminds us that amidst environmental disaster and the collapse of civilization, we turn to art and entertainment and our ability to tell stories to survive. Whether it’s an episode of “The Simpsons,” or a liberal arts college production of an experimental play, or an episode of “The Simpsons” within a liberal arts college production of an experimental play, it is the telling and retelling of stories that allow us to reconcile our fears and anxieties about the future and endure.” <div style={{textAlign: `right`}}><i>Allison Hsu, The Wesleyan Argus</i></div></p>

        <b>CAST</b> <br />
        Max Johnson<br />
        Capri Gehred-O’Connell<br />
        Luna Mac-Williams<br />
        Marcos Pinto-Leite<br />
        Analiese Guettinger<br />
        Julia Chung<br />
        Maria Noto<br />
        Nathan Mullen<br /><br />

        <b>ARTISTIC TEAM</b> <br />
        Director: Pirronne Yousefzadeh<br />
        Choreography Team: Julie Mulvihill, Shana Laski<br />
        Fight Director: Corey Sorenson<br />
        Music Directors: Wenxuan Xue, Maddie Ulevich<br />
        Costume Designer: Summer Lee Jack<br />
        Set Designer: Emmie Finckel<br />
        Lighting Designer: Calvin Anderson<br />
        Sound Designer: Anthony Dean<br />
        Dramaturge: Eliza Wilkins<br /><br />

        Photos by William Halliday<br />


      </div>
    </div>
  </Layout>
)

export default BurnsPage
