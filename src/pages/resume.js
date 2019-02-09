import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

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
        placeholderImage: file(relativePath: { eq: "resume.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
`

const ResumePage = ({ data }) => (
  <Layout>
    <SEO title="Resume" keywords={[`wenxuan`, `theater`, `theatre`, `play`, `actor`, `resume`]} />

      <div
        className="mainWrapper"
      >
        <div>
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        </div>

        <div>
          <h1>Resume</h1>

          <MuiThemeProvider theme={theme}>
            <Button variant="contained" color="primary">
              Creative Resume
            </Button>

            <br /><br />

            <Button variant="contained" color="primary">
              Administration Resume
            </Button>
          </MuiThemeProvider>
        </div>

      </div>
  </Layout>
)

export default ResumePage
