import { ChevronDown } from '@primeicons/react/chevron-down';
import { IftaLabel } from '@primereact/ui/iftalabel';
import { Label } from '@primereact/ui/label';
import { Select } from '@primereact/ui/select';

const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];

export default function IftaLabelDemo() {
    return (
        <div className="flex justify-center">
            <IftaLabel>
                <Select.Root options={cities} optionLabel="name" variant="filled" className="w-full md:w-56">
                    <Select.Trigger id="select">
                        <Select.Value />
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

                <Label htmlFor="select" className="mb-2">
                    City
                </Label>
            </IftaLabel>
        </div>
    );
}
