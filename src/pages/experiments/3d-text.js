import React from "react"
import Experiment from "../../components/experiment"
import Scene from "../../components/scenes/3DTextScene"

export default ({ children, width, height }) => {
  return (
    <Experiment width={200} height={200} title="3D Text">
      <Scene />
    </Experiment>
  )
}
