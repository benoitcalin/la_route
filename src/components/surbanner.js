import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
// import Img from "gatsby-image"

export default function Surbanner() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/subbanner.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div id="start">
      <BackgroundImage
        fluid={data.file.childImageSharp.fluid}
        className="w-100 surbanner"
        style={{
          top: 75,
        }}
      >
        <h1>
          Spécialiste en expertise environnementale,
          <br/>
          à votre service par ses
          moyens et son expérience pour garantir la concrétisation de vos
          projets.
        </h1>
      </BackgroundImage>
    </div>
  )
}
