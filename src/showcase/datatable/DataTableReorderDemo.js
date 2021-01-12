import React, { Component } from 'react';
import { DataTable } from '../../components/datatable/DataTable';
import { Column } from '../../components/column/Column';
import ProductService from '../service/ProductService';
import { Toast } from '../../components/toast/Toast';
import { TabView } from '../../components/tabview/TabView';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';
import { AppInlineHeader } from '../../AppInlineHeader';

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
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="dataTable">
                        <h1>DataTable <span>Reorder</span></h1>
                        <p>Order of the columns and rows can be changed using drag and drop.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <Toast ref={(el) => { this.toast = el; }}></Toast>

                    <div className="card">
                        <DataTable value={this.state.products} reorderableColumns onRowReorder={this.onRowReorder} onColReorder={this.onColReorder}>
                            <Column rowReorder style={{width: '3em'}} />
                            {dynamicColumns}
                        </DataTable>
                    </div>
                </div>

                <DataTableColReorderDemoDoc />
            </div>
        );
    }
}

export class DataTableColReorderDemoDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import ProductService from '../service/ProductService';
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
                    <DataTable value={this.state.products} reorderableColumns onRowReorder={this.onRowReorder} onColReorder={this.onColReorder}>
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
import ProductService from '../service/ProductService';
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
                <DataTable value={products} reorderableColumns onRowReorder={onRowReorder} onColReorder={onColReorder}>
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
import ProductService from '../service/ProductService';
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
                <DataTable value={products} reorderableColumns onRowReorder={onRowReorder} onColReorder={onColReorder}>
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
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    {
                        useLiveEditorTabs({ name: 'DataTableReorderDemo', sources: this.sources, service: 'ProductService', data: 'products-small' })
                    }
                </TabView>
            </div>
        )
    }
}
