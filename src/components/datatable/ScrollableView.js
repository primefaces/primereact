import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DomHandler from '../utils/DomHandler';

export class ScrollableView extends Component {

     static defaultProps = {
        header: null,
        body: null,
        footer: null,
        frozen: null
     }

    static propTypes = {
        header: PropTypes.element,
        body: PropTypes.element,
        footer: PropTypes.element,
        frozen: PropTypes.bool
    }

    componentDidMount() {
        if(!this.props.frozen)
            this.alignScrollBar();
        else
            this.scrollBody.style.paddingBottom = DomHandler.calculateScrollbarWidth() + 'px';
    }

    componentDidUpdate() {
        if(!this.props.frozen) {
            this.alignScrollBar();
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

    render() {
        return (
            <div className="ui-datatable-scrollable-view">
                <div className="ui-widget-header ui-datatable-scrollable-header">
                    <div className="ui-datatable-scrollable-header-box" ref={(el) => { this.scrollHeaderBox = el; }}>
                        <table>
                            {this.props.header}
                        </table>
                    </div>
                </div>
                <div className="ui-datatable-scrollable-body" style={{maxHeight: this.props.scrollHeight}} ref={(el) => { this.scrollBody = el; }}>
                    <div className="ui-datatable-scrollable-table-wrapper">
                        <table ref={(el) => { this.scrollTable = el; }}>
                            {this.props.body}
                        </table>
                    </div>
                </div>
                <div className="ui-widget-header ui-datatable-scrollable-footer">
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