import { Checkbox } from '@primereact/ui/checkbox';
import { Label } from '@primereact/ui/label';
import { Check } from '@primeicons/react/check';
import { Minus } from '@primeicons/react/minus';

export default function IndeterminateDemo() {
    return (
        <div className="flex items-center gap-2 justify-center">
            <Checkbox.Root indeterminate>
                <Checkbox.Box>
                    <Checkbox.Indicator className="data-checked:block! hidden!" as={Check} />
                    <Checkbox.Indicator className="data-indeterminate:data-unchecked:block! hidden!" as={Minus} />
                </Checkbox.Box>
            </Checkbox.Root>
            <Label htmlFor="indeterminate-checkbox">Email Notifications</Label>
        </div>
    );
}
