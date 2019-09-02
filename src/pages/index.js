import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import adminResume from "../files/Administrative_Resume_Wenxuan.pdf"
import creativeResume from "../files/Artistic_Resume_Wenxuan.pdf"

import Button from '@material-ui/core/Button'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import lightBlue from '@material-ui/core/colors/blue'

const theme = createMuiTheme({
  palette: {
    primary: lightBlue,
  },
  typography: {
    useNextVariants: true,
  },
})

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
        <span style={{fontSize:"12px"}}><i>Photo by Marianna Sbordone</i></span>
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

        <p>Wenxuan Xue is an international theater maker, arts administrator, and teaching artist based in New York. Recently graduated from Wesleyan University, he is currently working as a Communications Apprentice at <a href="http://www.larktheatre.org" target="_blank" rel="noopener noreferrer">the Lark.</a></p>

        <p>He is committed to creating bridges across cultures and highlighting stories beyond political, social, and national boundaries. He firmly believes that theater, as both a reflection and an imagination of humanity, should be and must be transnational, inclusive, and diverse. </p>

        <p>Feel free to reach him at <a href="mailto:wenxuanarts@gmail.com">wenxuanarts@gmail.com</a>.</p>

        <p>For more information about his experiences, please check his resumes below: </p>

        <div align="center" id="resume">
            <MuiThemeProvider theme={theme}>
                <Button variant="contained" color="primary" href={creativeResume}>
                  Artistic Resume
                </Button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <Button variant="contained" color="primary" href={adminResume}>
                  Administrative Resume
                </Button>
              </MuiThemeProvider>


        </div>

      </div>
    </div>
  </Layout>
)

export default IndexPage
