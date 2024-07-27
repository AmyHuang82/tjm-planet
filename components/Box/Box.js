import styles from './Box.module.scss'

function Box({ children }) {
  return <div className={styles.box}>{children}</div>
}

export default Box
