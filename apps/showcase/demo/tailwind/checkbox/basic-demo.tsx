import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@primereact/ui/label';

const BasicDemo = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="flex items-center gap-2">
                <Checkbox inputId="basic-checkbox" />
                <Label.Root htmlFor="basic-checkbox">
                    I accept the <a className="font-semibold">Terms of Service</a>
                </Label.Root>
            </div>
        </div>
    );
};

export default BasicDemo;
