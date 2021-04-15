import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils/ClassNames';
import { tip } from '../tooltip/Tooltip';
import ObjectUtils from '../utils/ObjectUtils';
import { Ripple } from '../ripple/Ripple';

export class ButtonComponent extends Component {

    static defaultProps = {
        label: null,
        icon: null,
        iconPos: 'left',
        badge: null,
        badgeClassName: null,
        tooltip: null,
        tooltipOptions: null,
        forwardRef: null,
        disabled: false,
        loading: false,
        loadingOptions: null
    }

    static propTypes = {
        label: PropTypes.string,
        icon: PropTypes.any,
        iconPos: PropTypes.string,
        badge: PropTypes.string,
        badgeClassName: PropTypes.string,
        tooltip: PropTypes.string,
        tooltipOptions: PropTypes.object,
        forwardRef: PropTypes.any,
        disabled: PropTypes.bool,
        loading: PropTypes.bool,
        loadingOptions: PropTypes.any
    };

    getElementRef(el) {
        this.element = el;

        if (this.props.forwardRef) {
            if (ObjectUtils.isFunction(this.props.forwardRef)) {
                return this.props.forwardRef(el);
            }
            else {
                return this.props.forwardRef;
            }
        }

        return this.element;
    }

    componentDidMount() {
        if (this.props.tooltip) {
            this.renderTooltip();
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.tooltip !== this.props.tooltip || prevProps.tooltipOptions !== this.props.tooltipOptions) {
            if (this.tooltip)
                this.tooltip.update({ content: this.props.tooltip, ...(this.props.tooltipOptions || {}) });
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

    getOptions(loadingOptions) {
        let disabled = this.isDisabled(loadingOptions);
        let vertical = this.isVertical(loadingOptions);
        let iconOnly = this.isIconOnly(loadingOptions);

        return { disabled, vertical, iconOnly };
    }

    getLoadingOptions() {
        if (this.props.loading) {
            let defaultOptions = { icon: 'pi pi-spin pi-spinner', position: 'left', disabled: true };
            let options = { ...defaultOptions, ...(this.props.loadingOptions || {}) };

            return options;
        }

        return null;
    }

    isDisabled(loadingOptions) {
        return this.props.disabled || (loadingOptions && loadingOptions.disabled);
    }

    isIconOnly(loadingOptions) {
        return !this.props.label && (this.props.icon || (loadingOptions && loadingOptions.icon))
    }

    isVertical(loadingOptions) {
        return this.props.label && (
            (this.props.iconPos === 'top' || this.props.iconPos === 'bottom') ||
            (loadingOptions && (loadingOptions.position === 'top' || loadingOptions.position === 'bottom'))
        );
    }

    renderTooltip() {
        this.tooltip = tip({
            target: this.element,
            content: this.props.tooltip,
            options: this.props.tooltipOptions
        });
    }

    renderIcon(icon, position) {
        let content = null;

        if (icon) {
            let iconType = typeof icon;
            let className = classNames('p-c', {
                [`${icon}`]: iconType === 'string',
                'p-button-icon-left': position === 'left' && this.props.label,
                'p-button-icon-right': position === 'right' && this.props.label,
                'p-button-icon-top': position === 'top' && this.props.label,
                'p-button-icon-bottom': position === 'bottom' && this.props.label
            });
            content = <span className={className}></span>;

            if (iconType !== 'string') {
                const defaultContentOptions = {
                    className,
                    element: content,
                    props: this.props
                };

                content = ObjectUtils.getJSXElement(icon, defaultContentOptions);
            }
        }

        return content;
    }

    renderLabel() {
        if (this.props.label) {
            return <span className="p-button-label p-c">{this.props.label}</span>;
        }

        return !this.props.children && !this.props.label && <span className="p-button-label p-c" dangerouslySetInnerHTML={{ __html: "&nbsp;" }}></span>
    }

    renderBadge() {
        if (this.props.badge) {
            const badgeClassName = classNames('p-badge', this.props.badgeClassName);

            return <span className={badgeClassName}>{this.props.badge}</span>
        }

        return null;
    }

    render() {
        let loadingOptions = this.getLoadingOptions();
        let { disabled, vertical, iconOnly } = this.getOptions(loadingOptions);
        let className = classNames('p-button p-component', this.props.className, {
            'p-button-icon-only': iconOnly,
            'p-button-vertical': vertical,
            'p-disabled': disabled
        });
        let loading = this.props.loading && this.renderIcon(loadingOptions.icon, loadingOptions.position);
        let icon = this.renderIcon(this.props.icon, this.props.iconPos);
        let label = this.renderLabel();
        let badge = this.renderBadge();

        let buttonProps = ObjectUtils.findDiffKeys(this.props, ButtonComponent.defaultProps);

        return (
            <button ref={(el) => this.getElementRef(el)} {...buttonProps} className={className} disabled={disabled}>
                {loading}
                {icon}
                {label}
                {this.props.children}
                {badge}
                <Ripple />
            </button>
        );
    }
}

export const Button = React.forwardRef((props, ref) => <ButtonComponent forwardRef={ref} {...props} />);
