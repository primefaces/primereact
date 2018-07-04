import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DomHandler from '../utils/DomHandler';
import UniqueComponentId from '../utils/UniqueComponentId';

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

    componentDidUpdate() {
        const collapsed = this.props.onToggle ? this.props.collapsed : this.state.collapsed;

        if(this.props.toggleable && !collapsed && this.expanding) {
            DomHandler.addClass(this.contentWrapper, 'ui-fieldset-content-wrapper-expanding');

            setTimeout(() => {
                DomHandler.removeClass(this.contentWrapper, 'ui-fieldset-content-wrapper-expanding');
                this.expanding = false;
            }, 500);
        }
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

        this.expanding = true;

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

    renderContent(collapsed) {
        const className = classNames('ui-fieldset-content-wrapper', {
            'ui-fieldset-content-wrapper-collapsed': (this.props.toggleable && collapsed),
            'ui-fieldset-content-wrapper-expanded': (this.props.toggleable && !collapsed)
        });
        const id = this.id + '_content';

        return (
            <div ref={(el) => this.contentWrapper = el} className={className} id={id} aria-hidden={collapsed} role="region">
                <div className="ui-fieldset-content">
                    {this.props.children}
                </div>
            </div>
        );
    }

    renderToggleIcon(collapsed) {
        if (this.props.toggleable) {
            const className = classNames('ui-fieldset-toggler pi', {'pi-plus': collapsed, 'pi-minus': !collapsed});

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
                <a href={'#' + ariaControls} aria-controls={ariaControls} aria-expanded={!collapsed} tabIndex={this.props.toggleable ? null  : -1}>
                    {toggleIcon}
                    <span className="ui-fieldset-legend-text">{this.props.legend}</span>
                 </a>
            );
        }
        else {
            return (
                <span className="ui-fieldset-legend-text">{this.props.legend}</span>
            );
        }
    }

    renderLegend(collapsed) {
        const legendContent = this.renderLegendContent(collapsed);

        return (
            <legend className="ui-fieldset-legend ui-corner-all ui-state-default ui-unselectable-text" onClick={this.toggle}>
                {legendContent}
            </legend>
        );
    }

    render() {
        const className = classNames('ui-fieldset ui-widget ui-widget-content ui-corner-all', this.props.className, {'ui-fieldset-toggleable': this.props.toggleable});
        const collapsed = this.props.toggleable ? (this.props.onToggle ? this.props.collapsed : this.state.collapsed) : false;
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