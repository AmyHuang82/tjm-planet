import { useTexture } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { useMemo } from 'react'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

const objects = ['原民雕刻木盒']

function Object() {
  const obj = useLoader(OBJLoader, `/3DObjects/${objects[0]}.obj`)
  const texture = useTexture(`/3DObjects/${objects[0]}.jpg`)
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
    <mesh geometry={geometry} scale={0.04}>
      <meshPhysicalMaterial map={texture} />
    </mesh>
  )
}

export default Object
