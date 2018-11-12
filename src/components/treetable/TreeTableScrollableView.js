import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DomHandler from '../utils/DomHandler';

export class TreeTableScrollableView extends Component {

     static defaultProps = {
        header: null,
        body: null,
        footer: null,
        columns: null,
        frozen: null,
        frozenWidth: null,
        frozenBody: null
     }

    static propTypes = {
        header: PropTypes.any,
        body: PropTypes.any,
        footer: PropTypes.any,
        columns: PropTypes.array,
        frozen: PropTypes.bool,
        frozenWidth: PropTypes.string,
        frozenBody: PropTypes.any
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
            while(el && !DomHandler.hasClass(el, 'p-treetable')) {
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
            frozenScrollBody = DomHandler.findSingle(frozenView, '.p-treetable-scrollable-body');
        }
        
        this.scrollHeaderBox.style.marginLeft = -1 * this.scrollBody.scrollLeft + 'px';
        if(this.scrollFooterBox) {
            this.scrollFooterBox.style.marginLeft = -1 * this.scrollBody.scrollLeft + 'px';
        }
        
        if(frozenScrollBody) {
            frozenScrollBody.scrollTop = this.scrollBody.scrollTop;
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
        let row = DomHandler.findSingle(this.scrollTable, 'tr:not(.p-treetable-emptymessage-row)');
        if(row) {
            this.rowHeight = DomHandler.getOuterHeight(row);
        }
    }

    renderColGroup() {
        if(this.props.columns && this.props.columns.length) {
            return (
                <colgroup className="p-treetable-scrollable-colgroup">
                    {this.props.columns.map((col, i) => <col key={col.field + '_' + i} />)}
                </colgroup>
            );
        }
        else {
            return null;
        }
    }

    render() {
        let className = classNames('p-treetable-scrollable-view', {'p-treetable-frozen-view': this.props.frozen, 'p-treetable-unfrozen-view': !this.props.frozen && this.props.frozenWidth});
        let width = this.props.frozen ? this.props.frozenWidth : 'calc(100% - ' + this.props.frozenWidth + ')';
        let left = this.props.frozen ? null : this.props.frozenWidth;
        let colGroup = this.renderColGroup();

        return (
            <div className={className} style={{width: width, left: left}} ref={(el) => { this.container = el; }}>
                <div className="p-treetable-scrollable-header" ref={(el) => { this.scrollHeader= el; }} onScroll={this.onHeaderScroll}>
                    <div className="p-treetable-scrollable-header-box" ref={(el) => { this.scrollHeaderBox = el; }}>
                        <table className="p-treetable-scrollable-header-table">
                            {colGroup}
                            {this.props.header}
                        </table>
                    </div>
                </div>
                <div className="p-treetable-scrollable-body" ref={(el) => { this.scrollBody = el; }} onScroll={this.onBodyScroll}>
                    <table ref={(el) => { this.scrollTable = el; }} style={{top:'0'}} className="p-treetable-scrollable-body-table">
                        {colGroup}
                        {this.props.body}
                    </table>
                </div>
                <div className="p-treetable-scrollable-footer" ref={(el) => { this.scrollFooter = el; }}>
                    <div className="p-treetable-scrollable-footer-box" ref={(el) => { this.scrollFooterBox = el; }}>
                         <table className="p-treetable-scrollable-footer-table">
                            {colGroup}
                            {this.props.footer}
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}