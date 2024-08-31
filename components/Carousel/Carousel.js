import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from './Carousel.module.scss'
import RightArrow from './RightArrow'

function getImage(index) {
  return `/carousel/1999_Washington/0${index + 1}.jpg`
}

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: (
    <button>
      <RightArrow className={`${styles.arrow} ${styles.left}`} />
    </button>
  ),
  nextArrow: (
    <button>
      <RightArrow className={`${styles.arrow} ${styles.right}`} />
    </button>
  ),
  dots: true,
  dotsClass: 'slick-dots slick-thumb',
  customPaging: (index) => {
    return (
      <a>
        <img src={getImage(index)} alt={index} />
      </a>
    )
  },
}

function Carousel({ totalSlides = 6 }) {
  return (
    <div className={styles.container}>
      <h2>西雅圖海洋節五十週年慶火炬大遊行</h2>
      <div className={styles.carousel}>
        <Slider {...settings}>
          {Array.from({ length: totalSlides }).map((_, index) => (
            <img key={index} className={styles.item} src={getImage(index)} alt={index} />
          ))}
        </Slider>
      </div>
      <p>1999.06.08 美國｜一群神氣家族的師兄姐飛越大西洋</p>
    </div>
  )
}

export default Carousel
