import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default function Team() {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "images/mosaique.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image2: file(relativePath: { eq: "images/fleche.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div id="team">
      <div className="team">
        <div className="container">
          <h2>NOTRE ÉQUIPE</h2>
        </div>
      </div>
    </div>
  )
}
