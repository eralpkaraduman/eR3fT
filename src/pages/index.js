import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Intro from "../components/intro"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Box</h1>
    <div
      style={{
        width: `300px`,
        height: `300px`,
        border: `1px solid black`,
        borderRadius: `5px`,
        marginBottom: `1.45rem`,
      }}
    >
      <Intro />
    </div>
  </Layout>
)

export default IndexPage
