import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils/ClassNames';
import { tip } from '../tooltip/Tooltip';
import { Ripple } from '../ripple/Ripple';

export class ToggleButton extends Component {

    static defaultProps = {
        id: null,
        onIcon: null,
        offIcon: null,
        onLabel: 'Yes',
        offLabel: 'No',
        iconPos: 'left',
        style: null,
        className: null,
        checked: false,
        tabIndex: 0,
        tooltip: null,
        tooltipOptions: null,
        ariaLabelledBy: null,
        onChange: null,
        onFocus: null,
        onBlur: null
    };

    static propTypes = {
        id: PropTypes.string,
        onIcon: PropTypes.string,
        offIcon: PropTypes.string,
        onLabel: PropTypes.string,
        offLabel: PropTypes.string,
        iconPos: PropTypes.string,
        style: PropTypes.object,
        className: PropTypes.string,
        checked: PropTypes.bool,
        tabIndex: PropTypes.number,
        tooltip: PropTypes.string,
        tooltipOptions: PropTypes.object,
        ariaLabelledBy: PropTypes.string,
        onChange: PropTypes.func,
        onFocus: PropTypes.func,
        onBlur: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    toggle(e) {
        if (!this.props.disabled && this.props.onChange) {
            this.props.onChange({
                originalEvent: e,
                value: !this.props.checked,
                stopPropagation : () =>{},
                preventDefault : () =>{},
                target: {
                    name: this.props.name,
                    id: this.props.id,
                    value: !this.props.checked,
                }
            });
        }
    }

    onKeyDown(event) {
        if (event.key === 'Enter') {
            this.toggle(event);
            event.preventDefault();
        }
    }

    hasLabel() {
        return this.props.onLabel && this.props.onLabel.length > 0 && this.props.offLabel && this.props.offLabel.length > 0;
    }

    hasIcon() {
        return this.props.onIcon && this.props.onIcon.length > 0 && this.props.offIcon && this.props.offIcon.length > 0;
    }

    getLabel() {
        return this.hasLabel() ? (this.props.checked ? this.props.onLabel : this.props.offLabel): '&nbsp;';
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

    renderTooltip() {
        this.tooltip = tip({
            target: this.container,
            content: this.props.tooltip,
            options: this.props.tooltipOptions
        });
    }

    render() {
        let className = classNames('p-button p-togglebutton p-component', {
            'p-button-icon-only': this.hasIcon() && !this.hasLabel(),
            'p-highlight': this.props.checked,
            'p-disabled': this.props.disabled,
        }, this.props.className),
        iconClassName = null;

        const hasIcon = this.hasIcon();
        const label = this.getLabel();

        if (hasIcon) {
            iconClassName = classNames('p-button-icon p-c', {
                'p-button-icon-left': this.props.iconPos === 'left' && label,
                'p-button-icon-right': this.props.iconPos === 'right' && label
            }, this.props.checked ? this.props.onIcon : this.props.offIcon);
        }

        return (
            <div ref={(el) => this.container = el} id={this.props.id} className={className} style={this.props.style}
                onClick={this.toggle} onFocus={this.props.onFocus} onBlur={this.props.onBlur} onKeyDown={this.onKeyDown}
                tabIndex={!this.props.disabled && this.props.tabIndex} aria-labelledby={this.props.ariaLabelledBy}>

                {hasIcon && <span className={iconClassName}></span>}
                <span className="p-button-label">{label}</span>
                <Ripple />
            </div>
        );
    }
}
