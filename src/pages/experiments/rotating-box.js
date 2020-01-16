import React from "react"
import Experiment from "../../components/experiment"
import * as THREE from "three"
import { Canvas, useFrame } from "react-three-fiber"

export default ({ children, width, height }) => {
  return (
    <Experiment width={200} height={200} title="Rotating Box">
      <Canvas camera={{ position: [0, 0, 0], fov: 40 }}>
        <rectAreaLight
          intensity={3}
          position={[0, 0, 0]}
          width={30}
          height={30}
          onUpdate={self => self.lookAt(new THREE.Vector3(0, 0, 0))}
        />
        <Box />
      </Canvas>
    </Experiment>
  )
}

export const siteMetadata = {
  description: "TITLE IN METADATA :DDD",
}

const Box = () => {
  const ref = React.useRef()
  useFrame(() => {
    const { current: mesh } = ref
    mesh.rotation.x = mesh.rotation.y = mesh.rotation.z += 0.01
  })
  return (
    <mesh ref={ref} position={[0, 0, -60]}>
      <boxBufferGeometry attach="geometry" args={[20, 20, 20]} />
      <meshStandardMaterial color={0xffffff} attach="material" />
    </mesh>
  )
}
