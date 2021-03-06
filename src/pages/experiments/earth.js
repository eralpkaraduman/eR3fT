import React from "react"
import Experiment from "../../components/experiment"
import Scene from "../../components/scenes/EarthScene"

export default () => {
  return (
    <Experiment width={200} height={200} title="Earth">
      <Scene />
    </Experiment>
  )
}
