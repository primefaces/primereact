import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { DomHandler, classNames, ConnectedOverlayScrollHandler, ZIndexUtils } from '../utils/Utils';
import { Portal } from '../portal/Portal';

export function tip(props) {
    let appendTo = props.appendTo || document.body;

    let tooltipWrapper = document.createDocumentFragment();
    DomHandler.appendChild(tooltipWrapper, appendTo);

    props = {...props, ...props.options};

    let tooltipEl = React.createElement(Tooltip, props);
    ReactDOM.render(tooltipEl, tooltipWrapper);

    let updateTooltip = (newProps) => {
        props = { ...props, ...newProps };
        ReactDOM.render(React.cloneElement(tooltipEl, props), tooltipWrapper);
    };

    return {
        destroy: () => {
            ReactDOM.unmountComponentAtNode(tooltipWrapper);
        },
        updateContent: (newContent) => {
            console.warn("The 'updateContent' method has been deprecated on Tooltip. Use update(newProps) method.");
            updateTooltip({ content: newContent });
        },
        update: (newProps) => {
            updateTooltip(newProps);
        }
    }
}

export class Tooltip extends Component {

    static defaultProps = {
        id: null,
        target: null,
        content: null,
        disabled: false,
        className: null,
        style: null,
        appendTo: null,
        position: 'right',
        my: null,
        at: null,
        event: null,
        showEvent: 'mouseenter',
        hideEvent: 'mouseleave',
        autoZIndex: true,
        baseZIndex: 0,
        mouseTrack: false,
        mouseTrackTop: 5,
        mouseTrackLeft: 5,
        showDelay: 0,
        updateDelay: 0,
        hideDelay: 0,
        autoHide: true,
        onBeforeShow: null,
        onBeforeHide: null,
        onShow: null,
        onHide: null
    }

