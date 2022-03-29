import React, { useState, useEffect, memo } from 'react';
import { TreeTable } from '../../components/lib/treetable/TreeTable';
import { Column } from '../../components/lib/column/Column';
import { NodeService } from '../../service/NodeService';
import { MultiSelect } from '../../components/lib/multiselect/MultiSelect';
import { TabView } from '../../components/lib/tabview/TabView';
import { useLiveEditorTabs } from '../../components/doc/common/liveeditor';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

const TreeTableColTogglerDemo = () => {
    let columns = [
        { field: 'size', header: 'Size' },
        { field: 'type', header: 'Type' }
    ];

    let colOptions = [];
    for (let col of columns) {
        colOptions.push({ label: col.header, value: col });
    }

    const [nodes, setNodes] = useState([]);
    const [cols, setCols] = useState(columns);

    const nodeservice = new NodeService();

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onColumnToggle = (event) => {
        setCols(event.value);
    }

    const header = (
        <div style={{ textAlign: 'left' }}>
            <MultiSelect value={cols} options={colOptions} onChange={onColumnToggle}
                style={{ width: '250px' }} />
        </div>
    );

    const _columns = cols.map((col, i) => {
        return <Column key={col.field} field={col.field} header={col.header} />;
    });


    return (
        <div>
            <Head>
                <title>React TreeTable Component - Column Toggler</title>
                <meta name="description" content="MultiSelect component can be used to implement column toggler functionality." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>TreeTable <span>Column Toggler</span></h1>
                    <p>MultiSelect component can be used to implement column toggler functionality.</p>
                </div>

                <DocActions github="treetable/toggle.js" />
            </div>

            <div className="content-section implementation">
                <div className="card">
                    <TreeTable value={nodes} header={header}>
                        <Column key="name" field="name" header="Name" expander />
                        {_columns}
                    </TreeTable>
                </div>
            </div>

            <TreeTableColTogglerDemoDoc />
        </div>
    )
}

export default TreeTableColTogglerDemo;

