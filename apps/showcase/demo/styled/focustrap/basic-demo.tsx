import { Button } from '@primereact/ui/button';
import { Checkbox } from '@primereact/ui/checkbox';
import { FocusTrap } from '@primereact/ui/focustrap';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';

export default function BasicDemo() {
    return (
        <div>
            <FocusTrap className="max-w-xs mx-auto space-y-4">
                <h5 className="font-medium">Register</h5>
                <InputText id="input" type="text" placeholder="Name" fluid />

                <InputText id="email" type="email" placeholder="Email" fluid />

                <div className="flex items-center gap-2">
                    <Checkbox.Root inputId="accept" name="accept" value="Accept" />
                    <Label htmlFor="accept">I agree to the terms and conditions.</Label>
                </div>

                <Button type="submit" className="w-full">
                    Submit
                </Button>
            </FocusTrap>
        </div>
    );
}
