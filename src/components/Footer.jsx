import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t border-[color:var(--border)] bg-[color:var(--glass)]/70 px-4 py-8 text-[color:var(--muted)] backdrop-blur-xl sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col align-bottom gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium text-[color:var(--text)]">My Blog</p>
          <p className="mt-1 text-sm">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm">
          <span>Write ideas</span>
          <span>Share stories</span>
          <span>Stay inspired</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
