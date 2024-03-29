import type { Metadata } from 'next'
import { AR_One_Sans } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'

const arOneFont = AR_One_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Bruno's Resume",
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={arOneFont.className}>
        <div className="bg-orange-400 text-center">
          <p>I'm reworking my portfolio page, some things may seem off for a while. Thanks :)</p>
        </div>
        <main className="main-container relative mx-auto flex flex-col">
          <div className=" p-4 pt-8">
            <Navbar />
          </div>
          <div className=" text-white p-4 pt-8">{children}</div>
        </main>
      </body>
    </html>
  )
}
