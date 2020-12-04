import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

export default function Team() {
  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "images/blue-truck.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      adrien: file(relativePath: { eq: "team/adrien.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      emma: file(relativePath: { eq: "team/emma.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mickael: file(relativePath: { eq: "team/mickael.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="w-100 mb-laroute" id="team">
        <BackgroundImage
            fluid={data.background.childImageSharp.fluid}
            className="d-flex align-items-center justify-content-center"
          >
          <div className="laroute-container-xl mb-laroute">
            <h2 className="text-center text-white mt-laroute mb-laroute" style={{ fontWeight: '500' }}>Votre équipe commerciale</h2>
            <div className="row w-100">
              <div className="col-sm-12 col-md-4 d-flex flex-column align-items-center">
                <Img
                  fluid={data.adrien.childImageSharp.fluid}
                  alt="Adrien"
                  style={{ marginBottom: '15px' }}
                  imgStyle={{
                    objectFit: "contain",
                  }}
                />
                <h3 className="mb-md-2 mb-4">Adrien Maire</h3>
              </div>
              <div className="col-sm-12 col-md-4 d-flex flex-column align-items-center">
                <Img
                  fluid={data.emma.childImageSharp.fluid}
                  alt="Emma"
                  style={{ marginBottom: '15px' }}
                  imgStyle={{
                    objectFit: "contain",
                  }}
                />
                <h3 className="mb-md-2 mb-4">Emma Le Guerrannic</h3>
              </div>
              <div className="col-sm-12 col-md-4 d-flex flex-column align-items-center">
                <Img
                  fluid={data.mickael.childImageSharp.fluid}
                  alt="Mickael"
                  style={{ marginBottom: '15px' }}
                  imgStyle={{
                    objectFit: "contain",
                  }}
                />
                <h3 className="mb-md-2 mb-4">Mickaël Cabe</h3>
              </div>
            </div>
          </div>
        </BackgroundImage>
    </div>
  )
}
