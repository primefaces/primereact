import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@primereact/ui/label';

export default function IndeterminateDemo() {
    return (
        <div className="flex items-center gap-2 justify-center">
            <Checkbox indeterminate />
            <Label.Root htmlFor="indeterminate-checkbox">Email Notifications</Label.Root>
        </div>
    );
}
