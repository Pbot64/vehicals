import Link from 'next/link';
import {
  ArrowRight,
  Award,
  Truck,
  Shield,
  DollarSign,
  Wrench,
  TrendingUp,
} from 'lucide-react';
import VehicleCard from '@/components/VehicleCard';
import QuickSearch from '@/components/QuickSearch';
import { getFeaturedVehicles } from '@/lib/mockData';

export default async function Home() {
  const vehicles = await getFeaturedVehicles(6);

  const trustPillars = [
    {
      icon: Shield,
      title: 'Comprehensive Warranty',
      description: 'Every vehicle comes with our extended warranty coverage',
    },
    {
      icon: Truck,
      title: 'Nationwide Shipping',
      description: 'We deliver your dream car anywhere in the continental US',
    },
    {
      icon: Award,
      title: 'Certified Technicians',
      description:
        'ASE and I-CAR certified professionals service every vehicle',
    },
    {
      icon: DollarSign,
      title: 'Flexible Financing',
      description: 'Multiple financing options with competitive rates',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className='relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white overflow-hidden'>
        <div className='absolute inset-0 opacity-10'>
          <img
            src='https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920'
            alt='Cars'
            className='w-full h-full object-cover'
          />
        </div>

        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32'>
          <div className='max-w-3xl animate-fade-in'>
            <h1 className='text-4xl md:text-6xl font-bold mb-6 leading-tight'>
              Premium Vehicles.
              <br />
              <span className='text-blue-400'>Exceptional Service.</span>
            </h1>
            <p className='text-xl md:text-2xl text-slate-300 mb-8'>
              Discover quality pre-owned vehicles with warranty coverage and
              transparent pricing.
            </p>
            <div className='flex flex-col sm:flex-row gap-4'>
              <Link
                href='/inventory'
                className='inline-flex items-center justify-center px-8 py-3 text-lg font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-2xl shadow-blue-600/50 transition-colors'
              >
                Browse Inventory
                <ArrowRight className='ml-2 w-5 h-5' />
              </Link>
              <Link
                href='/finance'
                className='inline-flex items-center justify-center px-8 py-3 text-lg font-medium bg-white/10 backdrop-blur border border-white/20 text-white hover:bg-white/20 rounded-lg transition-colors'
              >
                Get Pre-Approved
              </Link>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className='absolute bottom-0 left-0 right-0'>
          <svg viewBox='0 0 1440 120' className='w-full h-auto text-neutral-50'>
            <path
              fill='currentColor'
              d='M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z'
            ></path>
          </svg>
        </div>
      </section>

      {/* Quick Search */}
      <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10'>
        <QuickSearch />
      </section>

      {/* Featured Vehicles */}
      <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-slate-900 mb-4'>
            Featured Vehicles
          </h2>
          <p className='text-lg text-slate-600 max-w-2xl mx-auto'>
            Hand-picked selection of our finest inventory
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
          {vehicles.map((vehicle, index) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} index={index} />
          ))}
        </div>

        <div className='text-center'>
          <Link
            href='/inventory'
            className='inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors'
          >
            View All Inventory
            <ArrowRight className='ml-2 w-5 h-5' />
          </Link>
        </div>
      </section>

      {/* Trust Pillars */}
      <section className='bg-white py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-slate-900 mb-4'>
              Why Summit Motors?
            </h2>
            <p className='text-lg text-slate-600 max-w-2xl mx-auto'>
              Your satisfaction is our commitment
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {trustPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div key={index} className='text-center'>
                  <div className='inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-4'>
                    <Icon className='w-8 h-8 text-blue-600' />
                  </div>
                  <h3 className='text-xl font-semibold text-slate-900 mb-2'>
                    {pillar.title}
                  </h3>
                  <p className='text-slate-600'>{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Promo Sections */}
      <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {/* Auto Body Shop */}
          <div className='relative bg-linear-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden group'>
            <div className='absolute inset-0 opacity-20'>
              <img
                src='https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800'
                alt='Auto Body Shop'
                className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
              />
            </div>
            <div className='relative p-8 md:p-12 text-white'>
              <Wrench className='w-12 h-12 mb-4 text-blue-400' />
              <h3 className='text-2xl md:text-3xl font-bold mb-4'>
                Expert Auto Body Services
              </h3>
              <p className='text-slate-300 mb-6'>
                From minor dents to major collision repair, our certified
                technicians restore your vehicle to perfection.
              </p>
              <Link
                href='/auto-body'
                className='inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur border border-white/20 text-white hover:bg-white/20 rounded-lg transition-colors'
              >
                Learn More
                <ArrowRight className='ml-2 w-4 h-4' />
              </Link>
            </div>
          </div>

          {/* Finance */}
          <div className='relative bg-linear-to-br from-blue-600 to-blue-700 rounded-2xl overflow-hidden group'>
            <div className='absolute inset-0 opacity-10'>
              <img
                src='https://images.unsplash.com/photo-1554224311-beee460c201a?w=800'
                alt='Finance'
                className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
              />
            </div>
            <div className='relative p-8 md:p-12 text-white'>
              <TrendingUp className='w-12 h-12 mb-4 text-white' />
              <h3 className='text-2xl md:text-3xl font-bold mb-4'>
                Flexible Financing Options
              </h3>
              <p className='text-blue-100 mb-6'>
                Get pre-approved in minutes with competitive rates. We work with
                all credit levels to get you driving.
              </p>
              <Link
                href='/finance'
                className='inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur border border-white/20 text-white hover:bg-white/20 rounded-lg transition-colors'
              >
                Get Pre-Approved
                <ArrowRight className='ml-2 w-4 h-4' />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
