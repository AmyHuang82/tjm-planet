import { Suspense } from 'react'
import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Object from './Object'
import styles from './Scene.module.scss'

function Scene({ isBasic = false }) {
  return (
    <div className={styles.canvasContainer}>
      <video
        className={styles.video}
        autoPlay={!isBasic}
        loop
        playsInline
        webkit-playsinline="true"
      >
        <source src="/3DObjects/scene.mp4" type="video/mp4" />
      </video>
      <Canvas>
        <OrbitControls position={[50, 10, 50]} autoRotate={!isBasic} autoRotateSpeed={0.5} />
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
