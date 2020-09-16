import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhoneAlt, faHome, faEnvelope } from "@fortawesome/free-solid-svg-icons"

export default function Footer() {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "images/surbanner-v2.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image2: file(relativePath: { eq: "images/logo-linear.png" }) {
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
    <div className="footer" id="footer">
      <BackgroundImage
        fluid={data.image1.childImageSharp.fluid}
        className="w-100"
        style={{ height: "100px" }}
        imgStyle={{ height: "100px" }}
      >
        <div className="d-flex justify-content-between align-items-center h-100">
          <div className="footer-logo">
            <Img
              fluid={data.image2.childImageSharp.fluid}
              alt="Logo GEONESS barre de navigation"
              style={{ width: "400px" }}
              imgStyle={{
                width: "400px",
                objectFit: "contain",
                // marginLeft: "15%",
              }}
            />
          </div>

          <div className="footer-content">
            <div className="footer-content-left">
              <p>
                <FontAwesomeIcon
                  icon={faPhoneAlt}
                  size="1x"
                  className="footer-icon"
                />
                06.70.87.14.40
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="1x"
                  className="footer-icon"
                />
                contact@geoness.net
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faHome}
                  size="1x"
                  className="footer-icon"
                />
                siège 33700 MÉRIGNAC
              </p>
            </div>
            <div className="footer-content-right">
              <p>Références</p>
              <p>Mentions Légales</p>
            </div>
          </div>
        </div>
      </BackgroundImage>
    </div>
  )
}
