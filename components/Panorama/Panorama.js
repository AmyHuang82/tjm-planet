import dynamic from 'next/dynamic'
import 'pannellum-react/es/pannellum/css/pannellum.css'

const Pannellum = dynamic(() => import('pannellum-react').then((mod) => mod.Pannellum), {
  ssr: false,
})

function Panorama() {
  return (
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
        handleClick={(evt, name) => console.log(name)}
        name="image info"
      />
    </Pannellum>
  )
}

export default Panorama
