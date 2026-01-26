import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@primereact/ui/label';

export default function InvalidDemo() {
    return (
        <div className="flex items-center justify-center">
            <div className="flex items-center gap-2">
                <Checkbox inputId="invalid" invalid />
                <Label.Root htmlFor="invalid" className="text-red-500 dark:text-red-400">
                    Invalid
                </Label.Root>
            </div>
        </div>
    );
}
