import { Suspense, useEffect, useState } from 'react'

function AFrameContent() {
  return (
    <a-scene>
      <a-sky src="/panorama/demo.jpg" rotation="0 -130 0" />
      <a-text
        font="kelsonsans"
        value="Puy de Sancy, France"
        width="6"
        position="-2.5 0.25 -1.5"
        rotation="0 15 0"
      />
    </a-scene>
  )
}

function AFrame() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AFrameContent />
    </Suspense>
  )
}

export default AFrame
