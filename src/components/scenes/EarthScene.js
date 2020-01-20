import React, { Suspense } from "react"

import * as THREE from "three"
import { Canvas, useFrame, useLoader, Dom } from "react-three-fiber"
import getPrefixedPath from "../../getPrefixedPath"
const textureUrl = getPrefixedPath("/textures/earth.jpg")

export default () => {
  return (
    <Canvas pixelRatio={3}>
      <Suspense
        fallback={
          <Dom center>
            <div>loading</div>
          </Dom>
        }
      >
        <Earth />
      </Suspense>
    </Canvas>
  )
}

const Earth = () => {
  const [texture] = useLoader(THREE.TextureLoader, [textureUrl])
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
