'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { filterVehicles, type Vehicle } from '@/utils/vehicles';

type FilterState = {
  make: string;
  model: string;
  minYear: string;
  maxYear: string;
  minPrice: string;
  maxPrice: string;
  minMileage: string;
  maxMileage: string;
  bodyType: string;
  fuelType: string;
  transmission: string;
  drivetrain: string;
  isNew: string;
  isCertified: string;
  inStock: string;
};

type VehicleQuery = {
  make?: string;
  model?: string;
  year?: { $gte?: number; $lte?: number };
  price?: { $gte?: number; $lte?: number };
  mileage?: { $gte?: number; $lte?: number };
  bodyType?: string;
  fuelType?: string;
  transmission?: string;
  drivetrain?: string;
  isNew?: boolean;
  isCertified?: boolean;
  inStock?: boolean;
};

export default function Inventory() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState<string>('-created_date');

  const initialFilters: FilterState = useMemo(
    () => ({
      make: searchParams.get('make') ?? '',
      model: searchParams.get('model') ?? '',
      minYear: searchParams.get('minYear') ?? '',
      maxYear: searchParams.get('maxYear') ?? '',
      minPrice: searchParams.get('minPrice') ?? '',
      maxPrice: searchParams.get('maxPrice') ?? '',
      minMileage: searchParams.get('minMileage') ?? '',
      maxMileage: searchParams.get('maxMileage') ?? '',
      bodyType: searchParams.get('bodyType') ?? '',
      fuelType: searchParams.get('fuelType') ?? '',
      transmission: searchParams.get('transmission') ?? '',
      drivetrain: searchParams.get('drivetrain') ?? '',
      isNew: searchParams.get('isNew') ?? '',
      isCertified: searchParams.get('isCertified') ?? '',
      inStock: searchParams.get('inStock') ?? 'true',
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.set(key, value);
    });
    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }, [filters, pathname, router]);

  // Fetch vehicles when filters or sorting change
  useEffect(() => {
    const query: VehicleQuery = {};
    if (filters.make) query.make = filters.make;
    if (filters.model) query.model = filters.model;
    if (filters.minYear)
      query.year = {
        ...(query.year ?? {}),
        $gte: parseInt(filters.minYear, 10),
      };
    if (filters.maxYear)
      query.year = {
        ...(query.year ?? {}),
        $lte: parseInt(filters.maxYear, 10),
      };
    if (filters.minPrice)
      query.price = {
        ...(query.price ?? {}),
        $gte: parseFloat(filters.minPrice),
      };
    if (filters.maxPrice)
      query.price = {
        ...(query.price ?? {}),
        $lte: parseFloat(filters.maxPrice),
      };
    if (filters.minMileage)
      query.mileage = {
        ...(query.mileage ?? {}),
        $gte: parseFloat(filters.minMileage),
      };
    if (filters.maxMileage)
      query.mileage = {
        ...(query.mileage ?? {}),
        $lte: parseFloat(filters.maxMileage),
      };
    if (filters.bodyType) query.bodyType = filters.bodyType;
    if (filters.fuelType) query.fuelType = filters.fuelType;
    if (filters.transmission) query.transmission = filters.transmission;
    if (filters.drivetrain) query.drivetrain = filters.drivetrain;
    if (filters.isNew === 'true') query.isNew = true;
    if (filters.isCertified === 'true') query.isCertified = true;
    if (filters.inStock === 'true') query.inStock = true;

    let active = true;
    setIsLoading(true);
    setError(null);

    filterVehicles(query, sortBy)
      .then((rows) => {
        if (active) setVehicles(rows);
      })
      .catch((e: unknown) => {
        if (active)
          setError(e instanceof Error ? e.message : 'Failed to load vehicles');
      })
      .finally(() => {
        if (active) setIsLoading(false);
      });

    return () => {
      active = false;
    };
  }, [filters, sortBy]);

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      make: '',
      model: '',
      minYear: '',
      maxYear: '',
      minPrice: '',
      maxPrice: '',
      minMileage: '',
      maxMileage: '',
      bodyType: '',
      fuelType: '',
      transmission: '',
      drivetrain: '',
      isNew: '',
      isCertified: '',
      inStock: 'true',
    });
  };

  const activeFilterCount = useMemo(
    () => Object.values(filters).filter((v) => v && v !== 'true').length,
    [filters]
  );

  return (
    <div className='min-h-screen bg-neutral-50'>
      <div className='bg-white border-b border-slate-200'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
          <h1 className='text-3xl md:text-4xl font-bold text-slate-900 mb-2'>
            Inventory
          </h1>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='flex items-center gap-3'>
          <button
            className='rounded-md border px-3 py-2 text-sm'
            onClick={() => setShowFilters((s) => !s)}
          >
            Filters {activeFilterCount ? `(${activeFilterCount})` : ''}
          </button>
          <button
            className='rounded-md border px-3 py-2 text-sm'
            onClick={clearFilters}
          >
            Clear
          </button>
          <select
            className='rounded-md border px-2 py-2 text-sm'
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value='-created_date'>Newest</option>
            <option value='price'>Price: Low → High</option>
            <option value='-price'>Price: High → Low</option>
            <option value='mileage'>Mileage: Low → High</option>
            <option value='-mileage'>Mileage: High → Low</option>
          </select>
        </div>

        {showFilters && (
          <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
            <input
              className='w-full rounded border px-3 py-2 text-sm'
              placeholder='Make'
              value={filters.make}
              onChange={(e) => handleFilterChange('make', e.target.value)}
            />
            <input
              className='w-full rounded border px-3 py-2 text-sm'
              placeholder='Model'
              value={filters.model}
              onChange={(e) => handleFilterChange('model', e.target.value)}
            />
            <input
              className='w-full rounded border px-3 py-2 text-sm'
              placeholder='Min Year'
              value={filters.minYear}
              onChange={(e) => handleFilterChange('minYear', e.target.value)}
            />
            <input
              className='w-full rounded border px-3 py-2 text-sm'
              placeholder='Max Year'
              value={filters.maxYear}
              onChange={(e) => handleFilterChange('maxYear', e.target.value)}
            />
            <input
              className='w-full rounded border px-3 py-2 text-sm'
              placeholder='Min Price'
              value={filters.minPrice}
              onChange={(e) => handleFilterChange('minPrice', e.target.value)}
            />
            <input
              className='w-full rounded border px-3 py-2 text-sm'
              placeholder='Max Price'
              value={filters.maxPrice}
              onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
            />
            <input
              className='w-full rounded border px-3 py-2 text-sm'
              placeholder='Min Mileage'
              value={filters.minMileage}
              onChange={(e) => handleFilterChange('minMileage', e.target.value)}
            />
            <input
              className='w-full rounded border px-3 py-2 text-sm'
              placeholder='Max Mileage'
              value={filters.maxMileage}
              onChange={(e) => handleFilterChange('maxMileage', e.target.value)}
            />
            <select
              className='w-full rounded border px-3 py-2 text-sm'
              value={filters.bodyType}
              onChange={(e) => handleFilterChange('bodyType', e.target.value)}
            >
              <option value=''>All Body Types</option>
              <option value='sedan'>Sedan</option>
              <option value='suv'>SUV</option>
              <option value='truck'>Truck</option>
              <option value='coupe'>Coupe</option>
              <option value='hatchback'>Hatchback</option>
              <option value='convertible'>Convertible</option>
            </select>
            <select
              className='w-full rounded border px-3 py-2 text-sm'
              value={filters.fuelType}
              onChange={(e) => handleFilterChange('fuelType', e.target.value)}
            >
              <option value=''>All Fuel Types</option>
              <option value='gasoline'>Gasoline</option>
              <option value='diesel'>Diesel</option>
              <option value='electric'>Electric</option>
              <option value='hybrid'>Hybrid</option>
            </select>
            <select
              className='w-full rounded border px-3 py-2 text-sm'
              value={filters.transmission}
              onChange={(e) =>
                handleFilterChange('transmission', e.target.value)
              }
            >
              <option value=''>All Transmissions</option>
              <option value='automatic'>Automatic</option>
              <option value='manual'>Manual</option>
            </select>
            <select
              className='w-full rounded border px-3 py-2 text-sm'
              value={filters.drivetrain}
              onChange={(e) => handleFilterChange('drivetrain', e.target.value)}
            >
              <option value=''>All Drivetrains</option>
              <option value='fwd'>Front-Wheel Drive</option>
              <option value='rwd'>Rear-Wheel Drive</option>
              <option value='awd'>All-Wheel Drive</option>
              <option value='4wd'>Four-Wheel Drive</option>
            </select>
            <div className='flex items-center gap-2'>
              <input
                type='checkbox'
                id='isNew'
                checked={filters.isNew === 'true'}
                onChange={(e) =>
                  handleFilterChange('isNew', e.target.checked ? 'true' : '')
                }
                className='h-4 w-4 rounded'
              />
              <label htmlFor='isNew' className='text-sm'>
                New
              </label>
            </div>
            <div className='flex items-center gap-2'>
              <input
                type='checkbox'
                id='isCertified'
                checked={filters.isCertified === 'true'}
                onChange={(e) =>
                  handleFilterChange(
                    'isCertified',
                    e.target.checked ? 'true' : ''
                  )
                }
                className='h-4 w-4 rounded'
              />
              <label htmlFor='isCertified' className='text-sm'>
                Certified
              </label>
            </div>
            <div className='flex items-center gap-2'>
              <input
                type='checkbox'
                id='inStock'
                checked={filters.inStock === 'true'}
                onChange={(e) =>
                  handleFilterChange('inStock', e.target.checked ? 'true' : '')
                }
                className='h-4 w-4 rounded'
              />
              <label htmlFor='inStock' className='text-sm'>
                In Stock
              </label>
            </div>
          </div>
        )}

        {isLoading ? (
          <div className='py-12 text-center text-sm text-slate-500'>
            Loading…
          </div>
        ) : error ? (
          <div className='py-12 text-center text-sm text-red-600'>{error}</div>
        ) : vehicles.length === 0 ? (
          <div className='py-12 text-center text-sm text-slate-500'>
            No vehicles found.
          </div>
        ) : (
          <ul className='mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {vehicles.map((vehicle: Vehicle, index: number) => (
              <li
                key={vehicle.id ?? index}
                className='rounded-lg border bg-white p-4'
              >
                <div className='shrink-0 mb-3'>
                  {vehicle.images && vehicle.images.length > 0 ? (
                    <Image
                      src={vehicle.images[0]}
                      alt={`${vehicle.make} ${vehicle.model}`}
                      width={400}
                      height={240}
                      className='h-40 w-full object-cover rounded'
                    />
                  ) : null}
                </div>
                <h3 className='font-semibold'>
                  {vehicle.year} {vehicle.make} {vehicle.model}
                </h3>
                <p className='text-sm text-slate-600'>
                  ${Intl.NumberFormat().format(vehicle.price)} •{' '}
                  {vehicle.mileage
                    ? `${Intl.NumberFormat().format(vehicle.mileage)} mi`
                    : '—'}
                </p>
                <div className='mt-3'>
                  <Link
                    className='inline-flex items-center rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white'
                    href={`/vehicles/${vehicle.id}`}
                  >
                    View details
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
