import React, { useEffect, useState } from 'react';
import { FilterMatchMode, FilterOperator } from '../../components/lib/api/Api';
import { Button } from '../../components/lib/button/Button';
import { Column } from '../../components/lib/column/Column';
import { DataTable } from '../../components/lib/datatable/DataTable';
import { InputText } from '../../components/lib/inputtext/InputText';
import { ProgressBar } from '../../components/lib/progressbar/ProgressBar';
import { Tag } from '../../components/lib/tag/Tag';
import { classNames } from '../../components/lib/utils/Utils';
import { CustomerService } from '../../service/CustomerService';

const ThemeSection = (props) => {
    const [customers, setCustomers] = useState(null);
    const [selectedCustomers, setSelectedCustomers] = useState(null);
    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        representative: { value: null, matchMode: FilterMatchMode.IN },
        date: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
        balance: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        status: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        activity: { value: null, matchMode: FilterMatchMode.BETWEEN }
    });
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [loading, setLoading] = useState(true);

    const changeTheme = (name, color) => {
        let newTheme = name + '-' + (props.dark ? 'dark' : 'light') + '-' + color;

        props.onThemeChange(newTheme);
    };

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

    const formatDate = (value) => {
        return value.toLocaleDateString('en-US', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    };

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const renderHeader = () => {
        return (
            <div className="flex flex-column sm:flex-row sm:justify-content-between sm:align-items-center">
                <h5 className="m-0">Customers</h5>
                <span className="p-input-icon-left mt-3 sm:mt-0 w-full sm:w-auto">
                    <i className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Search" className="w-full" />
                </span>
            </div>
        );
    };

    const countryBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <img alt="flag" src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`flag flag-${rowData.country.code}`} width={30} />
                <span className="vertical-align-middle ml-2">{rowData.country.name}</span>
            </React.Fragment>
        );
    };

    const representativeBodyTemplate = (rowData) => {
        const representative = rowData.representative;

        return (
            <React.Fragment>
                <img alt={representative.name} src={`https://primefaces.org/cdn/primereact/images/avatar/${representative.image}`} width={32} style={{ verticalAlign: 'middle' }} />
                <span className="vertical-align-middle ml-2">{representative.name}</span>
            </React.Fragment>
        );
    };

    const dateBodyTemplate = (rowData) => {
        return formatDate(rowData.date);
    };

    const balanceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.balance);
    };

    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.status} severity={getSeverity(rowData.status)} className="text-sm font-bold" />;
    };

    const activityBodyTemplate = (rowData) => {
        return <ProgressBar value={rowData.activity} showValue={false} style={{ height: '6px' }}></ProgressBar>;
    };

    const actionBodyTemplate = () => {
        return <Button type="button" icon="pi pi-cog" className="p-button-text"></Button>;
    };

    const getSeverity = (status) => {
        switch (status) {
            case 'unqualified':
                return 'danger';

            case 'qualified':
                return 'success';

            case 'new':
                return 'info';

            case 'negotiation':
                return 'warning';

            case 'renewal':
                return null;
        }
    };

    const header = renderHeader();

    return (
        <section className="landing-themes py-8 ">
            <div className="section-header">Themes</div>
            <p className="section-detail">Crafted on a design-agnostic infrastructure, choose from a vast amount of themes such as material, bootstrap, tailwind, primeone or develop your own.</p>
            <div className="flex flex-wrap justify-content-center">
                <button type="button" className={classNames('font-medium linkbox mr-3 mt-4', { active: props.theme && props.theme.startsWith('lara') })} onClick={() => changeTheme('lara', 'indigo')}>
                    PrimeOne
                </button>
                <button type="button" className={classNames('font-medium linkbox mr-3 mt-4', { active: props.theme && props.theme.startsWith('md') })} onClick={() => changeTheme('md', 'indigo')}>
                    Material
                </button>
                <button type="button" className={classNames('font-medium linkbox mr-3 mt-4', { active: props.theme && props.theme.startsWith('bootstrap4') })} onClick={() => changeTheme('bootstrap4', 'blue')}>
                    Bootstrap
                </button>
                <a type="button" className="font-medium p-link linkbox mt-4" href="https://designer.primereact.org">
                    more...
                </a>
            </div>
            <div className="themes-main flex mt-7 justify-content-center px-5 lg:px-8" style={{ backgroundImage: `url(/images/landing-new/wave-${props.dark ? 'dark-alt' : 'light-alt'}.svg)`, backgroundSize: 'cover' }}>
                <div className="box overflow-hidden z-1 p-5 table-container">
                    <DataTable
                        value={customers}
                        paginator
                        className="p-datatable-customers"
                        header={header}
                        rows={5}
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport"
                        dataKey="id"
                        rowHover
                        selection={selectedCustomers}
                        onSelectionChange={(e) => setSelectedCustomers(e.value)}
                        filters={filters}
                        filterDisplay="menu"
                        loading={loading}
                        globalFilterFields={['name', 'country.name', 'representative.name', 'balance', 'status']}
                        emptyMessage="No customers found."
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
                    >
                        <Column selectionMode="multiple" style={{ width: '3rem' }}></Column>
                        <Column field="name" header="Name" sortable style={{ minWidth: '14rem' }} />
                        <Column field="country.name" header="Country" sortable filterField="country.name" style={{ minWidth: '14rem' }} body={countryBodyTemplate} filterPlaceholder="Search by country" />
                        <Column sortable header="Agent" sortField="representative.name" filterField="representative" style={{ minWidth: '14rem' }} body={representativeBodyTemplate} />
                        <Column field="date" header="Date" sortable filterField="date" dataType="date" style={{ minWidth: '8rem' }} body={dateBodyTemplate} />
                        <Column field="balance" header="Balance" sortable dataType="numeric" style={{ minWidth: '8rem' }} body={balanceBodyTemplate} />
                        <Column field="status" header="Status" sortable style={{ minWidth: '10rem' }} body={statusBodyTemplate} />
                        <Column field="activity" header="Activity" sortable showFilterMatchModes={false} style={{ minWidth: '6rem' }} body={activityBodyTemplate} />
                        <Column headerStyle={{ width: '4rem', textAlign: 'center' }} bodyStyle={{ textAlign: 'center', overflow: 'visible' }} body={actionBodyTemplate} />
                    </DataTable>
                </div>
            </div>
        </section>
    );
};

export default ThemeSection;
