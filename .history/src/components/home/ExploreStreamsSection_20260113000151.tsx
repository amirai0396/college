'use client';

import Link from 'next/link';
import { GraduationCap, Briefcase, Heart, Scale, Microscope, Palette, Calculator, Pill } from 'lucide-react';

export default function ExploreStreamsSection() {
  const streams = [
    { id: 'engineering', name: 'Engineering', icon: GraduationCap, count: '5000+', color: 'bg-blue-500' },
    { id: 'management', name: 'Management', icon: Briefcase, count: '3000+', color: 'bg-purple-500' },
    { id: 'medical', name: 'Medical', icon: Heart, count: '2000+', color: 'bg-red-500' },
    { id: 'law', name: 'Law', icon: Scale, count: '1000+', color: 'bg-amber-500' },
    { id: 'science', name: 'Science', icon: Microscope, count: '4000+', color: 'bg-green-500' },
    { id: 'design', name: 'Design', icon: Palette, count: '800+', color: 'bg-pink-500' },
    { id: 'commerce', name: 'Commerce', icon: Calculator, count: '2500+', color: 'bg-indigo-500' },
    { id: 'pharmacy', name: 'Pharmacy', icon: Pill, count: '1200+', color: 'bg-teal-500' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore Your Future
          </h2>
          <p className="text-gray-600 text-lg">
            Choose your stream and discover the best colleges
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {streams.map((stream) => {
            const Icon = stream.icon;
            return (
              <Link
                key={stream.id}
                href={`/colleges/stream/${stream.id}`}
                className="group"
              >
                <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all cursor-pointer">
                  <div className={`${stream.color} p-4 rounded-full mb-3 group-hover:scale-110 transition-transform`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 text-center mb-1">
                    {stream.name}
                  </h3>
                  <p className="text-xs text-gray-500">{stream.count} colleges</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
