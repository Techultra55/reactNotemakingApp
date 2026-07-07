import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="w-full px-4 py-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-3xl items-center justify-between rounded-2xl border border-[color:var(--border)] bg-[color:var(--glass)] px-4 py-3 shadow-[var(--shadow-lg)] backdrop-blur-xl sm:px-6">
        <h1 className="text-lg font-semibold sm:text-xl">
          <Link to="/" className="transition-colors duration-300 hover:text-[color:var(--text)]">
            My Blogs
          </Link>
        </h1>

        <nav>
          <ul className="flex items-center gap-3 text-sm text-[color:var(--muted)] sm:gap-5 sm:text-[15px]">
            <li><Link className="transition-colors duration-300 hover:text-[color:var(--text)]" to="/home">Home</Link></li>
          
            <li><Link className="transition-colors duration-300 hover:text-[color:var(--text)]" to="/blogs/new">New Blog</Link></li>
            <li><Link className="transition-colors duration-300 hover:text-[color:var(--text)]" to="/about">About</Link></li>
            <li><Link className="transition-colors duration-300 hover:text-[color:var(--text)]" to="/compose">Write</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
