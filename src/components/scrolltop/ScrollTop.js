import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils/ClassNames';
import { CSSTransition } from 'react-transition-group';
import DomHandler from '../utils/DomHandler';
import { Ripple } from '../ripple/Ripple';

export class ScrollTop extends Component {

    static defaultProps = {
        target: 'window',
        threshold: 400,
        icon: 'pi pi-chevron-up',
        behavior: 'smooth',
        className: null,
        style: null
    };

    static propTypes = {
        target: PropTypes.string,
        threshold: PropTypes.number,
        icon: PropTypes.string,
        behavior: PropTypes.string,
        className: PropTypes.string,
        style: PropTypes.object
    };

    constructor(props) {
        super(props);

        this.state = {
            visible: false
        };

        this.onClick = this.onClick.bind(this);
        this.onEnter = this.onEnter.bind(this);
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
        this.scrollElementRef.current.style.zIndex = String(DomHandler.generateZIndex());
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
    }

    render() {
        const className = classNames('p-scrolltop p-link p-component', {
            'p-scrolltop-sticky': this.props.target !== 'window'
        }, this.props.className);
        const iconClassName = classNames('p-scrolltop-icon', this.props.icon);
        const isTargetParent = this.props.target === 'parent';

        return (
            <>
                <CSSTransition nodeRef={this.scrollElementRef} classNames="p-scrolltop" in={this.state.visible} timeout={{ enter: 150, exit: 150 }} unmountOnExit onEnter={this.onEnter}>
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
