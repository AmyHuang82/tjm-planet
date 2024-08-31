import { Suspense, useEffect, useState } from 'react'
import Modal from '../Modal/Modal'
import Movie from '../Movie/Carousel'
import Photo from '../Photo/Carousel'
import dynamic from 'next/dynamic'

const Scene = dynamic(() => import('../3DObject/Scene'), { ssr: false })

const ITEMS = [
  {
    id: 'photo',
    src: '/panorama/photo.png',
    position: '-4.22 2.006 -4.268',
    scale: '4.5 3 1',
    rotation: '0 17.70496882733757 0',
    Component: Photo,
  },
  {
    id: 'movie',
    src: '/panorama/movie.png',
    position: '5.0263 2.00585 -4.26811',
    scale: '4.5 3 1',
    rotation: '0 -12.44 0',
    Component: Movie,
  },
  {
    id: 'object',
    src: '/panorama/object.png',
    position: '0.171 2.006 -4.763',
    scale: '4.5 2.2 1',
    rotation: '0 0 0',
    Component: Scene,
  },
]

function AFrameContent({ isModalShown }) {
  return (
    <a-scene cursor="rayOrigin: mouse" raycaster="objects: [clickable]">
      <a-sky src="/panorama/washington_background.png" rotation="0 -130 0" />
      {!isModalShown &&
        ITEMS.map(({ id, ...item }) => (
          <a-image key={id} clickable={id} class="clickable" {...item} />
        ))}
    </a-scene>
  )
}

function AFrame({ clickable = true }) {
  const [isClient, setIsClient] = useState(false)
  const [currentItem, setCurrentItem] = useState(null)

  function init() {
    if (!clickable) return
    this.el.addEventListener('click', this.onClick.bind(this))
    this.el.addEventListener('touchend', this.onClick.bind(this))
  }

  function onClick() {
    setCurrentItem(this.data)
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
        <AFrameContent isModalShown={Boolean(currentItem)} />
      </Suspense>
      {currentItem && (
        <Modal onCancel={() => setCurrentItem(null)}>
          {ITEMS.map(({ id, Component }) => {
            if (id !== currentItem) return null
            return <Component key={id} />
          })}
        </Modal>
      )}
    </>
  )
}

export default AFrame
