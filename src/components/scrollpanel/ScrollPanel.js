import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DomHandler from '../utils/DomHandler';
import classNames from 'classnames';

export class ScrollPanel extends Component {

    static defaultProps = {
        id: null,
        style: null,
        className: null
    }

    static propTypes = {
        id: PropTypes.string,
        style: PropTypes.object,
        className: PropTypes.string
    };

    constructor(props) {
        super(props);

        this.moveBar = this.moveBar.bind(this);
        this.onXBarMouseDown = this.onXBarMouseDown.bind(this);
        this.onYBarMouseDown = this.onYBarMouseDown.bind(this);

        this.onDocumentMouseMove = this.onDocumentMouseMove.bind(this);
        this.onDocumentMouseUp = this.onDocumentMouseUp.bind(this);
    }

    calculateContainerHeight() {
        let containerStyles = getComputedStyle(this.container),
        xBarStyles = getComputedStyle(this.xBar),
        pureContainerHeight = DomHandler.getHeight(this.container) - parseInt(xBarStyles['height'], 10);

        if (containerStyles['max-height'] !== "none" && pureContainerHeight === 0) {
            if(this.content.offsetHeight + parseInt(xBarStyles['height'], 10) > parseInt(containerStyles['max-height'], 10)) {
                this.container.style.height = containerStyles['max-height'];
            }
            else {
                this.container.style.height = this.content.offsetHeight + parseFloat(containerStyles.paddingTop) + parseFloat(containerStyles.paddingBottom) + parseFloat(containerStyles.borderTopWidth) + parseFloat(containerStyles.borderBottomWidth) + "px";
            }
        }
    }

    moveBar() {
        /* horizontal scroll */
        let totalWidth = this.content.scrollWidth;
        let ownWidth = this.content.clientWidth;
        let bottom = (this.container.clientHeight - this.xBar.clientHeight) * -1;

        this.scrollXRatio = ownWidth / totalWidth;

        /* vertical scroll */
        let totalHeight = this.content.scrollHeight;
        let ownHeight = this.content.clientHeight;
        let right = (this.container.clientWidth - this.yBar.clientWidth) * -1;

        this.scrollYRatio = ownHeight / totalHeight;

        this.frame = this.requestAnimationFrame(() => {
            if (this.scrollXRatio >= 1) {
                DomHandler.addClass(this.xBar, 'p-scrollpanel-hidden');
            }
            else {
                DomHandler.removeClass(this.xBar, 'p-scrollpanel-hidden');
                this.xBar.style.cssText = 'width:' + Math.max(this.scrollXRatio * 100, 10) + '%; left:' + (this.content.scrollLeft / totalWidth) * 100 + '%;bottom:' + bottom + 'px;';
            }

            if (this.scrollYRatio >= 1) {
                DomHandler.addClass(this.yBar, 'p-scrollpanel-hidden');
            }
            else {
                DomHandler.removeClass(this.yBar, 'p-scrollpanel-hidden');
                this.yBar.style.cssText = 'height:' + Math.max(this.scrollYRatio * 100, 10) + '%; top: calc(' + (this.content.scrollTop / totalHeight) * 100 + '% - ' + this.xBar.clientHeight + 'px);right:' + right + 'px;';
            }
        });
    }

    onYBarMouseDown(e) {
        this.isYBarClicked = true;
        this.lastPageY = e.pageY;
        DomHandler.addClass(this.yBar, 'p-scrollpanel-grabbed');
        DomHandler.addClass(document.body, 'p-scrollpanel-grabbed');

        document.addEventListener('mousemove', this.onDocumentMouseMove);
        document.addEventListener('mouseup', this.onDocumentMouseUp);
        e.preventDefault();
    }

    onXBarMouseDown(e) {
        this.isXBarClicked = true;
        this.lastPageX = e.pageX;
        DomHandler.addClass(this.xBar, 'p-scrollpanel-grabbed');
        DomHandler.addClass(document.body, 'p-scrollpanel-grabbed');

        document.addEventListener('mousemove', this.onDocumentMouseMove);
        document.addEventListener('mouseup', this.onDocumentMouseUp);
        e.preventDefault();
    }

    onDocumentMouseMove(e) {
        if(this.isXBarClicked) {
            this.onMouseMoveForXBar(e);
        }
        else if(this.isYBarClicked) {
            this.onMouseMoveForYBar(e);
        }
        else {
            this.onMouseMoveForXBar(e);
            this.onMouseMoveForYBar(e);
        }
        
    }

    onMouseMoveForXBar(e) {
        let deltaX = e.pageX - this.lastPageX;
        this.lastPageX = e.pageX;

        this.frame = this.requestAnimationFrame(() => {
            this.content.scrollLeft += deltaX / this.scrollXRatio;
        });
    }

    onMouseMoveForYBar(e) {
        let deltaY = e.pageY - this.lastPageY;
        this.lastPageY = e.pageY;

        this.frame = this.requestAnimationFrame(() => {
            this.content.scrollTop += deltaY / this.scrollYRatio;
        });
    }

    onDocumentMouseUp(e) {
        DomHandler.removeClass(this.yBar, 'p-scrollpanel-grabbed');
        DomHandler.removeClass(this.xBar, 'p-scrollpanel-grabbed');
        DomHandler.removeClass(document.body, 'p-scrollpanel-grabbed');

        document.removeEventListener('mousemove', this.onDocumentMouseMove);
        document.removeEventListener('mouseup', this.onDocumentMouseUp);
        this.isXBarClicked = false;
        this.isYBarClicked = false;
    }

    requestAnimationFrame(f) {
        let frame = window.requestAnimationFrame || this.timeoutFrame;
        return frame(f);
    }

    refresh() {
        this.moveBar();
    }

    componentDidMount() {
        this.moveBar();
        this.moveBar = this.moveBar.bind(this);

        window.addEventListener('resize', this.moveBar);
        
        this.calculateContainerHeight();
        this.initialized = true;
    }

    componentWillUnmount() {
        if (this.initialized) {
            window.removeEventListener('resize', this.moveBar);
        }

        if (this.frame) {
            window.cancelAnimationFrame(this.frame);
        }
    }

    render() {
        let className = classNames('p-scrollpanel p-component', this.props.className);

        return (
            <div ref={(el) => { this.container = el; }} id={this.props.id} className={className} style={this.props.style}>
                <div className="p-scrollpanel-wrapper">
                    <div ref={(el) => { this.content = el; }} className="p-scrollpanel-content" onScroll={this.moveBar} onMouseEnter={this.moveBar}>
                        {this.props.children}
                    </div>
                </div>
                <div ref={(el) => { this.xBar = el; }} className="p-scrollpanel-bar p-scrollpanel-bar-x" onMouseDown={this.onXBarMouseDown}></div>
                <div ref={(el) => { this.yBar = el; }} className="p-scrollpanel-bar p-scrollpanel-bar-y" onMouseDown={this.onYBarMouseDown}></div>
            </div>
        );
    }
}