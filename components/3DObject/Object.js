import { useTexture } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { useMemo } from 'react'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

const objects = [
  { filename: '原民雕刻木盒', scale: 0.3, position: [-0.1, -1, 0], rotation: [0, 0.4, 0] },
]

function Object() {
  const { filename, scale, position, rotation } = objects[0]
  const obj = useLoader(OBJLoader, `/3DObjects/${filename}.obj`)
  const texture = useTexture(`/3DObjects/${filename}.jpg`)
  const geometry = useMemo(() => {
    let g
    obj.traverse((c) => {
      if (c.type === 'Mesh') {
        const _c = c
        g = _c.geometry
      }
    })
    return g
  }, [obj])

  return (
    <mesh geometry={geometry} scale={scale} position={position} rotation={rotation}>
      <meshPhysicalMaterial map={texture} />
    </mesh>
  )
}

export default Object
