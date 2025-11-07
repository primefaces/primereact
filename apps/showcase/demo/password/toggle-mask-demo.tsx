import { EyeIcon } from '@primereact/icons/eye';
import { EyeSlashIcon } from '@primereact/icons/eyeslash';
import { PasswordInstance } from '@primereact/types/shared/password';
import { IconField } from 'primereact/iconfield';
import { Password } from 'primereact/password';
import * as React from 'react';

export default function ToggleMaskDemo() {
    const passwordRef = React.useRef<PasswordInstance>(null);
    const [unmasked, setUnmasked] = React.useState(false);

    const handleToggle = () => {
        passwordRef.current?.onMaskToggle();
        setUnmasked((prev) => !prev);
    };

    return (
        <div className="card flex justify-center">
            <IconField>
                <Password ref={passwordRef}>
                    <Password.Input />
                </Password>
                <IconField.Icon>{unmasked ? <EyeSlashIcon onClick={handleToggle} /> : <EyeIcon onClick={handleToggle} />}</IconField.Icon>
            </IconField>
        </div>
    );
}
