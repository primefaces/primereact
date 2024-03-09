import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';

export function TailwindDoc(props) {
    const code = {
        basic: `
const TRANSITIONS = {
    overlay: {
        timeout: 150,
        classNames: {
            enter: 'opacity-0 scale-75',
            enterActive: 'opacity-100 !scale-100 transition-transform transition-opacity duration-150 ease-in',
            exit: 'opacity-100',
            exitActive: '!opacity-0 transition-opacity duration-150 ease-linear'
        }
    }
};

const Tailwind = {
    datatable: {
        root: ({ props }) => ({
            className: classNames('relative', {
                'flex flex-col h-full': props.scrollable && props.scrollHeight === 'flex'
            })
        }),
        loadingoverlay: {
            className: classNames(
                'fixed w-full h-full t-0 l-0 bg-gray-100/40',
                'transition duration-200',
                'absolute flex items-center justify-center z-2',
                'dark:bg-gray-950/40' // Dark Mode
            )
        },
        loadingicon: 'w-8 h-8',
        wrapper: ({ props }) => ({
            className: classNames({
                relative: props.scrollable,
                'flex flex-col grow h-full': props.scrollable && props.scrollHeight === 'flex'
            })
        }),
        header: ({ props }) => ({
            className: classNames(
                'bg-slate-50 text-slate-700 border-gray-300 font-bold p-4',
                'dark:border-blue-900/40 dark:text-white/80 dark:bg-gray-900', // Dark Mode
                props.showGridlines ? 'border-x border-t border-b-0' : 'border-y border-x-0'
            )
        }),
        table: 'w-full border-spacing-0',
        thead: ({ context }) => ({
            className: classNames({
                'bg-slate-50 top-0 z-[1]': context.scrollable
            })
        }),
        tbody: ({ props, context }) => ({
            className: classNames({
                'sticky z-[1]': props.frozenRow && context.scrollable
            })
        }),
        tfoot: ({ context }) => ({
            className: classNames({
                'bg-slate-50 bottom-0 z-[1]': context.scrollable
            })
        }),
        footer: {
            className: classNames(
                'bg-slate-50 text-slate-700 border-t-0 border-b border-x-0 border-gray-300 font-bold p-4',
                'dark:border-blue-900/40 dark:text-white/80 dark:bg-gray-900' // Dark Mode
            )
        },
        column: {
            headercell: ({ context, props }) => ({
                className: classNames(
                    'text-left border-0 border-b border-solid border-gray-300 dark:border-blue-900/40 font-bold',
                    'transition duration-200',
                    context?.size === 'small' ? 'p-2' : context?.size === 'large' ? 'p-5' : 'p-4', // Size
                    context.sorted ? 'bg-blue-50 text-blue-700' : 'bg-slate-50 text-slate-700', // Sort
                    context.sorted ? 'dark:text-white/80 dark:bg-blue-300' : 'dark:text-white/80 dark:bg-gray-900', // Dark Mode
                    {
                        'sticky z-[1]': props.frozen || props.frozen === '', // Frozen Columns
                        'border-x border-y': context?.showGridlines,
                        'overflow-hidden space-nowrap border-y relative bg-clip-padding': context.resizable // Resizable
                    }
                )
            }),
            headercontent: 'flex items-center',
            bodycell: ({ props, context }) => ({
                className: classNames(
                    'text-left border-0 border-b border-solid border-gray-300',
                    context?.size === 'small' ? 'p-2' : context?.size === 'large' ? 'p-5' : 'p-4', // Size
                    'dark:text-white/80 dark:border-blue-900/40', // Dark Mode
                    {
                        'sticky bg-inherit': props && (props.frozen || props.frozen === ''), // Frozen Columns
                        'border-x border-y': context.showGridlines
                    }
                )
            }),
            footercell: ({ context }) => ({
                className: classNames(
                    'text-left border-0 border-b border-solid border-gray-300 font-bold',
                    'bg-slate-50 text-slate-700',
                    'transition duration-200',
                    context?.size === 'small' ? 'p-2' : context?.size === 'large' ? 'p-5' : 'p-4', // Size
                    'dark:text-white/80 dark:bg-gray-900 dark:border-blue-900/40', // Dark Mode
                    {
                        'border-x border-y': context.showGridlines
                    }
                )
            }),
            sorticon: ({ context }) => ({
                className: classNames('ml-2', context.sorted ? 'text-blue-700 dark:text-white/80' : 'text-slate-700 dark:text-white/70')
            }),
            sortbadge: {
                className: classNames(
                    'flex items-center justify-center align-middle',
                    'rounded-[50%] w-[1.143rem] leading-[1.143rem] ml-2',
                    'text-blue-700 bg-blue-50',
                    'dark:text-white/80 dark:bg-blue-400' // Dark Mode
                )
            },
            columnfilter: 'inline-flex items-center ml-auto',
            filteroverlay: {
                className: classNames(
                    'bg-white text-gray-600 border-0 rounded-md min-w-[12.5rem]',
                    'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80' //Dark Mode
                )
            },
            filtermatchmodedropdown: {
                root: 'min-[0px]:flex mb-2'
            },
            filterrowitems: 'm-0 p-0 py-3 list-none ',
            filterrowitem: ({ context }) => ({
                className: classNames(
                    'm-0 py-3 px-5 bg-transparent',
                    'transition duration-200',
                    context?.highlighted ? 'text-blue-700 bg-blue-100 dark:text-white/80 dark:bg-blue-300' : 'text-gray-600 bg-transparent dark:text-white/80 dark:bg-transparent'
                )
            }),
            filteroperator: {
                className: classNames(
                    'px-5 py-3 border-b border-solid border-gray-300 text-slate-700 bg-slate-50 rounded-t-md',
                    'dark:border-blue-900/40 dark:text-white/80 dark:bg-gray-900' // Dark Mode
                )
            },
            filteroperatordropdown: {
                root: 'min-[0px]:flex'
            },
            filterconstraint: 'p-5 border-b border-solid border-gray-300 dark:border-blue-900/40',
            filteraddrule: 'py-3 px-5',
            filteraddrulebutton: {
                root: 'justify-center w-full min-[0px]:text-sm',
                label: 'flex-auto grow-0',
                icon: 'mr-2'
            },
            filterremovebutton: {
                root: 'ml-2',
                label: 'grow-0'
            },
            filterbuttonbar: 'flex items-center justify-between p-5',
            filterclearbutton: {
                root: 'w-auto min-[0px]:text-sm border-blue-500 text-blue-500 px-4 py-3'
            },
            filterapplybutton: {
                root: 'w-auto min-[0px]:text-sm px-4 py-3'
            },
            filtermenubutton: ({ context }) => ({
                className: classNames(
                    'inline-flex justify-center items-center cursor-pointer no-underline overflow-hidden relative ml-2',
                    'w-8 h-8 rounded-[50%]',
                    'transition duration-200',
                    'hover:text-slate-700 hover:bg-gray-300/20', // Hover
                    'focus:outline-0 focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', // Focus
                    'dark:text-white/70 dark:hover:text-white/80 dark:bg-gray-900', // Dark Mode
                    {
                        'bg-blue-50 text-blue-700': context.active
                    }
                )
            }),
            headerfilterclearbutton: ({ context }) => ({
                className: classNames('inline-flex justify-center items-center cursor-pointer no-underline overflow-hidden relative', 'text-left bg-transparent m-0 p-0 border-none select-none ml-2', {
                    invisible: !context.hidden
                })
            }),
            columnresizer: 'block absolute top-0 right-0 m-0 w-2 h-full p-0 cursor-col-resize border border-transparent',
            rowreordericon: 'cursor-move',
            roweditorinitbutton: {
                className: classNames(
                    'inline-flex items-center justify-center overflow-hidden relative',
                    'text-left cursor-pointer select-none',
                    'w-8 h-8 border-0 rounded-[50%]',
                    'transition duration-200',
                    'text-slate-700 border-transparent',
                    'focus:outline-0 focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', //Focus
                    'hover:text-slate-700 hover:bg-gray-300/20', //Hover
                    'dark:text-white/70' // Dark Mode
                )
            },
            roweditorsavebutton: {
                className: classNames(
                    'inline-flex items-center justify-center overflow-hidden relative',
                    'text-left cursor-pointer select-none',
                    'w-8 h-8 border-0 rounded-[50%]',
                    'transition duration-200',
                    'text-slate-700 border-transparent',
                    'focus:outline-0 focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', //Focus
                    'hover:text-slate-700 hover:bg-gray-300/20', //Hover
                    'dark:text-white/70' // Dark Mode
                )
            },
            roweditorcancelbutton: {
                className: classNames(
                    'inline-flex items-center justify-center overflow-hidden relative',
                    'text-left cursor-pointer select-none',
                    'w-8 h-8 border-0 rounded-[50%]',
                    'transition duration-200',
                    'text-slate-700 border-transparent',
                    'focus:outline-0 focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', //Focus
                    'hover:text-slate-700 hover:bg-gray-300/20', //Hover
                    'dark:text-white/70' // Dark Mode
                )
            },
            radiobuttonwrapper: {
                className: classNames('relative inline-flex cursor-pointer select-none align-bottom', 'w-6 h-6')
            },
            radiobutton: ({ context }) => ({
                className: classNames(
                    'flex justify-center items-center',
                    'border-2 w-6 h-6 text-gray-700 rounded-full transition duration-200 ease-in-out',
                    context.checked ? 'border-blue-500 bg-blue-500 dark:border-blue-400 dark:bg-blue-400' : 'border-gray-300 bg-white dark:border-blue-900/40 dark:bg-gray-900',
                    {
                        'hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': !context.disabled,
                        'cursor-default opacity-60': context.disabled
                    }
                )
            }),
            radiobuttonicon: ({ context }) => ({
                className: classNames('transform rounded-full', 'block w-3 h-3 transition duration-200 bg-white dark:bg-gray-900', {
                    'backface-hidden scale-10 invisible': context.checked === false,
                    'transform scale-100 visible': context.checked === true
                })
            }),
            headercheckboxwrapper: {
                className: classNames('cursor-pointer inline-flex relative select-none align-bottom', 'w-6 h-6')
            },
            headercheckbox: ({ context }) => ({
                className: classNames(
                    'flex items-center justify-center',
                    'border-2 w-6 h-6 text-gray-600 rounded-lg transition-colors duration-200',
                    context.checked ? 'border-blue-500 bg-blue-500 dark:border-blue-400 dark:bg-blue-400' : 'border-gray-300 bg-white dark:border-blue-900/40 dark:bg-gray-900',
                    {
                        'hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': !context.disabled,
                        'cursor-default opacity-60': context.disabled
                    }
                )
            }),
            headercheckboxicon: 'w-4 h-4 transition-all duration-200 text-white text-base dark:text-gray-900',
            checkboxwrapper: {
                className: classNames('cursor-pointer inline-flex relative select-none align-bottom', 'w-6 h-6')
            },
            checkbox: ({ context }) => ({
                className: classNames(
                    'flex items-center justify-center',
                    'border-2 w-6 h-6 text-gray-600 rounded-lg transition-colors duration-200',
                    context.checked ? 'border-blue-500 bg-blue-500 dark:border-blue-400 dark:bg-blue-400' : 'border-gray-300 bg-white dark:border-blue-900/40 dark:bg-gray-900',
                    {
                        'hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': !context.disabled,
                        'cursor-default opacity-60': context.disabled
                    }
                )
            }),
            checkboxicon: 'w-4 h-4 transition-all duration-200 text-white text-base dark:text-gray-900',
            transition: TRANSITIONS.overlay
        },
        bodyrow: ({ context }) => ({
            className: classNames(
                context.selected ? 'bg-blue-50 text-blue-700 dark:bg-blue-300' : 'bg-white text-gray-600 dark:bg-gray-900',
                context.stripedRows ? (context.index % 2 === 0 ? 'bg-white text-gray-600 dark:bg-gray-900' : 'bg-blue-50/50 text-gray-600 dark:bg-gray-950') : '',
                'transition duration-200',
                'focus:outline focus:outline-[0.15rem] focus:outline-blue-200 focus:outline-offset-[-0.15rem]', // Focus
                'dark:text-white/80 dark:focus:outline dark:focus:outline-[0.15rem] dark:focus:outline-blue-300 dark:focus:outline-offset-[-0.15rem]', // Dark Mode
                {
                    'cursor-pointer': context.selectable,
                    'hover:bg-gray-300/20 hover:text-gray-600': context.selectable && !context.selected // Hover
                }
            )
        }),
        rowexpansion: 'bg-white text-gray-600 dark:bg-gray-900 dark:text-white/80',
        rowgroupheader: {
            className: classNames('sticky z-[1]', 'bg-white text-gray-600', 'transition duration-200')
        },
        rowgroupfooter: {
            className: classNames('sticky z-[1]', 'bg-white text-gray-600', 'transition duration-200')
        },
        rowgrouptoggler: {
            className: classNames(
                'text-left m-0 p-0 cursor-pointer select-none',
                'inline-flex items-center justify-center overflow-hidden relative',
                'w-8 h-8 text-gray-500 border-0 bg-transparent rounded-[50%]',
                'transition duration-200',
                'dark:text-white/70' // Dark Mode
            )
        },
        rowgrouptogglericon: 'inline-block w-4 h-4',
        resizehelper: 'absolute hidden w-px z-10 bg-blue-500 dark:bg-blue-300'
    }
}
        `
    };

    const code2 = {
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
import { Tag } from 'primereact/tag';
import { TriStateCheckbox } from 'primereact/tristatecheckbox';
import { CustomerService } from './service/CustomerService';

export default function UnstyledDemo() {
    const [customers, setCustomers] = useState(null);
    const [filters, setFilters] = useState(null);
    const [loading, setLoading] = useState(false);
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [representatives] = useState([
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
    ]);
    const [statuses] = useState(['unqualified', 'qualified', 'new', 'negotiation', 'renewal']);

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

    useEffect(() => {
        CustomerService.getCustomersMedium().then((data) => {
            setCustomers(getCustomers(data));
            setLoading(false);
        });
        initFilters();
    }, []);

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

    const clearFilter = () => {
        initFilters();
    };

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const initFilters = () => {
        setFilters({
            global: { value: null, matchMode: FilterMatchMode.CONTAINS },
            name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
            'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
            representative: { value: null, matchMode: FilterMatchMode.IN },
            date: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
            balance: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
            status: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
            activity: { value: null, matchMode: FilterMatchMode.BETWEEN },
            verified: { value: null, matchMode: FilterMatchMode.EQUALS }
        });
        setGlobalFilterValue('');
    };

    const renderHeader = () => {
        return (
            <div className="flex justify-between">
                <Button type="button" icon="pi pi-filter-slash" label="Clear" outlined onClick={clearFilter} />
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </span>
            </div>
        );
    };

    const countryBodyTemplate = (rowData) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt="flag" src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={\`flag flag-\${rowData.country.code}\`} style={{ width: '24px' }} />
                <span>{rowData.country.name}</span>
            </div>
        );
    };

    const filterClearTemplate = (options) => {
        return <Button type="button" icon="pi pi-times" onClick={options.filterClearCallback} severity="secondary"></Button>;
    };

    const filterApplyTemplate = (options) => {
        return <Button type="button" icon="pi pi-check" onClick={options.filterApplyCallback} severity="success"></Button>;
    };

    const filterFooterTemplate = () => {
        return <div className="px-3 pt-0 pb-3 text-center">Filter by Country</div>;
    };

    const representativeBodyTemplate = (rowData) => {
        const representative = rowData.representative;

        return (
            <div className="flex align-items-center gap-2">
                <img alt={representative.name} src={\`https://primefaces.org/cdn/primereact/images/avatar/\${representative.image}\`} width="32" />
                <span>{representative.name}</span>
            </div>
        );
    };

    const representativeFilterTemplate = (options) => {
        return <MultiSelect value={options.value} options={representatives} itemTemplate={representativesItemTemplate} onChange={(e) => options.filterCallback(e.value)} optionLabel="name" placeholder="Any" className="p-column-filter" />;
    };

    const representativesItemTemplate = (option) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt={option.name} src={\`https://primefaces.org/cdn/primereact/images/avatar/\${option.image}\`} width="32" />
                <span>{option.name}</span>
            </div>
        );
    };

    const dateBodyTemplate = (rowData) => {
        return formatDate(rowData.date);
    };

    const dateFilterTemplate = (options) => {
        return <Calendar value={options.value} onChange={(e) => options.filterCallback(e.value, options.index)} dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" mask="99/99/9999" />;
    };

    const balanceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.balance);
    };

    const balanceFilterTemplate = (options) => {
        return <InputNumber value={options.value} onChange={(e) => options.filterCallback(e.value, options.index)} mode="currency" currency="USD" locale="en-US" />;
    };

    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.status} severity={getSeverity(rowData.status)} />;
    };

    const statusFilterTemplate = (options) => {
        return <Dropdown value={options.value} options={statuses} onChange={(e) => options.filterCallback(e.value, options.index)} itemTemplate={statusItemTemplate} placeholder="Select One" className="p-column-filter" showClear />;
    };

    const statusItemTemplate = (option) => {
        return <Tag value={option} severity={getSeverity(option)} />;
    };

    const activityBodyTemplate = (rowData) => {
        return <ProgressBar value={rowData.activity} showValue={false} style={{ height: '6px' }}></ProgressBar>;
    };

    const activityFilterTemplate = (options) => {
        return (
            <React.Fragment>
                <Slider value={options.value} onChange={(e) => options.filterCallback(e.value)} range className="m-3"></Slider>
                <div className="flex align-items-center justify-between px-2">
                    <span>{options.value ? options.value[0] : 0}</span>
                    <span>{options.value ? options.value[1] : 100}</span>
                </div>
            </React.Fragment>
        );
    };

    const verifiedBodyTemplate = (rowData) => {
        return <i className={classNames('pi', { 'text-green-500 pi-check-circle': rowData.verified, 'text-red-500 pi-times-circle': !rowData.verified })}></i>;
    };

    const verifiedFilterTemplate = (options) => {
        return (
            <div className="flex align-items-center gap-2">
                <label htmlFor="verified-filter" className="font-bold">
                    Verified
                </label>
                <TriStateCheckbox inputId="verified-filter" value={options.value} onChange={(e) => options.filterCallback(e.value)} />
            </div>
        );
    };

    const header = renderHeader();

    return (
        <div className="card">
            <DataTable value={customers} paginator showGridlines rows={10} loading={loading} dataKey="id" 
                    filters={filters} globalFilterFields={['name', 'country.name', 'representative.name', 'balance', 'status']} header={header}
                    emptyMessage="No customers found.">
                <Column field="name" header="Name" filter filterPlaceholder="Search by name" style={{ minWidth: '12rem' }} />
                <Column header="Country" filterField="country.name" style={{ minWidth: '12rem' }} body={countryBodyTemplate}
                    filter filterPlaceholder="Search by country" filterClear={filterClearTemplate} 
                    filterApply={filterApplyTemplate} filterFooter={filterFooterTemplate} />
                <Column header="Agent" filterField="representative" showFilterMatchModes={false} filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '14rem' }}
                    body={representativeBodyTemplate} filter filterElement={representativeFilterTemplate} />
                <Column header="Date" filterField="date" dataType="date" style={{ minWidth: '10rem' }} body={dateBodyTemplate} filter filterElement={dateFilterTemplate} />
                <Column header="Balance" filterField="balance" dataType="numeric" style={{ minWidth: '10rem' }} body={balanceBodyTemplate} filter filterElement={balanceFilterTemplate} />
                <Column field="status" header="Status" filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '12rem' }} body={statusBodyTemplate} filter filterElement={statusFilterTemplate} />
                <Column field="activity" header="Activity" showFilterMatchModes={false} style={{ minWidth: '12rem' }} body={activityBodyTemplate} filter filterElement={activityFilterTemplate} />
                <Column field="verified" header="Verified" dataType="boolean" bodyClassName="text-center" style={{ minWidth: '8rem' }} body={verifiedBodyTemplate} filter filterElement={verifiedFilterTemplate} />
            </DataTable>
        </div>
    );
}
    `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the{' '}
                    <Link href="/tailwind">Tailwind Customization</Link> section for an example.
                </p>
                <DocSectionCode code={code} hideToggleCode import hideStackBlitz />
                <p>A playground sample with the pre-built Tailwind theme.</p>
                <DocSectionCode code={code2} embedded service={['CustomerService']} />
            </DocSectionText>
        </>
    );
}
