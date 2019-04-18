import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

export const query = graphql`
  query {
        image1: file(relativePath: { eq: "clitorish_lloyd_mulvey_2.png" }) {
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

        image6: file(relativePath: { eq: "right_and_left_cover.jpg" }) {
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

      }
`

const ProjectPage = ({ data }) => (
  <Layout>
    <SEO title="Projects" keywords={[`wenxuan`, `theater`, `theatre`, `play`, `actor`, `projects`]} />
    
    <h1>Upcoming Projects</h1>
      <ul>
        <li> <b>sometime, perfect</b>, Playwright <br />
          <i>Theater Department Honors Playwriting Thesis</i> <br />
After a recent breakup, Chase seeks healing by narrating stories, and his past with his ex-boyfriend Jay starts to unfold. Through the spell of his music, Chase relives his past over and over again, where he can finally be happy and content. Chase arrives at the threshold between the past and the present, fantasy and reality. What choice will he make? Which world will he belong to? 
        </li>
      </ul>
    <br />

    <h1>Projects</h1>

    <div id="projects">

      <Link to="/the-clitorish" className="projectImgWrapper">
        <Img fixed={data.image1.childImageSharp.fixed} />
        <div className="projectTitle"> The Clitorish </div>
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
      <Link to="/gu-jiani-right-left-us-tour" className="projectImgWrapper">
        <Img fixed={data.image6.childImageSharp.fixed} />
        <div className="projectTitle"> Gu Jiani Right/Left U.S. Tour </div>
      </Link>
      <Link to="/shape-shaped" className="projectImgWrapper">
        <Img fixed={data.image7.childImageSharp.fixed} />
        <div className="projectTitle"> 形态 Shape: Shaped </div>
      </Link>
    </div>
  </Layout>
)

export default ProjectPage
