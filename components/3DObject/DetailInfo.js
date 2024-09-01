import dynamic from 'next/dynamic'
import styles from './DetailInfo.module.scss'

const Scene = dynamic(() => import('./Scene'), { ssr: false })

function DetailInfo() {
  return (
    <div className={styles.detailInfo}>
      <Scene />
    </div>
  )
}

export default DetailInfo
