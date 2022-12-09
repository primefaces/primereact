import React, { useState, useEffect } from 'react';
import { TreeTable } from '../../lib/treetable/TreeTable';
import { Button } from '../../lib/button/Button';
import { Column } from '../../lib/column/Column';
import { NodeService } from '../../../service/NodeService';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function TemplatingDoc(props) {
    const [nodes, setNodes] = useState([]);
    const nodeservice = new NodeService();

    useEffect(() => {
        nodeservice.getTreeTableNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const actionTemplate = () => {
        return (
            <div>
                <Button type="button" icon="pi pi-search" className="p-button-success" style={{ marginRight: '.5em' }}></Button>
                <Button type="button" icon="pi pi-pencil" className="p-button-warning"></Button>
            </div>
        );
    };

    const header = 'File Viewer';
    const footer = (
        <div style={{ textAlign: 'left' }}>
            <Button icon="pi pi-refresh" tooltip="Reload" />
        </div>
    );

    const code = {
        basic: `
<TreeTable value={nodes} header={header} footer={footer}>
    <Column field="name" header="Name" expander></Column>
    <Column field="size" header="Size"></Column>
    <Column field="type" header="Type"></Column>
    <Column body={actionTemplate} style={{ textAlign: 'center', width: '10rem' }} />
</TreeTable>
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { NodeService } from '../service/NodeService';

const TemplatingDoc = () => {
    const [nodes, setNodes] = useState([]);
    const nodeservice = new NodeService();

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

        const actionTemplate = () => {
        return (
            <div>
                <Button type="button" icon="pi pi-search" className="p-button-success" style={{ marginRight: '.5em' }}></Button>
                <Button type="button" icon="pi pi-pencil" className="p-button-warning"></Button>
            </div>
        );
    };

    const header = 'File Viewer';
    const footer = (
        <div style={{ textAlign: 'left' }}>
            <Button icon="pi pi-refresh" tooltip="Reload" />
        </div>
    );

    const actionTemplate = (node, column) => {
        return <div>
            <Button type="button" icon="pi pi-search" className="p-button-success" style={{ marginRight: '.5em' }}></Button>
            <Button type="button" icon="pi pi-pencil" className="p-button-warning"></Button>
        </div>;
    }

    const header = "File Viewer";
    const footer = <div style={{ textAlign: 'left' }}><Button icon="pi pi-refresh" tooltip="Reload" /></div>;

    return (
        <div>
            <div className="card">
                <TreeTable value={nodes} header={header} footer={footer}>
                    <Column field="name" header="Name" expander></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                    <Column body={actionTemplate} style={{ textAlign: 'center', width: '10rem' }} />
                </TreeTable>
            </div>
        </div>
    );
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { NodeService } from '../service/NodeService';

const TemplatingDoc = () => {
    const [nodes, setNodes] = useState([]);
    const nodeservice = new NodeService();

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

        const actionTemplate = () => {
        return (
            <div>
                <Button type="button" icon="pi pi-search" className="p-button-success" style={{ marginRight: '.5em' }}></Button>
                <Button type="button" icon="pi pi-pencil" className="p-button-warning"></Button>
            </div>
        );
    };

    const header = 'File Viewer';
    const footer = (
        <div style={{ textAlign: 'left' }}>
            <Button icon="pi pi-refresh" tooltip="Reload" />
        </div>
    );

    const actionTemplate = (node, column) => {
        return <div>
            <Button type="button" icon="pi pi-search" className="p-button-success" style={{ marginRight: '.5em' }}></Button>
            <Button type="button" icon="pi pi-pencil" className="p-button-warning"></Button>
        </div>;
    }

    const header = "File Viewer";
    const footer = <div style={{ textAlign: 'left' }}><Button icon="pi pi-refresh" tooltip="Reload" /></div>;

    return (
        <div>
            <div className="card">
                <TreeTable value={nodes} header={header} footer={footer}>
                    <Column field="name" header="Name" expander></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                    <Column body={actionTemplate} style={{ textAlign: 'center', width: '10rem' }} />
                </TreeTable>
            </div>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Custom content at header, body and footer sections are supported via templating.</p>
            </DocSectionText>
            <div className="card">
                <TreeTable value={nodes} header={header} footer={footer}>
                    <Column field="name" header="Name" expander></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                    <Column body={actionTemplate} style={{ textAlign: 'center', width: '10rem' }} />
                </TreeTable>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
