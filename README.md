# The Drapery Lady - Professional Vue3 Website

A sophisticated Vue3 website for The Drapery Lady, showcasing Christine St. Clair's premium custom window treatment services. The site features an elegant design with comprehensive product galleries, client testimonials, and professional consultation booking.

## 🏡 About The Drapery Lady

Christine St. Clair, "The Drapery Lady," brings over 25 years of experience in custom draperies. Having worked internationally and with Silicon Valley's finest homes, she established her business in 2009.

## 🎨 Website Features

### Current Design: Elegant & Luxurious
- **File**: `src/views/ElegantHomeView.vue` + `src/assets/elegant-home.css`
- **Style**: Sophisticated, premium, and luxurious
- **Colors**: Rich golds, deep browns, and elegant creams
- **Typography**: Crimson Text serif font for elegance
- **Features**: Ornate patterns, client testimonials, comprehensive galleries
- **Target Audience**: Discerning clients seeking luxury and refinement

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd drapery-lady
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🧭 Site Navigation

The website includes the following main sections:

- **Home** (`/`) - Elegant homepage with hero section, about Christine, services, and testimonials
- **Products** (`/products`) - Comprehensive gallery of all window treatment categories
- **Product Details** (`/product/:type`) - Detailed pages for each product category with galleries
- **About** (`/about`) - Additional information about The Drapery Lady

- **Consultation** (`/consultation`) - Professional consultation booking form

## 📁 Project Structure

```
src/
├── views/
│   ├── ElegantHomeView.vue      # Main homepage with elegant design
│   ├── ProductsView.vue         # Product category overview
│   ├── ProductDetailView.vue    # Individual product galleries
│   ├── AboutView.vue            # About page

│   └── ConsultationView.vue     # Consultation booking form
├── components/
│   ├── ElegantNav.vue           # Main navigation component
│   ├── ElegantFooter.vue        # Site footer
│   ├── ServiceArea.vue          # Service area component
│   └── DesignSwitcher.vue       # Design switching utility
├── data/
│   └── productDetails.js        # Product information and galleries
├── assets/
│   ├── elegant-home.css         # Main stylesheet
│   ├── base.css                 # Base styles
│   ├── main.css                 # Global styles
│   ├── draperies/               # Drapery gallery images
│   ├── shutters/                # Shutter gallery images
│   ├── valances/                # Valance gallery images
│   └── accessories/             # Accessory gallery images
├── plugins/
│   └── fontawesome.js           # FontAwesome icon configuration
└── router/
    └── index.js                 # Vue Router configuration
```

## 🛠️ Key Technologies & Features

### Frontend Technologies
- **Vue 3** - Modern reactive framework with Composition API
- **Vue Router 4** - Client-side routing with smooth scrolling
- **FontAwesome** - Professional icon library
- **Vite** - Fast build tool and development server

### Design Features
- **Responsive Design** - Optimized for all device sizes
- **Professional Typography** - Crimson Text for elegant readability
- **Image Optimization** - WebP format for fast loading
- **Smooth Animations** - CSS transitions and scroll behaviors
- **SEO Friendly** - Proper meta tags and semantic HTML

## 📱 Responsive Design

The website is fully responsive and optimized for all devices:

- **Desktop** (1200px+) - Full-featured layout with multi-column grids
- **Tablet** (768px - 1199px) - Adapted layouts with touch-friendly navigation
- **Mobile** (320px - 767px) - Single-column layout with optimized images

## 🎯 Content Highlights

### Homepage Sections
- **Hero Section** - Elegant introduction with call-to-action buttons
- **About Christine** - Professional background and expertise
- **Services Overview** - Four main service categories with images
- **Product Collections** - Featured drapery styles and installations
- **Client Testimonials** - Real customer reviews with 5-star ratings
- **FAQ Section** - Common questions about consultations and services

### Product Categories
- **Draperies** - 16 gallery images showcasing various styles and installations
- **Shutters** - 5 images of premium plantation shutters and specialty shapes
- **Valances** - 14 images of custom valances and cornices
- **Accessories** - 4 images of hardware and motorization solutions

### Professional Features
- **Consultation Booking** - Professional contact form for appointments
- **Comprehensive Galleries** - High-quality images of completed projects

- **Service Area Information** - Coverage details for potential clients

## 🔧 Available Scripts

### Development
```bash
npm run dev          # Start development server
npm run preview      # Preview production build locally
```

### Code Quality
```bash
npm run lint         # Run ESLint with auto-fix
npm run format       # Format code with Prettier
```

### Production & Deployment
```bash
npm run build        # Build for production
npm run deploy       # Build and deploy to GitHub Pages
```

## 🚀 Deployment

### Automatic Deployment (GitHub Actions)

This project is configured for automatic deployment to GitHub Pages. When you push changes to the `main` branch, the site will automatically build and deploy.

**Prerequisites:**
1. Enable GitHub Pages in your repository settings
2. Set the source to "Deploy from a branch"
3. Select the `gh-pages` branch as the source

**Manual Deployment:**
```bash
npm run deploy
```

This command will:
1. Build the project for production
2. Deploy the built files to the `gh-pages` branch
3. Make the site available at `https://yourusername.github.io/TheDraperyLady/`

### Custom Domain

The deployment is configured to use the custom domain `draperylady.net`. Make sure to:
1. Configure your domain's DNS settings to point to GitHub Pages
2. Add a `CNAME` file in the `public` folder with your domain name

## 🏗️ Technical Details

### Dependencies
- **Vue 3.5.17** - Latest stable Vue.js framework
- **Vue Router 4.5.1** - Official router for Vue.js
- **FontAwesome 7.0.0** - Complete icon library
- **Vite 7.0.0** - Next generation frontend tooling

### Development Tools
- **ESLint** - Code linting with Vue and Prettier configurations
- **Prettier** - Code formatting
- **Vue DevTools** - Enhanced debugging experience
- **GitHub Pages** - Automated deployment workflow

## 📞 Contact Information

**The Drapery Lady - Christine St. Clair**
- Serving Silicon Valley and surrounding areas
- Specializing in custom window treatments since 2009
- Professional consultation and installation services

## 📝 License

This project is created for The Drapery Lady business. All rights reserved.

---

*Built with ❤️ using Vue.js - Showcasing 25+ years of window treatment expertise*
