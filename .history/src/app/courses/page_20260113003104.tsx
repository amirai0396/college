'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, GraduationCap, Clock, TrendingUp, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedStream, setSelectedStream] = useState('all');

  // Dummy courses data
  const courses = [
    {
      id: 1,
      slug: 'mba',
      name: 'MBA',
      fullName: 'Master of Business Administration',
      level: 'PG',
      stream: 'Management',
      duration: '2 years',
      avgFees: '₹8-25L',
      avgSalary: '₹8-18 LPA',
      totalColleges: 1200,
      topColleges: ['IIM-A', 'IIM-B', 'IIM-C', 'XLRI', 'FMS'],
      description: 'MBA is a postgraduate degree in business administration focusing on management skills.',
    },
    {
      id: 2,
      slug: 'btech',
      name: 'B.Tech',
      fullName: 'Bachelor of Technology',
      level: 'UG',
      stream: 'Engineering',
      duration: '4 years',
      avgFees: '₹2-10L',
      avgSalary: '₹4-15 LPA',
      totalColleges: 3500,
      topColleges: ['IIT-D', 'IIT-B', 'IIT-M', 'BITS', 'NIT'],
      description: 'B.Tech is an undergraduate engineering degree with specializations in various fields.',
    },
    {
      id: 3,
      slug: 'mbbs',
      name: 'MBBS',
      fullName: 'Bachelor of Medicine, Bachelor of Surgery',
      level: 'UG',
      stream: 'Medical',
      duration: '5.5 years',
      avgFees: '₹10-80L',
      avgSalary: '₹6-12 LPA',
      totalColleges: 600,
      topColleges: ['AIIMS', 'CMC', 'JIPMER', 'MAMC', 'AFMC'],
      description: 'MBBS is the primary medical degree for aspiring doctors in India.',
    },
    {
      id: 4,
      slug: 'llb',
      name: 'LLB',
      fullName: 'Bachelor of Laws',
      level: 'UG',
      stream: 'Law',
      duration: '3 years',
      avgFees: '₹1-5L',
      avgSalary: '₹3-10 LPA',
      totalColleges: 800,
      topColleges: ['NLSIU', 'NALSAR', 'NLU-D', 'NLIU', 'GLC'],
      description: 'LLB is a professional law degree preparing students for legal practice.',
    },
    {
      id: 5,
      slug: 'bba',
      name: 'BBA',
      fullName: 'Bachelor of Business Administration',
      level: 'UG',
      stream: 'Management',
      duration: '3 years',
      avgFees: '₹2-8L',
      avgSalary: '₹3-8 LPA',
      totalColleges: 2000,
      topColleges: ['Shaheed Sukhdev', 'NMIMS', 'Symbiosis', 'Christ', 'IP'],
      description: 'BBA is an undergraduate business management degree.',
    },
    {
      id: 6,
      slug: 'bsc',
      name: 'B.Sc',
      fullName: 'Bachelor of Science',
      level: 'UG',
      stream: 'Science',
      duration: '3 years',
      avgFees: '₹50K-3L',
      avgSalary: '₹3-6 LPA',
      totalColleges: 4000,
      topColleges: ['St. Stephens', 'LSR', 'Hindu', 'Loyola', 'Fergusson'],
      description: 'B.Sc is an undergraduate science degree with various specializations.',
    },
    {
      id: 7,
      slug: 'bcom',
      name: 'B.Com',
      fullName: 'Bachelor of Commerce',
      level: 'UG',
      stream: 'Commerce',
      duration: '3 years',
      avgFees: '₹30K-2L',
      avgSalary: '₹3-7 LPA',
      totalColleges: 3500,
      topColleges: ['SRCC', 'Hindu', 'LSR', 'HR', 'St. Xaviers'],
      description: 'B.Com is an undergraduate degree in commerce and business studies.',
    },
    {
      id: 8,
      slug: 'mtech',
      name: 'M.Tech',
      fullName: 'Master of Technology',
      level: 'PG',
      stream: 'Engineering',
      duration: '2 years',
      avgFees: '₹2-6L',
      avgSalary: '₹6-15 LPA',
      totalColleges: 1800,
      topColleges: ['IIT-B', 'IIT-D', 'IIT-M', 'IISc', 'IIIT'],
      description: 'M.Tech is a postgraduate engineering degree for specialization.',
    },
    {
      id: 9,
      slug: 'bca',
      name: 'BCA',
      fullName: 'Bachelor of Computer Applications',
      level: 'UG',
      stream: 'Computer Applications',
      duration: '3 years',
      avgFees: '₹1-5L',
      avgSalary: '₹3-8 LPA',
      totalColleges: 2500,
      topColleges: ['Christ', 'Symbiosis', 'IIFA', 'Presidency', 'Madras'],
      description: 'BCA is an undergraduate degree in computer applications and IT.',
    },
    {
      id: 10,
      slug: 'ba',
      name: 'BA',
      fullName: 'Bachelor of Arts',
      level: 'UG',
      stream: 'Arts',
      duration: '3 years',
      avgFees: '₹20K-2L',
      avgSalary: '₹2.5-6 LPA',
      totalColleges: 5000,
      topColleges: ['St. Stephens', 'LSR', 'Hindu', 'Presidency', 'Ramjas'],
      description: 'BA is an undergraduate arts degree with diverse specializations.',
    },
  ];

  const levels = ['All', 'UG', 'PG', 'Diploma', 'PhD'];
  const streams = ['All', 'Engineering', 'Management', 'Medical', 'Law', 'Science', 'Commerce', 'Arts', 'Computer Applications'];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.fullName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    const matchesStream = selectedStream === 'all' || course.stream === selectedStream;
    return matchesSearch && matchesLevel && matchesStream;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-linear-to-r from-green-600 to-teal-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Explore Courses</h1>
          <p className="text-lg text-green-100 mb-6">
            Find the perfect course to build your dream career
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="Search courses by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 bg-white text-gray-900"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filters */}
        <div className="mb-8 space-y-4">
          {/* Level Filter */}
          <div>
            <h3 className="text-sm font-semibold mb-3 text-gray-700">Level</h3>
            <div className="flex flex-wrap gap-3">
              {levels.map((level) => (
                <button
                  key={level}
                  onClick={() => setSelectedLevel(level.toLowerCase())}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    selectedLevel === level.toLowerCase()
                      ? 'bg-green-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  } shadow-md`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* Stream Filter */}
          <div>
            <h3 className="text-sm font-semibold mb-3 text-gray-700">Stream</h3>
            <div className="flex flex-wrap gap-3">
              {streams.map((stream) => (
                <button
                  key={stream}
                  onClick={() => setSelectedStream(stream.toLowerCase())}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    selectedStream === stream.toLowerCase()
                      ? 'bg-teal-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  } shadow-md`}
                >
                  {stream}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {filteredCourses.length} Courses Found
          </h2>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <Link key={course.id} href={`/course/${course.slug}`}>
              <Card className="hover:shadow-xl transition-shadow cursor-pointer h-full">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{course.name}</h3>
                      <p className="text-sm text-gray-600">{course.fullName}</p>
                    </div>
                    <Badge className="bg-green-600 shrink-0">{course.level}</Badge>
                  </div>

                  <p className="text-sm text-gray-700 mb-4 line-clamp-2">{course.description}</p>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <Clock size={16} className="text-gray-500" />
                        <span className="text-gray-700">Duration</span>
                      </div>
                      <span className="font-semibold">{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <GraduationCap size={16} className="text-gray-500" />
                        <span className="text-gray-700">Colleges</span>
                      </div>
                      <span className="font-semibold">{course.totalColleges}+</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <TrendingUp size={16} className="text-gray-500" />
                        <span className="text-gray-700">Avg Salary</span>
                      </div>
                      <span className="font-semibold text-green-600">{course.avgSalary}</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <p className="text-xs text-gray-600 mb-2">Average Fees</p>
                    <p className="text-lg font-bold text-blue-600 mb-3">{course.avgFees}</p>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600" size="sm">
                      View Details <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-8">
          <Button variant="outline" disabled>Previous</Button>
          <Button variant="outline" className="bg-green-600 text-white">1</Button>
          <Button variant="outline">2</Button>
          <Button variant="outline">3</Button>
          <Button variant="outline">Next</Button>
        </div>
      </div>
    </div>
  );
}
