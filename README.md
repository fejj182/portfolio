# Jeff's Blog - AI-First Product Engineer

A thoughtful blog showcasing AI-first product development, calm interfaces, and digital products that actually serve their users.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Visit `http://localhost:4321` to see your blog in action.

## 📝 Content Management

### Blog Posts
Add new blog posts in `src/content/blog/` as Markdown files with frontmatter:

```markdown
---
title: "Your Post Title"
description: "Brief description"
pubDate: 2024-01-15
tags: ["AI", "Product Development"]
---

# Your content here...
```

### Projects
Add new projects in `src/content/projects/` as Markdown files:

```markdown
---
title: "Project Name"
description: "Project description"
url: "https://project-url.com"
github: "https://github.com/username/repo"
tech: ["TypeScript", "React", "AI"]
featured: true
---

# Project details...
```

## 🎨 Design Philosophy

This blog is built around the principle of **calm interfaces**:

- **Serotonin over dopamine**: Designed for satisfaction, not addiction
- **Front-load clarity**: Information is organized and accessible
- **Reduce cognitive load**: Clean, minimal design that supports focus
- **Respectful of attention**: No unnecessary interruptions or distractions

## 🛠️ Tech Stack

- **Astro** - Static site generation
- **TypeScript** - Type safety
- **Content Collections** - Structured content management
- **CSS Custom Properties** - Consistent design system
- **Inter Font** - Clean, readable typography

## 📁 Project Structure

```
/
├── src/
│   ├── components/          # Reusable components
│   │   ├── BlogCard.astro
│   │   └── ProjectCard.astro
│   ├── content/             # Content collections
│   │   ├── blog/            # Blog posts
│   │   └── projects/        # Project showcases
│   ├── layouts/             # Page layouts
│   │   └── Layout.astro
│   └── pages/               # Routes
│       ├── index.astro      # Homepage
│       ├── blog/            # Blog pages
│       └── projects/        # Project pages
├── public/                  # Static assets
└── astro.config.mjs        # Astro configuration
```

## 🚀 Deployment

This site is ready to deploy to any static hosting service:

- **Vercel**: Connect your GitHub repo
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Enable Pages in repository settings

### Build Commands

```bash
npm run build    # Build for production
npm run preview  # Preview production build locally
```

## 🎯 Features

- ✅ **Responsive Design** - Works on all devices
- ✅ **SEO Optimized** - Meta tags and structured data
- ✅ **Fast Loading** - Static generation with Astro
- ✅ **Type Safe** - Full TypeScript support
- ✅ **Content Management** - Easy blog and project management
- ✅ **Calm Aesthetics** - Thoughtful, minimal design

## 📖 Writing Guidelines

When creating content, consider:

- **Think before you write**: What value are you providing?
- **Be specific**: Concrete examples over abstract concepts
- **Show, don't tell**: Demonstrate your points with examples
- **Respect the reader's time**: Clear, concise, and purposeful

## 🤝 Contributing

This is a personal blog, but if you have suggestions for improvements to the codebase or design, feel free to open an issue or submit a pull request.

---

*Built with ❤️ and a focus on thoughtful digital experiences.*