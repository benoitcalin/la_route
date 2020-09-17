import React from "react"
import SEO from "../components/seo"
export default function Layout({ children }) {
  return (
    <div>
      <SEO />
      {children}
    </div>
  )
}
