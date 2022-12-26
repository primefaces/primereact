import React, { useEffect, useState } from 'react';
import { ProductService } from '../../../service/ProductService';
import { Column } from '../../lib/column/Column';
import { DataTable } from '../../lib/datatable/DataTable';
import { MultiSelect } from '../../lib/multiselect/MultiSelect';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ColToggleDoc(props) {
    const columns = [
        { field: 'name', header: 'Name' },
        { field: 'category', header: 'Category' },
        { field: 'quantity', header: 'Quantity' }
    ];

    const [selectedColumns, setSelectedColumns] = useState(columns);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onColumnToggle = (event) => {
        let selectedColumns = event.value;
        let orderedSelectedColumns = columns.filter((col) => selectedColumns.some((sCol) => sCol.field === col.field));

        setSelectedColumns(orderedSelectedColumns);
    };

    const header = (
        <div style={{ textAlign: 'left' }}>
            <MultiSelect value={selectedColumns} options={columns} optionLabel="header" onChange={onColumnToggle} style={{ width: '20em' }} />
        </div>
    );

    const columnComponents = selectedColumns.map((col) => {
        return <Column key={col.field} field={col.field} header={col.header} />;
    });

    const code = {
        basic: `
<DataTable value={products} reorderableColumns reorderableRows onRowReorder={onRowReorder} onColReorder={onColReorder} responsiveLayout="scroll">
    <Column rowReorder style={{width: '3em'}} />
    {dynamicColumns}
</DataTable>
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../service/ProductService';
import { MultiSelect } from 'primereact/multiselect';

const ColToggleDoc = () => {
    const columns = [
        {field: 'name', header: 'Name'},
        {field: 'category', header: 'Category'},
        {field: 'quantity', header: 'Quantity'}
    ];

    const [selectedColumns, setSelectedColumns] = useState(columns);
    const [products, setProducts] = useState([]);
    

    useEffect(() => {
        ProductService.getProductsMini().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onColumnToggle = (event) => {
        let selectedColumns = event.value;
        let orderedSelectedColumns = columns.filter(col => selectedColumns.some(sCol => sCol.field === col.field));
        setSelectedColumns(orderedSelectedColumns);
    }

    const header = (
        <div style={{ textAlign:'left' }}>
            <MultiSelect value={selectedColumns} options={columns} optionLabel="header" onChange={onColumnToggle} style={{width:'20em'}}/>
        </div>
    );

    const columnComponents = selectedColumns.map(col=> {
        return <Column key={col.field} field={col.field} header={col.header} />;
    });

    return (
        <div>
            <div className="card">
                <DataTable value={products} header={header} responsiveLayout="scroll">
                    <Column field="code" header="Code" />
                    {columnComponents}
                </DataTable>
            </div>
        </div>
    );
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../service/ProductService';
import { MultiSelect } from 'primereact/multiselect';

const ColToggleDoc = () => {
    const columns = [
        {field: 'name', header: 'Name'},
        {field: 'category', header: 'Category'},
        {field: 'quantity', header: 'Quantity'}
    ];

    const [selectedColumns, setSelectedColumns] = useState(columns);
    const [products, setProducts] = useState([]);
    

    useEffect(() => {
        ProductService.getProductsMini().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onColumnToggle = (event) => {
        let selectedColumns = event.value;
        let orderedSelectedColumns = columns.filter(col => selectedColumns.some(sCol => sCol.field === col.field));
        setSelectedColumns(orderedSelectedColumns);
    }

    const header = (
        <div style={{ textAlign:'left' }}>
            <MultiSelect value={selectedColumns} options={columns} optionLabel="header" onChange={onColumnToggle} style={{width:'20em'}}/>
        </div>
    );

    const columnComponents = selectedColumns.map(col=> {
        return <Column key={col.field} field={col.field} header={col.header} />;
    });

    return (
        <div>
            <div className="card">
                <DataTable value={products} header={header} responsiveLayout="scroll">
                    <Column field="code" header="Code" />
                    {columnComponents}
                </DataTable>
            </div>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>MultiSelect component can be used to implement column toggler functionality.</p>
            </DocSectionText>
            <div className="card">
                <DataTable value={products} header={header} responsiveLayout="scroll">
                    <Column field="code" header="Code" />
                    {columnComponents}
                </DataTable>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
