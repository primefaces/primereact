import { Checkbox } from '@primereact/ui/checkbox';
import { Check } from '@primeicons/react/check';

export default function DisabledDemo() {
    return (
        <div className="flex items-center justify-center gap-4">
            <Checkbox.Root inputId="disabled" disabled>
                <Checkbox.Box>
                    <Checkbox.Indicator className="data-unchecked:hidden!" as={Check} />
                </Checkbox.Box>
            </Checkbox.Root>
            <Checkbox.Root inputId="disabled" disabled checked>
                <Checkbox.Box>
                    <Checkbox.Indicator className="data-unchecked:hidden!" as={Check} />
                </Checkbox.Box>
            </Checkbox.Root>
        </div>
    );
}
