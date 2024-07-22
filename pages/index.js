import Link from 'next/link'

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <ul>
        <li>
          <Link href="/3d_object">3D Object Demo</Link>
        </li>
      </ul>
    </div>
  )
}
