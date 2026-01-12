'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Calendar, Eye } from 'lucide-react';
import Link from 'next/link';

export default function NewsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Dummy news data
  const news = [
    {
      id: 1,
      slug: 'iit-admissions-2026-process-begins',
      title: 'IIT Admissions 2026: Application Process Begins for B.Tech Programs',
      excerpt: 'The Indian Institutes of Technology have announced the start of the admission process for the 2026 academic year. Students can now apply for various B.Tech programs across all IITs.',
      content: '',
      category: 'Admission',
      date: '2026-01-12',
      author: 'Priya Sharma',
      views: 15420,
      featured: true,
    },
    {
      id: 2,
      slug: 'neet-2026-important-dates-updates',
      title: 'NEET 2026: Important Dates and Exam Pattern Updates',
      excerpt: 'National Testing Agency releases updated schedule and pattern for NEET 2026. Check important dates, eligibility criteria, and syllabus changes for the medical entrance exam.',
      content: '',
      category: 'Exam',
      date: '2026-01-11',
      author: 'Rahul Kumar',
      views: 12350,
      featured: true,
    },
    {
      id: 3,
      slug: 'mba-colleges-record-placement-2025',
      title: 'Top MBA Colleges Announce Record Placement Packages for 2025 Batch',
      excerpt: 'Leading business schools across India report impressive placement statistics with highest packages reaching new records. IIM Ahmedabad leads with average package of ₹32 LPA.',
      content: '',
      category: 'Placement',
      date: '2026-01-10',
      author: 'Amit Verma',
      views: 18920,
      featured: true,
    },
    {
      id: 4,
      slug: 'new-medical-colleges-india-2026',
      title: 'New Medical Colleges to Open Across India in 2026',
      excerpt: 'Government approves establishment of 50+ new medical colleges to increase MBBS seats and improve healthcare education infrastructure across the country.',
      content: '',
      category: 'Education Policy',
      date: '2026-01-09',
      author: 'Dr. Sneha Patel',
      views: 9870,
      featured: false,
    },
    {
      id: 5,
      slug: 'jee-advanced-2026-syllabus-changes',
      title: 'JEE Advanced 2026: Syllabus Changes and New Pattern Announced',
      excerpt: 'IITs announce modifications in JEE Advanced syllabus for 2026. New topics added in Physics and Mathematics sections. Check complete details here.',
      content: '',
      category: 'Exam',
      date: '2026-01-08',
      author: 'Vikram Singh',
      views: 14560,
      featured: false,
    },
    {
      id: 6,
      slug: 'nit-counselling-2026-schedule',
      title: 'NIT Counselling 2026: Complete Schedule and Important Instructions',
      excerpt: 'JoSAA releases the complete schedule for NIT counselling 2026. Learn about document verification, seat allocation process, and important deadlines.',
      content: '',
      category: 'Admission',
      date: '2026-01-07',
      author: 'Anjali Reddy',
      views: 11230,
      featured: false,
    },
    {
      id: 7,
      slug: 'engineering-colleges-startup-culture',
      title: 'Engineering Colleges Focus on Building Startup Culture Among Students',
      excerpt: 'Top engineering institutions launching incubation centers and entrepreneurship programs to encourage innovation and startup mindset among students.',
      content: '',
      category: 'Innovation',
      date: '2026-01-06',
      author: 'Karthik Iyer',
      views: 7650,
      featured: false,
    },
    {
      id: 8,
      slug: 'cat-2026-registration-begins',
      title: 'CAT 2026 Registration Begins: Step-by-Step Application Guide',
      excerpt: 'Common Admission Test 2026 registration is now live. Here\'s a comprehensive guide on how to fill the application form, upload documents, and pay fees.',
      content: '',
      category: 'Exam',
      date: '2026-01-05',
      author: 'Meera Joshi',
      views: 16780,
      featured: false,
    },
  ];

  const categories = ['All', 'Admission', 'Exam', 'Placement', 'Education Policy', 'Innovation'];

  const filteredNews = news.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredNews = news.filter(item => item.featured);
  const regularNews = filteredNews.filter(item => !item.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-linear-to-r from-blue-600 to-indigo-700 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Education News</h1>
          <p className="text-lg text-blue-100 mb-6">
            Stay updated with latest news on admissions, exams, and education policies
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="Search news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 bg-white text-gray-900"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category.toLowerCase())}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === category.toLowerCase()
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                } shadow-md`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured News Section */}
        {selectedCategory === 'all' && featuredNews.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="text-orange-500">⭐</span> Featured News
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredNews.map((item) => (
                <Link key={item.id} href={`/news-panel/${item.slug}`}>
                  <Card className="hover:shadow-xl transition-shadow cursor-pointer h-full overflow-hidden">
                    <div className="relative h-48 bg-linear-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                      <span className="text-white text-5xl opacity-20">📰</span>
                      <Badge className="absolute top-3 right-3 bg-orange-500">
                        Featured
                      </Badge>
                    </div>
                    <div className="p-5">
                      <Badge className="mb-3 bg-blue-600">{item.category}</Badge>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {item.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar size={12} />
                          <span>{new Date(item.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye size={12} />
                          <span>{item.views.toLocaleString()} views</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Regular News Section */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedCategory === 'all' ? 'Latest News' : `${selectedCategory} News`}
            </h2>
            <p className="text-gray-600">{regularNews.length} articles found</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularNews.map((item) => (
              <Link key={item.id} href={`/news-panel/${item.slug}`}>
                <Card className="hover:shadow-xl transition-shadow cursor-pointer h-full overflow-hidden">
                  <div className="relative h-48 bg-linear-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                    <span className="text-white text-5xl opacity-20">📰</span>
                  </div>
                  <div className="p-5">
                    <Badge className="mb-3 bg-blue-600">{item.category}</Badge>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {item.excerpt}
                    </p>
                    <div className="flex flex-col gap-2 text-xs text-gray-500">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <Calendar size={12} />
                          <span>{new Date(item.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye size={12} />
                          <span>{item.views.toLocaleString()} views</span>
                        </div>
                      </div>
                      <p className="text-gray-600">By {item.author}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-8">
            <Button variant="outline" disabled>Previous</Button>
            <Button variant="outline" className="bg-blue-600 text-white">1</Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">3</Button>
            <Button variant="outline">Next</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
