import { useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Cross from './Cross'
import styles from './Modal.module.scss'

function Modal({ children, onCancel, ...props }) {
  const maskRef = useRef(null)

  function onMaskClick(e) {
    if (e.target === maskRef.current) {
      onCancel()
    }
  }

  const portalContainerRef = useRef(document.createElement('div'))
  useEffect(() => {
    const portalContainer = portalContainerRef.current
    document.body.appendChild(portalContainer)

    return () => {
      document.body.removeChild(portalContainer)
    }
  }, [])

  return createPortal(
    <div ref={maskRef} className={styles.mask} onClick={onMaskClick}>
      <button className={styles.closeButton} onClick={onCancel}>
        <Cross />
      </button>

      <div className={styles.modal} {...props}>
        {children}
      </div>
    </div>,
    portalContainerRef.current
  )
}

export default Modal
