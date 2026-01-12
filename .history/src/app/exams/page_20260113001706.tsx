'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Calendar, Users, TrendingUp, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ExamsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Dummy exam data
  const exams = [
    {
      id: 1,
      slug: 'cat',
      name: 'CAT',
      fullName: 'Common Admission Test',
      category: 'Management',
      conductedBy: 'IIMs',
      examMode: 'Online',
      participants: '2.5 Lakh+',
      applicationDate: 'August 2026',
      examDate: 'November 2026',
      colleges: 1200,
    },
    {
      id: 2,
      slug: 'gate',
      name: 'GATE',
      fullName: 'Graduate Aptitude Test in Engineering',
      category: 'Engineering',
      conductedBy: 'IISc, IITs',
      examMode: 'Online',
      participants: '9 Lakh+',
      applicationDate: 'September 2026',
      examDate: 'February 2027',
      colleges: 850,
    },
    {
      id: 3,
      slug: 'jee-main',
      name: 'JEE Main',
      fullName: 'Joint Entrance Examination Main',
      category: 'Engineering',
      conductedBy: 'NTA',
      examMode: 'Online',
      participants: '12 Lakh+',
      applicationDate: 'March 2026',
      examDate: 'April 2026',
      colleges: 2500,
    },
    {
      id: 4,
      slug: 'jee-advanced',
      name: 'JEE Advanced',
      fullName: 'Joint Entrance Examination Advanced',
      category: 'Engineering',
      conductedBy: 'IITs',
      examMode: 'Online',
      participants: '2 Lakh+',
      applicationDate: 'May 2026',
      examDate: 'May 2026',
      colleges: 23,
    },
    {
      id: 5,
      slug: 'neet',
      name: 'NEET',
      fullName: 'National Eligibility cum Entrance Test',
      category: 'Medical',
      conductedBy: 'NTA',
      examMode: 'Offline',
      participants: '18 Lakh+',
      applicationDate: 'March 2026',
      examDate: 'May 2026',
      colleges: 1800,
    },
    {
      id: 6,
      slug: 'clat',
      name: 'CLAT',
      fullName: 'Common Law Admission Test',
      category: 'Law',
      conductedBy: 'NLUs',
      examMode: 'Online',
      participants: '80 Thousand+',
      applicationDate: 'July 2026',
      examDate: 'December 2026',
      colleges: 24,
    },
    {
      id: 7,
      slug: 'xat',
      name: 'XAT',
      fullName: 'Xavier Aptitude Test',
      category: 'Management',
      conductedBy: 'XLRI',
      examMode: 'Online',
      participants: '90 Thousand+',
      applicationDate: 'August 2026',
      examDate: 'January 2027',
      colleges: 160,
    },
    {
      id: 8,
      slug: 'nmat',
      name: 'NMAT',
      fullName: 'NMIMS Management Aptitude Test',
      category: 'Management',
      conductedBy: 'GMAC',
      examMode: 'Online',
      participants: '80 Thousand+',
      applicationDate: 'August 2026',
      examDate: 'October 2026',
      colleges: 45,
    },
  ];

  const categories = ['All', 'Engineering', 'Management', 'Medical', 'Law'];

  const filteredExams = exams.filter((exam) => {
    const matchesSearch = exam.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         exam.fullName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || exam.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-linear-to-r from-purple-600 to-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Entrance Exams</h1>
          <p className="text-lg text-blue-100 mb-6">
            Explore all major entrance exams across India with complete details
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="Search exams by name..."
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

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {filteredExams.length} Exams Found
          </h2>
        </div>

        {/* Exams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExams.map((exam) => (
            <Link key={exam.id} href={`/exam/${exam.slug}`}>
              <Card className="hover:shadow-xl transition-shadow cursor-pointer h-full">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{exam.name}</h3>
                      <p className="text-sm text-gray-600">{exam.fullName}</p>
                    </div>
                    <Badge className="bg-blue-600">{exam.category}</Badge>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Building2 size={16} className="text-gray-500" />
                      <span className="text-gray-700">{exam.conductedBy}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users size={16} className="text-gray-500" />
                      <span className="text-gray-700">{exam.participants} Applicants</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <TrendingUp size={16} className="text-gray-500" />
                      <span className="text-gray-700">{exam.colleges} Colleges Accept</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500 mb-1">Application</p>
                        <p className="font-semibold text-gray-900">{exam.applicationDate}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 mb-1">Exam Date</p>
                        <p className="font-semibold text-gray-900">{exam.examDate}</p>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full mt-4 bg-orange-500 hover:bg-orange-600">
                    View Details
                  </Button>
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
  );
}

function Building2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
      <path d="M10 6h4" />
      <path d="M10 10h4" />
      <path d="M10 14h4" />
      <path d="M10 18h4" />
    </svg>
  );
}
