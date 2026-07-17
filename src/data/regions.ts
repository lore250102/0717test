export interface Country { nameCn: string; nameEn: string; }
export interface Region { nameCn: string; nameEn: string; countries: Country[]; }

export const regions: Region[] = [
  { nameCn: '东南亚地区', nameEn: 'South East Asia', countries: [
    { nameCn: '新加坡', nameEn: 'Singapore' }, { nameCn: '泰国', nameEn: 'Thailand' },
    { nameCn: '马来西亚', nameEn: 'Malaysia' }, { nameCn: '越南', nameEn: 'Vietnam' },
    { nameCn: '菲律宾', nameEn: 'Philippines' }, { nameCn: '柬埔寨', nameEn: 'Cambodia' },
    { nameCn: '缅甸', nameEn: 'Myanmar' },
  ]},
  { nameCn: '东亚地区', nameEn: 'East Asia', countries: [
    { nameCn: '日本', nameEn: 'Japan' }, { nameCn: '韩国', nameEn: 'Korea' },
    { nameCn: '中国台湾', nameEn: 'Chinese Taiwan' }, { nameCn: '中国香港', nameEn: 'Chinese HK' },
  ]},
  { nameCn: '南亚地区', nameEn: 'South Asia', countries: [
    { nameCn: '印度', nameEn: 'India' }, { nameCn: '尼泊尔', nameEn: 'Nepal' },
    { nameCn: '孟加拉', nameEn: 'Bangladesh' }, { nameCn: '斯里兰卡', nameEn: 'Sri Lanka' },
  ]},
  { nameCn: '印尼地区部', nameEn: 'Indonesia', countries: [{ nameCn: '印尼', nameEn: 'Indonesia' }] },
  { nameCn: '澳新地区', nameEn: 'ANZ region', countries: [{ nameCn: '澳大利亚', nameEn: 'Australia' }] },
  { nameCn: '独联体地区', nameEn: 'CIS region', countries: [
    { nameCn: '俄罗斯', nameEn: 'Russia' }, { nameCn: '哈萨克斯坦', nameEn: 'Kazakhstan' },
    { nameCn: '阿塞拜疆', nameEn: 'Azerbaijan' }, { nameCn: '乌兹别克斯坦', nameEn: 'Uzbekistan' },
  ]},
  { nameCn: '东北欧地区', nameEn: 'Northeast Europe', countries: [
    { nameCn: '罗马尼亚', nameEn: 'Romania' }, { nameCn: '波兰', nameEn: 'Poland' },
    { nameCn: '芬兰', nameEn: 'Finland' }, { nameCn: '匈牙利', nameEn: 'Hungary' },
    { nameCn: '乌克兰', nameEn: 'Ukraine' }, { nameCn: '塞尔维亚', nameEn: 'Serbia' },
    { nameCn: '希腊', nameEn: 'Greece' }, { nameCn: '捷克', nameEn: 'Czech Republic' },
    { nameCn: '瑞典', nameEn: 'Sweden' }, { nameCn: '立陶宛', nameEn: 'Lithuania' },
    { nameCn: '波黑', nameEn: 'Bosnia' }, { nameCn: '北马其顿', nameEn: 'North Macedonia' },
    { nameCn: '摩尔多瓦', nameEn: 'Moldova' }, { nameCn: '克罗地亚', nameEn: 'Croatia' },
    { nameCn: '保加利亚', nameEn: 'Bulgaria' }, { nameCn: '斯洛伐克', nameEn: 'Slovakia' },
    { nameCn: '斯洛文尼亚', nameEn: 'Slovenia' },
  ]},
  { nameCn: '西欧地区', nameEn: 'Western Europe', countries: [
    { nameCn: '奥地利', nameEn: 'Austria' }, { nameCn: '英国', nameEn: 'United Kingdom' },
    { nameCn: '瑞士', nameEn: 'Switzerland' }, { nameCn: '卢森堡', nameEn: 'Luxembourg' },
    { nameCn: '法国', nameEn: 'France' }, { nameCn: '德国', nameEn: 'Germany' },
    { nameCn: '意大利', nameEn: 'Italy' }, { nameCn: '荷兰', nameEn: 'Netherlands' },
    { nameCn: '西班牙', nameEn: 'Spain' }, { nameCn: '比利时', nameEn: 'Belgium' },
    { nameCn: '葡萄牙', nameEn: 'Portugal' },
  ]},
  { nameCn: '中东地区', nameEn: 'Middle East', countries: [
    { nameCn: '巴基斯坦', nameEn: 'Pakistan' }, { nameCn: '土耳其', nameEn: 'Turkey' },
    { nameCn: '阿联酋', nameEn: 'UAE' }, { nameCn: '卡塔尔', nameEn: 'Qatar' },
    { nameCn: '沙特阿拉伯', nameEn: 'Saudi Arabia' }, { nameCn: '伊拉克', nameEn: 'Iraq' },
    { nameCn: '约旦', nameEn: 'Jordan' }, { nameCn: '阿曼', nameEn: 'Oman' },
  ]},
  { nameCn: '非洲地区', nameEn: 'Africa', countries: [
    { nameCn: '埃及', nameEn: 'Egypt' }, { nameCn: '肯尼亚', nameEn: 'Kenya' },
    { nameCn: '摩洛哥', nameEn: 'Morocco' }, { nameCn: '南非', nameEn: 'South Africa' },
    { nameCn: '尼日利亚', nameEn: 'Nigeria' }, { nameCn: '突尼斯', nameEn: 'Tunisia' },
    { nameCn: '坦桑尼亚', nameEn: 'Tanzania' },
  ]},
  { nameCn: '美国', nameEn: 'USA', countries: [{ nameCn: '美国', nameEn: 'USA' }] },
  { nameCn: '拉美地区', nameEn: 'Latin America', countries: [
    { nameCn: '墨西哥', nameEn: 'Mexico' }, { nameCn: '秘鲁', nameEn: 'Peru' },
    { nameCn: '智利', nameEn: 'Chile' }, { nameCn: '巴西', nameEn: 'Brazil' },
    { nameCn: '阿根廷', nameEn: 'Argentina' }, { nameCn: '哥伦比亚', nameEn: 'Colombia' },
    { nameCn: '危地马拉', nameEn: 'Guatemala' }, { nameCn: '玻利维亚', nameEn: 'Bolivia' },
    { nameCn: '哥斯达黎加', nameEn: 'Costa Rica' }, { nameCn: '萨尔瓦多', nameEn: 'Salvador' },
    { nameCn: '厄瓜多尔', nameEn: 'Ecuador' }, { nameCn: '多米尼加', nameEn: 'Dominican Republic' },
    { nameCn: '洪都拉斯', nameEn: 'Honduras' }, { nameCn: '尼加拉瓜', nameEn: 'Nicaragua' },
  ]},
];

export const allCountries: Country[] = regions.flatMap(r => r.countries);
export const countryCnToRegionCn: Record<string, string> = {};
export const regionCnToCountryCns: Record<string, string[]> = {};
regions.forEach(r => {
  regionCnToCountryCns[r.nameCn] = r.countries.map(c => c.nameCn);
  r.countries.forEach(c => { if (!countryCnToRegionCn[c.nameCn]) countryCnToRegionCn[c.nameCn] = r.nameCn; });
});
export const countryCnLookup: Record<string, Country> = {};
regions.forEach(r => r.countries.forEach(c => { if (!countryCnLookup[c.nameCn]) countryCnLookup[c.nameCn] = c; }));
export const regionCnLookup: Record<string, Region> = {};
regions.forEach(r => { regionCnLookup[r.nameCn] = r; });
export function formatCountry(nameCn: string): string { const c = countryCnLookup[nameCn]; return c ? `${c.nameCn} ${c.nameEn}` : nameCn; }
export function formatRegion(nameCn: string): string { const r = regionCnLookup[nameCn]; return r ? `${r.nameCn} ${r.nameEn}` : nameCn; }