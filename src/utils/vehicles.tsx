// export interface Vehicle {
//   id: string;
//   images?: string[];
//   thumbnail?: string;
//   price: number;
//   make: string;
//   model: string;
//   year?: number | string;
//   mileage?: number;
//   fuelType?: string;
//   transmission?: string;
//   drivetrain?: string;
//   exteriorColor?: string;
//   engine?: string;
//   cityMpg?: number;
//   hwyMpg?: number;
//   features?: string[];
//   trim?: string;
//   isNew?: boolean;
//   isCertified?: boolean;
//   msrp?: number;
//   // Optional — used by some filters
//   bodyType?: string;
// }

// const MOCK_VEHICLES: Vehicle[] = [
//   {
//     id: '1',
//     make: 'Tesla',
//     model: 'Model 3',
//     year: 2024,
//     price: 42890,
//     thumbnail: 'https://via.placeholder.com/200x120/000/fff?text=Model+3',
//     images: [
//       'https://via.placeholder.com/800x500/eee/000?text=Tesla+Model+3+1',
//       'https://via.placeholder.com/800x500/eee/000?text=Tesla+Model+3+2',
//     ],
//     mileage: 120,
//     fuelType: 'Electric',
//     transmission: 'Automatic',
//     drivetrain: 'RWD',
//     exteriorColor: 'Midnight Silver',
//     engine: 'Dual Motor',
//     cityMpg: 134,
//     hwyMpg: 128,
//     trim: 'Long Range',
//     isNew: true,
//     isCertified: false,
//     features: ['Autopilot', 'Premium Audio', 'Wireless Charging', 'Glass Roof'],
//   },
//   {
//     id: '2',
//     make: 'Toyota',
//     model: 'Corolla',
//     year: 2023,
//     price: 21500,
//     thumbnail: 'https://via.placeholder.com/200x120/ff0/000?text=Corolla',
//     mileage: 15000,
//     fuelType: 'Gasoline',
//     transmission: 'CVT',
//     drivetrain: 'FWD',
//     exteriorColor: 'Supersonic Red',
//     engine: '2.0L 4cyl',
//     cityMpg: 32,
//     hwyMpg: 41,
//     trim: 'LE',
//     isNew: false,
//     isCertified: true,
//   },
// ];
// export function getVehicle(id: string): Vehicle | undefined {
//   return MOCK_VEHICLES.find((v) => v.id === id);
// }

// export type VehicleQuery = {
//   make?: string;
//   model?: string;
//   year?: { $gte?: number; $lte?: number };
//   price?: { $gte?: number; $lte?: number };
//   mileage?: { $gte?: number; $lte?: number };
//   bodyType?: string;
//   fuelType?: string;
//   transmission?: string;
//   drivetrain?: string;
//   isNew?: boolean;
//   isCertified?: boolean;
//   inStock?: boolean; // if you eventually track this
// };

// function coerceYear(y?: number | string) {
//   if (y == null) return undefined;
//   const n = typeof y === 'string' ? parseInt(y, 10) : y;
//   return Number.isFinite(n) ? (n as number) : undefined;
// }

// export async function filterVehicles(query: VehicleQuery, sortBy: string) {
//   let rows = [...MOCK_VEHICLES];

//   // Filtering
//   rows = rows.filter((v) => {
//     if (query.make && v.make.toLowerCase() !== query.make.toLowerCase())
//       return false;
//     if (query.model && v.model.toLowerCase() !== query.model.toLowerCase())
//       return false;
//     if (
//       query.bodyType &&
//       v.bodyType?.toLowerCase() !== query.bodyType.toLowerCase()
//     )
//       return false;
//     if (
//       query.fuelType &&
//       v.fuelType?.toLowerCase() !== query.fuelType.toLowerCase()
//     )
//       return false;
//     if (
//       query.transmission &&
//       v.transmission?.toLowerCase() !== query.transmission.toLowerCase()
//     )
//       return false;
//     if (
//       query.drivetrain &&
//       v.drivetrain?.toLowerCase() !== query.drivetrain.toLowerCase()
//     )
//       return false;
//     if (query.isNew === true && v.isNew !== true) return false;
//     if (query.isCertified === true && v.isCertified !== true) return false;

//     // Numeric ranges
//     if (query.year?.$gte != null || query.year?.$lte != null) {
//       const vy = coerceYear(v.year);
//       if (vy == null) return false;
//       if (query.year.$gte != null && vy < query.year.$gte) return false;
//       if (query.year.$lte != null && vy > query.year.$lte) return false;
//     }
//     if (query.price?.$gte != null && v.price < query.price.$gte) return false;
//     if (query.price?.$lte != null && v.price > query.price.$lte) return false;

//     if (query.mileage?.$gte != null) {
//       const m = v.mileage ?? Number.POSITIVE_INFINITY;
//       if (m < query.mileage.$gte) return false;
//     }
//     if (query.mileage?.$lte != null) {
//       const m = v.mileage ?? Number.POSITIVE_INFINITY;
//       if (m > query.mileage.$lte) return false;
//     }

//     // inStock optional — if you later add it to Vehicle
//     if (query.inStock === true && (v as any).inStock !== true) return false;

//     return true;
//   });

//   // Sorting
//   const by = (key: keyof Vehicle, dir: 1 | -1 = 1) =>
//     rows.sort((a: any, b: any) => {
//       const av = a[key] ?? 0;
//       const bv = b[key] ?? 0;
//       if (av < bv) return -1 * dir;
//       if (av > bv) return 1 * dir;
//       return 0;
//     });

//   switch (sortBy) {
//     case 'price':
//       by('price', 1);
//       break;
//     case '-price':
//       by('price', -1);
//       break;
//     case 'mileage':
//       rows.sort(
//         (a, b) =>
//           (a.mileage ?? Number.MAX_SAFE_INTEGER) -
//           (b.mileage ?? Number.MAX_SAFE_INTEGER)
//       );
//       break;
//     case '-mileage':
//       rows.sort((a, b) => (b.mileage ?? -1) - (a.mileage ?? -1));
//       break;
//     // Fallback for "-created_date": keep insertion order (mock) or sort by id desc if numeric-like
//     default:
//       rows.sort(
//         (a, b) => (parseInt(b.id, 10) || 0) - (parseInt(a.id, 10) || 0)
//       );
//   }

//   // Simulate async
//   await new Promise((r) => setTimeout(r, 50));
//   return rows;
// }
