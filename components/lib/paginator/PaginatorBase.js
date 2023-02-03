export const PaginatorDefaultProps = {
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
    currentPageReportTemplate: '({currentPage} of {totalPages})'
};

export const CurrentPageReportDefaultProps = {
    __TYPE: 'CurrentPageReport',
    pageCount: null,
    page: null,
    first: null,
    rows: null,
    totalRecords: null,
    reportTemplate: '({currentPage} of {totalPages})',
    template: null
};

export const FirstPageLinkDefaultProps = {
    __TYPE: 'FirstPageLink',
    disabled: false,
    onClick: null,
    template: null
};

export const JumpToPageInputDefaultProps = {
    __TYPE: 'JumbToPageInput',
    page: null,
    rows: null,
    pageCount: null,
    disabled: false,
    template: null,
    onChange: null
};

export const LastPageLinkDefaultProps = {
    __TYPE: 'LastPageLink',
    disabled: false,
    onClick: null,
    template: null
};

export const NextPageLinkDefaultProps = {
    __TYPE: 'NextPageLink',
    disabled: false,
    onClick: null,
    template: null
};

export const PageLinksDefaultProps = {
    __TYPE: 'PageLinks',
    value: null,
    page: null,
    rows: null,
    pageCount: null,
    links: null,
    template: null
};

export const PrevPageLinkDefaultProps = {
    __TYPE: 'PrevPageLink',
    disabled: false,
    onClick: null,
    template: null
};

export const RowsPerPageDropdownDefaultProps = {
    __TYPE: 'RowsPerPageDropdown',
    options: null,
    value: null,
    page: null,
    pageCount: null,
    totalRecords: 0,
    appendTo: null,
    onChange: null,
    template: null,
    disabled: false
};
