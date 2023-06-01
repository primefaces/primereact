import { ComponentBase } from '../componentbase/ComponentBase';

export const DataViewBase = ComponentBase.extend({
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
        loadingIcon: null,
        gutter: false,
        itemTemplate: null,
        onPage: null,
        children: undefined
    }
});

export const DataViewLayoutOptionsBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'DataViewLayoutOptions',
        id: null,
        style: null,
        className: null,
        layout: null,
        listIcon: null,
        gridIcon: null,
        onChange: null,
        children: undefined
    }
});
