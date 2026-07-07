import React from 'react'
import { useNavigate } from 'react-router-dom'
import GradientBlinds from '../utils/GradientBlinds'

const LandingPage = () => {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/home')
  }

  return (
    <div className="relative min-h-screen w-full bg-[var(--bg)] text-[color:var(--text)]">
      <GradientBlinds
        gradientColors={['#FF9FFC', '#5227FF']}
        angle={25}
        noise={0}
        blindCount={10}
        blindMinWidth={65}
        spotlightRadius={0.4}
        spotlightSoftness={1}
        spotlightOpacity={1}
        mouseDampening={0.49}
        distortAmount={0}
        shineDirection="left"
        mixBlendMode="lighten"
        color1="#FF9FFC"
        color2="#5227FF"
      >

        <div className="fixed top-6 left-1/2 z-50 w-[95%] max-w-6xl -translate-x-1/2">
          {/* Navigation */}
          <nav className="h-14 w-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--glass)] px-6 shadow-[var(--shadow-lg)] backdrop-blur-xl">
            <div className="flex h-full items-center justify-between">
              <a className="pl-4 text-xl font-semibold text-[color:var(--text)]">Note Making App</a>
              <div className="hidden items-center gap-10 md:flex">
                <a className="text-sm text-[color:var(--muted)] transition-colors duration-300 hover:text-[color:var(--text)]" href="#features">Features</a>
                <a className="text-sm text-[color:var(--muted)] transition-colors duration-300 hover:text-[color:var(--text)]" href="#about">About</a>
                <a className="text-sm text-[color:var(--muted)] transition-colors duration-300 hover:text-[color:var(--text)]" href="#contact">Contact</a>
              </div>
            </div>
          </nav>

          {/* Hero Section */}
          <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center ">

            {/* Announcement Badge */}
            <div className="mb-[2rem] flex items-center rounded-full border border-[color:var(--border)] bg-[color:var(--glass)] p-1 backdrop-blur-xl">
              <span className="rounded-full bg-white px-4 py-1 text-sm font-semibold text-black">
                NEW
              </span>

              <span className="px-5 text-sm text-[color:var(--muted)]">
                Just shipped v2.0
              </span>
            </div>

            {/* Hero Heading */}
            <h1 className="max-w-5xl mb-5 text-5xl font-bold leading-tight tracking-tight text-[color:var(--text)] sm:text-6xl lg:text-7xl">
              Write, Organize,
              <br />
              Create with Ease
            </h1>

            {/* Subtitle */}
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[color:var(--muted)]">
              Your personal note-making companion for capturing ideas,
              organizing knowledge, and sharing your thoughts effortlessly.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col items-center gap-5 sm:flex-row">

              <button
                onClick={handleLogin}
                className="rounded-2xl bg-white px-8 py-4 text-lg font-medium text-black transition-all duration-300 hover:scale-105 hover:bg-gray-100"
              >
                Get Started
              </button>

              <button
                className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--glass)] px-8 py-4 text-lg text-[color:var(--text)] backdrop-blur-xl transition-all duration-300 hover:bg-white/10"
              >
                Learn More
              </button>

            </div>

          </section>
        </div>

      </GradientBlinds>
    </div>
  )
}

export default LandingPage
