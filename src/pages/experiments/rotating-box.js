import React from "react"
import Experiment from "../../components/experiment"
import * as THREE from "three"
import { Canvas, useFrame } from "react-three-fiber"

const boxSize = 50
const boxPositionZ = -100

export default ({ children, width, height }) => {
  return (
    <Experiment width={200} height={200} title="Rotating Box">
      <Canvas>
        <rectAreaLight
          intensity={2}
          width={100}
          height={100}
          position={[0, 0, 0]}
          onUpdate={self => self.lookAt(new THREE.Vector3(0, 0, boxPositionZ))}
        />
        <Box />
      </Canvas>
    </Experiment>
  )
}

const Box = () => {
  const ref = React.useRef()
  useFrame(() => {
    const { current: mesh } = ref
    mesh.rotation.x = mesh.rotation.y += 0.01
  })
  return (
    <mesh ref={ref} position={[0, 0, boxPositionZ]}>
      <boxBufferGeometry attach="geometry" args={[boxSize, boxSize, boxSize]} />
      <meshStandardMaterial color={0xffffff} attach="material" />
    </mesh>
  )
}
