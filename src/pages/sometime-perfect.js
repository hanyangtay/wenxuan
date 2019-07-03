import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql } from "gatsby"

export const query = graphql`
  query {

        image1: file(relativePath: { eq: "sometime_perfect_cover.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        image2: file(relativePath: { eq: "sometime_perfect_1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        image3: file(relativePath: { eq: "sometime_perfect_2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        image4: file(relativePath: { eq: "sometime_perfect_3.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }

      }
`

const SometimePerfectPage = ({ data }) => (
  <Layout>
    <SEO title="Edith Can Shoot Things and Hit Them" keywords={[`wenxuan`, `theater`, `theatre`, `play`, `playwright`, `wesleyan`, `thesis`, `sophie`, `dora`, `tulchin`, `sometime`, `perfect`]} />
    <div
      className="mainWrapper"
    >
      <div>
        <Img fluid={data.image2.childImageSharp.fluid} />
        <br />
        <Img fluid={data.image3.childImageSharp.fluid} />
        <br />
        <Img fluid={data.image1.childImageSharp.fluid} />
        <br />
        <Img fluid={data.image4.childImageSharp.fluid} />

      </div>

      <div>
        <h1>sometime, perfect</h1>

        <b> Role: Playwright </b> <br />
        <i> Director: Sophie Dora Tulchin</i> <br />
        <i> Theater Department Honors Playwriting Thesis (Wesleyan University, CT) </i> <br /> <br />

        <a href="https://soundcloud.com/wescfa/center-for-the-arts-radio-hour-episode-30-senior-playwriting-festival-youth-gamelan-ensemble?fbclid=IwAR3uC_pIA0qmX6wTLetiZLEv-pZL2GSaWswIglhmqS2bnlQVXZt_hnDwtM0" target="_blank" rel="noopener noreferrer"> Listen to the interview with Wesleyan University Center for the Arts.</a><br /><br />

        <p>After a recent breakup, Chase seeks healing by narrating stories, and his past with his ex-boyfriend Jay starts to unfold. Through the spell of his music, Chase relives his past over and over again, where he can finally be happy and content. Chase arrives at the threshold between the past and the present, fantasy and reality. What choice will he make? Which world will he belong to?</p>

        <b>CAST</b> <br />
        Shuyuan Liu<br />
        Franklin Ribli<br />
        Yuki Yu<br />
        Estella Zeng<br /><br />

        Photos by Molly Bogin<br />


      </div>
    </div>
  </Layout>
)

export default SometimePerfectPage
