import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default function Services() {
  const data = useStaticQuery(graphql`
    query {
      palette: file(relativePath: { eq: "services/palette.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ecolo: file(relativePath: { eq: "services/ecolo.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      europe: file(relativePath: { eq: "services/europe.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fast: file(relativePath: { eq: "services/fast.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      network: file(relativePath: { eq: "services/network.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      parking: file(relativePath: { eq: "services/parking.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      project: file(relativePath: { eq: "services/project.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      stocks: file(relativePath: { eq: "services/stocks.png" }) {
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
    <div className="w-100 d-flex flex-column align-items-center justify-content-center" id="services">
      <div className="w-100 d-flex align-items-center justify-content-center"></div>
        <div className="laroute-container-xl mb-laroute">
          <h2 className="mb-laroute">Nos Services</h2>
          <div className="row">
            <div className="col-sm-12 col-md-6 d-flex flex-column align-items-center">
              <div className="service-card">
                <div className="image-container">
                  <Img
                    fluid={data.palette.childImageSharp.fluid}
                    alt="palette"
                    style={{ width: "85px" }}
                    imgStyle={{
                      width: "85px",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <p className="">Transport à partir d’une palette ou équivalent jusqu’au camion complet</p>
              </div>
              <div className="service-card">
                <div className="image-container">
                  <Img
                    fluid={data.europe.childImageSharp.fluid}
                    alt="europe"
                    style={{ width: "85px" }}
                    imgStyle={{
                      width: "85px",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <p className="">Chargement et Livraison sur tout le territoire français et européen</p>
              </div>
              <div className="service-card">
                <div className="image-container">
                  <Img
                    fluid={data.fast.childImageSharp.fluid}
                    alt="fast"
                    style={{ width: "75px", height: '85px' }}
                    imgStyle={{
                      width: "75px",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <p className="">Organisation de navettes régulières, dépannage, transports dédiés, urgence…</p>
              </div>
              <div className="service-card">
                <div className="image-container">
                  <Img
                    fluid={data.project.childImageSharp.fluid}
                    alt="project"
                    style={{ width: "55px", height: '85px' }}
                    imgStyle={{
                      width: "55px",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <p className="">Remise de cotations ou grilles tarifaires selon vos contraintes opérationnelles et dans le rayon souhaité sur simple demande.</p>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 d-flex flex-column align-items-center">
              <div className="service-card">
                <div className="image-container">
                  <Img
                    fluid={data.stocks.childImageSharp.fluid}
                    alt="stocks"
                    style={{ width: "85px" }}
                    imgStyle={{
                      width: "85px",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <p className="">Supply chain externalisé : Gestion complète des approvisionnements et des expéditions. (EDI)</p>
              </div>
              <div className="service-card">
                <div className="image-container">
                  <Img
                    fluid={data.parking.childImageSharp.fluid}
                    alt="parking"
                    style={{ width: "65px", height: '85px' }}
                    imgStyle={{
                      width: "65px",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <p className="">Parking poids lourds</p>
              </div>
              <div className="service-card">
                <div className="image-container">
                  <Img
                    fluid={data.ecolo.childImageSharp.fluid}
                    alt="ecolo"
                    style={{ width: "75px", height: '85px' }}
                    imgStyle={{
                      width: "75px",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <p className="">Camions aux dernières normes de pollution atmosphériques, Géolocalisés et changés tous les 4 ans</p>
              </div>
              <div className="service-card">
                <div className="image-container">
                  <Img
                    fluid={data.network.childImageSharp.fluid}
                    alt="network"
                    style={{ width: "65px", height: '85px' }}
                    imgStyle={{
                      width: "65px",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <p className="">Affrétés permanents / Associés / réseau international de collaborateurs</p>
              </div>
            </div>
          </div>
        </div>
        <div className="separator mb-5">
      </div>


    </div>
  )
}
