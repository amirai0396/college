export interface PaginationParams {
  page: number;
  limit: number;
  total?: number;
  totalPages?: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  pagination?: PaginationParams;
}

export interface SearchResult {
  colleges: Array<{ id: string; name: string; slug: string; type: string }>;
  exams: Array<{ id: string; name: string; slug: string; category: string }>;
  courses: Array<{ id: string; name: string; slug: string; level: string }>;
  news: Array<{ id: string; title: string; slug: string; category: string }>;
}

export interface MenuItem {
  label: string;
  href?: string;
  items?: MenuItem[];
  icon?: string;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  image?: string;
  college: string;
  course: string;
  rating: number;
  review: string;
  date?: string;
}

export interface Stats {
  colleges: number;
  courses: number;
  exams: number;
  counsellors: number;
}
