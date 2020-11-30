import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

export default function ClientSpace() {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "images/blue-truck.jpg" }) {
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
    <div className="w-100 mb-laroute" id="client-space">
        <BackgroundImage
            fluid={data.image1.childImageSharp.fluid}
            className="d-flex align-items-center justify-content-center"
          >
          <div className="laroute-container-xl client-space-container">
            <div className="my-client-space d-flex flex-column align-items-center justify-content-around">
              <h2 className="my-client-space text-white text-center" style={{maxWidth: '1200px'}}>Pour vos commandes, c’est ici que ça se passe !</h2>
              <Link className="my-client-space linky btn-laroute client-space-link" to="#">
                Espace Client
              </Link>
              <h2 className="my-client-space text-white text-center" style={{maxWidth: '1200px'}}>Vous êtes transporteurs, déposez vos justificatifs de livraison et autres documents ici !</h2>
              <Link className="my-client-space linky btn-laroute client-space-link" to="#">
                Espace Transporteur
              </Link>
            </div>
          </div>
        </BackgroundImage>
    </div>
  )
}
