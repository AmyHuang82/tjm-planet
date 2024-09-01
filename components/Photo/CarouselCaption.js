import { useState, useEffect } from 'react'
import styles from './CarouselCaption.module.scss'

function CarouselCaption({ paragraphCount, currentSlideIndex }) {
  const [activeCaption, setActiveCaption] = useState(false)

  function toggleCaption() {
    setActiveCaption(!activeCaption)
  }

  useEffect(() => {
    setActiveCaption(false)
  }, [currentSlideIndex])

  return (
    <div
      className={`${styles.caption} ${activeCaption ? styles.active : ''}`}
      onClick={toggleCaption}
    >
      <div className={`${styles.background} ${activeCaption ? styles.active : styles.animation}`} />
      <span className={styles.captionToggleBar} />

      <div className={styles.captionHeader}>
        <p>太極門迎鼓大典</p>
        <p className={styles.captionHeaderSubtitle}>一群神氣家族的師兄姐飛越大西洋</p>
      </div>

      <div className={styles.captionBody}>
        <div className={styles.captionBodyScroll}>
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
