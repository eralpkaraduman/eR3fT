import React from "react"
import Experiment from "../../components/experiment"
import Scene from "../../components/scenes/GltfModelScene"

export default ({ children, width, height }) => {
  return (
    <Experiment width={250} height={250} title="GLTF Model">
      <Scene />
    </Experiment>
  )
}
