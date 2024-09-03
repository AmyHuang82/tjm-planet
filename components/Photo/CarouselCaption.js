import { useState, useEffect, useRef } from 'react'
import styles from './CarouselCaption.module.scss'

function CarouselCaption({ currentSlideIndex }) {
  const captionElement = useRef(null)
  const captionScrollElement = useRef(null)

  const interactStartRef = useRef(null)
  const interactEndRef = useRef(null)
  const minTranslateDistance = 50

  /**
   * 搭配 CSS 填入三種值："active" | "hidden" | ""
   * 從左到右表示 "完全顯示" | "完全隱藏" | "初始狀態 (僅顯示標題)"
   */
  const [captionActiveStatus, setCaptionActiveStatus] = useState('')

  /** 設定字幕顯示/隱藏狀態 */
  const changeCaptionStatus = (status) => {
    setCaptionActiveStatus(status)

    if (status !== 'active') {
      captionScrollElement.current.scrollTop = 0
    }
  }

  // ==== start ==== 處理向上/下滑動方法 ================
  const startInteractive = (startPos) => {
    interactEndRef.current = null
    interactStartRef.current = startPos
  }
  const stopInteractive = () => {
    if (!interactStartRef.current || !interactEndRef.current) return

    const distance = interactStartRef.current - interactEndRef.current
    const isUpSwipe = distance > minTranslateDistance
    const isDownSwipe = distance < -minTranslateDistance
    if (isUpSwipe) {
      changeCaptionStatus('active')
    } else if (isDownSwipe) {
      /** 向下滑動時，若是在完全顯示狀態，則回到初始狀態；否則進入完全隱藏狀態 */
      changeCaptionStatus(captionActiveStatus === 'active' ? '' : 'hidden')
    }
  }
  // ==== end ==================================

  // ==== start ==== 設定Touch事件 ================
  const onTouchStart = (e) => startInteractive(e.targetTouches[0].clientY)
  const onTouchMove = (e) => (interactEndRef.current = e.targetTouches[0].clientY)
  const onTouchEnd = () => stopInteractive()
  // ==== end ==================================

  // ==== start ==== 設定滑鼠事件 ================
  const onMouseDown = (e) => {
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
    startInteractive(e.screenY)
  }
  const onMouseMove = (e) => (interactEndRef.current = e.screenY)
  const onMouseUp = () => {
    stopInteractive()
    document.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('mouseup', onMouseUp)
  }
  // ==== end ==================================

  useEffect(() => {
    changeCaptionStatus('')
  }, [currentSlideIndex])

  return (
    <div
      ref={captionElement}
      className={`${styles.caption} ${styles[captionActiveStatus]}`}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onMouseDown={onMouseDown}
    >
      <div
        className={`${styles.background} ${captionActiveStatus === '' ? styles.animation : styles[captionActiveStatus]}`}
      />
      <span
        className={styles.captionToggleBar}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
      />

      <div className={styles.captionHeader}>
        <p className={styles.captionHeaderSubtitle}>
          {`太極門迎鼓大典\n一群神氣家族的師兄姐飛越大西洋`}
        </p>
      </div>

      <div className={styles.captionBody}>
        <div ref={captionScrollElement} className={styles.captionBodyScroll}>
          <div className={styles.captionBodyTitle}>
            {`太極門迎鼓大典\n1999.06.08 美國，一群神氣家族的師兄姐飛越大西洋`}
          </div>

          <p>
            2000 年 3 月，太極天龍在美國國會山莊前翱翔，以文化的力量創造了「台灣文化奇蹟」。國會山莊
            ROLL CALL 刊登了龍的照片，報導了太極門對文化交流和促進世界和平的貢獻。
          </p>
        </div>
      </div>
    </div>
  )
}

export default CarouselCaption
