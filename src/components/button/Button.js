import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { tip } from "../tooltip/Tooltip";
import ObjectUtils from '../utils/ObjectUtils';
import { Ripple } from '../ripple/Ripple';

export class Button extends Component {

    static defaultProps = {
        label: null,
        icon: null,
        iconPos: 'left',
        badge: null,
        badgeClassName: null,
        tooltip: null,
        tooltipOptions: null
    }

    static propTypes = {
        label: PropTypes.string,
        icon: PropTypes.string,
        iconPos: PropTypes.string,
        badge: PropTypes.string,
        badgeClassName: PropTypes.string,
        tooltip: PropTypes.string,
        tooltipOptions: PropTypes.object
    };

    componentDidMount() {
        if (this.props.tooltip) {
            this.renderTooltip();
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.tooltip !== this.props.tooltip) {
            if (this.tooltip)
                this.tooltip.updateContent(this.props.tooltip);
            else
                this.renderTooltip();
        }
    }

    componentWillUnmount() {
        if (this.tooltip) {
            this.tooltip.destroy();
            this.tooltip = null;
        }
    }

    renderTooltip() {
        this.tooltip = tip({
            target: this.element,
            content: this.props.tooltip,
            options: this.props.tooltipOptions
        });
    }

    renderIcon() {
        if(this.props.icon) {
            let className = classNames(this.props.icon, 'p-c', {
                'p-button-icon-left': this.props.iconPos === 'left' && this.props.label,
                'p-button-icon-right': this.props.iconPos === 'right' && this.props.label,
                'p-button-icon-top': this.props.iconPos === 'top' && this.props.label,
                'p-button-icon-bottom': this.props.iconPos === 'bottom' && this.props.label
            });

            return (
                <span className={className}></span>
            );
        }

        return null;
    }

    renderLabel() {
        const buttonLabel = this.props.label||'&nbsp;';

        return (
            <span className="p-button-label p-c">{buttonLabel}</span>
        );
    }

    renderBadge() {
        if (this.props.badge) {
            const badgeClassName = classNames('p-badge', this.props.badgeClassName);

            return <span className={badgeClassName}>{this.props.badge}</span>
        }

        return null;
    }

    render() {
        let className = classNames('p-button p-component', this.props.className, {
            'p-button-icon-only': this.props.icon && !this.props.label,
            'p-button-vertical': (this.props.iconPos === 'top' || this.props.iconPos === 'bottom') && this.label,
            'p-disabled': this.props.disabled
        });
        let icon = this.renderIcon();
        let label = this.renderLabel();
        let badge = this.renderBadge();

        let buttonProps = ObjectUtils.findDiffKeys(this.props, Button.defaultProps);

        return (
            <button ref={(el) => this.element = el} {...buttonProps} className={className}>
                {icon}
                {label}
                {this.props.children}
                {badge}
                <Ripple />
            </button>
        );
    }
}
