import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"


export const query = graphql`
  query {

        image1: file(relativePath: { eq: "edith_1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        image2: file(relativePath: { eq: "edith_2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        image3: file(relativePath: { eq: "edith_01.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        image4: file(relativePath: { eq: "edith_02.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        image5: file(relativePath: { eq: "edith_03.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        image6: file(relativePath: { eq: "edith_04.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        image7: file(relativePath: { eq: "edith_05.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        image8: file(relativePath: { eq: "edith_06.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        image9: file(relativePath: { eq: "edith_07.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
`

const EdithPage = ({ data }) => (
  <Layout>
    <SEO title="Edith Can Shoot Things and Hit Them" keywords={[`wenxuan`, `theater`, `theatre`, `play`, `actor`, `edith`]} />
    <div
      className="mainWrapper"
    >
      <div>
        <Img fluid={data.image2.childImageSharp.fluid} />
        <br />
        <Img fluid={data.image3.childImageSharp.fluid} />
        <br />
        <Img fluid={data.image4.childImageSharp.fluid} />
        <br />
        <Img fluid={data.image1.childImageSharp.fluid} />
        <br />
        <Img fluid={data.image5.childImageSharp.fluid} />
        <br />
        <Img fluid={data.image6.childImageSharp.fluid} />
        <br />
        <Img fluid={data.image7.childImageSharp.fluid} />
        <br />
        <Img fluid={data.image8.childImageSharp.fluid} />
        <br />
        <Img fluid={data.image9.childImageSharp.fluid} />
      </div>
      <div>
        <h1>Edith Can Shoot Things and Hit Them</h1>

        <b> Role: Director </b> <br />
        <b> Co-director: Amira Leila S. </b> <br /><br />

        <a href="http://wesleyanargus.com/2018/11/12/edith-contrasts-childhood-innocence-and-angst-to-dramatic-effect/" target="_blank" rel="noopener noreferrer"> Read the review by the Wesleyan Argus </a><br /><br />

        <p>“Growing up, I never found a way to reconcile my queer and Asian identities which had been constantly conflicting with one another. However, when I first came across this play last year, I finally realized that at least I’m not alone in this quest and there’s hope for me to find a sense of belonging that once seemed distant to me. This play is unequivocally queer and Asian American, and also deeply human. It’s essentially a coming-of-age story about three kids trying to construct a family of their own against all odds from the outside world. Witnessing the growth of these three characters- Edith, Kenny and Benji has inspired and will continue inspiring me to face the chaotic world, with faith.” <br /><div style={{textAlign: `right`}}><i>Wenxuan Xue</i></div></p>
  
        <br />

        <p>“As brought to life by directing pair, Wenxuan Xue ’19 and Amira Leila S. ’20, ‘Edith’ is both a harrowing drama and an optimistic reminder of the beauty of human relationships… … It’s that contrast between comforting sentiments and difficult realities that helps ‘Edith’ excel. Its most heartwarming scenes make its most painful moments all the more devastating, and watching the pain its characters suffer through makes it all the more of a relief when something good happens. It’s a play of sharp contrasts that somehow all fit together.” <br /><div style={{textAlign: `right`}}><i>Henry Spiro, The Wesleyan Argus</i></div></p>

        <b>CAST</b> <br />
        Candice April Cirilo<br />
        Rama Co<br />
        Dabin Shin<br /><br />

        <b>ARTISTIC TEAM</b> <br />
        Directors - Wenxuan Xue, Amira Leila S.<br />
        Stage Managers - Susanna Kim, Jordan K. Legaspi<br />
        Events Coordinator - Teresa Naval<br />
        Dramaturg - Nathan Pugh<br />
        Scenic Designer - Daniel Gordon<br />
        Props Designer - Ariel Deutsch<br />
        Sound Designer - Adam Munawar Rahman<br />
        Lighting Designer - Hope Fourie<br />
        Costume Designer - Helen Wang<br />
        Poster Designers - Maxine Go, Philippe Bungabong<br /><br />

        Photos by Thao Phan<br />


      </div>
    </div>
  </Layout>
)

export default EdithPage
