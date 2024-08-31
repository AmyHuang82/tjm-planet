import 'pannellum-react/es/pannellum/css/pannellum.css'
import dynamic from 'next/dynamic'
import { useEffect } from 'react'
import gsap from 'gsap'
import Scene from '../3DObject/Scene'
import styles from './Parallax.module.scss'

const Pannellum = dynamic(() => import('pannellum-react').then((mod) => mod.Pannellum), {
  ssr: false,
})

function Parallax() {
  useEffect(() => {
    let xPos = 0

    gsap
      .timeline()
      .set('.ring', { rotationY: 180, cursor: 'grab' }) //set initial rotationY so the parallax jump happens off screen
      .set('.img', {
        // apply transform rotations to each image
        rotateY: (i) => i * -36,
        transformOrigin: '50% 50% 500px',
        z: -500,
        backgroundImage: (i) => 'url(https://picsum.photos/id/' + (i + 32) + '/600/400/)',
        backgroundPosition: (i) => getBgPos(i),
        backfaceVisibility: 'hidden',
      })
      .from('.img', {
        duration: 1.5,
        y: 200,
        opacity: 0,
        stagger: 0.1,
        ease: 'expo',
      })
      .add(() => {
        const images = document.querySelectorAll('.img')
        images.forEach((image) => {
          image.addEventListener('mouseenter', (e) => {
            let current = e.currentTarget
            gsap.to('.img', { opacity: (_i, t) => (t == current ? 1 : 0.5), ease: 'power3' })
          })
          image.addEventListener('mouseleave', () => {
            gsap.to('.img', { opacity: 1, ease: 'power2.inOut' })
          })
        })
      }, '-=0.5')

    window.addEventListener('mousedown', dragStart)
    window.addEventListener('touchstart', dragStart)
    window.addEventListener('mouseup', dragEnd)
    window.addEventListener('touchend', dragEnd)

    function dragStart(e) {
      if (e.touches) e.clientX = e.touches[0].clientX
      xPos = Math.round(e.clientX)
      gsap.set('.ring', { cursor: 'grabbing' })
      window.addEventListener('mousemove', drag)
      window.addEventListener('touchmove', drag)
    }

    function drag(e) {
      if (e.touches) e.clientX = e.touches[0].clientX

      const deltaX = Math.round(e.clientX) - xPos

      gsap.to('.ring', {
        rotationY: '-=' + (deltaX % 360),
        onUpdate: () => {
          gsap.set('.img', { backgroundPosition: (i) => getBgPos(i) })
        },
      })

      xPos = Math.round(e.clientX)
    }

    function dragEnd() {
      window.removeEventListener('mousemove', drag)
      window.removeEventListener('touchmove', drag)
      gsap.set('.ring', { cursor: 'grab' })
    }

    function getBgPos(i) {
      //returns the background-position string to create parallax movement in each image
      return (
        100 -
        (gsap.utils.wrap(0, 360, gsap.getProperty('.ring', 'rotationY') - 180 - i * 36) / 360) *
          500 +
        'px 0px'
      )
    }
  }, [])

  return (
    <>
      <Pannellum
        id="pannellum"
        width="100%"
        height="100vh"
        image="/panorama/washington_background.png"
        pitch={0}
        yaw={0}
        hfov={110}
        autoLoad
        showZoomCtrl={false}
      />
      <div className={styles.stage}>
        <div className={styles.container}>
          <div className={`${styles.ring} ring`}>
            {Array.from({ length: 10 }).map((_, index) => (
              <div key={index} className={`${styles.img} img`} />
            ))}
            <div className={`${styles.img} img`}>
              <Scene />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Parallax
