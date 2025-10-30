import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Award,
  Truck,
  Shield,
  DollarSign,
  Wrench,
  TrendingUp,
} from 'lucide-react';
import { motion } from 'framer-motion';
import VehicleCard from '../components/VehicleCard';
import QuickSearch from '../components/QuickSearch';

export default function Home() {
  const { data: vehicles = [], isLoading } = useQuery({
    queryKey: ['featured-vehicles'],
    queryFn: async () => {
      const all = await base44.entities.Vehicle.list('-created_date');
      return all.slice(0, 6);
    },
  });

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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='max-w-3xl'
          >
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
              <Link to={createPageUrl('Inventory')}>
                <Button
                  size='lg'
                  className='bg-blue-600 hover:bg-blue-700 text-white shadow-2xl shadow-blue-600/50 text-lg px-8'
                >
                  Browse Inventory
                  <ArrowRight className='ml-2 w-5 h-5' />
                </Button>
              </Link>
              <Link to={createPageUrl('Finance')}>
                <Button
                  size='lg'
                  variant='outline'
                  className='bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20 text-lg px-8'
                >
                  Get Pre-Approved
                </Button>
              </Link>
            </div>
          </motion.div>
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

        {isLoading ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className='bg-slate-200 rounded-xl h-96 animate-pulse'
              />
            ))}
          </div>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
            {vehicles.map((vehicle, index) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} index={index} />
            ))}
          </div>
        )}

        <div className='text-center'>
          <Link to={createPageUrl('Inventory')}>
            <Button
              size='lg'
              variant='outline'
              className='border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
            >
              View All Inventory
              <ArrowRight className='ml-2 w-5 h-5' />
            </Button>
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
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className='text-center'
                >
                  <div className='inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-4'>
                    <Icon className='w-8 h-8 text-blue-600' />
                  </div>
                  <h3 className='text-xl font-semibold text-slate-900 mb-2'>
                    {pillar.title}
                  </h3>
                  <p className='text-slate-600'>{pillar.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Promo Sections */}
      <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {/* Auto Body Shop */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden group'
          >
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
              <Link to={createPageUrl('AutoBody')}>
                <Button
                  variant='outline'
                  className='bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20'
                >
                  Learn More
                  <ArrowRight className='ml-2 w-4 h-4' />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Finance */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl overflow-hidden group'
          >
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
              <Link to={createPageUrl('Finance')}>
                <Button
                  variant='outline'
                  className='bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20'
                >
                  Get Pre-Approved
                  <ArrowRight className='ml-2 w-4 h-4' />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
