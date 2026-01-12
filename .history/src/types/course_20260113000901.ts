export interface Course {
  id: string;
  slug: string;
  name: string;
  shortName?: string;
  
  // Basic Info
  description: string;
  fullForm?: string;
  category: string; // Engineering, Medical, Management, etc.
  level: 'UG' | 'PG' | 'Diploma' | 'Certificate' | 'PhD';
  duration: string; // "3 Years", "4 Years", etc.
  
  // Details
  eligibility: string;
  entranceExams?: string[];
  specializations?: string[];
  
  // Career
  careerOptions?: string[];
  averageSalary?: number;
  topRecruiters?: string[];
  
  // Fees
  averageFees?: number;
  minFees?: number;
  maxFees?: number;
  
  // Stats
  totalColleges?: number;
  popularColleges?: string[];
  
  // SEO
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  
  // Timestamps
  createdAt: string;
  updatedAt: string;
  
  isActive: boolean;
  isFeatured?: boolean;
}
