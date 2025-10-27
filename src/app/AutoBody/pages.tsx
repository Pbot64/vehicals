import { useState } from 'react';
import Link from 'next/link';
import { createPageUrl } from '@/utils';
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
    <div
      data-source-location='pages/AutoBody:89:4'
      data-dynamic-content='true'
      className='min-h-screen bg-neutral-50'
    >
      {/* Hero */}
      <div
        data-source-location='pages/AutoBody:91:6'
        data-dynamic-content='true'
        className='bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-20'
      >
        <div
          data-source-location='pages/AutoBody:92:8'
          data-dynamic-content='true'
          className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
        >
          <motion.div
            data-source-location='pages/AutoBody:93:10'
            data-dynamic-content='true'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='max-w-3xl'
          >
            <div
              data-source-location='pages/AutoBody:98:12'
              data-dynamic-content='false'
              className='flex items-center gap-3 mb-4'
            >
              <Wrench
                data-source-location='pages/AutoBody:99:14'
                data-dynamic-content='false'
                className='w-12 h-12 text-blue-400'
              />
              <h1
                data-source-location='pages/AutoBody:100:14'
                data-dynamic-content='false'
                className='text-4xl md:text-5xl font-bold'
              >
                Auto Body Shop
              </h1>
            </div>
            <p
              data-source-location='pages/AutoBody:102:12'
              data-dynamic-content='false'
              className='text-xl text-slate-300 mb-8'
            >
              Expert collision repair, paint, and restoration services. We
              restore your vehicle to pre-accident condition.
            </p>
            <Link
              data-source-location='pages/AutoBody:105:12'
              data-dynamic-content='false'
              to={createPageUrl('Contact')}
            >
              <Button
                data-source-location='pages/AutoBody:106:14'
                data-dynamic-content='false'
                size='lg'
                className='bg-blue-600 hover:bg-blue-700 text-white'
              >
                Get Free Estimate
                <ChevronRight
                  data-source-location='pages/AutoBody:108:16'
                  data-dynamic-content='false'
                  className='ml-2 w-5 h-5'
                />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Before/After Slider */}
      <div
        data-source-location='pages/AutoBody:116:6'
        data-dynamic-content='true'
        className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'
      >
        <div
          data-source-location='pages/AutoBody:117:8'
          data-dynamic-content='false'
          className='text-center mb-12'
        >
          <h2
            data-source-location='pages/AutoBody:118:10'
            data-dynamic-content='false'
            className='text-3xl font-bold text-slate-900 mb-4'
          >
            See the Difference
          </h2>
          <p
            data-source-location='pages/AutoBody:119:10'
            data-dynamic-content='false'
            className='text-lg text-slate-600 max-w-2xl mx-auto'
          >
            Browse our recent work and see the quality of our craftsmanship
          </p>
        </div>

        <div
          data-source-location='pages/AutoBody:124:8'
          data-dynamic-content='true'
          className='max-w-4xl mx-auto'
        >
          <div
            data-source-location='pages/AutoBody:125:10'
            data-dynamic-content='true'
            className='bg-white rounded-2xl shadow-xl overflow-hidden'
          >
            {/* Before/After Image */}
            <div
              data-source-location='pages/AutoBody:127:12'
              data-dynamic-content='true'
              className='relative aspect-video overflow-hidden select-none'
            >
              <img
                data-source-location='pages/AutoBody:128:14'
                data-dynamic-content='false'
                src={currentImage.before}
                alt='Before'
                className='absolute inset-0 w-full h-full object-cover'
              />

              <div
                data-source-location='pages/AutoBody:133:14'
                data-dynamic-content='true'
                className='absolute inset-0 overflow-hidden'
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img
                  data-source-location='pages/AutoBody:137:16'
                  data-dynamic-content='false'
                  src={currentImage.after}
                  alt='After'
                  className='absolute inset-0 w-full h-full object-cover'
                />
              </div>

              {/* Slider Handle */}
              <div
                data-source-location='pages/AutoBody:145:14'
                data-dynamic-content='false'
                className='absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize'
                style={{ left: `${sliderPosition}%` }}
                onMouseDown={(e) => {
                  const startX = e.clientX;
                  const startPosition = sliderPosition;

                  const handleMouseMove = (e) => {
                    const rect =
                      e.currentTarget.parentElement.getBoundingClientRect();
                    const x = e.clientX - rect.left;
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
                <div
                  data-source-location='pages/AutoBody:168:16'
                  data-dynamic-content='false'
                  className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center'
                >
                  <div
                    data-source-location='pages/AutoBody:169:18'
                    data-dynamic-content='false'
                    className='flex gap-1'
                  >
                    <ChevronRight
                      data-source-location='pages/AutoBody:170:20'
                      data-dynamic-content='false'
                      className='w-4 h-4 rotate-180'
                    />
                    <ChevronRight
                      data-source-location='pages/AutoBody:171:20'
                      data-dynamic-content='false'
                      className='w-4 h-4'
                    />
                  </div>
                </div>
              </div>

              {/* Labels */}
              <div
                data-source-location='pages/AutoBody:177:14'
                data-dynamic-content='false'
                className='absolute top-4 left-4 bg-slate-900/80 backdrop-blur px-3 py-1 rounded-lg text-white text-sm font-medium'
              >
                Before
              </div>
              <div
                data-source-location='pages/AutoBody:180:14'
                data-dynamic-content='false'
                className='absolute top-4 right-4 bg-blue-600/80 backdrop-blur px-3 py-1 rounded-lg text-white text-sm font-medium'
              >
                After
              </div>
            </div>

            {/* Image Navigation */}
            <div
              data-source-location='pages/AutoBody:186:12'
              data-dynamic-content='true'
              className='p-6 border-t border-slate-200'
            >
              <h3
                data-source-location='pages/AutoBody:187:14'
                data-dynamic-content='true'
                className='text-xl font-semibold text-slate-900 mb-4 text-center'
              >
                {currentImage.title}
              </h3>
              <div
                data-source-location='pages/AutoBody:190:14'
                data-dynamic-content='true'
                className='flex gap-2 justify-center'
              >
                {beforeAfterImages.map((_, index) => (
                  <button
                    data-source-location='pages/AutoBody:192:18'
                    data-dynamic-content='false'
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
      <div
        data-source-location='pages/AutoBody:212:6'
        data-dynamic-content='true'
        className='bg-white py-16'
      >
        <div
          data-source-location='pages/AutoBody:213:8'
          data-dynamic-content='true'
          className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
        >
          <div
            data-source-location='pages/AutoBody:214:10'
            data-dynamic-content='false'
            className='text-center mb-12'
          >
            <h2
              data-source-location='pages/AutoBody:215:12'
              data-dynamic-content='false'
              className='text-3xl font-bold text-slate-900 mb-4'
            >
              Our Services
            </h2>
            <p
              data-source-location='pages/AutoBody:216:12'
              data-dynamic-content='false'
              className='text-lg text-slate-600 max-w-2xl mx-auto'
            >
              Comprehensive auto body services to restore your vehicle
            </p>
          </div>

          <div
            data-source-location='pages/AutoBody:221:10'
            data-dynamic-content='true'
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  data-source-location='pages/AutoBody:225:16'
                  data-dynamic-content='true'
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className='bg-neutral-50 rounded-xl p-6 hover:shadow-lg transition-shadow'
                >
                  <div
                    data-source-location='pages/AutoBody:233:18'
                    data-dynamic-content='false'
                    className='w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4'
                  >
                    <Icon
                      data-source-location='pages/AutoBody:234:20'
                      data-dynamic-content='false'
                      className='w-6 h-6 text-blue-600'
                    />
                  </div>
                  <h3
                    data-source-location='pages/AutoBody:236:18'
                    data-dynamic-content='true'
                    className='text-xl font-semibold text-slate-900 mb-2'
                  >
                    {service.title}
                  </h3>
                  <p
                    data-source-location='pages/AutoBody:237:18'
                    data-dynamic-content='true'
                    className='text-slate-600 mb-4'
                  >
                    {service.description}
                  </p>
                  <ul
                    data-source-location='pages/AutoBody:238:18'
                    data-dynamic-content='true'
                    className='space-y-2'
                  >
                    {service.features.map((feature, i) => (
                      <li
                        data-source-location='pages/AutoBody:240:22'
                        data-dynamic-content='true'
                        key={i}
                        className='flex items-center gap-2 text-sm text-slate-700'
                      >
                        <CheckCircle
                          data-source-location='pages/AutoBody:241:24'
                          data-dynamic-content='false'
                          className='w-4 h-4 text-green-600 flex-shrink-0'
                        />
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
      <div
        data-source-location='pages/AutoBody:254:6'
        data-dynamic-content='true'
        className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'
      >
        <div
          data-source-location='pages/AutoBody:255:8'
          data-dynamic-content='true'
          className='grid grid-cols-1 lg:grid-cols-2 gap-8'
        >
          {/* Certifications */}
          <div
            data-source-location='pages/AutoBody:257:10'
            data-dynamic-content='true'
            className='bg-white rounded-xl shadow-sm p-8'
          >
            <div
              data-source-location='pages/AutoBody:258:12'
              data-dynamic-content='false'
              className='flex items-center gap-3 mb-6'
            >
              <Award
                data-source-location='pages/AutoBody:259:14'
                data-dynamic-content='false'
                className='w-8 h-8 text-blue-600'
              />
              <h2
                data-source-location='pages/AutoBody:260:14'
                data-dynamic-content='false'
                className='text-2xl font-bold text-slate-900'
              >
                Certifications
              </h2>
            </div>
            <div
              data-source-location='pages/AutoBody:262:12'
              data-dynamic-content='true'
              className='space-y-4'
            >
              {certifications.map((cert, index) => (
                <div
                  data-source-location='pages/AutoBody:264:16'
                  data-dynamic-content='true'
                  key={index}
                  className='flex items-start gap-3 p-4 bg-neutral-50 rounded-lg'
                >
                  <CheckCircle
                    data-source-location='pages/AutoBody:265:18'
                    data-dynamic-content='false'
                    className='w-5 h-5 text-green-600 flex-shrink-0 mt-0.5'
                  />
                  <div
                    data-source-location='pages/AutoBody:266:18'
                    data-dynamic-content='true'
                  >
                    <h3
                      data-source-location='pages/AutoBody:267:20'
                      data-dynamic-content='true'
                      className='font-semibold text-slate-900'
                    >
                      {cert.name}
                    </h3>
                    <p
                      data-source-location='pages/AutoBody:268:20'
                      data-dynamic-content='true'
                      className='text-sm text-slate-600'
                    >
                      {cert.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process & Turnaround */}
          <div
            data-source-location='pages/AutoBody:276:10'
            data-dynamic-content='false'
            className='bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-sm p-8 text-white'
          >
            <div
              data-source-location='pages/AutoBody:277:12'
              data-dynamic-content='false'
              className='flex items-center gap-3 mb-6'
            >
              <Clock
                data-source-location='pages/AutoBody:278:14'
                data-dynamic-content='false'
                className='w-8 h-8'
              />
              <h2
                data-source-location='pages/AutoBody:279:14'
                data-dynamic-content='false'
                className='text-2xl font-bold'
              >
                Our Process
              </h2>
            </div>
            <div
              data-source-location='pages/AutoBody:281:12'
              data-dynamic-content='false'
              className='space-y-6'
            >
              <div
                data-source-location='pages/AutoBody:282:14'
                data-dynamic-content='false'
                className='flex gap-4'
              >
                <div
                  data-source-location='pages/AutoBody:283:16'
                  data-dynamic-content='false'
                  className='flex-shrink-0 w-8 h-8 bg-white/20 backdrop-blur rounded-full flex items-center justify-center font-bold'
                >
                  1
                </div>
                <div
                  data-source-location='pages/AutoBody:286:16'
                  data-dynamic-content='false'
                >
                  <h3
                    data-source-location='pages/AutoBody:287:18'
                    data-dynamic-content='false'
                    className='font-semibold mb-1'
                  >
                    Free Estimate
                  </h3>
                  <p
                    data-source-location='pages/AutoBody:288:18'
                    data-dynamic-content='false'
                    className='text-blue-100 text-sm'
                  >
                    Detailed assessment and transparent pricing
                  </p>
                </div>
              </div>
              <div
                data-source-location='pages/AutoBody:291:14'
                data-dynamic-content='false'
                className='flex gap-4'
              >
                <div
                  data-source-location='pages/AutoBody:292:16'
                  data-dynamic-content='false'
                  className='flex-shrink-0 w-8 h-8 bg-white/20 backdrop-blur rounded-full flex items-center justify-center font-bold'
                >
                  2
                </div>
                <div
                  data-source-location='pages/AutoBody:295:16'
                  data-dynamic-content='false'
                >
                  <h3
                    data-source-location='pages/AutoBody:296:18'
                    data-dynamic-content='false'
                    className='font-semibold mb-1'
                  >
                    Insurance Coordination
                  </h3>
                  <p
                    data-source-location='pages/AutoBody:297:18'
                    data-dynamic-content='false'
                    className='text-blue-100 text-sm'
                  >
                    We handle all insurance paperwork
                  </p>
                </div>
              </div>
              <div
                data-source-location='pages/AutoBody:300:14'
                data-dynamic-content='false'
                className='flex gap-4'
              >
                <div
                  data-source-location='pages/AutoBody:301:16'
                  data-dynamic-content='false'
                  className='flex-shrink-0 w-8 h-8 bg-white/20 backdrop-blur rounded-full flex items-center justify-center font-bold'
                >
                  3
                </div>
                <div
                  data-source-location='pages/AutoBody:304:16'
                  data-dynamic-content='false'
                >
                  <h3
                    data-source-location='pages/AutoBody:305:18'
                    data-dynamic-content='false'
                    className='font-semibold mb-1'
                  >
                    Expert Repairs
                  </h3>
                  <p
                    data-source-location='pages/AutoBody:306:18'
                    data-dynamic-content='false'
                    className='text-blue-100 text-sm'
                  >
                    Certified technicians restore your vehicle
                  </p>
                </div>
              </div>
              <div
                data-source-location='pages/AutoBody:309:14'
                data-dynamic-content='false'
                className='flex gap-4'
              >
                <div
                  data-source-location='pages/AutoBody:310:16'
                  data-dynamic-content='false'
                  className='flex-shrink-0 w-8 h-8 bg-white/20 backdrop-blur rounded-full flex items-center justify-center font-bold'
                >
                  4
                </div>
                <div
                  data-source-location='pages/AutoBody:313:16'
                  data-dynamic-content='false'
                >
                  <h3
                    data-source-location='pages/AutoBody:314:18'
                    data-dynamic-content='false'
                    className='font-semibold mb-1'
                  >
                    Quality Inspection
                  </h3>
                  <p
                    data-source-location='pages/AutoBody:315:18'
                    data-dynamic-content='false'
                    className='text-blue-100 text-sm'
                  >
                    Thorough check before delivery
                  </p>
                </div>
              </div>

              <div
                data-source-location='pages/AutoBody:319:14'
                data-dynamic-content='false'
                className='pt-6 border-t border-white/20'
              >
                <p
                  data-source-location='pages/AutoBody:320:16'
                  data-dynamic-content='false'
                  className='text-sm text-blue-100 mb-2'
                >
                  Average Turnaround
                </p>
                <p
                  data-source-location='pages/AutoBody:321:16'
                  data-dynamic-content='false'
                  className='text-3xl font-bold'
                >
                  3-7 Days
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div
        data-source-location='pages/AutoBody:329:6'
        data-dynamic-content='true'
        className='bg-slate-900 text-white py-16'
      >
        <div
          data-source-location='pages/AutoBody:330:8'
          data-dynamic-content='true'
          className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'
        >
          <h2
            data-source-location='pages/AutoBody:331:10'
            data-dynamic-content='false'
            className='text-3xl font-bold mb-4'
          >
            Ready to Restore Your Vehicle?
          </h2>
          <p
            data-source-location='pages/AutoBody:332:10'
            data-dynamic-content='false'
            className='text-xl text-slate-300 mb-8'
          >
            Get a free estimate today and see why we're the trusted choice for
            auto body repair.
          </p>
          <div
            data-source-location='pages/AutoBody:335:10'
            data-dynamic-content='true'
            className='flex flex-col sm:flex-row gap-4 justify-center'
          >
            <Link
              data-source-location='pages/AutoBody:336:12'
              data-dynamic-content='false'
              to={createPageUrl('Contact')}
            >
              <Button
                data-source-location='pages/AutoBody:337:14'
                data-dynamic-content='false'
                size='lg'
                className='bg-blue-600 hover:bg-blue-700 text-white'
              >
                Request Estimate
              </Button>
            </Link>
            <a
              data-source-location='pages/AutoBody:341:12'
              data-dynamic-content='false'
              href='tel:+15551234567'
            >
              <Button
                data-source-location='pages/AutoBody:342:14'
                data-dynamic-content='false'
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
