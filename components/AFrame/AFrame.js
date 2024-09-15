import { Suspense, useEffect, useState } from 'react'
import Modal from '../Modal/Modal'
import Photo from '../Photo/Carousel'
import Movie from '../Movie/Carousel'
import Scene from '../3DObject/BasicInfo'

const ITEMS = [
  {
    id: 'photo',
    src: '/panorama/photo.png',
    position: '-4 2.006 -4.763',
    scale: '3.75 3.2575 1',
    rotation: '0 15 0',
    Component: Photo,
  },
  {
    id: 'object',
    src: '/panorama/object.png',
    position: '0.171 2.1 -5.263',
    scale: '2.22 3.2575 1',
    rotation: '0 0 0',
    Component: Scene,
  },
  {
    id: 'movie',
    src: '/panorama/movie.png',
    position: '4.171 2.006 -4.763',
    scale: '3.75 3.2575 1',
    rotation: '0 -15 0',
    Component: Movie,
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
