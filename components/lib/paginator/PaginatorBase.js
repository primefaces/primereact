import { ComponentBase } from '../componentbase/ComponentBase';

export const PaginatorBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Paginator',
        totalRecords: 0,
        rows: 0,
        first: 0,
        pageLinkSize: 5,
        rowsPerPageOptions: null,
        alwaysShow: true,
        style: null,
        className: null,
        template: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown',
        onPageChange: null,
        leftContent: null,
        rightContent: null,
        dropdownAppendTo: null,
        currentPageReportTemplate: '({currentPage} of {totalPages})',
        children: undefined
    }
});

export const CurrentPageReportBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'CurrentPageReport',
        pageCount: null,
        page: null,
        first: null,
        rows: null,
        totalRecords: null,
        reportTemplate: '({currentPage} of {totalPages})',
        template: null,
        children: undefined
    }
});

export const FirstPageLinkBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'FirstPageLink',
        disabled: false,
        onClick: null,
        template: null,
        firstPageLinkIcon: null,
        children: undefined
    }
});

export const JumpToPageInputBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'JumpToPageInput',
        page: null,
        rows: null,
        pageCount: null,
        disabled: false,
        template: null,
        onChange: null,
        children: undefined
    }
});

export const LastPageLinkBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'LastPageLink',
        disabled: false,
        onClick: null,
        template: null,
        lastPageLinkIcon: null,
        children: undefined
    }
});

export const NextPageLinkBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'NextPageLink',
        disabled: false,
        onClick: null,
        template: null,
        nextPageLinkIcon: null,
        children: undefined
    }
});

export const PageLinksBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'PageLinks',
        value: null,
        page: null,
        rows: null,
        pageCount: null,
        links: null,
        template: null,
        children: undefined
    }
});

export const PrevPageLinkBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'PrevPageLink',
        disabled: false,
        onClick: null,
        template: null,
        prevPageLinkIcon: null,
        children: undefined
    }
});

export const RowsPerPageDropdownBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'RowsPerPageDropdown',
        options: null,
        value: null,
        page: null,
        pageCount: null,
        totalRecords: 0,
        appendTo: null,
        onChange: null,
        template: null,
        disabled: false,
        children: undefined
    }
});
