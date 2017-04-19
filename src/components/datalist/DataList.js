import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Paginator } from '../paginator/Paginator';
import classNames from 'classnames'

export class Header extends Component {
    render() {
        return (
            <div className="ui-datalist-header ui-widget-header ui-corner-top">
                {this.props.children}
            </div>
        );
    }
}

export class Footer extends Component {
    render() {
        return (
            <div className="ui-datalist-footer ui-widget-header ui-corner-bottom">
                {this.props.children}
            </div>
        );
    }
}

export class DataList extends Component {

    static defaultProps = {
        value: null,
        rows: null,
        paginator: false,
        totalRecords: null,
        pageLinks: 5,
        rowsPerPageOptions: null,
        lazy: false,
        style: null,
        styleClass: null,
        paginatorPosition: "bottom",
        onLazyLoad: null,
        itemTemplate: null
    }

    static propsTypes = {
        value: PropTypes.array,
        rows: PropTypes.number,
        paginator: PropTypes.bool,
        totalRecords: PropTypes.number,
        pageLinks: PropTypes.number,
        rowsPerPageOptions: PropTypes.array,
        lazy: PropTypes.bool,
        style: PropTypes.string,
        styleClass: PropTypes.string,
        paginatorPosition: PropTypes.string,
        onLazyLoad: PropTypes.func,
        itemTemplate: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.state = {};
        this._first = 0;
        this._totalRecords = this.props.totalRecords;
        this._page = 0;
        this.value = this.props.value;
    }

    updatePaginator() {
        //total records
        this._totalRecords = this.props.lazy ? this._totalRecords : (this.value ? this.value.length : 0);

        //first
        if (this._totalRecords && this._first >= this._totalRecords) {
            let numberOfPages = Math.ceil(this._totalRecords / this.rows);
            this._first = Math.max((numberOfPages - 1) * this.props.rows, 0);
        }
    }

    paginate(event) {
        this._first = event.state.first;
        this._rows = event.state.rows;

        if (this.props.lazy) {
            if(this.props.onLazyLoad) {
                this.props.onLazyLoad(this.createLazyLoadMetadata())
            }
        }
        else {
            this.updateDataToRender(this.value);
        }
    }

    updateDataToRender(datasource) {
        if (this.props.paginator && datasource) {
            this.dataToRender = [];
            let startIndex = this.props.lazy ? 0 : this._first;
            for (let i = startIndex; i < (startIndex + this.props.rows); i++) {
                if (i >= datasource.length) {
                    break;
                }

                this.dataToRender.push(datasource[i]);
            }
        }
        else {
            this.dataToRender = datasource;
        }

        this.setState({ dataToRender: this.dataToRender });
    }

    isEmpty() {
        return !this.dataToRender || (this.dataToRender.length === 0);
    }

    createLazyLoadMetadata() {
        return {
            first: this._first,
            rows: this._rows
        };
    }

    getBlockableElement() {
        return this.dataListEl;
    }

    updateComponent() {
        if (this.props.paginator) {
            this.updatePaginator();
        }
        this.updateDataToRender(this.value);
    }

    componentWillMount() {
        this.updateComponent();
    }

    componentWillReceiveProps(nextProps) {
        var newValue = nextProps.value;
        if (newValue) {
            this.value = newValue;
            
            this.updateComponent();
        } 
    }

    componentDidMount() {
        if (this.props.lazy) {
            if(this.props.onLazyLoad) {
                this.props.onLazyLoad({
                    first: this._first,
                    rows: this._rows
                });
            }
        }
    }

    render() {
        var styleClass = classNames('ui-datalist ui-widget', this.props.styleClass);

        var paginator = (<Paginator rows={this.props.rows} first={this._first} totalRecords={this._totalRecords} pageLinkSize={this.props.pageLinks}
            styleClass="ui-paginator-bottom" rowsPerPageOptions={this.props.rowsPerPageOptions} onPageChange={this.paginate.bind(this)} />),
            topPaginator = (this.props.paginator && (this.props.paginatorPosition !== 'bottom' || this.props.paginatorPosition === 'both')) && paginator,
            bottomPaginator = (this.props.paginator && (this.props.paginatorPosition !== 'top' || this.props.paginatorPosition === 'both')) && paginator;

        var header = React.Children.map(this.props.children, (element, i) => {
                return (element && element.type === Header) && <Header> {element.props.children}</Header>
            }),
            footer = React.Children.map(this.props.children, (element, i) => {
                return (element && element.type === Footer) && <Footer> {element.props.children}</Footer>
            }),
            content = (
                <div className="ui-datalist-content ui-widget-content">
                    <ul className="ui-datalist-data">
                    {
                        this.state.dataToRender && this.state.dataToRender.map((val, i) => {
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
            <div ref={(el) => this.dataListEl = ReactDOM.findDOMNode(el)} style={this.props.style} className={styleClass}>
                {header}
                {topPaginator}
                {content}
                {bottomPaginator}
                {footer}
            </div>
        );
    }
}