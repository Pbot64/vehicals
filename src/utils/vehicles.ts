export interface Vehicle {
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

const MOCK_VEHICLES: Vehicle[] = [
  {
    id: '1',
    make: 'Tesla',
    model: 'Model 3',
    year: 2024,
    price: 42890,
    thumbnail: 'https://via.placeholder.com/200x120/000/fff?text=Model+3',
    images: [
      'https://via.placeholder.com/800x500/eee/000?text=Tesla+Model+3+1',
      'https://via.placeholder.com/800x500/eee/000?text=Tesla+Model+3+2',
    ],
    mileage: 120,
    fuelType: 'Electric',
    transmission: 'Automatic',
    drivetrain: 'RWD',
    exteriorColor: 'Midnight Silver',
    engine: 'Dual Motor',
    cityMpg: 134,
    hwyMpg: 128,
    trim: 'Long Range',
    isNew: true,
    isCertified: false,
    features: ['Autopilot', 'Premium Audio', 'Wireless Charging', 'Glass Roof'],
  },
  {
    id: '2',
    make: 'Toyota',
    model: 'Corolla',
    year: 2023,
    price: 21500,
    thumbnail: 'https://via.placeholder.com/200x120/ff0/000?text=Corolla',
    mileage: 15000,
    fuelType: 'Gasoline',
    transmission: 'CVT',
    drivetrain: 'FWD',
    exteriorColor: 'Supersonic Red',
    engine: '2.0L 4cyl',
    cityMpg: 32,
    hwyMpg: 41,
    trim: 'LE',
    isNew: false,
    isCertified: true,
  },
];
export function getVehicle(id: string): Vehicle | undefined {
  return MOCK_VEHICLES.find((v) => v.id === id);
}
