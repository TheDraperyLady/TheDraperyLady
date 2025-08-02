// Common features that most products share
const commonFeatures = {
  customDesign: {
    title: 'Custom Design',
    description: 'Personalized consultation to create the perfect design for your space',
    icon: ['fas', 'palette'],
  },
  expertCraftsmanship: {
    title: 'Expert Craftsmanship',
    description: 'Meticulously crafted by experienced artisans',
    icon: ['fas', 'screwdriver-wrench'],
  },
  professionalInstallation: {
    title: 'Professional Installation',
    description: 'Precise installation by our trained professionals',
    icon: ['fas', 'wrench'],
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
        icon: ['fas', 'swatchbook'],
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
        icon: ['fas', 'shield'],
      },
      commonFeatures.customDesign,
      {
        title: 'Light Control',
        description: 'Adjustable louvers for perfect light management',
        icon: ['fas', 'lightbulb'],
      },
      {
        title: 'Energy Efficient',
        description: 'Excellent insulation properties for energy savings',
        icon: ['fas', 'leaf'],
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
        icon: ['fas', 'swatchbook'],
      },
      {
        title: 'Light Control',
        description: 'Precise adjustment for optimal lighting conditions',
        icon: ['fas', 'lightbulb'],
      },
      commonFeatures.professionalInstallation,
      {
        title: 'Smart Home Ready',
        description: 'Optional motorization with smart home integration',
        icon: ['fas', 'gears'],
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
        icon: ['fas', 'sun'],
      },
      {
        title: 'Energy Saving',
        description: 'Reduce cooling costs by up to 30%',
        icon: ['fas', 'leaf'],
      },
      {
        title: 'View Preservation',
        description: 'Maintain your view while reducing glare',
        icon: ['fas', 'eye'],
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
        icon: ['fas', 'temperature-low'],
      },
      {
        title: 'Style Options',
        description: 'Vast selection of patterns and materials',
        icon: ['fas', 'wand-magic-sparkles'],
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
}
