'use client';

import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Star, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function TopCollegesSection() {
  const colleges = [
    {
      id: 1,
      name: 'IIT Delhi',
      location: 'New Delhi',
      rating: 4.8,
      reviews: 2500,
      type: 'Government',
      stream: 'Engineering',
      fees: '₹2.5L/year',
      image: '/images/colleges/iit-delhi.jpg',
    },
    {
      id: 2,
      name: 'IIM Ahmedabad',
      location: 'Ahmedabad',
      rating: 4.9,
      reviews: 3200,
      type: 'Government',
      stream: 'Management',
      fees: '₹23L (Total)',
      image: '/images/colleges/iim-ahmedabad.jpg',
    },
    {
      id: 3,
      name: 'AIIMS Delhi',
      location: 'New Delhi',
      rating: 4.7,
      reviews: 1800,
      type: 'Government',
      stream: 'Medical',
      fees: '₹1.5K/year',
      image: '/images/colleges/aiims-delhi.jpg',
    },
    {
      id: 4,
      name: 'NLU Delhi',
      location: 'New Delhi',
      rating: 4.6,
      reviews: 1200,
      type: 'Government',
      stream: 'Law',
      fees: '₹2L/year',
      image: '/images/colleges/nlu-delhi.jpg',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Top Colleges of India
            </h2>
            <p className="text-gray-600">Explore premier institutions across the country</p>
          </div>
          <Link
            href="/colleges"
            className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
          >
            View All <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {colleges.map((college) => (
            <Link key={college.id} href={`/colleges/${college.name.toLowerCase().replace(/\s+/g, '-')}`}>
              <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer h-full">
                <div className="relative h-48 bg-gray-200">
                  {/* Placeholder for college image */}
                  <div className="absolute inset-0 bg-linear-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                    <span className="text-white text-4xl font-bold opacity-30">
                      {college.name.split(' ')[0]}
                    </span>
                  </div>
                  <Badge className="absolute top-3 right-3 bg-white text-gray-900">
                    {college.type}
                  </Badge>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">
                    {college.name}
                  </h3>
                  <div className="flex items-center gap-1 text-sm text-gray-600 mb-2">
                    <MapPin size={14} />
                    <span>{college.location}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star size={14} className="text-yellow-500 fill-yellow-500" />
                      <span className="font-semibold text-sm">{college.rating}</span>
                    </div>
                    <span className="text-xs text-gray-500">({college.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {college.stream}
                    </Badge>
                    <span className="text-sm font-semibold text-blue-600">{college.fees}</span>
                  </div>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600" size="sm">
                    Apply Now
                  </Button>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
