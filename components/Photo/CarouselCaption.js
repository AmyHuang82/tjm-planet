import { useEffect, useState } from 'react'
import styles from './CarouselCaption.module.scss'

function CarouselCaption({ paragraphCount, currentSlideIndex }) {
  const [activeCaption, setActiveCaption] = useState(false)
  const [isFullBackground, setIsFullBackground] = useState(false)

  const [isAnimationPaused, setIsAnimationPaused] = useState(false)

  const toggleCaption = (status) => {
    setActiveCaption(status)

    if (status) {
      setIsFullBackground(status)
    } else {
      setTimeout(() => setIsFullBackground(status), status ? 0 : 300)
    }
  }

  useEffect(() => {
    toggleCaption(false)
  }, [currentSlideIndex])

  // useEffect(() => {
  //   const scrollElements = document.querySelectorAll(`.${styles.captionBodyScroll}`)

  //   if (scrollElements.length === 0) return

  //   scrollElements.forEach((el) => {
  //     if (!el) return

  //     const { scrollHeight, offsetParent: { clientHeight: containerHeight } = {} } = el

  //     const isNeedScroll = +(scrollHeight / containerHeight).toFixed(2) > 0.8
  //     if (isNeedScroll) {
  //       const scrollPercentage = Math.floor(scrollHeight / containerHeight)
  //       const lastScrollHeight = (scrollHeight - containerHeight * scrollPercentage) * 1
  //       const diffHeight = containerHeight - lastScrollHeight

  //       const diffPercentage = +(diffHeight / containerHeight).toFixed(1)
  //       const total =
  //         //   scrollPercentage + ((1 - diffPercentage) * (diffPercentage <= 0.5 ? 1 : -1)) / 2
  //         scrollPercentage + (1 - diffPercentage) / 2

  //       el.style.setProperty('--scroll-percentage', `${total}`)
  //     } else {
  //       el.style.setProperty('--scroll-percentage', 1)
  //     }
  //   })
  // }, [])

  return (
    <div
      className={`${styles.caption} ${activeCaption ? styles.active : ''} ${isFullBackground ? styles.fullBackground : ''}`}
      onClick={() => toggleCaption(true)}
      onTouchStart={() => toggleCaption(true)}
    >
      <span
        className={styles.captionToggleBar}
        onClick={(e) => {
          e.stopPropagation()
          toggleCaption(false)
          setIsAnimationPaused(false)
        }}
      ></span>

      <div className={styles.captionHeader}>
        <p>太極門迎鼓大典</p>
        <p className={styles.captionHeaderSubtitle}>一群神氣家族的師兄姐飛越大西洋</p>
      </div>

      <div className={styles.captionBody}>
        <div
          className={`${styles.captionBodyScroll} ${isAnimationPaused ? styles.paused : ''}`}
          onMouseDown={() => setIsAnimationPaused(true)}
          onMouseEnter={() => setIsAnimationPaused(true)}
          onTouchStart={() => setIsAnimationPaused(true)}
          onMouseLeave={() => setIsAnimationPaused(false)}
          onMouseUp={() => setIsAnimationPaused(false)}
          onTouchEnd={() => setIsAnimationPaused(false)}
        >
          <div className={styles.captionBodyTitle}>
            <p>太極門迎鼓大典</p>
            <p>1999.06.08 美國，一群神氣家族的師兄姐飛越大西洋</p>
          </div>

          <p>
            2000 年 3 月，太極天龍在美國國會山莊前翱翔，以文化的力量創造了「台灣文化奇蹟」。國會山莊
            ROLL CALL 刊登了龍的照片，報導了太極門對文化交流和促進世界和平的貢獻。
          </p>
          {Array.from({ length: paragraphCount }).map((_, subIndex) => (
            <p key={subIndex}>
              2000 年 3
              月，太極天龍在美國國會山莊前翱翔，以文化的力量創造了「台灣文化奇蹟」。國會山莊 ROLL
              CALL 刊登了龍的照片，報導了太極門對文化交流和促進世界和平的貢獻。
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CarouselCaption
