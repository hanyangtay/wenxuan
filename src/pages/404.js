import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql } from "gatsby"

export const query = graphql`
  query {
        placeholderImage: file(relativePath: { eq: "404.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 404, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
`

const NotFoundPage = ({ data }) => (
  <Layout>
    <SEO title="404: Not found" />
    <div
      class="mainWrapper"
    >
	    <div>
	    	<Img fluid={data.placeholderImage.childImageSharp.fluid} />
	    </div>
	    <div>
		    <h1>Not found</h1>
		    
		    <p>Perhaps you may find me poring over plays at a downtown cafe instead.</p>
	  	</div>
  	</div>
  </Layout>
)

export default NotFoundPage
