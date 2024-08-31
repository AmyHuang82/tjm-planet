import 'pannellum-react/es/pannellum/css/pannellum.css'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import Scene from '../3DObject/Scene'
import Carousel from '../Carousel/Carousel'
import styles from './Panorama.module.scss'

const Pannellum = dynamic(() => import('pannellum-react').then((mod) => mod.Pannellum), {
  ssr: false,
})

const PannellumHotspot = dynamic(
  () => import('pannellum-react').then((mod) => mod.Pannellum.Hotspot),
  {
    ssr: false,
  }
)

const HotspotContent = dynamic(() => import('./HotspotContent'), {
  ssr: false,
})

function Panorama() {
  const [isRendered, setIsRendered] = useState(false)

  return (
    <>
      <Pannellum
        width="100%"
        height="100vh"
        image="/panorama/washington_background.png"
        pitch={0}
        yaw={0}
        hfov={110}
        autoLoad
        showZoomCtrl={false}
        onRender={() => setIsRendered(true)}
      >
        <PannellumHotspot
          type="custom"
          pitch={12.41}
          yaw={0}
          cssClass={`${styles.hotspot} hotspot_1`}
          handleClick={() => {}}
        />
        <PannellumHotspot
          type="custom"
          pitch={12.41}
          yaw={80}
          cssClass={`${styles.hotspot} hotspot_2`}
          handleClick={() => {}}
        />
      </Pannellum>
      {isRendered && (
        <>
          <HotspotContent id="hotspot_1">
            <Carousel />
          </HotspotContent>
          <HotspotContent id="hotspot_2">
            <Scene />
          </HotspotContent>
        </>
      )}
    </>
  )
}

export default Panorama
