import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { PrimeIcons } from '@/components/lib/api/PrimeIcons';
import { Menu } from '@/components/lib/menu/Menu';

export function ConstantsDoc(props) {
    const items = [
        {
            label: 'File',
            items: [
                { label: 'New', icon: PrimeIcons.PLUS },
                { label: 'Open', icon: PrimeIcons.DOWNLOAD }
            ]
        }
    ];

    const code = {
        basic: `
import React from 'react'; 
import { Menu } from 'primereact/menu';
import { PrimeIcons } from 'primereact/api';

export default function ConstantsDemo() {
    const items = [
        {
            label: 'File',
            items: [
                { label: 'New', icon: PrimeIcons.PLUS },
                { label: 'Open', icon: PrimeIcons.DOWNLOAD }
            ]
        }
    ];

    return (
        <Menu model={items} />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Constants API is available to reference icons easily when used programmatically.</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Menu model={items} />
            </div>
            <DocSectionCode code={code} hideToggleCode import hideStackBlitz />
        </>
    );
}
