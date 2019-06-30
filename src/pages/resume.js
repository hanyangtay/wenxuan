import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import adminResume from "../files/Administrative_Resume_Wenxuan.pdf"
import creativeResume from "../files/Artistic_Resume_Wenxuan.pdf"

import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import lightBlue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
  palette: {
    primary: lightBlue,
  },
  typography: {
    useNextVariants: true,
  },
});

const ResumePage = ({ data }) => (
  <Layout>
    <SEO title="Resume" keywords={[`wenxuan`, `theater`, `theatre`, `play`, `actor`, `resume`, `creative`, `administrative`, `administration`]} />

    <h1>Resume</h1>

    <div align="center" id="resume">
        <MuiThemeProvider theme={theme}>
            <a href={creativeResume}><Button variant="contained" color="primary">
              Artistic Resume
            </Button></a> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <a href={adminResume}><Button variant="contained" color="primary">
              Administrative Resume
            </Button></a>
          </MuiThemeProvider>


    </div>
    <br /><br /><br /><br /><br /><br /><br /><br />
  </Layout>
)

export default ResumePage
