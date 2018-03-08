import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Paginator } from '../paginator/Paginator';
import classNames from 'classnames';
import ObjectUtils from '../utils/ObjectUtils';

export class DataView extends Component {

    static defaultProps = {
        id: null,
        header:null,
        footer:null,
        value: null,
        layout: 'list',
        paginator: false,
        rows: null,
        totalRecords: null,
        pageLinks: 5,
        rowsPerPageOptions: null,
        paginatorPosition: "bottom",
        lazy: false,
        emptyMessage: 'No records found',
        sortField: null,
        sortOrder: null,
        style: null,
        className: null,
        filterBy: null,
        onLazyLoad: null,
        onPage: null,
        onSort: null,
        itemTemplate: null
    }

    static propsTypes = {
        id: PropTypes.string,
        header:PropTypes.string,
        footer:PropTypes.string,
        value: PropTypes.array,
        layout: PropTypes.string,
        paginator: PropTypes.bool,
        rows: PropTypes.number,
        totalRecords: PropTypes.number,
        pageLinks: PropTypes.number,
        rowsPerPageOptions: PropTypes.array,
        paginatorPosition: PropTypes.string,
        lazy: PropTypes.bool,
        emptyMessage: PropTypes.string,
        sortField: PropTypes.string,
        sortOrder: PropTypes.number,
        style: PropTypes.object,
        className: PropTypes.string,
        filterBy: PropTypes.string,
        onLazyLoad: PropTypes.func,
        onPage: PropTypes.func,
        onSort: PropTypes.func,
        itemTemplate: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.state = {
            first:0,
            rows: this.props.rows,
            totalRecords: -1,
            layout: this.props.layout,
            sortOrder: this.props.sortOrder,
            sortField: this.props.sortField
        };
        this.onPageChange=this.onPageChange.bind(this)
    }


    getTotalRecords() {
        return this.props.value ? this.props.lazy ? this.props.totalRecords : this.props.value.length : 0;
    }

    createPaginator(position) {
        var className = 'ui-paginator-' + position;

        return <Paginator first={this.state.first} rows={this.state.rows} className={className} onPageChange={this.onPageChange}
                          totalRecords={this.state.totalRecords === -1 ? this.getTotalRecords() : this.state.totalRecords}/>;
    }

    onPageChange(event) {
        this.setState({first:event.first,rows:event.rows});

        if (this.props.lazy) {
            if(this.props.onLazyLoad) {
                this.props.onLazyLoad({
                    first: event.first,
                    rows: event.rows
                })
            }
        }

        if(this.props.onPage) {
            this.props.onPage({
                first: event.first,
                rows: event.rows
            })
        }
    }

    changeLayout(event, layout) {
        this.setState({layout:layout});
        event.preventDefault();
    }

    isEmpty() {
        let data = this.filteredValue||this.props.value;
        return data === null || data.length === 0;
    }

    sort() {
        if (this.props.value) {
            this.props.value.sort((data1, data2) => {
                let value1 = ObjectUtils.resolveFieldData(data1, this.state.sortField);
                let value2 = ObjectUtils.resolveFieldData(data2, this.state.sortField);
                let result = null;

                if (value1 == null && value2 != null)
                    result = -1;
                else if (value1 != null && value2 == null)
                    result = 1;
                else if (value1 == null && value2 == null)
                    result = 0;
                else if (typeof value1 === 'string' && typeof value2 === 'string')
                    result = value1.localeCompare(value2);
                else
                    result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;
                return (this.state.sortOrder * result);

            });
        }
        if (this.props.lazy) {
            if(this.props.onLazyLoad) {
                this.props.onLazyLoad({
                    first: this.state.first,
                    rows: this.state.rows
                })
            }
        }

        if(this.props.onSort){
            this.props.onSort({
                field: this.state.sortField,
                order: this.state.sortOrder
            });
        }
    }

