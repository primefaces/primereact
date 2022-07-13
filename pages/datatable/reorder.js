import React, { useState, useEffect, useRef, memo } from 'react';
import { DataTable } from '../../components/lib/datatable/DataTable';
import { Column } from '../../components/lib/column/Column';
import { TabView } from '../../components/lib/tabview/TabView';
import { useLiveEditorTabs } from '../../components/doc/common/liveeditor';
import { ProductService } from '../../service/ProductService';
import { Toast } from '../../components/lib/toast/Toast';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

const DataTableReorderDemo = () => {
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
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onColReorder = () => {
        toast.current.show({ severity: 'success', summary: 'Column Reordered', life: 3000 });
    }

    const onRowReorder = (e) => {
        setProducts(e.value);
        toast.current.show({ severity: 'success', summary: 'Rows Reordered', life: 3000 });
    }

    const dynamicColumns = columns.map((col, i) => {
        return <Column key={col.field} columnKey={col.field} field={col.field} header={col.header} />;
    });

    return (
        <div>
            <Head>
                <title>React Table Component - Reorder</title>
                <meta name="description" content="Order of the columns and rows can be changed using drag and drop." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>DataTable <span>Reorder</span></h1>
                    <p>Order of the columns and rows can be changed using drag and drop.</p>
                </div>

                <DocActions github="datatable/reorder.js" />
            </div>

            <div className="content-section implementation">
                <Toast ref={toast}></Toast>

                <div className="card">
                    <DataTable value={products} reorderableColumns onRowReorder={onRowReorder} onColReorder={onColReorder} responsiveLayout="scroll">
                        <Column rowReorder style={{ width: '3em' }} />
                        {dynamicColumns}
                    </DataTable>
                </div>
            </div>

            <DataTableColReorderDemoDoc />
        </div>
    );
}

export default DataTableReorderDemo;

export const DataTableColReorderDemoDoc = memo(() => {

    const sources = {
        'class': {
            tabName: 'Class Source',
            content: `
import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../service/ProductService';
import { Toast } from 'primereact/toast';

export class DataTableReorderDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: []
        };

        this.columns = [
            {field: 'code', header: 'Code'},
            {field: 'name', header: 'Name'},
            {field: 'category', header: 'Category'},
            {field: 'quantity', header: 'Quantity'}
        ];

        this.productService = new ProductService();
        this.onColReorder = this.onColReorder.bind(this);
        this.onRowReorder = this.onRowReorder.bind(this);
    }

    componentDidMount() {
        this.productService.getProductsSmall().then(data => this.setState({ products: data }));
    }

    onColReorder() {
        this.toast.show({severity:'success', summary: 'Column Reordered', life: 3000});
    }

    onRowReorder(e) {
        this.setState({ products: e.value }, () => {
            this.toast.show({severity:'success', summary: 'Rows Reordered', life: 3000});
        });
    }

    render() {
        const dynamicColumns = this.columns.map((col,i) => {
            return <Column key={col.field} columnKey={col.field} field={col.field} header={col.header} />;
        });

        return (
            <div>
                <Toast ref={(el) => { this.toast = el; }}></Toast>

                <div className="card">
                    <DataTable value={this.state.products} reorderableColumns onRowReorder={this.onRowReorder} onColReorder={this.onColReorder} responsiveLayout="scroll">
                        <Column rowReorder style={{width: '3em'}} />
                        {dynamicColumns}
                    </DataTable>
                </div>
            </div>
        );
    }
}
            `
        },
        'hooks': {
            tabName: 'Hooks Source',
            content: `
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../service/ProductService';
import { Toast } from 'primereact/toast';

const DataTableReorderDemo = () => {
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
                <DataTable value={products} reorderableColumns onRowReorder={onRowReorder} onColReorder={onColReorder} responsiveLayout="scroll">
                    <Column rowReorder style={{width: '3em'}} />
                    {dynamicColumns}
                </DataTable>
            </div>
        </div>
    );
}
                `
        },
        'ts': {
            tabName: 'TS Source',
            content: `
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../service/ProductService';
import { Toast } from 'primereact/toast';

const DataTableReorderDemo = () => {
    const [products, setProducts] = useState([]);
    const toast = useRef(null);
    const isMounted = useRef(false);
    const columns = [
        {field: 'code', header: 'Code'},
        {field: 'name', header: 'Name'},
        {field: 'category', header: 'Category'},
        {field: 'quantity', header: 'Quantity'}
    ];

    const productService = new ProductService();

    useEffect(() => {
        if (isMounted.current) {
            toast.current.show({severity:'success', summary: 'Rows Reordered', life: 3000});
        }
    }, [products]);

    useEffect(() => {
        isMounted.current = true;
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onColReorder = () => {
        toast.current.show({severity:'success', summary: 'Column Reordered', life: 3000});
    }

    const onRowReorder = (e) => {
        setProducts(e.value);
    }

    const dynamicColumns = columns.map((col,i) => {
        return <Column key={col.field} columnKey={col.field} field={col.field} header={col.header} />;
    });

    return (
        <div>
            <Toast ref={toast}></Toast>

            <div className="card">
                <DataTable value={products} reorderableColumns onRowReorder={onRowReorder} onColReorder={onColReorder} responsiveLayout="scroll">
                    <Column rowReorder style={{width: '3em'}} />
                    {dynamicColumns}
                </DataTable>
            </div>
        </div>
    );
}
                `
        },
        'browser': {
            tabName: 'Browser Source',
            imports: `
        <script src="./ProductService.js"></script>

        <script src="https://unpkg.com/primereact/api/api.min.js"></script>
        <script src="https://unpkg.com/primereact/core/core.min.js"></script>
        <script src="https://unpkg.com/primereact/virtualscroller/virtualscroller.min.js"></script>
        <script src="https://unpkg.com/primereact/column/column.min.js"></script>
        <script src="https://unpkg.com/primereact/datatable/datatable.min.js"></script>
        <script src="https://unpkg.com/primereact/toast/toast.min.js"></script>`,
            content: `
const { useEffect, useState, useRef } = React;
const { Column } = primereact.column;
const { DataTable } = primereact.datatable;
const { Toast } = primereact.toast;

const DataTableReorderDemo = () => {
    const [products, setProducts] = useState([]);
    const toast = useRef(null);
    const isMounted = useRef(false);
    const columns = [
        {field: 'code', header: 'Code'},
        {field: 'name', header: 'Name'},
        {field: 'category', header: 'Category'},
        {field: 'quantity', header: 'Quantity'}
    ];

    const productService = new ProductService();

    useEffect(() => {
        if (isMounted.current) {
            toast.current.show({severity:'success', summary: 'Rows Reordered', life: 3000});
        }
    }, [products]);

    useEffect(() => {
        isMounted.current = true;
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onColReorder = () => {
        toast.current.show({severity:'success', summary: 'Column Reordered', life: 3000});
    }

    const onRowReorder = (e) => {
        setProducts(e.value);
    }

    const dynamicColumns = columns.map((col,i) => {
        return <Column key={col.field} columnKey={col.field} field={col.field} header={col.header} />;
    });

    return (
        <div>
            <Toast ref={toast}></Toast>

            <div className="card">
                <DataTable value={products} reorderableColumns onRowReorder={onRowReorder} onColReorder={onColReorder} responsiveLayout="scroll">
                    <Column rowReorder style={{width: '3em'}} />
                    {dynamicColumns}
                </DataTable>
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
                    useLiveEditorTabs({ name: 'DataTableReorderDemo', sources: sources, service: 'ProductService', data: 'products-small' })
                }
            </TabView>
        </div>
    )
})
