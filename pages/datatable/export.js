import React, { useState, useEffect, useRef, memo } from 'react';
import { DataTable } from '../../components/lib/datatable/DataTable';
import { Column } from '../../components/lib/column/Column';
import { ProductService } from '../../service/ProductService';
import { TabView } from '../../components/lib/tabview/TabView';
import { useLiveEditorTabs } from '../../components/doc/common/liveeditor';
import { Button } from '../../components/lib/button/Button';
import { FileUpload } from '../../components/lib/fileupload/FileUpload';
import { Tooltip } from '../../components/lib/tooltip/Tooltip';
import { Toast } from '../../components/lib/toast/Toast';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';
import getConfig from 'next/config';

const DataTableExportDemo = () => {
    const [products, setProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [importedData, setImportedData] = useState([]);
    const [selectedImportedData, setSelectedImportedData] = useState([]);
    const [importedCols, setImportedCols] = useState([{ field: '', header: 'Header' }]);
    const dt = useRef(null);
    const toast = useRef(null);
    const productService = new ProductService();
    const uploadPath = getConfig().publicRuntimeConfig.uploadPath;

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

    const importCSV = (e) => {
        const file = e.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const csv = e.target.result;
            const data = csv.split('\n');

            // Prepare DataTable
            const cols = data[0].replace(/['"]+/g, '').split(',');
            data.shift();

            let _importedCols = cols.map(col => ({ field: col, header: toCapitalize(col.replace(/['"]+/g, '')) }));
            let _importedData = data.map(d => {
                d = d.split(',');
                return cols.reduce((obj, c, i) => {
                    obj[c] = d[i].replace(/['"]+/g, '');
                    return obj;
                }, {});
            });

            setImportedCols(_importedCols);
            setImportedData(_importedData);
        };

        reader.readAsText(file, 'UTF-8');
    }

    const importExcel = (e) => {
        const file = e.files[0];

        import('xlsx').then(xlsx => {
            const reader = new FileReader();
            reader.onload = (e) => {
                const wb = xlsx.read(e.target.result, { type: 'array' });
                const wsname = wb.SheetNames[0];
                const ws = wb.Sheets[wsname];
                const data = xlsx.utils.sheet_to_json(ws, { header: 1 });

                // Prepare DataTable
                const cols = data[0];
                data.shift();

                let _importedCols = cols.map(col => ({ field: col, header: toCapitalize(col) }));
                let _importedData = data.map(d => {
                    return cols.reduce((obj, c, i) => {
                        obj[c] = d[i];
                        return obj;
                    }, {});
                });

                setImportedCols(_importedCols);
                setImportedData(_importedData);
            };

            reader.readAsArrayBuffer(file);
        });
    }

    const exportCSV = (selectionOnly) => {
        dt.current.exportCSV({ selectionOnly });
    }

    const exportPdf = () => {
        import('jspdf').then((jsPDF) => {
            import('jspdf-autotable').then(() => {
                const doc = new jsPDF.default(0, 0);
                doc.autoTable(exportColumns, products);
                doc.save('products.pdf');
            });
        });
    };

    const exportExcel = () => {
        import('xlsx').then((xlsx) => {
            const worksheet = xlsx.utils.json_to_sheet(products);
            const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
            const excelBuffer = xlsx.write(workbook, {
                bookType: 'xlsx',
                type: 'array'
            });
            saveAsExcelFile(excelBuffer, 'products');
        });
    };

    const saveAsExcelFile = (buffer, fileName) => {
        import('file-saver').then((module) => {
            if (module && module.default) {
                let EXCEL_TYPE =
                    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
                let EXCEL_EXTENSION = '.xlsx';
                const data = new Blob([buffer], {
                    type: EXCEL_TYPE
                });

                module.default.saveAs(
                    data,
                    fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION
                );
            }
        });
    };

    const toCapitalize = (s) => {
        return s.charAt(0).toUpperCase() + s.slice(1);
    }

    const clear = () => {
        setImportedData([]);
        setSelectedImportedData([]);
        setImportedCols([{ field: '', header: 'Header' }]);
    }

    const onImportSelectionChange = (e) => {
        setSelectedImportedData(e.value);
        const detail = e.value.map(d => Object.values(d)[0]).join(', ');
        toast.current.show({ severity: 'info', summary: 'Data Selected', detail, life: 3000 });
    }

    const onSelectionChange = (e) => {
        setSelectedProducts(e.value);
    }

    const header = (
        <div className="flex align-items-center export-buttons">
            <Button type="button" icon="pi pi-file" onClick={() => exportCSV(false)} className="mr-2" data-pr-tooltip="CSV" />
            <Button type="button" icon="pi pi-file-excel" onClick={exportExcel} className="p-button-success mr-2" data-pr-tooltip="XLS" />
            <Button type="button" icon="pi pi-file-pdf" onClick={exportPdf} className="p-button-warning mr-2" data-pr-tooltip="PDF" />
            <Button type="button" icon="pi pi-filter" onClick={() => exportCSV(true)} className="p-button-info ml-auto" data-pr-tooltip="Selection Only" />
        </div>
    );

    return (
        <div>
            <Head>
                <title>React Table Component - Import/Export</title>
                <meta name="description" content="DataTable can export its data to various formats." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>DataTable <span>Import/Export</span></h1>
                    <p>DataTable can export its data to various formats.</p>
                </div>

                <DocActions github="datatable/export.js" />
            </div>

            <div className="content-section implementation">
                <div className="card">
                    <h5>Import</h5>

                    <Toast ref={toast} />

                    <div className="flex align-items-center py-2">
                        <FileUpload chooseOptions={{ label: 'CSV', icon: 'pi pi-file' }} mode="basic" name="demo[]" auto url={uploadPath} accept=".csv" className="mr-2" onUpload={importCSV} />
                        <FileUpload chooseOptions={{ label: 'Excel', icon: 'pi pi-file-excel', className: 'p-button-success' }} mode="basic" name="demo[]" auto url={uploadPath}
                            accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" className="mr-2" onUpload={importExcel} />
                        <Button type="button" label="Clear" icon="pi pi-times" onClick={clear} className="p-button-info ml-auto" />
                    </div>

                    <DataTable value={importedData} emptyMessage="No data" paginator rows={10} alwaysShowPaginator={false} responsiveLayout="scroll"
                        selectionMode="multiple" selection={selectedImportedData} onSelectionChange={onImportSelectionChange}>
                        {
                            importedCols.map((col, index) => <Column key={index} field={col.field} header={col.header} />)
                        }
                    </DataTable>
                </div>

                <div className="card">
                    <h5>Export</h5>

                    <Tooltip target=".export-buttons>button" position="bottom" />

                    <DataTable ref={dt} value={products} header={header} dataKey="id" responsiveLayout="scroll"
                        selectionMode="multiple" selection={selectedProducts} onSelectionChange={onSelectionChange}>
                        {
                            cols.map((col, index) => <Column key={index} field={col.field} header={col.header} />)
                        }
                    </DataTable>
                </div>
            </div>

            <DataTableExportDemoDoc></DataTableExportDemoDoc>
        </div>
    );
}

export default DataTableExportDemo;

export const DataTableExportDemoDoc = memo(() => {

    const sources = {
        'class': {
            tabName: 'Class Source',
            content: `
import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { Tooltip } from 'primereact/tooltip';
import { Toast } from 'primereact/toast';
import { ProductService } from '../service/ProductService';

export class DataTableExportDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: [],
            selectedProducts: [],
            importedData: [],
            selectedImportedData: [],
            importedCols: [{ field: '', header: 'Header' }]
        };

        this.importCSV = this.importCSV.bind(this);
        this.importExcel = this.importExcel.bind(this);
        this.onImportSelectionChange = this.onImportSelectionChange.bind(this);
        this.clear = this.clear.bind(this);

        this.exportCSV = this.exportCSV.bind(this);
        this.exportPdf = this.exportPdf.bind(this);
        this.exportExcel = this.exportExcel.bind(this);
        this.onSelectionChange = this.onSelectionChange.bind(this);

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

    importCSV(e) {
        const file = e.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const csv = e.target.result;
            const data = csv.split('\\n');

            // Prepare DataTable
            const cols = data[0].replace(/['"]+/g, '').split(',');
            data.shift();

            let importedCols = cols.map(col => ({ field: col, header: this.toCapitalize(col.replace(/['"]+/g, '')) }));
            let importedData = data.map(d => {
                d = d.split(',');
                return cols.reduce((obj, c, i) => {
                    obj[c] = d[i].replace(/['"]+/g, '');
                    return obj;
                }, {});
            });

            this.setState({
                importedCols,
                importedData
            });
        };

        reader.readAsText(file, 'UTF-8');
    }

    importExcel(e) {
        const file = e.files[0];

        import('xlsx').then(xlsx => {
            const reader = new FileReader();
            reader.onload = (e) => {
                const wb = xlsx.read(e.target.result, { type: 'array' });
                const wsname = wb.SheetNames[0];
                const ws = wb.Sheets[wsname];
                const data = xlsx.utils.sheet_to_json(ws, { header: 1 });

                // Prepare DataTable
                const cols = data[0];
                data.shift();

                let importedCols = cols.map(col => ({ field: col, header: this.toCapitalize(col) }));
                let importedData = data.map(d => {
                    return cols.reduce((obj, c, i) => {
                        obj[c] = d[i];
                        return obj;
                    }, {});
                });

                this.setState({
                    importedCols,
                    importedData
                });
            };

            reader.readAsArrayBuffer(file);
        });
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
        import('file-saver').then(module => {
            if (module && module.default) {
                let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
                let EXCEL_EXTENSION = '.xlsx';
                const data = new Blob([buffer], {
                    type: EXCEL_TYPE
                });

                module.default.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
            }
        });
    }

    toCapitalize(s) {
        return s.charAt(0).toUpperCase() + s.slice(1);
    }

    clear() {
        this.setState({
            importedData: [],
            selectedImportedData: [],
            importedCols: [{ field: '', header: 'Header' }]
        });
    }

    onImportSelectionChange(e) {
        this.setState({ selectedImportedData: e.value }, () => {
            const detail = this.state.selectedImportedData.map(d => Object.values(d)[0]).join(', ');
            this.toast.show({ severity: 'info', summary: 'Data Selected', detail, life: 3000 });
        });
    }

    onSelectionChange(e) {
        this.setState({ selectedProducts: e.value });
    }

    render() {
        const header = (
            <div className="flex align-items-center export-buttons">
                <Button type="button" icon="pi pi-file" onClick={() => this.exportCSV(false)} className="mr-2" data-pr-tooltip="CSV" />
                <Button type="button" icon="pi pi-file-excel" onClick={this.exportExcel} className="p-button-success mr-2" data-pr-tooltip="XLS" />
                <Button type="button" icon="pi pi-file-pdf" onClick={this.exportPdf} className="p-button-warning mr-2" data-pr-tooltip="PDF" />
                <Button type="button" icon="pi pi-filter" onClick={() => this.exportCSV(true)} className="p-button-info ml-auto" data-pr-tooltip="Selection Only" />
            </div>
        );

        return (
            <div>
                <div className="card">
                    <h5>Import</h5>

                    <Toast ref={(el) => this.toast = el} />

                    <div className="flex align-items-center py-2">
                        <FileUpload chooseOptions={{ label: 'CSV', icon: 'pi pi-file' }} mode="basic" name="demo[]" auto url="https://primefaces.org/primereact/showcase/upload.php" accept=".csv" className="mr-2" onUpload={this.importCSV} />
                        <FileUpload chooseOptions={{ label: 'Excel', icon: 'pi pi-file-excel', className: 'p-button-success' }} mode="basic" name="demo[]" auto url="https://primefaces.org/primereact/showcase/upload.php"
                            accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" className="mr-2" onUpload={this.importExcel} />
                        <Button type="button" label="Clear" icon="pi pi-times" onClick={this.clear} className="p-button-info ml-auto" />
                    </div>

                    <DataTable value={this.state.importedData} emptyMessage="No data" paginator rows={10} alwaysShowPaginator={false} responsiveLayout="scroll"
                        selectionMode="multiple" selection={this.state.selectedImportedData} onSelectionChange={this.onImportSelectionChange}>
                        {
                            this.state.importedCols.map((col, index) => <Column key={index} field={col.field} header={col.header} />)
                        }
                    </DataTable>
                </div>

                <div className="card">
                    <h5>Export</h5>

                    <Tooltip target=".export-buttons>button" position="bottom" />

                    <DataTable ref={(el) => { this.dt = el; }} value={this.state.products} header={header} dataKey="id" responsiveLayout="scroll"
                        selectionMode="multiple" selection={this.state.selectedProducts} onSelectionChange={this.onSelectionChange}>
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
import { FileUpload } from 'primereact/fileupload';
import { Tooltip } from 'primereact/tooltip';
import { Toast } from 'primereact/toast';
import { ProductService } from '../service/ProductService';

export const DataTableExportDemo = () => {
    const [products, setProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [importedData, setImportedData] = useState([]);
    const [selectedImportedData, setSelectedImportedData] = useState([]);
    const [importedCols, setImportedCols] = useState([{ field: '', header: 'Header' }]);
    const dt = useRef(null);
    const toast = useRef(null);
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

    const importCSV = (e) => {
        const file = e.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const csv = e.target.result;
            const data = csv.split('\\n');

            // Prepare DataTable
            const cols = data[0].replace(/['"]+/g, '').split(',');
            data.shift();

            let _importedCols = cols.map(col => ({ field: col, header: toCapitalize(col.replace(/['"]+/g, '')) }));
            let _importedData = data.map(d => {
                d = d.split(',');
                return cols.reduce((obj, c, i) => {
                    obj[c] = d[i].replace(/['"]+/g, '');
                    return obj;
                }, {});
            });

            setImportedCols(_importedCols);
            setImportedData(_importedData);
        };

        reader.readAsText(file, 'UTF-8');
    }

    const importExcel = (e) => {
        const file = e.files[0];

        import('xlsx').then(xlsx => {
            const reader = new FileReader();
            reader.onload = (e) => {
                const wb = xlsx.read(e.target.result, { type: 'array' });
                const wsname = wb.SheetNames[0];
                const ws = wb.Sheets[wsname];
                const data = xlsx.utils.sheet_to_json(ws, { header: 1 });

                // Prepare DataTable
                const cols = data[0];
                data.shift();

                let _importedCols = cols.map(col => ({ field: col, header: toCapitalize(col) }));
                let _importedData = data.map(d => {
                    return cols.reduce((obj, c, i) => {
                        obj[c] = d[i];
                        return obj;
                    }, {});
                });

                setImportedCols(_importedCols);
                setImportedData(_importedData);
            };

            reader.readAsArrayBuffer(file);
        });
    }

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
        import('file-saver').then(module => {
            if (module && module.default) {
                let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
                let EXCEL_EXTENSION = '.xlsx';
                const data = new Blob([buffer], {
                    type: EXCEL_TYPE
                });

                module.default.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
            }
        });
    }

    const toCapitalize = (s) => {
        return s.charAt(0).toUpperCase() + s.slice(1);
    }

    const clear = () => {
        setImportedData([]);
        setSelectedImportedData([]);
        setImportedCols([{ field: '', header: 'Header' }]);
    }

    const onImportSelectionChange = (e) => {
        setSelectedImportedData(e.value);
        const detail = e.value.map(d => Object.values(d)[0]).join(', ');
        toast.current.show({ severity: 'info', summary: 'Data Selected', detail, life: 3000 });
    }

    const onSelectionChange = (e) => {
        setSelectedProducts(e.value);
    }

    const header = (
        <div className="flex align-items-center export-buttons">
            <Button type="button" icon="pi pi-file" onClick={() => exportCSV(false)} className="mr-2" data-pr-tooltip="CSV" />
            <Button type="button" icon="pi pi-file-excel" onClick={exportExcel} className="p-button-success mr-2" data-pr-tooltip="XLS" />
            <Button type="button" icon="pi pi-file-pdf" onClick={exportPdf} className="p-button-warning mr-2" data-pr-tooltip="PDF" />
            <Button type="button" icon="pi pi-filter" onClick={() => exportCSV(true)} className="p-button-info ml-auto" data-pr-tooltip="Selection Only" />
        </div>
    );

    return (
        <div>
            <div className="card">
                <h5>Import</h5>

                <Toast ref={toast} />

                <div className="flex align-items-center py-2">
                    <FileUpload chooseOptions={{ label: 'CSV', icon: 'pi pi-file' }} mode="basic" name="demo[]" auto url="https://primefaces.org/primereact/showcase/upload.php" accept=".csv" className="mr-2" onUpload={importCSV} />
                    <FileUpload chooseOptions={{ label: 'Excel', icon: 'pi pi-file-excel', className: 'p-button-success' }} mode="basic" name="demo[]" auto url="https://primefaces.org/primereact/showcase/upload.php"
                        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" className="mr-2" onUpload={importExcel} />
                    <Button type="button" label="Clear" icon="pi pi-times" onClick={clear} className="p-button-info ml-auto" />
                </div>

                <DataTable value={importedData} emptyMessage="No data" paginator rows={10} alwaysShowPaginator={false} responsiveLayout="scroll"
                    selectionMode="multiple" selection={selectedImportedData} onSelectionChange={onImportSelectionChange}>
                    {
                        importedCols.map((col, index) => <Column key={index} field={col.field} header={col.header} />)
                    }
                </DataTable>
            </div>

            <div className="card">
                <h5>Export</h5>

                <Tooltip target=".export-buttons>button" position="bottom" />

                <DataTable ref={dt} value={products} header={header} dataKey="id" responsiveLayout="scroll"
                    selectionMode="multiple" selection={selectedProducts} onSelectionChange={onSelectionChange}>
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
import { FileUpload } from 'primereact/fileupload';
import { Tooltip } from 'primereact/tooltip';
import { Toast } from 'primereact/toast';
import { ProductService } from '../service/ProductService';

export const DataTableExportDemo = () => {
    const [products, setProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [importedData, setImportedData] = useState([]);
    const [selectedImportedData, setSelectedImportedData] = useState([]);
    const [importedCols, setImportedCols] = useState([{ field: '', header: 'Header' }]);
    const dt = useRef(null);
    const toast = useRef(null);
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

    const importCSV = (e) => {
        const file = e.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const csv = e.target.result;
            const data = csv.split('\\n');

            // Prepare DataTable
            const cols = data[0].replace(/['"]+/g, '').split(',');
            data.shift();

            let _importedCols = cols.map(col => ({ field: col, header: toCapitalize(col.replace(/['"]+/g, '')) }));
            let _importedData = data.map(d => {
                d = d.split(',');
                return cols.reduce((obj, c, i) => {
                    obj[c] = d[i].replace(/['"]+/g, '');
                    return obj;
                }, {});
            });

            setImportedCols(_importedCols);
            setImportedData(_importedData);
        };

        reader.readAsText(file, 'UTF-8');
    }

    const importExcel = (e) => {
        const file = e.files[0];

        import('xlsx').then(xlsx => {
            const reader = new FileReader();
            reader.onload = (e) => {
                const wb = xlsx.read(e.target.result, { type: 'array' });
                const wsname = wb.SheetNames[0];
                const ws = wb.Sheets[wsname];
                const data = xlsx.utils.sheet_to_json(ws, { header: 1 });

                // Prepare DataTable
                const cols = data[0];
                data.shift();

                let _importedCols = cols.map(col => ({ field: col, header: toCapitalize(col) }));
                let _importedData = data.map(d => {
                    return cols.reduce((obj, c, i) => {
                        obj[c] = d[i];
                        return obj;
                    }, {});
                });

                setImportedCols(_importedCols);
                setImportedData(_importedData);
            };

            reader.readAsArrayBuffer(file);
        });
    }

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
        import('file-saver').then(module => {
            if (module && module.default) {
                let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
                let EXCEL_EXTENSION = '.xlsx';
                const data = new Blob([buffer], {
                    type: EXCEL_TYPE
                });

                module.default.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
            }
        });
    }

    const toCapitalize = (s) => {
        return s.charAt(0).toUpperCase() + s.slice(1);
    }

    const clear = () => {
        setImportedData([]);
        setSelectedImportedData([]);
        setImportedCols([{ field: '', header: 'Header' }]);
    }

    const onImportSelectionChange = (e) => {
        setSelectedImportedData(e.value);
        const detail = e.value.map(d => Object.values(d)[0]).join(', ');
        toast.current.show({ severity: 'info', summary: 'Data Selected', detail, life: 3000 });
    }

    const onSelectionChange = (e) => {
        setSelectedProducts(e.value);
    }

    const header = (
        <div className="flex align-items-center export-buttons">
            <Button type="button" icon="pi pi-file" onClick={() => exportCSV(false)} className="mr-2" data-pr-tooltip="CSV" />
            <Button type="button" icon="pi pi-file-excel" onClick={exportExcel} className="p-button-success mr-2" data-pr-tooltip="XLS" />
            <Button type="button" icon="pi pi-file-pdf" onClick={exportPdf} className="p-button-warning mr-2" data-pr-tooltip="PDF" />
            <Button type="button" icon="pi pi-filter" onClick={() => exportCSV(true)} className="p-button-info ml-auto" data-pr-tooltip="Selection Only" />
        </div>
    );

    return (
        <div>
            <div className="card">
                <h5>Import</h5>

                <Toast ref={toast} />

                <div className="flex align-items-center py-2">
                    <FileUpload chooseOptions={{ label: 'CSV', icon: 'pi pi-file' }} mode="basic" name="demo[]" auto url="https://primefaces.org/primereact/showcase/upload.php" accept=".csv" className="mr-2" onUpload={importCSV} />
                    <FileUpload chooseOptions={{ label: 'Excel', icon: 'pi pi-file-excel', className: 'p-button-success' }} mode="basic" name="demo[]" auto url="https://primefaces.org/primereact/showcase/upload.php"
                        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" className="mr-2" onUpload={importExcel} />
                    <Button type="button" label="Clear" icon="pi pi-times" onClick={clear} className="p-button-info ml-auto" />
                </div>

                <DataTable value={importedData} emptyMessage="No data" paginator rows={10} alwaysShowPaginator={false} responsiveLayout="scroll"
                    selectionMode="multiple" selection={selectedImportedData} onSelectionChange={onImportSelectionChange}>
                    {
                        importedCols.map((col, index) => <Column key={index} field={col.field} header={col.header} />)
                    }
                </DataTable>
            </div>

            <div className="card">
                <h5>Export</h5>

                <Tooltip target=".export-buttons>button" position="bottom" />

                <DataTable ref={dt} value={products} header={header} dataKey="id" responsiveLayout="scroll"
                    selectionMode="multiple" selection={selectedProducts} onSelectionChange={onSelectionChange}>
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
        'browser': {
            tabName: 'Browser Source',
            imports: `
        <script src="./ProductService.js"></script>

        <script src="https://unpkg.com/primereact/api/api.min.js"></script>
        <script src="https://unpkg.com/primereact/core/core.min.js"></script>
        <script src="https://unpkg.com/primereact/paginator/paginator.min.js"></script>
        <script src="https://unpkg.com/primereact/virtualscroller/virtualscroller.min.js"></script>
        <script src="https://unpkg.com/primereact/column/column.min.js"></script>
        <script src="https://unpkg.com/primereact/datatable/datatable.min.js"></script>
        <script src="https://unpkg.com/primereact/button/button.min.js"></script>
        <script src="https://unpkg.com/primereact/messages/messages.min.js"></script>
        <script src="https://unpkg.com/primereact/fileupload/fileupload.min.js"></script>
        <script src="https://unpkg.com/primereact/tooltip/tooltip.min.js"></script>
        <script src="https://unpkg.com/primereact/toast/toast.min.js"></script>`,
            content: `
const { useEffect, useState, useRef } = React;
const { Column } = primereact.column;
const { DataTable } = primereact.datatable;
const { Button } = primereact.button;
const { FileUpload } = primereact.fileupload;
const { Tooltip } = primereact.tooltip;
const { Toast } = primereact.toast;

const DataTableExportDemo = () => {
    const [products, setProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [importedData, setImportedData] = useState([]);
    const [selectedImportedData, setSelectedImportedData] = useState([]);
    const [importedCols, setImportedCols] = useState([{ field: '', header: 'Header' }]);
    const dt = useRef(null);
    const toast = useRef(null);
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

    const importCSV = (e) => {
        const file = e.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const csv = e.target.result;
            const data = csv.split('\\n');

            // Prepare DataTable
            const cols = data[0].replace(/['"]+/g, '').split(',');
            data.shift();

            let _importedCols = cols.map(col => ({ field: col, header: toCapitalize(col.replace(/['"]+/g, '')) }));
            let _importedData = data.map(d => {
                d = d.split(',');
                return cols.reduce((obj, c, i) => {
                    obj[c] = d[i].replace(/['"]+/g, '');
                    return obj;
                }, {});
            });

            setImportedCols(_importedCols);
            setImportedData(_importedData);
        };

        reader.readAsText(file, 'UTF-8');
    }

    const importExcel = (e) => {
        const file = e.files[0];

        import('xlsx').then(xlsx => {
            const reader = new FileReader();
            reader.onload = (e) => {
                const wb = xlsx.read(e.target.result, { type: 'array' });
                const wsname = wb.SheetNames[0];
                const ws = wb.Sheets[wsname];
                const data = xlsx.utils.sheet_to_json(ws, { header: 1 });

                // Prepare DataTable
                const cols = data[0];
                data.shift();

                let _importedCols = cols.map(col => ({ field: col, header: toCapitalize(col) }));
                let _importedData = data.map(d => {
                    return cols.reduce((obj, c, i) => {
                        obj[c] = d[i];
                        return obj;
                    }, {});
                });

                setImportedCols(_importedCols);
                setImportedData(_importedData);
            };

            reader.readAsArrayBuffer(file);
        });
    }

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
        import('file-saver').then(module => {
            if (module && module.default) {
                let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
                let EXCEL_EXTENSION = '.xlsx';
                const data = new Blob([buffer], {
                    type: EXCEL_TYPE
                });

                module.default.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
            }
        });
    }

    const toCapitalize = (s) => {
        return s.charAt(0).toUpperCase() + s.slice(1);
    }

    const clear = () => {
        setImportedData([]);
        setSelectedImportedData([]);
        setImportedCols([{ field: '', header: 'Header' }]);
    }

    const onImportSelectionChange = (e) => {
        setSelectedImportedData(e.value);
        const detail = e.value.map(d => Object.values(d)[0]).join(', ');
        toast.current.show({ severity: 'info', summary: 'Data Selected', detail, life: 3000 });
    }

    const onSelectionChange = (e) => {
        setSelectedProducts(e.value);
    }

    const header = (
        <div className="flex align-items-center export-buttons">
            <Button type="button" icon="pi pi-file" onClick={() => exportCSV(false)} className="mr-2" data-pr-tooltip="CSV" />
            <Button type="button" icon="pi pi-file-excel" onClick={exportExcel} className="p-button-success mr-2" data-pr-tooltip="XLS" />
            <Button type="button" icon="pi pi-file-pdf" onClick={exportPdf} className="p-button-warning mr-2" data-pr-tooltip="PDF" />
            <Button type="button" icon="pi pi-filter" onClick={() => exportCSV(true)} className="p-button-info ml-auto" data-pr-tooltip="Selection Only" />
        </div>
    );

    return (
        <div>
            <div className="card">
                <h5>Import</h5>

                <Toast ref={toast} />

                <div className="flex align-items-center py-2">
                    <FileUpload chooseOptions={{ label: 'CSV', icon: 'pi pi-file' }} mode="basic" name="demo[]" auto url="https://primefaces.org/primereact/showcase/upload.php" accept=".csv" className="mr-2" onUpload={importCSV} />
                    <FileUpload chooseOptions={{ label: 'Excel', icon: 'pi pi-file-excel', className: 'p-button-success' }} mode="basic" name="demo[]" auto url="https://primefaces.org/primereact/showcase/upload.php"
                        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" className="mr-2" onUpload={importExcel} />
                    <Button type="button" label="Clear" icon="pi pi-times" onClick={clear} className="p-button-info ml-auto" />
                </div>

                <DataTable value={importedData} emptyMessage="No data" paginator rows={10} alwaysShowPaginator={false} responsiveLayout="scroll"
                    selectionMode="multiple" selection={selectedImportedData} onSelectionChange={onImportSelectionChange}>
                    {
                        importedCols.map((col, index) => <Column key={index} field={col.field} header={col.header} />)
                    }
                </DataTable>
            </div>

            <div className="card">
                <h5>Export</h5>

                <Tooltip target=".export-buttons>button" position="bottom" />

                <DataTable ref={dt} value={products} header={header} dataKey="id" responsiveLayout="scroll"
                    selectionMode="multiple" selection={selectedProducts} onSelectionChange={onSelectionChange}>
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
    };

    const extFiles = {
        'public/upload.php': {
            content: `
<?php
header ("Access-Control-Allow-Origin: *");
echo '<p>Fake Upload Process</p>'; ?>

                `
        }
    }

    return (
        <div className="content-section documentation" id="app-doc">
            <TabView>
                {
                    useLiveEditorTabs({
                        name: 'DataTableExportDemo', sources: sources, service: 'ProductService', data: 'products-small',
                        dependencies: { 'jspdf': '2.5.1', 'jspdf-autotable': '3.5.23', 'xlsx': '0.18.5', 'file-saver': '2.0.5' },
                        extFiles: extFiles
                    })
                }
            </TabView>
        </div>
    )
})
