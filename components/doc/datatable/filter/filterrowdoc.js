import React, { useEffect, useState } from 'react';
import { CustomerService } from '../../../../service/CustomerService';
import { FilterMatchMode } from '../../../lib/api/Api';
import { Column } from '../../../lib/column/Column';
import { DataTable } from '../../../lib/datatable/DataTable';
import { Dropdown } from '../../../lib/dropdown/Dropdown';
import { InputText } from '../../../lib/inputtext/InputText';
import { MultiSelect } from '../../../lib/multiselect/MultiSelect';
import { TriStateCheckbox } from '../../../lib/tristatecheckbox/TriStateCheckbox';
import { classNames } from '../../../lib/utils/Utils';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function FilterRowDoc(props) {
    const [customers, setCustomers] = useState(null);
    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        'country.name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        representative: { value: null, matchMode: FilterMatchMode.IN },
        status: { value: null, matchMode: FilterMatchMode.EQUALS },
        verified: { value: null, matchMode: FilterMatchMode.EQUALS }
    });
    const [globalFilterValue2, setGlobalFilterValue2] = useState('');
    const [loading, setLoading] = useState(true);
    const representatives = [
        { name: 'Amy Elsner', image: 'amyelsner.png' },
        { name: 'Anna Fali', image: 'annafali.png' },
        { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
        { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
        { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
        { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
        { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
        { name: 'Onyama Limba', image: 'onyamalimba.png' },
        { name: 'Stephen Shaw', image: 'stephenshaw.png' },
        { name: 'XuXue Feng', image: 'xuxuefeng.png' }
    ];

    const statuses = ['unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'];

    useEffect(() => {
        CustomerService.getCustomersLarge().then((data) => {
            setCustomers(getCustomers(data));
            setLoading(false);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const getCustomers = (data) => {
        return [...(data || [])].map((d) => {
            d.date = new Date(d.date);

            return d;
        });
    };

    const onGlobalFilterChange2 = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue2(value);
    };

    const renderHeader2 = () => {
        return (
            <div className="flex justify-content-end">
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={globalFilterValue2} onChange={onGlobalFilterChange2} placeholder="Keyword Search" />
                </span>
            </div>
        );
    };

    const countryBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <img alt="flag" src={'/images/flag/flag_placeholder.png'} className={`flag flag-${rowData.country.code}`} width={30} />
                <span className="vertical-align-middle ml-2">{rowData.country.name}</span>
            </React.Fragment>
        );
    };

    const representativeBodyTemplate = (rowData) => {
        const representative = rowData.representative;

        return (
            <React.Fragment>
                <img alt={representative.name} src={`/images/avatar/${representative.image}`} width={32} style={{ verticalAlign: 'middle' }} />
                <span className="vertical-align-middle ml-2">{representative.name}</span>
            </React.Fragment>
        );
    };

    const representativesItemTemplate = (option) => {
        return (
            <div className="p-multiselect-representative-option">
                <img alt={option.name} src={`/images/avatar/${option.image}`} width={32} style={{ verticalAlign: 'middle' }} />
                <span className="vertical-align-middle ml-2">{option.name}</span>
            </div>
        );
    };

    const statusBodyTemplate = (rowData) => {
        return <span className={`customer-badge status-${rowData.status}`}>{rowData.status}</span>;
    };

    const statusItemTemplate = (option) => {
        return <span className={`customer-badge status-${option}`}>{option}</span>;
    };

    const verifiedBodyTemplate = (rowData) => {
        return <i className={classNames('pi', { 'true-icon pi-check-circle': rowData.verified, 'false-icon pi-times-circle': !rowData.verified })}></i>;
    };

    const representativeRowFilterTemplate = (options) => {
        return (
            <MultiSelect
                value={options.value}
                options={representatives}
                itemTemplate={representativesItemTemplate}
                onChange={(e) => options.filterApplyCallback(e.value)}
                optionLabel="name"
                placeholder="Any"
                className="p-column-filter"
                maxSelectedLabels={1}
            />
        );
    };

    const statusRowFilterTemplate = (options) => {
        return <Dropdown value={options.value} options={statuses} onChange={(e) => options.filterApplyCallback(e.value)} itemTemplate={statusItemTemplate} placeholder="Select a Status" className="p-column-filter" showClear />;
    };

    const verifiedRowFilterTemplate = (options) => {
        return <TriStateCheckbox value={options.value} onChange={(e) => options.filterApplyCallback(e.value)} />;
    };

    const header = renderHeader2();

    const code = {
        basic: `
<DataTable value={customers} paginator className="p-datatable-customers" rows={10}
    dataKey="id" filters={filters} filterDisplay="row" loading={loading} responsiveLayout="scroll"
    globalFilterFields={['name', 'country.name', 'representative.name', 'status']} header={header} emptyMessage="No customers found.">
    <Column field="name" header="Name" filter filterPlaceholder="Search by name" style={{ minWidth: '12rem' }} />
    <Column header="Country" filterField="country.name" style={{ minWidth: '12rem' }} body={countryBodyTemplate} filter filterPlaceholder="Search by country" />
    <Column header="Agent" filterField="representative" showFilterMenu={false} filterMenuStyle={{ width: '14rem'}} style={{ minWidth: '14rem' }} body={representativeBodyTemplate}
        filter filterElement={representativeRowFilterTemplate} />
    <Column field="status" header="Status" showFilterMenu={false} filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '12rem' }} body={statusBodyTemplate} filter filterElement={statusRowFilterTemplate} />
    <Column field="verified" header="Verified" dataType="boolean" style={{ minWidth: '6rem' }} body={verifiedBodyTemplate} filter filterElement={verifiedRowFilterTemplate} />
</DataTable>
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { classNames } from 'primereact/utils';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { ProgressBar } from 'primereact/progressbar';
import { Calendar } from 'primereact/calendar';
import { MultiSelect } from 'primereact/multiselect';
import { Slider } from 'primereact/slider';
import { TriStateCheckbox } from 'primereact/tristatecheckbox';
import { CustomerService } from './service/CustomerService';
import './DataTableDemo.css';

export default function FilterRowDoc() {
    const [customers, setCustomers] = useState(null);
    const [filters, setFilters] = useState({
        'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
        'name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        'country.name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        'representative': { value: null, matchMode: FilterMatchMode.IN },
        'status': { value: null, matchMode: FilterMatchMode.EQUALS },
        'verified': { value: null, matchMode: FilterMatchMode.EQUALS }
    });
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [loading, setLoading] = useState(true);
    const representatives = [
        {name: "Amy Elsner", image: 'amyelsner.png'},
        {name: "Anna Fali", image: 'annafali.png'},
        {name: "Asiya Javayant", image: 'asiyajavayant.png'},
        {name: "Bernardo Dominic", image: 'bernardodominic.png'},
        {name: "Elwin Sharvill", image: 'elwinsharvill.png'},
        {name: "Ioni Bowcher", image: 'ionibowcher.png'},
        {name: "Ivan Magalhaes",image: 'ivanmagalhaes.png'},
        {name: "Onyama Limba", image: 'onyamalimba.png'},
        {name: "Stephen Shaw", image: 'stephenshaw.png'},
        {name: "XuXue Feng", image: 'xuxuefeng.png'}
    ];

    const statuses = [
        'unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'
    ];

    

    useEffect(() => {
        CustomerService.getCustomersLarge().then(data => { setCustomers(getCustomers(data)); setLoading(false) });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps


    const getCustomers = (data) => {
        return [...data || []].map(d => {
            d.date = new Date(d.date);
            return d;
        });
    }

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };
        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    }

    const renderHeader = () => {
        return (
            <div className="flex justify-content-end">
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </span>
            </div>
        )
    }

    const countryBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <img alt="flag" src="https://primereact.org/images/flag/flag_placeholder.png" className={\`flag flag-\${rowData.country.code}\`} width={30} />
                <span className="vertical-align-middle ml-2">{rowData.country.name}</span>
            </React.Fragment>
        );
    }

    const representativeBodyTemplate = (rowData) => {
        const representative = rowData.representative;
        return (
            <React.Fragment>
                <img alt={representative.name} src={\`https://primereact.org/images/avatar/\${representative.image}\`} width={32} style={{ verticalAlign: 'middle' }} />
                <span className="vertical-align-middle ml-2">{representative.name}</span>
            </React.Fragment>
        );
    }

    const representativesItemTemplate = (option) => {
        return (
            <div className="p-multiselect-representative-option">
                <img alt={option.name} src={\`https://primereact.org/images/avatar/\${option.image}\`} width={32} style={{ verticalAlign: 'middle' }} />
                <span className="vertical-align-middle ml-2">{option.name}</span>
            </div>
        );
    }

    const statusBodyTemplate = (rowData) => {
        return <span className={\`customer-badge status-\${rowData.status}\`}>{rowData.status}</span>;
    }

    const statusItemTemplate = (option) => {
        return <span className={\`customer-badge status-\${option}\`}>{option}</span>;
    }

    const verifiedBodyTemplate = (rowData) => {
        return <i className={classNames('pi', {'true-icon pi-check-circle': rowData.verified, 'false-icon pi-times-circle': !rowData.verified})}></i>;
    }

    const representativeRowFilterTemplate = (options) => {
        return <MultiSelect value={options.value} options={representatives} itemTemplate={representativesItemTemplate} onChange={(e) => options.filterApplyCallback(e.value)} optionLabel="name" placeholder="Any" className="p-column-filter" maxSelectedLabels={1} />;
    }

    const statusRowFilterTemplate = (options) => {
        return <Dropdown value={options.value} options={statuses} onChange={(e) => options.filterApplyCallback(e.value)} itemTemplate={statusItemTemplate} placeholder="Select a Status" className="p-column-filter" showClear />;
    }

    const verifiedRowFilterTemplate = (options) => {
        return <TriStateCheckbox value={options.value} onChange={(e) => options.filterApplyCallback(e.value)} />
    }

    const header = renderHeader();

    return (
        <div className="datatable-filter-demo">
            <div className="card">
                <p>Filters are displayed inline within a separate row.</p>
                <DataTable value={customers} paginator className="p-datatable-customers" rows={10}
                    dataKey="id" filters={filters} filterDisplay="row" loading={loading} responsiveLayout="scroll"
                    globalFilterFields={['name', 'country.name', 'representative.name', 'status']} header={header} emptyMessage="No customers found.">
                    <Column field="name" header="Name" filter filterPlaceholder="Search by name" style={{ minWidth: '12rem' }} />
                    <Column header="Country" filterField="country.name" style={{ minWidth: '12rem' }} body={countryBodyTemplate} filter filterPlaceholder="Search by country" />
                    <Column header="Agent" filterField="representative" showFilterMenu={false} filterMenuStyle={{ width: '14rem'}} style={{ minWidth: '14rem' }} body={representativeBodyTemplate}
                        filter filterElement={representativeRowFilterTemplate} />
                    <Column field="status" header="Status" showFilterMenu={false} filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '12rem' }} body={statusBodyTemplate} filter filterElement={statusRowFilterTemplate} />
                    <Column field="verified" header="Verified" dataType="boolean" style={{ minWidth: '6rem' }} body={verifiedBodyTemplate} filter filterElement={verifiedRowFilterTemplate} />
                </DataTable>
            </div>
        </div>
    );
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { classNames } from 'primereact/utils';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { ProgressBar } from 'primereact/progressbar';
import { Calendar } from 'primereact/calendar';
import { MultiSelect } from 'primereact/multiselect';
import { Slider } from 'primereact/slider';
import { TriStateCheckbox } from 'primereact/tristatecheckbox';
import { CustomerService } from './service/CustomerService';
import './DataTableDemo.css';

export default function FilterRowDoc() {
    const [customers, setCustomers] = useState(null);
    const [filters, setFilters] = useState({
        'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
        'name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        'country.name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        'representative': { value: null, matchMode: FilterMatchMode.IN },
        'status': { value: null, matchMode: FilterMatchMode.EQUALS },
        'verified': { value: null, matchMode: FilterMatchMode.EQUALS }
    });
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [loading, setLoading] = useState(true);
    const representatives = [
        {name: "Amy Elsner", image: 'amyelsner.png'},
        {name: "Anna Fali", image: 'annafali.png'},
        {name: "Asiya Javayant", image: 'asiyajavayant.png'},
        {name: "Bernardo Dominic", image: 'bernardodominic.png'},
        {name: "Elwin Sharvill", image: 'elwinsharvill.png'},
        {name: "Ioni Bowcher", image: 'ionibowcher.png'},
        {name: "Ivan Magalhaes",image: 'ivanmagalhaes.png'},
        {name: "Onyama Limba", image: 'onyamalimba.png'},
        {name: "Stephen Shaw", image: 'stephenshaw.png'},
        {name: "XuXue Feng", image: 'xuxuefeng.png'}
    ];

    const statuses = [
        'unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'
    ];

    

    useEffect(() => {
        CustomerService.getCustomersLarge().then(data => { setCustomers(getCustomers(data)); setLoading(false) });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps


    const getCustomers = (data) => {
        return [...data || []].map(d => {
            d.date = new Date(d.date);
            return d;
        });
    }

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };
        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    }

    const renderHeader = () => {
        return (
            <div className="flex justify-content-end">
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </span>
            </div>
        )
    }

    const countryBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <img alt="flag" src="https://primereact.org/images/flag/flag_placeholder.png" className={\`flag flag-\${rowData.country.code}\`} width={30} />
                <span className="vertical-align-middle ml-2">{rowData.country.name}</span>
            </React.Fragment>
        );
    }

    const representativeBodyTemplate = (rowData) => {
        const representative = rowData.representative;
        return (
            <React.Fragment>
                <img alt={representative.name} src={\`https://primereact.org/images/avatar/\${representative.image}\`} width={32} style={{ verticalAlign: 'middle' }} />
                <span className="vertical-align-middle ml-2">{representative.name}</span>
            </React.Fragment>
        );
    }

    const representativesItemTemplate = (option) => {
        return (
            <div className="p-multiselect-representative-option">
                <img alt={option.name} src={\`https://primereact.org/images/avatar/\${option.image}\`} width={32} style={{ verticalAlign: 'middle' }} />
                <span className="vertical-align-middle ml-2">{option.name}</span>
            </div>
        );
    }

    const statusBodyTemplate = (rowData) => {
        return <span className={\`customer-badge status-\${rowData.status}\`}>{rowData.status}</span>;
    }

    const statusItemTemplate = (option) => {
        return <span className={\`customer-badge status-\${option}\`}>{option}</span>;
    }

    const verifiedBodyTemplate = (rowData) => {
        return <i className={classNames('pi', {'true-icon pi-check-circle': rowData.verified, 'false-icon pi-times-circle': !rowData.verified})}></i>;
    }

    const representativeRowFilterTemplate = (options) => {
        return <MultiSelect value={options.value} options={representatives} itemTemplate={representativesItemTemplate} onChange={(e) => options.filterApplyCallback(e.value)} optionLabel="name" placeholder="Any" className="p-column-filter" maxSelectedLabels={1} />;
    }

    const statusRowFilterTemplate = (options) => {
        return <Dropdown value={options.value} options={statuses} onChange={(e) => options.filterApplyCallback(e.value)} itemTemplate={statusItemTemplate} placeholder="Select a Status" className="p-column-filter" showClear />;
    }

    const verifiedRowFilterTemplate = (options) => {
        return <TriStateCheckbox value={options.value} onChange={(e) => options.filterApplyCallback(e.value)} />
    }

    const header = renderHeader();

    return (
        <div className="datatable-filter-demo">
            <div className="card">
                <p>Filters are displayed inline within a separate row.</p>
                <DataTable value={customers} paginator className="p-datatable-customers" rows={10}
                    dataKey="id" filters={filters} filterDisplay="row" loading={loading} responsiveLayout="scroll"
                    globalFilterFields={['name', 'country.name', 'representative.name', 'status']} header={header} emptyMessage="No customers found.">
                    <Column field="name" header="Name" filter filterPlaceholder="Search by name" style={{ minWidth: '12rem' }} />
                    <Column header="Country" filterField="country.name" style={{ minWidth: '12rem' }} body={countryBodyTemplate} filter filterPlaceholder="Search by country" />
                    <Column header="Agent" filterField="representative" showFilterMenu={false} filterMenuStyle={{ width: '14rem'}} style={{ minWidth: '14rem' }} body={representativeBodyTemplate}
                        filter filterElement={representativeRowFilterTemplate} />
                    <Column field="status" header="Status" showFilterMenu={false} filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '12rem' }} body={statusBodyTemplate} filter filterElement={statusRowFilterTemplate} />
                    <Column field="verified" header="Verified" dataType="boolean" style={{ minWidth: '6rem' }} body={verifiedBodyTemplate} filter filterElement={verifiedRowFilterTemplate} />
                </DataTable>
            </div>
        </div>
    );
}
        `,
        extFiles: {
            'DataTableDemo.css': `
/* DataTableDemo.css */

.datatable-filter-demo .p-paginator .p-paginator-current {
    margin-left: auto;
}
.datatable-filter-demo .p-progressbar {
    height: 0.5rem;
    background-color: #d8dadc;
}
.datatable-filter-demo .p-progressbar .p-progressbar-value {
    background-color: #607d8b;
}
.datatable-filter-demo .p-datepicker {
    min-width: 25rem;
}
.datatable-filter-demo .p-datepicker td {
    font-weight: 400;
}
.datatable-filter-demo .p-datatable.p-datatable-customers .p-datatable-header {
    padding: 1rem;
    text-align: left;
    font-size: 1.5rem;
}
.datatable-filter-demo .p-datatable.p-datatable-customers .p-paginator {
    padding: 1rem;
}
.datatable-filter-demo .p-datatable.p-datatable-customers .p-datatable-thead > tr > th {
    text-align: left;
}
.datatable-filter-demo .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td {
    cursor: auto;
}
.datatable-filter-demo .p-datatable.p-datatable-customers .p-dropdown-label:not(.p-placeholder) {
    text-transform: uppercase;
}
        `
        },
        data: `
/* CustomerService */ 
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
                <p>Filters are displayed inline within a separate row.</p>{' '}
            </DocSectionText>
            <div className="card">
                <DataTable
                    value={customers}
                    paginator
                    className="p-datatable-customers"
                    rows={10}
                    dataKey="id"
                    filters={filters}
                    filterDisplay="row"
                    loading={loading}
                    responsiveLayout="scroll"
                    globalFilterFields={['name', 'country.name', 'representative.name', 'status']}
                    header={header}
                    emptyMessage="No customers found."
                >
                    <Column field="name" header="Name" filter filterPlaceholder="Search by name" style={{ minWidth: '12rem' }} />
                    <Column header="Country" filterField="country.name" style={{ minWidth: '12rem' }} body={countryBodyTemplate} filter filterPlaceholder="Search by country" />
                    <Column
                        header="Agent"
                        filterField="representative"
                        showFilterMenu={false}
                        filterMenuStyle={{ width: '14rem' }}
                        style={{ minWidth: '14rem' }}
                        body={representativeBodyTemplate}
                        filter
                        filterElement={representativeRowFilterTemplate}
                    />
                    <Column field="status" header="Status" showFilterMenu={false} filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '12rem' }} body={statusBodyTemplate} filter filterElement={statusRowFilterTemplate} />
                    <Column field="verified" header="Verified" dataType="boolean" style={{ minWidth: '6rem' }} body={verifiedBodyTemplate} filter filterElement={verifiedRowFilterTemplate} />
                </DataTable>
            </div>
            <DocSectionCode code={code} service={['CustomerService']} />
        </>
    );
}
