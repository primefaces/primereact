import { CheckIcon } from '@primereact/icons';
import { Checkbox } from '@primereact/ui/checkbox';

export default function DisabledDemo() {
    return (
        <div className="flex items-center justify-center gap-4">
            <Checkbox.Root inputId="disabled" disabled>
                <Checkbox.Box>
                    <Checkbox.Indicator className="data-unchecked:hidden!" as={CheckIcon} />
                </Checkbox.Box>
            </Checkbox.Root>
            <Checkbox.Root inputId="disabled" disabled checked>
                <Checkbox.Box>
                    <Checkbox.Indicator className="data-unchecked:hidden!" as={CheckIcon} />
                </Checkbox.Box>
            </Checkbox.Root>
        </div>
    );
}
