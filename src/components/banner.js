import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Slider from "react-slick"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faSortDown
} from "@fortawesome/free-solid-svg-icons"

export default function Banner() {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        sort: { fields: childImageSharp___fluid___originalName },
        filter: { relativeDirectory: { eq: "slider-images" } }
      ) {
        edges {
          node {
            childImageSharp {
              # Specify the image processing specifications right in the query.
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const images = data.allFile.edges

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: false
  }

  return (
    <Slider {...settings}>
        <BackgroundImage
          key={images[0].node.childImageSharp.fluid}
          fluid={images[0].node.childImageSharp.fluid}
          className="slider-image"
        >
          <div>
            <h1>Transport</h1>
            <h1>Groupage</h1>
            <h1>Affrètement</h1>
            <h1>Export</h1>
            <h1>Entrepôts</h1>
          </div>
          <FontAwesomeIcon
            icon={faSortDown}
            size="1x"
            className="down-arrow"
          />
        </BackgroundImage>
        <BackgroundImage
          key={images[1].node.childImageSharp.fluid}
          fluid={images[1].node.childImageSharp.fluid}
          className="slider-image"
        >
          <div>
            <h1>Périmètre National</h1>
            <h1>et</h1>
            <h1>Europe</h1>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faSortDown}
              size="1x"
              className="down-arrow"
            />
          </div>
        </BackgroundImage>
        <BackgroundImage
          key={images[2].node.childImageSharp.fluid}
          fluid={images[2].node.childImageSharp.fluid}
          className="slider-image"
        >
          <div>
            <h1>Tautliner – Fourgon – Frigo</h1>
            <h1>Plateau – Porteur – Hayon - Benne</h1>
          </div>
          <FontAwesomeIcon
            icon={faSortDown}
            size="1x"
            className="down-arrow"
          />
        </BackgroundImage>
    </Slider>
  )
}
