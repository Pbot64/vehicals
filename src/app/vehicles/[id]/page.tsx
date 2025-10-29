'use client';

import Link from 'next/link';
import { getVehicle, type Vehicle } from '@/utils/vehicles';

type PageProps = { params: { id: string } };

export default function VehicleDetailsPage({ params }: PageProps) {
  const vehicle: Vehicle | undefined = getVehicle(params.id);

  if (!vehicle) {
    return <div className='max-w-3xl mx-auto p-6'>Vehicle not found.</div>;
  }

  return (
    <div className='max-w-5xl mx-auto p-6'>
      <Link href='/inventory' className='text-sm text-slate-700 underline'>
        ← Back to inventory
      </Link>

      <h1 className='mt-4 text-2xl font-semibold'>
        {vehicle.year} {vehicle.make} {vehicle.model}
      </h1>

      {vehicle.images?.[0] ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={vehicle.images[0]}
          alt={`${vehicle.make} ${vehicle.model}`}
          className='mt-4 w-full rounded-md object-cover'
        />
      ) : null}

      <dl className='mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4'>
        <div>
          <dt className='text-slate-500 text-sm'>Price</dt>
          <dd className='font-medium'>
            ${Intl.NumberFormat().format(vehicle.price)}
          </dd>
        </div>
        {vehicle.mileage != null && (
          <div>
            <dt className='text-slate-500 text-sm'>Mileage</dt>
            <dd className='font-medium'>
              {Intl.NumberFormat().format(vehicle.mileage)} mi
            </dd>
          </div>
        )}
        {vehicle.fuelType && (
          <div>
            <dt className='text-slate-500 text-sm'>Fuel</dt>
            <dd className='font-medium'>{vehicle.fuelType}</dd>
          </div>
        )}
        {vehicle.transmission && (
          <div>
            <dt className='text-slate-500 text-sm'>Transmission</dt>
            <dd className='font-medium'>{vehicle.transmission}</dd>
          </div>
        )}
        {vehicle.drivetrain && (
          <div>
            <dt className='text-slate-500 text-sm'>Drivetrain</dt>
            <dd className='font-medium'>{vehicle.drivetrain}</dd>
          </div>
        )}
        {vehicle.exteriorColor && (
          <div>
            <dt className='text-slate-500 text-sm'>Color</dt>
            <dd className='font-medium'>{vehicle.exteriorColor}</dd>
          </div>
        )}
      </dl>
    </div>
  );
}
