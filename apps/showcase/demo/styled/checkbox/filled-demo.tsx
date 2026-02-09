import { Checkbox } from '@primereact/ui/checkbox';
import { Label } from '@primereact/ui/label';
import { Check } from '@primeicons/react/check';

export default function FilledDemo() {
    return (
        <div className="flex items-center justify-center">
            <div className="flex items-center gap-2">
                <Checkbox.Root inputId="filled" variant="filled">
                    <Checkbox.Box>
                        <Checkbox.Indicator className="data-unchecked:hidden!" as={Check} />
                    </Checkbox.Box>
                </Checkbox.Root>
                <Label htmlFor="filled">Filled</Label>
            </div>
        </div>
    );
}
