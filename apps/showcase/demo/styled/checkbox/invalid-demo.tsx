import { CheckIcon } from '@primereact/icons';
import { Checkbox } from '@primereact/ui/checkbox';
import { Label } from '@primereact/ui/label';

export default function InvalidDemo() {
    return (
        <div className="flex items-center justify-center">
            <div className="flex items-center gap-2">
                <Checkbox.Root inputId="invalid" invalid>
                    <Checkbox.Box>
                        <Checkbox.Indicator className="data-unchecked:hidden!" as={CheckIcon} />
                    </Checkbox.Box>
                </Checkbox.Root>
                <Label htmlFor="invalid" className="text-red-500 dark:text-red-400">
                    Invalid
                </Label>
            </div>
        </div>
    );
}
