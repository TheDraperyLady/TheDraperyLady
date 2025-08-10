<template>
  <div class="elegant-home">
    <!-- Hero Section -->
    <section id="home" class="hero">
      <div class="hero-background">
        <div class="ornate-pattern"></div>
      </div>
      <div class="hero-content">
        <div class="hero-text">
          <h1>Classic, Simple, Elegant</h1>
          <p class="hero-subtitle">Exquisite custom drapery</p>
          <p class="hero-description">
            Each piece is a testament to timeless beauty, meticulously crafted to transform your
            houses into homes.
          </p>
          <div class="cta-group">
            <router-link to="/consultation" class="primary-btn">Book Your Consultation</router-link>
            <button class="secondary-btn" @click="scrollToPortfolio">View Portfolio</button>
          </div>
        </div>
        <div class="hero-visual">
          <div class="elegant-frame">
            <img src="../assets/banner-2.webp" alt="Luxurious Drapery" class="hero-image" />
          </div>
        </div>
      </div>
    </section>

    <!-- About Christine St. Clair -->
    <section id="about" class="about-section">
      <div class="container">
        <div class="about-content">
          <div class="about-text">
            <h2>Meet The Drapery Lady</h2>
            <h3>Christine St. Clair</h3>
            <p class="about-intro">
              Christine St. Clair is the daughter of an international businessman, who grew up in
              several different countries on three different continents of the world. It was
              commonplace for Christine to select fabrics from the local markets and take them to
              her seamstress to sew her clothing and home goods. In 1996, Christine was employed by
              one of San Jose's oldest drapery and shutter houses where she worked her way up to
              lead designer. It was here that she received the majority of her experience designing
              and selling all types of custom draperies, blinds, shades, and shutters for commercial
              establishments and some of Silicon Valley's finest homes. After eleven years, it was
              time that the student left the master and ventured out on her own into the next phase
              of her career. In June of 2009, Christine opened her own business as "The Drapery
              Lady."
            </p>
            <p class="about-description">
              Eventually, Christine returned to the United States. In 1985, while attending college,
              she sold ready-made draperies and blinds in a large department store to earn spending
              money. She enjoyed working with window coverings so much that after she completed her
              Bachelor of Arts, she moved into the department store's custom decorating department.
              The training Christine received at the department stores provided the basis of her
              window covering design experience.
            </p>
            <p class="about-description">
              Eventually, Christine returned to the United States. In 1985, while attending college,
              she sold ready-made draperies and blinds in a large department store to earn spending
              money. She enjoyed working with window coverings so much that after she completed her
              Bachelor of Arts, she moved into the department store's custom decorating department.
              The training Christine received at the department stores provided the basis of her
              window covering design experience.
            </p>
            <div class="about-stats">
              <div class="stat-item">
                <span class="stat-number">35+</span>
                <span class="stat-label">Years Experience</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">500+</span>
                <span class="stat-label">Happy Clients</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">1,000+</span>
                <span class="stat-label">Custom Pieces</span>
              </div>
              <div class="stat-item anniversary-stat">
                <div class="anniversary-badge-inline">
                  <img
                    src="../assets/15-year-business-anniversary-drapery-lady.webp"
                    alt="15 Year Anniversary"
                    class="anniversary-sticker-small"
                  />
                  <div class="anniversary-text-inline">
                    <span class="anniversary-date">June 10, 2024</span>
                    <span class="anniversary-message">16 years of business</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="about-visual">
            <div class="about-image-frame">
              <img
                src="../assets/Christine St. Clair.jpg"
                alt="Christine St. Clair - The Drapery Lady"
                class="about-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="services-section">
      <div class="container">
        <div class="section-header">
          <h2>Our Services</h2>
          <p>Comprehensive window treatment solutions for every home</p>
        </div>
        <div class="services-grid">
          <div v-for="(product, key) in firstFourProducts" :key="key" class="service-card">
            <div class="service-image-container">
              <img :src="product.homePageImage" :alt="product.title" class="service-image" />
            </div>
            <div class="service-content">
              <h3>{{ product.title }}</h3>
              <p>{{ product.description }}</p>
            </div>
          </div>
        </div>

        <div class="text-center" style="margin-top: 3rem">
          <router-link to="/products" class="primary-btn">View All Products</router-link>
        </div>

        <!-- Carousel (commented out for future use)
        <div class="carousel-container">
          <div class="carousel-track" ref="carouselTrack">
            <div class="product-card">
              <div class="product-image">
                <div class="image-placeholder">Classic Silk Panels</div>
              </div>
              <div class="product-content">
                <h3>Classic Silk Panels</h3>
                <p>Luxurious silk panels with hand-sewn pleats and weighted hems</p>
                <span class="price">From $450</span>
              </div>
            </div>
            <div class="product-card">
              <div class="product-image">
                <div class="image-placeholder">Linen Blend Drapes</div>
              </div>
              <div class="product-content">
                <h3>Linen Blend Drapes</h3>
                <p>Natural linen blend with elegant texture and drape</p>
                <span class="price">From $380</span>
              </div>
            </div>
            <div class="product-card">
              <div class="product-image">
                <div class="image-placeholder">Velvet Accent Panels</div>
              </div>
              <div class="product-content">
                <h3>Velvet Accent Panels</h3>
                <p>Rich velvet panels with decorative trim and hardware</p>
                <span class="price">From $520</span>
              </div>
            </div>
            <div class="product-card">
              <div class="product-image">
                <div class="image-placeholder">Sheer Overlay Panels</div>
              </div>
              <div class="product-content">
                <h3>Sheer Overlay Panels</h3>
                <p>Delicate sheer panels for layered window treatments</p>
                <span class="price">From $280</span>
              </div>
            </div>
            <div class="product-card">
              <div class="product-image">
                <div class="image-placeholder">Roman Shades</div>
              </div>
              <div class="product-content">
                <h3>Custom Roman Shades</h3>
                <p>Tailored roman shades with premium fabric selection</p>
                <span class="price">From $320</span>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-controls">
          <button class="carousel-btn prev-btn" @click="scrollCarousel('prev')">‹</button>
          <button class="carousel-btn next-btn" @click="scrollCarousel('next')">›</button>
        </div>
        -->
      </div>

      <!-- Service Area Component -->
      <div class="service-area-container">
        <ServiceArea />
      </div>
    </section>

    <!-- Portfolio Section -->
    <PortfolioSection />

    <!-- Testimonials Section -->
    <section id="testimonials" class="testimonials">
      <div class="container">
        <div class="section-header">
          <h2>Client Testimonials</h2>
          <p>What our distinguished clients have to say</p>
        </div>
        <div class="testimonials-grid">
          <div class="testimonial-card">
            <div class="star-rating">
              <span class="star">★</span>
              <span class="star">★</span>
              <span class="star">★</span>
              <span class="star">★</span>
              <span class="star">★</span>
            </div>
            <p>
              I have found Christine St. Clair (aka: The Drapery Lady) to be very knowledgeable and
              helpful with my needs for window coverings as well as other coordinating accessories.
              She has made draperies with a coordinating bedspread and pillows for me that are
              absolutely beautiful! I have also had her make some shutters and shades in other rooms
              of my home. I am so happy with all the work Christine has done for me. She has
              seamlessly taken my projects from the beginning to end with ease. I have found her
              installer Joe wonderful as well. The two of them are real pros with a great deal of
              experience and knowledge. I look forward to working with The Drapery Lady again on my
              next home project. Do yourself a favor and give Christine a try. You'll be happy you
              did!
            </p>
            <div class="client-info">
              <h4>Kitty W</h4>
              <!-- <span>Manor House Estate</span> -->
            </div>
          </div>
          <div class="testimonial-card">
            <div class="star-rating">
              <span class="star">★</span>
              <span class="star">★</span>
              <span class="star">★</span>
              <span class="star">★</span>
              <span class="star">★</span>
            </div>
            <p>
              Christine, the Drapery Lady, was able to come out quickly after I first contacted her.
              She has lots of drapery fabrics and brought books of those she thought I would like
              based on our phone conversation. In the end, I ordered Hunter Douglas blinds, a Roman
              shade and a drapery. All were ready in about 4 weeks and Christine and installer came
              and installed them. For the drapes, I decided to use my existing curtain rod - but the
              anchor that holds the lower end of the drapery cord had gone missing. Christine's
              installer had a spare in his truck - and he installed it. Overall, I found Christine
              to be both professional and helpful and she has an amazing assortment of fabrics.
            </p>
            <div class="client-info">
              <h4>Connie H.</h4>
              <!-- <span>Heritage Villa</span> -->
            </div>
          </div>
          <div class="testimonial-card">
            <div class="star-rating">
              <span class="star">★</span>
              <span class="star">★</span>
              <span class="star">★</span>
              <span class="star">★</span>
              <span class="star">★</span>
            </div>
            <p>
              Best of the best! If you want quality, luxurious drapes that operate quietly and
              flawlessly with drawstrings on tracks this is the service you want. Forget those rods
              and clanking loops approach (or worse yet, blinds!) to window coverings and go for the
              real thing! We could not be more pleased with the traditional drapes that DL created
              for us and for the passion and expertise she brings to her work. When we phoned, she
              came immediately to our house for a consult, bringing a wide array of fabrics for us
              to select from. She gave us excellent suggestions but also made sure that she had an
              exact understanding of what we wanted. DL was incredibly professional and delivered
              everything she promised to a T. Six weeks after her initial visit our rooms were
              revitalized. She brought in an expert workman and personally supervised the job,
              making sure that nothing was left to chance so the installation was flawless. So happy
              we found her! You will be too.
            </p>
            <div class="client-info">
              <h4>Toni T.</h4>
              <!-- <span>Victorian Home</span> -->
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section id="faq" class="faq-section">
      <div class="container">
        <div class="section-header">
          <h2>Frequently Asked Questions</h2>
        </div>
        <div class="faq-list">
          <div class="faq-item">
            <h3 class="faq-question">How Long Does The Consultation Take?</h3>
            <p class="faq-answer">
              The average consultation lasts 2 hours. Larger homes usually require longer
              consultations.
            </p>
          </div>
          <div class="faq-item">
            <h3 class="faq-question">Where Are Your Draperies Made?</h3>
            <p class="faq-answer">
              Draperies, valances and Roman shades are fabricated in California.
            </p>
          </div>
          <div class="faq-item">
            <h3 class="faq-question">Where Are Your Blinds, Shades and Shutters Made?</h3>
            <p class="faq-answer">They are made in the U.S.A., Mexico and China.</p>
          </div>
          <div class="faq-item">
            <h3 class="faq-question">I have my fabric. Will you work with my own fabric?</h3>
            <p class="faq-answer">In most cases we can work with your own fabric.</p>
          </div>
          <div class="faq-item">
            <h3 class="faq-question">
              How long does it take to have custom window treatments made?
            </h3>
            <p class="faq-answer">
              The time that it takes to complete an order is dependent upon the time of year but for
              most of the year this is how long it takes for an order to be completed:
            </p>
            <ul class="faq-list-detail">
              <li>
                Custom draperies, valances, Roman shades, bedding and accessories take four to six
                weeks from the time of placing your order to the time of installation.
              </li>
              <li>
                Custom plantation shutters take eight to ten weeks from the time of placing your
                order to the time of installation.
              </li>
              <li>
                Custom blinds and shades take two to four weeks from the time of placing your order
                to the time of installation.
              </li>
            </ul>
          </div>
          <div class="faq-item">
            <h3 class="faq-question">
              What is the difference between ready–made draperies and custom made draperies?
            </h3>
            <p class="faq-answer">
              Ready-made draperies are mass produced in a factory and are available in a limited
              number of fabrics, colors, styles and sizes. Custom made draperies and window
              treatments are like getting a custom suit made specifically for your window. There are
              a large variety of fabrics, colors and styles that are available to select from and
              they are sized specifically for your windows. Please note that there are higher
              standards that are used in making custom draperies and window treatments as well.
            </p>
          </div>
          <div class="faq-item">
            <h3 class="faq-question">Who does your installation?</h3>
            <p class="faq-answer">
              The installation is done by professional installers who are licensed, bonded and
              insured.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Consultation CTA -->
    <section id="contact" class="consultation-cta">
      <div class="container">
        <div class="cta-content">
          <h2>Begin Your Transformation</h2>
          <p>
            Experience the art of custom drapery design. Call for your private consultation today.
          </p>
          <router-link to="/consultation" class="primary-btn">Book Your Consultation</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import ServiceArea from '../components/ServiceArea.vue'
