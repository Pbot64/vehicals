import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const makes = ["Audi", "BMW", "Chevrolet", "Ford", "Honda", "Hyundai", "Jeep", "Mazda", "Mercedes-Benz", "Nissan", "Tesla", "Toyota", "Volkswagen"];
const bodyTypes = ["Sedan", "SUV", "Truck", "Coupe", "Convertible", "Wagon", "Van", "Hatchback"];
const fuelTypes = ["Gasoline", "Diesel", "Electric", "Hybrid", "Plug-in Hybrid"];
const transmissions = ["Automatic", "Manual", "CVT", "DCT"];
const drivetrains = ["FWD", "RWD", "AWD", "4WD"];

export default function FilterPanel({ filters, onFilterChange, onClearFilters, activeFilterCount }) {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 15 }, (_, i) => currentYear - i);

  return (
    <div data-source-location="components/FilterPanel:17:4" data-dynamic-content="true" className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <div data-source-location="components/FilterPanel:18:6" data-dynamic-content="true" className="flex items-center justify-between mb-6">
        <h2 data-source-location="components/FilterPanel:19:8" data-dynamic-content="false" className="text-lg font-semibold text-slate-900">Filters</h2>
        {activeFilterCount > 0 &&
        <Button data-source-location="components/FilterPanel:21:10" data-dynamic-content="false" variant="ghost" size="sm" onClick={onClearFilters} className="text-blue-600">
            Clear All
          </Button>
        }
      </div>

      <div data-source-location="components/FilterPanel:27:6" data-dynamic-content="true" className="space-y-6">
        {/* Make */}
        <div data-source-location="components/FilterPanel:29:8" data-dynamic-content="true">
          <Label data-source-location="components/FilterPanel:30:10" data-dynamic-content="false" className="text-sm font-medium text-slate-700 mb-2 block">Make</Label>
          <Select data-source-location="components/FilterPanel:31:10" data-dynamic-content="true" value={filters.make} onValueChange={(value) => onFilterChange("make", value)}>
            <SelectTrigger data-source-location="components/FilterPanel:32:12" data-dynamic-content="false">
              <SelectValue data-source-location="components/FilterPanel:33:14" data-dynamic-content="false" placeholder="All Makes" />
            </SelectTrigger>
            <SelectContent data-source-location="components/FilterPanel:35:12" data-dynamic-content="true">
              <SelectItem data-source-location="components/FilterPanel:36:14" data-dynamic-content="false" value={null}>All Makes</SelectItem>
              {makes.map((make) =>
              <SelectItem data-source-location="components/FilterPanel:38:16" data-dynamic-content="true" key={make} value={make}>{make}</SelectItem>
              )}
            </SelectContent>
          </Select>
        </div>

        {/* Model */}
        <div data-source-location="components/FilterPanel:45:8" data-dynamic-content="true">
          <Label data-source-location="components/FilterPanel:46:10" data-dynamic-content="false" className="text-sm font-medium text-slate-700 mb-2 block">Model</Label>
          <input data-source-location="components/FilterPanel:47:10" data-dynamic-content="false"
          type="text"
          placeholder="Any Model"
          value={filters.model}
          onChange={(e) => onFilterChange("model", e.target.value)}
          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" />

        </div>

        {/* Year Range */}
        <div data-source-location="components/FilterPanel:57:8" data-dynamic-content="true">
          <Label data-source-location="components/FilterPanel:58:10" data-dynamic-content="false" className="text-sm font-medium text-slate-700 mb-2 block">Year</Label>
          <div data-source-location="components/FilterPanel:59:10" data-dynamic-content="true" className="grid grid-cols-2 gap-2">
            <Select data-source-location="components/FilterPanel:60:12" data-dynamic-content="true" value={filters.minYear} onValueChange={(value) => onFilterChange("minYear", value)}>
              <SelectTrigger data-source-location="components/FilterPanel:61:14" data-dynamic-content="false">
                <SelectValue data-source-location="components/FilterPanel:62:16" data-dynamic-content="false" placeholder="Min" />
              </SelectTrigger>
              <SelectContent data-source-location="components/FilterPanel:64:14" data-dynamic-content="true">
                <SelectItem data-source-location="components/FilterPanel:65:16" data-dynamic-content="false" value={null}>Min</SelectItem>
                {years.map((year) =>
                <SelectItem data-source-location="components/FilterPanel:67:18" data-dynamic-content="true" key={year} value={String(year)}>{year}</SelectItem>
                )}
              </SelectContent>
            </Select>
            <Select data-source-location="components/FilterPanel:71:12" data-dynamic-content="true" value={filters.maxYear} onValueChange={(value) => onFilterChange("maxYear", value)}>
              <SelectTrigger data-source-location="components/FilterPanel:72:14" data-dynamic-content="false">
                <SelectValue data-source-location="components/FilterPanel:73:16" data-dynamic-content="false" placeholder="Max" />
              </SelectTrigger>
              <SelectContent data-source-location="components/FilterPanel:75:14" data-dynamic-content="true">
                <SelectItem data-source-location="components/FilterPanel:76:16" data-dynamic-content="false" value={null}>Max</SelectItem>
                {years.map((year) =>
                <SelectItem data-source-location="components/FilterPanel:78:18" data-dynamic-content="true" key={year} value={String(year)}>{year}</SelectItem>
                )}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Price Range */}
        <div data-source-location="components/FilterPanel:86:8" data-dynamic-content="true">
          <Label data-source-location="components/FilterPanel:87:10" data-dynamic-content="false" className="text-sm font-medium text-slate-700 mb-2 block">Price</Label>
          <div data-source-location="components/FilterPanel:88:10" data-dynamic-content="true" className="grid grid-cols-2 gap-2">
            <input data-source-location="components/FilterPanel:89:12" data-dynamic-content="false"
            type="number"
            placeholder="Min $"
            value={filters.minPrice}
            onChange={(e) => onFilterChange("minPrice", e.target.value)}
            className="px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" />

            <input data-source-location="components/FilterPanel:96:12" data-dynamic-content="false"
            type="number"
            placeholder="Max $"
            value={filters.maxPrice}
            onChange={(e) => onFilterChange("maxPrice", e.target.value)}
            className="px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" />

          </div>
        </div>

        {/* Mileage Range */}
        <div data-source-location="components/FilterPanel:107:8" data-dynamic-content="true">
          <Label data-source-location="components/FilterPanel:108:10" data-dynamic-content="false" className="text-sm font-medium text-slate-700 mb-2 block">Mileage</Label>
          <div data-source-location="components/FilterPanel:109:10" data-dynamic-content="true" className="grid grid-cols-2 gap-2">
            <input data-source-location="components/FilterPanel:110:12" data-dynamic-content="false"
            type="number"
            placeholder="Min mi"
            value={filters.minMileage}
            onChange={(e) => onFilterChange("minMileage", e.target.value)}
            className="px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" />

            <input data-source-location="components/FilterPanel:117:12" data-dynamic-content="false"
            type="number"
            placeholder="Max mi"
            value={filters.maxMileage}
            onChange={(e) => onFilterChange("maxMileage", e.target.value)}
            className="px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" />

          </div>
        </div>

        {/* Body Type */}
        <div data-source-location="components/FilterPanel:128:8" data-dynamic-content="true">
          <Label data-source-location="components/FilterPanel:129:10" data-dynamic-content="false" className="text-sm font-medium text-slate-700 mb-2 block">Body Type</Label>
          <Select data-source-location="components/FilterPanel:130:10" data-dynamic-content="true" value={filters.bodyType} onValueChange={(value) => onFilterChange("bodyType", value)}>
            <SelectTrigger data-source-location="components/FilterPanel:131:12" data-dynamic-content="false">
              <SelectValue data-source-location="components/FilterPanel:132:14" data-dynamic-content="false" placeholder="All Types" />
            </SelectTrigger>
            <SelectContent data-source-location="components/FilterPanel:134:12" data-dynamic-content="true">
              <SelectItem data-source-location="components/FilterPanel:135:14" data-dynamic-content="false" value={null}>All Types</SelectItem>
              {bodyTypes.map((type) =>
              <SelectItem data-source-location="components/FilterPanel:137:16" data-dynamic-content="true" key={type} value={type}>{type}</SelectItem>
              )}
            </SelectContent>
          </Select>
        </div>

        {/* Fuel Type */}
        <div data-source-location="components/FilterPanel:144:8" data-dynamic-content="true">
          <Label data-source-location="components/FilterPanel:145:10" data-dynamic-content="false" className="text-sm font-medium text-slate-700 mb-2 block">Fuel Type</Label>
          <Select data-source-location="components/FilterPanel:146:10" data-dynamic-content="true" value={filters.fuelType} onValueChange={(value) => onFilterChange("fuelType", value)}>
            <SelectTrigger data-source-location="components/FilterPanel:147:12" data-dynamic-content="false">
              <SelectValue data-source-location="components/FilterPanel:148:14" data-dynamic-content="false" placeholder="All Fuels" />
            </SelectTrigger>
            <SelectContent data-source-location="components/FilterPanel:150:12" data-dynamic-content="true">
              <SelectItem data-source-location="components/FilterPanel:151:14" data-dynamic-content="false" value={null}>All Fuels</SelectItem>
              {fuelTypes.map((type) =>
              <SelectItem data-source-location="components/FilterPanel:153:16" data-dynamic-content="true" key={type} value={type}>{type}</SelectItem>
              )}
            </SelectContent>
          </Select>
        </div>

        {/* Transmission */}
        <div data-source-location="components/FilterPanel:160:8" data-dynamic-content="true">
          <Label data-source-location="components/FilterPanel:161:10" data-dynamic-content="false" className="text-sm font-medium text-slate-700 mb-2 block">Transmission</Label>
          <Select data-source-location="components/FilterPanel:162:10" data-dynamic-content="true" value={filters.transmission} onValueChange={(value) => onFilterChange("transmission", value)}>
            <SelectTrigger data-source-location="components/FilterPanel:163:12" data-dynamic-content="false">
              <SelectValue data-source-location="components/FilterPanel:164:14" data-dynamic-content="false" placeholder="All" />
            </SelectTrigger>
            <SelectContent data-source-location="components/FilterPanel:166:12" data-dynamic-content="true">
              <SelectItem data-source-location="components/FilterPanel:167:14" data-dynamic-content="false" value={null}>All</SelectItem>
              {transmissions.map((type) =>
              <SelectItem data-source-location="components/FilterPanel:169:16" data-dynamic-content="true" key={type} value={type}>{type}</SelectItem>
              )}
            </SelectContent>
          </Select>
        </div>

        {/* Drivetrain */}
        <div data-source-location="components/FilterPanel:176:8" data-dynamic-content="true">
          <Label data-source-location="components/FilterPanel:177:10" data-dynamic-content="false" className="text-sm font-medium text-slate-700 mb-2 block">Drivetrain</Label>
          <Select data-source-location="components/FilterPanel:178:10" data-dynamic-content="true" value={filters.drivetrain} onValueChange={(value) => onFilterChange("drivetrain", value)}>
            <SelectTrigger data-source-location="components/FilterPanel:179:12" data-dynamic-content="false">
              <SelectValue data-source-location="components/FilterPanel:180:14" data-dynamic-content="false" placeholder="All" />
            </SelectTrigger>
            <SelectContent data-source-location="components/FilterPanel:182:12" data-dynamic-content="true">
              <SelectItem data-source-location="components/FilterPanel:183:14" data-dynamic-content="false" value={null}>All</SelectItem>
              {drivetrains.map((type) =>
              <SelectItem data-source-location="components/FilterPanel:185:16" data-dynamic-content="true" key={type} value={type}>{type}</SelectItem>
              )}
            </SelectContent>
          </Select>
        </div>

        {/* Checkboxes */}
        <div data-source-location="components/FilterPanel:192:8" data-dynamic-content="true" className="space-y-3 pt-3 border-t border-slate-200">
          <div data-source-location="components/FilterPanel:193:10" data-dynamic-content="true" className="flex items-center space-x-2">
            <Checkbox data-source-location="components/FilterPanel:194:12" data-dynamic-content="false"
            id="isNew"
            checked={filters.isNew === "true"}
            onCheckedChange={(checked) => onFilterChange("isNew", checked ? "true" : "")} />

            <Label data-source-location="components/FilterPanel:199:12" data-dynamic-content="false" htmlFor="isNew" className="text-sm font-normal cursor-pointer">
              New vehicles only
            </Label>
          </div>
          <div data-source-location="components/FilterPanel:203:10" data-dynamic-content="true" className="flex items-center space-x-2">
            <Checkbox data-source-location="components/FilterPanel:204:12" data-dynamic-content="false"
            id="isCertified"
            checked={filters.isCertified === "true"}
            onCheckedChange={(checked) => onFilterChange("isCertified", checked ? "true" : "")} />

            <Label data-source-location="components/FilterPanel:209:12" data-dynamic-content="false" htmlFor="isCertified" className="text-sm font-normal cursor-pointer">
              Certified Pre-Owned
            </Label>
          </div>
          <div data-source-location="components/FilterPanel:213:10" data-dynamic-content="true" className="flex items-center space-x-2">
            <Checkbox data-source-location="components/FilterPanel:214:12" data-dynamic-content="false"
            id="inStock"
            checked={filters.inStock === "true"}
            onCheckedChange={(checked) => onFilterChange("inStock", checked ? "true" : "")} />

            <Label data-source-location="components/FilterPanel:219:12" data-dynamic-content="false" htmlFor="inStock" className="text-sm font-normal cursor-pointer">
              In stock only
            </Label>
          </div>
        </div>
      </div>
    </div>);

}