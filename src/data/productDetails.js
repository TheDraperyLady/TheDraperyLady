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
      'A wide variety of custom draperies are available - Pinch pleated draperies,  rod pocket draperies and ripplefold draperies to name a few.',
    mainImage: new URL('@assets/draperies/drapery-11.jpg', import.meta.url).href,
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
      {
        src: new URL('@assets/draperies/drapery-2.jpg', import.meta.url).href,
        alt: 'Arched Draperies in Bathroom',
      },
      {
        src: new URL('@assets/draperies/drapery-3.jpg', import.meta.url).href,
        alt: 'Bay Window Cornice Drapes and Shutters',
      },
      {
        src: new URL('@assets/draperies/drapery-4.jpg', import.meta.url).href,
        alt: 'Classic Home Drapery',
      },
      {
        src: new URL('@assets/draperies/drapery-5.jpg', import.meta.url).href,
        alt: 'Long Ripplefold Draperies',
      },
      {
        src: new URL('@assets/draperies/drapery-6.jpg', import.meta.url).href,
        alt: 'Custom Drapery Installation',
      },
      {
        src: new URL('@assets/draperies/drapery-7.jpg', import.meta.url).href,
        alt: 'Elegant Panel Draperies',
      },
      {
        src: new URL('@assets/draperies/drapery-8.jpg', import.meta.url).href,
        alt: 'Ripplefold Patterned Sheers',
      },
      {
        src: new URL('@assets/draperies/drapery-9.jpg', import.meta.url).href,
        alt: 'Ripplefold Sheer Draperies',
      },
      {
        src: new URL('@assets/draperies/drapery-10.jpg', import.meta.url).href,
        alt: 'Sheer Side Panels on Bay Window',
      },
      {
        src: new URL('@assets/draperies/drapery-1.jpg', import.meta.url).href,
        alt: 'Angled Draperies on Wrought Iron',
      },
      {
        src: new URL('@assets/draperies/drapery-12.jpg', import.meta.url).href,
        alt: 'Periwinkle Print Draperies',
      },
      {
        src: new URL('@assets/draperies/drapery-13.jpg', import.meta.url).href,
        alt: 'Cornice and Side Panels',
      },
      {
        src: new URL('@assets/draperies/drapery-14.jpg', import.meta.url).href,
        alt: 'Custom Window Treatment Design',
      },
      {
        src: new URL('@assets/draperies/drapery-15.jpg', import.meta.url).href,
        alt: 'French Returns Sliding Glass Door',
      },
      {
        src: new URL('@assets/draperies/drapery-16.jpg', import.meta.url).href,
        alt: 'Two Fold Banded Over Draperies',
      },
    ],
  },
  shutters: {
    title: 'Premium Shutters',
    subtitle: 'Timeless Window Solutions',
    description:
      'Add a touch of timeless elegance to your home with our premium shutters. Crafted from the finest materials, our shutters provide both beauty and functionality.',
    mainImage: new URL('@assets/shutters/shutter-1.jpg', import.meta.url).href,
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
      {
        src: new URL('@assets/shutters/shutter-1.jpg', import.meta.url).href,
        alt: 'Bay Window Shutters',
      },
      {
        src: new URL('@assets/shutters/shutter-2.jpg', import.meta.url).href,
        alt: 'Round Window Shutters',
      },
      {
        src: new URL('@assets/shutters/shutter-3.jpg', import.meta.url).href,
        alt: 'Bypass Shutters on Patio Door',
      },
      {
        src: new URL('@assets/shutters/shutter-4.jpg', import.meta.url).href,
        alt: 'Front Window Shutters',
      },
      {
        src: new URL('@assets/shutters/shutter-5.jpg', import.meta.url).href,
        alt: 'Bay Window Cornice with Shutters',
      },
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
  valances: {
    title: 'Custom Valances',
    subtitle: 'Elegant Window Top Treatments',
    description:
      'Add a finishing touch to your windows with our custom valances. From classic swags to modern straight valances, our designs perfectly frame your windows while adding architectural interest.',
    mainImage: new URL('@assets/valances/valance-1.jpg', import.meta.url).href,
    features: [
      commonFeatures.customDesign,
      {
        title: 'Versatile Styles',
        description: 'Wide range of valance styles to match any decor theme',
        icon: 'wand-magic-sparkles',
      },
      commonFeatures.expertCraftsmanship,
      {
        title: 'Perfect Proportions',
        description: 'Custom sized to achieve ideal visual balance for your windows',
        icon: 'ruler',
      },
    ],
    options: [
      {
        category: 'Valance Styles',
        items: ['Box Pleated', 'Swag and Cascade', 'Straight', 'Balloon', 'Scalloped'],
      },
      {
        category: 'Fabric Options',
        items: ['Silk', 'Linen', 'Cotton', 'Velvet', 'Designer Prints'],
      },
      {
        category: 'Mounting Options',
        items: ['Board Mounted', 'Rod Pocket', 'Decorative Hardware', 'Hidden Mounts'],
      },
    ],
    gallery: [
      {
        src: new URL('@assets/valances/valance-1.jpg', import.meta.url).href,
        alt: 'Arched Continental Valance',
      },
      {
        src: new URL('@assets/valances/valance-2.jpg', import.meta.url).href,
        alt: 'Arched Continental with Honeycomb Shade',
      },
      {
        src: new URL('@assets/valances/valance-3.jpg', import.meta.url).href,
        alt: 'Balloon Valances',
      },
      {
        src: new URL('@assets/valances/valance-4.jpg', import.meta.url).href,
        alt: 'Box Pleated Valance on Bay Window',
      },
      {
        src: new URL('@assets/valances/valance-5.jpg', import.meta.url).href,
        alt: 'Contemporary Kitchen Valance',
      },
      {
        src: new URL('@assets/valances/valance-6.jpg', import.meta.url).href,
        alt: 'Cornice on Small Window',
      },
      {
        src: new URL('@assets/valances/valance-7.jpg', import.meta.url).href,
        alt: 'Cornice over Sliding Glass Door',
      },
      {
        src: new URL('@assets/valances/valance-8.jpg', import.meta.url).href,
        alt: 'Dining Room Silk Swags',
      },
      {
        src: new URL('@assets/valances/valance-9.jpg', import.meta.url).href,
        alt: 'Hexagon Valances',
      },
      {
        src: new URL('@assets/valances/valance-10.jpg', import.meta.url).href,
        alt: 'Custom Valance Design',
      },
      {
        src: new URL('@assets/valances/valance-11.jpg', import.meta.url).href,
        alt: 'Elegant Window Treatment',
      },
      {
        src: new URL('@assets/valances/valance-12.jpg', import.meta.url).href,
        alt: 'Kitchen Cornice',
      },
      {
        src: new URL('@assets/valances/valance-13.jpg', import.meta.url).href,
        alt: 'Living Room Cornice with Side Panels and Silhouette',
      },
      {
        src: new URL('@assets/valances/valance-14.jpg', import.meta.url).href,
        alt: 'Classic Valance Design',
      },
    ],
  },

  accessories: {
    title: 'Accessories & Motorization',
    subtitle: 'Smart Solutions & Elegant Finishes',
    description:
      'Enhance your window treatments with our premium selection of hardware and smart motorization solutions. From decorative rods to automated controls, we offer everything to complete your perfect window design.',
    mainImage: new URL('@assets/accessories/accessory-1.jpg', import.meta.url).href,
    features: [
      {
        title: 'Premium Hardware',
        description: 'High-quality materials and finishes for lasting beauty',
        icon: 'gem',
      },
      {
        title: 'Smart Integration',
        description: 'Advanced motorization with smart home compatibility',
        icon: 'house-signal',
      },
      {
        title: 'Custom Finishes',
        description: 'Various finishes to complement your decor',
        icon: 'paint-brush',
      },
      {
        title: 'Convenience & Safety',
        description: 'Perfect for hard-to-reach windows and enhanced safety',
        icon: 'shield-heart',
      },
    ],
    options: [
      {
        category: 'Hardware Types',
        items: ['Decorative Rods', 'Finials', 'Brackets', 'Holdbacks', 'Motorized Tracks'],
      },
      {
        category: 'Smart Features',
        items: [
          'Smartphone Control',
          'Voice Commands',
          'Scheduled Operation',
          'Remote Control',
          'Scene Programming',
        ],
      },
      {
        category: 'Finishes & Styles',
        items: ['Antique Brass', 'Brushed Nickel', 'Oil-Rubbed Bronze', 'Matte Black', 'Chrome'],
      },
      {
        category: 'Smart Systems',
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
      {
        src: new URL('@assets/accessories/accessory-1.jpg', import.meta.url).href,
        alt: 'Bay Window Accessories',
      },
      {
        src: new URL('@assets/accessories/accessory-2.jpg', import.meta.url).href,
        alt: 'Bay Window Cornice and Accessories',
      },
      {
        src: new URL('@assets/accessories/accessory-3.jpg', import.meta.url).href,
        alt: 'Custom Quilted Bedspread',
      },
      {
        src: new URL('@assets/accessories/accessory-4.jpg', import.meta.url).href,
        alt: 'Window Seat Cushions',
      },
    ],
  },
}
