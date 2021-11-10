import Link from 'next/link'
import { useState } from 'react'
import SVG from 'react-inlinesvg'

export default function Navigation() {
  const [menu, setMenu] = useState(false)

  return (
    <div className="container">
      <div className="col-6">
        <p className="text-2xl font-bold text-gray-800">Next Starter</p>
      </div>
    </div>
  )
}
