import React, { Component } from 'react';
import { DataTable } from '../../components/datatable/DataTable';
import { Column } from '../../components/column/Column';
import { Button } from '../../components/button/Button';
import { Tooltip } from '../../components/tooltip/Tooltip';
import ProductService from '../service/ProductService';
import { TabView } from '../../components/tabview/TabView';
import { useLiveEditorTabs } from '../liveeditor/LiveEditor';
import { AppInlineHeader } from '../../AppInlineHeader';

export class DataTableExportDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: [],
            selectedProducts: []
        };

        this.exportCSV = this.exportCSV.bind(this);
        this.exportPdf = this.exportPdf.bind(this);
        this.exportExcel = this.exportExcel.bind(this);

        this.productService = new ProductService();

        this.cols = [
            { field: 'code', header: 'Code' },
            { field: 'name', header: 'Name' },
            { field: 'category', header: 'Category' },
            { field: 'quantity', header: 'Quantity' }
        ];

        this.exportColumns = this.cols.map(col => ({ title: col.header, dataKey: col.field }));
    }

    componentDidMount() {
        this.productService.getProductsSmall().then(data => this.setState({ products: data }));
    }

    exportCSV(selectionOnly) {
        this.dt.exportCSV({ selectionOnly });
    }

    exportPdf() {
        import('jspdf').then(jsPDF => {
            import('jspdf-autotable').then(() => {
                const doc = new jsPDF.default(0, 0);
                doc.autoTable(this.exportColumns, this.state.products);
                doc.save('products.pdf');
            })
        })
    }

    exportExcel() {
        import('xlsx').then(xlsx => {
            const worksheet = xlsx.utils.json_to_sheet(this.state.products);
            const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
            const excelBuffer = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
            this.saveAsExcelFile(excelBuffer, 'products');
        });
    }

    saveAsExcelFile(buffer, fileName) {
        import('file-saver').then(FileSaver => {
            let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
            let EXCEL_EXTENSION = '.xlsx';
            const data = new Blob([buffer], {
                type: EXCEL_TYPE
            });
            FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
        });
    }

    render() {
        const header = (
            <div className="p-d-flex export-buttons">
                <Button type="button" icon="pi pi-file-o" onClick={() => this.exportCSV(false)} className="p-mr-2" data-pr-tooltip="CSV" />
                <Button type="button" icon="pi pi-file-excel" onClick={this.exportExcel} className="p-button-success p-mr-2" data-pr-tooltip="XLS" />
                <Button type="button" icon="pi pi-file-pdf" onClick={this.exportPdf} className="p-button-warning p-mr-2" data-pr-tooltip="PDF" />
                <Button type="button" icon="pi pi-filter" onClick={() => this.exportCSV(true)} className="p-button-info p-ml-auto" data-pr-tooltip="Selection Only" />
            </div>
        );

        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="dataTable">
                        <h1>DataTable <span>Export</span></h1>
                        <p>DataTable can export its data to CSV format.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <Tooltip target=".export-buttons>button" position="bottom" />

                        <DataTable ref={(el) => { this.dt = el; }} value={this.state.products} header={header} dataKey="id"
                            selectionMode="multiple" selection={this.state.selectedProducts} onSelectionChange={e => this.setState({ selectedProducts: e.value })}>
                            {
                                this.cols.map((col, index) => <Column key={index} field={col.field} header={col.header} />)
                            }
                        </DataTable>
                    </div>
                </div>

                <DataTableExportDemoDoc></DataTableExportDemoDoc>
            </div>
        );
    }
}

export class DataTableExportDemoDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
import ProductService from '../service/ProductService';

