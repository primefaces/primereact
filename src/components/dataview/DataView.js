import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Paginator} from '../paginator/Paginator';
import { classNames } from '../utils/ClassNames';
import ObjectUtils from '../utils/ObjectUtils';
import { Ripple } from '../ripple/Ripple';

export class DataViewLayoutOptions extends Component {

    static defaultProps = {
        id: null,
        style: null,
        className: null,
        layout: null,
        onChange: null
    }

    static propTypes = {
        id: PropTypes.string,
        style: PropTypes.object,
        className: PropTypes.string,
        layout: PropTypes.string,
        onChange: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.changeLayout = this.changeLayout.bind(this);
    }

    changeLayout(event, layoutMode) {
        this.props.onChange({
            originalEvent: event,
            value: layoutMode
        });
        event.preventDefault();
    }

    render() {
        const className = classNames('p-dataview-layout-options p-selectbutton p-buttonset', this.props.className);
        const buttonListClass = classNames('p-button p-button-icon-only', {'p-highlight': this.props.layout === 'list'});
        const buttonGridClass = classNames('p-button p-button-icon-only', {'p-highlight': this.props.layout === 'grid'});

        return (
            <div id={this.props.id} style={this.props.style} className={className}>
                <button type="button" className={buttonListClass} onClick={(event) => this.changeLayout(event, 'list')}>
                    <i className="pi pi-bars"></i>
                    <Ripple />
                </button>
                <button type="button" className={buttonGridClass} onClick={(event) => this.changeLayout(event, 'grid')}>
                    <i className="pi pi-th-large"></i>
                    <Ripple />
                </button>
            </div>
        );
    }
}

class DataViewItem extends Component {

    static defaultProps = {
        template: null,
        item: null,
        layout: null
    }

    static propTypes = {
        template: PropTypes.func,
        item: PropTypes.any,
        layout: PropTypes.string
    }

    render() {
        return this.props.template(this.props.item, this.props.layout);
    }

}

export class DataView extends Component {

    static defaultProps = {
        id: null,
        header: null,
        footer: null,
        value: null,
        layout: 'list',
        rows: null,
        first: 0,
        totalRecords: null,
        paginator: false,
        paginatorPosition: 'bottom',
        alwaysShowPaginator: true,
        paginatorClassName: null,
        paginatorTemplate: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown',
        paginatorLeft:null,
        paginatorRight: null,
        paginatorDropdownAppendTo: null,
        pageLinkSize: 5,
        rowsPerPageOptions: null,
        currentPageReportTemplate: '({currentPage} of {totalPages})',
        emptyMessage: 'No records found',
        sortField: null,
        sortOrder: null,
        style: null,
        className: null,
        lazy: false,
        loading: false,
        loadingIcon: 'pi pi-spinner',
        itemTemplate: null,
        onPage: null
    }

    static propTypes = {
        id: PropTypes.string,
        header: PropTypes.any,
        footer: PropTypes.any,
        value: PropTypes.array,
        layout: PropTypes.string,
        rows: PropTypes.number,
        first: PropTypes.number,
        totalRecords: PropTypes.number,
        paginator: PropTypes.bool,
        paginatorPosition: PropTypes.string,
        alwaysShowPaginator: PropTypes.bool,
        paginatorClassName: PropTypes.string,
        paginatorTemplate: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
        paginatorLeft: PropTypes.any,
        paginatorRight: PropTypes.any,
        paginatorDropdownAppendTo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        pageLinkSize: PropTypes.number,
        rowsPerPageOptions: PropTypes.array,
        currentPageReportTemplate: PropTypes.string,
        emptyMessage: PropTypes.string,
        sortField: PropTypes.string,
        sortOrder: PropTypes.number,
        style: PropTypes.object,
        className: PropTypes.string,
        lazy: PropTypes.bool,
        loading: PropTypes.bool,
        loadingIcon: PropTypes.string,
        itemTemplate: PropTypes.func.isRequired,
        onPage: PropTypes.func
    }

    constructor(props) {
        super(props);

        if (!this.props.onPage) {
            this.state = {
                first: this.props.first,
                rows: this.props.rows
            };
        }

        this.sortChange = false;
        this.onPageChange = this.onPageChange.bind(this)
    }

    getTotalRecords() {
        if (this.props.totalRecords)
            return this.props.totalRecords;
        else
            return this.props.value ? this.props.value.length : 0;
    }

