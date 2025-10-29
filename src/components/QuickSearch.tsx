import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
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
const years = [
  'All Years',
  ...Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i),
];

export default function QuickSearch() {
  const router = useRouter();
  const [make, setMake] = useState<string>('All Makes');
  const [year, setYear] = useState<string>('All Years');
  const [minPrice, setMinPrice] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');

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
          <Select value={make} onValueChange={setMake}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {makes.map((m) => (
                <SelectItem key={m} value={m}>
                  {m}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Year */}
        <div>
          <label className='block text-sm font-medium text-slate-700 mb-2'>
            Year
          </label>
          <Select value={year} onValueChange={setYear}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {years.map((y) => (
                <SelectItem key={String(y)} value={String(y)}>
                  {String(y)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
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
          <Button
            onClick={handleSearch}
            className='w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/30 h-10'
          >
            <Search className='w-4 h-4 mr-2' />
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}
