import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames, DomHandler, ObjectUtils, ZIndexUtils } from '../utils/Utils';
import { Portal } from '../portal/Portal';
import PrimeReact from '../api/Api';

export class BlockUI extends Component {

    static defaultProps = {
        id: null,
        blocked: false,
        fullScreen: false,
        baseZIndex: 0,
        autoZIndex: true,
        style: null,
        className: null,
        template: null,
        onBlocked: null,
        onUnblocked: null
    };

    static propTypes = {
        id: PropTypes.string,
        blocked: PropTypes.bool,
        fullScreen: PropTypes.bool,
        baseZIndex: PropTypes.number,
        autoZIndex: PropTypes.bool,
        style: PropTypes.object,
        className: PropTypes.string,
        template: PropTypes.any,
        onBlocked: PropTypes.func,
        onUnblocked: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
            visible: props.blocked
        };

        this.block = this.block.bind(this);
        this.unblock = this.unblock.bind(this);
        this.onPortalMounted = this.onPortalMounted.bind(this);
    }

    block() {
        this.setState({ visible: true });
    }

    unblock() {
        if (!this.mask) {
           this.setState({ visible: false }, () => {
                this.props.fullScreen && DomHandler.removeClass(document.body, 'p-overflow-hidden');
                this.props.onUnblocked && this.props.onUnblocked();
            });
           return;
        }

        DomHandler.addClass(this.mask, 'p-component-overlay-leave');
        this.mask.addEventListener('animationend', () => {
            ZIndexUtils.clear(this.mask);
            this.setState({ visible: false }, () => {
                this.props.fullScreen && DomHandler.removeClass(document.body, 'p-overflow-hidden');
                this.props.onUnblocked && this.props.onUnblocked();
            });
        });
    }

    onPortalMounted() {
        if (this.props.fullScreen) {
            DomHandler.addClass(document.body, 'p-overflow-hidden');
            document.activeElement.blur();
        }

        if (this.props.autoZIndex) {
            const key = this.props.fullScreen ? 'modal' : 'overlay';
            ZIndexUtils.set(key, this.mask, PrimeReact.autoZIndex, this.props.baseZIndex || PrimeReact.zIndex[key]);
        }

        this.props.onBlocked && this.props.onBlocked();
    }

    renderMask() {
        if (this.state.visible) {
            const className = classNames('p-blockui p-component-overlay p-component-overlay-enter', {
                'p-blockui-document': this.props.fullScreen
            }, this.props.className);
            const content = this.props.template ? ObjectUtils.getJSXElement(this.props.template, this.props) : null;
            const mask = (
                <div ref={(el) => this.mask = el} className={className} style={this.props.style}>
                    {content}
                </div>
            );

            return (
                <Portal element={mask} appendTo={this.props.fullScreen ? document.body : 'self'} onMounted={this.onPortalMounted} />
            );
        }

        return null;
    }

    componentDidMount() {
        if (this.state.visible) {
            this.block();
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.blocked !== this.props.blocked) {
            this.props.blocked ? this.block() : this.unblock();
        }
    }

    componentWillUnmount() {
        if (this.props.fullScreen) {
            DomHandler.removeClass(document.body, 'p-overflow-hidden');
        }

        ZIndexUtils.clear(this.mask);
    }

    render() {
        const mask = this.renderMask();

        return (
            <div ref={(el) => this.container = el} id={this.props.id} className="p-blockui-container">
                {this.props.children}
                {mask}
            </div>
        );
    }
}
