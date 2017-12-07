import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DomHandler from '../utils/DomHandler';

export class ScrollableView extends Component {

     static defaultProps = {
        header: null,
        body: null,
        footer: null,
        columns: null,
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
        columns: PropTypes.array,
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
        this.setScrollHeight();
                
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
                this.scrollTableWrapper.style.height = this.props.totalRecords * this.rowHeight + 'px';
            }
        }
        
        if(this.virtualScrollCallback) {
            this.virtualScrollCallback();
            this.virtualScrollCallback = null;
        }
    }
    
    setScrollHeight() {
        if(this.props.scrollHeight) {
            if(this.props.scrollHeight.indexOf('%') !== -1) {
                let datatableContainer = this.findDataTableContainer(this.container);
                this.scrollBody.style.visibility = 'hidden';
                this.scrollBody.style.height = '100px';         //temporary height to calculate static height
                let containerHeight = DomHandler.getOuterHeight(datatableContainer);
                let relativeHeight = DomHandler.getOuterHeight(datatableContainer.parentElement) * parseInt(this.props.scrollHeight, 10) / 100;
                let staticHeight = containerHeight - 100;       //total height of headers, footers, paginators
                let scrollBodyHeight = (relativeHeight - staticHeight);
                
                this.scrollBody.style.height = 'auto';
                this.scrollBody.style.maxHeight = scrollBodyHeight + 'px';
                this.scrollBody.style.visibility = 'visible';
            }
            else {
                this.scrollBody.style.maxHeight = this.props.scrollHeight;
            }
        }
    }
    
    findDataTableContainer(element) {
        if(element) {
            let el = element;
            while(el && !DomHandler.hasClass(el, 'ui-datatable')) {
                el = el.parentElement;
            }

            return el;
        }
        else {
            return null;
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
            let virtualTableHeight = DomHandler.getOuterHeight(this.scrollTableWrapper);
            let pageCount = (virtualTableHeight / pageHeight)||1;
            
            if(this.scrollBody.scrollTop + viewport > parseFloat(this.scrollTable.style.top) + tableHeight || this.scrollBody.scrollTop < parseFloat(this.scrollTable.style.top)) {
                let page = Math.floor((this.scrollBody.scrollTop * pageCount) / (this.scrollBody.scrollHeight)) + 1;
                if(this.props.onVirtualScroll) {
                    this.props.onVirtualScroll({
                        page: page
                    });
                    
                    this.virtualScrollCallback = () => {
                        this.scrollTable.style.top = ((page - 1) * pageHeight) + 'px';
                    }
                }
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

    renderColGroup() {
        if(this.props.columns && this.props.columns.length) {
            return (
                <colgroup className="ui-datatable-scrollable-colgroup">
                    {this.props.columns.map((col, i) => <col key={col.field + '_' + i} />)}
                </colgroup>
            );
        }
        else {
            return null;
        }
    }

    render() {
        let className = classNames('ui-datatable-scrollable-view', {'ui-datatable-frozen-view': this.props.frozen});
        let width = this.props.frozen ? this.props.frozenWidth : this.props.unfrozenWidth;
        let left = this.props.frozen ? null : this.props.frozenWidth;
        let colGroup = this.renderColGroup();

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
                <div className="ui-datatable-scrollable-body" ref={(el) => { this.scrollBody = el; }} onScroll={this.onBodyScroll}>
                    <div className="ui-datatable-scrollable-table-wrapper" ref={(el) => { this.scrollTableWrapper = el; }} >
                        <table ref={(el) => { this.scrollTable = el; }} style={{top:'0'}}>
                            {colGroup}
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