# The Drapery Lady - Vue3 Website

A Vue3 website for The Drapery Lady, featuring three distinct home page designs to showcase different aesthetic approaches for custom drapery services.

## 🎨 Design Variations

This project includes three completely different home page designs, each with its own unique style and CSS file:

### 1. Warm & Inviting Design (`/`)

- **File**: `src/views/HomeView.vue` + `src/assets/warm-home.css`
- **Style**: Cozy, welcoming, and approachable
- **Colors**: Warm earth tones, cream, and brown
- **Typography**: Georgia serif font
- **Features**: Soft gradients, rounded corners, warm color palette
- **Target Audience**: Traditional homeowners seeking comfort and warmth

### 2. Sleek & Modern Design (`/modern`)

- **File**: `src/views/ModernHomeView.vue` + `src/assets/modern-home.css`
- **Style**: Contemporary, minimalist, and sophisticated
- **Colors**: Black, white, and gray with clean accents
- **Typography**: Inter sans-serif font
- **Features**: Clean lines, geometric shapes, modern typography
- **Target Audience**: Modern homeowners with contemporary tastes

### 3. Fancy & Elegant Design (`/elegant`)

- **File**: `src/views/ElegantHomeView.vue` + `src/assets/elegant-home.css`
- **Style**: Luxurious, sophisticated, and premium
- **Colors**: Rich golds, deep browns, and cream
- **Typography**: Playfair Display serif font
- **Features**: Ornate patterns, elegant frames, premium styling
- **Target Audience**: High-end clients seeking luxury and refinement

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

## 🎯 Navigation

Use the design switcher in the top-right corner to navigate between the three different home page designs:

- **Warm & Inviting**: `/` (default)
- **Sleek & Modern**: `/modern`
- **Fancy & Elegant**: `/elegant`

## 📁 Project Structure

```
src/
├── views/
│   ├── HomeView.vue          # Warm & Inviting design
│   ├── ModernHomeView.vue    # Sleek & Modern design
│   └── ElegantHomeView.vue   # Fancy & Elegant design
├── assets/
│   ├── warm-home.css         # Warm design styles
│   ├── modern-home.css       # Modern design styles
│   └── elegant-home.css      # Elegant design styles
├── components/
│   └── DesignSwitcher.vue    # Navigation component
└── router/
    └── index.js              # Route configuration
```

## 🛠️ Customization

Each design is completely independent with its own CSS file, making it easy to:

- Modify colors and typography
- Adjust layouts and spacing
- Add new sections or components
- Customize animations and effects

## 📱 Responsive Design

All three designs are fully responsive and optimized for:

- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎨 Design Features

### Common Elements Across All Designs:

- Navigation menu
- Hero section with call-to-action
- Services showcase
- Contact/consultation section
- Footer with company information

### Unique Elements:

- **Warm Design**: Feature cards with icons, service previews
- **Modern Design**: Statistics section, process steps, clean cards
- **Elegant Design**: Collections showcase, testimonials, ornate patterns

## 🔧 Build for Production

```bash
npm run build
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

## 📝 License

This project is created for The Drapery Lady client. All rights reserved.

## 🤝 Support

For questions or support regarding the website designs, please contact the development team.
