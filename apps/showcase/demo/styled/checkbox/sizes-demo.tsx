import { Checkbox } from '@primereact/ui/checkbox';
import { Label } from '@primereact/ui/label';
import { Check } from '@primeicons/react/check';

export default function SizesDemo() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2">
                <Checkbox.Root inputId="small" size="small">
                    <Checkbox.Box>
                        <Checkbox.Indicator className="data-unchecked:hidden!" as={Check} />
                    </Checkbox.Box>
                </Checkbox.Root>
                <Label htmlFor="small">Small</Label>
            </div>
            <div className="flex items-center gap-2">
                <Checkbox.Root inputId="normal" size="normal">
                    <Checkbox.Box>
                        <Checkbox.Indicator className="data-unchecked:hidden!" as={Check} />
                    </Checkbox.Box>
                </Checkbox.Root>
                <Label htmlFor="normal">Normal</Label>
            </div>
            <div className="flex items-center gap-2">
                <Checkbox.Root inputId="large" size="large">
                    <Checkbox.Box>
                        <Checkbox.Indicator className="data-unchecked:hidden!" as={Check} />
                    </Checkbox.Box>
                </Checkbox.Root>
                <Label htmlFor="large">Large</Label>
            </div>
        </div>
    );
}
