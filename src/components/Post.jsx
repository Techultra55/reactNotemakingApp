import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Post = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchPost = async () => {
    try {
      setLoading(true)
      const response = await fetch(`http://localhost:5000/api/posts/${id}`)

      if (!response.ok) {
        throw new Error('Post not found')
      }

      const data = await response.json()
      setPost(data)
    } catch (error) {
      console.error('Error fetching post:', error)
      setPost(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPost()
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen bg-[var(--bg)] px-4 py-8 text-[color:var(--text)] sm:px-6 lg:px-8">
        <p className="text-[color:var(--muted)]">Loading posts...</p>
      </div>
    )
  }

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this post?')) {
      return
    }

    try {
      const response = await fetch(`http://localhost:5000/api/posts/${id}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        navigate('/home')
      }
    } catch (error) {
      console.error('Error deleting post:', error)
    }
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-[var(--bg)] px-4 py-8 text-[color:var(--text)] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-2xl border border-[color:var(--border)] bg-[color:var(--glass)] p-6 shadow-[var(--shadow-lg)] backdrop-blur-xl sm:p-8">
          <h2 className="text-2xl font-semibold">Post not found</h2>
          <p className="mt-2 text-[color:var(--muted)]">The requested post could not be loaded.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[var(--bg)] px-4 py-8 text-[color:var(--text)] sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl rounded-2xl border border-[color:var(--border)] bg-[color:var(--glass)] p-6 shadow-[var(--shadow-lg)] backdrop-blur-xl sm:p-8">
        <div className="mb-8">
          <h2 className="mb-2 text-3xl font-semibold text-[color:var(--text)]">{post.title}</h2>
          <div className="text-sm text-[color:var(--muted)]">{post.date}</div>
        </div>

        <div className="space-y-5 text-[color:var(--text)]">
          {post.content.split('\n').filter((p) => p.trim() !== '').map((e) => (
            <p key={e}>{e}</p>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="/home"
            className="rounded-lg border border-[color:var(--border)] bg-[color:var(--glass)] px-4 py-2 text-sm text-[color:var(--text)] transition-colors duration-300 hover:bg-white/10"
          >
            Back to Posts
          </a>
          <a
            href={`/posts/${post.id}/edit`}
            className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-emerald-400"
          >
            Edit
          </a>

          <button
            type="button"
            className="rounded-lg bg-rose-500 px-4 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-rose-400"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </article>
    </div>
  )
}

export default Post
