import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image';

export default function Header() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/logo-simple.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  function handleClick(event) {
    event.currentTarget.classList.toggle('open')
    document.querySelector('.navbar-collapse').classList.toggle('active')
  }

  // componentDidMount() {
  //   const links = document.querySelectorAll('.linky')

  //   links.forEach(link => {
  //     if (link.pathname === window.location.pathname) {
  //       link.classList.add('colored-link')
  //     }
  //   })
  //   if (window.location.pathname.substring(0, 5) === '/jobs') {
  //     links[1].classList.add('colored-link')
  //   }
  // }

  return (
    <div className="header">
      <Link to="/">
        <div className="header-logo">
          <Img
            fluid={data.file.childImageSharp.fluid}
            alt="Logo GEONESS barre de navigation"
          />
        </div>
      </Link>
      <div className="header-links">
        <Link className="linky" to="/">
          Qui sommes-nous ?
        </Link>
        <Link className="linky" to="/">
          Vos besoins
        </Link>
        <Link className="linky" to="/">
          Nos activités
        </Link>
        <Link className="linky" to="/">
          Notre équipe
        </Link>
        <Link className="linky" to="/">
          Contact
        </Link>
      </div>
      <div id="nav-icon1" onClick={handleClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="navbar-collapse">
        <Link className="linky" to="/">
          Qui sommes-nous ?
        </Link>
        <Link className="linky" to="/">
          Vos besoins
        </Link>
        <Link className="linky" to="/">
          Nos activités
        </Link>
        <Link className="linky" to="/">
          Notre équipe
        </Link>
        <Link className="linky" to="/">
          Contact
        </Link>
      </div>
    </div>
  )
}
