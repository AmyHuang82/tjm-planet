import { useRef } from 'react'
import Cross from './Cross'
import styles from './Modal.module.scss'

function Modal({ children, onCancel, ...props }) {
  const maskRef = useRef(null)

  function onMaskClick(e) {
    if (e.target === maskRef.current) {
      onCancel()
    }
  }

  return (
    <div ref={maskRef} className={styles.mask} onClick={onMaskClick}>
      <button className={styles.closeButton} onClick={onCancel}>
        <Cross />
      </button>
      <div className={styles.modal} {...props}>
        {children}
      </div>
    </div>
  )
}

export default Modal
