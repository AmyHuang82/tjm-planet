import dynamic from 'next/dynamic'
import styles from './BasicInfo.module.scss'

const Scene = dynamic(() => import('./Scene'), { ssr: false })

function BasicInfo() {
  return (
    <div className={styles.basicInfo}>
      <div className={styles.content}>
        <div className={styles.object}>
          <Scene isBasic />
        </div>
        <div className={styles.text}>
          <h2>
            復古的 Louis V. Larsen
            <br />
            小型紅雪松彎木盒
          </h2>
          <p>
            華盛頓州駱家輝州長
            <br />
            親贈 1999.07.30
          </p>
          <button>詳細介紹</button>
        </div>
      </div>
      <div className={styles.frame} />
    </div>
  )
}

export default BasicInfo
