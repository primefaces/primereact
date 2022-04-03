import * as React from 'react';
import PrimeReact, { localeOption } from '../api/Api';
import { Paginator } from '../paginator/Paginator';
import { Ripple } from '../ripple/Ripple';
import { classNames, ObjectUtils } from '../utils/Utils';

export const DataViewLayoutOptions = React.memo((props) => {

    const changeLayout = (event, layoutMode) => {
        props.onChange({
            originalEvent: event,
            value: layoutMode
        });
        event.preventDefault();
    }

    const otherProps = ObjectUtils.findDiffKeys(props, DataViewLayoutOptions.defaultProps);
    const className = classNames('p-dataview-layout-options p-selectbutton p-buttonset', props.className);
    const buttonListClass = classNames('p-button p-button-icon-only', { 'p-highlight': props.layout === 'list' });
    const buttonGridClass = classNames('p-button p-button-icon-only', { 'p-highlight': props.layout === 'grid' });

    return (
        <div id={props.id} style={props.style} className={className} {...otherProps}>
            <button type="button" className={buttonListClass} onClick={(event) => changeLayout(event, 'list')}>
                <i className="pi pi-bars"></i>
                <Ripple />
            </button>
            <button type="button" className={buttonGridClass} onClick={(event) => changeLayout(event, 'grid')}>
                <i className="pi pi-th-large"></i>
                <Ripple />
            </button>
        </div>
    )
});

export const DataViewItem = React.memo((props) => {
    return props.template(props.item, props.layout);
});

