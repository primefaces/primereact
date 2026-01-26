import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@primereact/ui/label';

export default function FilledDemo() {
    return (
        <div className="flex items-center justify-center">
            <div className="flex items-center gap-2">
                <Checkbox inputId="filled" variant="filled" />
                <Label.Root htmlFor="filled">Filled</Label.Root>
            </div>
        </div>
    );
}
