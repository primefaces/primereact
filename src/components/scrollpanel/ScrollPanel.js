import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DomHandler from '../utils/DomHandler';
import classNames from 'classnames';

export class ScrollPanel extends Component {

    static defaultProps = {
        style: null,
        className: null
    }

    static propTypes = {
        style: PropTypes.object,
        className: PropTypes.string
    };

    constructor(props) {
        super(props);

        this.moveBar = this.moveBar.bind(this);
        this.onBarMouseDown = this.onBarMouseDown.bind(this);
        this.onDocumentMouseMove = this.onDocumentMouseMove.bind(this);
        this.onDocumentMouseUp = this.onDocumentMouseUp.bind(this);
    }

    componentDidMount() {
        this.moveBar();
        this.moveBar = this.moveBar.bind(this);

        window.addEventListener('resize', this.moveBar);
        this.initialized = true;
    }

    componentWillUnmount() {
        if(this.initialized) {
            window.removeEventListener('resize', this.moveBar);
        }
    }

    moveBar() {
        let totalHeight = this.content.scrollHeight;
        let ownHeight = this.content.clientHeight;
        let right = (this.container.clientWidth - this.bar.clientWidth) * -1;
        this.scrollRatio = ownHeight / totalHeight;

        this.requestAnimationFrame(() => {
            if (this.scrollRatio >= 1) {
                DomHandler.addClass(this.bar, 'ui-scrollpanel-hidden');
            }
            else {
                DomHandler.removeClass(this.bar, 'ui-scrollpanel-hidden');
                this.bar.style.cssText = 'height:' + Math.max(this.scrollRatio * 100, 10) + '%; top:' + (this.content.scrollTop / totalHeight) * 100 + '%;right:' + right + 'px;';
            }
        });
    }

    onBarMouseDown(e) {
        this.lastPageY = e.pageY;
        DomHandler.addClass(this.bar, 'ui-scrollpanel-grabbed');
        DomHandler.addClass(document.body, 'ui-scrollpanel-grabbed');

        document.addEventListener('mousemove', this.onDocumentMouseMove);
        document.addEventListener('mouseup', this.onDocumentMouseUp);
        e.preventDefault();
    }

    onDocumentMouseMove(e) {
        let delta = e.pageY - this.lastPageY;
        this.lastPageY = e.pageY;

        this.requestAnimationFrame(() => {
            this.content.scrollTop += delta / this.scrollRatio;
        });
    }

    onDocumentMouseUp(e) {
        DomHandler.removeClass(this.bar, 'ui-scrollpanel-grabbed');
        DomHandler.removeClass(document.body, 'ui-scrollpanel-grabbed');

        document.removeEventListener('mousemove', this.onDocumentMouseMove);
        document.removeEventListener('mouseup', this.onDocumentMouseUp);
    }

    requestAnimationFrame(f) {
        let frame = window.requestAnimationFrame ||  this.timeoutFrame;
        frame(f);
    }

    render() {
        let className = classNames('ui-scrollpanel ui-widget ui-widget-content ui-corner-all', this.props.className);

        return (
            <div ref={(el) => { this.container = el; }} id={this.props.id} className={className} style={this.props.style}>
                <div className="ui-scrollpanel-wrapper">
                    <div ref={(el) => { this.content = el; }} className="ui-scrollpanel-content" onScroll={this.moveBar} onMouseEnter={this.moveBar}>
                        {this.props.children}
                    </div>
                </div>
                <div ref={(el) => { this.bar = el; }} className="ui-scrollpanel-bar" onMouseDown={this.onBarMouseDown}></div>                
            </div>
        );
    }
}