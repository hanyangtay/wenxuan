import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

export const query = graphql`
  query {

        image1: file(relativePath: { eq: "life_as_drama_cover.jpg" }) {
          childImageSharp {
            fixed(width: 280, height: 280) {
              ...GatsbyImageSharpFixed
            }
          }
        }

        image2: file(relativePath: { eq: "edith_1.jpg" }) {
          childImageSharp {
            fixed(width: 280, height: 280) {
              ...GatsbyImageSharpFixed
            }
          }
        }

        image3: file(relativePath: { eq: "halliday_mr-burns_cover.jpg" }) {
          childImageSharp {
            fixed(width: 280, height: 280) {
              ...GatsbyImageSharpFixed
            }
          }
        }

        image4: file(relativePath: { eq: "mnemonic_cover.jpg" }) {
          childImageSharp {
            fixed(width: 280, height: 280) {
              ...GatsbyImageSharpFixed
            }
          }
        }

        image5: file(relativePath: { eq: "spiderman_william_halliday_cover.jpg" }) {
          childImageSharp {
            fixed(width: 280, height: 280) {
              ...GatsbyImageSharpFixed
            }
          }
        }

        image6: file(relativePath: { eq: "maggie_cover.jpg" }) {
          childImageSharp {
            fixed(width: 280, height: 280) {
              ...GatsbyImageSharpFixed
            }
          }
        }

        image7: file(relativePath: { eq: "xingtai_minglu_gao_1.jpg" }) {
          childImageSharp {
            fixed(width: 280, height: 280) {
              ...GatsbyImageSharpFixed
            }
          }
        }

        image8: file(relativePath: { eq: "sometime_perfect_cover_cropped.jpg" }) {
          childImageSharp {
            fixed(width: 280, height: 280) {
              ...GatsbyImageSharpFixed
            }
          }
        }

      }
`

const ProjectPage = ({ data }) => (
  <Layout>
    <SEO title="Projects" keywords={[`wenxuan`, `theater`, `theatre`, `play`, `actor`, `projects`]} />

    <h1>Projects</h1>

    <div id="projects">
      <Link to="/life-as-drama" className="projectImgWrapper">
        <Img fixed={data.image1.childImageSharp.fixed} />
        <div className="projectTitle"> Life As Drama: Making Performance Art</div>
      </Link>
      <Link to="/maggie" className="projectImgWrapper">
        <Img fixed={data.image6.childImageSharp.fixed} />
        <div className="projectTitle"> Maggie </div>
      </Link>
      <Link to="/sometime-perfect" className="projectImgWrapper">
        <Img fixed={data.image8.childImageSharp.fixed} />
        <div className="projectTitle"> sometime, perfect </div>
      </Link>
      <Link to="/edith-can-shoot-things-and-hit-them" className="projectImgWrapper">
        <Img fixed={data.image2.childImageSharp.fixed} />
        <div className="projectTitle"> Edith Can Shoot Things and Hit Them </div>
      </Link>
      <Link to="/mr-burns-a-post-electric-play" className="projectImgWrapper">
        <Img fixed={data.image3.childImageSharp.fixed} />
        <div className="projectTitle"> Mr. Burns, A Post Electric Play </div>
      </Link>
      <Link to="/mnemonic" className="projectImgWrapper">
        <Img fixed={data.image4.childImageSharp.fixed} />
        <div className="projectTitle"> Mnemonic </div>
      </Link>
      <Link to="/spiderman-turn-up-the-light" className="projectImgWrapper">
        <Img fixed={data.image5.childImageSharp.fixed} />
        <div className="projectTitle"> Spiderman, Turn up the Light </div>
      </Link>
      <Link to="/shape-shaped" className="projectImgWrapper">
        <Img fixed={data.image7.childImageSharp.fixed} />
        <div className="projectTitle"> 形态 Shape: Shaped </div>
      </Link>
    </div>
  </Layout>
)


// <h1>Upcoming Projects</h1>
//    <ul>
//      <li><b>PEER Experience Exchange Rostrum</b>, Hunan, China <br />
//      <i>Volunteer Teacher in Hunan, China </i>
//        Wenxuan will be teaching a seminar course for Chinese high school students in a under-developed region in Hunan this July. The seminar is titled “Life as Drama: Making Performance Art” and will cover  the histories, theories as well as the makings of performance arts. </li>
//    </ul>
//  <br />
export default ProjectPage
