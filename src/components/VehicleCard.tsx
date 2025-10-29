import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Fuel, Gauge, Calendar, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Vehicle } from '@/utils/vehicles';

interface Props {
  vehicle: Vehicle;
  index?: number;
}

export default function VehicleCard({ vehicle, index = 0 }: Props) {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(vehicle.price);

  const formattedMileage = new Intl.NumberFormat('en-US').format(
    vehicle.mileage ?? 0
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link
        href={`/vehicles/${vehicle.id}`}
        className='group block bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200'
      >
        {/* Image */}
        <div className='relative aspect-4/3 overflow-hidden bg-slate-100'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={
              vehicle.thumbnail ||
              vehicle.images?.[0] ||
              'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800'
            }
            alt={`${vehicle.year ?? ''} ${vehicle.make} ${vehicle.model}`}
            className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
            loading='lazy'
          />

          {/* Badges */}
          <div className='absolute top-3 left-3 flex gap-2'>
            {vehicle.isNew && (
              <Badge className='bg-green-600 text-white shadow-lg'>New</Badge>
            )}
            {vehicle.isCertified && (
              <Badge className='bg-blue-600 text-white shadow-lg flex items-center gap-1'>
                <Award className='w-3 h-3' /> CPO
              </Badge>
            )}
            {vehicle.msrp && vehicle.price < vehicle.msrp && (
              <Badge className='bg-orange-600 text-white shadow-lg'>
                Reduced
              </Badge>
            )}
          </div>

          {(vehicle as any).inStock === false && (
            <div className='absolute inset-0 bg-slate-900/60 flex items-center justify-center'>
              <Badge className='bg-white text-slate-900 text-lg px-4 py-2'>
                Sold
              </Badge>
            </div>
          )}
        </div>

        {/* Content */}
        <div className='p-5'>
          {/* Title & Price */}
          <div className='mb-3'>
            <h3 className='text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors'>
              {vehicle.year} {vehicle.make} {vehicle.model}
            </h3>
            {vehicle.trim && (
              <p className='text-sm text-slate-500'>{vehicle.trim}</p>
            )}
          </div>

          <div className='mb-4'>
            <div className='text-2xl font-bold text-blue-600'>
              {formattedPrice}
            </div>
            {vehicle.msrp && vehicle.msrp > vehicle.price && (
              <div className='text-sm text-slate-500 line-through'>
                MSRP:{' '}
                {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                  minimumFractionDigits: 0,
                }).format(vehicle.msrp)}
              </div>
            )}
          </div>

          {/* Key Specs */}
          <div className='grid grid-cols-3 gap-3 pt-4 border-t border-slate-100'>
            <div className='flex items-center gap-1.5 text-slate-600'>
              <Gauge className='w-4 h-4 text-slate-400' />
              <span className='text-xs'>{formattedMileage} mi</span>
            </div>
            <div className='flex items-center gap-1.5 text-slate-600'>
              <Calendar className='w-4 h-4 text-slate-400' />
              <span className='text-xs'>{vehicle.year}</span>
            </div>
            <div className='flex items-center gap-1.5 text-slate-600'>
              <Fuel className='w-4 h-4 text-slate-400' />
              <span className='text-xs'>{vehicle.fuelType || 'Gas'}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
