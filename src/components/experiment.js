import React from "react"
import PropTypes from "prop-types"
import Layout from "./layout"
import SEO from "./seo"
import { Link } from "gatsby"

const Experiment = ({ children, width, height, title: experimentTitle }) => {
  return (
    <Layout>
      <SEO title={`Experiment: ${experimentTitle}`} />
      <h2>{experimentTitle}</h2>
      <div
        style={{
          width: width,
          height: height,
          ...styles.frame,
        }}
      >
        {children}
      </div>
      <Link to="/">
        <p>Go back to all experiments</p>
      </Link>
    </Layout>
  )
}

const styles = {
  frame: {
    border: `1px solid black`,
    borderRadius: `5px`,
    marginBottom: `1.45rem`,
    backgroundColor: "black",
  },
}

Experiment.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
}

export default Experiment
