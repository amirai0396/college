'use client';

import { GraduationCap, BookOpen, FileText, Users } from 'lucide-react';

export default function StatsSection() {
  const stats = [
    {
      icon: GraduationCap,
      count: '20,000+',
      label: 'Colleges',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: BookOpen,
      count: '500,000+',
      label: 'Courses',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: FileText,
      count: '500,000+',
      label: 'Exams',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      icon: Users,
      count: '2,000+',
      label: 'Counsellors',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className={`inline-flex p-4 rounded-full ${stat.bgColor} mb-4`}>
                  <Icon className={stat.color} size={32} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.count}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
