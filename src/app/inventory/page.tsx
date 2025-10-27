import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SlidersHorizontal, X } from 'lucide-react';
import VehicleCard from '@/components/VehicleCard';
import FilterPanel from '@/components/FilterPanel';

export default function Inventory() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('-created_date');

  // Parse URL params
  const urlParams = new URLSearchParams(location.search);
  const [filters, setFilters] = useState({
    make: urlParams.get('make') || '',
    model: urlParams.get('model') || '',
    minYear: urlParams.get('minYear') || '',
    maxYear: urlParams.get('maxYear') || '',
    minPrice: urlParams.get('minPrice') || '',
    maxPrice: urlParams.get('maxPrice') || '',
    minMileage: urlParams.get('minMileage') || '',
    maxMileage: urlParams.get('maxMileage') || '',
    bodyType: urlParams.get('bodyType') || '',
    fuelType: urlParams.get('fuelType') || '',
    transmission: urlParams.get('transmission') || '',
    drivetrain: urlParams.get('drivetrain') || '',
    isNew: urlParams.get('isNew') || '',
    isCertified: urlParams.get('isCertified') || '',
    inStock: urlParams.get('inStock') || 'true',
  });

  const { data: vehicles = [], isLoading } = useQuery({
    queryKey: ['vehicles', filters, sortBy],
    queryFn: async () => {
      const query = {};

      if (filters.make) query.make = filters.make;
      if (filters.model) query.model = filters.model;
      if (filters.minYear) query.year = { $gte: parseInt(filters.minYear) };
      if (filters.maxYear)
        query.year = { ...query.year, $lte: parseInt(filters.maxYear) };
      if (filters.minPrice)
        query.price = { $gte: parseFloat(filters.minPrice) };
      if (filters.maxPrice)
        query.price = { ...query.price, $lte: parseFloat(filters.maxPrice) };
      if (filters.minMileage)
        query.mileage = { $gte: parseFloat(filters.minMileage) };
      if (filters.maxMileage)
        query.mileage = {
          ...query.mileage,
          $lte: parseFloat(filters.maxMileage),
        };
      if (filters.bodyType) query.bodyType = filters.bodyType;
      if (filters.fuelType) query.fuelType = filters.fuelType;
      if (filters.transmission) query.transmission = filters.transmission;
      if (filters.drivetrain) query.drivetrain = filters.drivetrain;
      if (filters.isNew === 'true') query.isNew = true;
      if (filters.isCertified === 'true') query.isCertified = true;
      if (filters.inStock === 'true') query.inStock = true;

      return await base44.entities.Vehicle.filter(query, sortBy);
    },
  });

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.set(key, value);
    });
    navigate(`?${params.toString()}`, { replace: true });
  }, [filters]);

  const handleFilterChange = (key, value) => {
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

  const activeFilterCount = Object.values(filters).filter(
    (v) => v && v !== 'true'
  ).length;

  return (
    <div
      data-source-location='pages/Inventory:98:4'
      data-dynamic-content='true'
      className='min-h-screen bg-neutral-50'
    >
      {/* Header */}
      <div
        data-source-location='pages/Inventory:100:6'
        data-dynamic-content='true'
        className='bg-white border-b border-slate-200'
      >
        <div
          data-source-location='pages/Inventory:101:8'
          data-dynamic-content='true'
          className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'
        >
          <h1
            data-source-location='pages/Inventory:102:10'
            data-dynamic-content='false'
            className='text-3xl md:text-4xl font-bold text-slate-900 mb-2'
          >
            Inventory
          </h1>
          <p
            data-source-location='pages/Inventory:103:10'
            data-dynamic-content='true'
            className='text-slate-600'
          >
            Showing {vehicles.length} vehicles
          </p>
        </div>
      </div>

      <div
        data-source-location='pages/Inventory:107:6'
        data-dynamic-content='true'
        className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'
      >
        <div
          data-source-location='pages/Inventory:108:8'
          data-dynamic-content='true'
          className='flex flex-col lg:flex-row gap-8'
        >
          {/* Desktop Filter Panel */}
          <div
            data-source-location='pages/Inventory:110:10'
            data-dynamic-content='true'
            className='hidden lg:block w-80 flex-shrink-0'
          >
            <div
              data-source-location='pages/Inventory:111:12'
              data-dynamic-content='true'
              className='sticky top-24'
            >
              <FilterPanel
                data-source-location='pages/Inventory:112:14'
                data-dynamic-content='false'
                filters={filters}
                onFilterChange={handleFilterChange}
                onClearFilters={clearFilters}
                activeFilterCount={activeFilterCount}
              />
            </div>
          </div>

          {/* Main Content */}
          <div
            data-source-location='pages/Inventory:122:10'
            data-dynamic-content='true'
            className='flex-1'
          >
            {/* Mobile Filter Button & Sort */}
            <div
              data-source-location='pages/Inventory:124:12'
              data-dynamic-content='true'
              className='flex items-center justify-between mb-6'
            >
              <Button
                data-source-location='pages/Inventory:125:14'
                data-dynamic-content='true'
                variant='outline'
                onClick={() => setShowFilters(true)}
                className='lg:hidden flex items-center gap-2'
              >
                <SlidersHorizontal
                  data-source-location='pages/Inventory:130:16'
                  data-dynamic-content='false'
                  className='w-4 h-4'
                />
                Filters
                {activeFilterCount > 0 && (
                  <span
                    data-source-location='pages/Inventory:133:18'
                    data-dynamic-content='true'
                    className='ml-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'
                  >
                    {activeFilterCount}
                  </span>
                )}
              </Button>

              <div
                data-source-location='pages/Inventory:139:14'
                data-dynamic-content='true'
                className='flex items-center gap-2'
              >
                <span
                  data-source-location='pages/Inventory:140:16'
                  data-dynamic-content='false'
                  className='text-sm text-slate-600'
                >
                  Sort by:
                </span>
                <Select
                  data-source-location='pages/Inventory:141:16'
                  data-dynamic-content='false'
                  value={sortBy}
                  onValueChange={setSortBy}
                >
                  <SelectTrigger
                    data-source-location='pages/Inventory:142:18'
                    data-dynamic-content='false'
                    className='w-40'
                  >
                    <SelectValue
                      data-source-location='pages/Inventory:143:20'
                      data-dynamic-content='false'
                    />
                  </SelectTrigger>
                  <SelectContent
                    data-source-location='pages/Inventory:145:18'
                    data-dynamic-content='false'
                  >
                    <SelectItem
                      data-source-location='pages/Inventory:146:20'
                      data-dynamic-content='false'
                      value='-created_date'
                    >
                      Newest First
                    </SelectItem>
                    <SelectItem
                      data-source-location='pages/Inventory:147:20'
                      data-dynamic-content='false'
                      value='price'
                    >
                      Price: Low to High
                    </SelectItem>
                    <SelectItem
                      data-source-location='pages/Inventory:148:20'
                      data-dynamic-content='false'
                      value='-price'
                    >
                      Price: High to Low
                    </SelectItem>
                    <SelectItem
                      data-source-location='pages/Inventory:149:20'
                      data-dynamic-content='false'
                      value='-year'
                    >
                      Year: New to Old
                    </SelectItem>
                    <SelectItem
                      data-source-location='pages/Inventory:150:20'
                      data-dynamic-content='false'
                      value='mileage'
                    >
                      Mileage: Low to High
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Vehicle Grid */}
            {isLoading ? (
              <div
                data-source-location='pages/Inventory:158:14'
                data-dynamic-content='true'
                className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'
              >
                {[...Array(9)].map((_, i) => (
                  <div
                    data-source-location='pages/Inventory:160:18'
                    data-dynamic-content='false'
                    key={i}
                    className='bg-slate-200 rounded-xl h-96 animate-pulse'
                  />
                ))}
              </div>
            ) : vehicles.length > 0 ? (
              <div
                data-source-location='pages/Inventory:164:14'
                data-dynamic-content='true'
                className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'
              >
                {vehicles.map((vehicle, index) => (
                  <VehicleCard
                    data-source-location='pages/Inventory:166:18'
                    data-dynamic-content='false'
                    key={vehicle.id}
                    vehicle={vehicle}
                    index={index}
                  />
                ))}
              </div>
            ) : (
              <div
                data-source-location='pages/Inventory:170:14'
                data-dynamic-content='true'
                className='text-center py-20'
              >
                <div
                  data-source-location='pages/Inventory:171:16'
                  data-dynamic-content='false'
                  className='text-6xl mb-4'
                >
                  🚗
                </div>
                <h3
                  data-source-location='pages/Inventory:172:16'
                  data-dynamic-content='false'
                  className='text-2xl font-semibold text-slate-900 mb-2'
                >
                  No vehicles found
                </h3>
                <p
                  data-source-location='pages/Inventory:173:16'
                  data-dynamic-content='false'
                  className='text-slate-600 mb-6'
                >
                  Try adjusting your filters
                </p>
                <Button
                  data-source-location='pages/Inventory:174:16'
                  data-dynamic-content='false'
                  onClick={clearFilters}
                  variant='outline'
                >
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {showFilters && (
        <div
          data-source-location='pages/Inventory:185:8'
          data-dynamic-content='true'
          className='fixed inset-0 z-50 lg:hidden'
        >
          <div
            data-source-location='pages/Inventory:186:10'
            data-dynamic-content='false'
            className='absolute inset-0 bg-slate-900/50'
            onClick={() => setShowFilters(false)}
          />
          <div
            data-source-location='pages/Inventory:187:10'
            data-dynamic-content='true'
            className='absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-2xl overflow-y-auto'
          >
            <div
              data-source-location='pages/Inventory:188:12'
              data-dynamic-content='true'
              className='sticky top-0 bg-white border-b border-slate-200 p-4 flex items-center justify-between z-10'
            >
              <h2
                data-source-location='pages/Inventory:189:14'
                data-dynamic-content='false'
                className='text-lg font-semibold'
              >
                Filters
              </h2>
              <Button
                data-source-location='pages/Inventory:190:14'
                data-dynamic-content='false'
                variant='ghost'
                size='icon'
                onClick={() => setShowFilters(false)}
              >
                <X
                  data-source-location='pages/Inventory:191:16'
                  data-dynamic-content='false'
                  className='w-5 h-5'
                />
              </Button>
            </div>
            <div
              data-source-location='pages/Inventory:194:12'
              data-dynamic-content='true'
              className='p-4'
            >
              <FilterPanel
                data-source-location='pages/Inventory:195:14'
                data-dynamic-content='false'
                filters={filters}
                onFilterChange={handleFilterChange}
                onClearFilters={clearFilters}
                activeFilterCount={activeFilterCount}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
