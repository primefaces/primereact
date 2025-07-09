import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { FocusTrap } from 'primereact/focustrap';
import { InputText } from 'primereact/inputtext';

export default function BasicDemo() {
    return (
        <div className="card">
            <FocusTrap className="max-w-80 mx-auto flex flex-col gap-6">
                <InputText id="input" type="text" placeholder="Name" fluid />

                <InputText id="email" type="email" placeholder="Email" fluid />

                <div className="flex items-center gap-2">
                    <Checkbox inputId="accept" name="accept" value="Accept" />
                    <label htmlFor="accept">I agree to the terms and conditions.</label>
                </div>

                <Button type="submit" className="mt-2">
                    Submit
                </Button>
            </FocusTrap>
        </div>
    );
}
