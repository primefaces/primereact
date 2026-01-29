import { Fluid } from '@primereact/ui/fluid';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';

export default function BasicDemo() {
    return (
        <div>
            <Fluid>
                <Label htmlFor="with-fluid" className="font-bold mb-2 block">
                    With Fluid
                </Label>
                <InputText id="with-fluid" placeholder="Type..." />
            </Fluid>
        </div>
    );
}
