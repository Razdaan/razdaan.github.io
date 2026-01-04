import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');
const postsDir = path.join(rootDir, 'posts');
const outputFile = path.join(rootDir, 'public', 'posts.json');
const postsPublicDir = path.join(rootDir, 'public', 'posts');

// Ensure directories exist
if (!fs.existsSync(postsDir)) {
  fs.mkdirSync(postsDir, { recursive: true });
}
if (!fs.existsSync(postsPublicDir)) {
  fs.mkdirSync(postsPublicDir, { recursive: true });
}

// Read all .txt files from posts directory
const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.txt'));

const posts = files.map(filename => {
  const filepath = path.join(postsDir, filename);
  const content = fs.readFileSync(filepath, 'utf-8');
  const lines = content.split('\n');
  
  // First line is the title
  const title = lines[0].trim();
  // Rest is the content
  const body = lines.slice(1).join('\n').trim();
  
  // Get file stats for date
  const stats = fs.statSync(filepath);
  const date = stats.mtime.toISOString().split('T')[0];
  
  // Create slug from filename (remove .txt)
  const slug = filename.replace('.txt', '').toLowerCase().replace(/\s+/g, '-');
  
  // Calculate read time (average 200 words per minute)
  const wordCount = body.split(/\s+/).length;
  const readTime = Math.max(1, Math.ceil(wordCount / 200));
  
  // Copy content to public folder for fetching
  const postData = { title, content: body, date, slug, readTime, wordCount };
  fs.writeFileSync(
    path.join(postsPublicDir, `${slug}.json`),
    JSON.stringify(postData, null, 2)
  );
  
  // Return metadata for index
  return {
    title,
    slug,
    date,
    readTime,
    excerpt: body.substring(0, 200).replace(/\n/g, ' ').trim() + (body.length > 200 ? '...' : '')
  };
});

// Sort by date (newest first)
posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

// Write posts index
fs.writeFileSync(outputFile, JSON.stringify(posts, null, 2));

console.log(`✓ Built ${posts.length} posts`);
posts.forEach(p => console.log(`  - ${p.title} (${p.slug})`));
