import { Checkbox } from '@primereact/ui/checkbox';
import { Label } from '@primereact/ui/label';

export default function SizesDemo() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2">
                <Checkbox.Root inputId="small" size="small" />
                <Label.Root htmlFor="small">Small</Label.Root>
            </div>
            <div className="flex items-center gap-2">
                <Checkbox.Root inputId="normal" size="normal" />
                <Label.Root htmlFor="normal">Normal</Label.Root>
            </div>
            <div className="flex items-center gap-2">
                <Checkbox.Root inputId="large" size="large" />
                <Label.Root htmlFor="large">Large</Label.Root>
            </div>
        </div>
    );
}
