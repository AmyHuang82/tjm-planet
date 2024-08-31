import Link from 'next/link'

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <ul>
        <li>
          <Link href="/3d_object">3D Object Demo</Link>
        </li>
        <li>
          <Link href="/carousel">Carousel Demo</Link>
        </li>
        <li>
          <Link href="/panorama">Panorama Demo</Link>
        </li>
        <li>
          <Link href="/parallax">Parallax Demo</Link>
        </li>
        <li>
          <Link href="/aframe">AFrame Demo</Link>
        </li>
        <li>
          <Link href="/aframe_unclickable">AFrame Unclickable Demo</Link>
        </li>
        <li>
          <Link href="/photo">Photo Demo</Link>
        </li>
        <li>
          <Link href="/movie">Movie Demo</Link>
        </li>
      </ul>
    </div>
  )
}
