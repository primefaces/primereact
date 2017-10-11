import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DomHandler from '../utils/DomHandler';

export class ScrollableView extends Component {

     static defaultProps = {
        header: null,
        body: null,
        footer: null,
        frozen: null,
        frozenWidth: null,
        unfrozenWidth: null,
        frozenBody: null,
        virtualScroll: false,
        rows: null,
        totalRecords: null,
        onVirtualScroll: null
     }

    static propTypes = {
        header: PropTypes.element,
        body: PropTypes.element,
        footer: PropTypes.element,
        frozen: PropTypes.bool,
        frozenWidth: PropTypes.string,
        unfrozenWidth: PropTypes.string,
        frozenBody: PropTypes.element,
        virtualScroll: PropTypes.bool,
        rows: PropTypes.number,
        totalRcords: PropTypes.number,
        onVirtualScroll: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.onHeaderScroll = this.onHeaderScroll.bind(this);
        this.onBodyScroll = this.onBodyScroll.bind(this);
    }

    componentDidMount() {
        if(!this.props.frozen) {
            this.alignScrollBar();
        }
        else {
            this.scrollBody.style.paddingBottom = DomHandler.calculateScrollbarWidth() + 'px';
        }
    }

    componentDidUpdate() {
        if(!this.props.frozen) {
            this.alignScrollBar();
            
            if(this.props.virtualScroll) {
                this.calculateRowHeight();
                this.virtualScrollableTableWrapper.style.height = this.props.totalRecords * this.rowHeight + 'px';
            }
        }
    }

    onHeaderScroll() {
        this.scrollHeader.scrollLeft = 0;
    }

    onBodyScroll() {
        let frozenView = this.container.previousElementSibling;
        let frozenScrollBody;
        if(frozenView) {
            frozenScrollBody = DomHandler.findSingle(frozenView, '.ui-datatable-scrollable-body');
        }
        
        this.scrollHeaderBox.style.marginLeft = -1 * this.scrollBody.scrollLeft + 'px';
        if(this.scrollFooterBox) {
            this.scrollFooterBox.style.marginLeft = -1 * this.scrollBody.scrollLeft + 'px';
        }
        
        if(frozenScrollBody) {
            frozenScrollBody.scrollTop = this.scrollBody.scrollTop;
        }
        
        if(this.props.virtualScroll) {
            let viewport = DomHandler.getOuterHeight(this.scrollBody);
            let tableHeight = DomHandler.getOuterHeight(this.scrollTable);
            let pageHeight = this.rowHeight * this.props.rows;
            let virtualTableHeight = DomHandler.getOuterHeight(this.scrollTable.parentElement);
            let pageCount = (virtualTableHeight / pageHeight)||1;

            if(this.scrollBody.scrollTop + viewport > parseFloat(this.scrollTable.style.top) + tableHeight || this.scrollBody.scrollTop < parseFloat(this.scrollTable.style.top)) {
                let page = Math.floor((this.scrollBody.scrollTop * pageCount) / (this.scrollBody.scrollHeight)) + 1;
                if(this.props.onVirtualScroll) {
                    this.props.onVirtualScroll({
                        page: page
                    });
                }
                this.scrollTable.style.top = ((page - 1) * pageHeight) + 'px';
            }
        }
    }

    hasVerticalOverflow() {
        return DomHandler.getOuterHeight(this.scrollTable) > DomHandler.getOuterHeight(this.scrollBody);
    }

    alignScrollBar() {
        let scrollBarWidth = this.hasVerticalOverflow() ? DomHandler.calculateScrollbarWidth() : 0;
        
        this.scrollHeaderBox.style.marginRight = scrollBarWidth + 'px';
        if(this.scrollFooterBox) {
            this.scrollFooterBox.style.marginRight = scrollBarWidth + 'px';
        }
    }
    
    calculateRowHeight() {
        let row = DomHandler.findSingle(this.scrollTable, 'tr.ui-widget-content:not(.ui-datatable-emptymessage-row)');
        if(row) {
            this.rowHeight = DomHandler.getOuterHeight(row);
        }
    }

    render() {
        let className = classNames('ui-datatable-scrollable-view', {'ui-datatable-frozen-view': this.props.frozen});
        let width = this.props.frozen ? this.props.frozenWidth : this.props.unfrozenWidth;
        let left = this.props.frozen ? null : this.props.frozenWidth;

        return (
            <div className={className} style={{width: width, left: left}} ref={(el) => { this.container = el; }}>
                <div className="ui-widget-header ui-datatable-scrollable-header" ref={(el) => { this.scrollHeader= el; }} onScroll={this.onHeaderScroll}>
                    <div className="ui-datatable-scrollable-header-box" ref={(el) => { this.scrollHeaderBox = el; }}>
                        <table>
                            {this.props.header}
                            {this.props.frozenBody}
                        </table>
                    </div>
                </div>
                <div className="ui-datatable-scrollable-body" style={{maxHeight: this.props.scrollHeight}} ref={(el) => { this.scrollBody = el; }} onScroll={this.onBodyScroll}>
                    <div className="ui-datatable-scrollable-table-wrapper">
                        <table ref={(el) => { this.scrollTable = el; }}>
                            {this.props.body}
                        </table>
                    </div>
                </div>
                <div className="ui-widget-header ui-datatable-scrollable-footer" ref={(el) => { this.scrollFooter = el; }}>
                    <div className="ui-datatable-scrollable-footer-box" ref={(el) => { this.scrollFooterBox = el; }}>
                         <table>
                            {this.props.footer}
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}