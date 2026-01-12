export interface News {
  id: string;
  slug: string;
  title: string;
  thumbnail: string;
  images?: string[];
  
  // Content
  excerpt: string;
  content: string;
  
  // Classification
  category: string; // Admission, Exam, Placement, Education Policy, etc.
  tags?: string[];
  
  // Related
  relatedColleges?: string[];
  relatedExams?: string[];
  
  // Author
  author?: string;
  authorImage?: string;
  
  // Stats
  views?: number;
  likes?: number;
  
  // SEO
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  
  // Timestamps
  publishedAt: string;
  updatedAt: string;
  
  isActive: boolean;
  isFeatured?: boolean;
}

export interface NewsCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  icon?: string;
  color?: string;
}
