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
    lede: 'Timeless Elegance, Tailored to Your Vision',
    mainImage: new URL('@assets/draperies/drapery-11.jpg', import.meta.url).href,
    homePageImage: new URL('@assets/service-4.webp', import.meta.url).href,
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
        title: 'Arched Draperies',
        description: 'Elegant bathroom window treatment',
      },
      {
        src: new URL('@assets/draperies/drapery-3.jpg', import.meta.url).href,
        alt: 'Bay Window Cornice Drapes and Shutters',
        title: 'Bay Window Treatment',
        description: 'Combined draperies and shutters',
      },
      {
        src: new URL('@assets/draperies/drapery-4.jpg', import.meta.url).href,
        alt: 'Classic Home Drapery',
        title: 'Classic Drapery',
        description: 'Timeless elegance for any home',
      },
      {
        src: new URL('@assets/draperies/drapery-5.jpg', import.meta.url).href,
        alt: 'Long Ripplefold Draperies',
        title: 'Ripplefold Draperies',
        description: 'Smooth, modern drapery style',
      },
      {
        src: new URL('@assets/draperies/drapery-6.jpg', import.meta.url).href,
        alt: 'Custom Drapery Installation',
        title: 'Custom Installation',
        description: 'Professional drapery installation',
      },
      {
        src: new URL('@assets/draperies/drapery-7.jpg', import.meta.url).href,
        alt: 'Elegant Panel Draperies',
        title: 'Panel Draperies',
        description: 'Sophisticated panel design',
      },
      {
        src: new URL('@assets/draperies/drapery-8.jpg', import.meta.url).href,
        alt: 'Ripplefold Patterned Sheers',
        title: 'Patterned Sheers',
        description: 'Beautiful patterned sheer fabric',
      },
      {
        src: new URL('@assets/draperies/drapery-9.jpg', import.meta.url).href,
        alt: 'Ripplefold Sheer Draperies',
        title: 'Sheer Draperies',
        description: 'Light and airy sheer treatment',
      },
      {
        src: new URL('@assets/draperies/drapery-10.jpg', import.meta.url).href,
        alt: 'Sheer Side Panels on Bay Window',
        title: 'Sheer Side Panels',
        description: 'Elegant bay window treatment',
      },
      {
        src: new URL('@assets/draperies/drapery-1.jpg', import.meta.url).href,
        alt: 'Angled Draperies on Wrought Iron',
        title: 'Angled Draperies',
        description: 'Custom angled installation',
      },
      {
        src: new URL('@assets/draperies/drapery-12.jpg', import.meta.url).href,
        alt: 'Periwinkle Print Draperies',
        title: 'Periwinkle Print',
        description: 'Beautiful printed fabric design',
      },
      {
        src: new URL('@assets/draperies/drapery-13.jpg', import.meta.url).href,
        alt: 'Cornice and Side Panels',
        title: 'Cornice Design',
        description: 'Elegant cornice with panels',
      },
      {
        src: new URL('@assets/draperies/drapery-14.jpg', import.meta.url).href,
        alt: 'Custom Window Treatment Design',
        title: 'Custom Design',
        description: 'Personalized window treatment',
      },
      {
        src: new URL('@assets/draperies/drapery-15.jpg', import.meta.url).href,
        alt: 'French Returns Sliding Glass Door',
        title: 'French Returns',
        description: 'Sliding glass door treatment',
      },
      {
        src: new URL('@assets/draperies/drapery-16.jpg', import.meta.url).href,
        alt: 'Two Fold Banded Over Draperies',
        title: 'Banded Draperies',
        description: 'Two-fold banded design',
      },
    ],
  },
  shutters: {
    title: 'Plantation Shutters',
    subtitle: 'Timeless Window Solutions',
    description:
      'Add a touch of timeless elegance to your home with our premium shutters. Crafted from the finest materials, our shutters provide both beauty and functionality.',
    lede: 'Classic Style Meets Modern Sophistication',
    mainImage: new URL('@assets/shutters/shutter-1.jpg', import.meta.url).href,
    homePageImage: new URL('@assets/service-1.webp', import.meta.url).href,
    options: [
      {
        category: 'Materials',
        items: ['Wood', 'Composite', 'Vinyl'],
      },
      {
        category: 'Styles',
        items: ['Plantation Shutters', 'Traditional Shutters', 'Cafe Shutters', 'Specialty Shapes'],
      },
      {
        category: 'Colors',
        items: ['Paint', 'Stain', 'Osmo'],
      },
    ],
    gallery: [
      {
        src: new URL('@assets/shutters/shutter-1.jpg', import.meta.url).href,
        alt: 'Bay Window Shutters',
        title: 'Bay Window Shutters',
        description: 'Classic plantation shutters',
      },
      {
        src: new URL('@assets/shutters/shutter-2.jpg', import.meta.url).href,
        alt: 'Round Window Shutters',
        title: 'Round Window Shutters',
        description: 'Custom shaped shutters',
      },
      {
        src: new URL('@assets/shutters/shutter-3.jpg', import.meta.url).href,
        alt: 'Bypass Shutters on Patio Door',
        title: 'Bypass Shutters',
        description: 'Patio door installation',
      },
      {
        src: new URL('@assets/shutters/shutter-4.jpg', import.meta.url).href,
        alt: 'Front Window Shutters',
        title: 'Front Window Shutters',
        description: 'Exterior window treatment',
      },
      {
        src: new URL('@assets/shutters/shutter-5.jpg', import.meta.url).href,
        alt: 'Bay Window Cornice with Shutters',
        title: 'Cornice with Shutters',
        description: 'Combined treatment design',
      },
    ],
  },
  blinds: {
    title: 'Custom Blinds',
    subtitle: 'Modern Light Control Solutions',
    description:
      'Experience superior light control with our designer blinds collection. From classic wood blinds to modern automated solutions, find the perfect match for your windows.',
    lede: 'Precision Engineering for Perfect Light Control',
    mainImage: new URL('@assets/service-2.webp', import.meta.url).href,
    homePageImage: new URL('@assets/service-2.webp', import.meta.url).href,
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
      {
        src: 'https://picsum.photos/seed/blinds1/600/400',
        alt: 'Wood Blinds Installation',
        title: 'Wood Blinds',
        description: 'Classic wood blind installation',
      },
      {
        src: 'https://picsum.photos/seed/blinds2/600/400',
        alt: 'Motorized Blinds',
        title: 'Motorized Blinds',
        description: 'Smart home integration',
      },
      {
        src: 'https://picsum.photos/seed/blinds3/600/400',
        alt: 'Modern Vertical Blinds',
        title: 'Vertical Blinds',
        description: 'Modern vertical design',
      },
    ],
  },

  shades: {
    title: 'Custom Shades',
    subtitle: 'Sophisticated Window Fashion',
    description:
      'Discover our collection of luxury shades, combining style with functionality. From classic roman shades to modern cellular designs, find your perfect window covering.',
    lede: 'Effortless Elegance for Every Window',
    mainImage: new URL('@assets/service-3.webp', import.meta.url).href,
    homePageImage: new URL('@assets/service-3.webp', import.meta.url).href,
    features: [
      {
        title: 'Custom Design',
        description:
          'There are a variety of shades and sheer shadings available to fit your design aesthetic and lifestyle.',
        icon: 'palette',
      },
      {
        title: 'Insulation',
        description:
          'Superior insulating properties that increase the energy efficiency of your double pane windows and help regulate the temperature in your building.',
        icon: 'temperature-low',
      },
      {
        title: 'Style Options',
        description:
          'Extensive selection of fabrics and styles, Top down / Bottom Up, Cordless, Continuous Cord Loop, Specialty Shapes & Application, Almost total room darkening solutions.',
        icon: 'wand-magic-sparkles',
      },
      commonFeatures.professionalInstallation,
    ],
    options: [
      {
        category: 'Shade Types',
        items: [
          'Roman Shades & Woven Shades',
          'Honeycomb Shades',
          'Roller Shades & Sun Screens',
          'Sheer Shadings',
        ],
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
      {
        src: 'https://picsum.photos/seed/shade1/600/400',
        alt: 'Roman Shade Installation',
        title: 'Roman Shades',
        description: 'Classic roman shade design',
      },
      {
        src: 'https://picsum.photos/seed/shade2/600/400',
        alt: 'Cellular Shade Detail',
        title: 'Cellular Shades',
        description: 'Energy-efficient cellular design',
      },
      {
        src: 'https://picsum.photos/seed/shade3/600/400',
        alt: 'Motorized Shade Operation',
        title: 'Motorized Shades',
        description: 'Automated shade operation',
      },
    ],
  },
  valances: {
    title: 'Custom Valances',
    subtitle: 'Elegant Window Top Treatments',
    description:
      'Add a finishing touch to your windows with our custom valances. From classic swags to modern straight valances, our designs perfectly frame your windows while adding architectural interest.',
    lede: 'Elegant Window Top Treatments',
    mainImage: new URL('@assets/valances/valance-1.jpg', import.meta.url).href,
    homePageImage: new URL('@assets/service-4.webp', import.meta.url).href,
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
        title: 'Arched Continental Valance',
        description: 'Elegant arched design',
      },
      {
        src: new URL('@assets/valances/valance-2.jpg', import.meta.url).href,
        alt: 'Arched Continental with Honeycomb Shade',
        title: 'Combined Treatment',
        description: 'Valance with honeycomb shade',
      },
      {
        src: new URL('@assets/valances/valance-3.jpg', import.meta.url).href,
        alt: 'Balloon Valances',
        title: 'Balloon Valances',
        description: 'Soft, billowing design',
      },
      {
        src: new URL('@assets/valances/valance-4.jpg', import.meta.url).href,
        alt: 'Box Pleated Valance on Bay Window',
        title: 'Box Pleated Valance',
        description: 'Structured pleated design',
      },
      {
        src: new URL('@assets/valances/valance-5.jpg', import.meta.url).href,
        alt: 'Contemporary Kitchen Valance',
        title: 'Kitchen Valance',
        description: 'Modern kitchen treatment',
      },
      {
        src: new URL('@assets/valances/valance-6.jpg', import.meta.url).href,
        alt: 'Cornice on Small Window',
        title: 'Small Window Cornice',
        description: 'Perfect for petite windows',
      },
      {
        src: new URL('@assets/valances/valance-7.jpg', import.meta.url).href,
        alt: 'Cornice over Sliding Glass Door',
        title: 'Sliding Door Cornice',
        description: 'Elegant door treatment',
      },
      {
        src: new URL('@assets/valances/valance-8.jpg', import.meta.url).href,
        alt: 'Dining Room Silk Swags',
        title: 'Silk Swags',
        description: 'Luxurious silk treatment',
      },
      {
        src: new URL('@assets/valances/valance-9.jpg', import.meta.url).href,
        alt: 'Hexagon Valances',
        title: 'Hexagon Valances',
        description: 'Unique geometric design',
      },
      {
        src: new URL('@assets/valances/valance-10.jpg', import.meta.url).href,
        alt: 'Custom Valance Design',
        title: 'Custom Design',
        description: 'Personalized valance creation',
      },
      {
        src: new URL('@assets/valances/valance-11.jpg', import.meta.url).href,
        alt: 'Elegant Window Treatment',
        title: 'Elegant Treatment',
        description: 'Sophisticated window styling',
      },
      {
        src: new URL('@assets/valances/valance-12.jpg', import.meta.url).href,
        alt: 'Kitchen Cornice',
        title: 'Kitchen Cornice',
        description: 'Functional kitchen styling',
      },
      {
        src: new URL('@assets/valances/valance-13.jpg', import.meta.url).href,
        alt: 'Living Room Cornice with Side Panels and Silhouette',
        title: 'Living Room Treatment',
        description: 'Complete living room design',
      },
      {
        src: new URL('@assets/valances/valance-14.jpg', import.meta.url).href,
        alt: 'Classic Valance Design',
        title: 'Classic Design',
        description: 'Timeless valance style',
      },
    ],
  },

  accessories: {
    title: 'Accessories & Motorization',
    subtitle: 'Smart Solutions & Elegant Finishes',
    description:
      'Enhance your window treatments with our premium selection of hardware and smart motorization solutions. From decorative rods to automated controls, we offer everything to complete your perfect window design.',
    lede: 'Smart Solutions & Elegant Finishes',
    mainImage: new URL('@assets/accessories/accessory-1.jpg', import.meta.url).href,
    homePageImage: new URL('@assets/service-1.webp', import.meta.url).href,
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
        title: 'Bay Window Accessories',
        description: 'Complete accessory package',
      },
      {
        src: new URL('@assets/accessories/accessory-2.jpg', import.meta.url).href,
        alt: 'Bay Window Cornice and Accessories',
        title: 'Cornice and Accessories',
        description: 'Coordinated design elements',
      },
      {
        src: new URL('@assets/accessories/accessory-3.jpg', import.meta.url).href,
        alt: 'Custom Quilted Bedspread',
        title: 'Custom Bedspread',
        description: 'Luxurious quilted design',
      },
      {
        src: new URL('@assets/accessories/accessory-4.jpg', import.meta.url).href,
        alt: 'Window Seat Cushions',
        title: 'Window Seat Cushions',
        description: 'Comfortable seating solution',
      },
      {
        src: new URL('@assets/accessories/accessory-5.jpg', import.meta.url).href,
        alt: 'Premium Hardware',
        title: 'Premium Hardware',
        description: 'High-quality accessories',
      },
      {
        src: new URL('@assets/accessories/accessory-6.jpg', import.meta.url).href,
        alt: 'Decorative Elements',
        title: 'Decorative Elements',
        description: 'Elegant finishing touches',
      },
    ],
  },
}
