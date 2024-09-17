import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from './Carousel.module.scss'
import ArrowIcon from './ArrowIcon'
import CarouselItem from './CarouselItem'
import { useState } from 'react'

const MOVIES = [
  {
    title: '愛在飛揚西雅圖',
    url: 'https://sqps.onstreamsecure.com/origin/taijimen/html5/V_EF10411_2.mp4',
    image: '/movie/cover.jpg',
  },
]

function Carousel() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.movieTitle} />
      {MOVIES.length === 1 ? (
        <div className={styles.movieSlider}>
          <CarouselItem index={0} {...MOVIES[0]} currentSlideIndex={currentSlideIndex} />
        </div>
      ) : (
        <Slider
          infinite={true}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          className={styles.movieSlider}
          prevArrow={
            <button>
              <ArrowIcon className={styles.right} />
            </button>
          }
          nextArrow={
            <button>
              <ArrowIcon className={styles.left} />
            </button>
          }
          dots={true}
          customPaging={() => <span className={styles.dot} />}
          beforeChange={(_, newIndex) => setCurrentSlideIndex(newIndex)}
        >
          {MOVIES.map((movie, index) => (
            <CarouselItem
              key={index}
              index={index}
              {...movie}
              currentSlideIndex={currentSlideIndex}
            />
          ))}
        </Slider>
      )}
      {Array.from({ length: 4 }).map((_, index) => (
        <img
          key={index}
          data-index={index}
          className={styles.sideFrame}
          src="/movie/frame_side.png"
        />
      ))}
    </div>
  )
}

export default Carousel
