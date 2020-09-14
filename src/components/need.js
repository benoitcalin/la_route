import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faUsers,
  faTools
} from "@fortawesome/free-solid-svg-icons"

export default function Need() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/fleur.png" }) {
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
    <div id="need">
      <div className="need">
        <div className="container">
          <div className="row">
            <div className="col-9">
              <h3>Vos besoins</h3>
              <ul className="pr-4">
                <li>
                  Vous recherchez un partenaire engagé, à votre écoute, qui
                  sache comprendre votre fonctionnement et vos ambitions et qui
                  soit force de propositions.
                </li>
                <li>
                  Vous attendez de la disponibilité, de la réactivité, du
                  pragmatisme.
                </li>
                <li>
                  Vous souhaitez un suivi stable par un consultant dédié qui
                  vous accompagnera tout au long de votre projet.
                </li>
                <li>
                  Vos projets sont, par exemple, le développement d’une ICPE, la
                  gestion de vos déchets. Ils concernent vos documents de
                  planification et d’urbanisme (SCoT, PLUi, PCAET), la
                  transition énergétique de votre territoire. Ils demandent la
                  réalisation d’une évaluation environnementale, d’une étude de
                  danger, d’une demande d’autorisation.
                </li>
                <li>
                  Ils nécessitent à la fois une approche environnementale
                  technique, réglementaire et une communication engageante,
                  claire et efficace.
                </li>
                <li>
                  Vous êtes un bureau d’études et avez besoin d’un soutien
                  ponctuel. Vous êtes indépendants et souhaitez intégrer notre
                  réseau d’experts.
                </li>
              </ul>
            </div>
            <div className="col-3 image-need">
              <Img
                fluid={data.file.childImageSharp.fluid}
                alt="Photo d'une fleur"
                className="fleur"
              />
            </div>
          </div>
          <div className="btn-geoness-container">
            <a
              href="mailto:contact@geoness.net?subject=Message à Geoness depuis le site internet"
              className="btn btn-geoness my-3"
            >
              Contactez-nous
            </a>
          </div>
          <div className="row clients-assets">
            <div className="col-6">
              <h3>
                Nos clients
                <FontAwesomeIcon
                  icon={faUsers}
                  size="1x"
                  className="fontawesome-icons"
                />
              </h3>
              <ul className="client-list">
                <li>Industriels (industrie extractive, BTP)</li>
                <li>Collectivités</li>
                <li>Bureaux d’études</li>
              </ul>
            </div>
            <div className="col-6">
              <h3>
                Nos atouts
                <FontAwesomeIcon
                  icon={faTools}
                  size="1x"
                  className="fontawesome-icons"
                />
              </h3>
              <ul className="asset-list">
                <li>
                  GEONESS développement est une structure souple par son
                  organisation et robuste par l’engagement de ses collaborateurs
                  et la confiance de ses clients.
                </li>
                <li>
                  Notre volonté est de conserver une structure agile en
                  cultivant nos points de vue et en poursuivant la construction
                  d’un réseau de consultants.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
