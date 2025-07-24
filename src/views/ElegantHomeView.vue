<template>
  <div class="elegant-home">
    <!-- Navigation -->
    <nav class="elegant-nav">
      <div class="nav-container">
        <div class="logo">
          <img src="../assets/TDL_logo.png" alt="The Drapery Lady" class="logo-image" />
          <div class="logo-text">
            <h2>The Drapery Lady</h2>
            <span class="tagline">Artistry in Fabric</span>
          </div>
        </div>
        <div class="nav-links">
          <a href="#home" class="active">Home</a>
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero">
      <div class="hero-background">
        <div class="ornate-pattern"></div>
      </div>
      <div class="hero-content">
        <div class="hero-text">
          <h1>Where Elegance Meets Craftsmanship</h1>
          <p class="hero-subtitle">Exquisite custom drapery</p>
          <p class="hero-description">
            Each piece is a testament to timeless beauty, meticulously crafted to transform your
            houses into homes.
          </p>
          <div class="cta-group">
            <button class="primary-btn">Call For Consultation <br />408-981-1874</button>
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
            <h2>Meet Christine St. Clair</h2>
            <h3>The Drapery Lady</h3>
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
                <span class="stat-number">15+</span>
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
                    <span class="anniversary-message">15 years of business</span>
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

    <!-- Products Section -->
    <section id="products" class="products-section">
      <div class="container">
        <div class="section-header">
          <h2>Our Services</h2>
          <p>Comprehensive window treatment solutions for every home</p>
        </div>
        <div class="products-grid">
          <div class="product-card">
            <div class="product-image">
              <img src="../assets/service-4.webp" alt="Custom Draperies" class="service-image" />
            </div>
            <div class="product-content">
              <h3>Custom Draperies</h3>
              <p>Elegant custom draperies tailored to your style and space</p>
              <span class="price">Custom Pricing</span>
            </div>
          </div>
          <div class="product-card">
            <div class="product-image">
              <img src="../assets/service-3.webp" alt="Premium Blinds" class="service-image" />
            </div>
            <div class="product-content">
              <h3>Premium Blinds</h3>
              <p>High-quality blinds for light control and privacy</p>
              <span class="price">Custom Pricing</span>
            </div>
          </div>
          <div class="product-card">
            <div class="product-image">
              <img src="../assets/service-2.webp" alt="Window Shades" class="service-image" />
            </div>
            <div class="product-content">
              <h3>Window Shades</h3>
              <p>Versatile shades for modern window treatments</p>
              <span class="price">Custom Pricing</span>
            </div>
          </div>
          <div class="product-card">
            <div class="product-image">
              <img src="../assets/service-1.webp" alt="Custom Shutters" class="service-image" />
            </div>
            <div class="product-content">
              <h3>Custom Shutters</h3>
              <p>Timeless shutters for classic elegance</p>
              <span class="price">Custom Pricing</span>
            </div>
          </div>
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
    </section>

    <!-- Portfolio Section -->
    <section id="portfolio" class="portfolio-section">
      <div class="container">
        <div class="section-header">
          <h2>Portfolio</h2>
          <p>A showcase of our finest custom drapery installations</p>
        </div>
        <div class="portfolio-grid">
          <div class="portfolio-item">
            <div class="portfolio-image">
              <img src="../assets/gallery-1.webp" alt="Portfolio Image 1" class="portfolio-img" />
            </div>
            <div class="portfolio-overlay">
              <h3>Portfolio Item 1</h3>
              <p>Custom window treatment showcase</p>
            </div>
          </div>
          <div class="portfolio-item">
            <div class="portfolio-image">
              <img src="../assets/gallery-2.webp" alt="Portfolio Image 2" class="portfolio-img" />
            </div>
            <div class="portfolio-overlay">
              <h3>Portfolio Item 2</h3>
              <p>Elegant drapery installation</p>
            </div>
          </div>
          <div class="portfolio-item">
            <div class="portfolio-image">
              <img src="../assets/gallery-3.webp" alt="Portfolio Image 3" class="portfolio-img" />
            </div>
            <div class="portfolio-overlay">
              <h3>Portfolio Item 3</h3>
              <p>Premium window treatment design</p>
            </div>
          </div>
          <div class="portfolio-item">
            <div class="portfolio-image">
              <div class="image-placeholder">Portfolio Item 4</div>
            </div>
            <div class="portfolio-overlay">
              <h3>Portfolio Item 4</h3>
              <p>Custom window treatment showcase</p>
            </div>
          </div>
          <div class="portfolio-item">
            <div class="portfolio-image">
              <div class="image-placeholder">Portfolio Item 5</div>
            </div>
            <div class="portfolio-overlay">
              <h3>Portfolio Item 5</h3>
              <p>Elegant drapery installation</p>
            </div>
          </div>
          <div class="portfolio-item">
            <div class="portfolio-image">
              <div class="image-placeholder">Portfolio Item 6</div>
            </div>
            <div class="portfolio-overlay">
              <h3>Portfolio Item 6</h3>
              <p>Premium window treatment design</p>
            </div>
          </div>
        </div>
      </div>
    </section>

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

    <!-- Services Showcase -->
    <section class="services-showcase">
      <div class="container">
        <div class="services-content">
          <div class="services-text">
            <h2>Bespoke Services</h2>
            <p>
              From initial consultation to final installation, we provide a comprehensive service
              experience that ensures your complete satisfaction.
            </p>
            <div class="service-list">
              <div class="service-item">
                <div class="service-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
                      fill="currentColor"
                    />
                    <path
                      d="M19 15L19.74 17.74L22.5 18.5L19.74 19.26L19 22L18.26 19.26L15.5 18.5L18.26 17.74L19 15Z"
                      fill="currentColor"
                    />
                    <path
                      d="M5 6L5.5 7.5L7 8L5.5 8.5L5 10L4.5 8.5L3 8L4.5 7.5L5 6Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div class="service-details">
                  <h3>Custom Design</h3>
                  <p>
                    Personalized designs created specifically for your space and style preferences.
                  </p>
                </div>
              </div>
              <div class="service-item">
                <div class="service-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2L15.09 8.26L22 9L15.09 9.74L12 16L8.91 9.74L2 9L8.91 8.26L12 2Z"
                      fill="currentColor"
                    />
                    <path d="M7 14L8.5 15.5L10 14L8.5 12.5L7 14Z" fill="currentColor" />
                    <path d="M14 14L15.5 15.5L17 14L15.5 12.5L14 14Z" fill="currentColor" />
                  </svg>
                </div>
                <div class="service-details">
                  <h3>Premium Materials</h3>
                  <p>
                    Only the finest fabrics and hardware, sourced from world-renowned suppliers.
                  </p>
                </div>
              </div>
              <div class="service-item">
                <div class="service-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
                      fill="currentColor"
                    />
                    <path
                      d="M3 21L6 18L9 21L12 18L15 21L18 18L21 21"
                      stroke="currentColor"
                      stroke-width="1.5"
                      fill="none"
                    />
                    <path
                      d="M3 3L6 6L9 3L12 6L15 3L18 6L21 3"
                      stroke="currentColor"
                      stroke-width="1.5"
                      fill="none"
                    />
                  </svg>
                </div>
                <div class="service-details">
                  <h3>Expert Installation</h3>
                  <p>
                    Professional installation by our skilled craftsmen with attention to every
                    detail.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="services-visual">
            <div class="ornate-frame">
              <div class="image-placeholder">Service Showcase</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Consultation CTA -->
    <section class="consultation-cta">
      <div class="container">
        <div class="cta-content">
          <h2>Begin Your Transformation</h2>
          <p>
            Experience the art of custom drapery design. Call for your private consultation today.
          </p>
          <button class="primary-btn">Call For Consultation 408-981-1874</button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="elegant-footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <img src="../assets/TDL_logo.png" alt="The Drapery Lady" class="footer-logo" />
            <h3>The Drapery Lady</h3>
            <p class="tagline">Artistry in Fabric</p>
            <!-- <p class="description">
              Creating timeless elegance through exceptional drapery design and craftsmanship.
            </p> -->
          </div>
          <div class="footer-links">
            <div class="link-group">
              <h4>Services</h4>
              <a href="#about">About Christine</a>
              <a href="#products">Custom Drapery</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#testimonials">Testimonials</a>
            </div>
            <div class="link-group">
              <h4>Products</h4>
              <a href="#">Silk Panels</a>
              <a href="#">Linen Drapes</a>
              <a href="#">Velvet Panels</a>
              <a href="#">Roman Shades</a>
            </div>
            <div class="link-group">
              <h4>Contact</h4>
              <a href="tel:+14089811874">(408) 981-1874</a>
              <a href="mailto:christine@thedraperylady.com">christine@thedraperylady.com</a>
              <a href="#">Schedule Consultation</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2025 The Drapery Lady. All rights reserved. | Artistry in Fabric</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const scrollToPortfolio = () => {
  const portfolioSection = document.getElementById('portfolio')
  if (portfolioSection) {
    portfolioSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}

onMounted(() => {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]')

  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const targetId = link.getAttribute('href').substring(1)
      const targetSection = document.getElementById(targetId)

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })

        // Update active nav link
        navLinks.forEach((l) => l.classList.remove('active'))
        link.classList.add('active')
      }
    })
  })

  // Update active nav link on scroll
  const sections = document.querySelectorAll('section[id]')

  const observerOptions = {
    threshold: 0.3,
    rootMargin: '-100px 0px -100px 0px',
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id')
        navLinks.forEach((link) => {
          link.classList.remove('active')
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active')
          }
        })
      }
    })
  }, observerOptions)

  sections.forEach((section) => {
    observer.observe(section)
  })
})
</script>

<style scoped>
@import '../assets/elegant-home.css';
</style>
