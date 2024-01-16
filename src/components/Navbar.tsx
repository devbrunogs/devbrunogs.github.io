'use client'
import { useState } from 'react'
import Link from 'next/link'
import { FaLinkedin, FaGithub, FaBars } from 'react-icons/fa'

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  return (
    <nav className="flex md:flex-row justify-between gap-10 flex-col">
      <div className="flex flex-row gap-4 justify-between">
        <Link href={'/'}>The Bruno Portfolio</Link>
        <button className="text-white md:hidden flex flex-row gap-2" onClick={() => setShowMobileMenu(!showMobileMenu)}>
          Menu
          <FaBars className="flex self-center" />
        </button>
      </div>
      <ul className={`flex-col md:flex-row gap-4 md:flex ${showMobileMenu ? 'flex' : 'hidden'}`}>
        <li>
          <Link className="text-white" href="/">
            About me
          </Link>
        </li>
        <li>
          <Link className="text-white" href="/experience">
            Experience
          </Link>
        </li>
        <li>
          <a className="text-white" target="_blank" href="https://github.com/devbrunogs">
            <span className="flex flex-row gap-1">
              Github <FaGithub className="flex self-center" />
            </span>
          </a>
        </li>
        <li>
          <a className="text-white" target="_blank" href="https://www.linkedin.com/in/dos-santos-bruno-guilherme/">
            <span className="flex flex-row gap-1">
              LinkedIn <FaLinkedin className="flex self-center" />
            </span>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
