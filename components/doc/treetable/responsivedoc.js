import React, { useState, useEffect } from 'react';
import { TreeTable } from '../../lib/treetable/TreeTable';
import { Column } from '../../lib/column/Column';
import { NodeService } from '../../../service/NodeService';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ResponsiveDoc(props) {
    const [nodes, setNodes] = useState([]);

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const nameTemplate = (node) => {
        return (
            <React.Fragment>
                <span>{node.data.name}</span>
                <span className="sm-visible"> {node.data.size}</span>
                <span className="sm-visible"> {node.data.type}</span>
            </React.Fragment>
        );
    };

    const code = {
        basic: `
<TreeTable value={nodes} header="Responsive">
    <Column field="name" header="Name" body={nameTemplate} expander></Column>
    <Column field="size" header="Size" headerClassName="sm-invisible" bodyClassName="sm-invisible"></Column>
    <Column field="type" header="Type" headerClassName="sm-invisible" bodyClassName="sm-invisible"></Column>
</TreeTable>
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { NodeService } from '../service/NodeService';
import './TreeTableDemo.css';

const ResponsiveDoc = () => {
    const [nodes, setNodes] = useState([]);
    

    useEffect(() => {
        NodeService.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const nameTemplate = (node) => {
        return (
            <React.Fragment>
                <span>{node.data.name}</span>
                <span className="sm-visible"> {node.data.size}</span>
                <span className="sm-visible"> {node.data.type}</span>
            </React.Fragment>
        )
    }

    return (
        <div className="treetable-responsive-demo">
            <div className="card">
                <TreeTable value={nodes} header="Responsive">
                    <Column field="name" header="Name" body={nameTemplate} expander></Column>
                    <Column field="size" header="Size" headerClassName="sm-invisible" bodyClassName="sm-invisible"></Column>
                    <Column field="type" header="Type" headerClassName="sm-invisible" bodyClassName="sm-invisible"></Column>
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
import { NodeService } from '../service/NodeService';
import './TreeTableDemo.css';

const ResponsiveDoc = () => {
    const [nodes, setNodes] = useState([]);
    

    useEffect(() => {
        NodeService.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const nameTemplate = (node) => {
        return (
            <React.Fragment>
                <span>{node.data.name}</span>
                <span className="sm-visible"> {node.data.size}</span>
                <span className="sm-visible"> {node.data.type}</span>
            </React.Fragment>
        )
    }

    return (
        <div className="treetable-responsive-demo">
            <div className="card">
                <TreeTable value={nodes} header="Responsive">
                    <Column field="name" header="Name" body={nameTemplate} expander></Column>
                    <Column field="size" header="Size" headerClassName="sm-invisible" bodyClassName="sm-invisible"></Column>
                    <Column field="type" header="Type" headerClassName="sm-invisible" bodyClassName="sm-invisible"></Column>
                </TreeTable>
            </div>
        </div>
    );
}
        `,
        css: `
/* TreeTableDemo.css */

.treetable-responsive-demo .sm-visible {
    display: none;
}

@media screen and (max-width: 40em) {
    .treetable-responsive-demo .sm-invisible {
        display: none;
    }

    .treetable-responsive-demo .sm-visible {
        display: inline;
        margin-right: .5rem;
    }
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>TreeTable columns are displayed as stacked in responsive mode if the screen size becomes smaller than a certain breakpoint value.</p>
            </DocSectionText>
            <div className="card treetable-responsive-demo">
                <TreeTable value={nodes} header="Responsive">
                    <Column field="name" header="Name" body={nameTemplate} expander></Column>
                    <Column field="size" header="Size" headerClassName="sm-invisible" bodyClassName="sm-invisible"></Column>
                    <Column field="type" header="Type" headerClassName="sm-invisible" bodyClassName="sm-invisible"></Column>
                </TreeTable>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
