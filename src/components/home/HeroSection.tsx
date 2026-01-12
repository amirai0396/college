'use client';

import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative bg-linear-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Find Your Dream College
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Because We Make Your Educational Journey Simple
          </p>
          
          {/* Search Bar */}
          <div className="bg-white rounded-lg shadow-2xl p-2 flex flex-col md:flex-row gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="Search colleges, courses, exams..."
                className="pl-10 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 h-12 text-gray-900"
              />
            </div>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 h-12 px-8">
              Search
            </Button>
          </div>

          {/* Quick Links */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
            <span className="text-blue-200">Popular Searches:</span>
            <button className="px-4 py-1 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
              Engineering Colleges
            </button>
            <button className="px-4 py-1 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
              MBA Colleges
            </button>
            <button className="px-4 py-1 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
              Medical Colleges
            </button>
            <button className="px-4 py-1 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
              CAT Exam
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
