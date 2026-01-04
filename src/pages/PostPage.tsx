import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchPost, formatDate, type Post } from '../api';

function ArrowLeft() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 12H5M12 19l-7-7 7-7"/>
    </svg>
  );
}

export function PostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!slug) return;
    
    setLoading(true);
    setError(false);
    
    fetchPost(slug)
      .then(setPost)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error || !post) {
    return (
      <div className="not-found container">
        <h1>404</h1>
        <p>This essay could not be found.</p>
        <Link to="/" className="back-link">
          <ArrowLeft />
          Return to essays
        </Link>
      </div>
    );
  }

  // Convert content to paragraphs
  const paragraphs = post.content.split('\n\n').filter(p => p.trim());

  return (
    <article className="post container fade-in">
      <Link to="/" className="back-link">
        <ArrowLeft />
        Back to essays
      </Link>
      
      <header className="post-header">
        <div className="post-meta">
          <time className="post-date" dateTime={post.date}>
            {formatDate(post.date)}
          </time>
          <span className="post-read-time">{post.readTime} min read</span>
        </div>
        <h1 className="post-title">{post.title}</h1>
      </header>
      
      <div className="post-content">
        {paragraphs.map((paragraph, index) => (
          <p key={index} dangerouslySetInnerHTML={{ 
            __html: paragraph
              .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
              .replace(/\*(.+?)\*/g, '<em>$1</em>')
          }} />
        ))}
      </div>
    </article>
  );
}
