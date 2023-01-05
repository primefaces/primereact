import React from 'react';
import { TreeSelect } from '../../lib/treeselect/TreeSelect';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function DisabledDoc(props) {
    const code = {
        basic: `
<TreeSelect disabled className="md:w-20rem w-full" placeholder="Select Item"></TreeSelect>
        `,
        javascript: `
import React from "react";
import { TreeSelect } from 'primereact/treeselect';

export default function DisabledDoc() {

    return (
        <div className="card flex justify-content-center">
            <TreeSelect disabled className="md:w-20rem w-full" placeholder="Select Item"></TreeSelect>
        </div>
    );
}
        `,
        typescript: `
import React from "react";
import { TreeSelect, TreeSelectChangeParams } from 'primereact/treeselect';

export default function DisabledDoc() {

    return (
        <div className="card flex justify-content-center">
            <TreeSelect disabled className="md:w-20rem w-full" placeholder="Select Item"></TreeSelect>
        </div>
    );
}
        `,
        data: `
/* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...
`
    };

    return (
        <>
            <DocSectionText {...props}>
                {/* TO DO: Add demo content. */}
                <p></p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <TreeSelect disabled className="md:w-20rem w-full" placeholder="Select Item"></TreeSelect>
            </div>
            <DocSectionCode code={code} service={['NodeService']} />
        </>
    );
}