    createPaginator(position) {
        const className = classNames('p-paginator-' + position, this.props.paginatorClassName);
        const first = this.props.onPage ? this.props.first: this.state.first;
        const rows = this.props.onPage ? this.props.rows : this.state.rows;
        const totalRecords = this.getTotalRecords();

        return (
            <Paginator first={first} rows={rows} pageLinkSize={this.props.pageLinkSize} className={className} onPageChange={this.onPageChange} template={this.props.paginatorTemplate}
                        totalRecords={totalRecords} rowsPerPageOptions={this.props.rowsPerPageOptions} currentPageReportTemplate={this.props.currentPageReportTemplate}
                        leftContent={this.props.paginatorLeft} rightContent={this.props.paginatorRight} alwaysShow={this.props.alwaysShowPaginator} dropdownAppendTo={this.props.paginatorDropdownAppendTo} />
        );
    }

    onPageChange(event) {
        if (this.props.onPage) {
            this.props.onPage({
                originalEvent: event,
                first: event.first,
                rows: event.rows
            });
        }
        else {
            this.setState({
                first:event.first,
                rows:event.rows
            });
        }
    }

    isEmpty() {
        return (!this.props.value || this.props.value.length === 0);
    }

    sort() {
        if (this.props.value) {
            const value = [...this.props.value];

            value.sort((data1, data2) => {
                let value1 = ObjectUtils.resolveFieldData(data1, this.props.sortField);
                let value2 = ObjectUtils.resolveFieldData(data2, this.props.sortField);
                let result = null;

                if (value1 == null && value2 != null)
                    result = -1;
                else if (value1 != null && value2 == null)
                    result = 1;
                else if (value1 == null && value2 == null)
                    result = 0;
                else if (typeof value1 === 'string' && typeof value2 === 'string')
                    result = value1.localeCompare(value2, undefined, { numeric: true });
                else
                    result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

                return (this.props.sortOrder * result);
            });

            return value;
        }
        else {
            return null;
        }
    }

    renderLoader() {
        if (this.props.loading) {
            let iconClassName = classNames('p-dataview-loading-icon pi-spin', this.props.loadingIcon);

            return (
                <div className="p-dataview-loading-overlay p-component-overlay">
                    <i className={iconClassName}></i>
                </div>
            );
        }

        return null;
    }

    renderTopPaginator() {
        if (this.props.paginator && (this.props.paginatorPosition !== 'bottom' || this.props.paginatorPosition === 'both')){
            return this.createPaginator('top');
        }

        return null;
    }

    renderBottomPaginator() {
        if (this.props.paginator && (this.props.paginatorPosition !== 'top' || this.props.paginatorPosition === 'both')) {
            return this.createPaginator('bottom');
        }

        return null;
    }

    renderEmptyMessage() {
        if (!this.props.loading) {
            return <div className="p-col-12 p-dataview-emptymessage">{this.props.emptyMessage}</div>;
        }

        return null;
    }

    renderHeader() {
        if (this.props.header) {
            return <div className="p-dataview-header">{this.props.header}</div>;
        }

        return null;
    }

    renderFooter() {
        if (this.props.footer) {
            return <div className="p-dataview-footer"> {this.props.footer}</div>;
        }

        return null;
    }

    renderItems(value) {
        if (value && value.length) {
            if (this.props.paginator) {
                const rows = this.props.onPage ? this.props.rows : this.state.rows;
                const first = this.props.lazy ? 0 : this.props.onPage ? this.props.first : this.state.first;
                const totalRecords = this.getTotalRecords();
                const last = Math.min(rows + first, totalRecords);
                let items = [];

                for (let i = first; i < last; i++) {
                    items.push(<DataViewItem key={i} template={this.props.itemTemplate} layout={this.props.layout} item={value[i]} />);
                }

                return items;
            }
            else {
                return (
                    value.map((item, index) => {
                        return <DataViewItem key={index} template={this.props.itemTemplate} layout={this.props.layout} item={item} />
                    })
                );
            }
        }
        else {
            return this.renderEmptyMessage();
        }
    }

    renderContent(value) {
        const items = this.renderItems(value);

        return (
            <div className="p-dataview-content">
                <div className="p-grid p-nogutter">
                    {items}
                </div>
            </div>
        );
    }

    processData() {
        let data = this.props.value;

        if (data && data.length) {
            if (this.props.sortField) {
                data = this.sort();
            }
        }

        return data;
    }

    render() {
        const value = this.processData();
        const className = classNames('p-dataview p-component', {'p-dataview-list': (this.props.layout === 'list'), 'p-dataview-grid': (this.props.layout === 'grid'), 'p-dataview-loading': this.props.loading}, this.props.className);
        const loader = this.renderLoader();
        const topPaginator = this.renderTopPaginator();
        const bottomPaginator = this.renderBottomPaginator() ;
        const header =  this.renderHeader();
        const footer = this.renderFooter();
        const content = this.renderContent(value);

        return (
            <div id={this.props.id} style={this.props.style} className={className}>
                {loader}
                {header}
                {topPaginator}
                {content}
                {bottomPaginator}
                {footer}
            </div>
        );
    }

}
