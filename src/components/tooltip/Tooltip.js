import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DomHandler from '../utils/DomHandler';

export function tip(props) {
    let appendTo = props.appendTo || document.body;

    let tooltipWrapper = document.createElement('div');
    DomHandler.appendChild(tooltipWrapper, appendTo);

    props.appendTo = tooltipWrapper;
    props = {...props, ...props.options};

    let tooltipEl = React.createElement(Tooltip, props);
    ReactDOM.render(tooltipEl, tooltipWrapper);

    return {
        destroy: () => {
            ReactDOM.unmountComponentAtNode(tooltipWrapper);
            DomHandler.removeChild(tooltipWrapper, appendTo);
        },
        updateContent: (content) => {
            ReactDOM.render(React.cloneElement(tooltipEl, {content}), tooltipWrapper);
        }
    }
}

export class Tooltip extends Component {

    static defaultProps = {
        target: null,
        content: null,
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
        onBeforeShow: null,
        onBeforeHide: null,
        onShow: null,
        onHide: null
    }

    static propTypes = {
        target: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.array]),
        content: PropTypes.string,
        className: PropTypes.string,
        style: PropTypes.object,
        appendTo: PropTypes.object,
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
        onBeforeShow: PropTypes.func,
        onBeforeHide: PropTypes.func,
        onBeforeUpdated: PropTypes.func,
        onShow: PropTypes.func,
        onHide: PropTypes.func,
        onUpdated: PropTypes.func
    }

    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            position: this.props.position
        };

        this.appendTo = this.props.appendTo || document.body;

        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
    }

    getEvents() {
        let { showEvent, hideEvent } = this.props;

        if (this.props.mouseTrack) {
            showEvent = 'mousemove';
            hideEvent = 'mouseleave';
        }
        else if (this.props.event === 'focus') {
            showEvent = 'focus';
            hideEvent = 'blur';
        }

        return { showEvent, hideEvent };
    }

    updateText(target, callback) {
        if (this.tooltipTextEl) {
            let content = this.props.content;

            if (target && target.hasAttribute('data-pr-tooltip')) {
                content = target.getAttribute('data-pr-tooltip');
            }

            if (content) {
                this.tooltipTextEl.innerHTML = ''; // remove children
                this.tooltipTextEl.appendChild(document.createTextNode(content));
                callback();
            }
            else if (this.props.children) {
                ReactDOM.unmountComponentAtNode(this.tooltipTextEl);
                ReactDOM.render(this.props.children, this.tooltipTextEl, callback);
            }
        }
    }

    show(e) {
        this.currentTarget = e.currentTarget;

        const updateTooltipState = () => {
            this.updateText(this.currentTarget, () => {
                if (this.props.autoZIndex && !this.containerEl.style.zIndex) {
                    this.containerEl.style.zIndex = String(this.props.baseZIndex + DomHandler.generateZIndex());
                }

                this.containerEl.style.left = '';
                this.containerEl.style.top = '';
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
                    visible: true
                }, () => {
                    updateTooltipState();
                    this.sendCallback(this.props.onShow, { originalEvent: e, target: this.currentTarget });
                });

                this.bindDocumentResizeListener();
            });
        }
    }

    hide(e) {
        if (this.state.visible) {
            this.sendCallback(this.props.onBeforeHide, { originalEvent: e, target: this.currentTarget });
            this.applyDelay('hideDelay', () => {
                DomHandler.removeClass(this.containerEl, 'p-tooltip-active');

                this.setState({
                    visible: false,
                    position: this.props.position
                }, () => {
                    if (this.tooltipTextEl) {
                        ReactDOM.unmountComponentAtNode(this.tooltipTextEl);
                    }

                    this.unbindDocumentResizeListener();
                    this.currentTarget = null;
                    this.sendCallback(this.props.onHide, { originalEvent: e, target: this.currentTarget });
                });
            });
        }
    }

    align(target, coordinate) {
        let left = 0, top = 0;

        if (this.props.mouseTrack && coordinate) {
            const container = {
                width: DomHandler.getOuterWidth(this.containerEl),
                height: DomHandler.getOuterHeight(this.containerEl)
            };

            left = coordinate.x;
            top = coordinate.y;
            switch (this.state.position) {
                case 'left':
                    left -= (container.width + this.props.mouseTrackLeft);
                    top -= (container.height / 2) - this.props.mouseTrackTop;
                    break;
                case 'right':
                    left += this.props.mouseTrackLeft;
                    top -= (container.height / 2) - this.props.mouseTrackTop;
                    break;
                case 'top':
                    left -= (container.width / 2) - this.props.mouseTrackLeft;
                    top -= (container.height + this.props.mouseTrackTop);
                    break;
                case 'bottom':
                    left -= (container.width / 2) - this.props.mouseTrackLeft;
                    top += this.props.mouseTrackTop;
                    break;
                default:
                    break;
            }

            this.containerEl.style.left = left + 'px';
            this.containerEl.style.top = top + 'px';
            DomHandler.addClass(this.containerEl, 'p-tooltip-active');
        }
        else {
            const pos = DomHandler.findCollisionPosition(this.state.position);
            const my = (this.props.my || pos.my);
            const at = (this.props.at || pos.at);
            DomHandler.flipfitCollision(this.containerEl, target, my, at, (currentPosition) => {
                const { x, y } = currentPosition.at;
                let position = this.props.at ? (x !== 'center' ? x : y) : currentPosition.at[`${pos.axis}`];

                this.setState({
                    position
                }, () => DomHandler.addClass(this.containerEl, 'p-tooltip-active'));
            });
        }
    }

    bindDocumentResizeListener() {
        this.documentResizeListener = (e) => {
            this.hide(e);
        };

        window.addEventListener('resize', this.documentResizeListener);
    }

    unbindDocumentResizeListener() {
        if (this.documentResizeListener) {
            window.removeEventListener('resize', this.documentResizeListener);
            this.documentResizeListener = null;
        }
    }

    bindTargetEvent(target) {
        if (target) {
            const { showEvent, hideEvent } = this.getEvents();
            target.addEventListener(showEvent, this.show);
            target.addEventListener(hideEvent, this.hide);
        }
    }

    unbindTargetEvent(target) {
        if (target) {
            const { showEvent, hideEvent } = this.getEvents();
            target.removeEventListener(showEvent, this.show);
            target.removeEventListener(hideEvent, this.hide);
        }
    }

    applyDelay(delayProp, callback) {
        this.clearTimeouts();

        const delay = this.props[delayProp];
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

    loadTargetEvents() {
        if (DomHandler.isElement(this.props.target)) {
            this.bindTargetEvent(this.props.target);
        }
        else {
            const setEvent = (target) => {
                let element = DomHandler.find(document, target);
                element.forEach((el) => {
                    this.bindTargetEvent(el);
                });
            }

            if (this.props.target instanceof Array) {
                this.props.target.forEach(target => {
                    setEvent(target);
                });
            }
            else {
                setEvent(this.props.target);
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
            this.loadTargetEvents();
        }

        if (this.state.visible && prevProps.content !== this.props.content) {
            this.applyDelay('updateDelay', () => {
                this.updateText(this.currentTarget, () => {
                    this.align(this.currentTarget);
                });
            });
        }
    }

    componentWillUnmount() {
        this.clearTimeouts();
        this.unbindDocumentResizeListener();
        this.unbindTargetEvent();
    }

    renderElement() {
        const tooltipClass = classNames('p-tooltip p-component', {
            [`p-tooltip-${this.state.position}`]: true
        }, this.props.className);

        return (
            <div ref={(el) => this.containerEl = el} className={tooltipClass} style={this.props.style}>
                <div className="p-tooltip-arrow"></div>
                <div ref={(el) => this.tooltipTextEl = el} className="p-tooltip-text"></div>
            </div>
        );
    }

    render() {
        if (this.state.visible) {
            const element = this.renderElement();

            return ReactDOM.createPortal(element, this.appendTo);
        }

        return null;
    }
}
