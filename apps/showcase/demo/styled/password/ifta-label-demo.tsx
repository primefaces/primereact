import { IftaLabel } from '@primereact/ui/iftalabel';
import { Label } from '@primereact/ui/label';
import { Password } from '@primereact/ui/password';

export default function IftaLabelDemo() {
    return (
        <div className="flex justify-center">
            <IftaLabel>
                <Password id="new-password" variant="filled" />
                <Label htmlFor="new-password" className="mb-2">
                    Password
                </Label>
            </IftaLabel>
        </div>
    );
}
