import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default function Services() {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "images/chrono.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image2: file(relativePath: { eq: "images/identity.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image3: file(relativePath: { eq: "images/certification.png" }) {
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
    <div className="w-100 d-flex align-items-center justify-content-center" id="codes">
      <div className="laroute-container-xl mb-laroute">
        <h2 className="mb-laroute">Les codes de La Route</h2>
        <div className="row">
          <div className="col-sm-12 col-md-4 d-flex flex-column align-items-center">
            <Img
              fluid={data.image1.childImageSharp.fluid}
              alt="Chronomètre"
              style={{ width: "150px" }}
              imgStyle={{
                width: "150px",
                objectFit: "contain",
              }}
            />
            <div className='d-flex align-items-center my-4' style={{ height: '56px'}}>
              <h3>Souplesse et réactivité</h3>
            </div>
            <p className="text-center">Réponse garantie à toutes les demandes.</p>
          </div>

          <div className="col-sm-12 col-md-4 d-flex flex-column align-items-center">
            <Img
              fluid={data.image2.childImageSharp.fluid}
              alt="Carte identité"
              style={{ width: "150px", height: '150px' }}
              imgStyle={{
                width: "150px",
                objectFit: "contain",
              }}
            />
            <div className='d-flex align-items-center my-4' style={{ height: '56px'}}>
              <h3>Approche personnalisée</h3>
            </div>
            <p className="text-center">
              Parce que chacun de nos clients est différent, parce que vos besoins sont uniques.
              L’humain reste notre priorité.
            </p>
          </div>

          <div className="col-sm-12 col-md-4 d-flex flex-column align-items-center">
            <Img
              fluid={data.image3.childImageSharp.fluid}
              alt="Badge certification"
              style={{ width: "150px" }}
              imgStyle={{
                width: "150px",
                objectFit: "contain",
              }}
            />
            <div className='d-flex align-items-center my-4' style={{ height: '56px'}}>
              <h3>Qualité et respect des engagements</h3>
            </div>
            <p className="text-center">Livraison dans les délais impartis et suivi du transport, du chargement à la livraison.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
