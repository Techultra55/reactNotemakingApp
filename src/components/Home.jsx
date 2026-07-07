import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();


  // Fetch posts from the backend when the component mounts
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/api/posts');
      const data = await response.json();
      setPosts(data);
    }
    catch (error) {
      console.error('Error fetching posts:', error);
    }
    finally {
      setLoading(false);
    }

  }


  const handleDelete = async (id) => {

    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        const response = await fetch(`http://localhost:5000/api/posts/${id}`, {
          method: 'DELETE'
        });

        if (response.ok) {
          setPosts(posts.filter(post => post.id !== id));
        }
      }
      catch (error) {
        console.error('Error deleting post:', error);
      }
    }

  }


  return (
    <div className="min-h-screen bg-[var(--bg)] px-4 py-8 text-[color:var(--text)] sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-5xl justify-end">
        <a
          href="/compose"
          className="rounded-full border border-[color:var(--border)] bg-[color:var(--glass)] px-4 py-2 text-sm font-medium text-[color:var(--text)] shadow-[var(--shadow-lg)] backdrop-blur-xl transition-all duration-300 hover:scale-[1.02]"
        >
          New Post
        </a>
      </div>

      <div className="mx-auto mt-6 max-w-5xl">
        {loading ? (
          <p className="text-[color:var(--muted)]">Loading posts...</p>
        ) : posts.length > 0 ? (
          <div className="grid gap-7">
            {posts.map((post) => (
              <article
                key={post.id}
                className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--glass)] p-6 shadow-[var(--shadow-lg)] backdrop-blur-xl"
              >
                <div className="mb-3">
                  <span className="text-sm text-[color:var(--muted)]">{post.date}</span>
                </div>

                <h3 className="mb-3 text-2xl font-semibold text-[color:var(--text)]">{post.title}</h3>

                <p className="mb-5 text-[color:var(--muted)]">
                  {post.content.substring(0, 150)}
                  {post.content.length > 150 && '...'}
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    className="rounded-lg border border-[color:var(--border)] bg-[color:var(--glass)] px-4 py-2 text-sm text-[color:var(--text)] transition-colors duration-300 hover:bg-white/10"
                    onClick={() => navigate(`/posts/${post.id}`)}
                  >
                    Read More
                  </button>
                  <button
                    className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-emerald-400"
                    onClick={() => navigate(`/posts/${post.id}/edit`)}
                  >
                    Edit
                  </button>
                  <button
                    className="rounded-lg bg-rose-500 px-4 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-rose-400"
                    onClick={() => handleDelete(post.id)}
                  >
                    Delete
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--glass)] p-8 text-center shadow-[var(--shadow-lg)] backdrop-blur-xl">
            <p className="text-[color:var(--muted)]">
              No posts yet.{' '}
              <a href="/compose" className="font-medium text-[color:var(--text)] underline-offset-4 hover:underline">
                Create your first post!
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  )


}


export default Home
