import 'pannellum-react/es/pannellum/css/pannellum.css'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import Modal from '../Modal/Modal'
import Carousel from '../Carousel/Carousel'

const Pannellum = dynamic(() => import('pannellum-react').then((mod) => mod.Pannellum), {
  ssr: false,
})

function Panorama() {
  const [showCarousel, setShowCarousel] = useState(false)

  return (
    <>
      <Pannellum
        width="100%"
        height="100vh"
        image="/panorama/demo.jpg"
        pitch={10}
        yaw={180}
        hfov={110}
        autoLoad
        showZoomCtrl={false}
      >
        <Pannellum.Hotspot
          type="custom"
          pitch={12.41}
          yaw={117.76}
          handleClick={() => setShowCarousel(true)}
          name="open carousel"
        />
      </Pannellum>
      {showCarousel && (
        <Modal onCancel={() => setShowCarousel(false)}>
          <Carousel />
        </Modal>
      )}
    </>
  )
}

export default Panorama
