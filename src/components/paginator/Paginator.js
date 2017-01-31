import React, { Component, PropTypes } from 'react'
import DomHandler from '../utils/DomHandler';
import classNames from 'classnames'

export class Paginator extends Component {

    static defaultProps = {
        totalRecords: 0,
        rows: 0,
        first: 0,
        pageLinkSize: 5,
        rowsPerPageOptions: null,
        style: null,
        styleClass: null,
        onPageChange: null
    }

    static propsTypes = {
        totalRecords: PropTypes.number,
        rows: PropTypes.number,
        first: PropTypes.number,
        pageLinkSize: PropTypes.number,
        rowsPerPageOptions: PropTypes.array,
        style: PropTypes.string,
        styleClass: PropTypes.string,
        onPageChange: PropTypes.func,
    }
    
    constructor(props) {
        super(props);
        this.state = {};
        this._first = this.props.first;
        this._totalRecords = this.props.totalRecords;
        this._rows = this.props.rows;
    }

    isFirstPage() {
        return this.getPage() === 0;
    }

    isLastPage() {
        return this.getPage() === this.getPageCount() - 1;
    }

    getPageCount() {
        return Math.ceil(this._totalRecords / this._rows) || 1;
    }

    calculatePageLinkBoundaries() {
        let numberOfPages = this.getPageCount(),
            visiblePages = Math.min(this.props.pageLinkSize, numberOfPages);

        //calculate range, keep current in middle if necessary
        let start = Math.max(0, Math.ceil(this.getPage() - ((visiblePages) / 2))),
            end = Math.min(numberOfPages - 1, start + visiblePages - 1);

        //check when approaching to last page
        var delta = this.props.pageLinkSize - (end - start + 1);
        start = Math.max(0, start - delta);

        return [start, end];
    }

    updatePageLinks() {
        this.pageLinks = [];
        let boundaries = this.calculatePageLinkBoundaries(),
            start = boundaries[0],
            end = boundaries[1];

        for (let i = start; i <= end; i++) {
            this.pageLinks.push(i + 1);
        }

        this.setState({pageLinks: this.pageLinks});
    }

    changePage(p, event) {
        if(DomHandler.hasClass(event.target, 'ui-state-active')) {
            return false;
        }

        var pc = this.getPageCount();

        if (p >= 0 && p < pc) {
            this._first = this._rows * p;
            var state = {
                page: p,
                first: this._first,
                rows: this._rows,
                pageCount: pc
            };
            this.updatePageLinks();

            if (this.props.onPageChange) {
                this.props.onPageChange({
                    originalEvent: event,
                    state: state
                })
            }
        }

        if (event) {
            event.preventDefault();
        }
    }

    getPage() {
        return Math.floor(this._first / this._rows);
    }

    changePageToFirst(event) {
        this.changePage(0, event);
    }

    changePageToPrev(event) {
        this.changePage(this.getPage() - 1, event);
    }

    changePageToNext(event) {
        this.changePage(this.getPage() + 1, event);
    }

    changePageToLast(event) {
        this.changePage(this.getPageCount() - 1, event);
    }

    onRppChange(event) {
        this._rows = this.props.rowsPerPageOptions[event.target.selectedIndex];
        this.changePageToFirst(event);
    }
 
    componentWillMount() {
        this.updatePageLinks();
    }

    componentWillReceiveProps(nextProps) {
        this._first = nextProps.first;
        this._totalRecords = nextProps.totalRecords;
        this._rows = nextProps.rows;

        this.updatePageLinks();
    }

    render() {
        var styleClass = classNames('ui-paginator ui-widget ui-widget-header ui-unselectable-text', this.props.styleClass);

        var firstStyleClass = classNames('ui-paginator-first ui-paginator-element ui-state-default ui-corner-all', {
            'ui-state-disabled': this.isFirstPage()
        }),
            firstLink = (<a href="#" className={firstStyleClass} onClick={this.changePageToFirst.bind(this)} tabIndex={this.isFirstPage() ? -1 : null}>
                <span className="fa fa-step-backward"></span>
            </a>);

        var prevStyleClass = classNames('ui-paginator-prev ui-paginator-element ui-state-default ui-corner-all', {
            'ui-state-disabled': this.isFirstPage()
        }),
            prevLink = (<a href="#" className={prevStyleClass} onClick={this.changePageToPrev.bind(this)} tabIndex={this.isFirstPage() ? -1 : null}>
                <span className="fa fa-backward"></span>
            </a>);

        var $this = this,
            pageLinkElements = (<span className="ui-paginator-pages">
                {
                    this.state.pageLinks.map(function (pageLink, i) {
                        var pageStyleClass = classNames('ui-paginator-page ui-paginator-element ui-state-default ui-corner-all', {
                            'ui-state-active': (pageLink - 1 === $this.getPage())
                        });

                        return (<a key={'pagelink_' + i} href="#" className={pageStyleClass} onClick={(e) => $this.changePage(pageLink - 1, e)}>{pageLink}</a>);
                    })
                }
            </span>);

        var nextStyleClass = classNames('ui-paginator-next ui-paginator-element ui-state-default ui-corner-all', {
            'ui-state-disabled': this.isLastPage()
        }),
            nextLink = (<a href="#" className={nextStyleClass} onClick={this.changePageToNext.bind(this)} tabIndex={this.isLastPage() ? -1 : null} >
                <span className="fa fa-forward"></span>
            </a >);

        var lastStyleClass = classNames('ui-paginator-last ui-paginator-element ui-state-default ui-corner-all', {
            'ui-state-disabled': this.isLastPage()
        }),
            lastLink = (<a href="#" className={lastStyleClass} onClick={this.changePageToLast.bind(this)} tabIndex={this.isLastPage() ? -1 : null} >
                <span className="fa fa-step-forward"></span>
            </a >);

        if (this.props.rowsPerPageOptions) {
            var rpp = (<select className="ui-paginator-rpp-options ui-widget ui-state-default" onChange={this.onRppChange.bind(this)} >
                {
                    this.props.rowsPerPageOptions.map((opt, i) => <option key={'opt_' + i} value={opt} > {opt}</option>)
                }

            </select>);
        }

        return (
            <div className={styleClass} style={this.props.style}>
                {firstLink}
                {prevLink}
                {pageLinkElements}
                {nextLink}
                {lastLink}
                {rpp}
            </div>
        );
    }
}