import React, { useState, useEffect } from 'react';
import { TreeTable } from '../../lib/treetable/TreeTable';
import { InputText } from '../../lib/inputtext/InputText';
import { Column } from '../../lib/column/Column';
import { NodeService } from '../../../service/NodeService';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function EditDoc(props) {
    const [nodes, setNodes] = useState([]);
    const nodeservice = new NodeService();

    useEffect(() => {
        nodeservice.getTreeTableNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onEditorValueChange = (options, value) => {
        let newNodes = JSON.parse(JSON.stringify(nodes));
        let editedNode = findNodeByKey(newNodes, options.node.key);

        editedNode.data[options.field] = value;

        setNodes(newNodes);
    };

    const extFiles = [
        {
            fileName: 'TreeTableDemo.css',
            lang: 'css',
            content: `
/* TreeTableDemo.css */

.treetable-editing-demo .p-treetable .p-treetable-tbody > tr > td.p-cell-editing {
    padding-top: 0;
    padding-bottom: 0;
}
            `
        }
    ];

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
        return <InputText type="text" value={options.rowData[options.field]} onChange={(e) => onEditorValueChange(options, e.target.value)} />;
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
<TreeTable value={nodes}>
    <Column field="name" header="Name" expander style={{ height: '3.5em' }}></Column>
    <Column field="size" header="Size" editor={sizeEditor} cellEditValidator={requiredValidator} style={{ height: '3.5em' }}></Column>
    <Column field="type" header="Type" editor={typeEditor} style={{ height: '3.5em' }}></Column>
</TreeTable>
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { NodeService } from '../service/NodeService';
import './TreeTableDemo.css';

const EditDoc = () => {
    const [nodes, setNodes] = useState([]);
    const nodeservice = new NodeService();

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onEditorValueChange = (options, value) => {
        let newNodes = JSON.parse(JSON.stringify(nodes));
        let editedNode = findNodeByKey(newNodes, options.node.key);
        editedNode.data[options.field] = value;

        setNodes(newNodes);
    }

    const findNodeByKey = (nodes, key) => {
        let path = key.split('-');
        let node;

        while (path.length) {
            let list = node ? node.children : nodes;
            node = list[parseInt(path[0], 10)];
            path.shift();
        }

        return node;
    }

    const inputTextEditor = (options) => {
        return (
            <InputText type="text" value={options.rowData[options.field]}
                onChange={(e) => onEditorValueChange(options, e.target.value)} />
        );
    }

    const sizeEditor = (options) => {
        return inputTextEditor(options);
    }

    const typeEditor = (options) => {
        return inputTextEditor(options);
    }

    const requiredValidator = (e) => {
        let props = e.columnProps;
        let value = props.node.data[props.field];

        return value && value.length > 0;
    }

    return (
        <div>
            <div className="card treetable-editing-demo">
                <TreeTable value={nodes}>
                    <Column field="name" header="Name" expander style={{ height: '3.5em' }}></Column>
                    <Column field="size" header="Size" editor={sizeEditor} cellEditValidator={requiredValidator} style={{ height: '3.5em' }}></Column>
                    <Column field="type" header="Type" editor={typeEditor} style={{ height: '3.5em' }}></Column>
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
import { InputText } from 'primereact/inputtext';
import { NodeService } from '../service/NodeService';
import './TreeTableDemo.css';

const EditDoc = () => {
    const [nodes, setNodes] = useState([]);
    const nodeservice = new NodeService();

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onEditorValueChange = (options, value) => {
        let newNodes = JSON.parse(JSON.stringify(nodes));
        let editedNode = findNodeByKey(newNodes, options.node.key);
        editedNode.data[options.field] = value;

        setNodes(newNodes);
    }

    const findNodeByKey = (nodes, key) => {
        let path = key.split('-');
        let node;

        while (path.length) {
            let list = node ? node.children : nodes;
            node = list[parseInt(path[0], 10)];
            path.shift();
        }

        return node;
    }

    const inputTextEditor = (options) => {
        return (
            <InputText type="text" value={options.rowData[options.field]}
                onChange={(e) => onEditorValueChange(options, e.target.value)} />
        );
    }

    const sizeEditor = (options) => {
        return inputTextEditor(options);
    }

    const typeEditor = (options) => {
        return inputTextEditor(options);
    }

    const requiredValidator = (e) => {
        let props = e.columnProps;
        let value = props.node.data[props.field];

        return value && value.length > 0;
    }

    return (
        <div>
            <div className="card treetable-editing-demo">
                <TreeTable value={nodes}>
                    <Column field="name" header="Name" expander style={{ height: '3.5em' }}></Column>
                    <Column field="size" header="Size" editor={sizeEditor} cellEditValidator={requiredValidator} style={{ height: '3.5em' }}></Column>
                    <Column field="type" header="Type" editor={typeEditor} style={{ height: '3.5em' }}></Column>
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
                <p>Incell editing provides a quick and user friendly way to manipulate data.</p>
            </DocSectionText>
            <div className="card treetable-editing-demo">
                <TreeTable value={nodes}>
                    <Column field="name" header="Name" expander style={{ height: '3.5em' }}></Column>
                    <Column field="size" header="Size" editor={sizeEditor} cellEditValidator={requiredValidator} style={{ height: '3.5em' }}></Column>
                    <Column field="type" header="Type" editor={typeEditor} style={{ height: '3.5em' }}></Column>
                </TreeTable>
            </div>
            <DocSectionCode code={code} extFiles={extFiles} />
        </>
    );
}
