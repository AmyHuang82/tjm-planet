import { Suspense, useEffect, useState } from 'react'

function AFrameContent() {
  return (
    <a-scene cursor="rayOrigin: mouse" raycaster="objects: [clickable]">
      <a-sky src="/panorama/demo.png" rotation="0 -130 0" />
      <a-image
        src="/carousel/1999_Washington/01.jpg"
        position="5.0263 2.00585 -4.26811"
        scale="4.5 3 1"
        clickable="carousel"
        class="clickable"
        rotation="0 -12.44 0"
      />
      <a-image
        src="/3DObjects/3D_object_preview.jpg"
        position="-0.34 1.98 -4.77677"
        scale="4.5 3 1"
        clickable="3dObject"
        class="clickable"
      />
    </a-scene>
  )
}

function AFrame() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AFrameContent />
    </Suspense>
  )
}

export default AFrame
