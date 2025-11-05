export interface Vehicle {
  id: string;
  vin: string;
  make: string;
  model: string;
  year: number;
  trim?: string;
  price: number;
  msrp?: number;
  mileage: number;
  bodyType: string;
  drivetrain?: string;
  transmission?: string;
  engine?: string;
  fuelType?: string;
  cityMpg?: number;
  hwyMpg?: number;
  exteriorColor?: string;
  interiorColor?: string;
  features?: string[];
  images?: string[];
  thumbnail?: string;
  isCertified?: boolean;
  isNew?: boolean;
  inStock?: boolean;
  created_date?: string;
}

export const mockVehicles: Vehicle[] = [
  {
    id: '1',
    vin: '1HGBH41JXMN109186',
    make: 'Tesla',
    model: 'Model 3',
    year: 2023,
    trim: 'Long Range',
    price: 45999,
    msrp: 48990,
    mileage: 8500,
    bodyType: 'Sedan',
    drivetrain: 'AWD',
    transmission: 'Automatic',
    engine: 'Dual Motor Electric',
    fuelType: 'Electric',
    cityMpg: 132,
    hwyMpg: 126,
    exteriorColor: 'Midnight Silver Metallic',
    interiorColor: 'Black',
    features: [
      'Autopilot',
      'Premium Interior',
      'Glass Roof',
      '19" Sport Wheels',
      'Premium Audio',
      'Heated Seats',
    ],
    images: [
      'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=1200',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200',
    ],
    thumbnail:
      'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800',
    isCertified: true,
    isNew: false,
    inStock: true,
    created_date: '2024-01-15T10:00:00Z',
  },
  {
    id: '2',
    vin: '5YJSA1E26HF123456',
    make: 'BMW',
    model: 'X5',
    year: 2022,
    trim: 'xDrive40i',
    price: 58900,
    msrp: 62500,
    mileage: 15200,
    bodyType: 'SUV',
    drivetrain: 'AWD',
    transmission: 'Automatic',
    engine: '3.0L I6 Turbo',
    fuelType: 'Gasoline',
    cityMpg: 21,
    hwyMpg: 26,
    exteriorColor: 'Alpine White',
    interiorColor: 'Black Leather',
    features: [
      'Navigation',
      'Panoramic Roof',
      'Heated Seats',
      'Apple CarPlay',
      'Harman Kardon Sound',
      'Power Liftgate',
    ],
    images: [
      'https://images.unsplash.com/photo-1617531653520-bd4f36c2e1d9?w=1200',
    ],
    thumbnail:
      'https://images.unsplash.com/photo-1617531653520-bd4f36c2e1d9?w=800',
    isCertified: true,
    isNew: false,
    inStock: true,
    created_date: '2024-01-14T10:00:00Z',
  },
  {
    id: '3',
    vin: '1FTFW1E51KFA12345',
    make: 'Ford',
    model: 'F-150',
    year: 2023,
    trim: 'Lariat',
    price: 52999,
    mileage: 12000,
    bodyType: 'Truck',
    drivetrain: '4WD',
    transmission: 'Automatic',
    engine: '3.5L V6 EcoBoost',
    fuelType: 'Gasoline',
    cityMpg: 19,
    hwyMpg: 24,
    exteriorColor: 'Agate Black',
    interiorColor: 'Black Leather',
    features: [
      'FX4 Off-Road Package',
      'Navigation',
      'Heated Seats',
      'Power Sliding Rear Window',
      'Trailer Tow Package',
      '360° Camera',
    ],
    images: [
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1200',
    ],
    thumbnail:
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800',
    isCertified: false,
    isNew: false,
    inStock: true,
    created_date: '2024-01-13T10:00:00Z',
  },
  {
    id: '4',
    vin: '19UUB3F59LA012345',
    make: 'Honda',
    model: 'Accord',
    year: 2024,
    trim: 'Sport',
    price: 32500,
    mileage: 2500,
    bodyType: 'Sedan',
    drivetrain: 'FWD',
    transmission: 'CVT',
    engine: '1.5L Turbo I4',
    fuelType: 'Gasoline',
    cityMpg: 30,
    hwyMpg: 38,
    exteriorColor: 'Radiant Red Metallic',
    interiorColor: 'Black Cloth',
    features: [
      'Honda Sensing',
      'Apple CarPlay',
      'Sunroof',
      'Dual-Zone Climate',
      'LED Headlights',
      'Wireless Charging',
    ],
    images: [
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1200',
    ],
    thumbnail:
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800',
    isCertified: false,
    isNew: true,
    inStock: true,
    created_date: '2024-01-12T10:00:00Z',
  },
  {
    id: '5',
    vin: 'WBAPL5C53BB123456',
    make: 'Mercedes-Benz',
    model: 'E-Class',
    year: 2022,
    trim: 'E 350',
    price: 48900,
    msrp: 55000,
    mileage: 18500,
    bodyType: 'Sedan',
    drivetrain: 'RWD',
    transmission: 'Automatic',
    engine: '2.0L I4 Turbo',
    fuelType: 'Gasoline',
    cityMpg: 23,
    hwyMpg: 32,
    exteriorColor: 'Obsidian Black Metallic',
    interiorColor: 'Beige Leather',
    features: [
      'Premium Package',
      'Navigation',
      'Burmester Sound',
      'Heated/Cooled Seats',
      'Panoramic Roof',
      'Blind Spot Assist',
    ],
    images: [
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200',
    ],
    thumbnail:
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800',
    isCertified: true,
    isNew: false,
    inStock: true,
    created_date: '2024-01-11T10:00:00Z',
  },
  {
    id: '6',
    vin: '5J8TC2H53LL012345',
    make: 'Jeep',
    model: 'Wrangler',
    year: 2023,
    trim: 'Rubicon 4xe',
    price: 59999,
    mileage: 8900,
    bodyType: 'SUV',
    drivetrain: '4WD',
    transmission: 'Automatic',
    engine: '2.0L I4 Turbo Plug-in Hybrid',
    fuelType: 'Plug-in Hybrid',
    cityMpg: 49,
    hwyMpg: 47,
    exteriorColor: 'Sting-Gray',
    interiorColor: 'Black Leather',
    features: [
      'Removable Top & Doors',
      'Rock-Trac 4WD',
      'Locking Differentials',
      'LED Lights',
      '8.4" Touchscreen',
      'Alpine Sound System',
    ],
    images: [
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1200',
    ],
    thumbnail:
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800',
    isCertified: false,
    isNew: false,
    inStock: true,
    created_date: '2024-01-10T10:00:00Z',
  },
];

// API functions
export const getVehicles = async (): Promise<Vehicle[]> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  return mockVehicles;
};

export const getFeaturedVehicles = async (
  limit: number = 6
): Promise<Vehicle[]> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return mockVehicles.slice(0, limit);
};

export const getVehicleById = async (id: string): Promise<Vehicle | null> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return mockVehicles.find((v) => v.id === id) || null;
};

export const filterVehicles = async (filters: {
  make?: string;
  minPrice?: number;
  maxPrice?: number;
  minYear?: number;
  maxYear?: number;
  bodyType?: string;
  fuelType?: string;
}, sortBy: string): Promise<Vehicle[]> => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return mockVehicles.filter((vehicle) => {
    if (filters.make && vehicle.make !== filters.make) return false;
    if (filters.minPrice && vehicle.price < filters.minPrice) return false;
    if (filters.maxPrice && vehicle.price > filters.maxPrice) return false;
    if (filters.minYear && vehicle.year < filters.minYear) return false;
    if (filters.maxYear && vehicle.year > filters.maxYear) return false;
    if (filters.bodyType && vehicle.bodyType !== filters.bodyType) return false;
    if (filters.fuelType && vehicle.fuelType !== filters.fuelType) return false;
    return true;
  });
};
