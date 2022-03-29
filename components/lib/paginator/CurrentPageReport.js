import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { ObjectUtils } from '../utils/Utils';

export const CurrentPageReport = memo((props) => {
    const report = {
        currentPage: props.page + 1,
        totalPages: props.pageCount,
        first: Math.min(props.first + 1, props.totalRecords),
        last: Math.min(props.first + props.rows, props.totalRecords),
        rows: props.rows,
        totalRecords: props.totalRecords
    };

    const text = props.reportTemplate.replace("{currentPage}", report.currentPage)
        .replace("{totalPages}", report.totalPages)
        .replace("{first}", report.first)
        .replace("{last}", report.last)
        .replace("{rows}", report.rows)
        .replace("{totalRecords}", report.totalRecords);

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

CurrentPageReport.defaultProps = {
    __TYPE: 'CurrentPageReport',
    pageCount: null,
    page: null,
    first: null,
    rows: null,
    totalRecords: null,
    reportTemplate: '({currentPage} of {totalPages})',
    template: null
}

CurrentPageReport.propTypes /* remove-proptypes */ = {
    __TYPE: PropTypes.string,
    pageCount: PropTypes.number,
    page: PropTypes.number,
    first: PropTypes.number,
    rows: PropTypes.number,
    totalRecords: PropTypes.number,
    reportTemplate: PropTypes.string,
    template: PropTypes.any
}
