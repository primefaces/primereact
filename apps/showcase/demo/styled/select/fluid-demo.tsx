import { ChevronDown } from '@primeicons/react/chevron-down';
import { Select } from '@primereact/ui/select';

const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];

export default function FluidDemo() {
    return (
        <div>
            <Select.Root options={cities} optionLabel="name" fluid>
                <Select.Trigger>
                    <Select.Value placeholder="Select a City" />
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
