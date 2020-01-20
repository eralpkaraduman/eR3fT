import React, { Suspense } from "react"

import * as THREE from "three"
import { Canvas, useLoader, useFrame, Dom } from "react-three-fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import getPrefixedPath from "../../getPrefixedPath"
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader"
import { Vector3 } from "three"
const modelUrl = getPrefixedPath("/models/skull/scene.gltf")

export default () => {
  const skullPosition = [0, 0.5, -5]
  return (
    <Canvas>
      <directionalLight
        intensity={2}
        position={[50, -50, 100]}
        lookAt={new THREE.Vector3(...skullPosition)}
      />
      <Suspense
        fallback={
          <Dom center>
            <div>loading</div>
          </Dom>
        }
      >
        <Skull position={skullPosition} />
      </Suspense>
    </Canvas>
  )
}

const Skull = ({ position }) => {
  const gltf = useLoader(GLTFLoader, modelUrl, loader => {
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath("/draco-gltf")
    loader.setDRACOLoader(dracoLoader)
  })
  const ref = React.useRef()
  useFrame(() => {
    const { current } = ref
    current.rotation.y += 0.03
  })
  return (
    <group
      ref={ref}
      position={position}
      scale={[5, 5, 5]}
      rotation={[0.2, 0, 0]}
    >
      <primitive object={gltf.scene} />
    </group>
  )
}
