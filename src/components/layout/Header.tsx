'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, Search, ChevronDown, Phone, Mail, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ROUTES } from '@/lib/constants/routes';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-blue-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+919999999999" className="flex items-center gap-1 hover:text-blue-200">
              <Phone size={14} />
              <span className="hidden md:inline">+91-9999999999</span>
            </a>
            <a href="mailto:info@collegechalo.com" className="flex items-center gap-1 hover:text-blue-200">
              <Mail size={14} />
              <span className="hidden md:inline">info@collegechalo.com</span>
            </a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <Link href={ROUTES.APPLY} className="hover:text-blue-200">Apply Now</Link>
            <Link href={ROUTES.CAMPUS_AMBASSADOR} className="hover:text-blue-200">Campus Ambassador</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={ROUTES.HOME} className="flex items-center gap-2">
            <div className="text-2xl font-bold text-blue-600">
              College<span className="text-orange-500">Chalo</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <div className="relative group">
              <button className="flex items-center gap-1 py-2 text-gray-700 hover:text-blue-600 font-medium">
                Colleges <ChevronDown size={16} />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href={ROUTES.COLLEGES} className="block px-4 py-2 hover:bg-blue-50">All Colleges</Link>
                <Link href={ROUTES.COLLEGES_BY_STREAM('engineering')} className="block px-4 py-2 hover:bg-blue-50">Engineering Colleges</Link>
                <Link href={ROUTES.COLLEGES_BY_STREAM('management')} className="block px-4 py-2 hover:bg-blue-50">Management Colleges</Link>
                <Link href={ROUTES.COLLEGES_BY_STREAM('medical')} className="block px-4 py-2 hover:bg-blue-50">Medical Colleges</Link>
                <Link href={ROUTES.COLLEGES_BY_STREAM('law')} className="block px-4 py-2 hover:bg-blue-50">Law Colleges</Link>
                <Link href={ROUTES.COLLEGE_COMPARE} className="block px-4 py-2 hover:bg-blue-50">Compare Colleges</Link>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center gap-1 py-2 text-gray-700 hover:text-blue-600 font-medium">
                Exams <ChevronDown size={16} />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href={ROUTES.EXAMS} className="block px-4 py-2 hover:bg-blue-50">All Exams</Link>
                <Link href={ROUTES.EXAM_DETAIL('cat')} className="block px-4 py-2 hover:bg-blue-50">CAT</Link>
                <Link href={ROUTES.EXAM_DETAIL('gate')} className="block px-4 py-2 hover:bg-blue-50">GATE</Link>
                <Link href={ROUTES.EXAM_DETAIL('jee-main')} className="block px-4 py-2 hover:bg-blue-50">JEE Main</Link>
                <Link href={ROUTES.EXAM_DETAIL('neet')} className="block px-4 py-2 hover:bg-blue-50">NEET</Link>
                <Link href={ROUTES.EXAM_DETAIL('clat')} className="block px-4 py-2 hover:bg-blue-50">CLAT</Link>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center gap-1 py-2 text-gray-700 hover:text-blue-600 font-medium">
                Courses <ChevronDown size={16} />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href={ROUTES.COURSES} className="block px-4 py-2 hover:bg-blue-50">All Courses</Link>
                <Link href={ROUTES.COURSE_DETAIL('mba')} className="block px-4 py-2 hover:bg-blue-50">MBA</Link>
                <Link href={ROUTES.COURSE_DETAIL('btech')} className="block px-4 py-2 hover:bg-blue-50">B.Tech</Link>
                <Link href={ROUTES.COURSE_DETAIL('mbbs')} className="block px-4 py-2 hover:bg-blue-50">MBBS</Link>
                <Link href={ROUTES.COURSE_DETAIL('llb')} className="block px-4 py-2 hover:bg-blue-50">LLB</Link>
              </div>
            </div>

            <Link href={ROUTES.NEWS} className="text-gray-700 hover:text-blue-600 font-medium">
              News
            </Link>

            <Link href={ROUTES.ABOUT} className="text-gray-700 hover:text-blue-600 font-medium">
              About Us
            </Link>

            <Link href={ROUTES.CONTACT} className="text-gray-700 hover:text-blue-600 font-medium">
              Contact
            </Link>
          </nav>

          {/* Search & Mobile Menu Icons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 hover:bg-gray-100 rounded-full"
              aria-label="Search"
            >
              <Search size={20} className="text-gray-700" />
            </button>

            <Button size="sm" className="hidden md:inline-flex bg-orange-500 hover:bg-orange-600">
              Apply Now
            </Button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-md"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="mt-4 pb-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="Search colleges, exams, courses..."
                className="pl-10 pr-4 py-2 w-full"
              />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t bg-white">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            <Link href={ROUTES.COLLEGES} className="py-2 px-3 hover:bg-gray-100 rounded-md">
              Colleges
            </Link>
            <Link href={ROUTES.EXAMS} className="py-2 px-3 hover:bg-gray-100 rounded-md">
              Exams
            </Link>
            <Link href={ROUTES.COURSES} className="py-2 px-3 hover:bg-gray-100 rounded-md">
              Courses
            </Link>
            <Link href={ROUTES.NEWS} className="py-2 px-3 hover:bg-gray-100 rounded-md">
              News
            </Link>
            <Link href={ROUTES.ABOUT} className="py-2 px-3 hover:bg-gray-100 rounded-md">
              About Us
            </Link>
            <Link href={ROUTES.CONTACT} className="py-2 px-3 hover:bg-gray-100 rounded-md">
              Contact
            </Link>
            <Link href={ROUTES.APPLY} className="py-2 px-3 bg-orange-500 text-white rounded-md text-center mt-2">
              Apply Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
