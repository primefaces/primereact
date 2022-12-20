import { useRef } from 'react';
import { Button } from '../../lib/button/Button';
import { Toast } from '../../lib/toast/Toast';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ClearDoc(props) {
    const toast = useRef(null);

    const clear = () => {
        toast.current.clear();
    };

    const code = {
        basic: `
<Toast ref={toast} />
<Button onClick={clear} label="Clear" />
        `,
        javascript: `
import { useRef } from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function ClearDoc() {
    const toast = useRef(null);

    const clear = () => {
        toast.current.clear();
    }

    return (
        <div>
            <Toast ref={toast} />
            <Button onClick={clear} label="Clear" />
        </div>
    )
}
        `,
        typescript: `
import { useRef } from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function ClearDoc() {
    const toast = useRef<Toast>(null);

    const clear = () => {
        toast.current?.clear();
    }

    return (
        <div>
            <Toast ref={toast} />
            <Button onClick={clear} label="Clear" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Clear</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Toast ref={toast} />
                <div>
                    <Button onClick={clear} label="Clear" className="md:w-auto md:mr-1 w-full mb-1" />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
