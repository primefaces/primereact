import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils/ClassNames';
import { FirstPageLink } from './FirstPageLink';
import { NextPageLink } from './NextPageLink';
import { PrevPageLink } from './PrevPageLink';
import { LastPageLink } from './LastPageLink';
import { PageLinks } from './PageLinks';
import { RowsPerPageDropdown } from './RowsPerPageDropdown';
import { CurrentPageReport } from './CurrentPageReport';
import ObjectUtils from '../utils/ObjectUtils';

export class Paginator extends Component {

    static defaultProps = {
        totalRecords: 0,
        rows: 0,
        first: 0,
        pageLinkSize: 5,
        rowsPerPageOptions: null,
        style: null,
        className: null,
        template: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown',
        onPageChange: null,
        leftContent: null,
        rightContent: null,
        dropdownAppendTo: null,
        currentPageReportTemplate: '({currentPage} of {totalPages})',
        alwaysShow: true
    }

    static propTypes = {
        totalRecords: PropTypes.number,
        rows: PropTypes.number,
        first: PropTypes.number,
        pageLinkSize: PropTypes.number,
        rowsPerPageOptions: PropTypes.array,
        style: PropTypes.object,
        className: PropTypes.string,
        template: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
        onPageChange: PropTypes.func,
        leftContent: PropTypes.any,
        rightContent: PropTypes.any,
        dropdownAppendTo: PropTypes.any,
        currentPageReportTemplate: PropTypes.any,
        alwaysShow: PropTypes.bool
    }

    constructor(props) {
        super(props);
        this.changePageToFirst = this.changePageToFirst.bind(this);
        this.changePageToPrev = this.changePageToPrev.bind(this);
        this.changePageToNext = this.changePageToNext.bind(this);
        this.changePageToLast = this.changePageToLast.bind(this);
        this.onRowsChange = this.onRowsChange.bind(this);
        this.onPageLinkClick = this.onPageLinkClick.bind(this);
    }

    isFirstPage() {
        return this.getPage() === 0;
    }

    isLastPage() {
        return this.getPage() === this.getPageCount() - 1;
    }

    getPageCount() {
        return Math.ceil(this.props.totalRecords / this.props.rows) || 1;
    }

    calculatePageLinkBoundaries() {
        let numberOfPages = this.getPageCount();
        let visiblePages = Math.min(this.props.pageLinkSize, numberOfPages);

        //calculate range, keep current in middle if necessary
        let start = Math.max(0, Math.ceil(this.getPage() - ((visiblePages) / 2)));
        let end = Math.min(numberOfPages - 1, start + visiblePages - 1);

        //check when approaching to last page
        let delta = this.props.pageLinkSize - (end - start + 1);
        start = Math.max(0, start - delta);

        return [start, end];
    }

    updatePageLinks() {
        let pageLinks = [];
        let boundaries = this.calculatePageLinkBoundaries();
        let start = boundaries[0];
        let end = boundaries[1];

        for (let i = start; i <= end; i++) {
            pageLinks.push(i + 1);
        }

        return pageLinks;
    }

    changePage(first, rows) {
        let pc = this.getPageCount();
        let p = Math.floor(first / rows);

        if (p >= 0 && p < pc) {
            let newPageState = {
                first: first,
                rows: rows,
                page: p,
                pageCount: pc
            };

            if (this.props.onPageChange) {
                this.props.onPageChange(newPageState);
            }
        }
    }

    getPage() {
        return Math.floor(this.props.first / this.props.rows);
    }

    changePageToFirst(event) {
        this.changePage(0, this.props.rows);
        event.preventDefault();
    }

    changePageToPrev(event) {
        this.changePage(this.props.first - this.props.rows, this.props.rows);
        event.preventDefault();
    }

    onPageLinkClick(event) {
        this.changePage((event.value - 1) * this.props.rows, this.props.rows);
    }

    changePageToNext(event) {
        this.changePage(this.props.first + this.props.rows, this.props.rows);
        event.preventDefault();
    }

    changePageToLast(event) {
        this.changePage((this.getPageCount() - 1) * this.props.rows, this.props.rows);
        event.preventDefault();
    }

    onRowsChange(event) {
        this.changePage(0, event.value);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.rows !== prevProps.rows) {
            this.changePage(0, this.props.rows);
        }
        else if (this.getPage() > 0 && prevProps.totalRecords !== this.props.totalRecords && this.props.first >= this.props.totalRecords) {
            this.changePage((this.getPageCount() - 1) * this.props.rows, this.props.rows);
        }
    }

    renderElement(key, template) {
        let element;

        switch (key) {
            case 'FirstPageLink':
                element = <FirstPageLink key={key} onClick={this.changePageToFirst} disabled={this.isFirstPage()} template={template} />;
                break;

            case 'PrevPageLink':
                element = <PrevPageLink key={key} onClick={this.changePageToPrev} disabled={this.isFirstPage()} template={template} />;
                break;

            case 'NextPageLink':
                element = <NextPageLink key={key} onClick={this.changePageToNext} disabled={this.isLastPage()} template={template} />;
                break;

            case 'LastPageLink':
                element = <LastPageLink key={key} onClick={this.changePageToLast} disabled={this.isLastPage()} template={template} />;
                break;

            case 'PageLinks':
                element = <PageLinks key={key} value={this.updatePageLinks()} page={this.getPage()} rows={this.props.rows} pageCount={this.getPageCount()} onClick={this.onPageLinkClick} template={template} />;
                break;

            case 'RowsPerPageDropdown':
                element = <RowsPerPageDropdown key={key} value={this.props.rows} page={this.getPage()} pageCount={this.getPageCount()} totalRecords={this.props.totalRecords} options={this.props.rowsPerPageOptions} onChange={this.onRowsChange} appendTo={this.props.dropdownAppendTo} template={template} />;
                break;

            case 'CurrentPageReport':
                element = <CurrentPageReport reportTemplate={this.props.currentPageReportTemplate} key={key}
                    page={this.getPage()} pageCount={this.getPageCount()} first={this.props.first}
                    rows={this.props.rows} totalRecords={this.props.totalRecords} template={template}/>;
                break;

            default:
                element = null;
                break;
        }

        return element;
    }

    renderElements() {
        const template = this.props.template;

        if (typeof template === 'object') {
            return template.layout ?
                template.layout.split(' ').map((value) => {
                    const key = value.trim();
                    return this.renderElement(key, template[key]);
                })
                :
                Object.entries(template).map(([key, _template]) => {
                    return this.renderElement(key, _template);
                });
        }

        return template.split(' ').map((value) => {
            return this.renderElement(value.trim());
        });
    }

    render() {
        if (!this.props.alwaysShow && this.getPageCount() === 1) {
            return null;
        }
        else {
            const className = classNames('p-paginator p-component', this.props.className);
            const leftContent = ObjectUtils.getJSXElement(this.props.leftContent, this.props);
            const rightContent = ObjectUtils.getJSXElement(this.props.rightContent, this.props);

            const elements = this.renderElements();
            const leftElement = leftContent && <div className="p-paginator-left-content">{leftContent}</div>;
            const rightElement = rightContent && <div className="p-paginator-right-content">{rightContent}</div>;

            return (
                <div className={className} style={this.props.style}>
                    {leftElement}
                    {elements}
                    {rightElement}
                </div>
            );
        }
    }
}
