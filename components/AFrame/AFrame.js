import { Suspense, useEffect, useState } from 'react'
import Modal from '../Modal/Modal'
import Carousel from '../Carousel/Carousel'
import dynamic from 'next/dynamic'

const Scene = dynamic(() => import('../3DObject/Scene'), { ssr: false })

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
  const [openCarousel, setOpenCarousel] = useState(false)
  const [open3DObject, setOpen3DObject] = useState(false)

  function init() {
    this.el.addEventListener('click', this.onClick.bind(this))
    this.el.addEventListener('touchend', this.onClick.bind(this))
  }

  function onClick() {
    if (this.data === 'carousel') {
      setOpenCarousel(true)
    }
    if (this.data === '3dObject') {
      setOpen3DObject(true)
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined' && window.AFRAME) {
      window.AFRAME.registerComponent('clickable', {
        schema: { type: 'string' },
        init,
        onClick,
      })

      const scene = document.querySelector('a-scene')
      if (scene) {
        scene.addEventListener('touchstart', (evt) => evt.preventDefault(), false)
      }

      setIsClient(true)
    }
  }, [])

  if (!isClient) return null

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <AFrameContent />
      </Suspense>
      {openCarousel && (
        <Modal onCancel={() => setOpenCarousel(false)}>
          <Carousel />
        </Modal>
      )}
      {open3DObject && (
        <Modal onCancel={() => setOpen3DObject(false)}>
          <Scene />
        </Modal>
      )}
    </>
  )
}

export default AFrame
