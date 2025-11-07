// Mock data for the jewelry e-commerce site

export const categories = [
  { id: 1, name: 'Pendants', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop', slug: 'pendants' },
  { id: 2, name: 'Earrings', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop', slug: 'earrings' },
  { id: 3, name: 'Rings', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop', slug: 'rings' },
  { id: 4, name: 'Bracelets', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop', slug: 'bracelets' },
  { id: 5, name: 'Anklets', image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=400&fit=crop', slug: 'anklets' },
  { id: 6, name: 'Sets', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop', slug: 'sets' },
  { id: 7, name: "Men's", image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&h=400&fit=crop', slug: 'mens' },
];

export const products = [
  {
    id: 1,
    name: 'Elegant Diamond Pendant',
    price: 4999,
    originalPrice: 6999,
    discount: 29,
    category: 'pendants',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&h=600&fit=crop'
    ],
    rating: 4.5,
    reviews: 128,
    description: 'A stunning diamond pendant crafted with precision. Perfect for special occasions.',
    material: 'Sterling Silver',
    purity: '925',
    weight: '3.5g',
    inStock: true
  },
  {
    id: 2,
    name: 'Classic Gold Earrings',
    price: 3499,
    originalPrice: 4999,
    discount: 30,
    category: 'earrings',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1596944924591-1b0a5e875c5e?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1595951609458-215e5dc890d6?w=600&h=600&fit=crop'
    ],
    rating: 4.8,
    reviews: 256,
    description: 'Timeless gold earrings that complement any outfit. Lightweight and comfortable.',
    material: 'Gold Plated',
    purity: '18K',
    weight: '2.8g',
    inStock: true
  },
  {
    id: 3,
    name: 'Infinity Love Ring',
    price: 2999,
    originalPrice: 3999,
    discount: 25,
    category: 'rings',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1603561596112-0a132b757442?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=600&fit=crop'
    ],
    rating: 4.7,
    reviews: 189,
    description: 'Symbol of eternal love. Beautifully designed infinity ring with sparkling stones.',
    material: 'Sterling Silver',
    purity: '925',
    weight: '4.2g',
    inStock: true
  },
  {
    id: 4,
    name: 'Pearl Chain Bracelet',
    price: 2499,
    originalPrice: 3499,
    discount: 29,
    category: 'bracelets',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&h=600&fit=crop'
    ],
    rating: 4.6,
    reviews: 143,
    description: 'Delicate pearl bracelet with adjustable chain. Perfect for daily wear.',
    material: 'Sterling Silver',
    purity: '925',
    weight: '5.1g',
    inStock: true
  },
  {
    id: 5,
    name: 'Traditional Anklet',
    price: 1999,
    originalPrice: 2999,
    discount: 33,
    category: 'anklets',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop'
    ],
    rating: 4.4,
    reviews: 98,
    description: 'Beautiful traditional anklet with intricate design. Adjustable sizing.',
    material: 'Sterling Silver',
    purity: '925',
    weight: '6.5g',
    inStock: true
  },
  {
    id: 6,
    name: 'Bridal Jewelry Set',
    price: 12999,
    originalPrice: 17999,
    discount: 28,
    category: 'sets',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&h=600&fit=crop'
    ],
    rating: 4.9,
    reviews: 312,
    description: 'Complete bridal set including necklace, earrings, and maang tikka. Premium quality.',
    material: 'Gold Plated',
    purity: '22K',
    weight: '45.3g',
    inStock: true
  },
  {
    id: 7,
    name: "Men's Silver Chain",
    price: 3999,
    originalPrice: 5499,
    discount: 27,
    category: 'mens',
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop'
    ],
    rating: 4.5,
    reviews: 176,
    description: 'Bold and stylish silver chain for men. Perfect for everyday wear.',
    material: 'Sterling Silver',
    purity: '925',
    weight: '18.2g',
    inStock: true
  },
  {
    id: 8,
    name: 'Rose Gold Heart Pendant',
    price: 5499,
    originalPrice: 7999,
    discount: 31,
    category: 'pendants',
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&h=600&fit=crop'
    ],
    rating: 4.7,
    reviews: 203,
    description: 'Romantic rose gold pendant in heart shape. A perfect gift for loved ones.',
    material: 'Rose Gold Plated',
    purity: '18K',
    weight: '3.8g',
    inStock: true
  },
  {
    id: 9,
    name: 'Cubic Zirconia Studs',
    price: 1999,
    originalPrice: 2999,
    discount: 33,
    category: 'earrings',
    image: 'https://images.unsplash.com/photo-1596944924591-1b0a5e875c5e?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1596944924591-1b0a5e875c5e?w=600&h=600&fit=crop'
    ],
    rating: 4.6,
    reviews: 287,
    description: 'Sparkling cubic zirconia stud earrings. Hypoallergenic and comfortable.',
    material: 'Sterling Silver',
    purity: '925',
    weight: '1.5g',
    inStock: true
  },
  {
    id: 10,
    name: 'Stackable Ring Set',
    price: 3499,
    originalPrice: 4999,
    discount: 30,
    category: 'rings',
    image: 'https://images.unsplash.com/photo-1603561596112-0a132b757442?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1603561596112-0a132b757442?w=600&h=600&fit=crop'
    ],
    rating: 4.8,
    reviews: 234,
    description: 'Set of 3 stackable rings. Mix and match for different looks.',
    material: 'Gold Plated',
    purity: '18K',
    weight: '6.2g',
    inStock: true
  },
  {
    id: 11,
    name: 'Diamond Tennis Bracelet',
    price: 8999,
    originalPrice: 12999,
    discount: 31,
    category: 'bracelets',
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=600&fit=crop'
    ],
    rating: 4.9,
    reviews: 156,
    description: 'Luxurious tennis bracelet with lab-grown diamonds. Stunning sparkle.',
    material: 'Sterling Silver',
    purity: '925',
    weight: '8.7g',
    inStock: true
  },
  {
    id: 12,
    name: 'Gold Plated Charm Anklet',
    price: 2299,
    originalPrice: 3299,
    discount: 30,
    category: 'anklets',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=600&fit=crop'
    ],
    rating: 4.5,
    reviews: 112,
    description: 'Trendy anklet with delicate charms. Perfect for summer.',
    material: 'Gold Plated',
    purity: '18K',
    weight: '4.8g',
    inStock: true
  }
];

export const collections = [
  {
    id: 1,
    name: 'Shakti Collection',
    tagline: 'Bright & yellow like the fire within',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&h=600&fit=crop',
    bgColor: '#F5E6D3'
  },
  {
    id: 2,
    name: 'Fresh Drop',
    tagline: 'Shiny & New Arrivals - Only at LuxeJewels',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&h=600&fit=crop',
    bgColor: '#E8F4F8'
  },
  {
    id: 3,
    name: 'Piercing Collection',
    tagline: 'Mix, match, and style your unique look',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1200&h=600&fit=crop',
    bgColor: '#FFE8E1'
  }
];

export const features = [
  {
    id: 1,
    icon: 'Shield',
    title: 'Certified Jewelry',
    description: '100% Certified & Hallmarked'
  },
  {
    id: 2,
    icon: 'Truck',
    title: 'Free Shipping',
    description: 'On orders above ₹1999'
  },
  {
    id: 3,
    icon: 'RotateCcw',
    title: '30-Day Returns',
    description: 'Easy returns & exchange'
  },
  {
    id: 4,
    icon: 'CreditCard',
    title: 'Secure Payments',
    description: '100% Safe & Secure'
  }
];
