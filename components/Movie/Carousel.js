import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from './Carousel.module.scss'
import ArrowIcon from './ArrowIcon'
import CarouselItem from './CarouselItem'
import { useState } from 'react'

const movies = [
  {
    title: '愛在飛揚西雅圖',
    url: 'https://sqps.onstreamsecure.com/origin/taijimen/html5/V_EF10411_2.mp4',
    image: '/movie/01.jpg',
  },
  {
    title: '愛在馬爾他',
    url: 'https://sqps.onstreamsecure.com/origin/taijimen/html5/fa1da56b-8bc5-43cd-93f6-80eaf9fc06d2.mp4',
    image: '/movie/02.jpg',
  },
]

function Carousel() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.movieTitle} />

      <div className={styles.sliderFrame}>
        <div style={{ '--bg-image': `url(${movies[currentSlideIndex].image})` }} />
        <div style={{ '--bg-image': `url(${movies[currentSlideIndex].image})` }} />
      </div>

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
        {movies.map((movie, index) => (
          <CarouselItem
            key={index}
            index={index}
            {...movie}
            currentSlideIndex={currentSlideIndex}
          />
        ))}
      </Slider>
    </div>
  )
}

export default Carousel
