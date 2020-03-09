import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {FirstPageLink} from './FirstPageLink';
import {NextPageLink} from './NextPageLink';
import {PrevPageLink} from './PrevPageLink';
import {LastPageLink} from './LastPageLink';
import {PageLinks} from './PageLinks';
import {RowsPerPageDropdown} from './RowsPerPageDropdown';
import {CurrentPageReport} from './CurrentPageReport';

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
        template: PropTypes.string,
        onPageChange: PropTypes.func,
        leftContent: PropTypes.any,
        rightContent: PropTypes.any,
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
        var numberOfPages = this.getPageCount();
        var visiblePages = Math.min(this.props.pageLinkSize, numberOfPages);

        //calculate range, keep current in middle if necessary
        var start = Math.max(0, Math.ceil(this.getPage() - ((visiblePages) / 2)));
        var end = Math.min(numberOfPages - 1, start + visiblePages - 1);

        //check when approaching to last page
        var delta = this.props.pageLinkSize - (end - start + 1);
        start = Math.max(0, start - delta);

        return [start, end];
    }

    updatePageLinks() {
        var pageLinks = [];
        var boundaries = this.calculatePageLinkBoundaries();
        var start = boundaries[0];
        var end = boundaries[1];

        for(var i = start; i <= end; i++) {
            pageLinks.push(i + 1);
        }

        return pageLinks;
    }

    changePage(first, rows) {
        var pc = this.getPageCount();
        var p = Math.floor(first / rows);

        if(p >= 0 && p < pc) {
            var newPageState = {
                first: first,
                rows: rows,
                page: p,
                pageCount: pc
            };

            if(this.props.onPageChange) {
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
        if (this.getPage() > 0 && prevProps.totalRecords !== this.props.totalRecords && this.props.first >= this.props.totalRecords) {
            this.changePage((this.getPageCount() - 1) * this.props.rows, this.props.rows);
        }
    }

    render() {
        if (!this.props.alwaysShow && this.getPageCount() === 1) {
            return null;
        }
        else {
            let className = classNames('p-paginator p-component p-unselectable-text', this.props.className);

            let paginatorElements = this.props.template.split(' ').map((value) => {
                let key = value.trim();
                let element;

                switch(key) {
                    case 'FirstPageLink':
                        element = <FirstPageLink key={key} onClick={this.changePageToFirst} disabled={this.isFirstPage()} />;
                    break;

                    case 'PrevPageLink':
                        element = <PrevPageLink key={key} onClick={this.changePageToPrev} disabled={this.isFirstPage()} />;
                    break;

                    case 'NextPageLink':
                        element = <NextPageLink key={key} onClick={this.changePageToNext} disabled={this.isLastPage()} />;
                    break;

                    case 'LastPageLink':
                        element = <LastPageLink key={key} onClick={this.changePageToLast} disabled={this.isLastPage()} />;
                    break;

                    case 'PageLinks':
                        element = <PageLinks key={key} value={this.updatePageLinks()} page={this.getPage()} onClick={this.onPageLinkClick} />;
                    break;

                    case 'RowsPerPageDropdown':
                        element = <RowsPerPageDropdown key={key} value={this.props.rows} options={this.props.rowsPerPageOptions} onChange={this.onRowsChange} />;
                    break;

                    case 'CurrentPageReport':
                        element = <CurrentPageReport template={this.props.currentPageReportTemplate} key={key} 
                                page={this.getPage()} pageCount={this.getPageCount()} first={this.props.first}
                                rows={this.props.rows} totalRecords={this.props.totalRecords} />;
                    break;

                    default:
                        element = null;
                    break;
                }

                return element;
            });

            let leftContent = this.props.leftContent && <div className="p-paginator-left-content" >{this.props.leftContent}</div>;
            let rightContent = this.props.rightContent && <div className="p-paginator-right-content" >{this.props.rightContent}</div>

            return (
                <div className={className} style={this.props.style}>
                    {leftContent}
                    {paginatorElements}
                    {rightContent}
                </div>
            );
        }
    }
}
