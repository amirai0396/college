'use client';

import { CheckCircle, Search, Users, Award } from 'lucide-react';

export default function WhyCollegeChaloSection() {
  const features = [
    {
      icon: Search,
      title: 'Easy College Search',
      description: 'Find your perfect college from 20,000+ options with advanced filters and personalized recommendations.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: CheckCircle,
      title: 'Verified Information',
      description: 'Get authentic and updated information about colleges, courses, fees, and admission processes.',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Users,
      title: 'Expert Counselling',
      description: 'Connect with experienced counsellors who guide you through every step of your admission journey.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Award,
      title: 'Best Rankings',
      description: 'Compare colleges based on NIRF, NAAC rankings, placements, and student reviews.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why CollegeChalo?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We simplify your college search and admission process with comprehensive information and expert guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <div className={`inline-flex p-3 rounded-lg ${feature.bgColor} mb-4`}>
                  <Icon className={feature.color} size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
