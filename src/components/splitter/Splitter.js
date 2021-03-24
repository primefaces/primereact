import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils/ClassNames';
import UniqueComponentId from '../utils/UniqueComponentId';
import DomHandler from '../utils/DomHandler';

export class SplitterPanel extends Component {

    static defaultProps = {
        size: null,
        minSize: null,
        style: null,
        className: null
    }

    static propTypes = {
        header: PropTypes.number,
        minSize: PropTypes.number,
        style: PropTypes.object,
        className: PropTypes.string
    }
}

export class Splitter extends Component {

    static defaultProps = {
        id: null,
        className: null,
        style: null,
        layout: 'horizontal',
        gutterSize: 4,
        stateKey: null,
        stateStorage: 'session',
        onResizeEnd: null
    }

    static propTypes = {
        id: PropTypes.string,
        className: PropTypes.string,
        style: PropTypes.object,
        layout: PropTypes.string,
        gutterSize: PropTypes.number,
        stateKey: PropTypes.string,
        stateStorage: PropTypes.string,
        onResizeEnd: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.id = this.props.id || UniqueComponentId();
    }

    bindMouseListeners() {
        if (!this.mouseMoveListener) {
            this.mouseMoveListener = event => this.onResize(event)
            document.addEventListener('mousemove', this.mouseMoveListener);
        }

        if (!this.mouseUpListener) {
            this.mouseUpListener = event => {
                this.onResizeEnd(event);
                this.unbindMouseListeners();
            }
            document.addEventListener('mouseup', this.mouseUpListener);
        }
    }

    validateResize(newPrevPanelSize, newNextPanelSize) {
        if (this.props.children[0].props && this.props.children[0].props.minSize && this.props.children[0].props.minSize > newPrevPanelSize) {
            return false;
        }

        if (this.props.children[1].props && this.props.children[1].props.minSize && this.props.children[1].props.minSize > newNextPanelSize) {
            return false;
        }

        return true;
    }

    unbindMouseListeners() {
        if (this.mouseMoveListener) {
            document.removeEventListener('mousemove', this.mouseMoveListener);
            this.mouseMoveListener = null;
        }

        if (this.mouseUpListener) {
            document.removeEventListener('mouseup', this.mouseUpListener);
            this.mouseUpListener = null;
        }
    }

    clear() {
        this.dragging = false;
        this.size = null;
        this.startPos = null;
        this.prevPanelElement = null;
        this.nextPanelElement = null;
        this.prevPanelSize = null;
        this.nextPanelSize = null;
        this.gutterElement = null;
        this.prevPanelIndex = null;
    }

    isStateful() {
        return this.props.stateKey != null;
    }

    getStorage() {
        switch (this.props.stateStorage) {
            case 'local':
                return window.localStorage;

            case 'session':
                return window.sessionStorage;

            default:
                throw new Error(this.props.stateStorage + ' is not a valid value for the state storage, supported values are "local" and "session".');
        }
    }

    saveState() {
        this.getStorage().setItem(this.props.stateKey, JSON.stringify(this.panelSizes));
    }

    restoreState() {
        const storage = this.getStorage();
        const stateString = storage.getItem(this.props.stateKey);

        if (stateString) {
            this.panelSizes = JSON.parse(stateString);
            let children = [...this.container.children].filter(child => DomHandler.hasClass(child, 'p-splitter-panel'));
            children.forEach((child, i) => {
                child.style.flexBasis = 'calc(' + this.panelSizes[i] + '% - ' + ((this.props.children.length - 1) * this.props.gutterSize) + 'px)';
            });

            return true;
        }

        return false;
    }

    onResizeStart(event, index) {
        this.gutterElement = event.currentTarget;
        this.size = this.horizontal ? DomHandler.getWidth(this.container) : DomHandler.getHeight(this.container);
        this.dragging = true;
        this.startPos = this.props.layout === 'horizontal' ? event.pageX : event.pageY;
        this.prevPanelElement = this.gutterElement.previousElementSibling;
        this.nextPanelElement = this.gutterElement.nextElementSibling;
        this.prevPanelSize = 100 * (this.props.layout === 'horizontal' ? DomHandler.getOuterWidth(this.prevPanelElement, true) : DomHandler.getOuterHeight(this.prevPanelElement, true)) / this.size;
        this.nextPanelSize = 100 * (this.props.layout === 'horizontal' ? DomHandler.getOuterWidth(this.nextPanelElement, true) : DomHandler.getOuterHeight(this.nextPanelElement, true)) / this.size;
        this.prevPanelIndex = index;
        DomHandler.addClass(this.gutterElement, 'p-splitter-gutter-resizing');
        DomHandler.addClass(this.container, 'p-splitter-resizing');
    }

