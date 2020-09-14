import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default function Team() {
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
    <div id="team">
      <div className="team">
        <div className="container">
          <h2>NOTRE ÉQUIPE</h2>

          <div className="team-card row mb-4">
            <div className="col-4 d-flex align-items-center justify-content-center">
              <Img
                fluid={data.image1.childImageSharp.fluid}
                alt="Marie-Julia GOUBOT"
                style={{
                  width: "250px",
                  height: "330px",
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="team-card-content col-8">
              <div className="btn-geoness-container btn-cv">
                <a href="#" className="btn btn-geoness my-3">
                  CV
                </a>
              </div>
              <h3 className="mb-2">Marie-Julia GOUBOT</h3>
              <h4>Ingénieur ENS Géologie</h4>
              <h4>Fondatrice de GEONESS (2012)</h4>
              <h4 className="mb-4">
                Après 8 années de collaboration au sein d’un BE indépendant
                spécialisé environnement et géotechnique
              </h4>

              <p>Passions : sport, développement professionnel</p>
              <p>Hobbies : décorations, découverte des territoires</p>
              <p>Atouts : sens du contact, vision prospective</p>
              <p className="mb-4">Points forts : persévérance, ambition</p>

              <a
                href="mailto:contact@geoness.net?subject=Message à Geoness depuis le site internet"
                className="contact-link"
              >
                contact@geoness.net
              </a>
            </div>
          </div>

          <div className="team-card team-card2 row mb-4">
            <div className="col-4 d-flex align-items-center justify-content-center">
              <Img
                fluid={data.image2.childImageSharp.fluid}
                alt="Coralie TOUVENOT"
                style={{
                  width: "250px",
                  height: "330px",
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="team-card-content col-8">
              <div className="btn-geoness-container btn-cv">
                <a href="#" className="btn btn-geoness my-3">
                  CV
                </a>
              </div>
              <h3 className="mb-2">Coralie TOUVENOT</h3>
              <h4>Ingénieur Sécurité Environnement</h4>
              <h4>Collaboratrice au sein de GEONESS depuis 2012</h4>
              <h4 className="mb-4">
                Spécialisation HSE et plusieurs expériences professionnelles en
                entreprise ou au sein de collectivités
              </h4>

              <p>Passions : pâtisserie, création</p>
              <p>Hobbies : DIY, voyages</p>
              <p>Atouts : sens de l’écoute et de l’implication</p>
              <p className="mb-4">Points forts : rigueur, détermination</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
