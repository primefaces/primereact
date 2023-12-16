import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Captcha } from '@/components/lib/captcha/Captcha';
import { Toast } from '@/components/lib/toast/Toast';
import { useRef } from 'react';

export function CaptchaDoc(props) {
    const toast = useRef(null);

    const showResponse = () => {
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'User Responded' });
    };

    const code = {
        basic: `
<Toast ref={toast}></Toast>
<Captcha siteKey="YOUR_SITE_KEY" onResponse={showResponse} />
        `,
        javascript: `
import React, { useRef } from 'react';
import { Ripple } from 'primereact/ripple';
import { Captcha } from 'primereact/captcha';

export default function CaptchaDoc() {
    const toast = useRef(null);

    const showResponse = () => {
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'User Responded' });
    };

    return (
        <div className="card">
            <Toast ref={toast}></Toast>
            <Captcha siteKey="YOUR_SITE_KEY" onResponse={showResponse} />
        </div>
    );
}
        `,
        typescript: `
import React, { useRef } from 'react';
import { Ripple } from 'primereact/ripple';
import { Captcha } from 'primereact/captcha';

export default function CaptchaDoc() {
    const toast = useRef<Toast>(null);

    const showResponse = () => {
        toast.current?.show({ severity: 'info', summary: 'Success', detail: 'User Responded' });
    };

    return (
        <div className="card">
            <Toast ref={toast}></Toast>
            <Captcha siteKey="YOUR_SITE_KEY" onResponse={showResponse} />
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Styling Demo Content.</p>
            </DocSectionText>
            <div className="card">
                <Toast ref={toast}></Toast>
                <Captcha siteKey="YOUR_SITE_KEY" onResponse={showResponse} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
