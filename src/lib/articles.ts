import type { Frontmatter } from '../types/markdown'

interface Article {
  slug: string
  component: any
  frontmatter: Frontmatter
  path: string
}

// Import all markdown files from the articles directory
const articleModules = import.meta.glob('@assets/articles/**/*.md', { eager: true })

// Normalize articles
const articles: Article[] = Object.entries(articleModules).map(([path, module]) => {
  const component = module as any
  console.log('Processing component:', path)
  console.log('Component keys:', Object.keys(component))
  console.log('Component description:', component.description)
  console.log('Component hero:', component.hero)

  // The frontmatter is directly on the component object
  const frontmatter = {
    title: component.title,
    date: component.date,
    description: component.description,
    hero: component.hero,
    slug: component.slug,
  }

  console.log('Extracted frontmatter:', frontmatter)

  // Fallback frontmatter if not extracted properly
  if (!frontmatter.title) {
    const filename = path.split('/').pop()?.replace('.md', '') || ''
    frontmatter.title = filename.replace(/([A-Z])/g, ' $1').trim()
    frontmatter.date = '2025-08-10'
    frontmatter.hero = 'https://picsum.photos/seed/' + filename.toLowerCase() + '/800/400'
  }

  // Generate slug from frontmatter or filename
  let slug = frontmatter.slug
  if (!slug) {
    const filename = path.split('/').pop()?.replace('.md', '') || ''
    // Convert camelCase to kebab-case
    slug = filename
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
  }

  return {
    slug,
    component,
    frontmatter,
    path,
  }
})

// Sort by date descending, then by title ascending
articles.sort((a, b) => {
  const dateA = a.frontmatter.date ? new Date(a.frontmatter.date).getTime() : 0
  const dateB = b.frontmatter.date ? new Date(b.frontmatter.date).getTime() : 0

  if (dateB !== dateA) {
    return dateB - dateA
  }

  const titleA = a.frontmatter.title || ''
  const titleB = b.frontmatter.title || ''
  return titleA.localeCompare(titleB)
})

// Create a Map for quick lookups
const articleBySlug = new Map<string, Article>()
articles.forEach((article) => {
  articleBySlug.set(article.slug, article)
})

export { articles, articleBySlug }
export type { Article }
