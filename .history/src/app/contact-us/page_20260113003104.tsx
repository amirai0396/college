'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Mail, Phone, MapPin, Clock, 
  Facebook, Twitter, Instagram, Linkedin, Youtube,
  Send, MessageCircle
} from 'lucide-react';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const offices = [
    {
      city: 'New Delhi (Headquarters)',
      address: '123 Education Street, Connaught Place',
      pincode: 'New Delhi - 110001',
      phone: '+91-11-2345-6789',
      email: 'delhi@collegechalo.com',
    },
    {
      city: 'Mumbai',
      address: '456 Learning Avenue, Andheri',
      pincode: 'Mumbai - 400053',
      phone: '+91-22-3456-7890',
      email: 'mumbai@collegechalo.com',
    },
    {
      city: 'Bangalore',
      address: '789 Tech Park, Koramangala',
      pincode: 'Bangalore - 560034',
      phone: '+91-80-4567-8901',
      email: 'bangalore@collegechalo.com',
    },
    {
      city: 'Pune',
      address: '321 Campus Road, Viman Nagar',
      pincode: 'Pune - 411014',
      phone: '+91-20-5678-9012',
      email: 'pune@collegechalo.com',
    },
  ];

  const quickLinks = [
    { label: 'General Inquiry', email: 'info@collegechalo.com' },
    { label: 'Admission Support', email: 'admissions@collegechalo.com' },
    { label: 'Counselling', email: 'counselling@collegechalo.com' },
    { label: 'Partnership', email: 'partnership@collegechalo.com' },
    { label: 'Media & PR', email: 'media@collegechalo.com' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-linear-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100">
              Have questions? We&apos;re here to help you find your dream college
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91-9999999999"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this about?"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us more about your query..."
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                  <Send className="mr-2" size={18} />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <Card className="p-6">
              <h3 className="text-lg font-bold mb-4">Quick Contact</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="text-blue-600 mt-1 shrink-0" size={20} />
                  <div>
                    <p className="text-sm text-gray-600">Call Us</p>
                    <a href="tel:+911123456789" className="font-semibold hover:text-blue-600">
                      +91-11-2345-6789
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="text-blue-600 mt-1 shrink-0" size={20} />
                  <div>
                    <p className="text-sm text-gray-600">Email Us</p>
                    <a href="mailto:info@collegechalo.com" className="font-semibold hover:text-blue-600">
                      info@collegechalo.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="text-blue-600 mt-1 shrink-0" size={20} />
                  <div>
                    <p className="text-sm text-gray-600">Working Hours</p>
                    <p className="font-semibold">Mon - Sat: 9 AM - 7 PM</p>
                    <p className="text-sm text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageCircle className="text-blue-600 mt-1 shrink-0" size={20} />
                  <div>
                    <p className="text-sm text-gray-600">Live Chat</p>
                    <Button variant="outline" size="sm" className="mt-2">
                      Start Chat
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Department Emails */}
            <Card className="p-6">
              <h3 className="text-lg font-bold mb-4">Department Contacts</h3>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <div key={index} className="border-b pb-2 last:border-0">
                    <p className="text-sm text-gray-600">{link.label}</p>
                    <a
                      href={`mailto:${link.email}`}
                      className="text-sm font-medium text-blue-600 hover:underline"
                    >
                      {link.email}
                    </a>
                  </div>
                ))}
              </div>
            </Card>

            {/* Social Media */}
            <Card className="p-6 bg-blue-50">
              <h3 className="text-lg font-bold mb-4">Follow Us</h3>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full hover:bg-blue-400 hover:text-white transition-colors"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full hover:bg-pink-600 hover:text-white transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full hover:bg-blue-700 hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full hover:bg-red-600 hover:text-white transition-colors"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </Card>
          </div>
        </div>

        {/* Our Offices */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Offices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
                <Badge className="mb-3 bg-blue-600">{office.city}</Badge>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <MapPin className="text-gray-500 mt-1 shrink-0" size={16} />
                    <div>
                      <p className="text-gray-700">{office.address}</p>
                      <p className="text-gray-600">{office.pincode}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="text-gray-500 shrink-0" size={16} />
                    <a href={`tel:${office.phone}`} className="text-blue-600 hover:underline">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="text-gray-500 shrink-0" size={16} />
                    <a href={`mailto:${office.email}`} className="text-blue-600 hover:underline">
                      {office.email}
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Notice */}
        <Card className="mt-12 p-8 bg-blue-50">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Have a Quick Question?</h3>
            <p className="text-gray-700 mb-6">
              Check our FAQ section for instant answers to common questions
            </p>
            <Button variant="outline" size="lg">
              Visit FAQ
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
