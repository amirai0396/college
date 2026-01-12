export const SITE_CONFIG = {
  name: 'CollegeChalo',
  description: 'Because We Make Your Educational Journey Simple',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://collegechalo.com',
  apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api',
  cdnUrl: process.env.NEXT_PUBLIC_CDN_URL || '',
  
  contact: {
    email: 'info@collegechalo.com',
    phone: '+91-XXXXXXXXXX',
  },
  
  social: {
    facebook: 'https://facebook.com/collegechalo',
    twitter: 'https://twitter.com/collegechalo',
    instagram: 'https://instagram.com/collegechalo',
    linkedin: 'https://linkedin.com/company/collegechalo',
    youtube: 'https://youtube.com/@collegechalo',
  },
} as const;

export const STREAMS = [
  { id: 'engineering', name: 'Engineering', icon: '⚙️' },
  { id: 'management', name: 'Management', icon: '💼' },
  { id: 'medical', name: 'Medical', icon: '⚕️' },
  { id: 'law', name: 'Law', icon: '⚖️' },
  { id: 'science', name: 'Science', icon: '🔬' },
  { id: 'arts', name: 'Arts', icon: '🎨' },
  { id: 'commerce', name: 'Commerce', icon: '💰' },
  { id: 'design', name: 'Design', icon: '✏️' },
  { id: 'pharmacy', name: 'Pharmacy', icon: '💊' },
  { id: 'agriculture', name: 'Agriculture', icon: '🌾' },
] as const;

export const TOP_EXAMS = [
  { name: 'CAT', category: 'Management' },
  { name: 'GATE', category: 'Engineering' },
  { name: 'JEE Main', category: 'Engineering' },
  { name: 'JEE Advanced', category: 'Engineering' },
  { name: 'NEET', category: 'Medical' },
  { name: 'CLAT', category: 'Law' },
  { name: 'UPSC', category: 'Civil Services' },
  { name: 'XAT', category: 'Management' },
  { name: 'NMAT', category: 'Management' },
  { name: 'MAT', category: 'Management' },
] as const;

export const STATES = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
  'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
  'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
  'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
  'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
  'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Puducherry',
] as const;

export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 20,
  MAX_PAGE_SIZE: 100,
} as const;

export const SEO = {
  DEFAULT_TITLE: 'CollegeChalo - Find Your Dream College',
  TITLE_TEMPLATE: '%s | CollegeChalo',
  DEFAULT_DESCRIPTION: 'Discover 20,000+ colleges, 500,000+ courses and exams. Get admission guidance, compare colleges, and make informed decisions about your educational journey.',
  DEFAULT_KEYWORDS: ['colleges in India', 'engineering colleges', 'MBA colleges', 'medical colleges', 'college admission', 'entrance exams', 'career guidance'],
} as const;
