import { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from './Carousel.module.scss'
import ArrowIcon from './ArrowIcon'
import CarouselCaption from './CarouselCaption'

const SLIDES = [
  {
    src: '/carousel/1999_Washington/00.jpg',
    title: '緣起',
    content:
      '1998 年 7 月 29 日在高雄好市多的開幕典禮活動上，太極門以喜氣洋洋的『祥獅耀千輝、邦交和一家』的中華國粹文化展演，歡迎美國第一位華裔州長華盛頓駱家輝州長的蒞臨。並贈與州長一座太極門迷你神鼓。\n1998 年夏天華盛頓州州長駱家輝先生訪問台灣，對太極門的展演頗為好評，並曾口頭邀請，之後經高雄市及西雅圖姊妹會的合力推促，開啟太極門弘揚行的第一篇章。',
  },
  {
    src: '/carousel/1999_Washington/01.jpg',
    title: `太極門親訪團\n飛往美國華盛頓州政府\n在州政府前的 Olympia 廣場舉行「迎鼓大典」`,
    content:
      '1999 年盛夏，太極門親善文化訪問團，第一次將太極門文化帶到世界舞台上。\n師徒共 1200 人組成史上最大陣仗的親訪團，將東方遠古文化—神鼓、神龍、麒麟、祥獅、鳳凰等祥獸帶到西方世界，精彩的文化饗宴宛如一份重量級賀禮，轟動一時。',
  },
  {
    src: '/carousel/1999_Washington/02.jpg',
    title: '太極門迎鼓大典',
    content:
      '由 4 位弟子護鼓、64 位弟子同心協力扛起包含鼓座、鼓架、護鼓者共達 1000 公斤、直徑 170 公分的太極門龍鼓，儀式莊嚴，典禮由駱家輝州長與太極門掌門人洪道子博士共同主持，蘊含共同祈福敬天的心意。',
  },
  {
    src: '/carousel/1999_Washington/03.jpg',
    title: `駱州長贈送洪博士\n一個具有北美原住民特色的\n紅雪松彎木盒`,
    content:
      '紅雪松彎木盒，由知名工匠 Louis V. Larsen 製作，木盒上的傳統圖騰設計，承載著深厚的文化、歷史價值。這份禮物向國際友人展示了本地的文化特色，展現了對文化的尊重、欣賞。',
  },
  {
    src: '/carousel/1999_Washington/04.jpg',
    title: `禮尚往來\n洪博士回贈太極門\n親善文化訪問團團徽給駱州長`,
    content:
      '洪博士回贈太極門親善文化訪問團團徽給駱州長。團徽中，太極八卦包含陰、陽、平衡與和諧，翱翔的太極神龍象徵慈悲、勇敢和真智慧，這份回禮蘊含了親訪團的精神，同樣承載著深厚的文化意義與友誼。',
  },
]

function Carousel({ totalSlides = 6 }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  const [paginationNav, setPaginationNav] = useState(null)
  const [imageNav, setImageNav] = useState(null)

  let paginationSliderRef = useRef(null)
  let photoSliderRef = useRef(null)

  useEffect(() => {
    setPaginationNav(paginationSliderRef)
    setImageNav(photoSliderRef)
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
        {SLIDES.map(({ src }, index) => (
          <div key={index} className={styles.item}>
            <h3>
              <img src={src} alt={index} />
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
        {SLIDES.map(({ src, title, content }, index) => (
          <div key={index} className={styles.item}>
            <h3>
              <img src={src} alt={index} />
              <CarouselCaption
                currentSlideIndex={currentSlideIndex}
                title={title}
                content={content}
              />
            </h3>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Carousel
