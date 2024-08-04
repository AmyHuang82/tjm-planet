import { useRef } from 'react'
import styles from './Modal.module.scss'

function Modal({ children, onCancel }) {
  const maskRef = useRef(null)

  function onMaskClick(e) {
    if (e.target === maskRef.current) {
      onCancel()
    }
  }

  return (
    <div ref={maskRef} className={styles.mask} onClick={onMaskClick}>
      <div className={styles.modal}>{children}</div>
    </div>
  )
}

export default Modal
