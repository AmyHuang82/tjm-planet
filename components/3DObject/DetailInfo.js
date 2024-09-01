import dynamic from 'next/dynamic'
import styles from './DetailInfo.module.scss'

const Scene = dynamic(() => import('./Scene'), { ssr: false })

function DetailInfo() {
  return (
    <div className={styles.detailInfo}>
      <Scene />
      <img src="/carousel/1999_Washington/05.jpg" alt="detail" />
    </div>
  )
}

export default DetailInfo
