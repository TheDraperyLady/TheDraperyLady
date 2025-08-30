// Import all assets directly for better SSG compatibility
// Draperies
import drapery1 from '../assets/draperies/drapery-1.jpg'
import drapery2 from '../assets/draperies/drapery-2.jpg'
import drapery3 from '../assets/draperies/drapery-3.jpg'
import drapery4 from '../assets/draperies/drapery-4.jpg'
import drapery5 from '../assets/draperies/drapery-5.jpg'
import drapery6 from '../assets/draperies/drapery-6.jpg'
import drapery7 from '../assets/draperies/drapery-7.jpg'
import drapery8 from '../assets/draperies/drapery-8.jpg'
import drapery9 from '../assets/draperies/drapery-9.jpg'
import drapery10 from '../assets/draperies/drapery-10.jpg'
import drapery11 from '../assets/draperies/drapery-11.jpg'
import drapery12 from '../assets/draperies/drapery-12.jpg'
import drapery13 from '../assets/draperies/drapery-13.jpg'
import drapery14 from '../assets/draperies/drapery-14.jpg'
import drapery15 from '../assets/draperies/drapery-15.jpg'
import drapery16 from '../assets/draperies/drapery-16.jpg'

// Shutters
import shutter1 from '../assets/shutters/shutter-1.jpg'
import shutter2 from '../assets/shutters/shutter-2.jpg'
import shutter3 from '../assets/shutters/shutter-3.jpg'
import shutter4 from '../assets/shutters/shutter-4.jpg'
import shutter5 from '../assets/shutters/shutter-5.jpg'
import shutter6 from '../assets/shutters/shutter-6.jpg'
import shutter7 from '../assets/shutters/shutter-7.jpg'
import shutter8 from '../assets/shutters/shutter-8.jpg'
import shutter9 from '../assets/shutters/shutter-9.jpg'
import shutter10 from '../assets/shutters/shutter-10.jpg'

// Blinds
import blinds2 from '../assets/blinds/blinds-2.jpg'
import blinds3 from '../assets/blinds/blinds-3.jpg'

// Shades
import shades1 from '../assets/shades/shades-1.jpg'
import shades2 from '../assets/shades/shades-2.jpg'
import shades3 from '../assets/shades/shades-3.jpg'
import shades4 from '../assets/shades/shades-4.jpg'
import shades5 from '../assets/shades/shades-5.jpg'
import shades6 from '../assets/shades/shades-6.jpg'
import shades7 from '../assets/shades/shades-7.jpg'
import shades8 from '../assets/shades/shades-8.jpg'
import shades9 from '../assets/shades/shades-9.jpg'
import shades10 from '../assets/shades/shades-10.jpg'
import shades11 from '../assets/shades/shades-11.jpg'
import shades12 from '../assets/shades/shades-12.jpg'
import shades13 from '../assets/shades/shades-13.jpg'
import shades14 from '../assets/shades/shades-14.jpg'

// Valances
import valance1 from '../assets/valances/valance-1.jpg'
import valance2 from '../assets/valances/valance-2.jpg'
import valance3 from '../assets/valances/valance-3.jpg'
import valance4 from '../assets/valances/valance-4.jpg'
import valance5 from '../assets/valances/valance-5.jpg'
import valance6 from '../assets/valances/valance-6.jpg'
import valance7 from '../assets/valances/valance-7.jpg'
import valance8 from '../assets/valances/valance-8.jpg'
import valance9 from '../assets/valances/valance-9.jpg'
import valance10 from '../assets/valances/valance-10.jpg'
import valance11 from '../assets/valances/valance-11.jpg'
import valance12 from '../assets/valances/valance-12.jpg'
import valance13 from '../assets/valances/valance-13.jpg'
import valance14 from '../assets/valances/valance-14.jpg'
import valance15 from '../assets/valances/valance-15.jpg'
import valance16 from '../assets/valances/valance-16.jpg'
import valance17 from '../assets/valances/valance-17.jpg'

// Accessories
import accessory1 from '../assets/accessories/accessory-1.jpg'
import accessory2 from '../assets/accessories/accessory-2.jpg'
import accessory3 from '../assets/accessories/accessory-3.jpg'
import accessory4 from '../assets/accessories/accessory-4.jpg'
import accessory5 from '../assets/accessories/accessory-5.jpg'
import accessory6 from '../assets/accessories/accessory-6.jpg'
import accessory7 from '../assets/accessories/accessory-7.jpg'
import accessory8 from '../assets/accessories/accessory-8.jpg'

