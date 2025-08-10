<template>
  <div class="elegant-home">
    <!-- Articles Hero Section -->
    <section class="articles-hero">
      <div class="container">
        <div class="section-header">
          <h2>Drapery Insights</h2>
          <p>Expert articles on window treatments and interior design</p>
        </div>
      </div>
    </section>

    <!-- Articles Grid -->
    <section class="articles-section">
      <div class="container">
        <div class="articles-grid">
          <article
            v-for="article in articles"
            :key="article.slug"
            class="article-card"
          >
            <RouterLink :to="`/articles/${article.slug}`" class="article-link">
              <div class="article-image">
                <img
                  v-if="article.frontmatter.hero"
                  :src="getImageUrl(article.frontmatter.hero)"
                  :alt="article.frontmatter.title"
                  class="article-img"
                  loading="lazy"
                />
                <img
                  v-else
                  src="https://picsum.photos/seed/article/800/500"
                  :alt="article.frontmatter.title"
                  class="article-img"
                  loading="lazy"
                />
              </div>
              <div class="article-content">
                <h3>{{ article.frontmatter.title || 'No Title' }}</h3>
                <p v-if="article.frontmatter.date" class="article-meta">
                  Published on {{ formatDate(article.frontmatter.date) }}
                </p>
                <p v-if="article.frontmatter.description" class="article-excerpt">
                  {{ article.frontmatter.description }}
                </p>
                <p v-else class="article-excerpt">
                  No description available
                </p>
                <span class="read-more">Read More →</span>
              </div>
            </RouterLink>
          </article>
        </div>
      </div>
    </section>

    <!-- Consultation CTA -->
    <section class="consultation-cta">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Transform Your Windows?</h2>
          <p>Schedule a consultation with our expert team today.</p>
          <RouterLink to="/consultation" class="primary-btn">Book Consultation</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { articles } from '../lib/articles'

console.log('Articles loaded:', articles)
console.log('Articles frontmatter:', articles.map(a => ({ title: a.frontmatter.title, hero: a.frontmatter.hero })))

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const getImageUrl = (imagePath) => {
  console.log('getImageUrl called with:', imagePath)
  try {
    const url = new URL(imagePath, import.meta.url).href
    console.log('Resolved URL:', url)
    return url
  } catch (error) {
    console.error('Failed to load image:', imagePath, error)
    return 'https://picsum.photos/seed/article/800/500'
  }
}
</script>

<style scoped>
@import '../assets/elegant-home.css';

.elegant-home {
  padding-top: 100px; /* Account for fixed navigation */
}

.articles-section {
  background: #fafafa;
}

.articles-hero {
  padding: 120px 0 60px;
  background: linear-gradient(135deg, var(--background-light) 0%, var(--background-lighter) 100%);
  position: relative;
  overflow: hidden;
}

.articles-section {
  padding: 60px 0;
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2.5rem;
  margin-top: 2rem;
}

.article-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid var(--border-color);
}

.article-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

.article-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.article-image {
  height: 250px;
  overflow: hidden;
  position: relative;
}

.article-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.article-card:hover .article-img {
  transform: scale(1.05);
}

.article-content {
  padding: 2rem;
}

.article-content h3 {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: var(--text-dark);
  font-family: 'Georgia', 'Times New Roman', serif;
}

.article-meta {
  font-size: 0.9rem;
  color: var(--text-light);
  margin-bottom: 1rem;
  font-style: italic;
}

.article-excerpt {
  color: var(--text-light);
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.read-more {
  color: var(--primary-color);
  font-weight: 600;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.article-card:hover .read-more {
  color: var(--secondary-color);
}

@media (max-width: 768px) {
  .articles-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .article-card {
    margin: 0 0.5rem;
  }

  .articles-hero {
    padding: 100px 0 40px;
  }

  .container {
    padding: 0 1rem;
  }
}
</style>
