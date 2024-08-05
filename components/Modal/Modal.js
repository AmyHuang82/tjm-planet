import { useRef } from 'react'
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
      <div className={styles.modal} {...props}>
        {children}
      </div>
    </div>
  )
}

export default Modal
