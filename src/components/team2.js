import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default function Team2() {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "images/mariejulia.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image2: file(relativePath: { eq: "images/coralie.jpg" }) {
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
    <div className="team">
      <div className="container">
        <div className="team-card row">
          <div className="col-6 team-2-card">
            <Img
              fluid={data.image1.childImageSharp.fluid}
              alt="Marie-Julia GOUBOT"
              style={{
                width: "250px",
                height: "330px",
                objectFit: "contain",
              }}
            />
            <h3 className="mb-2">Marie-Julia GOUBOT</h3>
            <h4>Ingénieur ENS Géologie</h4>
            <h4>Fondatrice de GEONESS (2012)</h4>
          </div>

          <div className="col-6 team-2-card">
            <Img
              fluid={data.image2.childImageSharp.fluid}
              alt="Coralie TOUVENOT"
              style={{
                width: "250px",
                height: "330px",
                objectFit: "contain",
              }}
            />
            <h3 className="mb-2">Coralie TOUVENOT</h3>
            <h4>Ingénieur Sécurité Environnement</h4>
            <h4 className="mb-4">Spécialisation HSE</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
