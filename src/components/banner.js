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
    autoplaySpeed: 3000,
    pauseOnHover: false
  }

  return (
    <Slider {...settings}>
        <BackgroundImage
          key={images[0].node.childImageSharp.fluid}
          fluid={images[0].node.childImageSharp.fluid}
          className="slider-image"
        >
          <div className="h-100 d-flex flex-column align-items-center justify-content-between">
            <FontAwesomeIcon
              icon={faSortDown}
              size="1x"
              className="text-transparent"
            />
            <div>
              <h1>Transport</h1>
              <h1>Groupage</h1>
              <h1>Affrètement</h1>
              <h1>Export</h1>
              <h1>Entrepôts</h1>
            </div>
            <FontAwesomeIcon
              icon={faSortDown}
              size="2x"
              className="mb-4 text-white"
            />
          </div>
        </BackgroundImage>
        <BackgroundImage
          key={images[1].node.childImageSharp.fluid}
          fluid={images[1].node.childImageSharp.fluid}
          className="slider-image"
        >
          <div className="h-100 d-flex flex-column align-items-center justify-content-between">
            <FontAwesomeIcon
              icon={faSortDown}
              size="1x"
              className="text-transparent"
            />
            <div>
              <h1>Périmètre National</h1>
              <h1>et</h1>
              <h1>Europe</h1>
            </div>
            <FontAwesomeIcon
              icon={faSortDown}
              size="2x"
              className="mb-4 text-white"
            />
          </div>
        </BackgroundImage>
        <BackgroundImage
          key={images[2].node.childImageSharp.fluid}
          fluid={images[2].node.childImageSharp.fluid}
          className="slider-image"
        >
          <div className="h-100 d-flex flex-column align-items-center justify-content-between">
            <FontAwesomeIcon
              icon={faSortDown}
              size="1x"
              className="text-transparent"
            />
            <div className="text-center">
              <h1>Tautliner <span className="tiret">–</span> Fourgon <span className="tiret">–</span> Frigo</h1>
              <h1>Plateau <span className="tiret">–</span> Porteur <span className="tiret">–</span> Hayon <span className="tiret">–</span> Benne</h1>
            </div>
            <FontAwesomeIcon
              icon={faSortDown}
              size="2x"
              className="mb-4 text-white"
            />
          </div>
        </BackgroundImage>
    </Slider>
  )
}
