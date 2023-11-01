import * as React from 'react';
import { ObjectUtils, useMergeProps } from '../utils/Utils';
import { CurrentPageReportBase } from './PaginatorBase';
import { PrimeReactContext } from '../api/Api';

export const CurrentPageReport = React.memo((inProps) => {
    const mergeProps = useMergeProps();
    const context = React.useContext(PrimeReactContext);
    const props = CurrentPageReportBase.getProps(inProps, context);

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

    const currentProps = mergeProps(
        {
            className: 'p-paginator-current'
        },
        props.ptm('current', { hostName: props.hostName })
    );

    const element = <span {...currentProps}>{text}</span>;

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
