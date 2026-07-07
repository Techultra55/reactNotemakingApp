import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Compose = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setIsSubmitting(true)

    try {
      const response = await fetch('http://localhost:5000/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, content })
      })

      if (!response.ok) {
        throw new Error('Unable to publish post')
      }

      navigate('/home')
    } catch (err) {
      console.error(err)
      setError('Failed to publish post. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-[var(--bg)] px-4 py-8 text-[color:var(--text)] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-2xl border border-[color:var(--border)] bg-[color:var(--glass)] p-6 shadow-[var(--shadow-lg)] backdrop-blur-xl sm:p-8">
        <h2 className="mb-8 text-2xl font-semibold text-[color:var(--text)]">Create a new post</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="title" className="block text-sm font-medium text-[color:var(--text)]">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--glass)] px-4 py-3 text-[color:var(--text)] outline-none placeholder:text-[color:var(--muted)]"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="content" className="block text-sm font-medium text-[color:var(--text)]">
              Content
            </label>
            <textarea
              id="content"
              name="content"
              rows="10"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              className="min-h-[220px] w-full resize-y rounded-xl border border-[color:var(--border)] bg-[color:var(--glass)] px-4 py-3 text-[color:var(--text)] outline-none placeholder:text-[color:var(--muted)]"
            ></textarea>
          </div>

          {error && <p className="text-sm text-rose-400">{error}</p>}

          <div className="flex justify-end gap-3 pt-2">
            <a
              href="/"
              className="rounded-lg border border-[color:var(--border)] bg-[color:var(--glass)] px-4 py-2 text-sm text-[color:var(--text)] transition-colors duration-300 hover:bg-white/10"
            >
              Cancel
            </a>
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? 'Publishing...' : 'Publish'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Compose
