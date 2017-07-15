import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'

export class Paginator extends Component {

    static defaultProps = {
        totalRecords: 0,
        rows: 0,
        first: 0,
        pageLinkSize: 5,
        rowsPerPageOptions: null,
        style: null,
        className: null,
        onPageChange: null
    }

    static propsTypes = {
        totalRecords: PropTypes.number,
        rows: PropTypes.number,
        first: PropTypes.number,
        pageLinkSize: PropTypes.number,
        rowsPerPageOptions: PropTypes.array,
        style: PropTypes.string,
        className: PropTypes.string,
        onPageChange: PropTypes.func
    }
    
    constructor(props) {
        super(props);
        this.changePageToFirst = this.changePageToFirst.bind(this);
        this.changePageToPrev = this.changePageToPrev.bind(this);
        this.changePageToNext = this.changePageToNext.bind(this);
        this.changePageToLast = this.changePageToLast.bind(this);
        this.onRowsChange = this.onRowsChange.bind(this);
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

    changeState(first, rows) {
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
        this.changeState(0, this.props.rows);
        event.preventDefault();
    }

    changePageToPrev(event) {
        this.changeState(this.props.first - this.props.rows, this.props.rows);
        event.preventDefault();
    }

    onPageLinkClick(event, pageLink) {
        this.changeState(pageLink * this.props.rows, this.props.rows);
        event.preventDefault();
    }

    changePageToNext(event) {
        this.changeState(this.props.first + this.props.rows, this.props.rows);
        event.preventDefault();
    }

    changePageToLast(event) {
        this.changeState((this.getPageCount() - 1) * this.props.rows, this.props.rows);
        event.preventDefault();
    }

    onRowsChange(event) {
        this.changeState(0, this.props.rowsPerPageOptions[event.target.selectedIndex]);
        event.preventDefault();
    }

    createPaginatorElement(className, callback, disabled, icon) {
        var styleClass = classNames(className, 'ui-paginator-element ui-state-default ui-corner-all', {
            'ui-state-disabled': disabled
        });
        var iconClassName = classNames('fa', icon);

        return <a href="#" className={styleClass} onClick={callback} tabIndex={disabled ? -1 : null}>
                    <span className={iconClassName}></span>
               </a>;
    }

    createPageLinkElements() {
        var pageLinks = this.updatePageLinks();
        var pageLinkElements = pageLinks.map((pageLink, i) => {
                            var pageClassName = classNames('ui-paginator-page ui-paginator-element ui-state-default ui-corner-all', {
                                'ui-state-active': ((pageLink - 1) === this.getPage())
                            });

                            return <a key={pageLink} href="#" className={pageClassName} onClick={(e) => this.onPageLinkClick(e, pageLink)}>{pageLink}</a>;
                        });

        return <span className="ui-paginator-pages">{pageLinkElements}</span>;
    }

    createRowsPerPageDropdown() {
        if(this.props.rowsPerPageOptions) {
             var options = this.props.rowsPerPageOptions.map((opt, i) => <option key={opt} value={opt}>{opt}</option>);
            return <select className="ui-paginator-rpp-options ui-widget ui-state-default" onChange={this.onRowsChange.bind(this)}>{options}</select>;
        }
        else {
            return null;
        }
    }

    render() {
        var className = classNames('ui-paginator ui-widget ui-widget-header ui-unselectable-text', this.props.className);
        var firstLink = this.createPaginatorElement('ui-paginator-first', this.changePageToFirst, this.isFirstPage(), 'fa-step-backward');
        var prevLink = this.createPaginatorElement('ui-paginator-prev', this.changePageToPrev, this.isFirstPage(), 'fa-backward');
        var nextLink = this.createPaginatorElement('ui-paginator-next', this.changePageToNext, this.isLastPage(), 'fa-forward');
        var lastLink = this.createPaginatorElement('ui-paginator-last', this.changePageToLast, this.isLastPage(), 'fa-step-forward');
        var pageLinks = this.createPageLinkElements();
        var rpp = this.createRowsPerPageDropdown();

        return (
            <div className={className} style={this.props.style}>
                {firstLink}
                {prevLink}
                {pageLinks}
                {nextLink}
                {lastLink}
                {rpp}
            </div>
        );
    }
}