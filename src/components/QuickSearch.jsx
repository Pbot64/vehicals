import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

const makes = ["All Makes", "Audi", "BMW", "Chevrolet", "Ford", "Honda", "Hyundai", "Jeep", "Mazda", "Mercedes-Benz", "Nissan", "Tesla", "Toyota", "Volkswagen"];
const years = ["All Years", ...Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i)];

export default function QuickSearch() {
  const navigate = useNavigate();
  const [make, setMake] = useState("All Makes");
  const [year, setYear] = useState("All Years");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (make && make !== "All Makes") params.set("make", make);
    if (year && year !== "All Years") params.set("year", year);
    if (minPrice) params.set("minPrice", minPrice);
    if (maxPrice) params.set("maxPrice", maxPrice);

    navigate(`${createPageUrl("Inventory")}?${params.toString()}`);
  };

  return (
    <div data-source-location="components/QuickSearch:29:4" data-dynamic-content="true" className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
      <h3 data-source-location="components/QuickSearch:30:6" data-dynamic-content="false" className="text-xl font-semibold text-slate-900 mb-6">Find Your Perfect Vehicle</h3>
      
      <div data-source-location="components/QuickSearch:32:6" data-dynamic-content="true" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Make */}
        <div data-source-location="components/QuickSearch:34:8" data-dynamic-content="true">
          <label data-source-location="components/QuickSearch:35:10" data-dynamic-content="false" className="block text-sm font-medium text-slate-700 mb-2">Make</label>
          <Select data-source-location="components/QuickSearch:36:10" data-dynamic-content="true" value={make} onValueChange={setMake}>
            <SelectTrigger data-source-location="components/QuickSearch:37:12" data-dynamic-content="false">
              <SelectValue data-source-location="components/QuickSearch:38:14" data-dynamic-content="false" />
            </SelectTrigger>
            <SelectContent data-source-location="components/QuickSearch:40:12" data-dynamic-content="true">
              {makes.map((m) =>
              <SelectItem data-source-location="components/QuickSearch:42:16" data-dynamic-content="true" key={m} value={m}>{m}</SelectItem>
              )}
            </SelectContent>
          </Select>
        </div>

        {/* Year */}
        <div data-source-location="components/QuickSearch:49:8" data-dynamic-content="true">
          <label data-source-location="components/QuickSearch:50:10" data-dynamic-content="false" className="block text-sm font-medium text-slate-700 mb-2">Year</label>
          <Select data-source-location="components/QuickSearch:51:10" data-dynamic-content="true" value={year} onValueChange={setYear}>
            <SelectTrigger data-source-location="components/QuickSearch:52:12" data-dynamic-content="false">
              <SelectValue data-source-location="components/QuickSearch:53:14" data-dynamic-content="false" />
            </SelectTrigger>
            <SelectContent data-source-location="components/QuickSearch:55:12" data-dynamic-content="true">
              {years.map((y) =>
              <SelectItem data-source-location="components/QuickSearch:57:16" data-dynamic-content="true" key={y} value={String(y)}>{y}</SelectItem>
              )}
            </SelectContent>
          </Select>
        </div>

        {/* Min Price */}
        <div data-source-location="components/QuickSearch:64:8" data-dynamic-content="true">
          <label data-source-location="components/QuickSearch:65:10" data-dynamic-content="false" className="block text-sm font-medium text-slate-700 mb-2">Min Price</label>
          <input data-source-location="components/QuickSearch:66:10" data-dynamic-content="false"
          type="number"
          placeholder="$0"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" />

        </div>

        {/* Max Price */}
        <div data-source-location="components/QuickSearch:76:8" data-dynamic-content="true">
          <label data-source-location="components/QuickSearch:77:10" data-dynamic-content="false" className="block text-sm font-medium text-slate-700 mb-2">Max Price</label>
          <input data-source-location="components/QuickSearch:78:10" data-dynamic-content="false"
          type="number"
          placeholder="Any"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" />

        </div>

        {/* Search Button */}
        <div data-source-location="components/QuickSearch:88:8" data-dynamic-content="true" className="flex items-end">
          <Button data-source-location="components/QuickSearch:89:10" data-dynamic-content="false"
          onClick={handleSearch}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/30 h-10">

            <Search data-source-location="components/QuickSearch:93:12" data-dynamic-content="false" className="w-4 h-4 mr-2" />
            Search
          </Button>
        </div>
      </div>
    </div>);

}