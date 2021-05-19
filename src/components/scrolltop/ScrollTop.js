import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils/ClassNames';
import { CSSTransition } from '../transition/CSSTransition';
import DomHandler from '../utils/DomHandler';
import { Ripple } from '../ripple/Ripple';
import { ZIndexUtils } from '../utils/ZIndexUtils';

export class ScrollTop extends Component {

    static defaultProps = {
        target: 'window',
        threshold: 400,
        icon: 'pi pi-chevron-up',
        behavior: 'smooth',
        className: null,
        style: null,
        transitionOptions: null,
        onShow: null,
        onHide: null
    };

    static propTypes = {
        target: PropTypes.string,
        threshold: PropTypes.number,
        icon: PropTypes.string,
        behavior: PropTypes.string,
        className: PropTypes.string,
        style: PropTypes.object,
        transitionOptions: PropTypes.object,
        onShow: PropTypes.func,
        onHide: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
            visible: false
        };

        this.onClick = this.onClick.bind(this);
        this.onEnter = this.onEnter.bind(this);
        this.onEntered = this.onEntered.bind(this);
        this.onExited = this.onExited.bind(this);
        this.scrollElementRef = React.createRef();
    }

    onClick() {
        let scrollElement = this.props.target === 'window' ? window : this.helper.parentElement;
        scrollElement.scroll({
            top: 0,
            behavior: this.props.behavior
        });
    }

    checkVisibility(scrollY) {
        this.setState({ visible: scrollY > this.props.threshold });
    }

    bindParentScrollListener() {
        this.scrollListener = () => {
            this.checkVisibility(this.helper.parentElement.scrollTop);
        };

        this.helper.parentElement.addEventListener('scroll', this.scrollListener);
    }

    bindDocumentScrollListener() {
        this.scrollListener = () => {
            this.checkVisibility(DomHandler.getWindowScrollTop());
        };

        window.addEventListener('scroll', this.scrollListener);
    }

    unbindParentScrollListener() {
        if (this.scrollListener) {
            this.helper.parentElement.removeEventListener('scroll', this.scrollListener);
            this.scrollListener = null;
        }
    }

    unbindDocumentScrollListener() {
        if (this.scrollListener) {
            window.removeEventListener('scroll', this.scrollListener);
            this.scrollListener = null;
        }
    }

    onEnter() {
        ZIndexUtils.set('overlay', this.scrollElementRef.current);
    }

    onEntered() {
        this.props.onShow && this.props.onShow();
    }

    onExited() {
        ZIndexUtils.clear(this.scrollElementRef.current);

        this.props.onHide && this.props.onHide();
    }

    componentDidMount() {
        if (this.props.target === 'window')
            this.bindDocumentScrollListener();
        else if (this.props.target === 'parent')
            this.bindParentScrollListener();
    }

    componentWillUnmount() {
        if (this.props.target === 'window')
            this.unbindDocumentScrollListener();
        else if (this.props.target === 'parent')
            this.unbindParentScrollListener();

        ZIndexUtils.clear(this.scrollElementRef.current);
    }

    render() {
        const className = classNames('p-scrolltop p-link p-component', {
            'p-scrolltop-sticky': this.props.target !== 'window'
        }, this.props.className);
        const iconClassName = classNames('p-scrolltop-icon', this.props.icon);
        const isTargetParent = this.props.target === 'parent';

        return (
            <>
                <CSSTransition nodeRef={this.scrollElementRef} classNames="p-scrolltop" in={this.state.visible} timeout={{ enter: 150, exit: 150 }} options={this.props.transitionOptions}
                    unmountOnExit onEnter={this.onEnter} onEntered={this.onEntered} onExited={this.onExited}>
                    <button ref={this.scrollElementRef} type="button" className={className} style={this.props.style} onClick={this.onClick}>
                        <span className={iconClassName}></span>
                        <Ripple />
                    </button>
                </CSSTransition>
                {isTargetParent && <span ref={(el) => this.helper = el} className="p-scrolltop-helper"></span>}
            </>
        );
    }
}
