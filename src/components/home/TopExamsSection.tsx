'use client';

import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

export default function TopExamsSection() {
  const exams = [
    { name: 'CAT', fullName: 'Common Admission Test', category: 'Management', participants: '2.5L+' },
    { name: 'GATE', fullName: 'Graduate Aptitude Test', category: 'Engineering', participants: '9L+' },
    { name: 'JEE Main', fullName: 'Joint Entrance Exam', category: 'Engineering', participants: '12L+' },
    { name: 'JEE Advanced', fullName: 'Joint Entrance Exam Advanced', category: 'Engineering', participants: '2L+' },
    { name: 'NEET', fullName: 'National Eligibility Entrance Test', category: 'Medical', participants: '18L+' },
    { name: 'CLAT', fullName: 'Common Law Admission Test', category: 'Law', participants: '80K+' },
    { name: 'XAT', fullName: 'Xavier Aptitude Test', category: 'Management', participants: '90K+' },
    { name: 'NMAT', fullName: 'NMIMS Management Aptitude Test', category: 'Management', participants: '80K+' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Top Exams
            </h2>
            <p className="text-gray-600">Explore popular entrance exams across India</p>
          </div>
          <Link
            href="/exams"
            className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
          >
            View All <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {exams.map((exam, index) => (
            <Link key={index} href={`/exam/${exam.name.toLowerCase().replace(' ', '-')}`}>
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-bold text-gray-900">{exam.name}</h3>
                    <Badge variant="secondary" className="bg-blue-50 text-blue-600">
                      {exam.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-3 grow">{exam.fullName}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Participants: {exam.participants}</span>
                    <ArrowRight size={16} className="text-gray-400" />
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
