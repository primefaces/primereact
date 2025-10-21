import type { ListboxValueChangeEvent } from '@primereact/types/listbox';
import { cn } from '@primeuix/utils';
import { Listbox } from 'primereact/listbox';
import { useState } from 'react';

const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];

export default function CustomSelectionDemo() {
    const [selectedCities, setSelectedCities] = useState<string[] | null>(null);

    return (
        <div className="card flex justify-center">
            <Listbox
                value={selectedCities}
                onValueChange={(e: ListboxValueChangeEvent) => setSelectedCities(e.value)}
                options={cities}
                multiple
                className="w-full md:w-56"
            >
                <Listbox.Options>
                    {(instance) => {
                        const { listbox, options } = instance;

                        return options.map((option, index) => {
                            const isSelected = listbox.isSelected(option);

                            return (
                                <Listbox.Option key={option.code} index={index} className="group">
                                    <div className="flex items-center justify-between w-full">
                                        <span>{option.name}</span>
                                        <i
                                            className={cn('opacity-5 group-hover:opacity-100 transition-opacity duration-500', {
                                                'pi pi-star-fill opacity-80': isSelected,
                                                'pi pi-star': !isSelected
                                            })}
                                        ></i>
                                    </div>
                                </Listbox.Option>
                            );
                        });
                    }}
                </Listbox.Options>
            </Listbox>
        </div>
    );
}
