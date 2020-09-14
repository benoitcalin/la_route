import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import Banner from "../components/banner"
import Surbanner from "../components/surbanner"
import Who from "../components/who"
import Need from "../components/need"
import Activities from "../components/activities"

export default function Home() {
  return (
    <Layout>
      <Header />
      <Surbanner />
      <Banner />
      <Who />
      <Need />
      <Activities />
    </Layout>
  )
}
