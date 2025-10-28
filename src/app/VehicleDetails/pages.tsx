import { useState, type ComponentType, type SVGProps } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getVehicle } from '@/utils/vehicles';
import Link from 'next/link';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  ChevronLeft,
  Phone,
  MessageSquare,
  Calendar,
  Gauge,
  Fuel,
  Cog,
  Navigation,
  Palette,
  Award,
  CheckCircle,
  ChevronRight,
} from 'lucide-react';
import VehicleCard from '@/components/VehicleCard';

// Add types
interface Vehicle {
  id: string;
  images?: string[];
  thumbnail?: string;
  price: number;
  make: string;
  model: string;
  year?: number | string;
  mileage?: number;
  fuelType?: string;
  transmission?: string;
  drivetrain?: string;
  exteriorColor?: string;
  engine?: string;
  cityMpg?: number;
  hwyMpg?: number;
  features?: string[];
  trim?: string;
  isNew?: boolean;
  isCertified?: boolean;
  msrp?: number;
}

interface Spec {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  value: string | number;
}

export default function VehicleDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const vehicleId: string | null = urlParams.get('id');
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const { data: vehicle, isLoading } = useQuery<Vehicle | undefined, unknown>({
    queryKey: ['vehicle', vehicleId],
    queryFn: async () => {
      const vehicles = await getVehicle.entities.Vehicle.list();
      return vehicles.find((v: { id: string | null }) => v.id === vehicleId);
    },
    enabled: !!vehicleId,
  });

  const { data: similarVehicles = [] } = useQuery<Vehicle[], unknown>({
    queryKey: ['similar-vehicles', vehicle?.make],
    queryFn: async () => {
      if (!vehicle) return [];
      const all = await getVehicle.entities.Vehicle.filter({
        make: vehicle.make,
      });
      return all.filter((v: { id: any }) => v.id !== vehicle.id).slice(0, 3);
    },
    enabled: !!vehicle,
  });

  if (isLoading) {
    return (
      <div
        data-source-location='pages/VehicleDetails:50:6'
        data-dynamic-content='false'
        className='min-h-screen bg-neutral-50 flex items-center justify-center'
      >
        <div
          data-source-location='pages/VehicleDetails:51:8'
          data-dynamic-content='false'
          className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600'
        ></div>
      </div>
    );
  }

  if (!vehicle) {
    return (
      <div
        data-source-location='pages/VehicleDetails:58:6'
        data-dynamic-content='true'
        className='min-h-screen bg-neutral-50 flex items-center justify-center'
      >
        <div
          data-source-location='pages/VehicleDetails:59:8'
          data-dynamic-content='true'
          className='text-center'
        >
          <h2
            data-source-location='pages/VehicleDetails:60:10'
            data-dynamic-content='false'
            className='text-2xl font-bold text-slate-900 mb-4'
          >
            Vehicle Not Found
          </h2>
          <Link
            data-source-location='pages/VehicleDetails:61:10'
            data-dynamic-content='false'
            to={createPageUrl('Inventory')}
          >
            <Button
              data-source-location='pages/VehicleDetails:62:12'
              data-dynamic-content='false'
            >
              Back to Inventory
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const images: string[] =
    vehicle.images?.length > 0
      ? vehicle.images
      : [
          vehicle.thumbnail ||
            'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200',
        ];

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(vehicle.price);

  const specs: Spec[] = [
    { icon: Calendar, label: 'Year', value: vehicle.year ?? '' },
    {
      icon: Gauge,
      label: 'Mileage',
      value: `${new Intl.NumberFormat('en-US').format(
        vehicle.mileage ?? 0
      )} mi`,
    },
    { icon: Fuel, label: 'Fuel Type', value: vehicle.fuelType || 'Gasoline' },
    {
      icon: Cog,
      label: 'Transmission',
      value: vehicle.transmission || 'Automatic',
    },
    {
      icon: Navigation,
      label: 'Drivetrain',
      value: vehicle.drivetrain || 'FWD',
    },
    { icon: Palette, label: 'Exterior', value: vehicle.exteriorColor || 'N/A' },
  ];

  return (
    <div
      data-source-location='pages/VehicleDetails:87:4'
      data-dynamic-content='true'
      className='min-h-screen bg-neutral-50'
    >
      {/* Breadcrumb */}
      <div
        data-source-location='pages/VehicleDetails:89:6'
        data-dynamic-content='true'
        className='bg-white border-b border-slate-200'
      >
        <div
          data-source-location='pages/VehicleDetails:90:8'
          data-dynamic-content='true'
          className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'
        >
          <Link
            data-source-location='pages/VehicleDetails:91:10'
            data-dynamic-content='false'
            to={createPageUrl('Inventory')}
            className='inline-flex items-center text-sm text-slate-600 hover:text-blue-600 transition-colors'
          >
            <ChevronLeft
              data-source-location='pages/VehicleDetails:95:12'
              data-dynamic-content='false'
              className='w-4 h-4 mr-1'
            />
            Back to Inventory
          </Link>
        </div>
      </div>

      <div
        data-source-location='pages/VehicleDetails:101:6'
        data-dynamic-content='true'
        className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'
      >
        <div
          data-source-location='pages/VehicleDetails:102:8'
          data-dynamic-content='true'
          className='grid grid-cols-1 lg:grid-cols-3 gap-8'
        >
          {/* Left Column - Images & Details */}
          <div
            data-source-location='pages/VehicleDetails:104:10'
            data-dynamic-content='true'
            className='lg:col-span-2 space-y-6'
          >
            {/* Image Carousel */}
            <div
              data-source-location='pages/VehicleDetails:106:12'
              data-dynamic-content='true'
              className='bg-white rounded-xl shadow-sm overflow-hidden'
            >
              <div
                data-source-location='pages/VehicleDetails:107:14'
                data-dynamic-content='true'
                className='relative aspect-[16/10] bg-slate-100'
              >
                <img
                  data-source-location='pages/VehicleDetails:108:16'
                  data-dynamic-content='false'
                  src={images[currentImageIndex]}
                  alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                  className='w-full h-full object-cover'
                />

                {images.length > 1 && (
                  <>
                    <button
                      data-source-location='pages/VehicleDetails:116:20'
                      data-dynamic-content='false'
                      onClick={() =>
                        setCurrentImageIndex((prev) =>
                          prev === 0 ? images.length - 1 : prev - 1
                        )
                      }
                      className='absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur p-2 rounded-full shadow-lg hover:bg-white transition-colors'
                    >
                      <ChevronLeft
                        data-source-location='pages/VehicleDetails:120:22'
                        data-dynamic-content='false'
                        className='w-6 h-6'
                      />
                    </button>
                    <button
                      data-source-location='pages/VehicleDetails:122:20'
                      data-dynamic-content='false'
                      onClick={() =>
                        setCurrentImageIndex((prev) =>
                          prev === images.length - 1 ? 0 : prev + 1
                        )
                      }
                      className='absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur p-2 rounded-full shadow-lg hover:bg-white transition-colors'
                    >
                      <ChevronRight
                        data-source-location='pages/VehicleDetails:126:22'
                        data-dynamic-content='false'
                        className='w-6 h-6'
                      />
                    </button>
                  </>
                )}

                <div
                  data-source-location='pages/VehicleDetails:131:16'
                  data-dynamic-content='true'
                  className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2'
                >
                  {images.map((_, index) => (
                    <button
                      data-source-location='pages/VehicleDetails:133:20'
                      data-dynamic-content='false'
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex
                          ? 'bg-white w-8'
                          : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {images.length > 1 && (
                <div
                  data-source-location='pages/VehicleDetails:145:16'
                  data-dynamic-content='true'
                  className='p-4 border-t border-slate-200 overflow-x-auto'
                >
                  <div
                    data-source-location='pages/VehicleDetails:146:18'
                    data-dynamic-content='true'
                    className='flex gap-2'
                  >
                    {images.map((img, index) => (
                      <button
                        data-source-location='pages/VehicleDetails:148:22'
                        data-dynamic-content='true'
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                          index === currentImageIndex
                            ? 'border-blue-600'
                            : 'border-transparent'
                        }`}
                      >
                        <img
                          data-source-location='pages/VehicleDetails:155:24'
                          data-dynamic-content='false'
                          src={img}
                          alt={`View ${index + 1}`}
                          className='w-full h-full object-cover'
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Specs Grid */}
            <div
              data-source-location='pages/VehicleDetails:164:12'
              data-dynamic-content='true'
              className='bg-white rounded-xl shadow-sm p-6'
            >
              <h2
                data-source-location='pages/VehicleDetails:165:14'
                data-dynamic-content='false'
                className='text-2xl font-bold text-slate-900 mb-6'
              >
                Specifications
              </h2>
              <div
                data-source-location='pages/VehicleDetails:166:14'
                data-dynamic-content='true'
                className='grid grid-cols-2 md:grid-cols-3 gap-6'
              >
                {specs.map((spec, index) => {
                  const Icon = spec.icon;
                  return (
                    <div
                      data-source-location='pages/VehicleDetails:170:20'
                      data-dynamic-content='true'
                      key={index}
                      className='flex items-start gap-3'
                    >
                      <div
                        data-source-location='pages/VehicleDetails:171:22'
                        data-dynamic-content='false'
                        className='p-2 bg-blue-100 rounded-lg'
                      >
                        <Icon
                          data-source-location='pages/VehicleDetails:172:24'
                          data-dynamic-content='false'
                          className='w-5 h-5 text-blue-600'
                        />
                      </div>
                      <div
                        data-source-location='pages/VehicleDetails:174:22'
                        data-dynamic-content='true'
                      >
                        <p
                          data-source-location='pages/VehicleDetails:175:24'
                          data-dynamic-content='true'
                          className='text-sm text-slate-600'
                        >
                          {spec.label}
                        </p>
                        <p
                          data-source-location='pages/VehicleDetails:176:24'
                          data-dynamic-content='true'
                          className='font-semibold text-slate-900'
                        >
                          {spec.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {vehicle.engine && (
                <div
                  data-source-location='pages/VehicleDetails:184:16'
                  data-dynamic-content='true'
                  className='mt-6 pt-6 border-t border-slate-200'
                >
                  <p
                    data-source-location='pages/VehicleDetails:185:18'
                    data-dynamic-content='false'
                    className='text-sm text-slate-600 mb-1'
                  >
                    Engine
                  </p>
                  <p
                    data-source-location='pages/VehicleDetails:186:18'
                    data-dynamic-content='true'
                    className='font-semibold text-slate-900'
                  >
                    {vehicle.engine}
                  </p>
                </div>
              )}

              {(vehicle.cityMpg || vehicle.hwyMpg) && (
                <div
                  data-source-location='pages/VehicleDetails:191:16'
                  data-dynamic-content='true'
                  className='mt-4 pt-4 border-t border-slate-200'
                >
                  <p
                    data-source-location='pages/VehicleDetails:192:18'
                    data-dynamic-content='false'
                    className='text-sm text-slate-600 mb-1'
                  >
                    Fuel Economy
                  </p>
                  <p
                    data-source-location='pages/VehicleDetails:193:18'
                    data-dynamic-content='true'
                    className='font-semibold text-slate-900'
                  >
                    {vehicle.cityMpg && `${vehicle.cityMpg} city`}
                    {vehicle.cityMpg && vehicle.hwyMpg && ' / '}
                    {vehicle.hwyMpg && `${vehicle.hwyMpg} highway`} mpg
                  </p>
                </div>
              )}
            </div>

            {/* Features */}
            {vehicle.features && vehicle.features.length > 0 && (
              <div
                data-source-location='pages/VehicleDetails:204:14'
                data-dynamic-content='true'
                className='bg-white rounded-xl shadow-sm p-6'
              >
                <h2
                  data-source-location='pages/VehicleDetails:205:16'
                  data-dynamic-content='false'
                  className='text-2xl font-bold text-slate-900 mb-6'
                >
                  Features
                </h2>
                <div
                  data-source-location='pages/VehicleDetails:206:16'
                  data-dynamic-content='true'
                  className='grid grid-cols-1 md:grid-cols-2 gap-3'
                >
                  {vehicle.features.map((feature: string, index: number) => (
                    <div
                      data-source-location='pages/VehicleDetails:208:20'
                      data-dynamic-content='true'
                      key={index}
                      className='flex items-center gap-2'
                    >
                      <CheckCircle
                        data-source-location='pages/VehicleDetails:209:22'
                        data-dynamic-content='false'
                        className='w-5 h-5 text-green-600 flex-shrink-0'
                      />
                      <span
                        data-source-location='pages/VehicleDetails:210:22'
                        data-dynamic-content='true'
                        className='text-slate-700'
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Price & CTA */}
          <div
            data-source-location='pages/VehicleDetails:219:10'
            data-dynamic-content='true'
            className='lg:col-span-1'
          >
            <div
              data-source-location='pages/VehicleDetails:220:12'
              data-dynamic-content='true'
              className='sticky top-24 space-y-6'
            >
              {/* Price Card */}
              <div
                data-source-location='pages/VehicleDetails:222:14'
                data-dynamic-content='true'
                className='bg-white rounded-xl shadow-sm p-6'
              >
                <div
                  data-source-location='pages/VehicleDetails:223:16'
                  data-dynamic-content='true'
                  className='mb-4'
                >
                  <h1
                    data-source-location='pages/VehicleDetails:224:18'
                    data-dynamic-content='true'
                    className='text-2xl font-bold text-slate-900 mb-1'
                  >
                    {vehicle.year} {vehicle.make} {vehicle.model}
                  </h1>
                  {vehicle.trim && (
                    <p
                      data-source-location='pages/VehicleDetails:228:20'
                      data-dynamic-content='true'
                      className='text-slate-600'
                    >
                      {vehicle.trim}
                    </p>
                  )}
                </div>

                <div
                  data-source-location='pages/VehicleDetails:232:16'
                  data-dynamic-content='true'
                  className='flex gap-2 mb-6'
                >
                  {vehicle.isNew && (
                    <Badge className='bg-green-600 text-white'>New</Badge>
                  )}
                  {vehicle.isCertified && (
                    <Badge
                      className='bg-blue-600 text-white'
                      className='bg-blue-600 text-white flex items-center gap-1'
                    >
                      <Award
                        data-source-location='pages/VehicleDetails:238:22'
                        data-dynamic-content='false'
                        className='w-3 h-3'
                      />
                      Certified
                    </Badge>
                  )}
                </div>

                <div
                  data-source-location='pages/VehicleDetails:244:16'
                  data-dynamic-content='true'
                  className='mb-6'
                >
                  <div
                    data-source-location='pages/VehicleDetails:245:18'
                    data-dynamic-content='true'
                    className='text-4xl font-bold text-blue-600 mb-2'
                  >
                    {formattedPrice}
                  </div>
                  {vehicle.msrp && vehicle.msrp > vehicle.price && (
                    <div
                      data-source-location='pages/VehicleDetails:247:20'
                      data-dynamic-content='true'
                      className='text-slate-500'
                    >
                      <span
                        data-source-location='pages/VehicleDetails:248:22'
                        data-dynamic-content='true'
                        className='line-through'
                      >
                        MSRP: $
                        {new Intl.NumberFormat('en-US').format(vehicle.msrp)}
                      </span>
                      <span
                        data-source-location='pages/VehicleDetails:249:22'
                        data-dynamic-content='true'
                        className='ml-2 text-green-600 font-semibold'
                      >
                        Save $
                        {new Intl.NumberFormat('en-US').format(
                          vehicle.msrp - vehicle.price
                        )}
                      </span>
                    </div>
                  )}
                </div>

                <div
                  data-source-location='pages/VehicleDetails:256:16'
                  data-dynamic-content='true'
                  className='space-y-3'
                >
                  <a
                    data-source-location='pages/VehicleDetails:257:18'
                    data-dynamic-content='false'
                    href='tel:+15551234567'
                    className='block'
                  >
                    <Button
                      data-source-location='pages/VehicleDetails:258:20'
                      data-dynamic-content='false'
                      className='w-full bg-blue-600 hover:bg-blue-700 text-white'
                      size='lg'
                    >
                      <Phone
                        data-source-location='pages/VehicleDetails:259:22'
                        data-dynamic-content='false'
                        className='w-5 h-5 mr-2'
                      />
                      Call Now
                    </Button>
                  </a>
                  <a
                    data-source-location='pages/VehicleDetails:263:18'
                    data-dynamic-content='false'
                    href='sms:+15551234567'
                    className='block'
                  >
                    <Button
                      data-source-location='pages/VehicleDetails:264:20'
                      data-dynamic-content='false'
                      variant='outline'
                      className='w-full'
                      size='lg'
                    >
                      <MessageSquare
                        data-source-location='pages/VehicleDetails:265:22'
                        data-dynamic-content='false'
                        className='w-5 h-5 mr-2'
                      />
                      Text Us
                    </Button>
                  </a>
                  <Link
                    data-source-location='pages/VehicleDetails:269:18'
                    data-dynamic-content='false'
                    to={createPageUrl('Contact')}
                    className='block'
                  >
                    <Button
                      data-source-location='pages/VehicleDetails:270:20'
                      data-dynamic-content='false'
                      variant='outline'
                      className='w-full'
                      size='lg'
                    >
                      <Calendar
                        data-source-location='pages/VehicleDetails:271:22'
                        data-dynamic-content='false'
                        className='w-5 h-5 mr-2'
                      />
                      Schedule Test Drive
                    </Button>
                  </Link>
                </div>
              </div>

              {/* CARFAX Badge */}
              <div
                data-source-location='pages/VehicleDetails:279:14'
                data-dynamic-content='false'
                className='bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 text-white'
              >
                <Award
                  data-source-location='pages/VehicleDetails:280:16'
                  data-dynamic-content='false'
                  className='w-12 h-12 mb-4 text-blue-400'
                />
                <h3
                  data-source-location='pages/VehicleDetails:281:16'
                  data-dynamic-content='false'
                  className='text-lg font-semibold mb-2'
                >
                  Vehicle History Report
                </h3>
                <p
                  data-source-location='pages/VehicleDetails:282:16'
                  data-dynamic-content='false'
                  className='text-slate-300 text-sm mb-4'
                >
                  Get the complete vehicle history with CARFAX or AutoCheck.
                </p>
                <Button
                  data-source-location='pages/VehicleDetails:285:16'
                  data-dynamic-content='false'
                  variant='outline'
                  className='bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20 w-full'
                >
                  View Report
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Vehicles */}
        {similarVehicles.length > 0 && (
          <div
            data-source-location='pages/VehicleDetails:295:10'
            data-dynamic-content='true'
            className='mt-16'
          >
            <h2
              data-source-location='pages/VehicleDetails:296:12'
              data-dynamic-content='false'
              className='text-3xl font-bold text-slate-900 mb-8'
            >
              Similar Vehicles
            </h2>
            <div
              data-source-location='pages/VehicleDetails:297:12'
              data-dynamic-content='true'
              className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
            >
              {similarVehicles.map((v: unknown, index: number | undefined) => (
                <VehicleCard
                  data-source-location='pages/VehicleDetails:299:16'
                  data-dynamic-content='false'
                  key={v.id}
                  vehicle={v}
                  index={index}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
