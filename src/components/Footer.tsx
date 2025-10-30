import Link from 'next/link';
import { Car, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='bg-slate-900 text-white mt-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* Brand */}
          <div className='col-span-1'>
            <div className='flex items-center gap-3 mb-4'>
              <div className='w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center'>
                <Car className='w-6 h-6 text-white' />
              </div>
              <div>
                <h3 className='font-semibold'>Summit Motors</h3>
                <p className='text-xs text-slate-400'>Premium Vehicles</p>
              </div>
            </div>
            <p className='text-sm text-slate-400'>
              Your trusted partner for quality pre-owned vehicles and expert
              auto body services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='font-semibold mb-4'>Quick Links</h4>
            <ul className='space-y-2 text-sm text-slate-400'>
              <li>
                <Link href='/' className='hover:text-white transition-colors'>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href='/inventory'
                  className='hover:text-white transition-colors'
                >
                  Inventory
                </Link>
              </li>
              <li>
                <Link
                  href='/auto-body'
                  className='hover:text-white transition-colors'
                >
                  Auto Body
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className='font-semibold mb-4'>Services</h4>
            <ul className='space-y-2 text-sm text-slate-400'>
              <li>
                <Link
                  href='/finance'
                  className='hover:text-white transition-colors'
                >
                  Financing
                </Link>
              </li>
              <li>
                <Link
                  href='/auto-body'
                  className='hover:text-white transition-colors'
                >
                  Body Shop
                </Link>
              </li>
              <li>
                <Link
                  href='/inventory'
                  className='hover:text-white transition-colors'
                >
                  Trade-Ins
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className='font-semibold mb-4'>Contact</h4>
            <ul className='space-y-2 text-sm text-slate-400'>
              <li className='flex items-center gap-2'>
                <Phone className='w-4 h-4' />
                <a
                  href='tel:+15551234567'
                  className='hover:text-white transition-colors'
                >
                  (555) 123-4567
                </a>
              </li>
              <li className='flex items-center gap-2'>
                <Mail className='w-4 h-4' />
                <a
                  href='mailto:info@summitmotors.com'
                  className='hover:text-white transition-colors'
                >
                  info@summitmotors.com
                </a>
              </li>
              <li className='text-slate-400'>
                123 Summit Drive
                <br />
                Mountainview, ST 12345
              </li>
            </ul>
          </div>
        </div>

        <div className='border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400'>
          <p>
            &copy; {new Date().getFullYear()} Summit Motors. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