const TreeTableColTogglerDemoDoc = memo(() => {


    const sources = {
        'class': {
            tabName: 'Class Source',
            content: `
            import React, {Component} from 'react';
            import {TreeTable} from 'primereact/treetable';
            import {Column} from 'primereact/column';
            import {NodeService} from '../service/NodeService';
            import {MultiSelect} from 'primereact/multiselect';

            export class TreeTableColTogglerDemo extends Component {

                constructor(props) {
                super(props);
            let columns = [
            {field: 'size', header: 'Size' },
            {field: 'type', header: 'Type' }
            ];

            this.colOptions = [];
            for (let col of columns) {
                this.colOptions.push({ label: col.header, value: col });
        }

            this.state = {
                nodes: [],
            cols: columns
        };

            this.nodeservice = new NodeService();
            this.onColumnToggle = this.onColumnToggle.bind(this);
    }

            componentDidMount() {
                this.nodeservice.getTreeTableNodes().then(data => this.setState({ nodes: data }));
    }

            onColumnToggle(event) {
                this.setState({ cols: event.value });
    }

            render() {
        const header = (
            <div style={{ textAlign: 'left' }}>
                <MultiSelect value={this.state.cols} options={this.colOptions} onChange={this.onColumnToggle}
                    style={{ width: '250px' }} />
            </div>
            );

        const columns = this.state.cols.map((col, i) => {
            return <Column key={col.field} field={col.field} header={col.header} />;
        });

            return (
            <div>
                <div className="card">
                    <TreeTable value={this.state.nodes} header={header}>
                        <Column key="name" field="name" header="Name" expander />
                        {columns}
                    </TreeTable>
                </div>
            </div>
            )
    }
}
            `
        },
        'hooks': {
            tabName: 'Hooks Source',
            content: `
            import React, {useState, useEffect} from 'react';
            import {TreeTable} from 'primereact/treetable';
            import {Column} from 'primereact/column';
            import {NodeService} from '../service/NodeService';
            import {MultiSelect} from 'primereact/multiselect';

const TreeTableColTogglerDemo = () => {
                let columns = [
            {field: 'size', header: 'Size' },
            {field: 'type', header: 'Type' }
            ];

            let colOptions = [];
            for (let col of columns) {
                colOptions.push({ label: col.header, value: col });
    }

            const [nodes, setNodes] = useState([]);
            const [cols, setCols] = useState(columns);

            const nodeservice = new NodeService();

    useEffect(() => {
                nodeservice.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onColumnToggle = (event) => {
                setCols(event.value);
    }

            const header = (
            <div style={{ textAlign: 'left' }}>
                <MultiSelect value={cols} options={colOptions} onChange={onColumnToggle}
                    style={{ width: '250px' }} />
            </div>
            );

    const _columns = cols.map((col, i) => {
        return <Column key={col.field} field={col.field} header={col.header} />;
    });

            return (
            <div>
                <div className="card">
                    <TreeTable value={nodes} header={header}>
                        <Column key="name" field="name" header="Name" expander />
                        {_columns}
                    </TreeTable>
                </div>
            </div>
            );
}
            `
        },
        'ts': {
            tabName: 'TS Source',
            content: `
            import React, {useState, useEffect} from 'react';
            import {TreeTable} from 'primereact/treetable';
            import {Column} from 'primereact/column';
            import {NodeService} from '../service/NodeService';
            import {MultiSelect} from 'primereact/multiselect';

const TreeTableColTogglerDemo = () => {
                let columns = [
            {field: 'size', header: 'Size' },
            {field: 'type', header: 'Type' }
            ];

            let colOptions = [];
            for (let col of columns) {
                colOptions.push({ label: col.header, value: col });
    }

            const [nodes, setNodes] = useState([]);
            const [cols, setCols] = useState(columns);

            const nodeservice = new NodeService();

    useEffect(() => {
                nodeservice.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onColumnToggle = (event) => {
                setCols(event.value);
    }

            const header = (
            <div style={{ textAlign: 'left' }}>
                <MultiSelect value={cols} options={colOptions} onChange={onColumnToggle}
                    style={{ width: '250px' }} />
            </div>
            );

    const _columns = cols.map((col, i) => {
        return <Column key={col.field} field={col.field} header={col.header} />;
    });

            return (
            <div>
                <div className="card">
                    <TreeTable value={nodes} header={header}>
                        <Column key="name" field="name" header="Name" expander />
                        {_columns}
                    </TreeTable>
                </div>
            </div>
            );
}
            `
        },
        'browser': {
            tabName: 'Browser Source',
            imports: `
            <script src="./NodeService.js"></script>

            <script src="https://unpkg.com/primereact/api/api.min.js"></script>
            <script src="https://unpkg.com/primereact/core/core.min.js"></script>
            <script src="https://unpkg.com/primereact/column/column.min.js"></script>
            <script src="https://unpkg.com/primereact/treetable/treetable.min.js"></script>
            <script src="https://unpkg.com/primereact/multiselect/multiselect.min.js"></script>`,
            content: `
            const {useEffect, useState} = React;
            const {Column} = primereact.column;
            const {TreeTable} = primereact.treetable;
            const {MultiSelect} = primereact.multiselect;

const TreeTableColTogglerDemo = () => {
                let columns = [
            {field: 'size', header: 'Size' },
            {field: 'type', header: 'Type' }
            ];

            let colOptions = [];
            for (let col of columns) {
                colOptions.push({ label: col.header, value: col });
    }

            const [nodes, setNodes] = useState([]);
            const [cols, setCols] = useState(columns);

            const nodeservice = new NodeService();

    useEffect(() => {
                nodeservice.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onColumnToggle = (event) => {
                setCols(event.value);
    }

            const header = (
            <div style={{ textAlign: 'left' }}>
                <MultiSelect value={cols} options={colOptions} onChange={onColumnToggle}
                    style={{ width: '250px' }} />
            </div>
            );

    const _columns = cols.map((col, i) => {
        return <Column key={col.field} field={col.field} header={col.header} />;
    });

            return (
            <div>
                <div className="card">
                    <TreeTable value={nodes} header={header}>
                        <Column key="name" field="name" header="Name" expander />
                        {_columns}
                    </TreeTable>
                </div>
            </div>
            );
}
            `
        }
    }

    return (
        <div className="content-section documentation" id="app-doc">
            <TabView>
                {
                    useLiveEditorTabs({ name: 'TreeTableColTogglerDemo', sources: sources, service: 'NodeService', data: 'treetablenodes' })
                }
            </TabView>
        </div>
    )
})