    filter(value) {
        if (this.props.value && this.props.value.length) {
            let searchFields = this.props.filterBy.split(',');
            this.filteredValue = ObjectUtils.filter(this.props.value, searchFields, value);

            if (this.filteredValue.length === this.props.value.length ) {
                this.filteredValue = null;
            }

            if (this.props.paginator) {
                this.setState({totalRecords : this.filteredValue ? this.filteredValue.length : this.props.value ? this.props.value.length : 0});
            }
        }

    }
    componentWillUpdate(nextProps){
        if (this.state.sortField!==nextProps.sortField || this.state.sortOrder!==nextProps.sortOrder) {
            this.setState({sortField: nextProps.sortField, sortOrder: nextProps.sortOrder});
        }
    }

    componentDidUpdate(){
        if(this.state.sortField){
            this.sort();
        }
    }

    render() {

        let value=this.props.paginator ? ((this.filteredValue||this.props.value).slice((this.props.lazy ? 0 : this.state.first),((this.props.lazy  ? 0 : this.state.first) + this.state.rows))):
        (this.filteredValue||this.props.value);

        let className = classNames('ui-dataview ui-widget', {'ui-dataview-list': (this.state.layout === 'list'),
            'ui-dataview-grid': (this.state.layout === 'grid')}, this.props.className);

        let topPaginator = (this.props.paginator && (this.props.paginatorPosition !== 'bottom' || this.props.paginatorPosition === 'both')) && this.createPaginator('top'),
            bottomPaginator = (this.props.paginator && (this.props.paginatorPosition !== 'top' || this.props.paginatorPosition === 'both')) && this.createPaginator('bottom');

        let emptyMessage =this.isEmpty() && <div className="ui-widget-content ui-g-12">{this.props.emptyMessage}</div>;


        let itemClassName = classNames('ui-g-12', (this.state.layout === 'list'?'':' ui-md-3'));

        let header = this.props.header && <div className="ui-dataview-header ui-widget-header ui-corner-top">{this.props.header}</div>,
            footer = this.props.footer && <div className="ui-dataview-footer ui-widget-header ui-corner-bottom"> {this.props.footer}</div>,
            content = (
                <div className="ui-dataview-content ui-widget-content">
                    <div className="ui-g">
                        {
                            value && value.map((val, i) => {
                                return this.props.itemTemplate ? React.cloneElement(this.props.itemTemplate(val,this.state.layout), {key : i + '_dataviewitem'}) : <div className={itemClassName} key={i + '_dataviewitem'}>{val}</div>;
                            })
                        }
                        {emptyMessage}
                    </div>
                </div>
            );

        return (
            <div id={this.props.id} style={this.props.style} className={className}>
                {header}
                {topPaginator}
                {content}
                {bottomPaginator}
                {footer}
            </div>
        );
    }
}

export class DataViewLayoutOptions extends Component {

    static defaultProps = {
        id: null,
        style: null,
        className: null,
        onClick: null
    }

    static propsTypes = {
        id: PropTypes.string,
        style: PropTypes.object,
        className: PropTypes.string,
        onClick: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.state = {layout:'list'};
        this.changeLayout=this.changeLayout.bind(this);
    }

    changeLayout(event, layout) {
        this.setState({layout:layout});
        if(this.props.onClick){
            this.props.onClick({
                originalEvent: event,
                layout: layout,
            })
        }
        event.preventDefault();
    }

    render() {

        let className = classNames('ui-dataview-layout-options ui-selectbutton ui-buttonset', this.props.className);
        let buttonListClass = classNames("ui-button ui-button-icon-only ui-state-default",{'ui-state-active': this.state.layout === 'list'});
        let buttonGridClass = classNames("ui-button ui-button-icon-only ui-state-default",{'ui-state-active': this.state.layout === 'grid'});
        return (
            <div id={this.props.id} style={this.props.style} className={className}>
                <a role={"button"} className={buttonListClass} onClick={(e)=>this.changeLayout(e, 'list')}>
                    <i className="fa fa-bars"></i>
                </a>
                <a role={"button"} className={buttonGridClass} onClick={(e)=>this.changeLayout(e, 'grid')}>
                    <i className="fa fa-th-large"></i>
                </a>
            </div>
        );
    }
}