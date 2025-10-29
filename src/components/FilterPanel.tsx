import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const makes = [
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
const bodyTypes = [
  'Sedan',
  'SUV',
  'Truck',
  'Coupe',
  'Convertible',
  'Wagon',
  'Van',
  'Hatchback',
];
const fuelTypes = [
  'Gasoline',
  'Diesel',
  'Electric',
  'Hybrid',
  'Plug-in Hybrid',
];
const transmissions = ['Automatic', 'Manual', 'CVT', 'DCT'];
const drivetrains = ['FWD', 'RWD', 'AWD', '4WD'];

export type FilterState = {
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

interface Props {
  filters: FilterState;
  onFilterChange: (key: keyof FilterState, value: string) => void;
  onClearFilters: () => void;
  activeFilterCount: number;
}

export default function FilterPanel({
  filters,
  onFilterChange,
  onClearFilters,
  activeFilterCount,
}: Props) {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 15 }, (_, i) => currentYear - i);

  return (
    <div className='bg-white rounded-xl shadow-sm border border-slate-200 p-6'>
      <div className='flex items-center justify-between mb-6'>
        <h2 className='text-lg font-semibold text-slate-900'>Filters</h2>
        {activeFilterCount > 0 && (
          <Button
            variant='ghost'
            size='sm'
            onClick={onClearFilters}
            className='text-blue-600'
          >
            Clear All
          </Button>
        )}
      </div>

      <div className='space-y-6'>
        {/* Make */}
        <div>
          <Label className='text-sm font-medium text-slate-700 mb-2 block'>
            Make
          </Label>
          <Select
            value={filters.make}
            onValueChange={(value) => onFilterChange('make', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder='All Makes' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value=''>All Makes</SelectItem>
              {makes.map((make) => (
                <SelectItem key={make} value={make}>
                  {make}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Model */}
        <div>
          <Label className='text-sm font-medium text-slate-700 mb-2 block'>
            Model
          </Label>
          <input
            type='text'
            placeholder='Any Model'
            value={filters.model}
            onChange={(e) => onFilterChange('model', e.target.value)}
            className='w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent'
          />
        </div>

        {/* Year Range */}
        <div>
          <Label className='text-sm font-medium text-slate-700 mb-2 block'>
            Year
          </Label>
          <div className='grid grid-cols-2 gap-2'>
            <Select
              value={filters.minYear}
              onValueChange={(value) => onFilterChange('minYear', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder='Min' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value=''>Min</SelectItem>
                {years.map((year) => (
                  <SelectItem key={year} value={String(year)}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select
              value={filters.maxYear}
              onValueChange={(value) => onFilterChange('maxYear', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder='Max' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value=''>Max</SelectItem>
                {years.map((year) => (
                  <SelectItem key={year} value={String(year)}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Price Range */}
        <div>
          <Label className='text-sm font-medium text-slate-700 mb-2 block'>
            Price
          </Label>
          <div className='grid grid-cols-2 gap-2'>
            <input
              type='number'
              placeholder='Min $'
              value={filters.minPrice}
              onChange={(e) => onFilterChange('minPrice', e.target.value)}
              className='px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent'
            />

            <input
              type='number'
              placeholder='Max $'
              value={filters.maxPrice}
              onChange={(e) => onFilterChange('maxPrice', e.target.value)}
              className='px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent'
            />
          </div>
        </div>

        {/* Mileage Range */}
        <div>
          <Label className='text-sm font-medium text-slate-700 mb-2 block'>
            Mileage
          </Label>
          <div className='grid grid-cols-2 gap-2'>
            <input
              type='number'
              placeholder='Min mi'
              value={filters.minMileage}
              onChange={(e) => onFilterChange('minMileage', e.target.value)}
              className='px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent'
            />

            <input
              type='number'
              placeholder='Max mi'
              value={filters.maxMileage}
              onChange={(e) => onFilterChange('maxMileage', e.target.value)}
              className='px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent'
            />
          </div>
        </div>

        {/* Body Type */}
        <div>
          <Label className='text-sm font-medium text-slate-700 mb-2 block'>
            Body Type
          </Label>
          <Select
            value={filters.bodyType}
            onValueChange={(value) => onFilterChange('bodyType', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder='All Types' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value=''>All Types</SelectItem>
              {bodyTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Fuel Type */}
        <div>
          <Label className='text-sm font-medium text-slate-700 mb-2 block'>
            Fuel Type
          </Label>
          <Select
            value={filters.fuelType}
            onValueChange={(value) => onFilterChange('fuelType', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder='All Fuels' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value=''>All Fuels</SelectItem>
              {fuelTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Transmission */}
        <div>
          <Label className='text-sm font-medium text-slate-700 mb-2 block'>
            Transmission
          </Label>
          <Select
            value={filters.transmission}
            onValueChange={(value) => onFilterChange('transmission', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder='All' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value=''>All</SelectItem>
              {transmissions.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Drivetrain */}
        <div>
          <Label className='text-sm font-medium text-slate-700 mb-2 block'>
            Drivetrain
          </Label>
          <Select
            value={filters.drivetrain}
            onValueChange={(value) => onFilterChange('drivetrain', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder='All' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value=''>All</SelectItem>
              {drivetrains.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Checkboxes */}
        <div className='space-y-3 pt-3 border-t border-slate-200'>
          <div className='flex items-center space-x-2'>
            <Checkbox
              id='isNew'
              checked={filters.isNew === 'true'}
              onCheckedChange={(checked: boolean | 'indeterminate') =>
                onFilterChange('isNew', checked ? 'true' : '')
              }
            />
            <Label
              htmlFor='isNew'
              className='text-sm font-normal cursor-pointer'
            >
              New vehicles only
            </Label>
          </div>
          <div className='flex items-center space-x-2'>
            <Checkbox
              id='isCertified'
              checked={filters.isCertified === 'true'}
              onCheckedChange={(checked: boolean | 'indeterminate') =>
                onFilterChange('isCertified', checked ? 'true' : '')
              }
            />
            <Label
              htmlFor='isCertified'
              className='text-sm font-normal cursor-pointer'
            >
              Certified Pre-Owned
            </Label>
          </div>
          <div className='flex items-center space-x-2'>
            <Checkbox
              id='inStock'
              checked={filters.inStock === 'true'}
              onCheckedChange={(checked: boolean | 'indeterminate') =>
                onFilterChange('inStock', checked ? 'true' : '')
              }
            />
            <Label
              htmlFor='inStock'
              className='text-sm font-normal cursor-pointer'
            >
              In stock only
            </Label>
          </div>
        </div>
      </div>
    </div>
  );
}
