'use client';

import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Rahul Sharma',
      college: 'IIT Delhi',
      course: 'B.Tech Computer Science',
      rating: 5,
      review: 'CollegeChalo helped me find my dream college. The detailed information and expert guidance made my admission process smooth and stress-free.',
      image: '',
    },
    {
      id: 2,
      name: 'Priya Singh',
      college: 'IIM Bangalore',
      course: 'MBA',
      rating: 5,
      review: 'The college comparison tool is amazing! I could easily compare different MBA colleges and make an informed decision. Highly recommended!',
      image: '',
    },
    {
      id: 3,
      name: 'Amit Patel',
      college: 'AIIMS Mumbai',
      course: 'MBBS',
      rating: 5,
      review: 'Found all the information I needed about medical colleges in one place. The counsellors were very helpful throughout my admission journey.',
      image: '',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Students Believe in Us
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Hear from thousands of students who found their perfect college with CollegeChalo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.college}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                {testimonial.review}
              </p>
              <p className="text-xs text-gray-500">{testimonial.course}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