export const DataView = React.memo(React.forwardRef((props, ref) => {
    const [firstState, setFirstState] = React.useState(props.first);
    const [rowsState, setRowsState] = React.useState(props.rows);
    const first = props.onPage ? props.first : firstState;
    const rows = props.onPage ? props.rows : rowsState;

    const getItemRenderKey = (value) => {
        return props.dataKey ? ObjectUtils.resolveFieldData(value, props.dataKey) : null;
    }

    const getTotalRecords = () => {
        return props.totalRecords ? props.totalRecords : (props.value ? props.value.length : 0);
    }

    const createPaginator = (position) => {
        const className = classNames('p-paginator-' + position, props.paginatorClassName);
        const totalRecords = getTotalRecords();

        return (
            <Paginator first={first} rows={rows} pageLinkSize={props.pageLinkSize} className={className} onPageChange={onPageChange} template={props.paginatorTemplate}
                totalRecords={totalRecords} rowsPerPageOptions={props.rowsPerPageOptions} currentPageReportTemplate={props.currentPageReportTemplate}
                leftContent={props.paginatorLeft} rightContent={props.paginatorRight} alwaysShow={props.alwaysShowPaginator} dropdownAppendTo={props.paginatorDropdownAppendTo} />
        )
    }

    const onPageChange = (event) => {
        if (props.onPage) {
            props.onPage(event);
        }
        else {
            setFirstState(event.first)
            setRowsState(event.rows);
        }
    }

    const sort = () => {
        if (props.value) {
            const value = [...props.value];

            value.sort((data1, data2) => {
                let value1 = ObjectUtils.resolveFieldData(data1, props.sortField);
                let value2 = ObjectUtils.resolveFieldData(data2, props.sortField);
                return ObjectUtils.sort(value1, value2, props.sortOrder, PrimeReact.locale);
            });

            return value;
        }

        return null;
    }

    const createLoader = () => {
        if (props.loading) {
            let iconClassName = classNames('p-dataview-loading-icon pi-spin', props.loadingIcon);

            return (
                <div className="p-dataview-loading-overlay p-component-overlay">
                    <i className={iconClassName}></i>
                </div>
            )
        }

        return null;
    }

    const createTopPaginator = () => {
        if (props.paginator && (props.paginatorPosition !== 'bottom' || props.paginatorPosition === 'both')) {
            return createPaginator('top');
        }

        return null;
    }


    const createBottomPaginator = () => {
        if (props.paginator && (props.paginatorPosition !== 'top' || props.paginatorPosition === 'both')) {
            return createPaginator('bottom');
        }

        return null;
    }

    const createEmptyMessage = () => {
        if (!props.loading) {
            const content = props.emptyMessage || localeOption('emptyMessage');

            return <div className="p-col-12 col-12 p-dataview-emptymessage">{content}</div>
        }

        return null;
    }

    const createHeader = () => {
        if (props.header) {
            return <div className="p-dataview-header">{props.header}</div>
        }

        return null;
    }

    const createFooter = () => {
        if (props.footer) {
            return <div className="p-dataview-footer">{props.footer}</div>
        }

        return null;
    }

    const createItems = (value) => {
        if (ObjectUtils.isNotEmpty(value)) {
            if (props.paginator) {
                const currentFirst = props.lazy ? 0 : first;
                const totalRecords = getTotalRecords();
                const last = Math.min(rows + currentFirst, totalRecords);
                let items = [];

                for (let i = currentFirst; i < last; i++) {
                    const val = value[i];
                    val && items.push(<DataViewItem key={getItemRenderKey(value) || i} template={props.itemTemplate} layout={props.layout} item={val} />);
                }
                return items;
            }

            return (
                value.map((item, index) => {
                    return <DataViewItem key={getItemRenderKey(item) || index} template={props.itemTemplate} layout={props.layout} item={item} />
                })
            )
        }

        return createEmptyMessage();
    }

    const createContent = (value) => {
        const items = createItems(value);
        const gridClassName = classNames('p-grid grid', {
            'p-nogutter grid-nogutter': !props.gutter
        });

        return (
            <div className="p-dataview-content">
                <div className={gridClassName}>
                    {items}
                </div>
            </div>
        )
    }

    const processData = () => {
        let data = props.value;

        if (ObjectUtils.isNotEmpty(data) && props.sortField) {
            data = sort();
        }

        return data;
    }

    const data = processData();

    const otherProps = ObjectUtils.findDiffKeys(props, DataView.defaultProps);
    const className = classNames('p-dataview p-component', {
        [`p-dataview-${props.layout}`]: !!props.layout,
        'p-dataview-loading': props.loading
    }, props.className);
    const loader = createLoader();
    const topPaginator = createTopPaginator();
    const bottomPaginator = createBottomPaginator();
    const header = createHeader();
    const footer = createFooter();
    const content = createContent(data);

    return (
        <div id={props.id} style={props.style} className={className} {...otherProps}>
            {loader}
            {header}
            {topPaginator}
            {content}
            {bottomPaginator}
            {footer}
        </div>
    )
}));

DataViewLayoutOptions.displayName = 'DataViewLayoutOptions';
DataViewLayoutOptions.defaultProps = {
    __TYPE: 'DataViewLayoutOptions',
    id: null,
    style: null,
    className: null,
    layout: null,
    onChange: null
}

DataViewItem.displayName = 'DataViewItem';

DataView.displayName = 'DataView';
DataView.defaultProps = {
    __TYPE: 'DataView',
    id: null,
    header: null,
    footer: null,
    value: null,
    layout: 'list',
    dataKey: null,
    rows: null,
    first: 0,
    totalRecords: null,
    paginator: false,
    paginatorPosition: 'bottom',
    alwaysShowPaginator: true,
    paginatorClassName: null,
    paginatorTemplate: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown',
    paginatorLeft: null,
    paginatorRight: null,
    paginatorDropdownAppendTo: null,
    pageLinkSize: 5,
    rowsPerPageOptions: null,
    currentPageReportTemplate: '({currentPage} of {totalPages})',
    emptyMessage: null,
    sortField: null,
    sortOrder: null,
    style: null,
    className: null,
    lazy: false,
    loading: false,
    loadingIcon: 'pi pi-spinner',
    gutter: false,
    itemTemplate: null,
    onPage: null
}
