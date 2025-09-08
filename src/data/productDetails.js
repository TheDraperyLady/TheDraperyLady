// CDN Base URL - configurable for different environments
const BASE_URL = 'https://draperylady.tanuj.xyz'

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
    mainImage: `${BASE_URL}/draperies/drapery-11.jpg`,
    homePageImage: `${BASE_URL}/draperies/drapery-4.jpg`,
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
        items: ['Silk', 'Linens & Casements', 'Velvet', 'Prints', 'Jacquards & Damasks'],
      },
      {
        category: 'Styles',
        items: ['Pinch Pleat', 'Ripple Fold', 'Goblet Pleat', 'Rod Pocket', 'Grommet'],
      },
      {
        category: 'Hardware Options',
        items: [
          'Decorative Rods',
          'Traverse Rods',
          'Motorized Tracks',
          'Custom Wrought Iron',
          'Special Shapes - Arches, Bays & Bow Window Hardware',
        ],
      },
    ],
    gallery: [
      {
        src: `${BASE_URL}/draperies/drapery-2.jpg`,
        alt: 'Arched Draperies in Bathroom',
        title: 'Arched Draperies',
        description: 'Elegant bathroom window treatment',
      },
      {
        src: `${BASE_URL}/draperies/drapery-3.jpg`,
        alt: 'Bay Window Cornice Drapes and Shutters',
        title: 'Bay Window Treatment',
        description: 'Combined draperies and shutters',
      },
      {
        src: `${BASE_URL}/draperies/drapery-4.jpg`,
        alt: 'Classic Home Drapery',
        title: 'Classic Drapery',
        description: 'Timeless elegance for any home',
      },
      {
        src: `${BASE_URL}/draperies/drapery-5.jpg`,
        alt: 'Long Ripplefold Draperies',
        title: 'Ripplefold Draperies',
        description: 'Smooth, modern drapery style',
      },
      {
        src: `${BASE_URL}/draperies/drapery-6.jpg`,
        alt: 'Custom Drapery Installation',
        title: 'Custom Installation',
        description: 'Professional drapery installation',
      },
      {
        src: `${BASE_URL}/draperies/drapery-7.jpg`,
        alt: 'Elegant Panel Draperies',
        title: 'Panel Draperies',
        description: 'Sophisticated panel design',
      },
      {
        src: `${BASE_URL}/draperies/drapery-8.jpg`,
        alt: 'Ripplefold Patterned Sheers',
        title: 'Patterned Sheers',
        description: 'Beautiful patterned sheer fabric',
      },
      {
        src: `${BASE_URL}/draperies/drapery-9.jpg`,
        alt: 'Ripplefold Sheer Draperies',
        title: 'Sheer Draperies',
        description: 'Light and airy sheer treatment',
      },
      {
        src: `${BASE_URL}/draperies/drapery-10.jpg`,
        alt: 'Sheer Side Panels on Bay Window',
        title: 'Sheer Side Panels',
        description: 'Elegant bay window treatment',
      },
      {
        src: `${BASE_URL}/draperies/drapery-1.jpg`,
        alt: 'Angled Draperies on Wrought Iron',
        title: 'Angled Draperies',
        description: 'Custom angled installation',
      },
      {
        src: `${BASE_URL}/draperies/drapery-12.jpg`,
        alt: 'Periwinkle Print Draperies',
        title: 'Periwinkle Print',
        description: 'Beautiful printed fabric design',
      },
      {
        src: `${BASE_URL}/draperies/drapery-13.jpg`,
        alt: 'Cornice and Side Panels',
        title: 'Cornice Design',
        description: 'Elegant cornice with panels',
      },
      {
        src: `${BASE_URL}/draperies/drapery-14.jpg`,
        alt: 'Custom Window Treatment Design',
        title: 'Custom Design',
        description: 'Personalized window treatment',
      },
      {
        src: `${BASE_URL}/draperies/drapery-15.jpg`,
        alt: 'French Returns Sliding Glass Door',
        title: 'French Returns',
        description: 'Sliding glass door treatment',
      },
      {
        src: `${BASE_URL}/draperies/drapery-16.jpg`,
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
    mainImage: `${BASE_URL}/shutters/shutter-6.jpg`,
    homePageImage: `${BASE_URL}/shutters/shutter-6.jpg`,
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
        src: `${BASE_URL}/shutters/shutter-1.jpg`,
        alt: 'Bay Window Shutters',
        title: 'Bay Window Shutters',
        description: 'Classic plantation shutters',
      },
      {
        src: `${BASE_URL}/shutters/shutter-2.jpg`,
        alt: 'Round Window Shutters',
        title: 'Round Window Shutters',
        description: 'Custom shaped shutters',
      },
      {
        src: `${BASE_URL}/shutters/shutter-3.jpg`,
        alt: 'Bypass Shutters on Patio Door',
        title: 'Bypass Shutters',
        description: 'Patio door installation',
      },
      {
        src: `${BASE_URL}/shutters/shutter-4.jpg`,
        alt: 'Front Window Shutters',
        title: 'Front Window Shutters',
        description: 'Exterior window treatment',
      },
      {
        src: `${BASE_URL}/shutters/shutter-5.jpg`,
        alt: 'Bay Window Cornice with Shutters',
        title: 'Cornice with Shutters',
        description: 'Combined treatment design',
      },
      {
        src: `${BASE_URL}/shutters/shutter-6.jpg`,
        alt: 'Bedroom Plantation Shutters with Mountain View',
        title: 'Bedroom Shutters',
        description:
          'Elegant bedroom window treatment with scenic views featuring Norman Woodlore Composite Shutters',
      },
      {
        src: `${BASE_URL}/shutters/shutter-7.jpg`,
        alt: 'Dining Room Plantation Shutters',
        title: 'Dining Room Shutters',
        description:
          'Classic plantation shutters in dining area featuring Norman Woodlore Composite Shutters',
      },
      {
        src: `${BASE_URL}/shutters/shutter-8.jpg`,
        alt: 'Bathroom Plantation Shutters with Bathtub',
        title: 'Bathroom Shutters',
        description:
          'Luxurious bathroom with arched window shutters featuring Norman Woodlore Composite Shutters',
      },
      {
        src: `${BASE_URL}/shutters/shutter-9.jpg`,
        alt: 'Living Room Plantation Shutters',
        title: 'Living Room Shutters',
        description:
          'Modern living room with plantation shutters featuring Norman Woodlore Composite Shutters',
      },
      {
        src: `${BASE_URL}/shutters/shutter-10.jpg`,
        alt: 'Vaulted Ceiling Plantation Shutters',
        title: 'Vaulted Ceiling Shutters',
        description:
          'Custom triangular plantation shutters in vaulted ceiling room featuring Norman Woodlore Composite Shutters',
      },
    ],
  },
  blinds: {
    title: 'Custom Blinds',
    subtitle: 'Modern Light Control Solutions',
    description:
      'Experience superior light control with our designer blinds collection. From classic wood blinds to modern automated solutions, find the perfect match for your windows.',
    lede: 'Precision Engineering for Perfect Light Control',
    mainImage: `${BASE_URL}/blinds/blinds-2.jpg`,
    homePageImage: `${BASE_URL}/blinds/blinds-2.jpg`,
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
        src: `${BASE_URL}/blinds/blinds-2.jpg`,
        alt: 'Living Room with Norman Cordless Blinds',
        title: 'Living Room Cordless Blinds',
        description:
          'Elegant living room featuring Norman Cordless Blinds for enhanced safety and convenience',
      },
      {
        src: `${BASE_URL}/blinds/blinds-3.jpg`,
        alt: 'Bedroom with Norman Citylight Blinds',
        title: 'Citylight Blinds',
        description:
          'Modern kitchen featuring Norman Citylight Blinds for optimal privacy and light control',
      },
    ],
  },

  shades: {
    title: 'Custom Shades',
    subtitle: 'Sophisticated Window Fashion',
    description:
      'Discover our collection of luxury shades, combining style with functionality. From classic roman shades to modern cellular designs, find your perfect window covering.',
    lede: 'Effortless Elegance for Every Window',
    mainImage: `${BASE_URL}/shades/shades-1.jpg`,
    homePageImage: `${BASE_URL}/shades/shades-1.jpg`,
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
        items: ['Cordless', 'Motorized', 'Continuous Cord Loop', 'Smart Release'],
      },
      {
        category: 'Light Control',
        items: ['Sheer', 'Light Filtering', 'Room Darkening', 'Dim Out'],
      },
    ],
    gallery: [
      {
        src: `${BASE_URL}/shades/shades-1.jpg`,
        alt: 'Home Office with Norman PerfectSheer Shadings',
        title: 'Home Office Shadings',
        description: 'Modern home office featuring Norman PerfectSheer Shadings',
      },
      {
        src: `${BASE_URL}/shades/shades-2.jpg`,
        alt: 'Living Room with Norman PerfectSheer Shadings',
        title: 'Living Room Shadings',
        description: 'Bright living room with Norman PerfectSheer Shadings and indoor plants',
      },
      {
        src: `${BASE_URL}/shades/shades-3.jpg`,
        alt: 'Modern Living Room with Norman Roman Shades',
        title: 'Modern Living Room Roman Shades',
        description: 'Elegant living room featuring Norman Roman Shades with geometric pattern',
      },
      {
        src: `${BASE_URL}/shades/shades-4.jpg`,
        alt: 'Dining Room with Norman Roman Shades',
        title: 'Dining Room Roman Shades',
        description: 'Sophisticated dining area with Norman Roman Shades',
      },
      {
        src: `${BASE_URL}/shades/shades-5.jpg`,
        alt: 'Kitchen with Norman Roman Shades',
        title: 'Kitchen Roman Shades',
        description: 'Modern kitchen featuring Norman Roman Shades with grey finish',
      },
      {
        src: `${BASE_URL}/shades/shades-6.jpg`,
        alt: 'Living Room with Norman SmartDrape Sheer Shades',
        title: 'Living Room SmartDrape Shades',
        description:
          'Modern living space featuring Norman SmartDrape Sheer Shades with vertical design',
      },
      {
        src: `${BASE_URL}/shades/shades-7.jpg`,
        alt: 'Dining Room with Norman Honeycomb Shades',
        title: 'Dining Room Honeycomb Shades',
        description:
          'Bright dining room featuring Norman Honeycomb Shades with top-down/bottom-up operation',
      },
      {
        src: `${BASE_URL}/shades/shades-8.jpg`,
        alt: 'Bedroom with Norman Vertical Honeycomb Shades',
        title: 'Vertical Honeycomb Shades',
        description:
          'Neutral vertical honeycomb shades providing privacy and light control in bedroom',
      },
      {
        src: `${BASE_URL}/shades/shades-9.jpg`,
        alt: 'Window with Norman PerfectSheer Shadings',
        title: 'PerfectSheer Shadings',
        description:
          'Horizontal zebra shades with alternating opaque and sheer bands for versatile light control',
      },
      {
        src: `${BASE_URL}/shades/shades-10.jpg`,
        alt: 'Window with Norman SmartDrape Vertical Sheer Shadings',
        title: 'SmartDrape Vertical Sheer Shadings',
        description: 'Elegant vertical sheer shadings providing soft light diffusion and privacy',
      },
      {
        src: `${BASE_URL}/shades/shades-11.jpg`,
        alt: 'Window with Norman SmartDrape Vertical Sheer Shadings',
        title: 'SmartDrape Vertical Sheer Shadings',
        description: 'Modern vertical sheer shadings offering sophisticated light control',
      },
      {
        src: `${BASE_URL}/shades/shades-12.jpg`,
        alt: 'Living Room with Norman Roman Shades',
        title: 'Roman Shades',
        description:
          'Classic Roman shades with soft horizontal folds in traditional living room setting',
      },
      {
        src: `${BASE_URL}/shades/shades-13.jpg`,
        alt: 'Sunroom with Rust Colored Ceiling Shades',
        title: 'Sunroom Ceiling Shades',
        description:
          'Extensive system of rust-colored fabric shades covering a glass ceiling in a bright sunroom',
      },
      {
        src: `${BASE_URL}/shades/shades-14.jpg`,
        alt: 'Conference Room with Black Sunscreens',
        title: 'Conference Room Sunscreens',
        description:
          'Modern conference room with dark semi-transparent roller shades providing optimal light control and privacy',
      },
    ],
  },
  valances: {
    title: 'Custom Valances',
    subtitle: 'Elegant Window Top Treatments',
    description:
      'Add a finishing touch to your windows with our custom valances. From classic swags to modern straight valances, our designs perfectly frame your windows while adding architectural interest.',
    lede: 'Elegant Window Top Treatments',
    mainImage: `${BASE_URL}/valances/valance-1.jpg`,
    homePageImage: '',
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
        items: [
          'Cornices',
          'Inverted Box Pleat',
          'Swags & Cascades',
          'Mock Roman Valances',
          'Pleated Valances',
          'Continental Valances',
          'Rod Pocket Valances',
          'Arched Valances',
        ],
      },
    ],
    gallery: [
      {
        src: `${BASE_URL}/valances/valance-17.jpg`,
        alt: 'Seafoam Green Print Valance',
        title: 'Seafoam Green Print Valance',
        description: 'Beautiful seafoam green print valance with elegant design',
      },
      {
        src: `${BASE_URL}/valances/valance-1.jpg`,
        alt: 'Arched Continental Valance',
        title: 'Arched Continental Valance',
        description: 'Elegant arched design',
      },
      {
        src: `${BASE_URL}/valances/valance-2.jpg`,
        alt: 'Arched Continental with Honeycomb Shade',
        title: 'Combined Treatment',
        description: 'Valance with honeycomb shade',
      },
      {
        src: `${BASE_URL}/valances/valance-3.jpg`,
        alt: 'Balloon Valances',
        title: 'Balloon Valances',
        description: 'Soft, billowing design',
      },
      {
        src: `${BASE_URL}/valances/valance-4.jpg`,
        alt: 'Box Pleated Valance on Bay Window',
        title: 'Box Pleated Valance',
        description: 'Structured pleated design',
      },
      {
        src: `${BASE_URL}/valances/valance-5.jpg`,
        alt: 'Contemporary Kitchen Valance',
        title: 'Kitchen Valance',
        description: 'Modern kitchen treatment',
      },
      {
        src: `${BASE_URL}/valances/valance-6.jpg`,
        alt: 'Cornice on Small Window',
        title: 'Small Window Cornice',
        description: 'Perfect for petite windows',
      },
      {
        src: `${BASE_URL}/valances/valance-7.jpg`,
        alt: 'Cornice over Sliding Glass Door',
        title: 'Sliding Door Cornice',
        description: 'Elegant door treatment',
      },
      {
        src: `${BASE_URL}/valances/valance-8.jpg`,
        alt: 'Dining Room Silk Swags',
        title: 'Silk Swags',
        description: 'Luxurious silk treatment',
      },
      {
        src: `${BASE_URL}/valances/valance-9.jpg`,
        alt: 'Hexagon Valances',
        title: 'Hexagon Valances',
        description: 'Unique geometric design',
      },
      {
        src: `${BASE_URL}/valances/valance-10.jpg`,
        alt: 'Custom Valance Design',
        title: 'Custom Design',
        description: 'Personalized valance creation',
      },
      {
        src: `${BASE_URL}/valances/valance-11.jpg`,
        alt: 'Elegant Window Treatment',
        title: 'Elegant Treatment',
        description: 'Sophisticated window styling',
      },
      {
        src: `${BASE_URL}/valances/valance-12.jpg`,
        alt: 'Kitchen Cornice',
        title: 'Kitchen Cornice',
        description: 'Functional kitchen styling',
      },
      {
        src: `${BASE_URL}/valances/valance-13.jpg`,
        alt: 'Living Room Cornice with Side Panels and Silhouette',
        title: 'Living Room Treatment',
        description: 'Complete living room design',
      },
      {
        src: `${BASE_URL}/valances/valance-14.jpg`,
        alt: 'Classic Valance Design',
        title: 'Classic Design',
        description: 'Timeless valance style',
      },
      {
        src: `${BASE_URL}/valances/valance-15.jpg`,
        alt: 'Kitchen with Geometric Pattern Mock Roman Valance',
        title: 'Mock Roman Valance',
        description:
          'Kitchen window with geometric pattern mock Roman valance featuring orange and brown design',
      },
      {
        src: `${BASE_URL}/valances/valance-16.jpg`,
        alt: 'Kitchen with Botanical Pattern Mock Roman Valance',
        title: 'Botanical Mock Roman Valance',
        description:
          'Kitchen window with mock Roman valance featuring botanical pattern and decorative tassel trim',
      },
    ],
  },

  accessories: {
    title: 'Accessories & Motorization',
    subtitle: 'Modern Motorization with Stylish Finishes',
    description:
      'Enhance your window treatments with our premium selection of hardware and smart motorization solutions. From decorative rods to automated controls, we offer everything to complete your perfect window design.',
    lede: 'Modern Motorization with Stylish Finishes',
    mainImage: `${BASE_URL}/accessories/accessory-2.jpg`,
    homePageImage: '',
    features: [
      {
        title: 'Smart Integration',
        description: 'Advanced motorization with smart home compatibility',
        icon: 'house-signal',
      },
      {
        title: 'Convenience & Safety',
        description: 'Perfect for hard-to-reach windows and enhanced safety',
        icon: 'shield-heart',
      },
    ],
    options: [
      {
        category: 'Smart Features',
        items: [
          'Smartphone Control',
          'Scheduled Operation',
          'Remote Control',
          'Scene Programming',
        ],
      },
      {
        category: 'Smart Systems',
        items: [
          'Amazon Alexa',
          'Google Home',
          'Apple HomeKit',
          'Custom Integration',
        ],
      },
    ],
    gallery: [
      {
        src: `${BASE_URL}/accessories/accessory-1.jpg`,
        alt: 'Bay Window Cornice and Accessories',
        title: 'Cornice and Accessories',
        description: 'Coordinated design elements',
      },
      {
        src: `${BASE_URL}/accessories/accessory-3.jpg`,
        alt: 'Custom Quilted Bedspread',
        title: 'Custom Bedspread',
        description: 'Luxurious quilted design',
      },
      {
        src: `${BASE_URL}/accessories/accessory-4.jpg`,
        alt: 'Window Seat Cushions',
        title: 'Window Seat Cushions',
        description: 'Comfortable seating solution',
      },
      {
        src: `${BASE_URL}/accessories/accessory-5.jpg`,
        alt: 'Custom Pillows and Bedding',
        title: 'Custom Pillows and Bedding',
        description: 'High-quality accessories',
      },
      {
        src: `${BASE_URL}/accessories/accessory-6.jpg`,
        alt: 'Decorative Elements',
        title: 'Decorative Elements',
        description: 'Elegant finishing touches',
      },
      {
        src: `${BASE_URL}/accessories/accessory-7.jpg`,
        alt: 'Norman SmartDial Remote Control',
        title: 'Norman SmartDial Remote Control',
        description: 'Advanced remote control for motorized window treatments',
      },
      {
        src: `${BASE_URL}/accessories/accessory-8.jpg`,
        alt: 'Cat on Custom Bedding with Paisley Pattern',
        title: 'Custom Bedding with Paisley Pattern',
        description: 'Elegant custom bedding featuring intricate grey and cream paisley design',
      },
    ],
  },
}
