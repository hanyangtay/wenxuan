import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql } from "gatsby"

export const query = graphql`
  query {

        image1: file(relativePath: { eq: "right_and_left.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        image2: file(relativePath: { eq: "right_and_left_2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }

      }
`

const GuJianiRightLeftPage = ({ data }) => (
  <Layout>
    <SEO title="Gu Jiani Right/Left U.S. Tour" keywords={[`wenxuan`, `theater`, `theatre`, `play`, `music`, `director`, `gu jiani`, `ping pong productions`]} />
    <div
      className="mainWrapper"
    >
      <div>
        <Img fluid={data.image1.childImageSharp.fluid} />
        <br />
        <Img fluid={data.image2.childImageSharp.fluid} />
      </div>
      <div>
        <h1>Gu Jiani Right/Left U.S. Tour</h1>


        <b> Role: Assistant Tour Manager </b> <br />
        <i> Created by Gu Jiani </i><br /><br />

        <p>“The effect is magnetic: even the silences leave us breathless” <div style={{textAlign: `right`}}><i> Timeout Beijing </i></div></p>
        <p>“Innovative… Gu is unafraid to break the rules” <div style={{textAlign: `right`}}><i> Huffington Post US </i></div></p>

        <p>“Gu Jiani’s ‘Right and Left,’ deftly tells a tale of relationship in a technologized, urban era, using choreography that is executed to express a deeply intimate connection – one that exemplifies violence, subjugation, confrontation, guilt, trust, surrender, acceptance and transformation.... ... ‘Right and Left’ becomes transformed into a new view of partnership, balance, and perhaps, simple acceptance of life on life’s terms.” <div style={{textAlign: `right`}}><i> Jean Jung from The International Examiner</i></div></p>

        <b>1, 3, 4 June, 2017</b> <br />
        San Francisco International Arts Festival, part of the Fort Mason Center Presents series<br /><br />
        <b>9, 10 June, 2017</b> <br />
        Seattle International Dance Festival<br />
        16, 17 June, 2017: Los Angeles, The Huntington Gardens & Library<br /><br />
        <b>22 June, 2017</b> <br />
        New York City JACK Theatre - special appearance for University of Michigan book launch gala concert<br /><br />

        <b>PERFORMERS</b><br />
        Gu Jiani<br />
        Wang Xuanqi<br />
        Li Ah-Ping<br /><br />

        <b>ARTISTIC TEAM</b><br />
        Stage manager: Ray Tseng<br />
        Tour manager: Alison M. Friedman<br />
        Assistant Tour Manager: Wenxuan Xue<br /><br />

        Photos by Ping Pong Productions<br />

      </div>
    </div>
  </Layout>
)

export default GuJianiRightLeftPage
