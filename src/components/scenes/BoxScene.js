import React, { useMemo } from "react"
import * as THREE from "three"
import { Canvas, useFrame } from "react-three-fiber"

export default () => {
  const boxPosition = [0, 0, -100]
  const boxSize = 50
  return (
    <Canvas>
      <rectAreaLight
        intensity={2}
        width={100}
        height={100}
        position={[0, 0, 0]}
        onUpdate={self => self.lookAt(new THREE.Vector3(...boxPosition))}
      />
      <Box position={boxPosition} size={boxSize} />
    </Canvas>
  )
}

const Box = ({ position, size }) => {
  const ref = React.useRef()
  useFrame(() => {
    const { current: mesh } = ref
    mesh.rotation.x = mesh.rotation.y += 0.01
  })
  return (
    <mesh ref={ref} position={position}>
      <boxBufferGeometry attach="geometry" args={[size, size, size]} />
      <meshStandardMaterial color={0xffffff} attach="material" />
    </mesh>
  )
}
