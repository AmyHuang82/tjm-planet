import { Suspense } from 'react'
import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Object from './Object'

function Scene() {
  return (
    <Canvas>
      <OrbitControls position={[50, 10, 50]} />
      <Suspense fallback={null}>
        <Environment preset="city" />
      </Suspense>
      <Suspense fallback={null}>
        <Object />
      </Suspense>
    </Canvas>
  )
}

export default Scene
