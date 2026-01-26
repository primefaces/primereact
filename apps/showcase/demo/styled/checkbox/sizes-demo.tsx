import { CheckIcon } from '@primereact/icons';
import { Checkbox } from '@primereact/ui/checkbox';
import { Label } from '@primereact/ui/label';

export default function SizesDemo() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2">
                <Checkbox.Root inputId="small" size="small">
                    <Checkbox.Box>
                        <Checkbox.Indicator className="data-unchecked:hidden!" as={CheckIcon} />
                    </Checkbox.Box>
                </Checkbox.Root>
                <Label.Root htmlFor="small">Small</Label.Root>
            </div>
            <div className="flex items-center gap-2">
                <Checkbox.Root inputId="normal" size="normal">
                    <Checkbox.Box>
                        <Checkbox.Indicator className="data-unchecked:hidden!" as={CheckIcon} />
                    </Checkbox.Box>
                </Checkbox.Root>
                <Label.Root htmlFor="normal">Normal</Label.Root>
            </div>
            <div className="flex items-center gap-2">
                <Checkbox.Root inputId="large" size="large">
                    <Checkbox.Box>
                        <Checkbox.Indicator className="data-unchecked:hidden!" as={CheckIcon} />
                    </Checkbox.Box>
                </Checkbox.Root>
                <Label.Root htmlFor="large">Large</Label.Root>
            </div>
        </div>
    );
}
