import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@primereact/ui/label';

export default function SizesDemo() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2">
                <Checkbox inputId="small" size="small" />
                <Label htmlFor="small">Small</Label>
            </div>
            <div className="flex items-center gap-2">
                <Checkbox inputId="normal" size="normal" />
                <Label htmlFor="normal">Normal</Label>
            </div>
            <div className="flex items-center gap-2">
                <Checkbox inputId="large" size="large" />
                <Label htmlFor="large">Large</Label>
            </div>
        </div>
    );
}
