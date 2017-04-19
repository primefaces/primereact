'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Paginator = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _DomHandler = require('../utils/DomHandler');

var _DomHandler2 = _interopRequireDefault(_DomHandler);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Paginator = exports.Paginator = function (_Component) {
    _inherits(Paginator, _Component);

    function Paginator(props) {
        _classCallCheck(this, Paginator);

        var _this = _possibleConstructorReturn(this, (Paginator.__proto__ || Object.getPrototypeOf(Paginator)).call(this, props));

        _this.state = {};
        _this._first = _this.props.first;
        _this._totalRecords = _this.props.totalRecords;
        _this._rows = _this.props.rows;
        return _this;
    }

    _createClass(Paginator, [{
        key: 'isFirstPage',
        value: function isFirstPage() {
            return this.getPage() === 0;
        }
    }, {
        key: 'isLastPage',
        value: function isLastPage() {
            return this.getPage() === this.getPageCount() - 1;
        }
    }, {
        key: 'getPageCount',
        value: function getPageCount() {
            return Math.ceil(this._totalRecords / this._rows) || 1;
        }
    }, {
        key: 'calculatePageLinkBoundaries',
        value: function calculatePageLinkBoundaries() {
            var numberOfPages = this.getPageCount(),
                visiblePages = Math.min(this.props.pageLinkSize, numberOfPages);

            //calculate range, keep current in middle if necessary
            var start = Math.max(0, Math.ceil(this.getPage() - visiblePages / 2)),
                end = Math.min(numberOfPages - 1, start + visiblePages - 1);

            //check when approaching to last page
            var delta = this.props.pageLinkSize - (end - start + 1);
            start = Math.max(0, start - delta);

            return [start, end];
        }
    }, {
        key: 'updatePageLinks',
        value: function updatePageLinks() {
            this.pageLinks = [];
            var boundaries = this.calculatePageLinkBoundaries(),
                start = boundaries[0],
                end = boundaries[1];

            for (var i = start; i <= end; i++) {
                this.pageLinks.push(i + 1);
            }

            this.setState({ pageLinks: this.pageLinks });
        }
    }, {
        key: 'changePage',
        value: function changePage(p, event) {
            if (_DomHandler2.default.hasClass(event.target, 'ui-state-active')) {
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
                    });
                }
            }

            if (event) {
                event.preventDefault();
            }
        }
    }, {
        key: 'getPage',
        value: function getPage() {
            return Math.floor(this._first / this._rows);
        }
    }, {
        key: 'changePageToFirst',
        value: function changePageToFirst(event) {
            this.changePage(0, event);
        }
    }, {
        key: 'changePageToPrev',
        value: function changePageToPrev(event) {
            this.changePage(this.getPage() - 1, event);
        }
    }, {
        key: 'changePageToNext',
        value: function changePageToNext(event) {
            this.changePage(this.getPage() + 1, event);
        }
    }, {
        key: 'changePageToLast',
        value: function changePageToLast(event) {
            this.changePage(this.getPageCount() - 1, event);
        }
    }, {
        key: 'onRppChange',
        value: function onRppChange(event) {
            this._rows = this.props.rowsPerPageOptions[event.target.selectedIndex];
            this.changePageToFirst(event);
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.updatePageLinks();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this._first = nextProps.first;
            this._totalRecords = nextProps.totalRecords;
            this._rows = nextProps.rows;

            this.updatePageLinks();
        }
    }, {
        key: 'render',
        value: function render() {
            var styleClass = (0, _classnames2.default)('ui-paginator ui-widget ui-widget-header ui-unselectable-text', this.props.styleClass);

            var firstStyleClass = (0, _classnames2.default)('ui-paginator-first ui-paginator-element ui-state-default ui-corner-all', {
                'ui-state-disabled': this.isFirstPage()
            }),
                firstLink = _react2.default.createElement(
                'a',
                { href: '#', className: firstStyleClass, onClick: this.changePageToFirst.bind(this), tabIndex: this.isFirstPage() ? -1 : null },
                _react2.default.createElement('span', { className: 'fa fa-step-backward' })
            );

            var prevStyleClass = (0, _classnames2.default)('ui-paginator-prev ui-paginator-element ui-state-default ui-corner-all', {
                'ui-state-disabled': this.isFirstPage()
            }),
                prevLink = _react2.default.createElement(
                'a',
                { href: '#', className: prevStyleClass, onClick: this.changePageToPrev.bind(this), tabIndex: this.isFirstPage() ? -1 : null },
                _react2.default.createElement('span', { className: 'fa fa-backward' })
            );

            var $this = this,
                pageLinkElements = _react2.default.createElement(
                'span',
                { className: 'ui-paginator-pages' },
                this.state.pageLinks.map(function (pageLink, i) {
                    var pageStyleClass = (0, _classnames2.default)('ui-paginator-page ui-paginator-element ui-state-default ui-corner-all', {
                        'ui-state-active': pageLink - 1 === $this.getPage()
                    });

                    return _react2.default.createElement(
                        'a',
                        { key: 'pagelink_' + i, href: '#', className: pageStyleClass, onClick: function onClick(e) {
                                return $this.changePage(pageLink - 1, e);
                            } },
                        pageLink
                    );
                })
            );

            var nextStyleClass = (0, _classnames2.default)('ui-paginator-next ui-paginator-element ui-state-default ui-corner-all', {
                'ui-state-disabled': this.isLastPage()
            }),
                nextLink = _react2.default.createElement(
                'a',
                { href: '#', className: nextStyleClass, onClick: this.changePageToNext.bind(this), tabIndex: this.isLastPage() ? -1 : null },
                _react2.default.createElement('span', { className: 'fa fa-forward' })
            );

            var lastStyleClass = (0, _classnames2.default)('ui-paginator-last ui-paginator-element ui-state-default ui-corner-all', {
                'ui-state-disabled': this.isLastPage()
            }),
                lastLink = _react2.default.createElement(
                'a',
                { href: '#', className: lastStyleClass, onClick: this.changePageToLast.bind(this), tabIndex: this.isLastPage() ? -1 : null },
                _react2.default.createElement('span', { className: 'fa fa-step-forward' })
            );

            if (this.props.rowsPerPageOptions) {
                var rpp = _react2.default.createElement(
                    'select',
                    { className: 'ui-paginator-rpp-options ui-widget ui-state-default', onChange: this.onRppChange.bind(this) },
                    this.props.rowsPerPageOptions.map(function (opt, i) {
                        return _react2.default.createElement(
                            'option',
                            { key: 'opt_' + i, value: opt },
                            ' ',
                            opt
                        );
                    })
                );
            }

            return _react2.default.createElement(
                'div',
                { className: styleClass, style: this.props.style },
                firstLink,
                prevLink,
                pageLinkElements,
                nextLink,
                lastLink,
                rpp
            );
        }
    }]);

    return Paginator;
}(_react.Component);

Paginator.defaultProps = {
    totalRecords: 0,
    rows: 0,
    first: 0,
    pageLinkSize: 5,
    rowsPerPageOptions: null,
    style: null,
    styleClass: null,
    onPageChange: null
};
Paginator.propsTypes = {
    totalRecords: _propTypes2.default.number,
    rows: _propTypes2.default.number,
    first: _propTypes2.default.number,
    pageLinkSize: _propTypes2.default.number,
    rowsPerPageOptions: _propTypes2.default.array,
    style: _propTypes2.default.string,
    styleClass: _propTypes2.default.string,
    onPageChange: _propTypes2.default.func
};