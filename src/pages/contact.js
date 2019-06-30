import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql } from "gatsby"

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

const ContactPage = ({ data }) => (
  <Layout>
    <SEO title="Contact" keywords={[`wenxuan`, `theater`, `theatre`, `play`, `actor`, `contact`]} />
    <div
      className="mainWrapper"
    >
      <div>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        <span style={{fontSize:"12px"}}><i>Photo by Marianna Sbordone</i></span>
      </div>
      <div>
        <h1>Contact</h1>

        <p>Feel free to reach me at <a href="mailto:wenxuanarts@gmail.com">wenxuanarts@gmail.com</a>.</p>


      </div>
    </div>
  </Layout>
)

export default ContactPage
