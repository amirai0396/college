import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Target, Users, Award, TrendingUp, 
  Heart, Shield, Lightbulb, Globe 
} from 'lucide-react';

export default function AboutUsPage() {
  const stats = [
    { label: 'Colleges Listed', value: '20,000+', icon: Award },
    { label: 'Students Helped', value: '5 Million+', icon: Users },
    { label: 'Courses Available', value: '500,000+', icon: TrendingUp },
    { label: 'Expert Counsellors', value: '2,000+', icon: Heart },
  ];

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To simplify the college search and admission process for every student in India, making quality education accessible to all.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Lightbulb,
      title: 'Our Vision',
      description: 'To become India\'s most trusted platform for educational guidance, helping millions of students make informed decisions about their future.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Shield,
      title: 'Our Values',
      description: 'Transparency, authenticity, and student-first approach guide everything we do. We believe in providing verified and up-to-date information.',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Globe,
      title: 'Our Reach',
      description: 'With presence across all states in India, we connect students with the best colleges nationwide, breaking geographical barriers.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
  ];

  const team = [
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Founder & CEO',
      description: 'Former professor with 20+ years in education sector',
      image: '',
    },
    {
      name: 'Priya Sharma',
      role: 'Chief Technology Officer',
      description: 'IIT alumna, building tech for education',
      image: '',
    },
    {
      name: 'Amit Verma',
      role: 'Head of Counselling',
      description: 'Career counsellor helping 10,000+ students',
      image: '',
    },
    {
      name: 'Sneha Patel',
      role: 'Content Head',
      description: 'Education journalist with 15 years experience',
      image: '',
    },
  ];

  const milestones = [
    { year: '2018', event: 'CollegeChalo founded with 100 colleges' },
    { year: '2019', event: 'Reached 5,000 colleges and 1 million users' },
    { year: '2020', event: 'Launched mobile app and expert counselling' },
    { year: '2022', event: 'Crossed 10,000 colleges and 3 million users' },
    { year: '2024', event: 'Expanded to 20,000 colleges nationwide' },
    { year: '2026', event: '5 million+ students and growing strong' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-linear-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About CollegeChalo</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Because We Make Your Educational Journey Simple. Empowering students to find their dream college since 2018.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 -mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="p-6 text-center bg-white shadow-lg">
                <Icon className="mx-auto mb-3 text-blue-600" size={32} />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Our Story */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
          <Card className="p-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              CollegeChalo was born out of a simple observation - finding the right college in India is unnecessarily complicated. With thousands of colleges, countless entrance exams, and conflicting information everywhere, students and parents often feel overwhelmed.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              In 2018, we set out to change this. We started with a mission to create a single, reliable platform where students could find authentic information about every college in India. What began as a small database of 100 colleges has now grown into India&apos;s largest college discovery platform.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Today, CollegeChalo helps over 5 million students every year make informed decisions about their higher education. We provide verified information about 20,000+ colleges, 500,000+ courses, and countless career opportunities. Our team of expert counsellors has guided thousands of students to their dream colleges.
            </p>
          </Card>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Drives Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
                  <div className={`inline-flex p-3 rounded-lg ${value.bgColor} mb-4`}>
                    <Icon className={value.color} size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6">
                <div className="shrink-0">
                  <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {milestone.year}
                  </div>
                </div>
                <Card className="flex-1 p-6">
                  <p className="text-gray-700">{milestone.event}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-blue-600 text-3xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <Badge className="mb-3 bg-blue-600">{member.role}</Badge>
                <p className="text-sm text-gray-600">{member.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-linear-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Dream College?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join millions of students who trust CollegeChalo for their educational journey
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/colleges"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Browse Colleges
            </a>
            <a
              href="/contact-us"
              className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
