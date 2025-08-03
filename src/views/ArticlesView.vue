<template>
  <div class="elegant-home">
    <ElegantNav />

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
          <article class="article-card">
            <div class="article-image">
              <img
                src="https://picsum.photos/seed/drapes1/800/500"
                alt="Choosing the Right Fabric"
                class="article-img"
              />
            </div>
            <div class="article-content">
              <h3>Choosing the Right Fabric for Your Drapery</h3>
              <p class="article-meta">Published on June 15, 2024</p>
              <p class="article-excerpt">
                The fabric you choose for your drapery can make or break your room's aesthetic. From
                silk to linen, each material brings its own unique characteristics and benefits.
                Learn how to select the perfect fabric for your space.
              </p>
              <a href="#" class="read-more">Read More →</a>
            </div>
          </article>

          <article class="article-card">
            <div class="article-image">
              <img
                src="https://picsum.photos/seed/drapes2/800/500"
                alt="Custom Drapery Care"
                class="article-img"
              />
            </div>
            <div class="article-content">
              <h3>Essential Care Tips for Custom Drapery</h3>
              <p class="article-meta">Published on June 10, 2024</p>
              <p class="article-excerpt">
                Proper maintenance can extend the life of your custom drapery by years. Discover
                professional tips for cleaning, maintaining, and preserving your window treatments
                to keep them looking beautiful for years to come.
              </p>
              <a href="#" class="read-more">Read More →</a>
            </div>
          </article>

          <article class="article-card">
            <div class="article-image">
              <img
                src="https://picsum.photos/seed/drapes3/800/500"
                alt="Window Treatment Trends"
                class="article-img"
              />
            </div>
            <div class="article-content">
              <h3>2024 Window Treatment Trends</h3>
              <p class="article-meta">Published on June 5, 2024</p>
              <p class="article-excerpt">
                Stay ahead of the curve with the latest trends in window treatments. From
                sustainable materials to smart home integration, explore what's new and exciting in
                the world of drapery and window design.
              </p>
              <a href="#" class="read-more">Read More →</a>
            </div>
          </article>

          <article class="article-card">
            <div class="article-image">
              <img
                src="https://picsum.photos/seed/drapes4/800/500"
                alt="Motorized Solutions"
                class="article-img"
              />
            </div>
            <div class="article-content">
              <h3>The Benefits of Motorized Window Treatments</h3>
              <p class="article-meta">Published on May 30, 2024</p>
              <p class="article-excerpt">
                Discover how motorized window treatments can transform your home. From enhanced
                convenience to improved energy efficiency, learn why more homeowners are choosing
                automated solutions.
              </p>
              <a href="#" class="read-more">Read More →</a>
            </div>
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
          <button class="primary-btn">Call For Consultation 408-981-1874</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import ElegantNav from '../components/ElegantNav.vue'
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
}

.read-more {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.read-more:hover {
  color: var(--secondary-color);
}

@media (max-width: 768px) {
  .articles-grid {
    grid-template-columns: 1fr;
  }

  .article-card {
    margin: 0 1rem;
  }

  .articles-hero {
    padding: 100px 0 40px;
  }
}
</style>
