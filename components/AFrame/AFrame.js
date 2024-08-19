import { Suspense, useEffect, useState } from 'react'
import Modal from '../Modal/Modal'
import Carousel from '../Carousel/Carousel'

function AFrameContent() {
  return (
    <a-scene cursor="rayOrigin: mouse" raycaster="objects: [clickable]">
      <a-sky src="/panorama/demo.jpg" rotation="0 -130 0" />
      <a-image
        src="/carousel/1999_Washington/01.jpg"
        position="-0.34 1.98 -4.77677"
        scale="4.5 3 1"
        clickable="carousel"
        class="clickable"
      />
    </a-scene>
  )
}

function AFrame() {
  const [isClient, setIsClient] = useState(false)
  const [openCarousel, setOpenCarousel] = useState(false)

  function init() {
    this.el.addEventListener('click', this.onClick.bind(this))
    this.el.addEventListener('touchend', this.onClick.bind(this))
  }

  function onClick() {
    if (this.data === 'carousel') {
      setOpenCarousel(true)
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
    </>
  )
}

export default AFrame
