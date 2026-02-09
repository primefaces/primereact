import { FloatLabel } from '@primereact/ui/floatlabel';
import { Label } from '@primereact/ui/label';
import { Select } from '@primereact/ui/select';
import { ChevronDown } from '@primeicons/react/chevron-down';

const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];

export default function FloatLabelDemo() {
    return (
        <div className="flex flex-wrap justify-center items-end gap-4">
            <FloatLabel>
                <Select.Root options={cities} optionLabel="name" className="w-full md:w-56">
                    <Select.Trigger id="over_label" />
                    <Select.Dropdown>
                        <ChevronDown />
                    </Select.Dropdown>

                    <Select.Portal>
                        <Select.List>
                            <Select.Options style={{ maxHeight: '14rem' }} />
                        </Select.List>
                    </Select.Portal>
                </Select.Root>

                <Label htmlFor="over_label">Over Label</Label>
            </FloatLabel>

            <FloatLabel variant="in">
                <Select.Root options={cities} optionLabel="name" className="w-full md:w-56">
                    <Select.Trigger id="in_label" />
                    <Select.Dropdown>
                        <ChevronDown />
                    </Select.Dropdown>

                    <Select.Portal>
                        <Select.List>
                            <Select.Options style={{ maxHeight: '14rem' }} />
                        </Select.List>
                    </Select.Portal>
                </Select.Root>

                <Label htmlFor="in_label">In Label</Label>
            </FloatLabel>

            <FloatLabel variant="on">
                <Select.Root options={cities} optionLabel="name" className="w-full md:w-56">
                    <Select.Trigger id="on_label" />
                    <Select.Dropdown>
                        <ChevronDown />
                    </Select.Dropdown>

                    <Select.Portal>
                        <Select.List>
                            <Select.Options style={{ maxHeight: '14rem' }} />
                        </Select.List>
                    </Select.Portal>
                </Select.Root>

                <Label htmlFor="on_label">On Label</Label>
            </FloatLabel>
        </div>
    );
}
