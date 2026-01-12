'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  MapPin, Star, Phone, Mail, Globe, Calendar, Users, 
  Award, TrendingUp, Building2, BookOpen, GraduationCap 
} from 'lucide-react';

export default function CollegeDetailPage({ params }: { params: { slug: string } }) {

  // Dummy college data
  const college = {
    id: 1,
    slug: params.slug,
    name: 'Indian Institute of Technology Delhi',
    shortName: 'IIT Delhi',
    location: 'Hauz Khas, New Delhi, Delhi - 110016',
    rating: 4.8,
    reviewCount: 2543,
    type: 'Government',
    established: 1961,
    nirf_rank: 2,
    fees: '₹2.5L/year',
    description: 'IIT Delhi is one of the premier engineering institutions in India. Established in 1961, the institute has been at the forefront of engineering education and research. It offers undergraduate, postgraduate, and doctoral programs in various disciplines.',
    website: 'https://home.iitd.ac.in',
    email: 'info@admin.iitd.ac.in',
    phone: '+91-11-2659-1749',
    
    stats: {
      students: 8500,
      faculty: 850,
      campusSize: '320 acres',
      courses: 120,
    },

    highlights: [
      'NIRF Rank #2 in Engineering',
      'NAAC A++ Accredited',
      'Approved by AICTE, UGC',
      '95% Placement Rate',
      'International Collaborations',
      'State-of-the-art Facilities',
    ],

    courses: [
      { name: 'B.Tech Computer Science', duration: '4 years', fees: '₹2.5L/year', seats: 120 },
      { name: 'B.Tech Electrical Engineering', duration: '4 years', fees: '₹2.5L/year', seats: 110 },
      { name: 'B.Tech Mechanical Engineering', duration: '4 years', fees: '₹2.5L/year', seats: 130 },
      { name: 'M.Tech Computer Science', duration: '2 years', fees: '₹2.8L/year', seats: 80 },
      { name: 'MBA', duration: '2 years', fees: '₹3L/year', seats: 60 },
    ],

    admission: {
      entrance: ['JEE Advanced', 'GATE', 'CAT'],
      process: 'Admission is based on JEE Advanced rank for B.Tech programs, GATE score for M.Tech, and CAT score for MBA.',
      eligibility: 'Must have passed 10+2 with Physics, Chemistry, and Mathematics for B.Tech',
      dates: {
        applicationStart: 'April 2026',
        applicationEnd: 'June 2026',
        examDate: 'May 2026',
        resultDate: 'July 2026',
      },
    },

    placements: {
      averagePackage: '₹18.5 LPA',
      highestPackage: '₹1.2 Cr',
      placementRate: 95,
      topRecruiters: ['Google', 'Microsoft', 'Amazon', 'Goldman Sachs', 'Intel', 'Samsung'],
    },

    facilities: [
      'Modern Laboratories',
      'Central Library with 4L+ books',
      'Sports Complex',
      'Hostel Accommodation',
      'Medical Center',
      'Cafeteria',
      'Auditorium',
      'Research Centers',
    ],

    studentReviews: [
      {
        id: 1,
        name: 'Rahul Sharma',
        course: 'B.Tech CSE',
        batch: '2020-2024',
        rating: 5,
        title: 'Excellent Infrastructure and Faculty',
        review: 'IIT Delhi has world-class infrastructure and highly qualified faculty. The research opportunities and industry exposure are exceptional.',
        date: '2025-12-15',
      },
      {
        id: 2,
        name: 'Priya Singh',
        course: 'M.Tech EE',
        batch: '2021-2023',
        rating: 4,
        title: 'Great for Research',
        review: 'The research facilities are top-notch. Faculty members are very supportive. The campus life is vibrant with lots of activities.',
        date: '2025-11-20',
      },
      {
        id: 3,
        name: 'Amit Patel',
        course: 'B.Tech ME',
        batch: '2019-2023',
        rating: 5,
        title: 'Best Decision Ever',
        review: 'Choosing IIT Delhi was the best decision. Great placements, amazing peer group, and endless opportunities.',
        date: '2025-10-10',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-linear-to-r from-blue-600 to-blue-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* College Logo */}
            <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center shrink-0">
              <span className="text-blue-600 text-3xl font-bold">IIT</span>
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <h1 className="text-3xl md:text-4xl font-bold">{college.name}</h1>
                {college.nirf_rank && (
                  <Badge className="bg-orange-500 text-lg px-3 py-1">
                    NIRF #{college.nirf_rank}
                  </Badge>
                )}
              </div>
              
              <div className="flex items-center gap-2 mb-4">
                <MapPin size={18} />
                <span className="text-blue-100">{college.location}</span>
              </div>

              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Star className="text-yellow-400 fill-yellow-400" size={18} />
                  <span className="font-semibold">{college.rating}</span>
                  <span className="text-blue-200">({college.reviewCount} reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>Est. {college.established}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 size={18} />
                  <span>{college.type}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Button className="bg-orange-500 hover:bg-orange-600 w-full md:w-auto">
                Apply Now
              </Button>
              <Button variant="outline" className="bg-white text-blue-600 w-full md:w-auto">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Users className="mx-auto mb-2 text-blue-600" size={24} />
              <p className="text-2xl font-bold text-gray-900">{college.stats.students}</p>
              <p className="text-sm text-gray-600">Students</p>
            </div>
            <div className="text-center">
              <GraduationCap className="mx-auto mb-2 text-green-600" size={24} />
              <p className="text-2xl font-bold text-gray-900">{college.stats.faculty}</p>
              <p className="text-sm text-gray-600">Faculty</p>
            </div>
            <div className="text-center">
              <BookOpen className="mx-auto mb-2 text-purple-600" size={24} />
              <p className="text-2xl font-bold text-gray-900">{college.stats.courses}</p>
              <p className="text-sm text-gray-600">Courses</p>
            </div>
            <div className="text-center">
              <TrendingUp className="mx-auto mb-2 text-orange-600" size={24} />
              <p className="text-2xl font-bold text-gray-900">{college.placements.placementRate}%</p>
              <p className="text-sm text-gray-600">Placement</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-5 mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="courses">Courses</TabsTrigger>
                <TabsTrigger value="admission">Admission</TabsTrigger>
                <TabsTrigger value="placements">Placements</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
                <Card className="p-6 mb-6">
                  <h2 className="text-2xl font-bold mb-4">About {college.shortName}</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">{college.description}</p>
                  
                  <h3 className="text-xl font-bold mb-3 mt-6">Highlights</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {college.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Award className="text-blue-600 shrink-0 mt-1" size={16} />
                        <span className="text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold mb-3 mt-6">Facilities</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {college.facilities.map((facility, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-blue-600 rounded-full" />
                        {facility}
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="courses">
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Courses Offered</h2>
                  <div className="space-y-4">
                    {college.courses.map((course, index) => (
                      <div key={index} className="border-b pb-4 last:border-0">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-lg font-semibold">{course.name}</h3>
                            <p className="text-sm text-gray-600">Duration: {course.duration}</p>
                          </div>
                          <Badge variant="secondary">{course.seats} seats</Badge>
                        </div>
                        <p className="text-blue-600 font-semibold">{course.fees}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="admission">
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Admission Process</h2>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Entrance Exams</h3>
                    <div className="flex flex-wrap gap-2">
                      {college.admission.entrance.map((exam, index) => (
                        <Badge key={index} className="bg-blue-600">{exam}</Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Eligibility</h3>
                    <p className="text-gray-700">{college.admission.eligibility}</p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Admission Process</h3>
                    <p className="text-gray-700">{college.admission.process}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Important Dates</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Application Start</p>
                        <p className="font-semibold">{college.admission.dates.applicationStart}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Application End</p>
                        <p className="font-semibold">{college.admission.dates.applicationEnd}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Exam Date</p>
                        <p className="font-semibold">{college.admission.dates.examDate}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Result Date</p>
                        <p className="font-semibold">{college.admission.dates.resultDate}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="placements">
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Placements 2025</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <p className="text-3xl font-bold text-blue-600">{college.placements.averagePackage}</p>
                      <p className="text-sm text-gray-600 mt-1">Average Package</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <p className="text-3xl font-bold text-green-600">{college.placements.highestPackage}</p>
                      <p className="text-sm text-gray-600 mt-1">Highest Package</p>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <p className="text-3xl font-bold text-orange-600">{college.placements.placementRate}%</p>
                      <p className="text-sm text-gray-600 mt-1">Placement Rate</p>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold mb-3">Top Recruiters</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {college.placements.topRecruiters.map((recruiter, index) => (
                      <div key={index} className="border rounded-lg p-3 text-center">
                        <p className="font-medium">{recruiter}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="reviews">
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Student Reviews</h2>
                  <div className="space-y-6">
                    {college.studentReviews.map((review) => (
                      <div key={review.id} className="border-b pb-6 last:border-0">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                            <span className="text-blue-600 font-bold text-lg">
                              {review.name.charAt(0)}
                            </span>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <div>
                                <h4 className="font-semibold">{review.name}</h4>
                                <p className="text-sm text-gray-600">{review.course} | {review.batch}</p>
                              </div>
                              <div className="flex gap-1">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                                ))}
                              </div>
                            </div>
                            <h5 className="font-medium mb-2">{review.title}</h5>
                            <p className="text-gray-700 text-sm">{review.review}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full mt-6" variant="outline">
                    Load More Reviews
                  </Button>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <Card className="p-6">
              <h3 className="text-lg font-bold mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Phone size={18} className="text-blue-600 mt-1 shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <a href={`tel:${college.phone}`} className="text-sm font-medium hover:text-blue-600">
                      {college.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-blue-600 mt-1 shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <a href={`mailto:${college.email}`} className="text-sm font-medium hover:text-blue-600">
                      {college.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe size={18} className="text-blue-600 mt-1 shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600">Website</p>
                    <a 
                      href={college.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-medium hover:text-blue-600"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button className="w-full bg-orange-500 hover:bg-orange-600">
                  Apply Now
                </Button>
                <Button className="w-full" variant="outline">
                  Download Brochure
                </Button>
                <Button className="w-full" variant="outline">
                  Compare Colleges
                </Button>
                <Button className="w-full" variant="outline">
                  Write a Review
                </Button>
              </div>
            </Card>

            {/* Fees Card */}
            <Card className="p-6 bg-blue-50">
              <h3 className="text-lg font-bold mb-2">Annual Fees</h3>
              <p className="text-3xl font-bold text-blue-600">{college.fees}</p>
              <p className="text-sm text-gray-600 mt-2">For B.Tech programs</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
