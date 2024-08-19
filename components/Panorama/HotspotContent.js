import { createPortal } from 'react-dom'

function HotspotContent({ id, children }) {
  return createPortal(children, document.getElementsByClassName(id)[0])
}

export default HotspotContent
