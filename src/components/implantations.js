import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

export default function Implantations() {
  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "images/carte.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      city: file(relativePath: { eq: "images/city.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      teamBordeaux: file(relativePath: { eq: "images/equipe-bordeaux.jpg" }) {
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
    <div id="implantations" className="w-100 d-flex align-items-center justify-content-center">
      <div className="laroute-container-xl d-flex flex-column">
        <h2 className="mb-md-4 mb-5 text-md-left text-center">Nos Implantations</h2>
        <div className="row">
          <div className="col-sm-12 col-md-6 d-flex align-items-center justify-content-center pr-4">
            <BackgroundImage
              fluid={data.background.childImageSharp.fluid}
              style={{ width: "530px", height: "530px" }}
              className="france-map"
            >
              <div id="bordeaux">
                <Img
                  fluid={data.city.childImageSharp.fluid}
                  alt="ville"
                  className="markers"
                  style={{ width: "35px" }}
                  imgStyle={{
                    width: "35px",
                    objectFit: "contain"
                  }}
                />
              </div>
              <div id="rouen">
                <Img
                  fluid={data.city.childImageSharp.fluid}
                  alt="ville"
                  className="markers"
                  style={{ width: "35px" }}
                  imgStyle={{
                    width: "35px",
                    objectFit: "contain"
                  }}
                />
              </div>
              <div id="paris">
                <Img
                  fluid={data.city.childImageSharp.fluid}
                  alt="ville"
                  className="markers"
                  style={{ width: "35px" }}
                  imgStyle={{
                    width: "35px",
                    objectFit: "contain"
                  }}
                />
              </div>
            </BackgroundImage>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="text-map my-4 pl-4">
              <h3 className="text-left my-4" style={{ fontWeight: '600' }}>
                Bordeaux
              </h3>
              <p>
                Fondée en 1934 par Louis René Dalençon, la société La Route est spécialisée dans le transport routier de marchandise. Il obtient en 1950 le statut honorifique de Président National des Affréteurs Routiers.  En 1967 sa fille, Mademoiselle Claude Dalençon, reprend l’affaire familiale, elle est encore aujourd’hui un visage emblématique de l’entreprise.
              </p>
              <div className="image-center">
                <Img
                    fluid={data.teamBordeaux.childImageSharp.fluid}
                    alt="ville"
                    className='team-picture'
                    style={{ width: "400px" }}
                    imgStyle={{
                      width: "400px",
                      objectFit: "contain"
                    }}
                  />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
