export interface College {
  id: string;
  slug: string;
  name: string;
  logo?: string;
  images: string[];
  description: string;
  shortDescription?: string;
  
  // Location
  city: string;
  state: string;
  address: string;
  pincode?: string;
  
  // Classification
  type: 'Government' | 'Private' | 'Deemed' | 'Autonomous';
  streams: string[]; // Engineering, Management, Medical, etc.
  courses: string[]; // B.Tech, MBA, MBBS, etc.
  
  // Stats
  rating?: number;
  reviewCount?: number;
  establishedYear?: number;
  totalStudents?: number;
  
  // Fees
  averageFees?: number;
  minFees?: number;
  maxFees?: number;
  
  // Admissions
  admissionProcess?: string;
  eligibility?: string;
  entranceExams?: string[];
  
  // Rankings
  nirf_rank?: number;
  india_today_rank?: number;
  outlook_rank?: number;
  
  // Contact
  website?: string;
  email?: string;
  phone?: string;
  
  // Features
  features?: string[];
  facilities?: string[];
  placements?: {
    averagePackage?: number;
    highestPackage?: number;
    placementPercentage?: number;
    topRecruiters?: string[];
  };
  
  // SEO
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  
  // Timestamps
  createdAt: string;
  updatedAt: string;
  
  // Status
  isActive: boolean;
  isFeatured?: boolean;
  isVerified?: boolean;
}

export interface CollegeFilters {
  streams?: string[];
  courses?: string[];
  cities?: string[];
  states?: string[];
  type?: string[];
  minFees?: number;
  maxFees?: number;
  rating?: number;
  search?: string;
}

export interface Review {
  id: string;
  collegeId: string;
  studentName: string;
  course: string;
  batch: string;
  rating: number;
  title: string;
  review: string;
  likes?: number;
  verified?: boolean;
  createdAt: string;
}
