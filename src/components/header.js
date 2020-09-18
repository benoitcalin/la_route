import React, { useEffect } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image';

export default function Header() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/logo-linear.png" }) {
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
    document.querySelector(".navbar-collapse").classList.toggle("active-menu")
  }

  useEffect(() => {
    const who = document.getElementById("who")
    const need = document.getElementById("need")
    const activities = document.getElementById("activities")
    const team = document.getElementById("team")
    const footer = document.getElementById("footer")
    const links = document.querySelectorAll(".header-links > a")

    if (links) {
      document.addEventListener('scroll', () => {
        if (window.scrollY > (who.offsetTop - 10) && window.scrollY < need.offsetTop) {
          links.forEach(link => link.classList.remove("active"))
          links[0].classList.add("active")
        } else if (
          window.scrollY > (need.offsetTop - 10) &&
          window.scrollY < activities.offsetTop
        ) {
          links.forEach(link => link.classList.remove("active"))
          links[1].classList.add("active")
        } else if (
          window.scrollY > (activities.offsetTop - 10) &&
          window.scrollY < team.offsetTop
        ) {
          links.forEach(link => link.classList.remove("active"))
          links[2].classList.add("active")
        } else if (window.scrollY >= document.documentElement.scrollHeight - window.innerHeight - 10) {
          links.forEach(link => link.classList.remove("active"))
          links[4].classList.add("active")
        } else if (
          window.scrollY > (team.offsetTop - 10) &&
          window.scrollY < footer.offsetTop
        ) {
          links.forEach(link => link.classList.remove("active"))
          links[3].classList.add("active")
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
            alt="Logo GEONESS barre de navigation"
          />
        </div>
      </Link>
      <div className="header-links">
        <Link className="linky" to="#who">
          Qui sommes-nous ?
        </Link>
        <Link className="linky" to="#need">
          Vos besoins
        </Link>
        <Link className="linky" to="#activities">
          Nos activités
        </Link>
        <Link className="linky" to="#team">
          Notre équipe
        </Link>
        <Link className="linky" to="#footer">
          Contact
        </Link>
      </div>
      <div id="nav-icon1" onClick={handleClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="navbar-collapse">
        <Link className="linky" to="#who">
          Qui sommes-nous ?
        </Link>
        <Link className="linky" to="#need">
          Vos besoins
        </Link>
        <Link className="linky" to="#activities">
          Nos activités
        </Link>
        <Link className="linky" to="#team">
          Notre équipe
        </Link>
        <Link className="linky" to="#footer">
          Contact
        </Link>
      </div>
    </div>
  )
}
