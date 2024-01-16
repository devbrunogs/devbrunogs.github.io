import React from 'react'
import Link from 'next/link'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between">
      <Link href={'/'}>Bruno</Link>
      <ul className="flex flex-row gap-4">
        <Link className="text-white" href="/">
          About me
        </Link>
        <Link className="text-white" href="/experience">
          Experience
        </Link>
        <li>
          <a className="text-white" target="_blank" href="https://github.com/devbrunogs">
            <span className="flex flex-row gap-1 justify-end content-end">
              Github <FaGithub className="flex self-center" />
            </span>
          </a>
        </li>
        <li>
          <a className="text-white" target="_blank" href="https://www.linkedin.com/in/dos-santos-bruno-guilherme/">
            <span className="flex flex-row gap-1 justify-end content-end">
              LinkedIn <FaLinkedin className="flex self-center" />
            </span>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
