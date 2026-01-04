import { Link } from 'react-router-dom';

export function AboutPage() {
  return (
    <div className="about container fade-in">
      <div className="about-content">
        <p>
          Welcome to Razdaan, a space for philosophical reflection and contemplation. 
          Here, I explore questions that have fascinated humanity for millennia—questions 
          about meaning, existence, consciousness, and the art of living well.
        </p>
        
        <p>
          Philosophy, at its best, is not an academic exercise but a way of life. 
          These essays are invitations to think deeply, to question assumptions, 
          and to engage with ideas that matter.
        </p>

        <h2>The Name</h2>
        <p>
          "Razdaan" carries within it the essence of gifting secrets, of sharing 
          hidden wisdom. Each essay here is an offering—a small piece of meaning 
          uncovered and shared.
        </p>

        <h2>The Approach</h2>
        <p>
          I believe philosophy should be accessible. While I draw on ancient wisdom 
          and contemporary thought, these essays aim to speak to lived experience. 
          No jargon for its own sake. No obscurity mistaken for depth.
        </p>
        
        <p>
          If something here resonates with you, or provokes you to disagree, 
          it has done its work.
        </p>
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
        Return to essays
      </Link>
    </div>
  );
}
