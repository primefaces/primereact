import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Password } from '@/components/lib/password/Password';
import Link from 'next/link';
import { useState } from 'react';

export function LocaleDoc(props) {
    const [value, setValue] = useState('');

    const code = {
        basic: `
<Password value={value} onChange={(e) => setValue(e.target.value)}
    promptLabel="Choose a password" weakLabel="Too simple" mediumLabel="Average complexity" strongLabel="Complex password"/>
        `,
        javascript: `
import React, { useState } from "react";
import { Password } from 'primereact/password';

export default function LocaleDemo() {
    const [value, setValue] = useState('');

    return (
        <div className="card flex justify-content-center">
            <Password value={value} onChange={(e) => setValue(e.target.value)}
                promptLabel="Choose a password" weakLabel="Too simple" mediumLabel="Average complexity" strongLabel="Complex password"/>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Password } from 'primereact/password';

export default function LocaleDemo() {
    const [value, setValue] = useState<string>('');

    return (
        <div className="card flex justify-content-center">
            <Password value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} 
                promptLabel="Choose a password" weakLabel="Too simple" mediumLabel="Average complexity" strongLabel="Complex password"/>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Labels are translated at component level by <i>promptLabel</i>, <i>weakLabel</i>, <i>mediumLabel</i> and <i>strongLabel</i> properties. In order to apply global translations for all Password components in the application, refer to
                    the <Link href="/locale">Locale API</Link>.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Password value={value} onChange={(e) => setValue(e.target.value)} promptLabel="Choose a password" weakLabel="Too simple" mediumLabel="Average complexity" strongLabel="Complex password" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
