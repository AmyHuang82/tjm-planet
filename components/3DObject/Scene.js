import { Suspense } from 'react'
import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Object from './Object'
import styles from './Scene.module.scss'

function Scene() {
  return (
    <div className={styles.canvasContainer}>
      <Canvas>
        <OrbitControls position={[50, 10, 50]} />
        <Suspense fallback={null}>
          <Environment preset="lobby" />
        </Suspense>
        <Suspense fallback={null}>
          <Object />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Scene
