'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Wrench,
  Award,
  Shield,
  Clock,
  CheckCircle,
  Sparkles,
  Car,
  Paintbrush,
  ChevronRight,
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function AutoBody() {
  const [beforeAfterIndex, setBeforeAfterIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  const services = [
    {
      icon: Paintbrush,
      title: 'Paint & Refinishing',
      description:
        'Factory-matched paint and expert color blending for a flawless finish',
      features: ['Color matching', 'Clear coat protection', 'Prep & priming'],
    },
    {
      icon: Car,
      title: 'Collision Repair',
      description:
        'Complete frame straightening and structural repairs to restore safety',
      features: [
        'Frame alignment',
        'Body panel replacement',
        'Structural welding',
      ],
    },
    {
      icon: Sparkles,
      title: 'Paintless Dent Repair',
      description:
        'Quick and affordable removal of minor dents without repainting',
      features: ['No paint needed', 'Same-day service', 'Cost-effective'],
    },
    {
      icon: Shield,
      title: 'Glass Replacement',
      description: 'Windshield and window replacement with OEM-quality glass',
      features: ['Mobile service', 'Insurance billing', 'ADAS recalibration'],
    },
    {
      icon: Sparkles,
      title: 'Detail & Ceramic Coating',
      description: 'Professional detailing and long-lasting ceramic protection',
      features: [
        'Interior/exterior detail',
        'Paint correction',
        'Ceramic coating',
      ],
    },
    {
      icon: Wrench,
      title: 'Custom Modifications',
      description: 'Performance upgrades, wraps, and aesthetic enhancements',
      features: ['Vinyl wraps', 'Performance parts', 'Custom fabrication'],
    },
  ];

  const beforeAfterImages = [
    {
      before:
        'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800',
      after:
        'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800',
      title: 'Front Bumper Repair',
    },
    {
      before:
        'https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?w=800',
      after:
        'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800',
      title: 'Full Paint Restoration',
    },
    {
      before:
        'https://images.unsplash.com/photo-1625231334168-35067f8853ed?w=800',
      after: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800',
      title: 'Side Panel Repair',
    },
  ];

  const certifications = [
    {
      name: 'I-CAR Gold Class',
      description: 'Industry-leading collision repair training',
    },
    {
      name: 'ASE Certified',
      description: 'Automotive Service Excellence certified technicians',
    },
    {
      name: 'OEM Certified',
      description: 'Factory-certified for major manufacturers',
    },
    {
      name: 'Insured Partner',
      description: 'Direct billing with all major insurers',
    },
  ];

  const currentImage = beforeAfterImages[beforeAfterIndex];

  return (
    <div className='min-h-screen bg-neutral-50'>
      {/* Hero */}
      <div className='bg-linear-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='max-w-3xl'
          >
            <div className='flex items-center gap-3 mb-4'>
              <Wrench className='w-12 h-12 text-blue-400' />
              <h1 className='text-4xl md:text-5xl font-bold'>Auto Body Shop</h1>
            </div>
            <p className='text-xl text-slate-300 mb-8'>
              Expert collision repair, paint, and restoration services. We
              restore your vehicle to pre-accident condition.
            </p>
            <Link href='/contact'>
              <Button
                size='lg'
                className='bg-blue-600 hover:bg-blue-700 text-white'
              >
                Get Free Estimate
                <ChevronRight className='ml-2 w-5 h-5' />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Before/After Slider */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-slate-900 mb-4'>
            See the Difference
          </h2>
          <p className='text-lg text-slate-600 max-w-2xl mx-auto'>
            Browse our recent work and see the quality of our craftsmanship
          </p>
        </div>

        <div className='max-w-4xl mx-auto'>
          <div className='bg-white rounded-2xl shadow-xl overflow-hidden'>
            {/* Before/After Image */}
            <div className='relative aspect-video overflow-hidden select-none'>
              <img
                src={currentImage.before}
                alt='Before'
                className='absolute inset-0 w-full h-full object-cover'
              />

              <div
                className='absolute inset-0 overflow-hidden'
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img
                  src={currentImage.after}
                  alt='After'
                  className='absolute inset-0 w-full h-full object-cover'
                />
              </div>

              {/* Slider Handle */}
              <div
                className='absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize'
                style={{ left: `${sliderPosition}%` }}
                onMouseDown={(e: React.MouseEvent<HTMLDivElement>) => {
                  const container = e.currentTarget
                    .parentElement as HTMLElement;

                  const handleMouseMove = (ev: MouseEvent) => {
                    const rect = container.getBoundingClientRect();
                    const x = ev.clientX - rect.left;
                    const percent = (x / rect.width) * 100;
                    setSliderPosition(Math.max(0, Math.min(100, percent)));
                  };

                  const handleMouseUp = () => {
                    document.removeEventListener('mousemove', handleMouseMove);
                    document.removeEventListener('mouseup', handleMouseUp);
                  };

                  document.addEventListener('mousemove', handleMouseMove);
                  document.addEventListener('mouseup', handleMouseUp);
                }}
              >
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center'>
                  <div className='flex gap-1'>
                    <ChevronRight className='w-4 h-4 rotate-180' />
                    <ChevronRight className='w-4 h-4' />
                  </div>
                </div>
              </div>

              {/* Labels */}
              <div className='absolute top-4 left-4 bg-slate-900/80 backdrop-blur px-3 py-1 rounded-lg text-white text-sm font-medium'>
                Before
              </div>
              <div className='absolute top-4 right-4 bg-blue-600/80 backdrop-blur px-3 py-1 rounded-lg text-white text-sm font-medium'>
                After
              </div>
            </div>

            {/* Image Navigation */}
            <div className='p-6 border-t border-slate-200'>
              <h3 className='text-xl font-semibold text-slate-900 mb-4 text-center'>
                {currentImage.title}
              </h3>
              <div className='flex gap-2 justify-center'>
                {beforeAfterImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setBeforeAfterIndex(index);
                      setSliderPosition(50);
                    }}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === beforeAfterIndex
                        ? 'bg-blue-600 w-8'
                        : 'bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className='bg-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-slate-900 mb-4'>
              Our Services
            </h2>
            <p className='text-lg text-slate-600 max-w-2xl mx-auto'>
              Comprehensive auto body services to restore your vehicle
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className='bg-neutral-50 rounded-xl p-6 hover:shadow-lg transition-shadow'
                >
                  <div className='w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4'>
                    <Icon className='w-6 h-6 text-blue-600' />
                  </div>
                  <h3 className='text-xl font-semibold text-slate-900 mb-2'>
                    {service.title}
                  </h3>
                  <p className='text-slate-600 mb-4'>{service.description}</p>
                  <ul className='space-y-2'>
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className='flex items-center gap-2 text-sm text-slate-700'
                      >
                        <CheckCircle className='w-4 h-4 text-green-600 shrink-0' />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Certifications & Insurance */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {/* Certifications */}
          <div className='bg-white rounded-xl shadow-sm p-8'>
            <div className='flex items-center gap-3 mb-6'>
              <Award className='w-8 h-8 text-blue-600' />
              <h2 className='text-2xl font-bold text-slate-900'>
                Certifications
              </h2>
            </div>
            <div className='space-y-4'>
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className='flex items-start gap-3 p-4 bg-neutral-50 rounded-lg'
                >
                  <CheckCircle className='w-5 h-5 text-green-600 shrink-0 mt-0.5' />
                  <div>
                    <h3 className='font-semibold text-slate-900'>
                      {cert.name}
                    </h3>
                    <p className='text-sm text-slate-600'>{cert.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process & Turnaround */}
          <div className='bg-linear-to-br from-blue-600 to-blue-700 rounded-xl shadow-sm p-8 text-white'>
            <div className='flex items-center gap-3 mb-6'>
              <Clock className='w-8 h-8' />
              <h2 className='text-2xl font-bold'>Our Process</h2>
            </div>
            <div className='space-y-6'>
              <div className='flex gap-4'>
                <div className='shrink-0 w-8 h-8 bg-white/20 backdrop-blur rounded-full flex items-center justify-center font-bold'>
                  1
                </div>
                <div>
                  <h3 className='font-semibold mb-1'>Free Estimate</h3>
                  <p className='text-blue-100 text-sm'>
                    Detailed assessment and transparent pricing
                  </p>
                </div>
              </div>
              <div className='flex gap-4'>
                <div className='shrink-0 w-8 h-8 bg-white/20 backdrop-blur rounded-full flex items-center justify-center font-bold'>
                  2
                </div>
                <div>
                  <h3 className='font-semibold mb-1'>Insurance Coordination</h3>
                  <p className='text-blue-100 text-sm'>
                    We handle all insurance paperwork
                  </p>
                </div>
              </div>
              <div className='flex gap-4'>
                <div className='shrink-0 w-8 h-8 bg-white/20 backdrop-blur rounded-full flex items-center justify-center font-bold'>
                  3
                </div>
                <div>
                  <h3 className='font-semibold mb-1'>Expert Repairs</h3>
                  <p className='text-blue-100 text-sm'>
                    Certified technicians restore your vehicle
                  </p>
                </div>
              </div>
              <div className='flex gap-4'>
                <div className='shrink-0 w-8 h-8 bg-white/20 backdrop-blur rounded-full flex items-center justify-center font-bold'>
                  4
                </div>
                <div>
                  <h3 className='font-semibold mb-1'>Quality Inspection</h3>
                  <p className='text-blue-100 text-sm'>
                    Thorough check before delivery
                  </p>
                </div>
              </div>

              <div className='pt-6 border-t border-white/20'>
                <p className='text-sm text-blue-100 mb-2'>Average Turnaround</p>
                <p className='text-3xl font-bold'>3-7 Days</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className='bg-slate-900 text-white py-16'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl font-bold mb-4'>
            Ready to Restore Your Vehicle?
          </h2>
          <p className='text-xl text-slate-300 mb-8'>
            Get a free estimate today and see why we're the trusted choice for
            auto body repair.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/contact'>
              <Button
                size='lg'
                className='bg-blue-600 hover:bg-blue-700 text-white'
              >
                Request Estimate
              </Button>
            </Link>
            <a href='tel:+15551234567'>
              <Button
                size='lg'
                variant='outline'
                className='bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20'
              >
                Call (555) 123-4567
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
