export interface Exam {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  logo?: string;
  icon?: string;
  
  // Basic Info
  description: string;
  fullForm?: string;
  category: 'Engineering' | 'Medical' | 'Management' | 'Law' | 'Other';
  level: 'National' | 'State' | 'University';
  
  // Dates
  applicationStartDate?: string;
  applicationEndDate?: string;
  examDate?: string;
  resultDate?: string;
  
  // Details
  conductedBy: string;
  examMode: 'Online' | 'Offline' | 'Both';
  examLanguages?: string[];
  examDuration?: string;
  totalMarks?: number;
  
  // Eligibility
  eligibility: string;
  ageLimit?: string;
  qualificationRequired?: string;
  
  // Pattern
  examPattern?: string;
  numberOfQuestions?: number;
  sections?: string[];
  
  // Fees
  applicationFee?: number;
  
  // Related
  acceptingColleges?: string[];
  relatedExams?: string[];
  
  // Stats
  participants?: number;
  difficulty?: 'Easy' | 'Medium' | 'Hard';
  
  // URLs
  officialWebsite?: string;
  
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
