import { CheckIcon, MinusIcon } from '@primereact/icons';
import { Checkbox } from '@primereact/ui/checkbox';
import { Label } from '@primereact/ui/label';

export default function IndeterminateDemo() {
    return (
        <div className="flex items-center gap-2 justify-center">
            <Checkbox.Root indeterminate>
                <Checkbox.Box>
                    <Checkbox.Indicator className="data-checked:block! hidden!" as={CheckIcon} />
                    <Checkbox.Indicator className="data-indeterminate:data-unchecked:block! hidden!" as={MinusIcon} />
                </Checkbox.Box>
            </Checkbox.Root>
            <Label htmlFor="indeterminate-checkbox">Email Notifications</Label>
        </div>
    );
}
