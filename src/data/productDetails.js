// Common features that most products share
const commonFeatures = {
  customDesign: {
    title: 'Custom Design',
    description: 'Personalized consultation to create the perfect design for your space',
    icon: 'palette',
  },
  expertCraftsmanship: {
    title: 'Expert Craftsmanship',
    description: 'Meticulously crafted by experienced artisans',
    icon: 'screwdriver-wrench',
  },
  professionalInstallation: {
    title: 'Professional Installation',
    description: 'Precise installation by our trained professionals',
    icon: 'wrench',
  },
}

export const productDetails = {
  draperies: {
    title: 'Custom Draperies',
    subtitle: 'Elegant Custom Window Treatments',
    description:
      'Transform your space with our luxurious custom draperies. Each piece is meticulously crafted to your exact specifications, using the finest fabrics and materials available.',
    mainImage: 'https://picsum.photos/seed/draperies/800/600',
    features: [
      commonFeatures.customDesign,
      {
        title: 'Premium Fabrics',
        description: 'Wide selection of high-quality fabrics from renowned manufacturers',
        icon: 'swatchbook',
      },
      commonFeatures.expertCraftsmanship,
      commonFeatures.professionalInstallation,
    ],
    options: [
      {
        category: 'Fabric Types',
        items: ['Silk', 'Linen', 'Velvet', 'Cotton Blend', 'Polyester Blend'],
      },
      {
        category: 'Styles',
        items: ['Pinch Pleat', 'Ripple Fold', 'Goblet Pleat', 'Rod Pocket', 'Grommet'],
      },
      {
        category: 'Hardware Options',
        items: ['Decorative Rods', 'Traverse Rods', 'Motorized Tracks', 'Tiebacks', 'Holdbacks'],
      },
    ],
    gallery: [
      { src: 'https://picsum.photos/seed/drapery1/600/400', alt: 'Luxury Drapery Installation' },
      { src: 'https://picsum.photos/seed/drapery2/600/400', alt: 'Custom Drapery Detail' },
      { src: 'https://picsum.photos/seed/drapery3/600/400', alt: 'Drapery Living Room' },
    ],
  },
  shutters: {
    title: 'Premium Shutters',
    subtitle: 'Timeless Window Solutions',
    description:
      'Add a touch of timeless elegance to your home with our premium shutters. Crafted from the finest materials, our shutters provide both beauty and functionality.',
    mainImage: 'https://picsum.photos/seed/shutters/800/600',
    features: [
      {
        title: 'Superior Materials',
        description: 'Choose from premium wood, composite, or vinyl materials',
        icon: 'shield',
      },
      commonFeatures.customDesign,
      {
        title: 'Light Control',
        description: 'Adjustable louvers for perfect light management',
        icon: 'lightbulb',
      },
      {
        title: 'Energy Efficient',
        description: 'Excellent insulation properties for energy savings',
        icon: 'leaf',
      },
    ],
    options: [
      {
        category: 'Materials',
        items: ['Hardwood', 'Composite', 'Vinyl', 'Premium Wood', 'Waterproof Options'],
      },
      {
        category: 'Styles',
        items: ['Full Height', 'Tier-on-Tier', 'Café Style', 'Special Shapes'],
      },
      {
        category: 'Colors',
        items: ['Custom Paint Colors', 'Wood Stains', 'White Finishes', 'Custom Color Match'],
      },
    ],
    gallery: [
      { src: 'https://picsum.photos/seed/shutter1/600/400', alt: 'Premium Shutter Installation' },
      { src: 'https://picsum.photos/seed/shutter2/600/400', alt: 'Custom Shutter Detail' },
      { src: 'https://picsum.photos/seed/shutter3/600/400', alt: 'Plantation Shutters' },
    ],
  },
  blinds: {
    title: 'Designer Blinds',
    subtitle: 'Modern Light Control Solutions',
    description:
      'Experience superior light control with our designer blinds collection. From classic wood blinds to modern automated solutions, find the perfect match for your windows.',
    mainImage: 'https://picsum.photos/seed/blinds/800/600',
    features: [
      {
        title: 'Versatile Design',
        description: 'Multiple styles and materials to match any décor',
        icon: 'swatchbook',
      },
      {
        title: 'Light Control',
        description: 'Precise adjustment for optimal lighting conditions',
        icon: 'lightbulb',
      },
      commonFeatures.professionalInstallation,
      {
        title: 'Smart Home Ready',
        description: 'Optional motorization with smart home integration',
        icon: 'gears',
      },
    ],
    options: [
      {
        category: 'Types',
        items: ['Wood Blinds', 'Faux Wood', 'Vertical Blinds', 'Mini Blinds', 'Smart Blinds'],
      },
      {
        category: 'Materials',
        items: ['Real Wood', 'Aluminum', 'PVC', 'Composite'],
      },
      {
        category: 'Features',
        items: ['Cordless Operation', 'Motorization', 'Room Darkening', 'Child Safety'],
      },
    ],
    gallery: [
      { src: 'https://picsum.photos/seed/blinds1/600/400', alt: 'Wood Blinds Installation' },
      { src: 'https://picsum.photos/seed/blinds2/600/400', alt: 'Motorized Blinds' },
      { src: 'https://picsum.photos/seed/blinds3/600/400', alt: 'Modern Vertical Blinds' },
    ],
  },
  screens: {
    title: 'Solar Screens',
    subtitle: 'Advanced Sun Protection',
    description:
      'Protect your home and reduce energy costs with our advanced solar screens. Enjoy the view while blocking harmful UV rays and reducing glare.',
    mainImage: 'https://picsum.photos/seed/screens/800/600',
    features: [
      {
        title: 'UV Protection',
        description: '99% UV ray blocking capability',
        icon: 'sun',
      },
      {
        title: 'Energy Saving',
        description: 'Reduce cooling costs by up to 30%',
        icon: 'leaf',
      },
      {
        title: 'View Preservation',
        description: 'Maintain your view while reducing glare',
        icon: 'eye',
      },
      commonFeatures.professionalInstallation,
    ],
    options: [
      {
        category: 'Screen Types',
        items: ['Solar Screens', 'Privacy Screens', 'Blackout Screens', 'Dual Screens'],
      },
      {
        category: 'Openness Factors',
        items: ['1%', '3%', '5%', '10%', 'Custom'],
      },
      {
        category: 'Colors',
        items: ['Charcoal', 'Gray', 'Bronze', 'Beige', 'Custom Colors'],
      },
    ],
    gallery: [
      { src: 'https://picsum.photos/seed/screen1/600/400', alt: 'Solar Screen Installation' },
      { src: 'https://picsum.photos/seed/screen2/600/400', alt: 'Privacy Screen Detail' },
      { src: 'https://picsum.photos/seed/screen3/600/400', alt: 'UV Protection Demonstration' },
    ],
  },
  shades: {
    title: 'Luxury Shades',
    subtitle: 'Sophisticated Window Fashion',
    description:
      'Discover our collection of luxury shades, combining style with functionality. From classic roman shades to modern cellular designs, find your perfect window covering.',
    mainImage: 'https://picsum.photos/seed/shades/800/600',
    features: [
      commonFeatures.customDesign,
      {
        title: 'Insulation',
        description: 'Superior thermal and acoustic insulation',
        icon: 'temperature-low',
      },
      {
        title: 'Style Options',
        description: 'Vast selection of patterns and materials',
        icon: 'wand-magic-sparkles',
      },
      commonFeatures.professionalInstallation,
    ],
    options: [
      {
        category: 'Shade Types',
        items: ['Roman Shades', 'Cellular Shades', 'Roller Shades', 'Woven Wood Shades'],
      },
      {
        category: 'Operating Systems',
        items: ['Cordless', 'Motorized', 'Smart Home', 'Traditional Cord'],
      },
      {
        category: 'Light Control',
        items: ['Sheer', 'Light Filtering', 'Room Darkening', 'Blackout'],
      },
    ],
    gallery: [
      { src: 'https://picsum.photos/seed/shade1/600/400', alt: 'Roman Shade Installation' },
      { src: 'https://picsum.photos/seed/shade2/600/400', alt: 'Cellular Shade Detail' },
      { src: 'https://picsum.photos/seed/shade3/600/400', alt: 'Motorized Shade Operation' },
    ],
  },
  motorization: {
    title: 'Smart Motorization',
    subtitle: 'Automated Window Treatment Solutions',
    description:
      'Upgrade your window treatments with our smart motorization solutions. Control your draperies and shades effortlessly using your smart device, perfect for those who want convenience, safety, and modern functionality in their San Jose home.',
    mainImage: 'https://picsum.photos/seed/motorization/800/600',
    features: [
      {
        title: 'Smart Device Control',
        description: 'Control your window treatments from your smartphone or tablet',
        icon: 'mobile-screen',
      },
      {
        title: 'Safety & Convenience',
        description: 'Perfect for hard-to-reach windows and elderly or mobility-impaired users',
        icon: 'shield-heart',
      },
      {
        title: 'Smart Home Integration',
        description: 'Compatible with major smart home systems',
        icon: 'house-signal',
      },
      commonFeatures.professionalInstallation,
    ],
    options: [
      {
        category: 'Compatible Products',
        items: ['Draperies', 'Shades', 'Blinds', 'Shutters', 'Solar Screens'],
      },
      {
        category: 'Control Options',
        items: [
          'Smartphone App',
          'Remote Control',
          'Voice Control',
          'Scheduled Operation',
          'Scene Programming',
        ],
      },
      {
        category: 'Smart Home Systems',
        items: [
          'Amazon Alexa',
          'Google Home',
          'Apple HomeKit',
          'Samsung SmartThings',
          'Custom Integration',
        ],
      },
    ],
    gallery: [
      { src: 'https://picsum.photos/seed/motor1/600/400', alt: 'Smart Home Integration' },
      { src: 'https://picsum.photos/seed/motor2/600/400', alt: 'Motorized Drapery System' },
      { src: 'https://picsum.photos/seed/motor3/600/400', alt: 'Mobile App Control' },
    ],
  },
}
