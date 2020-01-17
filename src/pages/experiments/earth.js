import React, { Suspense } from "react"
import Experiment from "../../components/experiment"
import * as THREE from "three"
import { Canvas, useFrame, useLoader } from "react-three-fiber"

export default () => {
  return (
    <Experiment width={200} height={200} title="Earth">
      <Canvas pixelRatio={3}>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </Experiment>
  )
}

const Earth = () => {
  const [texture] = useLoader(THREE.TextureLoader, ["/textures/earth.jpg"])
  const ref = React.useRef()
  useFrame(() => {
    const { current: mesh } = ref
    mesh.rotation.y += 0.02
  })
  return (
    <mesh ref={ref} rotation={[0.5, 3, 0]}>
      <sphereBufferGeometry attach="geometry" args={[2.6, 32, 32]} />
      <meshBasicMaterial attach="material" color={0xffffff} map={texture} />
    </mesh>
  )
}
