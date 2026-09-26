// Verified, publicly supported service categories only. No prices are
// listed because none have been confirmed by the owner. Add new
// entries here as the full menu is confirmed; the Services component
// reads this list directly.

export const services = [
  {
    id: 'mens-haircut',
    name: "Men's Haircuts & Tapers",
    category: 'barber',
    description:
      'Customized scissor cuts, precision skin tapers, clipper work, and balanced finishing.',
    icon: 'content_cut',
  },
  {
    id: 'beard-trim',
    name: 'Beard Trims & Sculpting',
    category: 'barber',
    description:
      'Detailed chin and cheek contouring, length shaping, and conditioning beard oils.',
    icon: 'face_retouching_natural',
  },
  {
    id: 'shape-up',
    name: 'Shape-Ups & Lineups',
    category: 'barber',
    description:
      'Razor edge perimeter detailing, neck tapers, and temple alignment for clean symmetry.',
    icon: 'straighten',
  },
  {
    id: 'head-shave',
    name: 'Head Shaves & Hot Towel',
    category: 'barber',
    description:
      'Straight razor head shaves and hot towel shaves, finished with a soothing after balm.',
    icon: 'spa',
  },
  {
    id: 'braiding',
    name: 'Braiding & Protective Styles',
    category: 'beauty',
    description:
      'Cornrows, knotless braids, and other protective styling with careful, even parting.',
    icon: 'brush',
  },
  {
    id: 'hair-styling',
    name: 'Hair Styling & Beauty Services',
    category: 'beauty',
    description:
      'Beauty styling and hair care for clients looking for more than a standard cut.',
    icon: 'water_drop',
  },
];

export const serviceCategories = [
  { id: 'all', label: 'All Services' },
  { id: 'barber', label: 'Barbering' },
  { id: 'beauty', label: 'Beauty & Braiding' },
];
