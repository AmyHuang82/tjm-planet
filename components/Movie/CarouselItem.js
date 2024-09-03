import { useEffect, useRef, useState } from 'react'
import styles from './Carousel.module.scss'

function CarouselItem({ index, title, url, image, currentSlideIndex }) {
  const isActive = index === currentSlideIndex

  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  function playVideo() {
    if (!isActive || !videoRef.current) return
    videoRef.current.play()
    setIsPlaying(true)
  }

  useEffect(() => {
    if (isActive || !videoRef.current) return

    videoRef.current.pause()
    setIsPlaying(false)
  }, [isActive])

  return (
    <div className={`${styles.item} ${isPlaying ? styles.playing : ''}`} key={index}>
      <h3>
        <video ref={videoRef} src={url} preload="none" controls controlslist="nodownload">
          <source src={url} type="video/mp4" />
        </video>
        <div className={styles.cover}>
          <img src={image} alt={title} />
          <div onClick={playVideo} />
        </div>
      </h3>
    </div>
  )
}

export default CarouselItem
