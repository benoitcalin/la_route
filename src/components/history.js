import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default function History() {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "images/old-truck.jpg" }) {
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
    <div id="history" className="w-100 d-flex align-items-center justify-content-center">
      <div className="laroute-container-xl d-flex flex-column align-items-center">
        <div className="row">
          <div className="col-sm-12 col-md-6 d-flex align-items-center pr-4">
            <Img
              fluid={data.image1.childImageSharp.fluid}
              alt="Photo vieux camion transport"
              style={{ width: "100%" }}
              imgStyle={{
                objectFit: "contain"
              }}
            />
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="my-4 pl-4">
              <h2 className="text-left my-4">
                Histoire
              </h2>
              <p>
                Fondée en 1934 par Louis René Dalençon, la société La Route est spécialisée dans le transport routier de marchandise. Il obtient en 1950 le statut honorifique de Président National des Affréteurs Routiers.  En 1967 sa fille, Mademoiselle Claude Dalençon, reprend l’affaire familiale, elle est encore aujourd’hui un visage emblématique de l’entreprise.
              </p>
              <p>
                Lui succède en 1979 le petit fils de Louis René Dalençon, Pierre Jean Allard. Toujours acteur de la stratégie de l’entreprise aujourd’hui, il laisse peu à peu les rênes à son fils Pierre Julien Allard qui impulse actuellement un élan de modernité dans l’entreprise tout en conservant les attaches solides qui ont fait la réussite de cette dernière : Disponibilité, Réactivité, Responsabilité.
              </p>
              <p>
                Aujourd’hui, l’entreprise est dotée d’un maillage efficient lui permettant d’intervenir sur l’ensemble du territoire européen.
              </p>
            </div>
          </div>
        </div>
        <div className="separator">
        </div>
      </div>
    </div>
  )
}
