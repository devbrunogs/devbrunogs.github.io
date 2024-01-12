import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between">
      <Link href={'/'}>Bruno</Link>
      <ul className="flex flex-row gap-2">
        <Link className="text-white" href="/">
          About me
        </Link>
        <Link className="text-white" href="/experience">
          Experience
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar
