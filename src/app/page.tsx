import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <article className="text-base">
        <h2 className="text-2xl mb-5">About me</h2>
        <p>
          I'm a Software Engineer with over 10 years of experience, having collaborated on diverse projects spanning digital solutions,
          software development, and IT services. My recent focus has been on JS, React, and React Native, although I'm proficient in PHP,
          MySQL, and various other technologies.
        </p>{' '}
        <p>
          Fueled by curiosity, I'm dedicated to discovering creative solutions for project success. I enjoy positive collaboration and
          exchanging experiences with teammates. For me, interactivity is not just work but also fun. In my free time, I channel my
          creativity into game development.
        </p>
      </article>
    </main>
  )
}
