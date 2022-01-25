import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default function Implantations() {
  const data = useStaticQuery(graphql`
    query {
      contact: file(relativePath: { eq: "images/contact.jpg" }) {
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
    <div id="implantations" className="w-100 d-flex align-items-center justify-content-center mb-3">
      <div className="laroute-container-xl d-flex flex-column">
        <div className="row">
          <div className="col-sm-12 col-md-6 d-flex align-items-center justify-content-center pr-4">
            <div className="text-map my-4 pl-4">
              <h2 className="mb-md-4 mb-5 text-md-left text-center">Contactez-nous</h2>
              <p>
                <b>Nouveau client ?</b>
                <br/><br/>
                Pour toute question n'hésitez pas à nous contacter.
                <br/><br/>
                Par email : <a href='mailto:laroute33@laroute.fr'>laroute33@laroute.fr</a>
                <br/><br/>
                Ou par téléphone : <a href='tel:05.56.35.05.25'>05.56.35.05.25</a>
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 d-flex align-items-center justify-content-center pr-4">
            <Img
              fluid={data.contact.childImageSharp.fluid}
              alt="Camion de face"
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
  )
}
