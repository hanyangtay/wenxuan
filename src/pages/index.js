import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import adminResume from "../files/Administrative_Resume_Wenxuan.pdf"
import creativeResume from "../files/Creative_Resume_Wenxuan.pdf"

import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import blueGrey from '@material-ui/core/colors/blueGrey';

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
  },
  typography: {
    useNextVariants: true,
  },
});

export const query = graphql`
  query {
        placeholderImage: file(relativePath: { eq: "wenxuan_cover.jpg" }) {
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
        <span style={{fontSize:"12px"}}><i>Photo by Nina Wurtzel Photography</i></span>
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

        <p>I am an international-based theater maker and teaching artist. Born in a small town in China and grown up in Beijing, I am a graduating senior studying theater at Wesleyan University.</p> 

        <p>I previously worked at a not-for-profit cultural-exchange organization, Ping Pong Productions, as a tour management intern to assist Gu Jiani’s U.S. tour. Over the past summer, I also interned at New York Stage and Film and worked with well-known artists including Jason Robert Brown, Lisa Peterson, James Lecesne. I recently assisted Drama League directing fellow Jennifer Chang on the New York premiere of “The Clitorish” by Mara Nelson-Greenberg. Now, I am developing a full-length play in fulfillment for Honors Thesis at Wesleyan University Department of Theater.</p>

        <MuiThemeProvider theme={theme}>
            <a href={creativeResume}><Button variant="contained" color="primary">
              Creative Resume
            </Button></a>

            <br /><br />

            <a href={adminResume}><Button variant="contained" color="primary">
              Administrative Resume
            </Button></a>
          </MuiThemeProvider>

      </div>
    </div>
  </Layout>
)

export default IndexPage
