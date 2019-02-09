import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"


export const query = graphql`
  query {
        placeholderImage: file(relativePath: { eq: "wenxuan.jpg" }) {
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


        <p>Wenxuan is an international-based theater maker and teaching artist. Born in a small town in China and grown up in Beijing, Wenxuan is a graduating senior studying theater at Wesleyan University. </p>

        <p>He previously worked at a not-for-profit cultural-exchange organization, Ping Pong Production, as a tour management intern to assist Gu Jiani’s U.S. tour. Over the past summer, he also interned at New York Stage and Film and worked with well-known artists including Jason Robert Brown, Lisa Peterson, James Lecesne. He’s developing a full-length play in fulfillment for Honors Thesis at Wesleyan University Department of Theater. </p>

      </div>
    </div>
  </Layout>
)

export default IndexPage
