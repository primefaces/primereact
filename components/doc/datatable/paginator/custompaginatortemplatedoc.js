import React, { useEffect, useState } from 'react';
import { CustomerService } from '../../../../service/CustomerService';
import { Column } from '../../../lib/column/Column';
import { DataTable } from '../../../lib/datatable/DataTable';
import { Dropdown } from '../../../lib/dropdown/Dropdown';
import { InputText } from '../../../lib/inputtext/InputText';
import { Ripple } from '../../../lib/ripple/Ripple';
import { classNames } from '../../../lib/utils/Utils';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function CustomPaginatorTemplateDoc(props) {
    const [customers1, setCustomers1] = useState([]);
    const [customers2, setCustomers2] = useState([]);
    const [first1, setFirst1] = useState(0);
    const [rows1, setRows1] = useState(5);
    const [first2, setFirst2] = useState(0);
    const [rows2, setRows2] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageInputTooltip, setPageInputTooltip] = useState("Press 'Enter' key to go to this page.");

    const onCustomPage1 = (event) => {
        setFirst1(event.first);
        setRows1(event.rows);
        setCurrentPage(event.page + 1);
    };

    const onCustomPage2 = (event) => {
        setFirst2(event.first);
        setRows2(event.rows);
    };

    const onPageInputKeyDown = (event, options) => {
        if (event.key === 'Enter') {
            const page = parseInt(currentPage);

            if (page < 1 || page > options.totalPages) {
                setPageInputTooltip(`Value must be between 1 and ${options.totalPages}.`);
            } else {
                const first = currentPage ? options.rows * (page - 1) : 0;

                setFirst1(first);
                setPageInputTooltip("Press 'Enter' key to go to this page.");
            }
        }
    };

    const onPageInputChange = (event) => {
        setCurrentPage(event.target.value);
    };

    useEffect(() => {
        CustomerService.getCustomersLarge().then((data) => setCustomers1(data));
        CustomerService.getCustomersLarge().then((data) => setCustomers2(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const template1 = {
        layout: 'PrevPageLink PageLinks NextPageLink RowsPerPageDropdown CurrentPageReport',
        PrevPageLink: (options) => {
            return (
                <button type="button" className={options.className} onClick={options.onClick} disabled={options.disabled}>
                    <span className="p-3">Previous</span>
                    <Ripple />
                </button>
            );
        },
        NextPageLink: (options) => {
            return (
                <button type="button" className={options.className} onClick={options.onClick} disabled={options.disabled}>
                    <span className="p-3">Next</span>
                    <Ripple />
                </button>
            );
        },
        PageLinks: (options) => {
            if ((options.view.startPage === options.page && options.view.startPage !== 0) || (options.view.endPage === options.page && options.page + 1 !== options.totalPages)) {
                const className = classNames(options.className, { 'p-disabled': true });

                return (
                    <span className={className} style={{ userSelect: 'none' }}>
                        ...
                    </span>
                );
            }

            return (
                <button type="button" className={options.className} onClick={options.onClick}>
                    {options.page + 1}
                    <Ripple />
                </button>
            );
        },
        RowsPerPageDropdown: (options) => {
            const dropdownOptions = [
                { label: 5, value: 5 },
                { label: 10, value: 10 },
                { label: 20, value: 20 },
                { label: 50, value: 50 },
                { label: 'All', value: options.totalRecords }
            ];

            return <Dropdown value={options.value} options={dropdownOptions} onChange={options.onChange} />;
        },
        CurrentPageReport: (options) => {
            return (
                <span className="mx-3" style={{ color: 'var(--text-color)', userSelect: 'none' }}>
                    Go to <InputText size="2" className="ml-1" value={currentPage} tooltip={pageInputTooltip} onKeyDown={(e) => onPageInputKeyDown(e, options)} onChange={onPageInputChange} />
                </span>
            );
        }
    };
    const template2 = {
        layout: 'RowsPerPageDropdown CurrentPageReport PrevPageLink NextPageLink',
        RowsPerPageDropdown: (options) => {
            const dropdownOptions = [
                { label: 5, value: 5 },
                { label: 10, value: 10 },
                { label: 20, value: 20 },
                { label: 50, value: 50 }
            ];

            return (
                <React.Fragment>
                    <span className="mx-1" style={{ color: 'var(--text-color)', userSelect: 'none' }}>
                        Items per page:{' '}
                    </span>
                    <Dropdown value={options.value} options={dropdownOptions} onChange={options.onChange} />
                </React.Fragment>
            );
        },
        CurrentPageReport: (options) => {
            return (
                <span style={{ color: 'var(--text-color)', userSelect: 'none', width: '120px', textAlign: 'center' }}>
                    {options.first} - {options.last} of {options.totalRecords}
                </span>
            );
        }
    };

    const code = {
        basic: `
<DataTable value={customers1} paginator paginatorTemplate={template1} first={first1} rows={rows1} onPage={onCustomPage1} responsiveLayout="scroll">
    <Column field="name" header="Name" style={{ width: '25%' }}></Column>
    <Column field="country.name" header="Country" style={{ width: '25%' }}></Column>
    <Column field="company" header="Company" style={{ width: '25%' }}></Column>
    <Column field="representative.name" header="Representative" style={{ width: '25%' }}></Column>
</DataTable>

<DataTable value={customers2} paginator paginatorTemplate={template2} first={first2} rows={rows2} onPage={onCustomPage2}
    paginatorClassName="justify-content-end" className="mt-6" responsiveLayout="scroll">
    <Column field="name" header="Name" style={{ width: '25%' }}></Column>
    <Column field="country.name" header="Country" style={{ width: '25%' }}></Column>
    <Column field="company" header="Company" style={{ width: '25%' }}></Column>
    <Column field="representative.name" header="Representative" style={{ width: '25%' }}></Column>
</DataTable>
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Ripple } from 'primereact/ripple';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import { CustomerService } from '../service/CustomerService';

const CustomPaginatorTemplateDoc = () => {
    const [customers1, setCustomers1] = useState([]);
    const [customers2, setCustomers2] = useState([]);
    const [first1, setFirst1] = useState(0);
    const [rows1, setRows1] = useState(5);
    const [first2, setFirst2] = useState(0);
    const [rows2, setRows2] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageInputTooltip, setPageInputTooltip] = useState('Press \\'Enter\\' key to go to this page.');

    

    const onCustomPage1 = (event) => {
        setFirst1(event.first);
        setRows1(event.rows);
        setCurrentPage(event.page + 1);
    }

    const onCustomPage2 = (event) => {
        setFirst2(event.first);
        setRows2(event.rows);
    }

    const onPageInputKeyDown = (event, options) => {
        if (event.key === 'Enter') {
            const page = parseInt(currentPage);
            if (page < 1 || page > options.totalPages) {
                setPageInputTooltip(\`Value must be between 1 and \${options.totalPages}.\`);
            }
            else {
                const first = currentPage ? options.rows * (page - 1) : 0;

                setFirst1(first);
                setPageInputTooltip('Press \\'Enter\\' key to go to this page.');
            }
        }
    }

    const onPageInputChange = (event) => {
        setCurrentPage(event.target.value);
    }

    useEffect(() => {
        CustomerService.getCustomersLarge().then(data => setCustomers1(data));
        CustomerService.getCustomersLarge().then(data => setCustomers2(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const template1 = {
        layout: 'PrevPageLink PageLinks NextPageLink RowsPerPageDropdown CurrentPageReport',
        'PrevPageLink': (options) => {
            return (
                <button type="button" className={options.className} onClick={options.onClick} disabled={options.disabled}>
                    <span className="p-3">Previous</span>
                    <Ripple />
                </button>
            )
        },
        'NextPageLink': (options) => {
            return (
                <button type="button" className={options.className} onClick={options.onClick} disabled={options.disabled}>
                    <span className="p-3">Next</span>
                    <Ripple />
                </button>
            )
        },
        'PageLinks': (options) => {
            if ((options.view.startPage === options.page && options.view.startPage !== 0) || (options.view.endPage === options.page && options.page + 1 !== options.totalPages)) {
                const className = classNames(options.className, { 'p-disabled': true });

                return <span className={className} style={{ userSelect: 'none' }}>...</span>;
            }

            return (
                <button type="button" className={options.className} onClick={options.onClick}>
                    {options.page + 1}
                    <Ripple />
                </button>
            )
        },
        'RowsPerPageDropdown': (options) => {
            const dropdownOptions = [
                { label: 5, value: 5 },
                { label: 10, value: 10 },
                { label: 20, value: 20 },
                { label: 50, value: 50 },
                { label: 'All', value: options.totalRecords }
            ];

            return <Dropdown value={options.value} options={dropdownOptions} onChange={options.onChange} />;
        },
        'CurrentPageReport': (options) => {
            return (
                <span className="mx-3" style={{ color: 'var(--text-color)', userSelect: 'none' }}>
                    Go to <InputText size="2" className="ml-1" value={currentPage} tooltip={pageInputTooltip}
                        onKeyDown={(e) => onPageInputKeyDown(e, options)} onChange={onPageInputChange}/>
                </span>
            )
        }
    };
    const template2 = {
        layout: 'RowsPerPageDropdown CurrentPageReport PrevPageLink NextPageLink',
        'RowsPerPageDropdown': (options) => {
            const dropdownOptions = [
                { label: 5, value: 5 },
                { label: 10, value: 10 },
                { label: 20, value: 20 },
                { label: 50, value: 50 }
            ];

            return (
                <React.Fragment>
                    <span className="mx-1" style={{ color: 'var(--text-color)', userSelect: 'none' }}>Items per page: </span>
                    <Dropdown value={options.value} options={dropdownOptions} onChange={options.onChange} />
                </React.Fragment>
            );
        },
        'CurrentPageReport': (options) => {
            return (
                <span style={{ color: 'var(--text-color)', userSelect: 'none', width: '120px', textAlign: 'center' }}>
                    {options.first} - {options.last} of {options.totalRecords}
                </span>
            )
        }
    };

    return (
        <div className="card">
            <DataTable value={customers1} paginator paginatorTemplate={template1} first={first1} rows={rows1} onPage={onCustomPage1} responsiveLayout="scroll">
                <Column field="name" header="Name" style={{ width: '25%' }}></Column>
                <Column field="country.name" header="Country" style={{ width: '25%' }}></Column>
                <Column field="company" header="Company" style={{ width: '25%' }}></Column>
                <Column field="representative.name" header="Representative" style={{ width: '25%' }}></Column>
            </DataTable>

            <DataTable value={customers2} paginator paginatorTemplate={template2} first={first2} rows={rows2} onPage={onCustomPage2}
                paginatorClassName="justify-content-end" className="mt-6" responsiveLayout="scroll">
                <Column field="name" header="Name" style={{ width: '25%' }}></Column>
                <Column field="country.name" header="Country" style={{ width: '25%' }}></Column>
                <Column field="company" header="Company" style={{ width: '25%' }}></Column>
                <Column field="representative.name" header="Representative" style={{ width: '25%' }}></Column>
            </DataTable>
        </div>
    );
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Ripple } from 'primereact/ripple';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import { CustomerService } from '../service/CustomerService';

const CustomPaginatorTemplateDoc = () => {
    const [customers1, setCustomers1] = useState([]);
    const [customers2, setCustomers2] = useState([]);
    const [first1, setFirst1] = useState(0);
    const [rows1, setRows1] = useState(5);
    const [first2, setFirst2] = useState(0);
    const [rows2, setRows2] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageInputTooltip, setPageInputTooltip] = useState('Press \\'Enter\\' key to go to this page.');

    

    const onCustomPage1 = (event) => {
        setFirst1(event.first);
        setRows1(event.rows);
        setCurrentPage(event.page + 1);
    }

    const onCustomPage2 = (event) => {
        setFirst2(event.first);
        setRows2(event.rows);
    }

    const onPageInputKeyDown = (event, options) => {
        if (event.key === 'Enter') {
            const page = parseInt(currentPage);
            if (page < 1 || page > options.totalPages) {
                setPageInputTooltip(\`Value must be between 1 and \${options.totalPages}.\`);
            }
            else {
                const first = currentPage ? options.rows * (page - 1) : 0;

                setFirst1(first);
                setPageInputTooltip('Press \\'Enter\\' key to go to this page.');
            }
        }
    }

    const onPageInputChange = (event) => {
        setCurrentPage(event.target.value);
    }

    useEffect(() => {
        CustomerService.getCustomersLarge().then(data => setCustomers1(data));
        CustomerService.getCustomersLarge().then(data => setCustomers2(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const template1 = {
        layout: 'PrevPageLink PageLinks NextPageLink RowsPerPageDropdown CurrentPageReport',
        'PrevPageLink': (options) => {
            return (
                <button type="button" className={options.className} onClick={options.onClick} disabled={options.disabled}>
                    <span className="p-3">Previous</span>
                    <Ripple />
                </button>
            )
        },
        'NextPageLink': (options) => {
            return (
                <button type="button" className={options.className} onClick={options.onClick} disabled={options.disabled}>
                    <span className="p-3">Next</span>
                    <Ripple />
                </button>
            )
        },
        'PageLinks': (options) => {
            if ((options.view.startPage === options.page && options.view.startPage !== 0) || (options.view.endPage === options.page && options.page + 1 !== options.totalPages)) {
                const className = classNames(options.className, { 'p-disabled': true });

                return <span className={className} style={{ userSelect: 'none' }}>...</span>;
            }

            return (
                <button type="button" className={options.className} onClick={options.onClick}>
                    {options.page + 1}
                    <Ripple />
                </button>
            )
        },
        'RowsPerPageDropdown': (options) => {
            const dropdownOptions = [
                { label: 5, value: 5 },
                { label: 10, value: 10 },
                { label: 20, value: 20 },
                { label: 50, value: 50 },
                { label: 'All', value: options.totalRecords }
            ];

            return <Dropdown value={options.value} options={dropdownOptions} onChange={options.onChange} />;
        },
        'CurrentPageReport': (options) => {
            return (
                <span className="mx-3" style={{ color: 'var(--text-color)', userSelect: 'none' }}>
                    Go to <InputText size="2" className="ml-1" value={currentPage} tooltip={pageInputTooltip}
                        onKeyDown={(e) => onPageInputKeyDown(e, options)} onChange={onPageInputChange}/>
                </span>
            )
        }
    };
    const template2 = {
        layout: 'RowsPerPageDropdown CurrentPageReport PrevPageLink NextPageLink',
        'RowsPerPageDropdown': (options) => {
            const dropdownOptions = [
                { label: 5, value: 5 },
                { label: 10, value: 10 },
                { label: 20, value: 20 },
                { label: 50, value: 50 }
            ];

            return (
                <React.Fragment>
                    <span className="mx-1" style={{ color: 'var(--text-color)', userSelect: 'none' }}>Items per page: </span>
                    <Dropdown value={options.value} options={dropdownOptions} onChange={options.onChange} />
                </React.Fragment>
            );
        },
        'CurrentPageReport': (options) => {
            return (
                <span style={{ color: 'var(--text-color)', userSelect: 'none', width: '120px', textAlign: 'center' }}>
                    {options.first} - {options.last} of {options.totalRecords}
                </span>
            )
        }
    };

    return (
        <div className="card">
            <DataTable value={customers1} paginator paginatorTemplate={template1} first={first1} rows={rows1} onPage={onCustomPage1} responsiveLayout="scroll">
                <Column field="name" header="Name" style={{ width: '25%' }}></Column>
                <Column field="country.name" header="Country" style={{ width: '25%' }}></Column>
                <Column field="company" header="Company" style={{ width: '25%' }}></Column>
                <Column field="representative.name" header="Representative" style={{ width: '25%' }}></Column>
            </DataTable>

            <DataTable value={customers2} paginator paginatorTemplate={template2} first={first2} rows={rows2} onPage={onCustomPage2}
                paginatorClassName="justify-content-end" className="mt-6" responsiveLayout="scroll">
                <Column field="name" header="Name" style={{ width: '25%' }}></Column>
                <Column field="country.name" header="Country" style={{ width: '25%' }}></Column>
                <Column field="company" header="Company" style={{ width: '25%' }}></Column>
                <Column field="representative.name" header="Representative" style={{ width: '25%' }}></Column>
            </DataTable>
        </div>
    );
}
        `,
        data: `
{
    id: 1000,
    name: 'James Butt',
    country: {
        name: 'Algeria',
        code: 'dz'
    },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png'
    },
    balance: 70663
},
...
       `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Pagination is enabled by setting paginator property to true, rows attribute defines the number of rows per page and pageLinks specify the the number of page links to display.</p>
            </DocSectionText>
            <div className="card">
                <DataTable value={customers1} paginator paginatorTemplate={template1} first={first1} rows={rows1} onPage={onCustomPage1} responsiveLayout="scroll">
                    <Column field="name" header="Name" style={{ width: '25%' }}></Column>
                    <Column field="country.name" header="Country" style={{ width: '25%' }}></Column>
                    <Column field="company" header="Company" style={{ width: '25%' }}></Column>
                    <Column field="representative.name" header="Representative" style={{ width: '25%' }}></Column>
                </DataTable>

                <DataTable value={customers2} paginator paginatorTemplate={template2} first={first2} rows={rows2} onPage={onCustomPage2} paginatorClassName="justify-content-end" className="mt-6" responsiveLayout="scroll">
                    <Column field="name" header="Name" style={{ width: '25%' }}></Column>
                    <Column field="country.name" header="Country" style={{ width: '25%' }}></Column>
                    <Column field="company" header="Company" style={{ width: '25%' }}></Column>
                    <Column field="representative.name" header="Representative" style={{ width: '25%' }}></Column>
                </DataTable>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
