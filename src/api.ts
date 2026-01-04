export interface PostMeta {
  title: string;
  slug: string;
  date: string;
  readTime: number;
  excerpt: string;
}

export interface Post extends PostMeta {
  content: string;
  wordCount: number;
}

export async function fetchPosts(): Promise<PostMeta[]> {
  const response = await fetch('/posts.json');
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
}

export async function fetchPost(slug: string): Promise<Post> {
  const response = await fetch(`/posts/${slug}.json`);
  if (!response.ok) {
    throw new Error('Post not found');
  }
  return response.json();
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
