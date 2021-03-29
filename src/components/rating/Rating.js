import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils/ClassNames';
import { tip } from '../tooltip/Tooltip';

export class Rating extends Component {

    static defaultProps = {
        id: null,
        value: null,
        disabled: false,
        readOnly: false,
        stars: 5,
        cancel: true,
        style: null,
        className: null,
        tooltip: null,
        tooltipOptions: null,
        onChange: null
    }

    static propTypes = {
        id: PropTypes.string,
        value: PropTypes.number,
        disabled: PropTypes.bool,
        readOnly: PropTypes.bool,
        stars: PropTypes.number,
        cancel: PropTypes.bool,
        style: PropTypes.object,
        className: PropTypes.string,
        tooltip: PropTypes.string,
        tooltipOptions: PropTypes.object,
        onChange: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.clear = this.clear.bind(this);
        this.onStarKeyDown = this.onStarKeyDown.bind(this);
        this.onCancelKeyDown = this.onCancelKeyDown.bind(this);
    }

    rate(event, i) {
        if (!this.props.readOnly && !this.props.disabled && this.props.onChange) {
            this.props.onChange({
                originalEvent: event,
                value: i,
                stopPropagation : () =>{},
                preventDefault : () =>{},
                target: {
                    name: this.props.name,
                    id: this.props.id,
                    value: i
                }
            });
        }

        event.preventDefault();
    }

    clear(event) {
        if (!this.props.readOnly && !this.props.disabled && this.props.onChange) {
            this.props.onChange({
                originalEvent: event,
                value: null,
                stopPropagation : () =>{},
                preventDefault : () =>{},
                target: {
                    name: this.props.name,
                    id: this.props.id,
                    value: null
                }
            });
        }

        event.preventDefault();
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.value === this.props.value && nextProps.disabled === this.props.disabled) {
            return false;
        }

        return true;
    }

    onStarKeyDown(event, value) {
        if (event.key === 'Enter') {
            this.rate(event, value);
        }
    }

    onCancelKeyDown(event) {
        if (event.key === 'Enter') {
            this.clear(event);
        }
    }

    getFocusIndex() {
        return (this.props.disabled || this.props.readOnly) ? null : 0;
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
            target: this.element,
            content: this.props.tooltip,
            options: this.props.tooltipOptions
        });
    }

    renderStars() {
        let starsArray = [];
        for (let i = 0; i < this.props.stars; i++) {
            starsArray[i] = i + 1;
        }

        let stars = starsArray.map((value) => {
            let iconClass = classNames('p-rating-icon', {
                'pi pi-star-o': (!this.props.value || value > this.props.value),
                'pi pi-star': (value <= this.props.value)
            });

            return (
                <span className={iconClass} onClick={(e) => this.rate(e, value)} key={value} tabIndex={this.getFocusIndex()} onKeyDown={(e) => this.onStarKeyDown(e, value)}></span>
            );
        });

        return stars;
    }

    renderCancelIcon() {
        if (this.props.cancel) {
            return (
                <span className="p-rating-icon p-rating-cancel pi pi-ban" onClick={this.clear} tabIndex={this.getFocusIndex()}   onKeyDown={this.onCancelKeyDown}></span>
            );
        }

        return null;
    }

    render() {
        let className = classNames('p-rating', {
            'p-disabled': this.props.disabled,
            'p-rating-readonly': this.props.readOnly
        }, this.props.className);
        let cancelIcon = this.renderCancelIcon();
        let stars = this.renderStars();

        return (
            <div ref={(el) => this.element = el} id={this.props.id} className={className} style={this.props.style}>
                {cancelIcon}
                {stars}
            </div>
        );
    }
}
