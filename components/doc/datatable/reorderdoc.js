import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from '../../lib/datatable/DataTable';
import { Column } from '../../lib/column/Column';
import { Toast } from '../../lib/toast/Toast';
import { ProductService } from '../../../service/ProductService';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ReorderDoc(props) {
    const [products, setProducts] = useState([]);
    const toast = useRef(null);
    const columns = [
        { field: 'code', header: 'Code' },
        { field: 'name', header: 'Name' },
        { field: 'category', header: 'Category' },
        { field: 'quantity', header: 'Quantity' }
    ];

    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onColReorder = () => {
        toast.current.show({ severity: 'success', summary: 'Column Reordered', life: 3000 });
    };

    const onRowReorder = (e) => {
        setProducts(e.value);
        toast.current.show({ severity: 'success', summary: 'Rows Reordered', life: 3000 });
    };

    const dynamicColumns = columns.map((col, i) => {
        return <Column key={col.field} columnKey={col.field} field={col.field} header={col.header} />;
    });

    const code = {
        basic: `
<DataTable value={products} reorderableColumns reorderableRows onRowReorder={onRowReorder} onColReorder={onColReorder} responsiveLayout="scroll">
    <Column rowReorder style={{width: '3em'}} />
    {dynamicColumns}
</DataTable>
        `,
        javascript: `
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../service/ProductService';
import { Toast } from 'primereact/toast';

const ReorderDoc = () => {
    const [products, setProducts] = useState([]);
    const toast = useRef(null);
    const columns = [
        {field: 'code', header: 'Code'},
        {field: 'name', header: 'Name'},
        {field: 'category', header: 'Category'},
        {field: 'quantity', header: 'Quantity'}
    ];

    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onColReorder = () => {
        toast.current.show({severity:'success', summary: 'Column Reordered', life: 3000});
    }

    const onRowReorder = (e) => {
        setProducts(e.value);
        toast.current.show({severity:'success', summary: 'Rows Reordered', life: 3000});
    }

    const dynamicColumns = columns.map((col,i) => {
        return <Column key={col.field} columnKey={col.field} field={col.field} header={col.header} />;
    });

    return (
        <div>
            <Toast ref={toast}></Toast>

            <div className="card">
                <DataTable value={products} reorderableColumns reorderableRows onRowReorder={onRowReorder} onColReorder={onColReorder} responsiveLayout="scroll">
                    <Column rowReorder style={{width: '3em'}} />
                    {dynamicColumns}
                </DataTable>
            </div>
        </div>
    );
}
        `,
        typescript: `
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../service/ProductService';
import { Toast } from 'primereact/toast';

const ReorderDoc = () => {
    const [products, setProducts] = useState([]);
    const toast = useRef(null);
    const columns = [
        {field: 'code', header: 'Code'},
        {field: 'name', header: 'Name'},
        {field: 'category', header: 'Category'},
        {field: 'quantity', header: 'Quantity'}
    ];

    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onColReorder = () => {
        toast.current.show({severity:'success', summary: 'Column Reordered', life: 3000});
    }

    const onRowReorder = (e) => {
        setProducts(e.value);
        toast.current.show({severity:'success', summary: 'Rows Reordered', life: 3000});
    }

    const dynamicColumns = columns.map((col,i) => {
        return <Column key={col.field} columnKey={col.field} field={col.field} header={col.header} />;
    });

    return (
        <div>
            <Toast ref={toast}></Toast>

            <div className="card">
                <DataTable value={products} reorderableColumns reorderableRows onRowReorder={onRowReorder} onColReorder={onColReorder} responsiveLayout="scroll">
                    <Column rowReorder style={{width: '3em'}} />
                    {dynamicColumns}
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
                <p>Order of the columns and rows can be changed using drag and drop.</p>
            </DocSectionText>
            <div className="card">
                <Toast ref={toast}></Toast>
                <DataTable value={products} reorderableColumns reorderableRows onRowReorder={onRowReorder} onColReorder={onColReorder} responsiveLayout="scroll">
                    <Column rowReorder style={{ width: '3em' }} />
                    {dynamicColumns}
                </DataTable>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
