import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Paginator } from '../paginator/Paginator';
import classNames from 'classnames'

export class DataList extends Component {

    static defaultProps = {
        id: null,
        value: null,
        rows: null,
        first:0,
        paginator: false,
        totalRecords: null,
        pageLinks: 5,
        rowsPerPageOptions: null,
        lazy: false,
        style: null,
        className: null,
        paginatorPosition: "bottom",
        paginatorTemplate: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown',
        onLazyLoad: null,
        itemTemplate: null,
        header:null,
        footer:null
    }

    static propsTypes = {
        id: PropTypes.string,
        value: PropTypes.array,
        rows: PropTypes.number,
        first:PropTypes.number,
        paginator: PropTypes.bool,
        totalRecords: PropTypes.number,
        pageLinks: PropTypes.number,
        rowsPerPageOptions: PropTypes.array,
        lazy: PropTypes.bool,
        style: PropTypes.object,
        className: PropTypes.string,
        paginatorPosition: PropTypes.string,
        paginatorTemplate: PropTypes.string,
        onLazyLoad: PropTypes.func,
        itemTemplate: PropTypes.func,
        header:PropTypes.string,
        footer:PropTypes.string
    }

    constructor(props) {
        super(props);
        this.state = {first:props.first,rows:props.rows};
        this.onPageChange=this.onPageChange.bind(this)
    }

    getTotalRecords() {

        return this.props.value ? this.props.lazy ? this.props.totalRecords : this.props.value.length : 0;
    }

    createPaginator(position) {
        var className = 'ui-paginator-' + position;

        return <Paginator first={this.state.first} rows={this.state.rows} className={className}
                          totalRecords={this.getTotalRecords()} onPageChange={this.onPageChange} template={this.props.paginatorTemplate}/>;
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
    }

    processData() {
        let dataToRender =  [];
        if (this.props.paginator && this.props.value) {
            let startIndex = this.props.lazy ? 0 : this.state.first;
            for (let i = startIndex; i < (startIndex + this.props.rows); i++) {
                if (i >= this.props.value.length) {
                    break;
                }
                dataToRender.push(this.props.value[i]);
            }
        }
        else{
            dataToRender=this.props.value;
        }
        return dataToRender;
    }
    shouldComponentUpdate(nextProps, nextState) {
        if(this.props.lazy && nextProps.value === this.props.value)
            return false;
        else
            return true;
    }

    render() {
        let value =this.processData();
        var className = classNames('ui-datalist ui-widget', this.props.className);

        var topPaginator = (this.props.paginator && (this.props.paginatorPosition !== 'bottom' || this.props.paginatorPosition === 'both')) &&  this.createPaginator('top'),
            bottomPaginator = (this.props.paginator && (this.props.paginatorPosition !== 'top' || this.props.paginatorPosition === 'both')) && this.createPaginator('bottom');

        var header =this.props.header && <div className="ui-datalist-header ui-widget-header ui-corner-top"> {this.props.header}</div>,
            footer = this.props.footer && <div className="ui-datalist-footer ui-widget-header ui-corner-bottom"> {this.props.footer} </div>,
            content = (
                <div className="ui-datalist-content ui-widget-content">
                    <ul className="ui-datalist-data">
                    {
                        value && value.map((val, i) => {
                            var listItemContent = this.props.itemTemplate ? this.props.itemTemplate(val) : val;
                            return (<li key={i + '_datalistitem'}>
                                       {listItemContent}
                                    </li>);
                            })
                    }
                    </ul>
                </div>
            );

        return (
            <div id={this.props.id} ref={(el) => this.dataListEl = ReactDOM.findDOMNode(el)} style={this.props.style} className={className}>
                {header}
                {topPaginator}
                {content}
                {bottomPaginator}
                {footer}
            </div>
        );
    }
}