import React, { Suspense } from "react"
import Experiment from "../../../components/experiment"
import * as THREE from "three"
import { Canvas, useFrame, useLoader } from "react-three-fiber"
import earthTextureUrl from "./earth.jpg"

export default ({ children, width, height }) => {
  return (
    <Experiment width={200} height={200} title="Earth">
      <Canvas camera={{ position: [0, 0, 0], fov: 40 }}>
        <rectAreaLight
          intensity={20}
          position={[0, 0, 0]}
          width={30}
          height={30}
          onUpdate={self => self.lookAt(new THREE.Vector3(0, 0, 0))}
        />
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </Experiment>
  )
}

const Earth = () => {
  const [texture] = useLoader(THREE.TextureLoader, [earthTextureUrl])
  const ref = React.useRef()
  useFrame(() => {
    const { current: mesh } = ref
    mesh.rotation.y += 0.03
  })
  return (
    <mesh ref={ref} rotation={[0.3, 3, 0]} position={[0, 0, -60]}>
      <sphereBufferGeometry attach="geometry" args={[16, 32, 32]} />
      <meshBasicMaterial attach="material" color={0xffffff} map={texture} />
    </mesh>
  )
}
