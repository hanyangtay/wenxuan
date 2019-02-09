import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"


export const query = graphql`
  query {

        image2: file(relativePath: { eq: "clitorish_lloyd_mulvey_2.png" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        image3: file(relativePath: { eq: "clitorish_lloyd_mulvey_3.png" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
`

const ClitorishPage = ({ data }) => (
  <Layout>
    <SEO title="The Clitorish" keywords={[`wenxuan`, `theater`, `theatre`, `play`, `actor`, `clitorish`]} />
    <div
      className="mainWrapper"
    >
      <div>
        <Img fluid={data.image2.childImageSharp.fluid} />
        <br />
        <Img fluid={data.image3.childImageSharp.fluid} />
      </div>
      <div>
        <h1>The Clitorish</h1>

        <b> Role: Assistant Director </b> <br />
        <i> Written by Mara Nelson-Greenberg <br />
        Directed by Jennifer Chang </i>  <br /> <br />

        <p>In The Clitorish, a savvy new comedy by Mara Nelson-Greenberg, a husband and wife discover their teenage son has confused a diagram of a vagina for a map of the Middle East. What else is there to do? Hire a vagina tutor! The Clitorish explores "truthiness," the relationship between the sexes, the unwritten rules of the world...and who gets to write them.</p>

        <b> CAST </b> <br />
        Tony Carlin <br />
        Robin Abramson <br />
        Aaron Costa Ganis <br /> <br />

        <b> ARTISTIC TEAM </b><br /> 
        Director: Jennifer Chang <br />
        Stage Manager: Yetti Steinman <br />
        Scenic Designer: Diggle <br />
        Lighting Designer: Lois Gordon <br />
        Costume Designer: Sabrina Bianca Guillaume <br />
        Sound Designer: Marc Jablonski <br />
        Props Designer: Claire Brady <br /> <br />

        Photos by Lloyd Mulvey <br />


      </div>
    </div>
  </Layout>
)

export default ClitorishPage
