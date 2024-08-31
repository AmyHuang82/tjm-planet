import { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from './Carousel.module.scss'
import ArrowIcon from './ArrowIcon'
import CarouselCaption from './CarouselCaption'

function getImage(index) {
  return `/carousel/1999_Washington/0${index + 1}.jpg`
}

function Carousel({ totalSlides = 6 }) {
  const [slides, setSlides] = useState([])
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  const [paginationNav, setPaginationNav] = useState(null)
  const [imageNav, setImageNav] = useState(null)

  let paginationSliderRef = useRef(null)
  let photoSliderRef = useRef(null)

  useEffect(() => {
    setPaginationNav(paginationSliderRef)
    setImageNav(photoSliderRef)
    setSlides(Array.from({ length: totalSlides }))
  }, [totalSlides])

  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.sliderFrame} />
      <Slider
        asNavFor={paginationNav}
        ref={(slider) => (photoSliderRef = slider)}
        centerMode={true}
        centerPadding={'0px'} // Photo Tip: 搭配設定 slidesToShow，可以調整置中的圖片
        vertical={true}
        verticalSwiping={false}
        slidesToShow={5} // Photo Tip: 搭配設定 CSS 的 .item height，可以調整符合輪播圖高度的尺寸
        swipeToSlide={false}
        swipe={false}
        className={styles.paginationSlider}
        prevArrow={
          <button>
            <ArrowIcon className={styles.up} />
          </button>
        }
        nextArrow={
          <button>
            <ArrowIcon className={styles.down} />
          </button>
        }
      >
        {slides.map((_, index) => (
          <div key={index} className={styles.item}>
            <h3>
              <img src={getImage(index)} alt={index} />
            </h3>
          </div>
        ))}
      </Slider>

      <Slider
        asNavFor={imageNav}
        ref={(slider) => (paginationSliderRef = slider)}
        slidesToShow={1}
        vertical={true}
        verticalSwiping={true}
        arrows={false}
        className={styles.photoSlider}
        beforeChange={(_, newIndex) => setCurrentSlideIndex(newIndex)}
      >
        {slides.map((_, index) => (
          <div key={index} className={styles.item}>
            <h3>
              <img src={getImage(index)} alt={index} />
              <CarouselCaption paragraphCount={index} currentSlideIndex={currentSlideIndex} />
            </h3>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Carousel
