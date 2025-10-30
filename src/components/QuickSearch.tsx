'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';

const makes = [
  'All Makes',
  'Audi',
  'BMW',
  'Chevrolet',
  'Ford',
  'Honda',
  'Hyundai',
  'Jeep',
  'Mazda',
  'Mercedes-Benz',
  'Nissan',
  'Tesla',
  'Toyota',
  'Volkswagen',
];

export default function QuickSearch() {
  const router = useRouter();
  const [make, setMake] = useState('All Makes');
  const [year, setYear] = useState('All Years');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const years = [
    'All Years',
    ...Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i),
  ];

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (make && make !== 'All Makes') params.set('make', make);
    if (year && year !== 'All Years') params.set('year', year);
    if (minPrice) params.set('minPrice', minPrice);
    if (maxPrice) params.set('maxPrice', maxPrice);

    router.push(`/inventory?${params.toString()}`);
  };

  return (
    <div className='bg-white rounded-2xl shadow-2xl p-6 md:p-8'>
      <h3 className='text-xl font-semibold text-slate-900 mb-6'>
        Find Your Perfect Vehicle
      </h3>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
        {/* Make */}
        <div>
          <label className='block text-sm font-medium text-slate-700 mb-2'>
            Make
          </label>
          <select
            value={make}
            onChange={(e) => setMake(e.target.value)}
            className='w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent'
          >
            {makes.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>

        {/* Year */}
        <div>
          <label className='block text-sm font-medium text-slate-700 mb-2'>
            Year
          </label>
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className='w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent'
          >
            {years.map((y) => (
              <option key={y} value={String(y)}>
                {y}
              </option>
            ))}
          </select>
        </div>

        {/* Min Price */}
        <div>
          <label className='block text-sm font-medium text-slate-700 mb-2'>
            Min Price
          </label>
          <input
            type='number'
            placeholder='$0'
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className='w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent'
          />
        </div>

        {/* Max Price */}
        <div>
          <label className='block text-sm font-medium text-slate-700 mb-2'>
            Max Price
          </label>
          <input
            type='number'
            placeholder='Any'
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className='w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent'
          />
        </div>

        {/* Search Button */}
        <div className='flex items-end'>
          <button
            onClick={handleSearch}
            className='w-full flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg shadow-blue-600/30 font-medium transition-colors h-10'
          >
            <Search className='w-4 h-4 mr-2' />
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
