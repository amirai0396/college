'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Mail, Lock, Eye, EyeOff, Facebook, Chrome } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login/signup logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 via-teal-50 to-blue-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Branding */}
          <div className="hidden lg:block">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                Welcome to <span className="text-green-600">CollegeChalo</span>
              </h1>
              <p className="text-xl text-gray-700">
                Your trusted partner in finding the perfect college and course for your future.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">20,000+ Colleges</h3>
                    <p className="text-gray-600">Explore thousands of colleges across India</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">500,000+ Courses</h3>
                    <p className="text-gray-600">Find the perfect course for your career</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">Expert Guidance</h3>
                    <p className="text-gray-600">Get personalized counselling from experts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Login/Signup Form */}
          <Card className="bg-white shadow-2xl">
            <div className="p-8">
              {/* Tab Buttons */}
              <div className="flex gap-4 mb-6">
                <button
                  onClick={() => setIsLogin(true)}
                  className={`flex-1 py-3 font-semibold transition-colors ${
                    isLogin
                      ? 'text-green-600 border-b-2 border-green-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Login
                </button>
                <button
                  onClick={() => setIsLogin(false)}
                  className={`flex-1 py-3 font-semibold transition-colors ${
                    !isLogin
                      ? 'text-green-600 border-b-2 border-green-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Sign Up
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name field (signup only) */}
                {!isLogin && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <Input
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required={!isLogin}
                      className="h-12"
                    />
                  </div>
                )}

                {/* Email field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="pl-10 h-12"
                    />
                  </div>
                </div>

                {/* Phone field (signup only) */}
                {!isLogin && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required={!isLogin}
                      className="h-12"
                    />
                  </div>
                )}

                {/* Password field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      required
                      className="pl-10 pr-10 h-12"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                {/* Forgot Password (login only) */}
                {isLogin && (
                  <div className="flex justify-end">
                    <Link href="/forgot-password" className="text-sm text-green-600 hover:text-green-700">
                      Forgot Password?
                    </Link>
                  </div>
                )}

                {/* Submit Button */}
                <Button type="submit" className="w-full h-12 bg-green-600 hover:bg-green-700 text-lg">
                  {isLogin ? 'Login' : 'Create Account'}
                </Button>
              </form>

              {/* Divider */}
              <div className="relative my-6">
                <Separator />
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-sm text-gray-500">
                  Or continue with
                </span>
              </div>

              {/* Social Login Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="h-12">
                  <Chrome size={20} className="mr-2" />
                  Google
                </Button>
                <Button variant="outline" className="h-12">
                  <Facebook size={20} className="mr-2" />
                  Facebook
                </Button>
              </div>

              {/* Terms and Privacy */}
              <p className="text-xs text-gray-500 text-center mt-6">
                By continuing, you agree to our{' '}
                <Link href="/terms" className="text-green-600 hover:underline">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link href="/privacy" className="text-green-600 hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </Card>
        </div>

        {/* Benefits Section */}
        <div className="max-w-6xl mx-auto mt-12">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Why Create an Account?
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Save Colleges</h3>
              <p className="text-sm text-gray-600">Bookmark your favorite colleges for later</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✍️</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Apply Online</h3>
              <p className="text-sm text-gray-600">Submit applications directly through our platform</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💬</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Get Counselling</h3>
              <p className="text-sm text-gray-600">Connect with expert counsellors for guidance</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔔</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Stay Updated</h3>
              <p className="text-sm text-gray-600">Get alerts on admission dates and deadlines</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
