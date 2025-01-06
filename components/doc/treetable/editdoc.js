import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Column } from '@/components/lib/column/Column';
import { InputText } from '@/components/lib/inputtext/InputText';
import { TreeTable } from '@/components/lib/treetable/TreeTable';
import { useEffect, useState } from 'react';
import { NodeService } from '../../../service/NodeService';

export function EditDoc(props) {
    const [nodes, setNodes] = useState([]);

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onEditorValueChange = (options, value) => {
        let newNodes = JSON.parse(JSON.stringify(nodes));
        let editedNode = findNodeByKey(newNodes, options.node.key);

        editedNode.data[options.field] = value;

        setNodes(newNodes);
    };

    const findNodeByKey = (nodes, key) => {
        let path = key.split('-');
        let node;

        while (path.length) {
            let list = node ? node.children : nodes;

            node = list[parseInt(path[0], 10)];
            path.shift();
        }

        return node;
    };

    const inputTextEditor = (options) => {
        return <InputText type="text" value={options.rowData[options.field]} onChange={(e) => onEditorValueChange(options, e.target.value)} onKeyDown={(e) => e.stopPropagation()} />;
    };

    const sizeEditor = (options) => {
        return inputTextEditor(options);
    };

    const typeEditor = (options) => {
        return inputTextEditor(options);
    };

    const requiredValidator = (e) => {
        let props = e.columnProps;
        let value = props.node.data[props.field];

        return value && value.length > 0;
    };

    const code = {
        basic: `
<TreeTable value={nodes} tableStyle={{ minWidth: '50rem' }}>
    <Column field="name" header="Name" expander style={{ height: '3.5rem' }}></Column>
    <Column field="size" header="Size" editor={sizeEditor} cellEditValidator={requiredValidator} style={{ height: '3.5rem' }}></Column>
    <Column field="type" header="Type" editor={typeEditor} style={{ height: '3.5rem' }}></Column>
</TreeTable>
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { NodeService } from './service/NodeService';

export default function EditDemo() {
    const [nodes, setNodes] = useState([]);

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []);

    const onEditorValueChange = (options, value) => {
        let newNodes = JSON.parse(JSON.stringify(nodes));
        let editedNode = findNodeByKey(newNodes, options.node.key);

        editedNode.data[options.field] = value;

        setNodes(newNodes);
    };

    const findNodeByKey = (nodes, key) => {
        let path = key.split('-');
        let node;

        while (path.length) {
            let list = node ? node.children : nodes;

            node = list[parseInt(path[0], 10)];
            path.shift();
        }

        return node;
    };

    const inputTextEditor = (options) => {
        return <InputText type="text" value={options.rowData[options.field]} onChange={(e) => onEditorValueChange(options, e.target.value)} onKeyDown={(e) => e.stopPropagation()} />;
    };

    const sizeEditor = (options) => {
        return inputTextEditor(options);
    };

    const typeEditor = (options) => {
        return inputTextEditor(options);
    };

    const requiredValidator = (e) => {
        let props = e.columnProps;
        let value = props.node.data[props.field];

        return value && value.length > 0;
    };

    return (
        <div className="card">
            <TreeTable value={nodes} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" expander style={{ height: '3.5rem' }}></Column>
                <Column field="size" header="Size" editor={sizeEditor} cellEditValidator={requiredValidator} style={{ height: '3.5rem' }}></Column>
                <Column field="type" header="Type" editor={typeEditor} style={{ height: '3.5rem' }}></Column>
            </TreeTable>
        </div>
    );
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column, ColumnEditorOptions, ColumnEvent } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { TreeNode } from 'primereact/treenode';
import { NodeService } from './service/NodeService';

export default function EditDemo() {
    const [nodes, setNodes] = useState<TreeNode[]>([]);

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []);

    const onEditorValueChange = (options: ColumnEditorOptions, value: string) => {
        let newNodes = JSON.parse(JSON.stringify(nodes));
        let editedNode = findNodeByKey(newNodes, options.node.key);

        editedNode.data[options.field] = value;

        setNodes(newNodes);
    };

    const findNodeByKey = (nodes: TreeNode[], key: string) => {
        let path = key.split('-');
        let node;

        while (path.length) {
            let list = node ? node.children : nodes;

            node = list[parseInt(path[0], 10)];
            path.shift();
        }

        return node;
    };

    const inputTextEditor = (options: ColumnEditorOptions) => {
        return <InputText type="text" value={options.rowData[options.field]} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onEditorValueChange(options, e.target.value)} onKeyDown={(e) => e.stopPropagation()} />;
    };

    const sizeEditor = (options: ColumnEditorOptions) => {
        return inputTextEditor(options);
    };

    const typeEditor = (options: ColumnEditorOptions) => {
        return inputTextEditor(options);
    };

    const requiredValidator = (e: ColumnEvent) => {
        let props = e.columnProps;
        let value = props.node.data[props.field];

        return value && value.length > 0;
    };

    return (
        <div className="card">
            <TreeTable value={nodes} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" expander style={{ height: '3.5rem' }}></Column>
                <Column field="size" header="Size" editor={sizeEditor} cellEditValidator={requiredValidator} style={{ height: '3.5rem' }}></Column>
                <Column field="type" header="Type" editor={typeEditor} style={{ height: '3.5rem' }}></Column>
            </TreeTable>
        </div>
    );
}
        `,
        data: `
{
    key: '0',
    data: {
        name: 'Applications',
        size: '100kb',
        type: 'Folder'
    },
    children: [
        {
            key: '0-0',
            data: {
                name: 'React',
                size: '25kb',
                type: 'Folder'
            },
            children: [
                {
                    key: '0-0-0',
                    data: {
                        name: 'react.app',
                        size: '10kb',
                        type: 'Application'
                    }
                },
                {
                    key: '0-0-1',
                    data: {
                        name: 'native.app',
                        size: '10kb',
                        type: 'Application'
                    }
                },
                {
                    key: '0-0-2',
                    data: {
                        name: 'mobile.app',
                        size: '5kb',
                        type: 'Application'
                    }
                }
            ]
        },
        {
            key: '0-1',
            data: {
                name: 'editor.app',
                size: '25kb',
                type: 'Application'
            }
        },
        {
            key: '0-2',
            data: {
                name: 'settings.app',
                size: '50kb',
                type: 'Application'
            }
        }
    ]
},
...
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Incell editing is enabled by defining input elements with <i>editor</i> property of a Column.
                </p>
            </DocSectionText>
            <div className="card">
                <TreeTable value={nodes} tableStyle={{ minWidth: '50rem' }}>
                    <Column field="name" header="Name" expander style={{ height: '3.5rem' }} />
                    <Column field="size" header="Size" editor={sizeEditor} cellEditValidator={requiredValidator} style={{ height: '3.5rem' }} />
                    <Column field="type" header="Type" editor={typeEditor} style={{ height: '3.5rem' }} />
                </TreeTable>
            </div>
            <DocSectionCode code={code} service={['NodeService']} />
        </>
    );
}
