import { useEffect, useRef, useState } from 'react'
import styles from './Carousel.module.scss'

function CarouselItem({ index, title, url, image, currentSlideIndex }) {
  const isActive = index === currentSlideIndex

  const movieRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  const playVideo = (e) => {
    if (!isActive || !movieRef.current) return

    e.preventDefault()

    setIsPlaying(true)
    movieRef.current.src = `${url}?autoplay=1`
  }

  useEffect(() => {
    setIsPlaying(false)

    if (isActive && movieRef.current) {
      movieRef.current.allow =
        'accelerometer; clipboard-write; gyroscope; picture-in-picture; autoplay'
    }
  }, [isActive])

  return (
    <div className={`${styles.item} ${isPlaying ? styles.playing : ''}`} key={index}>
      <h3>
        {isActive && (
          <iframe
            ref={movieRef}
            title={title}
            src={url}
            height="360"
            width="640"
            allow="accelerometer; clipboard-write; gyroscope; picture-in-picture"
            allowFullScreen={true}
            onLoad={setIsLoaded}
          />
        )}
        <div className={styles.cover}>
          <img src={image} alt={title} />
          {isLoaded && <div onClick={playVideo} />}
        </div>
      </h3>
    </div>
  )
}

export default CarouselItem
