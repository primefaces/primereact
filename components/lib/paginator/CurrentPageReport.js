import * as React from 'react';
import { ObjectUtils } from '../utils/Utils';
import { CurrentPageReportBase } from './PaginatorBase';

export const CurrentPageReport = React.memo((inProps) => {
    const props = CurrentPageReportBase.getProps(inProps);

    const report = {
        currentPage: props.page + 1,
        totalPages: props.pageCount,
        first: Math.min(props.first + 1, props.totalRecords),
        last: Math.min(props.first + props.rows, props.totalRecords),
        rows: props.rows,
        totalRecords: props.totalRecords
    };

    const text = props.reportTemplate
        .replace('{currentPage}', report.currentPage)
        .replace('{totalPages}', report.totalPages)
        .replace('{first}', report.first)
        .replace('{last}', report.last)
        .replace('{rows}', report.rows)
        .replace('{totalRecords}', report.totalRecords);

    const element = <span className="p-paginator-current">{text}</span>;

    if (props.template) {
        const defaultOptions = {
            ...report,
            ...{
                className: 'p-paginator-current',
                element,
                props
            }
        };

        return ObjectUtils.getJSXElement(props.template, defaultOptions);
    }

    return element;
});

CurrentPageReport.displayName = 'CurrentPageReport';
