# Razdaan Blog

A minimal, beautiful philosophical blog built with React and TypeScript.

## How to Add New Posts

Adding a new blog post is incredibly simple:

1. Create a new `.txt` file in the `posts/` folder
2. The **first line** of the file becomes the title
3. Everything after the first line is the content
4. Push to GitHub - it's automatically published!

### Example Post

Create a file like `posts/my-new-essay.txt`:

```
My Deep Thoughts on Life
This is the first paragraph of your essay.

This is the second paragraph. You can use *italics* with asterisks
and **bold** with double asterisks.

Keep writing as much as you want...
```

That's it! The blog will:
- Use the first line as the title
- Generate a URL slug from the filename
- Calculate reading time automatically
- Extract an excerpt for the homepage
- Sort posts by date (newest first)

## Local Development

```bash
# Install dependencies
npm install

# Build posts and start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Features

- 🎨 Beautiful, minimal design with dark mode support
- ✍️ Just write `.txt` files - no markdown complexity needed
- 📱 Fully responsive design
- ⚡ Fast, static site generation
- 🌐 GitHub Pages ready with automatic deployment
- 📖 Elegant typography for philosophical reading
- 🎯 SEO-friendly with proper meta tags

## Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch.

### Setup GitHub Pages

1. Go to your repository Settings
2. Navigate to Pages
3. Set Source to "GitHub Actions"
4. Push to main - your site will be live at `razdaan.github.io`

## Project Structure

```
blog/
├── posts/              # Your blog posts (.txt files)
├── public/             # Static assets
├── src/
│   ├── components/     # React components
│   ├── pages/          # Page components
│   ├── api.ts          # Data fetching utilities
│   └── App.tsx         # Main app component
├── scripts/
│   └── build-posts.js  # Converts .txt to JSON
└── .github/
    └── workflows/
        └── deploy.yml  # Auto-deploy to GitHub Pages
```

## License

MIT
