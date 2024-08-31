import styles from './Carousel.module.scss'

function ArrowIcon({ className, ...props }) {
  return <span className={`${styles.arrow} ${className}`} {...props} />
}

export default ArrowIcon