import PortfolioSection from '../components/PortfolioSection.vue'
import { productDetails } from '../data/productDetails.js'

// Get the first 4 products from productDetails
const firstFourProducts = computed(() => {
  const products = Object.entries(productDetails)
  return products.slice(0, 4).reduce((acc, [key, product]) => {
    acc[key] = product
    return acc
  }, {})
})

onMounted(() => {
  // Any other initialization if needed
})

const scrollToPortfolio = () => {
  const portfolioSection = document.getElementById('portfolio')
  if (portfolioSection) {
    portfolioSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}
</script>

<style scoped>
@import '../assets/elegant-home.css';

.service-area-container {
  margin-top: 60px;
  padding-top: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.faq-section {
  background: #faf8f6;
  padding: 60px 0 40px 0;
  border-radius: 16px;
  margin: 48px 0;
  box-shadow: 0 2px 16px 0 rgba(60, 40, 20, 0.06);
}
.faq-section .section-header {
  text-align: center;
  margin-bottom: 32px;
}
.faq-list {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.faq-item {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 1px 8px 0 rgba(60, 40, 20, 0.04);
  padding: 28px 32px 20px 32px;
  transition: box-shadow 0.2s;
}
.faq-item:hover {
  box-shadow: 0 4px 24px 0 rgba(60, 40, 20, 0.1);
}
.faq-question {
  font-size: 1.18rem;
  font-weight: 600;
  color: #800020;
  margin-bottom: 10px;
  font-family: 'Georgia', 'Times New Roman', serif;
}
.faq-answer {
  font-size: 1.05rem;
  color: #3d2b1f;
  margin-bottom: 0;
  line-height: 1.7;
}
.faq-list-detail {
  margin: 12px 0 0 18px;
  padding: 0;
  color: #3d2b1f;
  font-size: 1rem;
  line-height: 1.6;
}
.faq-list-detail li {
  margin-bottom: 6px;
  list-style: disc inside;
}

/* Add new testimonial card styles */
.testimonial-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  padding: 32px;
}

.testimonial-card p {
  flex-grow: 1;
  margin-bottom: 24px;
}

.client-info {
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.client-info h4 {
  margin: 0;
  color: #800020;
  font-size: 1.1rem;
}

@media (max-width: 600px) {
  .faq-item {
    padding: 18px 12px 14px 12px;
  }
  .faq-section {
    padding: 32px 0 20px 0;
    margin: 24px 0;
  }
}
</style>
