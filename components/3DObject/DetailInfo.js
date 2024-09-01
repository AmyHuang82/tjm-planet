import dynamic from 'next/dynamic'
import styles from './DetailInfo.module.scss'

const Scene = dynamic(() => import('./Scene'), { ssr: false })

function DetailInfo() {
  return (
    <div className={styles.detailInfo}>
      <Scene />
      <img src="/carousel/1999_Washington/05.jpg" alt="detail" />
      <div className={styles.info}>
        <h2>禮尚往來</h2>
        <p>
          駱家輝先生贈送洪博士一個具有北美原住民藝術特色的紅雪松彎木盒，由知名工匠 Louis V. Larsen
          製作—他以模仿北美西北海岸原住民藝術風格聞名。木盒上的傳統圖騰設計，因具有工藝和文化雙重意義受到高度評價，承載著深厚的文化、歷史價值。這份禮物展現了對文化的尊重、欣賞，以及促進交流的心意，不僅表達了對原住民文化的敬意，也向國際友人展示了本地的文化特色，開啟對話與交流，象徵著美好友誼。洪博士回贈太極門親善文化訪問團團徽給駱家輝州長，神龍象徵慈悲、勇敢和真智慧；太極八卦包含陰、陽、平衡與和諧，團徽蘊含了太極門文化親善團的精神。
        </p>
      </div>
    </div>
  )
}

export default DetailInfo
