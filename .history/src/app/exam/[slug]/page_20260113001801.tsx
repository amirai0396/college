'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Calendar, Users, BookOpen, Clock, Award, FileText, 
  CheckCircle, Globe, Download 
} from 'lucide-react';

export default function ExamDetailPage({ params }: { params: { slug: string } }) {
  // Dummy exam data
  const exam = {
    id: 1,
    slug: params.slug,
    name: 'CAT',
    fullName: 'Common Admission Test',
    category: 'Management',
    conductedBy: 'Indian Institutes of Management (IIMs)',
    description: 'CAT is a computer-based test conducted by the IIMs for admission to MBA and other management programs. It is one of the most competitive management entrance exams in India.',
    
    examMode: 'Online (Computer Based Test)',
    examLanguage: 'English',
    examDuration: '2 Hours',
    totalQuestions: 66,
    totalMarks: 198,
    participants: '2.5 Lakh+',
    
    dates: {
      applicationStart: 'August 1, 2026',
      applicationEnd: 'September 15, 2026',
      examDate: 'November 28, 2026',
      resultDate: 'January 5, 2027',
    },
    
    fees: {
      general: '₹2,400',
      scst: '₹1,200',
    },
    
    eligibility: {
      qualification: 'Bachelor\'s Degree with minimum 50% marks (45% for SC/ST/PWD)',
      ageLimit: 'No age limit',
      attempts: 'No restriction on number of attempts',
    },
    
    pattern: {
      sections: [
        { name: 'Verbal Ability & Reading Comprehension', questions: 24, duration: '40 mins', marks: 72 },
        { name: 'Data Interpretation & Logical Reasoning', questions: 20, duration: '40 mins', marks: 60 },
        { name: 'Quantitative Ability', questions: 22, duration: '40 mins', marks: 66 },
      ],
      marking: '+3 for correct answer, -1 for incorrect answer',
    },
    
    syllabus: {
      'Verbal Ability & Reading Comprehension': [
        'Reading Comprehension',
        'Para Jumbles',
        'Para Summary',
        'Sentence Completion',
        'Word Usage',
      ],
      'Data Interpretation & Logical Reasoning': [
        'Data Interpretation',
        'Data Sufficiency',
        'Logical Reasoning',
        'Analytical Reasoning',
      ],
      'Quantitative Ability': [
        'Arithmetic',
        'Algebra',
        'Geometry',
        'Modern Mathematics',
        'Number System',
      ],
    },
    
    acceptingColleges: 1200,
    topColleges: [
      'IIM Ahmedabad',
      'IIM Bangalore',
      'IIM Calcutta',
      'IIM Lucknow',
      'IIM Kozhikode',
      'IIM Indore',
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-linear-to-r from-purple-600 to-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <h1 className="text-4xl md:text-5xl font-bold">{exam.name}</h1>
              <Badge className="bg-orange-500 text-lg px-4 py-1">{exam.category}</Badge>
            </div>
            <h2 className="text-2xl mb-4 text-blue-100">{exam.fullName}</h2>
            <p className="text-lg text-blue-100 mb-6">
              Conducted by: {exam.conductedBy}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Users className="mb-2" size={24} />
                <p className="text-sm text-blue-100">Participants</p>
                <p className="text-xl font-bold">{exam.participants}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Calendar className="mb-2" size={24} />
                <p className="text-sm text-blue-100">Exam Date</p>
                <p className="text-xl font-bold">Nov 2026</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <BookOpen className="mb-2" size={24} />
                <p className="text-sm text-blue-100">Questions</p>
                <p className="text-xl font-bold">{exam.totalQuestions}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Clock className="mb-2" size={24} />
                <p className="text-sm text-blue-100">Duration</p>
                <p className="text-xl font-bold">{exam.examDuration}</p>
              </div>
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
                <TabsTrigger value="dates">Dates</TabsTrigger>
                <TabsTrigger value="eligibility">Eligibility</TabsTrigger>
                <TabsTrigger value="pattern">Pattern</TabsTrigger>
                <TabsTrigger value="syllabus">Syllabus</TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-4">About {exam.name}</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">{exam.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="border-l-4 border-blue-600 pl-4">
                      <p className="text-sm text-gray-600">Exam Mode</p>
                      <p className="font-semibold">{exam.examMode}</p>
                    </div>
                    <div className="border-l-4 border-blue-600 pl-4">
                      <p className="text-sm text-gray-600">Language</p>
                      <p className="font-semibold">{exam.examLanguage}</p>
                    </div>
                    <div className="border-l-4 border-blue-600 pl-4">
                      <p className="text-sm text-gray-600">Total Questions</p>
                      <p className="font-semibold">{exam.totalQuestions}</p>
                    </div>
                    <div className="border-l-4 border-blue-600 pl-4">
                      <p className="text-sm text-gray-600">Total Marks</p>
                      <p className="font-semibold">{exam.totalMarks}</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3">Accepting Colleges</h3>
                  <p className="text-gray-700 mb-3">
                    {exam.acceptingColleges}+ colleges accept {exam.name} scores for admission
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exam.topColleges.map((college, index) => (
                      <Badge key={index} variant="secondary">{college}</Badge>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="dates">
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Important Dates 2026</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                      <Calendar className="text-blue-600 mt-1" size={24} />
                      <div>
                        <h4 className="font-semibold mb-1">Application Start Date</h4>
                        <p className="text-gray-700">{exam.dates.applicationStart}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-lg">
                      <Calendar className="text-orange-600 mt-1" size={24} />
                      <div>
                        <h4 className="font-semibold mb-1">Application End Date</h4>
                        <p className="text-gray-700">{exam.dates.applicationEnd}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
                      <Calendar className="text-green-600 mt-1" size={24} />
                      <div>
                        <h4 className="font-semibold mb-1">Exam Date</h4>
                        <p className="text-gray-700">{exam.dates.examDate}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
                      <Calendar className="text-purple-600 mt-1" size={24} />
                      <div>
                        <h4 className="font-semibold mb-1">Result Date</h4>
                        <p className="text-gray-700">{exam.dates.resultDate}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="eligibility">
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Eligibility Criteria</h2>
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-start gap-3 mb-3">
                        <CheckCircle className="text-green-600 mt-1" size={20} />
                        <div>
                          <h4 className="font-semibold mb-2">Educational Qualification</h4>
                          <p className="text-gray-700">{exam.eligibility.qualification}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-start gap-3 mb-3">
                        <CheckCircle className="text-green-600 mt-1" size={20} />
                        <div>
                          <h4 className="font-semibold mb-2">Age Limit</h4>
                          <p className="text-gray-700">{exam.eligibility.ageLimit}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="text-green-600 mt-1" size={20} />
                        <div>
                          <h4 className="font-semibold mb-2">Number of Attempts</h4>
                          <p className="text-gray-700">{exam.eligibility.attempts}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold mb-3">Application Fee</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">General / OBC</p>
                        <p className="text-xl font-bold text-blue-600">{exam.fees.general}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">SC / ST / PWD</p>
                        <p className="text-xl font-bold text-blue-600">{exam.fees.scst}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="pattern">
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Exam Pattern</h2>
                  
                  <div className="mb-6 p-4 bg-gray-100 rounded-lg">
                    <p className="font-semibold mb-2">Marking Scheme:</p>
                    <p className="text-gray-700">{exam.pattern.marking}</p>
                  </div>

                  <div className="space-y-4">
                    {exam.pattern.sections.map((section, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <h4 className="font-semibold mb-3">{section.name}</h4>
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <p className="text-sm text-gray-600">Questions</p>
                            <p className="text-xl font-bold text-blue-600">{section.questions}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Duration</p>
                            <p className="text-xl font-bold text-green-600">{section.duration}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Marks</p>
                            <p className="text-xl font-bold text-orange-600">{section.marks}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="syllabus">
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Syllabus</h2>
                  <div className="space-y-6">
                    {Object.entries(exam.syllabus).map(([section, topics], index) => (
                      <div key={index}>
                        <h3 className="text-lg font-semibold mb-3 text-blue-600">{section}</h3>
                        <ul className="space-y-2">
                          {topics.map((topic, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-blue-600 rounded-full" />
                              <span className="text-gray-700">{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="p-6 bg-linear-to-br from-blue-600 to-purple-600 text-white">
              <h3 className="text-lg font-bold mb-4">Register Now</h3>
              <p className="text-sm text-blue-100 mb-4">
                Registration opens on {exam.dates.applicationStart}
              </p>
              <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">
                <Globe className="mr-2" size={18} />
                Official Website
              </Button>
            </Card>

            {/* Quick Info */}
            <Card className="p-6">
              <h3 className="text-lg font-bold mb-4">Quick Information</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Exam Mode</span>
                  <span className="font-semibold">{exam.examMode.split(' ')[0]}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-semibold">{exam.examDuration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Marks</span>
                  <span className="font-semibold">{exam.totalMarks}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Participants</span>
                  <span className="font-semibold">{exam.participants}</span>
                </div>
              </div>
            </Card>

            {/* Download Resources */}
            <Card className="p-6">
              <h3 className="text-lg font-bold mb-4">Resources</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Download className="mr-2" size={18} />
                  Download Syllabus PDF
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="mr-2" size={18} />
                  Previous Year Papers
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BookOpen className="mr-2" size={18} />
                  Preparation Tips
                </Button>
              </div>
            </Card>

            {/* Accepting Colleges */}
            <Card className="p-6 bg-orange-50">
              <h3 className="text-lg font-bold mb-2">Accepting Colleges</h3>
              <p className="text-3xl font-bold text-orange-600 mb-2">
                {exam.acceptingColleges}+
              </p>
              <p className="text-sm text-gray-600 mb-4">
                Top B-Schools accept {exam.name} scores
              </p>
              <Button variant="outline" className="w-full">
                View All Colleges
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
