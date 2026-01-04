import { useEffect, useState } from 'react';
import { PostCard } from '../components';
import { fetchPosts, type PostMeta } from '../api';

export function HomePage() {
  const [posts, setPosts] = useState<PostMeta[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPosts()
      .then(setPosts)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="loading">Loading essays...</div>;
  }

  if (error) {
    return <div className="loading">Failed to load essays.</div>;
  }

  if (posts.length === 0) {
    return (
      <div className="posts-list container">
        <p className="loading">No essays yet. Add a .txt file to the posts folder to get started.</p>
      </div>
    );
  }

  return (
    <div className="posts-list container">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
