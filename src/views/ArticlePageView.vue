<template>
  <div class="elegant-home">
    <div v-if="article" class="article-page">
      <!-- Article Hero -->
      <section v-if="article.frontmatter.hero" class="article-hero">
        <img
          :src="getImageUrl(article.frontmatter.hero)"
          :alt="article.frontmatter.title"
          class="hero-image"
        />
      </section>

      <!-- Article Content -->
      <section class="article-content-section">
        <div class="container">
          <div class="article-header">
            <h1>{{ article.frontmatter.title }}</h1>
            <p v-if="article.frontmatter.date" class="article-date">
              Published on {{ formatDate(article.frontmatter.date) }}
            </p>
            <p v-if="article.frontmatter.description" class="article-description">
              {{ article.frontmatter.description }}
            </p>
          </div>

          <div class="article-body">
            <component :is="article.component.default || article.component" />
          </div>

          <div class="article-footer">
            <RouterLink to="/articles" class="back-link"> ← Back to Articles </RouterLink>
          </div>
        </div>
      </section>
    </div>

    <!-- 404 State -->
    <div v-else class="not-found">
      <div class="container">
        <div class="not-found-content">
          <h2>Article Not Found</h2>
          <p>The article you're looking for doesn't exist.</p>
          <RouterLink to="/articles" class="primary-btn">Back to Articles</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { articleBySlug, getImageUrl } from '../lib/articles'

const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
})

const article = computed(() => articleBySlug.get(props.slug))

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<style scoped>
@import '../assets/elegant-home.css';

.elegant-home {
  padding-top: 100px; /* Account for fixed navigation */
}

.article-page {
  min-height: 100vh;
  padding-top: 2rem;
}

.article-hero {
  max-width: 800px;
  margin: 0 auto 3rem;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  background: white;
}

.hero-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
}

.article-content-section {
  padding: 60px 0;
  background: white;
}

.article-header {
  max-width: 800px;
  margin: 0 auto 3rem;
  text-align: center;
}

.article-header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 1rem;
  font-family: 'Georgia', 'Times New Roman', serif;
  line-height: 1.2;
}

.article-date {
  font-size: 1rem;
  color: var(--text-light);
  margin-bottom: 1rem;
  font-style: italic;
}

.article-description {
  font-size: 1.2rem;
  color: var(--text-light);
  line-height: 1.6;
  font-weight: 400;
}

.article-body {
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
  font-size: 1.1rem;
  color: var(--text-dark);
}

.article-body :deep(h1),
.article-body :deep(h2),
.article-body :deep(h3),
.article-body :deep(h4),
.article-body :deep(h5),
.article-body :deep(h6) {
  font-family: 'Georgia', 'Times New Roman', serif;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: var(--text-dark);
}

.article-body :deep(h1) {
  font-size: 2rem;
}
.article-body :deep(h2) {
  font-size: 1.75rem;
}
.article-body :deep(h3) {
  font-size: 1.5rem;
}
.article-body :deep(h4) {
  font-size: 1.25rem;
}

.article-body :deep(p) {
  margin-bottom: 1.5rem;
  line-height: 1.8;
}

.article-body :deep(ul),
.article-body :deep(ol) {
  margin-bottom: 1.5rem;
  padding-left: 2rem;
}

.article-body :deep(li) {
  margin-bottom: 0.5rem;
}

.article-body :deep(blockquote) {
  border-left: 4px solid var(--primary-color);
  padding-left: 1.5rem;
  margin: 2rem 0;
  font-style: italic;
  color: var(--text-light);
}

.article-body :deep(code) {
  background: #f5f5f5;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-family: 'Courier New', monospace;
}

.article-body :deep(pre) {
  background: #f5f5f5;
  padding: 1rem;
  border-radius: 5px;
  overflow-x: auto;
  margin: 1.5rem 0;
}

.article-body :deep(a) {
  color: var(--primary-color);
  text-decoration: none;
  transition: color 0.3s ease;
}

.article-body :deep(a:hover) {
  color: var(--secondary-color);
}

.article-footer {
  max-width: 800px;
  margin: 3rem auto 0;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
}

.back-link {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.back-link:hover {
  color: var(--secondary-color);
}

.not-found {
  padding: 120px 0 60px;
  text-align: center;
}

.not-found-content h2 {
  font-size: 2rem;
  color: var(--text-dark);
  margin-bottom: 1rem;
}

.not-found-content p {
  font-size: 1.1rem;
  color: var(--text-light);
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .article-hero {
    margin: 0 1rem 2rem;
    border-radius: 8px;
  }

  .article-header h1 {
    font-size: 2rem;
  }

  .article-body {
    font-size: 1rem;
    padding: 0 1rem;
  }

  .article-content-section {
    padding: 40px 0;
  }
}
</style>
