import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import Banner from "../components/banner"
import Footer from "../components/footer"
import History from "../components/history"
import Codes from "../components/codes"
import ClientSpace from "../components/client_space"
import Services from "../components/services"
import Implantations from "../components/implantations"

export default function Home() {
  return (
    <Layout>
      <Header />
      <Banner />
      <History />
      <Codes />
      <ClientSpace />
      <Services />
      <Implantations />
      <Footer />
    </Layout>
  )
}