// Services
import service1 from '../assets/service-1.webp'
import service4 from '../assets/service-4.webp'

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
    mainImage: drapery11,
    homePageImage: drapery4,
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
        src: drapery2,
        alt: 'Arched Draperies in Bathroom',
        title: 'Arched Draperies',
        description: 'Elegant bathroom window treatment',
      },
      {
        src: drapery3,
        alt: 'Bay Window Cornice Drapes and Shutters',
        title: 'Bay Window Treatment',
        description: 'Combined draperies and shutters',
      },
      {
        src: drapery4,
        alt: 'Classic Home Drapery',
        title: 'Classic Drapery',
        description: 'Timeless elegance for any home',
      },
      {
        src: drapery5,
        alt: 'Long Ripplefold Draperies',
        title: 'Ripplefold Draperies',
        description: 'Smooth, modern drapery style',
      },
      {
        src: drapery6,
        alt: 'Custom Drapery Installation',
        title: 'Custom Installation',
        description: 'Professional drapery installation',
      },
      {
        src: drapery7,
        alt: 'Elegant Panel Draperies',
        title: 'Panel Draperies',
        description: 'Sophisticated panel design',
      },
      {
        src: drapery8,
        alt: 'Ripplefold Patterned Sheers',
        title: 'Patterned Sheers',
        description: 'Beautiful patterned sheer fabric',
      },
      {
        src: drapery9,
        alt: 'Ripplefold Sheer Draperies',
        title: 'Sheer Draperies',
        description: 'Light and airy sheer treatment',
      },
      {
        src: drapery10,
        alt: 'Sheer Side Panels on Bay Window',
        title: 'Sheer Side Panels',
        description: 'Elegant bay window treatment',
      },
      {
        src: drapery1,
        alt: 'Angled Draperies on Wrought Iron',
        title: 'Angled Draperies',
        description: 'Custom angled installation',
      },
      {
        src: drapery12,
        alt: 'Periwinkle Print Draperies',
        title: 'Periwinkle Print',
        description: 'Beautiful printed fabric design',
      },
      {
        src: drapery13,
        alt: 'Cornice and Side Panels',
        title: 'Cornice Design',
        description: 'Elegant cornice with panels',
      },
      {
        src: drapery14,
        alt: 'Custom Window Treatment Design',
        title: 'Custom Design',
        description: 'Personalized window treatment',
      },
      {
        src: drapery15,
        alt: 'French Returns Sliding Glass Door',
        title: 'French Returns',
        description: 'Sliding glass door treatment',
      },
      {
        src: drapery16,
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
    mainImage: shutter6,
    homePageImage: shutter6,
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
        src: shutter1,
        alt: 'Bay Window Shutters',
        title: 'Bay Window Shutters',
        description: 'Classic plantation shutters',
      },
      {
        src: shutter2,
        alt: 'Round Window Shutters',
        title: 'Round Window Shutters',
        description: 'Custom shaped shutters',
      },
      {
        src: shutter3,
        alt: 'Bypass Shutters on Patio Door',
        title: 'Bypass Shutters',
        description: 'Patio door installation',
      },
      {
        src: shutter4,
        alt: 'Front Window Shutters',
        title: 'Front Window Shutters',
        description: 'Exterior window treatment',
      },
      {
        src: shutter5,
        alt: 'Bay Window Cornice with Shutters',
        title: 'Cornice with Shutters',
        description: 'Combined treatment design',
      },
      {
        src: shutter6,
        alt: 'Bedroom Plantation Shutters with Mountain View',
        title: 'Bedroom Shutters',
        description:
          'Elegant bedroom window treatment with scenic views featuring Norman Woodlore Composite Shutters',
      },
      {
        src: shutter7,
        alt: 'Dining Room Plantation Shutters',
        title: 'Dining Room Shutters',
        description:
          'Classic plantation shutters in dining area featuring Norman Woodlore Composite Shutters',
      },
      {
        src: shutter8,
        alt: 'Bathroom Plantation Shutters with Bathtub',
        title: 'Bathroom Shutters',
        description:
          'Luxurious bathroom with arched window shutters featuring Norman Woodlore Composite Shutters',
      },
      {
        src: shutter9,
        alt: 'Living Room Plantation Shutters',
        title: 'Living Room Shutters',
        description:
          'Modern living room with plantation shutters featuring Norman Woodlore Composite Shutters',
      },
      {
        src: shutter10,
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
    mainImage: blinds2,
    homePageImage: blinds2,
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
        src: blinds2,
        alt: 'Living Room with Norman Cordless Blinds',
        title: 'Living Room Cordless Blinds',
        description:
          'Elegant living room featuring Norman Cordless Blinds for enhanced safety and convenience',
      },
      {
        src: blinds3,
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
    mainImage: shades1,
    homePageImage: shades1,
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
        src: shades1,
        alt: 'Home Office with Norman PerfectSheer Shadings',
        title: 'Home Office Shadings',
        description: 'Modern home office featuring Norman PerfectSheer Shadings',
      },
      {
        src: shades2,
        alt: 'Living Room with Norman PerfectSheer Shadings',
        title: 'Living Room Shadings',
        description: 'Bright living room with Norman PerfectSheer Shadings and indoor plants',
      },
      {
        src: shades3,
        alt: 'Modern Living Room with Norman Roman Shades',
        title: 'Modern Living Room Roman Shades',
        description: 'Elegant living room featuring Norman Roman Shades with geometric pattern',
      },
      {
        src: shades4,
        alt: 'Dining Room with Norman Roman Shades',
        title: 'Dining Room Roman Shades',
        description: 'Sophisticated dining area with Norman Roman Shades',
      },
      {
        src: shades5,
        alt: 'Kitchen with Norman Roman Shades',
        title: 'Kitchen Roman Shades',
        description: 'Modern kitchen featuring Norman Roman Shades with grey finish',
      },
      {
        src: shades6,
        alt: 'Living Room with Norman SmartDrape Sheer Shades',
        title: 'Living Room SmartDrape Shades',
        description:
          'Modern living space featuring Norman SmartDrape Sheer Shades with vertical design',
      },
      {
        src: shades7,
        alt: 'Dining Room with Norman Honeycomb Shades',
        title: 'Dining Room Honeycomb Shades',
        description:
          'Bright dining room featuring Norman Honeycomb Shades with top-down/bottom-up operation',
      },
      {
        src: shades8,
        alt: 'Bedroom with Norman Vertical Honeycomb Shades',
        title: 'Vertical Honeycomb Shades',
        description:
          'Neutral vertical honeycomb shades providing privacy and light control in bedroom',
      },
      {
        src: shades9,
        alt: 'Window with Norman PerfectSheer Shadings',
        title: 'PerfectSheer Shadings',
        description:
          'Horizontal zebra shades with alternating opaque and sheer bands for versatile light control',
      },
      {
        src: shades10,
        alt: 'Window with Norman SmartDrape Vertical Sheer Shadings',
        title: 'SmartDrape Vertical Sheer Shadings',
        description: 'Elegant vertical sheer shadings providing soft light diffusion and privacy',
      },
      {
        src: shades11,
        alt: 'Window with Norman SmartDrape Vertical Sheer Shadings',
        title: 'SmartDrape Vertical Sheer Shadings',
        description: 'Modern vertical sheer shadings offering sophisticated light control',
      },
      {
        src: shades12,
        alt: 'Living Room with Norman Roman Shades',
        title: 'Roman Shades',
        description:
          'Classic Roman shades with soft horizontal folds in traditional living room setting',
      },
      {
        src: shades13,
        alt: 'Sunroom with Rust Colored Ceiling Shades',
        title: 'Sunroom Ceiling Shades',
        description:
          'Extensive system of rust-colored fabric shades covering a glass ceiling in a bright sunroom',
      },
      {
        src: shades14,
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
    mainImage: valance1,
    homePageImage: service4,
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
        src: valance17,
        alt: 'Seafoam Green Print Valance',
        title: 'Seafoam Green Print Valance',
        description: 'Beautiful seafoam green print valance with elegant design',
      },
      {
        src: valance1,
        alt: 'Arched Continental Valance',
        title: 'Arched Continental Valance',
        description: 'Elegant arched design',
      },
      {
        src: valance2,
        alt: 'Arched Continental with Honeycomb Shade',
        title: 'Combined Treatment',
        description: 'Valance with honeycomb shade',
      },
      {
        src: valance3,
        alt: 'Balloon Valances',
        title: 'Balloon Valances',
        description: 'Soft, billowing design',
      },
      {
        src: valance4,
        alt: 'Box Pleated Valance on Bay Window',
        title: 'Box Pleated Valance',
        description: 'Structured pleated design',
      },
      {
        src: valance5,
        alt: 'Contemporary Kitchen Valance',
        title: 'Kitchen Valance',
        description: 'Modern kitchen treatment',
      },
      {
        src: valance6,
        alt: 'Cornice on Small Window',
        title: 'Small Window Cornice',
        description: 'Perfect for petite windows',
      },
      {
        src: valance7,
        alt: 'Cornice over Sliding Glass Door',
        title: 'Sliding Door Cornice',
        description: 'Elegant door treatment',
      },
      {
        src: valance8,
        alt: 'Dining Room Silk Swags',
        title: 'Silk Swags',
        description: 'Luxurious silk treatment',
      },
      {
        src: valance9,
        alt: 'Hexagon Valances',
        title: 'Hexagon Valances',
        description: 'Unique geometric design',
      },
      {
        src: valance10,
        alt: 'Custom Valance Design',
        title: 'Custom Design',
        description: 'Personalized valance creation',
      },
      {
        src: valance11,
        alt: 'Elegant Window Treatment',
        title: 'Elegant Treatment',
        description: 'Sophisticated window styling',
      },
      {
        src: valance12,
        alt: 'Kitchen Cornice',
        title: 'Kitchen Cornice',
        description: 'Functional kitchen styling',
      },
      {
        src: valance13,
        alt: 'Living Room Cornice with Side Panels and Silhouette',
        title: 'Living Room Treatment',
        description: 'Complete living room design',
      },
      {
        src: valance14,
        alt: 'Classic Valance Design',
        title: 'Classic Design',
        description: 'Timeless valance style',
      },
      {
        src: valance15,
        alt: 'Kitchen with Geometric Pattern Mock Roman Valance',
        title: 'Mock Roman Valance',
        description:
          'Kitchen window with geometric pattern mock Roman valance featuring orange and brown design',
      },
      {
        src: valance16,
        alt: 'Kitchen with Botanical Pattern Mock Roman Valance',
        title: 'Botanical Mock Roman Valance',
        description:
          'Kitchen window with mock Roman valance featuring botanical pattern and decorative tassel trim',
      },
    ],
  },

  accessories: {
    title: 'Accessories & Motorization',
    subtitle: 'Smart Solutions & Elegant Finishes',
    description:
      'Enhance your window treatments with our premium selection of hardware and smart motorization solutions. From decorative rods to automated controls, we offer everything to complete your perfect window design.',
    lede: 'Smart Solutions & Elegant Finishes',
    mainImage: accessory1,
    homePageImage: service1,
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
          'Voice Commands',
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
          'Samsung SmartThings',
          'Custom Integration',
        ],
      },
    ],
    gallery: [
      {
        src: accessory2,
        alt: 'Bay Window Cornice and Accessories',
        title: 'Cornice and Accessories',
        description: 'Coordinated design elements',
      },
      {
        src: accessory3,
        alt: 'Custom Quilted Bedspread',
        title: 'Custom Bedspread',
        description: 'Luxurious quilted design',
      },
      {
        src: accessory4,
        alt: 'Window Seat Cushions',
        title: 'Window Seat Cushions',
        description: 'Comfortable seating solution',
      },
      {
        src: accessory5,
        alt: 'Custom Pillows and Bedding',
        title: 'Custom Pillows and Bedding',
        description: 'High-quality accessories',
      },
      {
        src: accessory6,
        alt: 'Decorative Elements',
        title: 'Decorative Elements',
        description: 'Elegant finishing touches',
      },
      {
        src: accessory7,
        alt: 'Norman SmartDial Remote Control',
        title: 'Norman SmartDial Remote Control',
        description: 'Advanced remote control for motorized window treatments',
      },
      {
        src: accessory8,
        alt: 'Cat on Custom Bedding with Paisley Pattern',
        title: 'Custom Bedding with Paisley Pattern',
        description: 'Elegant custom bedding featuring intricate grey and cream paisley design',
      },
    ],
  },
}
