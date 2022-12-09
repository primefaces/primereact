import React, { useState, useEffect } from 'react';
import { TreeTable } from '../../../lib/treetable/TreeTable';
import { Column } from '../../../lib/column/Column';
import { InputText } from '../../../lib/inputtext/InputText';
import { NodeService } from '../../../../service/NodeService';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function StrictFilterDoc(props) {
    const [nodes, setNodes] = useState([]);
    const [globalFilter, setGlobalFilter] = useState(null);
    const nodeservice = new NodeService();

    useEffect(() => {
        nodeservice.getTreeTableNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const getHeader = () => {
        return (
            <div className="text-right">
                <div className="p-input-icon-left">
                    <i className="pi pi-search"></i>
                    <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Global Search" size="50" />
                </div>
            </div>
        );
    };

    let header = getHeader();

    const code = {
        basic: `
<TreeTable value={nodes} globalFilter={globalFilter} header={header} filterMode="strict">
    <Column field="name" header="Name" expander filter filterPlaceholder="Filter by name"></Column>
    <Column field="size" header="Size" filter filterPlaceholder="Filter by size"></Column>
    <Column field="type" header="Type" filter filterPlaceholder="Filter by type"></Column>
</TreeTable>
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { NodeService } from '../service/NodeService';

const StrictFilterDoc = () => {
    const [nodes, setNodes] = useState([]);
    const [globalFilter, setGlobalFilter] = useState(null);
    const nodeservice = new NodeService();

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const getHeader = () => {
        return (
            <div className="text-right">
                <div className="p-input-icon-left">
                    <i className="pi pi-search"></i>
                    <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Global Search" size="50" />
                </div>
            </div>
        );
    };

    let header = getHeader();

    return (
        <div className="card">
            <TreeTable value={nodes} globalFilter={globalFilter} header={header} filterMode="strict">
                <Column field="name" header="Name" expander filter filterPlaceholder="Filter by name"></Column>
                <Column field="size" header="Size" filter filterPlaceholder="Filter by size"></Column>
                <Column field="type" header="Type" filter filterPlaceholder="Filter by type"></Column>
            </TreeTable>
        </div>
    )
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { NodeService } from '../service/NodeService';

const StrictFilterDoc = () => {
    const [nodes, setNodes] = useState([]);
    const [globalFilter, setGlobalFilter] = useState(null);
    const nodeservice = new NodeService();

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const getHeader = () => {
        return (
            <div className="text-right">
                <div className="p-input-icon-left">
                    <i className="pi pi-search"></i>
                    <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Global Search" size="50" />
                </div>
            </div>
        );
    };

    let header = getHeader();

    return (
        <div className="card">
            <TreeTable value={nodes} globalFilter={globalFilter} header={header} filterMode="strict">
                <Column field="name" header="Name" expander filter filterPlaceholder="Filter by name"></Column>
                <Column field="size" header="Size" filter filterPlaceholder="Filter by size"></Column>
                <Column field="type" header="Type" filter filterPlaceholder="Filter by type"></Column>
            </TreeTable>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Strict</p>
            </DocSectionText>
            <div className="card">
                <TreeTable value={nodes} globalFilter={globalFilter} header={header} filterMode="strict">
                    <Column field="name" header="Name" expander filter filterPlaceholder="Filter by name"></Column>
                    <Column field="size" header="Size" filter filterPlaceholder="Filter by size"></Column>
                    <Column field="type" header="Type" filter filterPlaceholder="Filter by type"></Column>
                </TreeTable>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
