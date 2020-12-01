import React, { useEffect } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image';

export default function Header() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 240) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  function handleClick(event) {
    event.currentTarget.classList.toggle('open')
    document.querySelector(".navbar-collapse").classList.toggle("active-menu")
  }

  useEffect(() => {
    const navbar = document.querySelector('.header');
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight) {
        navbar.classList.add('header-white');
      } else {
        navbar.classList.remove('header-white');
      }
    });

    const history = document.getElementById("history")
    const services = document.getElementById("services")
    const implantations = document.getElementById("implantations")
    const footer = document.getElementById("footer")
    const links = document.querySelectorAll(".header-links > a")

    if (links) {
      document.addEventListener('scroll', () => {
        if (window.scrollY > (history.offsetTop - 10) && window.scrollY < services.offsetTop) {
          links.forEach(link => link.classList.remove("active"))
          links[0].classList.add("active")
        } else if (
          window.scrollY > (services.offsetTop - 10) &&
          window.scrollY < implantations.offsetTop
        ) {
          links.forEach(link => link.classList.remove("active"))
          links[1].classList.add("active")
        } else if (
          window.scrollY > (implantations.offsetTop - 10)
        ) {
          links.forEach(link => link.classList.remove("active"))
          links[2].classList.add("active")
        } else {
          links.forEach(link => link.classList.remove("active"))
        }
      })
    }
  })

  return (
    <div className="header">
      <Link to="#start">
        <div className="header-logo">
          <Img
            fluid={data.file.childImageSharp.fluid}
            alt="Logo LaRoute barre de navigation"
          />
        </div>
      </Link>
      <div className="header-links">
        <Link className="linky" to="#history">
          Histoire
        </Link>
        <Link className="linky" to="#services">
          Services
        </Link>
        <Link className="linky" to="#implantations">
          Implantations
        </Link>
        <Link className="linky" to="#footer">
          Contact
        </Link>
        <Link className="linky btn-laroute" id="espace-client-header-button" to="#">
          Espace Client
        </Link>
      </div>
      <div id="nav-icon1" onClick={handleClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="navbar-collapse">
        <Link className="linky" to="#history">
          Histoire
        </Link>
        <Link className="linky" to="#services">
          Services
        </Link>
        <Link className="linky" to="#implantations">
          Implantations
        </Link>
        <Link className="linky" to="#footer">
          Contact
        </Link>
      </div>
    </div>
  )
}