    static propTypes = {
        id: PropTypes.string,
        target: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.array]),
        content: PropTypes.string,
        disabled: PropTypes.bool,
        className: PropTypes.string,
        style: PropTypes.object,
        appendTo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        position: PropTypes.string,
        my: PropTypes.string,
        at: PropTypes.string,
        event: PropTypes.string,
        showEvent: PropTypes.string,
        hideEvent: PropTypes.string,
        autoZIndex: PropTypes.bool,
        baseZIndex: PropTypes.number,
        mouseTrack: PropTypes.bool,
        mouseTrackTop: PropTypes.number,
        mouseTrackLeft: PropTypes.number,
        showDelay: PropTypes.number,
        updateDelay: PropTypes.number,
        hideDelay: PropTypes.number,
        autoHide: PropTypes.bool,
        onBeforeShow: PropTypes.func,
        onBeforeHide: PropTypes.func,
        onShow: PropTypes.func,
        onHide: PropTypes.func
    }

    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            position: this.props.position
        };

        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    isTargetContentEmpty(target) {
        return !(this.props.content || this.getTargetOption(target, 'tooltip'));
    }

    isContentEmpty(target) {
        return !(this.props.content || this.getTargetOption(target, 'tooltip') || this.props.children);
    }

    isMouseTrack(target) {
        return this.getTargetOption(target, 'mousetrack') || this.props.mouseTrack;
    }

    isDisabled(target) {
        return this.getTargetOption(target, 'disabled') === 'true' || this.hasTargetOption(target, 'disabled') || this.props.disabled;
    }

    isAutoHide() {
        return this.getTargetOption(this.currentTarget, 'autohide') || this.props.autoHide;
    }

    getTargetOption(target, option) {
        if (this.hasTargetOption(target, `data-pr-${option}`)) {
            return target.getAttribute(`data-pr-${option}`);
        }

        return null;
    }

    hasTargetOption(target, option) {
        return target && target.hasAttribute(option);
    }

    getEvents(target) {
        let showEvent = this.getTargetOption(target, 'showevent') || this.props.showEvent;
        let hideEvent = this.getTargetOption(target, 'hideevent') || this.props.hideEvent;

        if (this.isMouseTrack(target)) {
            showEvent = 'mousemove';
            hideEvent = 'mouseleave';
        }
        else {
            let event = this.getTargetOption(target, 'event') || this.props.event;
            if (event === 'focus') {
                showEvent = 'focus';
                hideEvent = 'blur';
            }
        }

        return { showEvent, hideEvent };
    }

    getPosition(target) {
        return this.getTargetOption(target, 'position') || this.state.position;
    }

    getMouseTrackPosition(target) {
        let top = this.getTargetOption(target, 'mousetracktop') || this.props.mouseTrackTop;
        let left = this.getTargetOption(target, 'mousetrackleft') || this.props.mouseTrackLeft;

        return { top, left };
    }

    updateText(target, callback) {
        if (this.tooltipTextEl) {
            let content = this.getTargetOption(target, 'tooltip') || this.props.content;

            if (content) {
                this.tooltipTextEl.innerHTML = ''; // remove children
                this.tooltipTextEl.appendChild(document.createTextNode(content));
                callback();
            }
            else if (this.props.children) {
                callback();
            }
        }
    }

    show(e) {
        this.currentTarget = e.currentTarget;

        if (this.isContentEmpty(this.currentTarget) || this.isDisabled(this.currentTarget)) {
            return;
        }

        const updateTooltipState = () => {
            this.updateText(this.currentTarget, () => {
                if (this.props.autoZIndex && !ZIndexUtils.get(this.containerEl)) {
                    ZIndexUtils.set('tooltip', this.containerEl, this.props.baseZIndex);
                }

                this.containerEl.style.left = '';
                this.containerEl.style.top = '';

                if (this.isMouseTrack(this.currentTarget) && !this.containerSize) {
                    this.containerSize = {
                        width: DomHandler.getOuterWidth(this.containerEl),
                        height: DomHandler.getOuterHeight(this.containerEl)
                    };
                }

                this.align(this.currentTarget, { x: e.pageX, y: e.pageY });
            });
        }

        if (this.state.visible) {
            this.applyDelay('updateDelay', updateTooltipState);
        }
        else {
            this.sendCallback(this.props.onBeforeShow, { originalEvent: e, target: this.currentTarget });
            this.applyDelay('showDelay', () => {
                this.setState({
                    visible: true,
                    position: this.getPosition(this.currentTarget)
                }, () => {
                    updateTooltipState();
                    this.sendCallback(this.props.onShow, { originalEvent: e, target: this.currentTarget });
                });

                this.bindDocumentResizeListener();
                this.bindScrollListener();

                DomHandler.addClass(this.currentTarget, this.getTargetOption(this.currentTarget, 'classname'));
            });
        }
    }

    hide(e) {
        this.clearTimeouts();

        if (this.state.visible) {
            DomHandler.removeClass(this.currentTarget, this.getTargetOption(this.currentTarget, 'classname'));

            this.sendCallback(this.props.onBeforeHide, { originalEvent: e, target: this.currentTarget });
            this.applyDelay('hideDelay', () => {
                ZIndexUtils.clear(this.containerEl);
                DomHandler.removeClass(this.containerEl, 'p-tooltip-active');

                if (!this.isAutoHide() && this.allowHide === false) {
                    return;
                }

                this.setState({
                    visible: false,
                    position: this.props.position
                }, () => {
                    if (this.tooltipTextEl) {
                        ReactDOM.unmountComponentAtNode(this.tooltipTextEl);
                    }

                    this.unbindDocumentResizeListener();
                    this.unbindScrollListener();
                    this.currentTarget = null;
                    this.scrollHandler = null;
                    this.containerSize = null;
                    this.allowHide = true;
                    this.sendCallback(this.props.onHide, { originalEvent: e, target: this.currentTarget });
                });
            });
        }
    }

    align(target, coordinate) {
        let left = 0, top = 0;

        if (this.isMouseTrack(target) && coordinate) {
            const containerSize = {
                width: DomHandler.getOuterWidth(this.containerEl),
                height: DomHandler.getOuterHeight(this.containerEl)
            };

            left = coordinate.x;
            top = coordinate.y;

            let { top: mouseTrackTop, left: mouseTrackLeft } = this.getMouseTrackPosition(target);

            switch (this.state.position) {
                case 'left':
                    left -= (containerSize.width + mouseTrackLeft);
                    top -= (containerSize.height / 2) - mouseTrackTop;
                    break;
                case 'right':
                    left += mouseTrackLeft;
                    top -= (containerSize.height / 2) - mouseTrackTop;
                    break;
                case 'top':
                    left -= (containerSize.width / 2) - mouseTrackLeft;
                    top -= (containerSize.height + mouseTrackTop);
                    break;
                case 'bottom':
                    left -= (containerSize.width / 2) - mouseTrackLeft;
                    top += mouseTrackTop;
                    break;
                default:
                    break;
            }

            if (left <= 0 || this.containerSize.width > containerSize.width) {
                this.containerEl.style.left = '0px';
                this.containerEl.style.right = window.innerWidth - containerSize.width - left + 'px';
            }
            else {
                this.containerEl.style.right = '';
                this.containerEl.style.left = left + 'px';
            }

            this.containerEl.style.top = top + 'px';
            DomHandler.addClass(this.containerEl, 'p-tooltip-active');
        }
        else {
            const pos = DomHandler.findCollisionPosition(this.state.position);
            const my = (this.getTargetOption(target, 'my') || this.props.my || pos.my);
            const at = (this.getTargetOption(target, 'at') || this.props.at || pos.at);

            this.containerEl.style.padding = '0px';

            DomHandler.flipfitCollision(this.containerEl, target, my, at, (currentPosition) => {
                const { x: atX, y:atY } = currentPosition.at;
                const { x: myX } = currentPosition.my;
                const position = this.props.at ? (atX !== 'center' && atX !== myX ? atX : atY) : currentPosition.at[`${pos.axis}`];

                this.containerEl.style.padding = '';

                this.setState({
                    position
                }, () => {
                    this.updateContainerPosition();
                    DomHandler.addClass(this.containerEl, 'p-tooltip-active')
                });
            });
        }
    }

    updateContainerPosition() {
        if (this.containerEl) {
            const style = getComputedStyle(this.containerEl);

            if (this.state.position === 'left')
                this.containerEl.style.left = (parseFloat(style.left) - (parseFloat(style.paddingLeft) * 2)) + 'px';
            else if (this.state.position === 'top')
                this.containerEl.style.top = (parseFloat(style.top) - (parseFloat(style.paddingTop) * 2)) + 'px';
        }
    }

    onMouseEnter() {
        if (!this.isAutoHide()) {
            this.allowHide = false;
        }
    }

    onMouseLeave(e) {
        if (!this.isAutoHide()) {
            this.allowHide = true;
            this.hide(e);
        }
    }

    bindDocumentResizeListener() {
        this.documentResizeListener = (e) => {
            if (!DomHandler.isAndroid()) {
                this.hide(e);
            }
        };

        window.addEventListener('resize', this.documentResizeListener);
    }

    unbindDocumentResizeListener() {
        if (this.documentResizeListener) {
            window.removeEventListener('resize', this.documentResizeListener);
            this.documentResizeListener = null;
        }
    }

    bindScrollListener() {
        if (!this.scrollHandler) {
            this.scrollHandler = new ConnectedOverlayScrollHandler(this.currentTarget, (e) => {
                if (this.state.visible) {
                    this.hide(e);
                }
            });
        }

        this.scrollHandler.bindScrollListener();
    }

    unbindScrollListener() {
        if (this.scrollHandler) {
            this.scrollHandler.unbindScrollListener();
        }
    }

    bindTargetEvent(target) {
        if (target) {
            const { showEvent, hideEvent } = this.getEvents(target);
            target.addEventListener(showEvent, this.show);
            target.addEventListener(hideEvent, this.hide);
        }
    }

    unbindTargetEvent(target) {
        if (target) {
            const { showEvent, hideEvent } = this.getEvents(target);
            target.removeEventListener(showEvent, this.show);
            target.removeEventListener(hideEvent, this.hide);
        }
    }

    applyDelay(delayProp, callback) {
        this.clearTimeouts();

        const delay = this.getTargetOption(this.currentTarget, delayProp.toLowerCase()) || this.props[delayProp];
        if (!!delay) {
            this[`${delayProp}Timeout`] = setTimeout(() => callback(), delay);
        }
        else {
            callback();
        }
    }

    sendCallback(callback, ...params) {
        if (callback) {
            callback(...params);
        }
    }

    clearTimeouts() {
        clearTimeout(this.showDelayTimeout);
        clearTimeout(this.updateDelayTimeout);
        clearTimeout(this.hideDelayTimeout);
    }

    updateTargetEvents(target) {
        this.unloadTargetEvents(target);
        this.loadTargetEvents(target);
    }

    loadTargetEvents(target) {
        this.setTargetEventOperations(target || this.props.target, 'bindTargetEvent');
    }

    unloadTargetEvents(target) {
        this.setTargetEventOperations(target || this.props.target, 'unbindTargetEvent');
    }

    setTargetEventOperations(target, operation) {
        if (target) {
            if (DomHandler.isElement(target)) {
                this[operation](target);
            }
            else {
                const setEvent = (target) => {
                    let element = DomHandler.find(document, target);
                    element.forEach((el) => {
                        this[operation](el);
                    });
                }

                if (target instanceof Array) {
                    target.forEach(t => {
                        setEvent(t);
                    });
                }
                else {
                    setEvent(target);
                }
            }
        }
    }

    componentDidMount() {
        if (this.props.target) {
            this.loadTargetEvents();
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.target !== this.props.target) {
            this.unloadTargetEvents(prevProps.target);
            this.loadTargetEvents();
        }

        if (this.state.visible) {
            if (prevProps.content !== this.props.content) {
                this.applyDelay('updateDelay', () => {
                    this.updateText(this.currentTarget, () => {
                        this.align(this.currentTarget);
                    });
                });
            }

            if (this.currentTarget && this.isDisabled(this.currentTarget)) {
                this.hide();
            }
        }
    }

    componentWillUnmount() {
        this.clearTimeouts();
        this.unbindDocumentResizeListener();
        this.unloadTargetEvents();

        if (this.scrollHandler) {
            this.scrollHandler.destroy();
            this.scrollHandler = null;
        }

        ZIndexUtils.clear(this.containerEl);
    }

    renderElement() {
        const tooltipClassName = classNames('p-tooltip p-component', {
            [`p-tooltip-${this.state.position}`]: true
        }, this.props.className);
        const isTargetContentEmpty = this.isTargetContentEmpty(this.currentTarget);

        return (
            <div id={this.props.id} ref={(el) => this.containerEl = el} className={tooltipClassName} style={this.props.style} role="tooltip" aria-hidden={this.state.visible}
                onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                <div className="p-tooltip-arrow"></div>
                <div ref={(el) => this.tooltipTextEl = el} className="p-tooltip-text">
                    {isTargetContentEmpty && this.props.children}
                </div>
            </div>
        );
    }

    render() {
        if (this.state.visible) {
            const element = this.renderElement();

            return <Portal element={element} appendTo={this.props.appendTo} visible />;
        }

        return null;
    }
}
