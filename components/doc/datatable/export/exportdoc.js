import React, { useEffect, useRef, useState } from 'react';
import { ProductService } from '../../../../service/ProductService';
import { Button } from '../../../lib/button/Button';
import { Column } from '../../../lib/column/Column';
import { DataTable } from '../../../lib/datatable/DataTable';
import { Tooltip } from '../../../lib/tooltip/Tooltip';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function ExportDoc(props) {
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

    const exportColumns = cols.map((col) => ({ title: col.header, dataKey: col.field }));

    useEffect(() => {
        productService.getProductsMini().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onSelectionChange = (e) => {
        setSelectedProducts(e.value);
    };

    const exportCSV = (selectionOnly) => {
        dt.current.exportCSV({ selectionOnly });
    };

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
                let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
                let EXCEL_EXTENSION = '.xlsx';
                const data = new Blob([buffer], {
                    type: EXCEL_TYPE
                });

                module.default.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
            }
        });
    };

    const header = (
        <div className="flex align-items-center export-buttons">
            <Button type="button" icon="pi pi-file" onClick={() => exportCSV(false)} className="mr-2" data-pr-tooltip="CSV" />
            <Button type="button" icon="pi pi-file-excel" onClick={exportExcel} className="p-button-success mr-2" data-pr-tooltip="XLS" />
            <Button type="button" icon="pi pi-file-pdf" onClick={exportPdf} className="p-button-warning mr-2" data-pr-tooltip="PDF" />
            <Button type="button" icon="pi pi-filter" onClick={() => exportCSV(true)} className="p-button-info ml-auto" data-pr-tooltip="Selection Only" />
        </div>
    );

    const code = {
        basic: `
<Tooltip target=".export-buttons>button" position="bottom" />
<DataTable ref={(el) => { this.dt = el; }} value={this.state.products} header={header} dataKey="id" responsiveLayout="scroll"
    selectionMode="multiple" selection={this.state.selectedProducts} onSelectionChange={this.onSelectionChange}>
    {
        this.cols.map((col, index) => <Column key={index} field={col.field} header={col.header} />)
    }
</DataTable>
        `,
        javascript: `
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
import { ProductService } from '../service/ProductService';

export const ExportDoc = () => {
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
        productService.getProductsMini().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps


    const onSelectionChange = (e) => {
        setSelectedProducts(e.value);
    };

    const exportCSV = (selectionOnly) => {
        dt.current.exportCSV({ selectionOnly });
    };

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
                let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
                let EXCEL_EXTENSION = '.xlsx';
                const data = new Blob([buffer], {
                    type: EXCEL_TYPE
                });

                module.default.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
            }
        });
    };

    const header = (
        <div className="flex align-items-center export-buttons">
            <Button type="button" icon="pi pi-file" onClick={() => exportCSV(false)} className="mr-2" data-pr-tooltip="CSV" />
            <Button type="button" icon="pi pi-file-excel" onClick={exportExcel} className="p-button-success mr-2" data-pr-tooltip="XLS" />
            <Button type="button" icon="pi pi-file-pdf" onClick={exportPdf} className="p-button-warning mr-2" data-pr-tooltip="PDF" />
            <Button type="button" icon="pi pi-filter" onClick={() => exportCSV(true)} className="p-button-info ml-auto" data-pr-tooltip="Selection Only" />
        </div>
    );

    return (
        <div className="card">
            <Tooltip target=".export-buttons>button" position="bottom" />

            <DataTable ref={(el) => { this.dt = el; }} value={this.state.products} header={header} dataKey="id" responsiveLayout="scroll"
                selectionMode="multiple" selection={this.state.selectedProducts} onSelectionChange={this.onSelectionChange}>
                {
                    this.cols.map((col, index) => <Column key={index} field={col.field} header={col.header} />)
                }
            </DataTable>
        </div>
    );
}
        `,
        typescript: `
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
import { ProductService } from '../service/ProductService';

export const ExportDoc = () => {
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
        productService.getProductsMini().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps


    const onSelectionChange = (e) => {
        setSelectedProducts(e.value);
    };

    const exportCSV = (selectionOnly) => {
        dt.current.exportCSV({ selectionOnly });
    };

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
                let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
                let EXCEL_EXTENSION = '.xlsx';
                const data = new Blob([buffer], {
                    type: EXCEL_TYPE
                });

                module.default.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
            }
        });
    };

    const header = (
        <div className="flex align-items-center export-buttons">
            <Button type="button" icon="pi pi-file" onClick={() => exportCSV(false)} className="mr-2" data-pr-tooltip="CSV" />
            <Button type="button" icon="pi pi-file-excel" onClick={exportExcel} className="p-button-success mr-2" data-pr-tooltip="XLS" />
            <Button type="button" icon="pi pi-file-pdf" onClick={exportPdf} className="p-button-warning mr-2" data-pr-tooltip="PDF" />
            <Button type="button" icon="pi pi-filter" onClick={() => exportCSV(true)} className="p-button-info ml-auto" data-pr-tooltip="Selection Only" />
        </div>
    );

    return (
        <div className="card">
            <Tooltip target=".export-buttons>button" position="bottom" />

            <DataTable ref={(el) => { this.dt = el; }} value={this.state.products} header={header} dataKey="id" responsiveLayout="scroll"
                selectionMode="multiple" selection={this.state.selectedProducts} onSelectionChange={this.onSelectionChange}>
                {
                    this.cols.map((col, index) => <Column key={index} field={col.field} header={col.header} />)
                }
            </DataTable>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Export demo content.</p>
            </DocSectionText>
            <div className="card">
                <Tooltip target=".export-buttons>button" position="bottom" />

                <DataTable ref={dt} value={products} header={header} dataKey="id" responsiveLayout="scroll" selectionMode="multiple" selection={selectedProducts} onSelectionChange={onSelectionChange}>
                    {cols.map((col, index) => (
                        <Column key={index} field={col.field} header={col.header} />
                    ))}
                </DataTable>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
