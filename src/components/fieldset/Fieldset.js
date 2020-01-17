import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import UniqueComponentId from '../utils/UniqueComponentId';
import { CSSTransition } from 'react-transition-group';

export class Fieldset extends Component {

    static defaultProps = {
        id: null,
        legend: null,
        className: null,
        style: null,
        toggleable: null,
        collapsed: null,
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
        onExpand: PropTypes.func,
        onCollapse: PropTypes.func,
        onToggle: PropTypes.func,
        onClick: PropTypes.func
    };

    constructor(props) {
        super(props);
        if (!this.props.onToggle) {
            this.state = {
                collapsed: this.props.collapsed
            };
        }

        this.toggle = this.toggle.bind(this);
        this.id = this.props.id || UniqueComponentId();
    }

    toggle(event) {
        if (this.props.toggleable) {
            const collapsed = this.props.onToggle ? this.props.collapsed : this.state.collapsed;

            if(collapsed)
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
            this.setState({collapsed: false});
        }

        if (this.props.onExpand) {
            this.props.onExpand(event);
        }
    }

    collapse(event) {
        if (!this.props.onToggle) {
            this.setState({collapsed: true});
        }

        if (this.props.onCollapse) {
            this.props.onCollapse(event);
        }
    }

    isCollapsed() {
        return this.props.toggleable ? (this.props.onToggle ? this.props.collapsed : this.state.collapsed): false;
    }

    renderContent(collapsed) {
        const className = classNames('p-toggleable-content', {'p-toggleable-content-collapsed': collapsed});
        const id = this.id + '_content';

        return (
            <CSSTransition classNames="p-toggleable-content" timeout={{enter: 400, exit: 250}} in={!this.isCollapsed()}>
                <div id={id} className={className} aria-hidden={collapsed} role="region" aria-labelledby={this.id + '_header'}>
                    <div className="p-fieldset-content">
                        {this.props.children}
                    </div>
                </div>
            </CSSTransition>
        );
    }

    renderToggleIcon(collapsed) {
        if (this.props.toggleable) {
            const className = classNames('p-fieldset-toggler pi', {'pi-plus': collapsed, 'pi-minus': !collapsed});

            return (
                <span className={className}></span>
            );
        }
        else {
            return null;
        }
    }

    renderLegendContent(collapsed) {
        if (this.props.toggleable) {
            const toggleIcon = this.renderToggleIcon(collapsed);
            const ariaControls = this.id + '_content';

            return (
                <a href={'#' + ariaControls} aria-controls={ariaControls} id={this.id + '_header'} aria-expanded={!collapsed} tabIndex={this.props.toggleable ? null  : -1}>
                    {toggleIcon}
                    <span className="p-fieldset-legend-text">{this.props.legend}</span>
                 </a>
            );
        }
        else {
            return (
                <span className="p-fieldset-legend-text" id={this.id + '_header'}>{this.props.legend}</span>
            );
        }
    }

    renderLegend(collapsed) {
        const legendContent = this.renderLegendContent(collapsed);

        return (
            <legend className="p-fieldset-legend p-unselectable-text" onClick={this.toggle}>
                {legendContent}
            </legend>
        );
    }

    render() {
        const className = classNames('p-fieldset p-component', this.props.className, {'p-fieldset-toggleable': this.props.toggleable});
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
