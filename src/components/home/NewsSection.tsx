'use client';

import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, ArrowRight } from 'lucide-react';

export default function NewsSection() {
  const news = [
    {
      id: 1,
      title: 'IIT Admissions 2026: Application Process Begins for B.Tech Programs',
      excerpt: 'The Indian Institutes of Technology have announced the start of the admission process for the 2026 academic year...',
      category: 'Admission',
      date: '2026-01-10',
      image: '',
    },
    {
      id: 2,
      title: 'NEET 2026: Important Dates and Exam Pattern Updates',
      excerpt: 'National Testing Agency releases updated schedule and pattern for NEET 2026. Check important dates and changes...',
      category: 'Exam',
      date: '2026-01-09',
      image: '',
    },
    {
      id: 3,
      title: 'Top MBA Colleges Announce Record Placement Packages for 2025 Batch',
      excerpt: 'Leading business schools across India report impressive placement statistics with highest packages reaching new records...',
      category: 'Placement',
      date: '2026-01-08',
      image: '',
    },
    {
      id: 4,
      title: 'New Medical Colleges to Open Across India in 2026',
      excerpt: 'Government approves establishment of 50+ new medical colleges to increase MBBS seats and improve healthcare education...',
      category: 'Education Policy',
      date: '2026-01-07',
      image: '',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              What&apos;s New In The News
            </h2>
            <p className="text-gray-600">Stay updated with latest education news and updates</p>
          </div>
          <Link
            href="/news"
            className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
          >
            View All <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {news.map((item) => (
            <Link key={item.id} href={`/news-panel/${item.id}`}>
              <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer h-full">
                <div className="relative h-48 bg-linear-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <span className="text-white text-5xl font-bold opacity-20">📰</span>
                  <Badge className="absolute top-3 right-3 bg-white text-gray-900">
                    {item.category}
                  </Badge>
                </div>
                <div className="p-4">
                  <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Calendar size={12} />
                    <span>{new Date(item.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