export class DataTableExportDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: [],
            selectedProducts: []
        };

        this.exportCSV = this.exportCSV.bind(this);
        this.exportPdf = this.exportPdf.bind(this);
        this.exportExcel = this.exportExcel.bind(this);

        this.productService = new ProductService();

        this.cols = [
            { field: 'code', header: 'Code' },
            { field: 'name', header: 'Name' },
            { field: 'category', header: 'Category' },
            { field: 'quantity', header: 'Quantity' }
        ];

        this.exportColumns = this.cols.map(col => ({ title: col.header, dataKey: col.field }));
    }

    componentDidMount() {
        this.productService.getProductsSmall().then(data => this.setState({ products: data }));
    }

    exportCSV(selectionOnly) {
        this.dt.exportCSV({ selectionOnly });
    }

    exportPdf() {
        import('jspdf').then(jsPDF => {
            import('jspdf-autotable').then(() => {
                const doc = new jsPDF.default(0, 0);
                doc.autoTable(this.exportColumns, this.state.products);
                doc.save('products.pdf');
            })
        })
    }

    exportExcel() {
        import('xlsx').then(xlsx => {
            const worksheet = xlsx.utils.json_to_sheet(this.state.products);
            const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
            const excelBuffer = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
            this.saveAsExcelFile(excelBuffer, 'products');
        });
    }

    saveAsExcelFile(buffer, fileName) {
        import('file-saver').then(FileSaver => {
            let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
            let EXCEL_EXTENSION = '.xlsx';
            const data = new Blob([buffer], {
                type: EXCEL_TYPE
            });
            FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
        });
    }

    render() {
        const header = (
            <div className="p-d-flex export-buttons">
                <Button type="button" icon="pi pi-file-o" onClick={() => this.exportCSV(false)} className="p-mr-2" data-pr-tooltip="CSV" />
                <Button type="button" icon="pi pi-file-excel" onClick={this.exportExcel} className="p-button-success p-mr-2" data-pr-tooltip="XLS" />
                <Button type="button" icon="pi pi-file-pdf" onClick={this.exportPdf} className="p-button-warning p-mr-2" data-pr-tooltip="PDF" />
                <Button type="button" icon="pi pi-filter" onClick={() => this.exportCSV(true)} className="p-button-info p-ml-auto" data-pr-tooltip="Selection Only" />
            </div>
        );

        return (
            <div>
                <div className="card">
                    <Tooltip target=".export-buttons>button" position="bottom" />

                    <DataTable ref={(el) => { this.dt = el; }} value={this.state.products} header={header} dataKey="id"
                        selectionMode="multiple" selection={this.state.selectedProducts} onSelectionChange={e => this.setState({ selectedProducts: e.value })}>
                        {
                            this.cols.map((col, index) => <Column key={index} field={col.field} header={col.header} />)
                        }
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
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
import ProductService from '../service/ProductService';

const DataTableExportDemo = () => {
    const [products, setProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const dt = useRef(null);
    const productService = new ProductService();

    const cols = [
        { field: 'code', header: 'Code' },
        { field: 'name', header: 'Name' },
        { field: 'category', header: 'Category' },
        { field: 'quantity', header: 'Quantity' }
    ];

    const exportColumns = cols.map(col => ({ title: col.header, dataKey: col.field }));

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const exportCSV = (selectionOnly) => {
        dt.current.exportCSV({ selectionOnly });
    }

    const exportPdf = () => {
        import('jspdf').then(jsPDF => {
            import('jspdf-autotable').then(() => {
                const doc = new jsPDF.default(0, 0);
                doc.autoTable(exportColumns, products);
                doc.save('products.pdf');
            })
        })
    }

    const exportExcel = () => {
        import('xlsx').then(xlsx => {
            const worksheet = xlsx.utils.json_to_sheet(products);
            const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
            const excelBuffer = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
            saveAsExcelFile(excelBuffer, 'products');
        });
    }

    const saveAsExcelFile = (buffer, fileName) => {
        import('file-saver').then(FileSaver => {
            let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
            let EXCEL_EXTENSION = '.xlsx';
            const data = new Blob([buffer], {
                type: EXCEL_TYPE
            });
            FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
        });
    }

    const header = (
        <div className="p-d-flex export-buttons">
            <Button type="button" icon="pi pi-file-o" onClick={() => exportCSV(false)} className="p-mr-2" data-pr-tooltip="CSV" />
            <Button type="button" icon="pi pi-file-excel" onClick={exportExcel} className="p-button-success p-mr-2" data-pr-tooltip="XLS" />
            <Button type="button" icon="pi pi-file-pdf" onClick={exportPdf} className="p-button-warning p-mr-2" data-pr-tooltip="PDF" />
            <Button type="button" icon="pi pi-filter" onClick={() => exportCSV(true)} className="p-button-info p-ml-auto" data-pr-tooltip="Selection Only" />
        </div>
    );

    return (
        <div>
            <div className="card">
                <Tooltip target=".export-buttons>button" position="bottom" />

                <DataTable ref={dt} value={products} header={header} dataKey="id"
                    selectionMode="multiple" selection={selectedProducts} onSelectionChange={e => setSelectedProducts(e.value)}>
                    {
                        cols.map((col, index) => <Column key={index} field={col.field} header={col.header} />)
                    }
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
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
import ProductService from '../service/ProductService';

const DataTableExportDemo = () => {
    const [products, setProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const dt = useRef(null);
    const productService = new ProductService();

    const cols = [
        { field: 'code', header: 'Code' },
        { field: 'name', header: 'Name' },
        { field: 'category', header: 'Category' },
        { field: 'quantity', header: 'Quantity' }
    ];

    const exportColumns = cols.map(col => ({ title: col.header, dataKey: col.field }));

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const exportCSV = (selectionOnly) => {
        dt.current.exportCSV({ selectionOnly });
    }

    const exportPdf = () => {
        import('jspdf').then(jsPDF => {
            import('jspdf-autotable').then(() => {
                const doc = new jsPDF.default(0, 0);
                doc.autoTable(exportColumns, products);
                doc.save('products.pdf');
            })
        })
    }

    const exportExcel = () => {
        import('xlsx').then(xlsx => {
            const worksheet = xlsx.utils.json_to_sheet(products);
            const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
            const excelBuffer = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
            saveAsExcelFile(excelBuffer, 'products');
        });
    }

    const saveAsExcelFile = (buffer, fileName) => {
        import('file-saver').then(FileSaver => {
            let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
            let EXCEL_EXTENSION = '.xlsx';
            const data = new Blob([buffer], {
                type: EXCEL_TYPE
            });
            FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
        });
    }

    const header = (
        <div className="p-d-flex export-buttons">
            <Button type="button" icon="pi pi-file-o" onClick={() => exportCSV(false)} className="p-mr-2" data-pr-tooltip="CSV" />
            <Button type="button" icon="pi pi-file-excel" onClick={exportExcel} className="p-button-success p-mr-2" data-pr-tooltip="XLS" />
            <Button type="button" icon="pi pi-file-pdf" onClick={exportPdf} className="p-button-warning p-mr-2" data-pr-tooltip="PDF" />
            <Button type="button" icon="pi pi-filter" onClick={() => exportCSV(true)} className="p-button-info p-ml-auto" data-pr-tooltip="Selection Only" />
        </div>
    );

    return (
        <div>
            <div className="card">
                <Tooltip target=".export-buttons>button" position="bottom" />

                <DataTable ref={dt} value={products} header={header} dataKey="id"
                    selectionMode="multiple" selection={selectedProducts} onSelectionChange={e => setSelectedProducts(e.value)}>
                    {
                        cols.map((col, index) => <Column key={index} field={col.field} header={col.header} />)
                    }
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
                        useLiveEditorTabs({
                            name: 'DataTableExportDemo', sources: this.sources, service: 'ProductService', data: 'products-small',
                            dependencies: { 'jspdf': '^1.5.3', 'jspdf-autotable': '^3.2.5', 'xlsx': '^0.15.1', 'file-saver': '^2.0.2' }
                        })
                    }
                </TabView>
            </div>
        )
    }
}
