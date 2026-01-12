export const ROUTES = {
  HOME: '/',
  
  // Colleges
  COLLEGES: '/colleges',
  COLLEGE_DETAIL: (slug: string) => `/colleges/${slug}`,
  COLLEGES_BY_STREAM: (stream: string) => `/colleges/stream/${stream}`,
  COLLEGES_BY_COURSE: (course: string) => `/colleges/course/${course}`,
  COLLEGES_BY_CITY: (city: string) => `/college-in-${city.toLowerCase()}`,
  COLLEGE_COMPARE: '/colleges/compare',
  
  // Exams
  EXAMS: '/exams',
  EXAM_DETAIL: (slug: string) => `/exam/${slug}`,
  
  // Courses
  COURSES: '/courses',
  COURSE_DETAIL: (slug: string) => `/course/${slug}`,
  
  // News
  NEWS: '/news',
  NEWS_DETAIL: (slug: string) => `/news-panel/${slug}`,
  NEWS_BY_CATEGORY: (category: string) => `/news/category/${category}`,
  
  // Other Pages
  ABOUT: '/about-us',
  CONTACT: '/contact-us',
  APPLY: '/common-application-form',
  REVIEW: '/college-review',
  CAMPUS_AMBASSADOR: '/campus-ambassador',
} as const;

export const API_ENDPOINTS = {
  // Colleges
  COLLEGES: '/colleges',
  COLLEGE_BY_SLUG: (slug: string) => `/colleges/${slug}`,
  TOP_COLLEGES: '/colleges/top',
  COLLEGES_BY_STREAM: (stream: string) => `/colleges/stream/${stream}`,
  COLLEGES_BY_CITY: (city: string) => `/colleges/city/${city}`,
  
  // Exams
  EXAMS: '/exams',
  EXAM_BY_SLUG: (slug: string) => `/exams/${slug}`,
  TOP_EXAMS: '/exams/top',
  
  // Courses
  COURSES: '/courses',
  COURSE_BY_SLUG: (slug: string) => `/courses/${slug}`,
  
  // News
  NEWS: '/news',
  NEWS_BY_SLUG: (slug: string) => `/news/${slug}`,
  NEWS_BY_CATEGORY: (category: string) => `/news/category/${category}`,
  
  // Search
  SEARCH: '/search',
  
  // Reviews
  REVIEWS: '/reviews',
  REVIEW_BY_COLLEGE: (collegeId: string) => `/reviews/college/${collegeId}`,
  
  // Application
  APPLY: '/applications',
} as const;
