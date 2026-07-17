'use client';
import { ChevronDown } from 'lucide-react';
import { useMemo, useState } from 'react';
import { formatCountry, formatRegion, regionCnToCountryCns, countryCnToRegionCn } from '@/data/regions';

interface FilterPanelProps {
  selectedRegions: string[];
  selectedCountries: string[];
  selectedCategories: string[];
  regions: string[];
  countries: string[];
  categories: string[];
  onRegionsChange: (v: string[]) => void;
  onCountriesChange: (v: string[]) => void;
  onCategoriesChange: (v: string[]) => void;
  onReset: () => void;
}

export default function FilterPanel({ selectedRegions, selectedCountries, selectedCategories, regions, countries, categories, onRegionsChange, onCountriesChange, onCategoriesChange, onReset }: FilterPanelProps) {
  const [expanded, setExpanded] = useState({ region: true, country: true, category: true });
  const toggle = (s: 'region'|'country'|'category') => setExpanded(p => ({ ...p, [s]: !p[s] }));
  const hasFilters = selectedRegions.length > 0 || selectedCountries.length > 0 || selectedCategories.length > 0;

  const visibleCountries = useMemo(() => {
    if (selectedRegions.length === 0) return countries;
    const allowed = new Set<string>();
    selectedRegions.forEach(r => (regionCnToCountryCns[r] ?? []).forEach(c => allowed.add(c)));
    return countries.filter(c => allowed.has(c));
  }, [selectedRegions, countries]);

  const toggleRegion = (r: string) => {
    const next = selectedRegions.includes(r) ? selectedRegions.filter(x => x !== r) : [...selectedRegions, r];
    if (selectedRegions.includes(r)) {
      const remove = new Set(regionCnToCountryCns[r] ?? []);
      onCountriesChange(selectedCountries.filter(c => !remove.has(c)));
    }
    onRegionsChange(next);
  };

  const toggleCountry = (c: string) => {
    const next = selectedCountries.includes(c) ? selectedCountries.filter(x => x !== c) : [...selectedCountries, c];
    if (!selectedCountries.includes(c)) {
      const reg = countryCnToRegionCn[c];
      if (reg && !selectedRegions.includes(reg)) onRegionsChange([...selectedRegions, reg]);
    }
    onCountriesChange(next);
  };

  const toggleCategory = (c: string) => {
    onCategoriesChange(selectedCategories.includes(c) ? selectedCategories.filter(x => x !== c) : [...selectedCategories, c]);
  };

  return (
    <div className="bg-white rounded-lg p-6 card-shadow sticky top-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold text-gray-900 text-lg">筛选选项</h3>
        {hasFilters && <button onClick={onReset} className="text-xs text-blue-600 hover:text-blue-700 font-medium">清除</button>}
      </div>
      <div className="mb-6 pb-6 border-b border-gray-200">
        <button onClick={() => toggle('region')} className="w-full flex items-center justify-between mb-3 hover:text-blue-600 transition">
          <h4 className="font-semibold text-gray-900">地区 Region</h4>
          <ChevronDown size={18} className={`transform transition ${expanded.region ? 'rotate-180' : ''}`} />
        </button>
        {expanded.region && (
          <div className="space-y-1 max-h-64 overflow-y-auto pr-1">
            {regions.map(r => (
              <label key={r} className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded">
                <input type="checkbox" checked={selectedRegions.includes(r)} onChange={() => toggleRegion(r)} className="w-4 h-4 text-blue-600 rounded" />
                <span className="ml-3 text-gray-700 text-sm">{formatRegion(r)}</span>
              </label>
            ))}
          </div>
        )}
      </div>
      <div className="mb-6 pb-6 border-b border-gray-200">
        <button onClick={() => toggle('country')} className="w-full flex items-center justify-between mb-3 hover:text-blue-600 transition">
          <h4 className="font-semibold text-gray-900">国家 Country{selectedRegions.length > 0 && <span className="ml-2 text-xs font-normal text-gray-500">（已按地区过滤）</span>}</h4>
          <ChevronDown size={18} className={`transform transition ${expanded.country ? 'rotate-180' : ''}`} />
        </button>
        {expanded.country && (
          <div className="space-y-1 max-h-64 overflow-y-auto pr-1">
            {visibleCountries.length === 0 ? <p className="text-xs text-gray-400 p-2">暂无国家数据</p> : visibleCountries.map(c => (
              <label key={c} className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded">
                <input type="checkbox" checked={selectedCountries.includes(c)} onChange={() => toggleCountry(c)} className="w-4 h-4 text-blue-600 rounded" />
                <span className="ml-3 text-gray-700 text-sm">{formatCountry(c)}</span>
              </label>
            ))}
          </div>
        )}
      </div>
      <div>
        <button onClick={() => toggle('category')} className="w-full flex items-center justify-between mb-3 hover:text-blue-600 transition">
          <h4 className="font-semibold text-gray-900">分类 Category</h4>
          <ChevronDown size={18} className={`transform transition ${expanded.category ? 'rotate-180' : ''}`} />
        </button>
        {expanded.category && (
          <div className="space-y-1 max-h-48 overflow-y-auto pr-1">
            {categories.map(c => (
              <label key={c} className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded">
                <input type="checkbox" checked={selectedCategories.includes(c)} onChange={() => toggleCategory(c)} className="w-4 h-4 text-blue-600 rounded" />
                <span className="ml-3 text-gray-700 text-sm">{c}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}