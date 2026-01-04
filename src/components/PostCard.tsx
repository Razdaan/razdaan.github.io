import { Link } from 'react-router-dom';
import type { PostMeta } from '../api';
import { formatDate } from '../api';

interface PostCardProps {
  post: PostMeta;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="post-card fade-in">
      <div className="post-meta">
        <time className="post-date" dateTime={post.date}>
          {formatDate(post.date)}
        </time>
        <span className="post-read-time">{post.readTime} min read</span>
      </div>
      <Link to={`/post/${post.slug}`}>
        <h2 className="post-title">{post.title}</h2>
      </Link>
      <p className="post-excerpt">{post.excerpt}</p>
    </article>
  );
}
