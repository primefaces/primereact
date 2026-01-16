// 'use client';

// import type { SelectValueChangeEvent } from '@primereact/types/shared/select';
// import { ChevronDownIcon, SearchIcon } from '@primereact/icons';
// import { IconField } from '@primereact/ui/iconfield';
// import { InputText } from '@primereact/ui/inputtext';
// import { Select } from '@primereact/ui/select';
// import { useState, useMemo } from 'react';

// const countries = [
//     { name: 'Argentina', code: 'AR', continent: 'South America' },
//     { name: 'Australia', code: 'AU', continent: 'Oceania' },
//     { name: 'Brazil', code: 'BR', continent: 'South America' },
//     { name: 'Canada', code: 'CA', continent: 'North America' },
//     { name: 'China', code: 'CN', continent: 'Asia' },
//     { name: 'France', code: 'FR', continent: 'Europe' },
//     { name: 'Germany', code: 'DE', continent: 'Europe' },
//     { name: 'India', code: 'IN', continent: 'Asia' },
//     { name: 'Italy', code: 'IT', continent: 'Europe' },
//     { name: 'Japan', code: 'JP', continent: 'Asia' },
//     { name: 'Mexico', code: 'MX', continent: 'North America' },
//     { name: 'Netherlands', code: 'NL', continent: 'Europe' },
//     { name: 'South Korea', code: 'KR', continent: 'Asia' },
//     { name: 'Spain', code: 'ES', continent: 'Europe' },
//     { name: 'Turkey', code: 'TR', continent: 'Europe' },
//     { name: 'United Kingdom', code: 'GB', continent: 'Europe' },
//     { name: 'United States', code: 'US', continent: 'North America' }
// ];

// function getFlagEmoji(countryCode: string): string {
//     const codePoints = countryCode
//         .toUpperCase()
//         .split('')
//         .map((char) => 127397 + char.charCodeAt(0));

//     return String.fromCodePoint(...codePoints);
// }

// export default function FilterDemo() {
//     const [country, setCountry] = useState<string | null>(null);
//     const [filterValue, setFilterValue] = useState<string>('');

//     const filteredCountries = useMemo(
//         () => countries.filter((c) => c.name.toLowerCase().includes(filterValue.toLowerCase()) || c.continent.toLowerCase().includes(filterValue.toLowerCase())),
//         [filterValue]
//     );

//     const selectedCountry = countries.find((c) => c.code === country);

//     return (
//         <div className="flex justify-center">
//             <Select.Root
//                 value={country}
//                 onValueChange={(e: SelectValueChangeEvent) => setCountry(e.value as string | null)}
//                 options={filteredCountries}
//                 optionLabel="name"
//                 optionValue="code"
//                 className="w-full md:w-72"
//             >
//                 <Select.Trigger>
//                     {selectedCountry ? (
//                         <span className="flex items-center gap-2">
//                             <span className="text-lg">{getFlagEmoji(selectedCountry.code)}</span>
//                             <span>{selectedCountry.name}</span>
//                         </span>
//                     ) : (
//                         <span className="text-surface-400">Select country...</span>
//                     )}
//                 </Select.Trigger>
//                 <Select.Dropdown>
//                     <ChevronDownIcon />
//                 </Select.Dropdown>
//                 <Select.Portal>
//                     <Select.List>
//                         <Select.Header className="p-2">
//                             <IconField.Root className="w-full">
//                                 <Select.Filter
//                                     as={InputText}
//                                     placeholder="Search countries..."
//                                     value={filterValue}
//                                     onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterValue(e.target.value)}
//                                     className="w-full"
//                                 />
//                                 <IconField.InputIcon>
//                                     <SearchIcon className="w-4 h-4" />
//                                 </IconField.InputIcon>
//                             </IconField.Root>
//                         </Select.Header>
//                         <Select.Options style={{ maxHeight: '14rem' }}>
//                             {filteredCountries.length > 0 ? (
//                                 filteredCountries.map((c, index) => (
//                                     <Select.Option key={c.code} index={index} uKey={c.code}>
//                                         <div className="flex items-center gap-3">
//                                             <span className="text-lg">{getFlagEmoji(c.code)}</span>
//                                             <div className="flex flex-col">
//                                                 <span className="font-medium">{c.name}</span>
//                                                 <span className="text-xs text-surface-500">{c.continent}</span>
//                                             </div>
//                                         </div>
//                                     </Select.Option>
//                                 ))
//                             ) : (
//                                 <div className="p-4 text-center text-surface-500">No countries found</div>
//                             )}
//                         </Select.Options>
//                     </Select.List>
//                 </Select.Portal>
//             </Select.Root>
//         </div>
//     );
// }

'use client';

import { ChevronDownIcon } from '@primereact/icons';
import { Select } from '@primereact/ui/select';
import * as React from 'react';
import Image from 'next/image';
import { IconField } from '@primereact/ui/iconfield';
import { InputText } from '@primereact/ui/inputtext';
import { SelectValueChangeEvent } from '@primereact/types/shared/select';

const countries = [
    { name: 'Australia', code: 'AU' },
    { name: 'Brazil', code: 'BR' },
    { name: 'China', code: 'CN' },
    { name: 'Egypt', code: 'EG' },
    { name: 'France', code: 'FR' },
    { name: 'Germany', code: 'DE' },
    { name: 'India', code: 'IN' },
    { name: 'Japan', code: 'JP' },
    { name: 'Spain', code: 'ES' },
    { name: 'Turkey', code: 'TR' },
    { name: 'United States', code: 'US' }
];

export default function FilterDemo() {
    const [selectedCountry, setSelectedCountry] = React.useState<string | null>(null);
    const [filterValue, setFilterValue] = React.useState<string>('');
    const filteredCountries = React.useMemo(
        () => countries.filter((country) => country.name.toLowerCase().startsWith(filterValue.toLowerCase())),
        [filterValue]
    );

    return (
        <div className="flex justify-center">
            <Select.Root
                options={filteredCountries}
                optionLabel="name"
                value={selectedCountry}
                onValueChange={(e: SelectValueChangeEvent) => setSelectedCountry(e.value as string | null)}
                className="w-full md:w-56"
            >
                <Select.Trigger>
                    <span>Select a Country</span>
                </Select.Trigger>
                <Select.Dropdown>
                    <ChevronDownIcon />
                </Select.Dropdown>

                <Select.Portal>
                    <Select.List>
                        <Select.Header>
                            <IconField.Root>
                                <Select.Filter
                                    as={InputText}
                                    placeholder="Search country"
                                    value={filterValue}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterValue(e.target.value)}
                                />
                                <IconField.InputIcon>
                                    <i className="pi pi-search" />
                                </IconField.InputIcon>
                            </IconField.Root>
                        </Select.Header>
                        <Select.Options style={{ maxHeight: '14rem' }}>
                            {filteredCountries.map((country, index) => (
                                <Select.Option key={country.code} index={index} uKey={country.code}>
                                    <div className="flex items-center gap-2">
                                        <Image
                                            alt={country.name}
                                            src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                                            className={`flag flag-${country.code.toLowerCase()} mr-2`}
                                            width={18}
                                            height={12}
                                            style={{ width: '18px', height: '12px' }}
                                        />
                                        <span>{country.name}</span>
                                    </div>
                                </Select.Option>
                            ))}
                        </Select.Options>
                    </Select.List>
                </Select.Portal>
            </Select.Root>
        </div>
    );
}
