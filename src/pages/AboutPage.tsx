import { Link } from 'react-router-dom';

export function AboutPage() {
  return (
    <div className="about container fade-in">
      <div className="about-content">
  <p>
    Welcome to <strong>Razdaan</strong>—a quiet corner for thinking slowly in an age
    that rewards speed. This space grew out of a restlessness with easy answers:
    about knowledge and its limits, about intelligence—human and artificial—about
    meaning in a world that often feels over-optimized and under-understood.
  </p>

  <p>
    Much of what I write lives at the intersections: philosophy and computation,
    entropy and order, algorithms and agency, faith and doubt. These are not abstract
    puzzles to me, but questions that surface while studying systems, building models,
    reading poetry, or simply paying attention to how life resists neat explanations.
  </p>

  <h2>The Name</h2>
  <p>
    <em>Razdaan</em> literally means “the giver of secrets.” Not secrets as final truths,
    but as glimpses—partial, fragile, and provisional. Each essay here is an attempt
    to open a small box: sometimes it contains an idea from information theory,
    sometimes a philosophical doubt, sometimes a line of thought that refuses to
    resolve cleanly.
  </p>

  <h2>The Approach</h2>
  <p>
    I don’t see philosophy as something confined to departments or footnotes.
    It is closer to a discipline of attention: a way of thinking carefully about
    systems, assumptions, and the stories we tell ourselves. I draw from philosophy, 
    contemporary thinkers, and technical work in AI and networks,
    but I try to write in a way that remains human.
  </p>

  <p>
    If something here unsettles you, slows you down, or helps you name a thought
    you’ve been circling for a while, then it has done what it was meant to do.
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
