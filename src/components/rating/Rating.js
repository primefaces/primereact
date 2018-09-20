import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Tooltip from "../tooltip/Tooltip";

export class Rating extends Component {

    static defaultProps = {
        id: null,
        value: null,
        disabled: false,
        readonly: false,
        stars: 5,
        cancel: true,
        style: null,
        className: null,
        tooltip: null,
        tooltipOptions: null,
        onChange: null
    }

    static propsTypes = {
        id: PropTypes.string,
        value: PropTypes.string,
        disabled: PropTypes.bool,
        readonly: PropTypes.bool,
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
    }

    rate(event, i) {
        if (!this.props.readonly && !this.props.disabled && this.props.onChange) {
            this.props.onChange({
                originalEvent: event,
                value: i,
                stopPropagation : () =>{},
                preventDefault : () =>{},
                target: {
                    name: this.props.name,
                    id :  this.props.id,
                    value: i
                }
            });
        }
        
        event.preventDefault();        
    }
    
    clear(event) {
        if (!this.props.readonly && !this.props.disabled && this.props.onChange) {
            this.props.onChange({
                originalEvent: event,
                value: null,
                stopPropagation : () =>{},
                preventDefault : () =>{},
                target: {
                    name: this.props.name,
                    id :  this.props.id,
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

    renderStars() {
        let starsArray = [];
        for (var i = 0; i < this.props.stars; i++) {
            starsArray[i] = i + 1;
        }

        let stars = starsArray.map((value) => {
            let iconClass = classNames('p-rating-icon pi', {
                'pi-star-o': (!this.props.value || value > this.props.value),
                'pi-star': (value <= this.props.value)
            });
            
            return (
                <a onClick={(e) => this.rate(e, value)} key={value}>
                    <span className={iconClass}></span>
                </a>
            );
        });

        return stars;
    }

    renderCancelIcon() {
        if (this.props.cancel) {
            return (
                <a onClick={this.clear} className="p-rating-cancel">
                    <span className="p-rating-icon pi pi-ban"></span>
                </a>
            );
        }
        else {
            return null;
        }
    }

    componentDidMount() {
        if (this.props.tooltip) {
            this.tooltip = new Tooltip({
                target: this.element,
                content: this.props.tooltip,
                options: this.props.tooltipOptions
            });
        }
    }

    componentWillUnmount() {
        if (this.tooltip) {
            this.tooltip.destroy();
            this.tooltip = null;
        }
    }

    render() {
        let className = classNames('p-rating', this.props.className, {'p-disabled': this.props.disabled, 'p-rating-readonly': this.props.readonly});
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