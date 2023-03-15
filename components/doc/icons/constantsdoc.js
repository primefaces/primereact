import { PrimeIcons } from '../../lib/api/PrimeIcons';
import { Menu } from '../../lib/menu/Menu';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

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
            <DocSectionCode code={code} hideToggleCode import hideCodeSandbox hideStackBlitz />
        </>
    );
}
