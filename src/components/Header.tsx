'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import {
  Car,
  Phone,
  Menu,
  X,
  Wrench,
  DollarSign,
  Image as ImageIcon,
  Info,
  Home as HomeIcon,
} from 'lucide-react';

const navigationItems = [
  { name: 'Home', path: '/', icon: HomeIcon },
  { name: 'Inventory', path: '/inventory', icon: Car },
  { name: 'Auto Body', path: '/auto-body', icon: Wrench },
  { name: 'Finance', path: '/finance', icon: DollarSign },
  { name: 'Gallery', path: '/gallery', icon: ImageIcon },
  { name: 'About', path: '/about', icon: Info },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-md'
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16 md:h-20'>
          {/* Logo */}
          <Link href='/' className='flex items-center gap-3 group'>
            <div className='w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center transform transition-transform group-hover:scale-105'>
              <Car className='w-6 h-6 text-white' />
            </div>
            <div className='hidden sm:block'>
              <h1 className='text-xl font-semibold text-slate-900'>
                Summit Motors
              </h1>
              <p className='text-xs text-slate-500'>
                Premium Pre-Owned Vehicles
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden lg:flex items-center gap-1'>
            {navigationItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Contact Info & CTA */}
          <div className='hidden lg:flex items-center gap-4'>
            <a
              href='tel:+15551234567'
              className='flex items-center gap-2 text-sm text-slate-700 hover:text-blue-600 transition-colors'
            >
              <Phone className='w-4 h-4' />
              <span>(555) 123-4567</span>
            </a>
            <Link
              href='/contact'
              className='px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg shadow-blue-600/30 font-medium transition-colors'
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className='lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors'
          >
            {mobileMenuOpen ? (
              <X className='w-6 h-6' />
            ) : (
              <Menu className='w-6 h-6' />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className='lg:hidden border-t border-slate-200 bg-white'>
          <nav className='max-w-7xl mx-auto px-4 py-4 space-y-2'>
            {navigationItems.map((item) => {
              const isActive = pathname === item.path;
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <Icon className='w-5 h-5' />
                  <span className='font-medium'>{item.name}</span>
                </Link>
              );
            })}
            <div className='pt-4 border-t border-slate-200 space-y-2'>
              <a
                href='tel:+15551234567'
                className='flex items-center gap-3 px-4 py-3 rounded-lg text-slate-700 hover:bg-slate-100'
              >
                <Phone className='w-5 h-5' />
                <span>(555) 123-4567</span>
              </a>
              <Link
                href='/contact'
                className='block w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white text-center rounded-lg font-medium'
              >
                Contact Us
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
