'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Award, Users, MapPin, Clock, Star, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const values = [
    {
      icon: Shield,
      title: 'Transparency',
      description: 'Honest pricing and clear communication at every step',
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Every vehicle is thoroughly inspected and serviced',
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Your satisfaction drives everything we do',
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'Striving to exceed expectations in every interaction',
    },
  ];

  const team = [
    {
      name: 'Michael Chen',
      role: 'General Manager',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    },
    {
      name: 'Sarah Rodriguez',
      role: 'Sales Director',
      image:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
    },
    {
      name: 'James Foster',
      role: 'Service Manager',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    },
    {
      name: 'Emily Thompson',
      role: 'Finance Manager',
      image:
        'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400',
    },
  ];

  const reviews = [
    {
      name: 'David Martinez',
      rating: 5,
      text: "Best car buying experience I've ever had. The team was professional, transparent, and genuinely cared about finding me the right vehicle.",
      date: '2 weeks ago',
    },
    {
      name: 'Jennifer Lee',
      rating: 5,
      text: 'Summit Motors made the process so easy. From financing to delivery, everything was smooth. Highly recommend!',
      date: '1 month ago',
    },
    {
      name: 'Robert Johnson',
      rating: 5,
      text: 'Exceptional service in the body shop. They restored my car perfectly after an accident. Insurance process was handled seamlessly.',
      date: '3 weeks ago',
    },
  ];

  return (
    <div className='min-h-screen bg-neutral-50'>
      {/* Hero */}
      <div className='relative bg-linear-to-br from-slate-900 to-blue-900 text-white py-20 overflow-hidden'>
        <div className='absolute inset-0 opacity-10'>
          <img
            src='https://images.unsplash.com/photo-1562911791-c7a97b729ec5?w=1920'
            alt='Dealership'
            className='w-full h-full object-cover'
          />
        </div>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='max-w-3xl'
          >
            <h1 className='text-4xl md:text-5xl font-bold mb-6'>
              About Summit Motors
            </h1>
            <p className='text-xl text-slate-300 leading-relaxed'>
              For over 25 years, we've been helping families find their perfect
              vehicle. Our commitment to quality, transparency, and exceptional
              service has made us a trusted name in the automotive industry.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Our Story */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className='text-3xl font-bold text-slate-900 mb-6'>
              Our Story
            </h2>
            <div className='space-y-4 text-slate-600 leading-relaxed'>
              <p>
                Founded in 1998, Summit Motors began as a small family-owned
                dealership with a simple mission: provide quality pre-owned
                vehicles at fair prices with exceptional customer service.
              </p>
              <p>
                Over the decades, we've grown from a 10-car lot to one of the
                region's most trusted automotive destinations, now featuring
                over 200 vehicles and a state-of-the-art collision center.
              </p>
              <p>
                What hasn't changed is our commitment to treating every customer
                like family and standing behind every vehicle we sell with
                comprehensive warranties and ongoing support.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='relative'
          >
            <img
              src='https://images.unsplash.com/photo-1617531653520-bd4f36c2e1d9?w=800'
              alt='Dealership'
              className='rounded-2xl shadow-xl'
            />
          </motion.div>
        </div>
      </div>

      {/* Our Values */}
      <div className='bg-white py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-slate-900 mb-4'>
              Our Values
            </h2>
            <p className='text-lg text-slate-600 max-w-2xl mx-auto'>
              The principles that guide everything we do
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className='text-center'
                >
                  <div className='inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-4'>
                    <Icon className='w-8 h-8 text-blue-600' />
                  </div>
                  <h3 className='text-xl font-semibold text-slate-900 mb-2'>
                    {value.title}
                  </h3>
                  <p className='text-slate-600'>{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-slate-900 mb-4'>
            Meet Our Team
          </h2>
          <p className='text-lg text-slate-600 max-w-2xl mx-auto'>
            Dedicated professionals committed to your satisfaction
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className='text-center'
            >
              <div className='mb-4'>
                <img
                  src={member.image}
                  alt={member.name}
                  className='w-40 h-40 rounded-full mx-auto object-cover border-4 border-white shadow-lg'
                />
              </div>
              <h3 className='text-xl font-semibold text-slate-900'>
                {member.name}
              </h3>
              <p className='text-blue-600'>{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Location & Hours */}
      <div className='bg-slate-900 text-white py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-3xl font-bold mb-8'>Visit Us</h2>

              <div className='space-y-6'>
                <div className='flex items-start gap-4'>
                  <div className='p-3 bg-white/10 backdrop-blur rounded-lg'>
                    <MapPin className='w-6 h-6' />
                  </div>
                  <div>
                    <h3 className='font-semibold text-lg mb-1'>Location</h3>
                    <p className='text-slate-300'>
                      123 Summit Drive
                      <br />
                      Mountainview, ST 12345
                    </p>
                    <a
                      href='https://maps.google.com'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-blue-400 hover:text-blue-300 text-sm mt-2 inline-block'
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <div className='p-3 bg-white/10 backdrop-blur rounded-lg'>
                    <Clock className='w-6 h-6' />
                  </div>
                  <div>
                    <h3 className='font-semibold text-lg mb-1'>Hours</h3>
                    <div className='text-slate-300 space-y-1'>
                      <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                      <p>Saturday: 9:00 AM - 6:00 PM</p>
                      <p>Sunday: 10:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='mt-8'>
                <Link href='/contact'>
                  <Button
                    size='lg'
                    className='bg-blue-600 hover:bg-blue-700 text-white'
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>

            <div className='bg-slate-200 rounded-xl overflow-hidden shadow-2xl'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0194033222473!2d-122.41941508468193!3d37.77492977975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1234567890'
                width='100%'
                height='450'
                style={{ border: 0 }}
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                title='Summit Motors Location'
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-slate-900 mb-4'>
            What Our Customers Say
          </h2>
          <div className='flex items-center justify-center gap-1 mb-2'>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className='w-6 h-6 fill-yellow-400 text-yellow-400'
              />
            ))}
          </div>
          <p className='text-slate-600'>4.9 out of 5 stars from 500+ reviews</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className='bg-white rounded-xl shadow-sm p-6'
            >
              <div className='flex items-center gap-1 mb-3'>
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className='w-4 h-4 fill-yellow-400 text-yellow-400'
                  />
                ))}
              </div>
              <p className='text-slate-700 mb-4'>{review.text}</p>
              <div className='flex items-center justify-between text-sm'>
                <span className='font-medium text-slate-900'>
                  {review.name}
                </span>
                <span className='text-slate-500'>{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
