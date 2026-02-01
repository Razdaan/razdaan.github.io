import { Link } from 'react-router-dom';

export function AboutPage() {
  return (
    <div className="about container fade-in">
      <div className="about-content">
  <p>
    I am <strong>Ashar Nasir</strong>.
</p>
<p>
    I build computational models to understand life, and sometimes I write.
</p>
<p>
    <strong>Razdaan</strong> is my attempt to trace these patterns, not just in the 
    code I write, but in the silence between the lines.
</p>
</div>


<div dir="rtl" lang="ur" style={{ fontFamily: "'Noto Nastaliq Urdu', serif", lineHeight: 1.8 }}>
</div>
    </div>
  );
}

export function NotFoundPage() {
  return (
    <div className="not-found container">
      <h1>404</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/" className="back-link">
        Return to posts
      </Link>
    </div>
  );
}
