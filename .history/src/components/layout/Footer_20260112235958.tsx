'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ROUTES, SITE_CONFIG } from '@/lib/constants/config';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">
              College<span className="text-orange-500">Chalo</span>
            </h3>
            <p className="text-sm mb-4">
              Because We Make Your Educational Journey Simple. Find your dream college from 20,000+ colleges across India.
            </p>
            <div className="flex gap-3">
              <a href={SITE_CONFIG.social.facebook} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 hover:bg-blue-600 rounded-full transition-colors">
                <Facebook size={18} />
              </a>
              <a href={SITE_CONFIG.social.twitter} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 hover:bg-blue-400 rounded-full transition-colors">
                <Twitter size={18} />
              </a>
              <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 hover:bg-pink-600 rounded-full transition-colors">
                <Instagram size={18} />
              </a>
              <a href={SITE_CONFIG.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 hover:bg-blue-700 rounded-full transition-colors">
                <Linkedin size={18} />
              </a>
              <a href={SITE_CONFIG.social.youtube} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 hover:bg-red-600 rounded-full transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-md font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about-us" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-white transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link href="/campus-ambassador" className="hover:text-white transition-colors">Campus Ambassador</Link>
              </li>
              <li>
                <Link href="/college-review" className="hover:text-white transition-colors">Write a Review</Link>
              </li>
              <li>
                <Link href="/common-application-form" className="hover:text-white transition-colors">Apply Now</Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          {/* Top Colleges */}
          <div>
            <h4 className="text-white text-md font-semibold mb-4">Top Colleges</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/colleges/stream/engineering" className="hover:text-white transition-colors">Engineering Colleges</Link>
              </li>
              <li>
                <Link href="/colleges/stream/management" className="hover:text-white transition-colors">MBA Colleges</Link>
              </li>
              <li>
                <Link href="/colleges/stream/medical" className="hover:text-white transition-colors">Medical Colleges</Link>
              </li>
              <li>
                <Link href="/colleges/stream/law" className="hover:text-white transition-colors">Law Colleges</Link>
              </li>
              <li>
                <Link href="/colleges/stream/science" className="hover:text-white transition-colors">Science Colleges</Link>
              </li>
              <li>
                <Link href="/college-in-delhi" className="hover:text-white transition-colors">Colleges in Delhi</Link>
              </li>
              <li>
                <Link href="/college-in-mumbai" className="hover:text-white transition-colors">Colleges in Mumbai</Link>
              </li>
              <li>
                <Link href="/college-in-bangalore" className="hover:text-white transition-colors">Colleges in Bangalore</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white text-md font-semibold mb-4">Newsletter</h4>
            <p className="text-sm mb-4">Subscribe to get latest updates on admissions, exams and news.</p>
            <div className="flex gap-2 mb-6">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
              />
              <Button className="bg-orange-500 hover:bg-orange-600 whitespace-nowrap">
                Subscribe
              </Button>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>123 Education Street, New Delhi, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+919999999999" className="hover:text-white">+91-9999999999</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:info@collegechalo.com" className="hover:text-white">info@collegechalo.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>© 2026 CollegeChalo. All Rights Reserved.</p>
            <div className="flex gap-4">
              <Link href="/sitemap" className="hover:text-white">Sitemap</Link>
              <Link href="/privacy-policy" className="hover:text-white">Privacy</Link>
              <Link href="/terms-conditions" className="hover:text-white">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
