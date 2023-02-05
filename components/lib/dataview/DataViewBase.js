import { ObjectUtils } from '../utils/Utils';

export const DataViewBase = {
    defaultProps: {
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
        onPage: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, DataViewBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, DataViewBase.defaultProps)
};

export const DataViewLayoutOptionsBase = {
    defaultProps: {
        __TYPE: 'DataViewLayoutOptions',
        id: null,
        style: null,
        className: null,
        layout: null,
        onChange: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, DataViewLayoutOptionsBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, DataViewLayoutOptionsBase.defaultProps)
};
