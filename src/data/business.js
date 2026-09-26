// Single source of truth for all business facts.
// Public directories currently disagree on the phone number: the
// client supplied (404) 373-1760 but multiple current public
// listings support (404) 373-1860. This file uses the publicly
// supported number. If the owner confirms a different number,
// change it once here and every component updates.

const phoneDisplay = '(404) 373-1860';
const phoneDigits = '4043731860';

const address = {
  line1: '2233 College Ave NE',
  city: 'Atlanta',
  state: 'GA',
  zip: '30317',
  neighborhood: 'Kirkwood',
};

const fullAddress = `${address.line1}, ${address.city}, ${address.state} ${address.zip}`;

export const business = {
  name: 'Molasses Barber and Beauty',
  shortName: 'Molasses',
  tagline: 'Barbering, grooming, and beauty services together in a Kirkwood parlor.',
  neighborhood: address.neighborhood,
  city: 'Atlanta',
  address,
  fullAddress,
  phone: {
    display: phoneDisplay,
    href: `tel:+1${phoneDigits}`,
  },
  ctaLinks: {
    call: `tel:+1${phoneDigits}`,
    directions: `https://maps.google.com/?q=${encodeURIComponent(fullAddress)}`,
  },
  socialLinks: [],
  // Public sources currently disagree on operating hours. Until the
  // owner confirms a single schedule, the UI should say so rather
  // than publish a guess.
  hours: {
    verified: false,
    note: "Hours vary by day and by which barbers and stylists are in. Call the shop to confirm today's schedule.",
    schedule: [],
  },
};
