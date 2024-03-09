import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    root: 'p-paginator p-component',
    left: 'p-paginator-left-content',
    end: 'p-paginator-right-content',
    firstPageIcon: 'p-paginator-icon',
    firstPageButton: ({ disabled }) => classNames('p-paginator-first p-paginator-element p-link', { 'p-disabled': disabled }),
    prevPageIcon: 'p-paginator-icon',
    prevPageButton: ({ disabled }) => classNames('p-paginator-prev p-paginator-element p-link', { 'p-disabled': disabled }),
    nextPageIcon: 'p-paginator-icon',
    nextPageButton: ({ disabled }) => classNames('p-paginator-next p-paginator-element p-link', { 'p-disabled': disabled }),
    lastPageIcon: 'p-paginator-icon',
    lastPageButton: ({ disabled }) => classNames('p-paginator-last p-paginator-element p-link', { 'p-disabled': disabled }),
    pageButton: ({ pageLink, startPageInView, endPageInView, page }) =>
        classNames('p-paginator-page p-paginator-element p-link', {
            'p-paginator-page-start': pageLink === startPageInView,
            'p-paginator-page-end': pageLink === endPageInView,
            'p-highlight': pageLink - 1 === page
        }),
    pages: 'p-paginator-pages'
};

const styles = `
@layer primereact {
    .p-paginator {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
    
    .p-paginator-left-content {
        margin-right: auto;
    }
    
    .p-paginator-right-content {
        margin-left: auto;
    }
    
    .p-paginator-page,
    .p-paginator-next,
    .p-paginator-last,
    .p-paginator-first,
    .p-paginator-prev,
    .p-paginator-current {
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        line-height: 1;
        user-select: none;
        overflow: hidden;
        position: relative;
    }
    
    .p-paginator-element:focus {
        z-index: 1;
        position: relative;
    }
}
`;

export const PaginatorBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Paginator',
        __parentMetadata: null,
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
    },
    css: {
        classes,
        styles
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
        children: undefined,
        metaData: null,
        ptm: null
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
