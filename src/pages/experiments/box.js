import React from "react"
import Experiment from "../../components/experiment"
import Scene from "../../components/scenes/BoxScene"

export default () => {
  return (
    <Experiment width={200} height={200} title="Box">
      <Scene />
    </Experiment>
  )
}
