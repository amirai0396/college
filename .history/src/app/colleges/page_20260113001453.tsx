'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin, Star, Search, SlidersHorizontal } from 'lucide-react';
import Link from 'next/link';

interface College {
  id: number;
  slug: string;
  name: string;
  location: string;
  city: string;
  state: string;
  rating: number;
  reviews: number;
  type: string;
  stream: string;
  fees: string;
  established: number;
  nirf_rank?: number;
}

export default function CollegesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStream, setSelectedStream] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  // Dummy data
  const colleges: College[] = [
    {
      id: 1,
      slug: 'iit-delhi',
      name: 'Indian Institute of Technology Delhi',
      location: 'Hauz Khas, New Delhi',
      city: 'Delhi',
      state: 'Delhi',
      rating: 4.8,
      reviews: 2543,
      type: 'Government',
      stream: 'Engineering',
      fees: '₹2.5L/year',
      established: 1961,
      nirf_rank: 2,
    },
    {
      id: 2,
      slug: 'iit-bombay',
      name: 'Indian Institute of Technology Bombay',
      location: 'Powai, Mumbai',
      city: 'Mumbai',
      state: 'Maharashtra',
      rating: 4.9,
      reviews: 3210,
      type: 'Government',
      stream: 'Engineering',
      fees: '₹2.5L/year',
      established: 1958,
      nirf_rank: 1,
    },
    {
      id: 3,
      slug: 'iim-ahmedabad',
      name: 'Indian Institute of Management Ahmedabad',
      location: 'Vastrapur, Ahmedabad',
      city: 'Ahmedabad',
      state: 'Gujarat',
      rating: 4.9,
      reviews: 3450,
      type: 'Government',
      stream: 'Management',
      fees: '₹23L (Total)',
      established: 1961,
      nirf_rank: 1,
    },
    {
      id: 4,
      slug: 'aiims-delhi',
      name: 'All India Institute of Medical Sciences Delhi',
      location: 'Ansari Nagar, New Delhi',
      city: 'Delhi',
      state: 'Delhi',
      rating: 4.8,
      reviews: 1890,
      type: 'Government',
      stream: 'Medical',
      fees: '₹1,450/year',
      established: 1956,
      nirf_rank: 1,
    },
    {
      id: 5,
      slug: 'nlu-delhi',
      name: 'National Law University Delhi',
      location: 'Sector 14, Dwarka, New Delhi',
      city: 'Delhi',
      state: 'Delhi',
      rating: 4.6,
      reviews: 1245,
      type: 'Government',
      stream: 'Law',
      fees: '₹2L/year',
      established: 2008,
      nirf_rank: 1,
    },
    {
      id: 6,
      slug: 'bits-pilani',
      name: 'Birla Institute of Technology and Science Pilani',
      location: 'Pilani, Rajasthan',
      city: 'Pilani',
      state: 'Rajasthan',
      rating: 4.7,
      reviews: 2890,
      type: 'Private',
      stream: 'Engineering',
      fees: '₹4.5L/year',
      established: 1964,
      nirf_rank: 25,
    },
    {
      id: 7,
      slug: 'iim-bangalore',
      name: 'Indian Institute of Management Bangalore',
      location: 'Bannerghatta Road, Bangalore',
      city: 'Bangalore',
      state: 'Karnataka',
      rating: 4.9,
      reviews: 3120,
      type: 'Government',
      stream: 'Management',
      fees: '₹24L (Total)',
      established: 1973,
      nirf_rank: 2,
    },
    {
      id: 8,
      slug: 'delhi-university',
      name: 'University of Delhi',
      location: 'North Campus, Delhi',
      city: 'Delhi',
      state: 'Delhi',
      rating: 4.5,
      reviews: 5432,
      type: 'Government',
      stream: 'Arts',
      fees: '₹25K/year',
      established: 1922,
      nirf_rank: 11,
    },
  ];

  const streams = ['All', 'Engineering', 'Management', 'Medical', 'Law', 'Arts', 'Science'];

  const filteredColleges = colleges.filter((college) => {
    const matchesSearch = college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         college.city.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStream = selectedStream === 'all' || college.stream === selectedStream;
    return matchesSearch && matchesStream;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Find Your Dream College</h1>
          <p className="text-lg text-blue-100 mb-6">
            Explore 20,000+ colleges across India with detailed information
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="Search by college name, city, or course..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 bg-white text-gray-900"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-64 shrink-0">
            <div className="lg:hidden mb-4">
              <Button
                onClick={() => setShowFilters(!showFilters)}
                variant="outline"
                className="w-full"
              >
                <SlidersHorizontal size={20} className="mr-2" />
                Filters
              </Button>
            </div>

            <div className={`bg-white rounded-lg p-6 shadow-md ${showFilters ? 'block' : 'hidden lg:block'}`}>
              <h3 className="font-bold text-lg mb-4">Filters</h3>

              {/* Stream Filter */}
              <div className="mb-6">
                <h4 className="font-semibold text-sm mb-3">Stream</h4>
                <div className="space-y-2">
                  {streams.map((stream) => (
                    <button
                      key={stream}
                      onClick={() => setSelectedStream(stream.toLowerCase())}
                      className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                        selectedStream === stream.toLowerCase()
                          ? 'bg-blue-50 text-blue-600 font-medium'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      {stream}
                    </button>
                  ))}
                </div>
              </div>

              {/* Type Filter */}
              <div className="mb-6">
                <h4 className="font-semibold text-sm mb-3">Type</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" className="rounded" />
                    Government
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" className="rounded" />
                    Private
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" className="rounded" />
                    Deemed
                  </label>
                </div>
              </div>

              {/* Location Filter */}
              <div className="mb-6">
                <h4 className="font-semibold text-sm mb-3">Location</h4>
                <Input type="text" placeholder="Enter city..." className="text-sm" />
              </div>

              {/* Fees Range */}
              <div className="mb-6">
                <h4 className="font-semibold text-sm mb-3">Fees Range</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" className="rounded" />
                    Under ₹1L
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" className="rounded" />
                    ₹1L - ₹3L
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" className="rounded" />
                    ₹3L - ₹5L
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" className="rounded" />
                    Above ₹5L
                  </label>
                </div>
              </div>

              <Button className="w-full bg-orange-500 hover:bg-orange-600">
                Apply Filters
              </Button>
            </div>
          </aside>

          {/* Colleges Grid */}
          <main className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {filteredColleges.length} Colleges Found
              </h2>
              <select className="border rounded-md px-4 py-2 text-sm">
                <option>Sort by: Relevance</option>
                <option>Rating (High to Low)</option>
                <option>Fees (Low to High)</option>
                <option>NIRF Rank</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredColleges.map((college) => (
                <Link key={college.id} href={`/colleges/${college.slug}`}>
                  <Card className="hover:shadow-xl transition-shadow cursor-pointer h-full">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-2">
                            {college.name}
                          </h3>
                          <div className="flex items-center gap-1 text-sm text-gray-600 mb-2">
                            <MapPin size={14} />
                            <span>{college.location}</span>
                          </div>
                        </div>
                        {college.nirf_rank && (
                          <Badge className="bg-orange-500 shrink-0">
                            NIRF #{college.nirf_rank}
                          </Badge>
                        )}
                      </div>

                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex items-center gap-1">
                          <Star size={16} className="text-yellow-500 fill-yellow-500" />
                          <span className="font-semibold text-sm">{college.rating}</span>
                          <span className="text-xs text-gray-500">({college.reviews} reviews)</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="secondary" className="text-xs">
                          {college.type}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          {college.stream}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          Est. {college.established}
                        </Badge>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t">
                        <div>
                          <p className="text-xs text-gray-500">Fees</p>
                          <p className="text-sm font-bold text-blue-600">{college.fees}</p>
                        </div>
                        <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                          Apply Now
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
              <Button variant="outline" className="bg-blue-600 text-white">1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Next</Button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
