import { CheckIcon } from '@primereact/icons';
import { Checkbox } from '@primereact/ui/checkbox';
import { Label } from '@primereact/ui/label';

const BasicDemo = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="flex items-center gap-2">
                <Checkbox.Root inputId="basic-checkbox">
                    <Checkbox.Box>
                        <Checkbox.Indicator className="data-unchecked:hidden!" as={CheckIcon} />
                    </Checkbox.Box>
                </Checkbox.Root>
                <Label htmlFor="basic-checkbox">
                    I accept the <a className="font-semibold">Terms of Service</a>
                </Label>
            </div>
        </div>
    );
};

export default BasicDemo;
