import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"


export const query = graphql`
  query {

        image1: file(relativePath: { eq: "mnemonic_sonya_sternlieb_5.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        image2: file(relativePath: { eq: "mnemonic_sonya_sternlieb_2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        image3: file(relativePath: { eq: "mnemonic_sonya_sternlieb_1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        image4: file(relativePath: { eq: "mnemonic_sonya_sternlieb_3.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        image5: file(relativePath: { eq: "mnemonic_sonya_sternlieb_4.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
`

const MnemonicPage = ({ data }) => (
  <Layout>
    <SEO title="Mnemonic" keywords={[`wenxuan`, `theater`, `theatre`, `play`, `actor`, `mnemonic`, `ali`, `jamali`]} />
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
        <h1>Mnemonic</h1>
        
        <b>Role: Actor/Composer</b> <br />
        <i>Created by Complicite<br />
        Directed by Ali Jamali</i><br /><br />

        <p>Virgil is desperately longing for Alice, who abruptly disappeared in search of his thought-to-be-dead father. A mummified corpse, dating back to more than 5000 years ago, is discovered in the mountains. As each character remembers the events of the past, connections appear between the two narratives. Mnemonic (1999), by the British theater company Complicite, incorporates its two parallel stories to explore the act of remembering and the fragmented nature of memory. This thesis production is directed by Ali Jamali '17, in partial fulfillment for Honors in Theater.</p>

        <b>CAST</b> <br />
        Ray Jordan Achan<br />
        Ella Larsen<br />
        Noah Seltzer<br />
        Jordan Tragash<br />
        Sophie Dora Tulchin<br />
        Wenxuan Xue<br /><br />

        <b>ARTISTIC TEAM</b> <br />
        Director: Ali Jamali<br />
        Assistant Director: Yichen Eva Lou<br />
        Composer: Wenxuan Xue<br />
        Costume Designer: Emily Don<br />
        Lighting Designer: Kai Magee<br />
        Projection Designer: Kai Magee<br />
        Scenic Designer: Ali Jamali<br />
        Sound Designer: Gabriel Drozdov<br />
        Stage Manager: Teresa Naval<br /><br />

        Photos by Cybele Moon and Sonya Sternlieb<br />



      </div>
    </div>
  </Layout>
)

export default MnemonicPage
