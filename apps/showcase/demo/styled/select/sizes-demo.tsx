import { ChevronDown } from '@primeicons/react/chevron-down';
import { Select } from '@primereact/ui/select';

const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];

export default function SizesDemo() {
    return (
        <div className="flex flex-col items-center gap-4">
            <Select.Root options={cities} optionLabel="name" size="small" className="w-full md:w-56">
                <Select.Trigger>
                    <Select.Value placeholder="Small" />
                    <Select.Icon>
                        <ChevronDown />
                    </Select.Icon>
                </Select.Trigger>

                <Select.Portal>
                    <Select.Positioner>
                        <Select.Panel>
                            <Select.List>
                                <Select.Options style={{ maxHeight: '14rem' }} />
                            </Select.List>
                        </Select.Panel>
                    </Select.Positioner>
                </Select.Portal>
            </Select.Root>

            <Select.Root options={cities} optionLabel="name" className="w-full md:w-56">
                <Select.Trigger>
                    <Select.Value placeholder="Normal" />
                    <Select.Icon>
                        <ChevronDown />
                    </Select.Icon>
                </Select.Trigger>

                <Select.Portal>
                    <Select.Positioner>
                        <Select.Panel>
                            <Select.List>
                                <Select.Options style={{ maxHeight: '14rem' }} />
                            </Select.List>
                        </Select.Panel>
                    </Select.Positioner>
                </Select.Portal>
            </Select.Root>

            <Select.Root options={cities} optionLabel="name" size="large" className="w-full md:w-56">
                <Select.Trigger>
                    <Select.Value placeholder="Large" />
                    <Select.Icon>
                        <ChevronDown />
                    </Select.Icon>
                </Select.Trigger>

                <Select.Portal>
                    <Select.Positioner>
                        <Select.Panel>
                            <Select.List>
                                <Select.Options style={{ maxHeight: '14rem' }} />
                            </Select.List>
                        </Select.Panel>
                    </Select.Positioner>
                </Select.Portal>
            </Select.Root>
        </div>
    );
}
