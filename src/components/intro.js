import React from "react"
import * as THREE from "three"
import { Canvas, useFrame } from "react-three-fiber"

const RotatingBox = () => {
  const ref = React.useRef()
  useFrame(
    () =>
      (ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z += 0.01)
  )
  return (
    <mesh ref={ref} position={[0, 0, -60]}>
      <boxBufferGeometry attach="geometry" args={[20, 20, 20]} />
      <meshStandardMaterial color={0xffffff} attach="material" />
    </mesh>
  )
}

const Intro = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 0], fov: 40 }}
      onCreated={({ gl }) => {
        gl.gammaInput = true
        gl.toneMapping = THREE.ACESFilmicToneMapping
      }}
    >
      <rectAreaLight
        intensity={3}
        position={[0, 0, 0]}
        width={30}
        height={30}
        onUpdate={self => self.lookAt(new THREE.Vector3(0, 0, 0))}
      />
      <RotatingBox />
    </Canvas>
  )
}

export default Intro
