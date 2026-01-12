'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { GraduationCap, Clock, TrendingUp, BookOpen, Star, MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  // Dummy course data
  const course = {
    slug: params.slug,
    name: 'MBA',
    fullName: 'Master of Business Administration',
    level: 'PG',
    stream: 'Management',
    duration: '2 years',
    avgFees: '₹8-25 Lakhs',
    avgSalary: '₹8-18 LPA',
    totalColleges: 1200,
    rating: 4.5,
    description: 'Master of Business Administration (MBA) is a globally recognized postgraduate degree designed to develop management and leadership skills. The program covers various aspects of business including finance, marketing, human resources, operations, and strategy. MBA graduates are equipped with analytical, strategic thinking, and decision-making abilities essential for leading organizations.',
    eligibility: 'Bachelor\'s degree with minimum 50% marks. CAT/MAT/XAT entrance exam required.',
    specializations: [
      'Finance',
      'Marketing',
      'Human Resource',
      'Operations',
      'International Business',
      'Business Analytics',
      'Digital Marketing',
      'Entrepreneurship',
    ],
    syllabus: [
      {
        semester: 'Semester 1',
        subjects: [
          'Principles of Management',
          'Managerial Economics',
          'Financial Accounting',
          'Marketing Management',
          'Organizational Behaviour',
          'Business Communication',
        ],
      },
      {
        semester: 'Semester 2',
        subjects: [
          'Operations Management',
          'Human Resource Management',
          'Financial Management',
          'Business Research Methods',
          'Strategic Management',
          'Business Law',
        ],
      },
      {
        semester: 'Semester 3',
        subjects: [
          'Specialization Electives',
          'Corporate Finance',
          'International Business',
          'Project Management',
          'Summer Internship Project',
        ],
      },
      {
        semester: 'Semester 4',
        subjects: [
          'Advanced Specialization',
          'Business Strategy',
          'Leadership & Ethics',
          'Final Project/Dissertation',
          'Capstone Project',
        ],
      },
    ],
    topColleges: [
      {
        id: 1,
        name: 'IIM Ahmedabad',
        location: 'Ahmedabad, Gujarat',
        fees: '₹23 Lakhs',
        avgPackage: '₹25 LPA',
        rating: 4.8,
      },
      {
        id: 2,
        name: 'IIM Bangalore',
        location: 'Bangalore, Karnataka',
        fees: '₹24 Lakhs',
        avgPackage: '₹26 LPA',
        rating: 4.7,
      },
      {
        id: 3,
        name: 'IIM Calcutta',
        location: 'Kolkata, West Bengal',
        fees: '₹27 Lakhs',
        avgPackage: '₹28 LPA',
        rating: 4.7,
      },
      {
        id: 4,
        name: 'XLRI Jamshedpur',
        location: 'Jamshedpur, Jharkhand',
        fees: '₹25 Lakhs',
        avgPackage: '₹23 LPA',
        rating: 4.6,
      },
      {
        id: 5,
        name: 'FMS Delhi',
        location: 'New Delhi',
        fees: '₹2 Lakhs',
        avgPackage: '₹28 LPA',
        rating: 4.6,
      },
    ],
    careerProspects: [
      {
        role: 'Management Consultant',
        avgSalary: '₹10-25 LPA',
        description: 'Advise organizations on strategic and operational improvements.',
      },
      {
        role: 'Investment Banker',
        avgSalary: '₹15-30 LPA',
        description: 'Handle financial transactions, mergers, and acquisitions.',
      },
      {
        role: 'Marketing Manager',
        avgSalary: '₹8-20 LPA',
        description: 'Develop and execute marketing strategies for products/services.',
      },
      {
        role: 'Product Manager',
        avgSalary: '₹12-28 LPA',
        description: 'Oversee product development from conception to launch.',
      },
      {
        role: 'Business Analyst',
        avgSalary: '₹6-15 LPA',
        description: 'Analyze business processes and recommend improvements.',
      },
      {
        role: 'HR Manager',
        avgSalary: '₹7-18 LPA',
        description: 'Manage recruitment, training, and employee relations.',
      },
    ],
    entranceExams: [
      {
        name: 'CAT',
        fullName: 'Common Admission Test',
        conductedBy: 'IIMs',
      },
      {
        name: 'XAT',
        fullName: 'Xavier Aptitude Test',
        conductedBy: 'XLRI',
      },
      {
        name: 'MAT',
        fullName: 'Management Aptitude Test',
        conductedBy: 'AIMA',
      },
      {
        name: 'CMAT',
        fullName: 'Common Management Admission Test',
        conductedBy: 'NTA',
      },
      {
        name: 'SNAP',
        fullName: 'Symbiosis National Aptitude Test',
        conductedBy: 'Symbiosis',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-4xl font-bold text-gray-900">{course.name}</h1>
                <Badge className="bg-green-600">{course.level}</Badge>
              </div>
              <p className="text-lg text-gray-600 mb-4">{course.fullName}</p>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={20}
                      className={star <= course.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <span className="text-gray-700 font-semibold">{course.rating}/5</span>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Clock className="text-green-600" size={20} />
                  <span className="text-gray-700">{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="text-green-600" size={20} />
                  <span className="text-gray-700">{course.totalColleges}+ Colleges</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="text-green-600" size={20} />
                  <span className="text-gray-700">{course.avgSalary}</span>
                </div>
              </div>
            </div>

            <Card className="lg:w-80 shrink-0 bg-linear-to-br from-orange-50 to-orange-100">
              <div className="p-6">
                <h3 className="text-sm text-gray-600 mb-2">Average Course Fees</h3>
                <p className="text-3xl font-bold text-orange-600 mb-4">{course.avgFees}</p>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 mb-2">
                  Apply Now
                </Button>
                <Button variant="outline" className="w-full">
                  Download Brochure
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-5 mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="syllabus">Syllabus</TabsTrigger>
                <TabsTrigger value="colleges">Colleges</TabsTrigger>
                <TabsTrigger value="careers">Careers</TabsTrigger>
                <TabsTrigger value="exams">Exams</TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview">
                <Card className="mb-6">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-4">About {course.name}</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">{course.description}</p>

                    <h3 className="text-xl font-bold mb-3">Eligibility Criteria</h3>
                    <p className="text-gray-700 mb-6">{course.eligibility}</p>

                    <h3 className="text-xl font-bold mb-3">Specializations</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {course.specializations.map((spec, index) => (
                        <Badge key={index} variant="outline" className="justify-center py-2">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </TabsContent>

              {/* Syllabus Tab */}
              <TabsContent value="syllabus">
                <Card>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-6">Course Syllabus</h2>
                    <div className="space-y-6">
                      {course.syllabus.map((sem, index) => (
                        <div key={index}>
                          <h3 className="text-lg font-bold mb-3 text-green-600">{sem.semester}</h3>
                          <ul className="grid md:grid-cols-2 gap-3">
                            {sem.subjects.map((subject, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <BookOpen size={18} className="text-gray-500 shrink-0 mt-1" />
                                <span className="text-gray-700">{subject}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </TabsContent>

              {/* Colleges Tab */}
              <TabsContent value="colleges">
                <Card>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-6">Top Colleges Offering {course.name}</h2>
                    <div className="space-y-4">
                      {course.topColleges.map((college) => (
                        <Card key={college.id} className="hover:shadow-lg transition-shadow">
                          <div className="p-4">
                            <div className="flex justify-between items-start mb-3">
                              <div>
                                <h3 className="text-lg font-bold text-gray-900">{college.name}</h3>
                                <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                                  <MapPin size={16} />
                                  {college.location}
                                </div>
                              </div>
                              <div className="flex items-center gap-1">
                                <Star size={16} className="fill-yellow-400 text-yellow-400" />
                                <span className="font-semibold">{college.rating}</span>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mb-3">
                              <div>
                                <p className="text-sm text-gray-600">Total Fees</p>
                                <p className="text-lg font-bold text-blue-600">{college.fees}</p>
                              </div>
                              <div>
                                <p className="text-sm text-gray-600">Avg Package</p>
                                <p className="text-lg font-bold text-green-600">{college.avgPackage}</p>
                              </div>
                            </div>
                            <Button className="w-full bg-orange-500 hover:bg-orange-600" size="sm">
                              View College
                            </Button>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                </Card>
              </TabsContent>

              {/* Careers Tab */}
              <TabsContent value="careers">
                <Card>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-6">Career Prospects</h2>
                    <div className="space-y-4">
                      {course.careerProspects.map((career, index) => (
                        <Card key={index} className="bg-gradient-to-r from-green-50 to-teal-50">
                          <div className="p-4">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="text-lg font-bold text-gray-900">{career.role}</h3>
                              <Badge className="bg-green-600 shrink-0">{career.avgSalary}</Badge>
                            </div>
                            <p className="text-gray-700 text-sm">{career.description}</p>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                </Card>
              </TabsContent>

              {/* Exams Tab */}
              <TabsContent value="exams">
                <Card>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-6">Entrance Exams</h2>
                    <div className="space-y-4">
                      {course.entranceExams.map((exam, index) => (
                        <Card key={index} className="hover:shadow-lg transition-shadow">
                          <div className="p-4">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h3 className="text-xl font-bold text-gray-900">{exam.name}</h3>
                                <p className="text-gray-700">{exam.fullName}</p>
                              </div>
                              <Badge variant="outline">{exam.conductedBy}</Badge>
                            </div>
                            <Link href={`/exam/${exam.name.toLowerCase()}`}>
                              <Button className="w-full mt-3" variant="outline">
                                View Exam Details
                              </Button>
                            </Link>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <Card>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-4">Need Guidance?</h3>
                <div className="space-y-3">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <Phone size={18} className="mr-2" />
                    Call Us
                  </Button>
                  <Button className="w-full" variant="outline">
                    <Mail size={18} className="mr-2" />
                    Email Us
                  </Button>
                </div>
              </div>
            </Card>

            {/* Popular Streams */}
            <Card>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-4">Popular Streams</h3>
                <div className="space-y-2">
                  {['Engineering', 'Management', 'Medical', 'Law', 'Commerce', 'Arts'].map((stream) => (
                    <Link key={stream} href="/courses">
                      <Button variant="outline" className="w-full justify-start" size="sm">
                        {stream}
                      </Button>
                    </Link>
                  ))}
                </div>
              </div>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50">
              <div className="p-6">
                <h3 className="text-lg font-bold mb-4">Quick Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Total Colleges</span>
                    <span className="font-bold">{course.totalColleges}+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Duration</span>
                    <span className="font-bold">{course.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Level</span>
                    <span className="font-bold">{course.level}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Stream</span>
                    <span className="font-bold">{course.stream}</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
