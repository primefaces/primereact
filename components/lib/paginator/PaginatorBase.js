import { ObjectUtils } from '../utils/Utils';

export const PaginatorBase = {
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
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, PaginatorBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, PaginatorBase.defaultProps)
};

export const CurrentPageReportBase = {
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
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, CurrentPageReportBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, CurrentPageReportBase.defaultProps)
};

export const FirstPageLinkBase = {
    defaultProps: {
        __TYPE: 'FirstPageLink',
        disabled: false,
        onClick: null,
        template: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, FirstPageLinkBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, FirstPageLinkBase.defaultProps)
};

export const JumpToPageInputBase = {
    defaultProps: {
        __TYPE: 'JumbToPageInput',
        page: null,
        rows: null,
        pageCount: null,
        disabled: false,
        template: null,
        onChange: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, JumpToPageInputBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, JumpToPageInputBase.defaultProps)
};

export const LastPageLinkBase = {
    defaultProps: {
        __TYPE: 'LastPageLink',
        disabled: false,
        onClick: null,
        template: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, LastPageLinkBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, LastPageLinkBase.defaultProps)
};

export const NextPageLinkBase = {
    defaultProps: {
        __TYPE: 'NextPageLink',
        disabled: false,
        onClick: null,
        template: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, NextPageLinkBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, NextPageLinkBase.defaultProps)
};

export const PageLinksBase = {
    defaultProps: {
        __TYPE: 'PageLinks',
        value: null,
        page: null,
        rows: null,
        pageCount: null,
        links: null,
        template: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, PageLinksBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, PageLinksBase.defaultProps)
};

export const PrevPageLinkBase = {
    defaultProps: {
        __TYPE: 'PrevPageLink',
        disabled: false,
        onClick: null,
        template: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, PrevPageLinkBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, PrevPageLinkBase.defaultProps)
};

export const RowsPerPageDropdownBase = {
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
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, RowsPerPageDropdownBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, RowsPerPageDropdownBase.defaultProps)
};