    onResize(event) {
        let newPos;
        if (this.props.layout === 'horizontal')
            newPos = (event.pageX * 100 / this.size) - (this.startPos * 100 / this.size);
        else
            newPos = (event.pageY * 100 / this.size) - (this.startPos * 100 / this.size);

        let newPrevPanelSize = this.prevPanelSize + newPos;
        let newNextPanelSize = this.nextPanelSize - newPos;

        if (this.validateResize(newPrevPanelSize, newNextPanelSize)) {
            this.prevPanelElement.style.flexBasis = 'calc(' + newPrevPanelSize + '% - ' + ((this.props.children.length - 1) * this.props.gutterSize) + 'px)';
            this.nextPanelElement.style.flexBasis = 'calc(' + newNextPanelSize + '% - ' + ((this.props.children.length - 1) * this.props.gutterSize) + 'px)';
            this.panelSizes[this.prevPanelIndex] = newPrevPanelSize;
            this.panelSizes[this.prevPanelIndex + 1] = newNextPanelSize;
        }
    }

    onResizeEnd(event) {
        if (this.isStateful()) {
            this.saveState();
        }

        if (this.props.onResizeEnd) {
            this.props.onResizeEnd({
                originalEvent: event,
                sizes: this.panelSizes
            })
        }

        DomHandler.removeClass(this.gutterElement, 'p-splitter-gutter-resizing');
        DomHandler.removeClass(this.container, 'p-splitter-resizing');
        this.clear();
    }

    onGutterMouseDown(event, index) {
        this.onResizeStart(event, index);
        this.bindMouseListeners();
    }

    onGutterTouchStart(event, index) {
        this.onResizeStart(event, index);

        this.windowTouchMoveListener = this.onGutterTouchMove.bind(this);
        this.windowTouchEndListener = this.onGutterTouchEnd.bind(this);
        window.addEventListener('touchmove', this.windowTouchMoveListener, { passive: false, cancelable: false });
        window.addEventListener('touchend', this.windowTouchEndListener);

    }

    onGutterTouchMove(event) {
        this.onResize(event);
    }

    onGutterTouchEnd(event) {
        this.onResizeEnd(event);

        window.removeEventListener('touchmove', this.windowTouchMoveListener);
        window.removeEventListener('touchend', this.windowTouchEndListener);
        this.windowTouchMoveListener = null;
        this.windowTouchEndListener = null;
    }

    componentDidMount() {
        if (this.panelElement) {
            if (this.panelElement.childNodes && DomHandler.find(this.panelElement, '.p-splitter')) {
                DomHandler.addClass(this.panelElement, 'p-splitter-panel-nested');
            }
        }

        if (this.props.children && this.props.children.length) {
            let initialized = false;
            if (this.isStateful()) {
                initialized = this.restoreState();
            }

            if (!initialized) {
                let children = [...this.container.children].filter(child => DomHandler.hasClass(child, 'p-splitter-panel'));
                let _panelSizes = [];

                this.props.children.map((panel, i) => {
                    let panelInitialSize = panel.props && panel.props.size ? panel.props.size : null;
                    let panelSize = panelInitialSize || (100 / this.props.children.length);
                    _panelSizes[i] = panelSize;
                    children[i].style.flexBasis = 'calc(' + panelSize + '% - ' + ((this.props.children.length - 1) * this.props.gutterSize) + 'px)';
                    return _panelSizes;
                });

                this.panelSizes = _panelSizes;
            }
        }
    }

    renderPanel(panel, index) {
        const panelClassName = classNames('p-splitter-panel', panel.props.className);
        const gutterStyle = this.props.layout === 'horizontal' ? { width: this.props.gutterSize + 'px' } : { height: this.props.gutterSize + 'px' }
        const gutter = (index !== this.props.children.length - 1) && (
            <div ref={(el) => this.gutterElement = el} className={'p-splitter-gutter'} style={gutterStyle} onMouseDown={event => this.onGutterMouseDown(event, index)}
                onTouchStart={event => this.onGutterTouchStart(event, index)} onTouchMove={event => this.onGutterTouchMove(event)} onTouchEnd={event => this.onGutterTouchEnd(event)}>
                <div className="p-splitter-gutter-handle"></div>
            </div>
        );

        return (
            <React.Fragment>
                <div ref={(el) => this.panelElement = el} key={index} className={panelClassName} style={panel.props.style}>
                    {panel.props.children}
                </div>
                {gutter}
            </React.Fragment>
        );
    }

    renderPanels() {
        return (
            React.Children.map(this.props.children, (panel, index) => {
                return this.renderPanel(panel, index);
            })
        )
    }

    render() {
        const className = classNames(`p-splitter p-component p-splitter-${this.props.layout}`, this.props.className);
        const panels = this.renderPanels();

        return (
            <div ref={(el) => this.container = el} id={this.id} className={className} style={this.props.style}>
                {panels}
            </div>
        );
    }
}
