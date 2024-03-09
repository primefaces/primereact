import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    loadingIcon: 'p-dataview-loading-icon',
    loadingOverlay: 'p-dataview-loading-overlay p-component-overlay',
    emptyMessage: 'p-dataview-emptymessage',
    header: 'p-dataview-header',
    footer: 'p-dataview-footer',
    content: 'p-dataview-content',
    grid: ({ props }) =>
        classNames('p-grid grid', {
            'p-nogutter grid-nogutter': !props.gutter
        }),
    root: ({ props }) =>
        classNames('p-dataview p-component', {
            [`p-dataview-${props.layout}`]: !!props.layout,
            'p-dataview-loading': props.loading
        })
};

const styles = `
@layer primereact {
    .p-dataview-loading {
        position: relative;
        min-height: 4rem;
    }

    .p-dataview .p-dataview-loading-overlay {
        position: absolute;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
`;

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
        listTemplate: null,
        onPage: null,
        children: undefined
    },
    css: {
        classes,
        styles
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
    },
    css: {
        classes: {
            root: 'p-dataview p-component p-dataview-layout-options p-selectbutton p-buttonset',
            listButton: ({ props }) => classNames('p-button p-button-icon-only', { 'p-highlight': props.layout === 'list' }),
            gridButton: ({ props }) => classNames('p-button p-button-icon-only', { 'p-highlight': props.layout === 'grid' })
        }
    }
});
