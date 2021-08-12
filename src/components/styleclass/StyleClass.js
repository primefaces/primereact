import { Component } from 'react';
import PropTypes from 'prop-types';
import { DomHandler } from '../utils/Utils';


export class StyleClass extends Component {

    static defaultProps = {
        nodeRef: null,
        selector: null,
        enterClassName: null,
        enterActiveClassName: null,
        enterToClassName: null,
        leaveClassName: null,
        leaveActiveClassName: null,
        leaveToClassName: null,
        hideOnOutsideClick: false,
        toggleClassName: null
    }

    static propTypes = {
        nodeRef: PropTypes.any,
        selector: PropTypes.string,
        enterClassName: PropTypes.string,
        enterActiveClassName: PropTypes.string,
        enterToClassName: PropTypes.string,
        leaveClassName: PropTypes.string,
        leaveActiveClassName: PropTypes.string,
        leaveToClassName: PropTypes.string,
        hideOnOutsideClick: PropTypes.bool,
        toggleClassName: PropTypes.string
    }

    enter() {
        if (this.props.enterActiveClassName) {
            if (!this.animating) {
                this.animating = true;

                if (this.props.enterActiveClassName === 'slidedown') {
                    this.target.style.height = '0px';
                    DomHandler.removeClass(this.target, 'hidden');
                    this.target.style.maxHeight = this.target.scrollHeight + 'px';
                    DomHandler.addClass(this.target, 'hidden');
                    this.target.style.height = '';
                }

                DomHandler.addClass(this.target, this.props.enterActiveClassName);
                if (this.props.enterClassName) {
                    DomHandler.removeClass(this.target, this.props.enterClassName);
                }

                this.enterListener = () => {
                    DomHandler.removeClass(this.target, this.props.enterActiveClassName);
                    if (this.props.enterToClassName) {
                        DomHandler.addClass(this.target, this.props.enterToClassName);
                    }
                    this.target.removeEventListener('animationend', this.enterListener);

                    if (this.props.enterActiveClassName === 'slidedown') {
                        this.target.style.maxHeight = '';
                    }
                    this.animating = false;
                };

                this.target.addEventListener('animationend', this.enterListener);
            }
        }
        else {
            if (this.props.enterClassName) {
                DomHandler.removeClass(this.target, this.props.enterClassName);
            }

            if (this.props.enterToClassName) {
                DomHandler.addClass(this.target, this.props.enterToClassName);
            }
        }

        if (this.props.hideOnOutsideClick) {
            this.bindDocumentListener();
        }
    }

    leave() {
        if (this.props.leaveActiveClassName) {
            if (!this.animating) {
                this.animating = true;
                DomHandler.addClass(this.target, this.props.leaveActiveClassName);
                if (this.props.leaveClassName) {
                    DomHandler.removeClass(this.target, this.props.leaveClassName);
                }

                this.leaveListener = () => {
                    DomHandler.removeClass(this.target, this.props.leaveActiveClassName);
                    if (this.props.leaveToClassName) {
                        DomHandler.addClass(this.target, this.props.leaveToClassName);
                    }
                    this.target.removeEventListener('animationend', this.leaveListener);
                    this.animating = false;
                };

                this.target.addEventListener('animationend', this.leaveListener);
            }
        }
        else {
            if (this.props.leaveClassName) {
                DomHandler.removeClass(this.target, this.props.leaveClassName);
            }

            if (this.props.leaveToClassName) {
                DomHandler.addClass(this.target, this.props.leaveToClassName);
            }
        }

        if (this.props.hideOnOutsideClick) {
            this.unbindDocumentListener();
        }
    }

    resolveTarget() {
        if (this.target) {
            return this.target;
        }

        switch (this.props.selector) {
            case '@next':
                return this.el.nextElementSibling;

            case '@prev':
                return this.el.previousElementSibling;

            case '@parent':
                return this.el.parentElement;

            case '@grandparent':
                return this.el.parentElement.parentElement;

            default:
                return document.querySelector(this.props.selector);
        }
    }

    bindDocumentListener() {
        if (!this.documentListener) {
            this.documentListener = (event) => {
                if (getComputedStyle(this.target).getPropertyValue('position') === 'static') {
                    this.unbindDocumentListener();
                }
                else if (!this.el.isSameNode(event.target) && !this.el.contains(event.target) && !this.target.contains(event.target)) {
                    this.leave();
                }
            };

            this.el.ownerDocument.addEventListener('click', this.documentListener);
        }
    }

    unbindDocumentListener() {
        if (this.documentListener) {
            this.el.ownerDocument.removeEventListener('click', this.documentListener);
            this.documentListener = null;
        }
    }

    bindEvents() {
        this.clickListener = () => {
            this.target = this.resolveTarget();

            if (this.props.toggleClassName) {
                if (DomHandler.hasClass(this.target, this.props.toggleClassName))
                    DomHandler.removeClass(this.target, this.props.toggleClassName);
                else
                    DomHandler.addClass(this.target, this.props.toggleClassName);
            }
            else {
                if (this.target.offsetParent === null)
                    this.enter();
                else
                    this.leave();
            }
        }

        this.el.addEventListener('click', this.clickListener);
    }

    unbindEvents() {
        if (this.clickListener) {
            this.el.removeEventListener('click', this.clickListener);
            this.clickListener = null;
        }
    }

    get el() {
        const ref = this.props.nodeRef;
        if (ref) {
            return typeof ref === 'object' && ref.hasOwnProperty('current') ? ref.current : ref;
        }

        return null;
    }

    init() {
        if (this.el) {
            this.bindEvents();
        }
    }

    destroy() {
        this.unbindEvents();
        this.unbindDocumentListener();
        this.target = null;
    }

    componentDidMount() {
        this.init();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.nodeRef !== this.props.nodeRef) {
            this.destroy();
            this.init();
        }
    }

    componentWillUnmount() {
        this.destroy();
    }

    render() {
        return this.props.children;
    }
}
