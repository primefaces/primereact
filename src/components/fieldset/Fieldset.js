import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils/ClassNames';
import UniqueComponentId from '../utils/UniqueComponentId';
import { CSSTransition } from '../transition/CSSTransition';
import { Ripple } from '../ripple/Ripple';

export class Fieldset extends Component {

    static defaultProps = {
        id: null,
        legend: null,
        className: null,
        style: null,
        toggleable: null,
        collapsed: null,
        transitionOptions: null,
        onExpand: null,
        onCollapse: null,
        onToggle: null,
        onClick: null
    };

    static propTypes = {
        id: PropTypes.string,
        legend: PropTypes.any,
        className: PropTypes.string,
        style: PropTypes.object,
        toggleable: PropTypes.bool,
        collapsed: PropTypes.bool,
        transitionOptions: PropTypes.object,
        onExpand: PropTypes.func,
        onCollapse: PropTypes.func,
        onToggle: PropTypes.func,
        onClick: PropTypes.func
    };

    constructor(props) {
        super(props);
        let state = {
            id: props.id
        };

        if (!this.props.onToggle) {
            state = {
                ...state,
                collapsed: props.collapsed
            };
        }

        this.state = state;

        this.toggle = this.toggle.bind(this);
        this.contentRef = React.createRef();
    }

    toggle(event) {
        if (this.props.toggleable) {
            const collapsed = this.props.onToggle ? this.props.collapsed : this.state.collapsed;

            if (collapsed)
                this.expand(event);
            else
                this.collapse(event);

            if (this.props.onToggle) {
                this.props.onToggle({
                    originalEvent: event,
                    value: !collapsed
                });
            }
        }

        event.preventDefault();
    }

    expand(event) {
        if (!this.props.onToggle) {
            this.setState({ collapsed: false });
        }

        if (this.props.onExpand) {
            this.props.onExpand(event);
        }
    }

    collapse(event) {
        if (!this.props.onToggle) {
            this.setState({ collapsed: true });
        }

        if (this.props.onCollapse) {
            this.props.onCollapse(event);
        }
    }

    isCollapsed() {
        return this.props.toggleable ? (this.props.onToggle ? this.props.collapsed : this.state.collapsed) : false;
    }

    componentDidMount() {
        if (!this.state.id) {
            this.setState({ id: UniqueComponentId() });
        }
    }

    renderContent(collapsed) {
        const id = this.state.id + '_content';

        return (
            <CSSTransition nodeRef={this.contentRef} classNames="p-toggleable-content" timeout={{ enter: 1000, exit: 450 }} in={!collapsed} unmountOnExit options={this.props.transitionOptions}>
                <div ref={this.contentRef} id={id} className="p-toggleable-content" aria-hidden={collapsed} role="region" aria-labelledby={this.state.id + '_header'}>
                    <div className="p-fieldset-content">
                        {this.props.children}
                    </div>
                </div>
            </CSSTransition>
        );
    }

    renderToggleIcon(collapsed) {
        if (this.props.toggleable) {
            const className = classNames('p-fieldset-toggler pi', { 'pi-plus': collapsed, 'pi-minus': !collapsed });

            return (
                <span className={className}></span>
            );
        }

        return null;
    }

    renderLegendContent(collapsed) {
        if (this.props.toggleable) {
            const toggleIcon = this.renderToggleIcon(collapsed);
            const ariaControls = this.state.id + '_content';

            return (
                <a href={'#' + ariaControls} aria-controls={ariaControls} id={this.state.id + '_header'} aria-expanded={!collapsed} tabIndex={this.props.toggleable ? null : -1}>
                    {toggleIcon}
                    <span className="p-fieldset-legend-text">{this.props.legend}</span>
                    <Ripple />
                </a>
            );
        }

        return (
            <span className="p-fieldset-legend-text" id={this.state.id + '_header'}>{this.props.legend}</span>
        );
    }

    renderLegend(collapsed) {
        const legendContent = this.renderLegendContent(collapsed);
        if (this.props.legend != null || this.props.toggleable) {
            return (
                <legend className="p-fieldset-legend p-unselectable-text" onClick={this.toggle}>
                    {legendContent}
                </legend>
            );
        }
    }

    render() {
        const className = classNames('p-fieldset p-component', this.props.className, { 'p-fieldset-toggleable': this.props.toggleable });
        const collapsed = this.isCollapsed();
        const legend = this.renderLegend(collapsed);
        const content = this.renderContent(collapsed);

        return (
            <fieldset id={this.props.id} className={className} style={this.props.style} onClick={this.props.onClick}>
                {legend}
                {content}
            </fieldset>
        );
    }
}
