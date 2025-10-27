import Link from 'next/link';
import { createPageUrl } from '@/utils';
import { Badge } from '@/components/ui/badge';
import { Fuel, Gauge, Calendar, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function VehicleCard({ vehicle, index = 0 }) {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(vehicle.price);

  const formattedMileage = new Intl.NumberFormat('en-US').format(
    vehicle.mileage
  );

  return (
    <motion.div
      data-source-location='components/VehicleCard:17:4'
      data-dynamic-content='true'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link
        data-source-location='components/VehicleCard:22:6'
        data-dynamic-content='true'
        to={`${createPageUrl('VehicleDetails')}?id=${vehicle.id}`}
        className='group block bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200'
      >
        {/* Image */}
        <div
          data-source-location='components/VehicleCard:27:8'
          data-dynamic-content='true'
          className='relative aspect-[4/3] overflow-hidden bg-slate-100'
        >
          <img
            data-source-location='components/VehicleCard:28:10'
            data-dynamic-content='false'
            src={
              vehicle.thumbnail ||
              vehicle.images?.[0] ||
              'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800'
            }
            alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
            className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
            loading='lazy'
          />

          {/* Badges */}
          <div
            data-source-location='components/VehicleCard:36:10'
            data-dynamic-content='true'
            className='absolute top-3 left-3 flex gap-2'
          >
            {vehicle.isNew && (
              <Badge
                data-source-location='components/VehicleCard:38:14'
                data-dynamic-content='false'
                className='bg-green-600 text-white shadow-lg'
              >
                New
              </Badge>
            )}
            {vehicle.isCertified && (
              <Badge
                data-source-location='components/VehicleCard:41:14'
                data-dynamic-content='false'
                className='bg-blue-600 text-white shadow-lg flex items-center gap-1'
              >
                <Award
                  data-source-location='components/VehicleCard:42:16'
                  data-dynamic-content='false'
                  className='w-3 h-3'
                />
                CPO
              </Badge>
            )}
            {vehicle.msrp && vehicle.price < vehicle.msrp && (
              <Badge
                data-source-location='components/VehicleCard:47:14'
                data-dynamic-content='false'
                className='bg-orange-600 text-white shadow-lg'
              >
                Reduced
              </Badge>
            )}
          </div>

          {!vehicle.inStock && (
            <div
              data-source-location='components/VehicleCard:52:12'
              data-dynamic-content='false'
              className='absolute inset-0 bg-slate-900/60 flex items-center justify-center'
            >
              <Badge
                data-source-location='components/VehicleCard:53:14'
                data-dynamic-content='false'
                className='bg-white text-slate-900 text-lg px-4 py-2'
              >
                Sold
              </Badge>
            </div>
          )}
        </div>

        {/* Content */}
        <div
          data-source-location='components/VehicleCard:59:8'
          data-dynamic-content='true'
          className='p-5'
        >
          {/* Title & Price */}
          <div
            data-source-location='components/VehicleCard:61:10'
            data-dynamic-content='true'
            className='mb-3'
          >
            <h3
              data-source-location='components/VehicleCard:62:12'
              data-dynamic-content='true'
              className='text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors'
            >
              {vehicle.year} {vehicle.make} {vehicle.model}
            </h3>
            {vehicle.trim && (
              <p
                data-source-location='components/VehicleCard:66:14'
                data-dynamic-content='true'
                className='text-sm text-slate-500'
              >
                {vehicle.trim}
              </p>
            )}
          </div>

          <div
            data-source-location='components/VehicleCard:70:10'
            data-dynamic-content='true'
            className='mb-4'
          >
            <div
              data-source-location='components/VehicleCard:71:12'
              data-dynamic-content='true'
              className='text-2xl font-bold text-blue-600'
            >
              {formattedPrice}
            </div>
            {vehicle.msrp && vehicle.msrp > vehicle.price && (
              <div
                data-source-location='components/VehicleCard:73:14'
                data-dynamic-content='true'
                className='text-sm text-slate-500 line-through'
              >
                MSRP: ${new Intl.NumberFormat('en-US').format(vehicle.msrp)}
              </div>
            )}
          </div>

          {/* Key Specs */}
          <div
            data-source-location='components/VehicleCard:80:10'
            data-dynamic-content='true'
            className='grid grid-cols-3 gap-3 pt-4 border-t border-slate-100'
          >
            <div
              data-source-location='components/VehicleCard:81:12'
              data-dynamic-content='true'
              className='flex items-center gap-1.5 text-slate-600'
            >
              <Gauge
                data-source-location='components/VehicleCard:82:14'
                data-dynamic-content='false'
                className='w-4 h-4 text-slate-400'
              />
              <span
                data-source-location='components/VehicleCard:83:14'
                data-dynamic-content='true'
                className='text-xs'
              >
                {formattedMileage} mi
              </span>
            </div>
            <div
              data-source-location='components/VehicleCard:85:12'
              data-dynamic-content='true'
              className='flex items-center gap-1.5 text-slate-600'
            >
              <Calendar
                data-source-location='components/VehicleCard:86:14'
                data-dynamic-content='false'
                className='w-4 h-4 text-slate-400'
              />
              <span
                data-source-location='components/VehicleCard:87:14'
                data-dynamic-content='true'
                className='text-xs'
              >
                {vehicle.year}
              </span>
            </div>
            <div
              data-source-location='components/VehicleCard:89:12'
              data-dynamic-content='true'
              className='flex items-center gap-1.5 text-slate-600'
            >
              <Fuel
                data-source-location='components/VehicleCard:90:14'
                data-dynamic-content='false'
                className='w-4 h-4 text-slate-400'
              />
              <span
                data-source-location='components/VehicleCard:91:14'
                data-dynamic-content='true'
                className='text-xs'
              >
                {vehicle.fuelType || 'Gas'}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
