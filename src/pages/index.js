import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query IndexPageQuery {
      allSitePage(filter: { path: { regex: "/experiments/" } }) {
        edges {
          node {
            path
            id
            internalComponentName
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <ul>
        {data.allSitePage.edges.map(({ node }) => (
          <li key={node.id}>
            <Link to={node.path}>
              {node.internalComponentName.replace("ComponentExperiments", "")}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default IndexPage
