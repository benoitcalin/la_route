import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default function Who() {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "images/carriere.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    image2: file(relativePath: { eq: "images/carte_france.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid(maxWidth: 140) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div id="who">
      <div className="who">
        <div className="map-container">
          <Img
            fluid={data.image2.childImageSharp.fluid}
            alt="Image carte de france"
            className="map"
          />
        </div>
        <div className="container">
          <h2>QUI SOMMES-NOUS ?</h2>
          <h3>
            Consultants indépendants
            <br />
            Experts environnement, réglementation, HSE
            <br />
            Partenaires de la réussite de vos projets
          </h3>
          <div className="row">
            <div className="col-4">
              <Img
                fluid={data.image1.childImageSharp.fluid}
                alt="Photo d'un carrière"
              />
            </div>
            <div className="col-8 d-flex align-items-center">
              <div className="content">
                <p>
                  <strong>Bienvenue,</strong>
                </p>
                <p>
                  Nous sommes <strong>GEONESS Développement</strong>, bureau
                  d’études en conseils et ingénierie environnementale.
                </p>
                <p>
                  Votre partenaire sur le{" "}
                  <strong>
                    volet environnementale et réglementaire de vos projets
                  </strong>
                  , de vos installations, de vos programmes de planification et
                  d’aménagement.
                </p>
                <p className="mb-0">
                  <strong>
                    GEONESS Développement est un bureau d’études en perpétuel
                    développement
                  </strong>{" "}
                  pour répondre aux besoins d’une société qui évolue très
                  rapidement dans la prise de conscience du monde qui l’héberge.
                </p>
              </div>
            </div>
            <h3 className="text-center w-100 who-values">
              FIABILITÉ &nbsp;&nbsp;-&nbsp;&nbsp; SAVOIR-FAIRE
              &nbsp;&nbsp;-&nbsp;&nbsp; ADAPTABILITÉ &nbsp;&nbsp;-&nbsp;&nbsp;
              CONSEIL
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}
