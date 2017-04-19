'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DataGrid = exports.Footer = exports.Header = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Paginator = require('../paginator/Paginator');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = exports.Header = function (_Component) {
    _inherits(Header, _Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'ui-datagrid-header ui-widget-header ui-corner-top' },
                this.props.children
            );
        }
    }]);

    return Header;
}(_react.Component);

var Footer = exports.Footer = function (_Component2) {
    _inherits(Footer, _Component2);

    function Footer() {
        _classCallCheck(this, Footer);

        return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
    }

    _createClass(Footer, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'ui-datagrid-footer ui-widget-header ui-corner-top' },
                this.props.children
            );
        }
    }]);

    return Footer;
}(_react.Component);

var DataGrid = exports.DataGrid = function (_Component3) {
    _inherits(DataGrid, _Component3);

    function DataGrid(props) {
        _classCallCheck(this, DataGrid);

        var _this3 = _possibleConstructorReturn(this, (DataGrid.__proto__ || Object.getPrototypeOf(DataGrid)).call(this, props));

        _this3.state = {};
        _this3._first = 0;
        _this3._totalRecords = _this3.props.totalRecords;
        _this3._page = 0;
        _this3.value = _this3.props.value;
        return _this3;
    }

    _createClass(DataGrid, [{
        key: 'updatePaginator',
        value: function updatePaginator() {
            //total records
            this._totalRecords = this.props.lazy ? this._totalRecords : this.value ? this.value.length : 0;

            //first
            if (this._totalRecords && this._first >= this._totalRecords) {
                var numberOfPages = Math.ceil(this._totalRecords / this.rows);
                this._first = Math.max((numberOfPages - 1) * this.props.rows, 0);
            }
        }
    }, {
        key: 'paginate',
        value: function paginate(event) {
            this._first = event.state.first;
            this._rows = event.state.rows;

            if (this.props.lazy) {
                if (this.props.onLazyLoad) {
                    this.props.onLazyLoad(this.createLazyLoadMetadata());
                }
            } else {
                this.updateDataToRender(this.value);
            }
        }
    }, {
        key: 'updateDataToRender',
        value: function updateDataToRender(datasource) {
            if (this.props.paginator && datasource) {
                this.dataToRender = [];
                var startIndex = this.props.lazy ? 0 : this._first;
                for (var i = startIndex; i < startIndex + this.props.rows; i++) {
                    if (i >= datasource.length) {
                        break;
                    }

                    this.dataToRender.push(datasource[i]);
                }
            } else {
                this.dataToRender = datasource;
            }

            this.setState({ dataToRender: this.dataToRender });
        }
    }, {
        key: 'isEmpty',
        value: function isEmpty() {
            return !this.dataToRender || this.dataToRender.length === 0;
        }
    }, {
        key: 'createLazyLoadMetadata',
        value: function createLazyLoadMetadata() {
            return {
                first: this._first,
                rows: this._rows
            };
        }
    }, {
        key: 'getBlockableElement',
        value: function getBlockableElement() {
            return this.dataGridEl;
        }
    }, {
        key: 'updateComponent',
        value: function updateComponent() {
            if (this.props.paginator) {
                this.updatePaginator();
            }
            this.updateDataToRender(this.value);
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.updateComponent();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var newValue = nextProps.value;
            if (newValue) {
                this.value = newValue;

                this.updateComponent();
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.lazy) {
                if (this.props.onLazyLoad) {
                    this.props.onLazyLoad({
                        first: this._first,
                        rows: this._rows
                    });
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var styleClass = (0, _classnames2.default)('ui-datagrid ui-widget', this.props.styleClass);

            var paginator = _react2.default.createElement(_Paginator.Paginator, { rows: this.props.rows, first: this._first, totalRecords: this._totalRecords, pageLinkSize: this.props.pageLinks,
                styleClass: 'ui-paginator-bottom', rowsPerPageOptions: this.props.rowsPerPageOptions, onPageChange: this.paginate.bind(this) }),
                topPaginator = this.props.paginator && (this.props.paginatorPosition !== 'bottom' || this.props.paginatorPosition === 'both') && paginator,
                bottomPaginator = this.props.paginator && (this.props.paginatorPosition !== 'top' || this.props.paginatorPosition === 'both') && paginator;

            var header = _react2.default.Children.map(this.props.children, function (element, i) {
                return element && element.type === Header && _react2.default.createElement(
                    Header,
                    null,
                    ' ',
                    element.props.children
                );
            }),
                footer = _react2.default.Children.map(this.props.children, function (element, i) {
                return element && element.type === Footer && _react2.default.createElement(
                    Footer,
                    null,
                    ' ',
                    element.props.children
                );
            }),
                content = _react2.default.createElement(
                'div',
                { className: 'ui-datagrid-content ui-widget-content' },
                _react2.default.createElement(
                    'div',
                    { className: 'ui-g' },
                    this.state.dataToRender && this.state.dataToRender.map(function (val, i) {
                        return _this4.props.itemTemplate ? _react2.default.cloneElement(_this4.props.itemTemplate(val), { key: i + '_datagriditem' }) : _react2.default.createElement(
                            'div',
                            { className: 'ui-g-12', key: i + '_datagriditem' },
                            'val'
                        );
                    })
                )
            );

            return _react2.default.createElement(
                'div',
                { ref: function ref(el) {
                        return _this4.dataGridEl = _reactDom2.default.findDOMNode(el);
                    }, style: this.props.style, className: styleClass },
                header,
                topPaginator,
                content,
                bottomPaginator,
                footer
            );
        }
    }]);

    return DataGrid;
}(_react.Component);

DataGrid.defaultProps = {
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
};
DataGrid.propsTypes = {
    value: _propTypes2.default.array,
    rows: _propTypes2.default.number,
    paginator: _propTypes2.default.bool,
    totalRecords: _propTypes2.default.number,
    pageLinks: _propTypes2.default.number,
    rowsPerPageOptions: _propTypes2.default.array,
    lazy: _propTypes2.default.bool,
    style: _propTypes2.default.string,
    styleClass: _propTypes2.default.string,
    paginatorPosition: _propTypes2.default.string,
    onLazyLoad: _propTypes2.default.func,
    itemTemplate: _propTypes2.default.func
};