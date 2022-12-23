import React, { useState, useRef } from 'react';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';
import { Button } from '../../../lib/button/Button';
import { FileUpload } from '../../../lib/fileupload/FileUpload';
import { Toast } from '../../../lib/toast/Toast';
import { DataTable } from '../../../lib/datatable/DataTable';
import { Column } from '../../../lib/column/Column';
import getConfig from 'next/config';

export function ExportImportDoc(props) {
    const [importedData, setImportedData] = useState([]);
    const [selectedImportedData, setSelectedImportedData] = useState([]);
    const [importedCols, setImportedCols] = useState([{ field: '', header: 'Header' }]);
    const toast = useRef(null);
    const uploadPath = getConfig().publicRuntimeConfig.uploadPath;

    const importCSV = (e) => {
        const file = e.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            const csv = e.target.result;
            const data = csv.split('\n');

            // Prepare DataTable
            const cols = data[0].replace(/['"]+/g, '').split(',');

            data.shift();

            let _importedCols = cols.map((col) => ({ field: col, header: toCapitalize(col.replace(/['"]+/g, '')) }));
            let _importedData = data.map((d) => {
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
    };

    const importExcel = (e) => {
        const file = e.files[0];

        import('xlsx').then((xlsx) => {
            const reader = new FileReader();

            reader.onload = (e) => {
                const wb = xlsx.read(e.target.result, { type: 'array' });
                const wsname = wb.SheetNames[0];
                const ws = wb.Sheets[wsname];
                const data = xlsx.utils.sheet_to_json(ws, { header: 1 });

                // Prepare DataTable
                const cols = data[0];

                data.shift();

                let _importedCols = cols.map((col) => ({ field: col, header: toCapitalize(col) }));
                let _importedData = data.map((d) => {
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
    };

    const toCapitalize = (s) => {
        return s.charAt(0).toUpperCase() + s.slice(1);
    };

    const clear = () => {
        setImportedData([]);
        setSelectedImportedData([]);
        setImportedCols([{ field: '', header: 'Header' }]);
    };

    const onImportSelectionChange = (e) => {
        setSelectedImportedData(e.value);
        const detail = e.value.map((d) => Object.values(d)[0]).join(', ');

        toast.current.show({ severity: 'info', summary: 'Data Selected', detail, life: 3000 });
    };

    const code = {
        basic: `
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
        `,
        javascript: `
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { Tooltip } from 'primereact/tooltip';
import { Toast } from 'primereact/toast';
import { ProductService } from '../service/ProductService';

export const ExportImportDoc = () => {
    const [importedData, setImportedData] = useState([]);
    const [selectedImportedData, setSelectedImportedData] = useState([]);
    const [importedCols, setImportedCols] = useState([{ field: '', header: 'Header' }]);
    const toast = useRef(null);
    const productService = new ProductService();

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

    return (
         <div className="card">
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
    );
}
        `,
        typescript: `
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { Tooltip } from 'primereact/tooltip';
import { Toast } from 'primereact/toast';
import { ProductService } from '../service/ProductService';

export const ExportImportDoc = () => {
    const [importedData, setImportedData] = useState([]);
    const [selectedImportedData, setSelectedImportedData] = useState([]);
    const [importedCols, setImportedCols] = useState([{ field: '', header: 'Header' }]);
    const toast = useRef(null);
    const productService = new ProductService();

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

    return (
         <div className="card">
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
    );
}
        `,
        php: `
/* public/upload.php */

<?php
header ("Access-Control-Allow-Origin: *");
echo '<p>Fake Upload Process</p>'; ?>
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Import demo content.</p>
            </DocSectionText>
            <div className="card">
                <Toast ref={toast} />
                <div className="flex align-items-center py-2">
                    <FileUpload chooseOptions={{ label: 'CSV', icon: 'pi pi-file' }} mode="basic" name="demo[]" auto url={uploadPath} accept=".csv" className="mr-2" onUpload={importCSV} />
                    <FileUpload
                        chooseOptions={{ label: 'Excel', icon: 'pi pi-file-excel', className: 'p-button-success' }}
                        mode="basic"
                        name="demo[]"
                        auto
                        url={uploadPath}
                        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                        className="mr-2"
                        onUpload={importExcel}
                    />
                    <Button type="button" label="Clear" icon="pi pi-times" onClick={clear} className="p-button-info ml-auto" />
                </div>

                <DataTable value={importedData} emptyMessage="No data" paginator rows={10} alwaysShowPaginator={false} responsiveLayout="scroll" selectionMode="multiple" selection={selectedImportedData} onSelectionChange={onImportSelectionChange}>
                    {importedCols.map((col, index) => (
                        <Column key={index} field={col.field} header={col.header} />
                    ))}
                </DataTable>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
