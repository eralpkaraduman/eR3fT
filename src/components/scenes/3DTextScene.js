import React, { useRef, useMemo, Suspense } from "react"
import * as THREE from "three"
import { Canvas, useLoader, useUpdate, useFrame } from "react-three-fiber"
import boldFontUrl from "url-loader!./resources/fonts/bold.blob"

export default () => {
  return (
    <Canvas camera={{ position: [0, 0, 160] }}>
      <rectAreaLight
        intensity={4}
        width={300}
        height={300}
        position={[0, 100, 250]}
      />
      <Suspense fallback={null}>
        <TextObject
          text={"3D"}
          color={0x0000ff}
          size={60}
          height={10}
          position={[0, 40, 0]}
          rotation={[0, 0.4, 0.5]}
          rotationFactor={0.04}
        ></TextObject>
        <TextObject
          text={"TEXT"}
          color={0xff0000}
          size={40}
          height={10}
          position={[0, -40, 0]}
          rotation={[-0.1, -0.4, -0.1]}
          rotationFactor={-0.02}
        />
      </Suspense>
    </Canvas>
  )
}

const TextObject = ({
  position,
  rotation,
  rotationFactor,
  text,
  size,
  height,
  color,
}) => {
  const ref = useRef()
  useFrame(() => {
    const { current: mesh } = ref
    mesh.rotation.y += rotationFactor
  })
  const font = useLoader(THREE.FontLoader, boldFontUrl)
  const config = useMemo(
    () => ({
      font,
      size,
      height,
      curveSegments: 32,
      bevelEnabled: true,
      bevelThickness: 3,
      bevelSize: 1,
      bevelOffset: 0,
      bevelSegments: 8,
    }),
    [font, height, size]
  )
  const mesh = useUpdate(self => {
    const size = new THREE.Vector3()
    self.geometry.computeBoundingBox()
    self.geometry.boundingBox.getSize(size)
    self.position.x = -size.x / 2
    self.position.y = -size.y / 2
    self.position.z = -size.z / 2
  })
  return (
    <group ref={ref} position={position} rotation={rotation}>
      <mesh ref={mesh}>
        <textGeometry attach="geometry" args={[text, config]} />
        <meshStandardMaterial color={color} attach="material" />
      </mesh>
    </group>
  )
}
