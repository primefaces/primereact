import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils/ClassNames';
import UniqueComponentId from '../utils/UniqueComponentId';

export class Knob extends Component {

    static defaultProps = {
        id: null,
        style: null,
        className: null,
        value: null,
        size: 100,
        disabled: false,
        readOnly: false,
        showValue: true,
        step: 1,
        min: 0,
        max: 100,
        strokeWidth: 14,
        name: '',
        valueColor: 'var(--primary-color, Black)',
        rangeColor: 'var(--surface-d, LightGray)',
        textColor: 'var(--text-color-secondary, Black)',
        valueTemplate: '{value}',
        onChange: null
    };

    static propTypes = {
        id: PropTypes.string,
        style: PropTypes.object,
        className: PropTypes.string,
        value: PropTypes.any,
        size: PropTypes.number,
        disabled: PropTypes.bool,
        readOnly: PropTypes.bool,
        showValue: PropTypes.bool,
        step: PropTypes.number,
        min: PropTypes.number,
        max: PropTypes.number,
        strokeWidth: PropTypes.number,
        name: PropTypes.string,
        valueColor: PropTypes.string,
        rangeColor: PropTypes.string,
        textColor: PropTypes.string,
        valueTemplate: PropTypes.string,
        onChange: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {}

        this.radius = 40;
        this.midX =  50;
        this.midY = 50;
        this.minRadians = 4 * Math.PI / 3;
        this.maxRadians =  -Math.PI / 3;
        this.id = this.props.id || UniqueComponentId();

        this.onClick = this.onClick.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
        this.onTouchStart = this.onTouchStart.bind(this);
        this.onTouchEnd = this.onTouchEnd.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onTouchMove = this.onTouchMove.bind(this);
    }

    updateValue(offsetX, offsetY) {
        let dx = offsetX - this.props.size / 2;
        let dy =  this.props.size / 2 - offsetY;
        let angle = Math.atan2(dy, dx);
        let start = -Math.PI / 2 - Math.PI / 6;
        this.updateModel(angle, start);
    }

    updateModel(angle, start) {
        let mappedValue;
        if (angle > this.maxRadians)
            mappedValue = this.mapRange(angle, this.minRadians, this.maxRadians, this.props.min, this.props.max);
        else if (angle < start)
            mappedValue = this.mapRange(angle + 2 * Math.PI, this.minRadians, this.maxRadians, this.props.min, this.props.max);
        else
            return;

        if (this.props.onChange) {
            const newValue = Math.round((mappedValue - this.props.min) / this.props.step) * this.props.step + this.props.min;
            this.props.onChange({
                value: newValue
            })
        }
    }

    mapRange(x, inMin, inMax, outMin, outMax) {
        return (x - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    }

    onClick(event) {
        if (!this.props.disabled && !this.props.readOnly) {
            this.updateValue(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
        }
    }

    onMouseDown(event) {
        if (!this.props.disabled && !this.props.readOnly) {
            this.windowMouseMoveListener = this.onMouseMove;
            this.windowMouseUpListener = this.onMouseUp;
            window.addEventListener('mousemove', this.windowMouseMoveListener);
            window.addEventListener('mouseup', this.windowMouseUpListener);
            event.preventDefault();
        }
    }

    onMouseUp(event) {
        if (!this.props.disabled && !this.props.readOnly) {
            window.removeEventListener('mousemove', this.windowMouseMoveListener);
            window.removeEventListener('mouseup', this.windowMouseUpListener);
            this.windowMouseMoveListener = null;
            this.windowMouseUpListener = null;
            event.preventDefault();
        }
    }

    onTouchStart(event) {
        if (!this.props.disabled && !this.props.readOnly) {
            this.windowTouchMoveListener = this.onTouchMove;
            this.windowTouchEndListener = this.onTouchEnd;
            window.addEventListener('touchmove', this.windowTouchMoveListener, {passive: false, cancelable: false});
            window.addEventListener('touchend', this.windowTouchEndListener);
        }
    }

    onTouchEnd(event) {
        if (!this.props.disabled && !this.props.readOnly) {
            window.removeEventListener('touchmove', this.windowTouchMoveListener);
            window.removeEventListener('touchend', this.windowTouchEndListener);
            this.windowTouchMoveListener = null;
            this.windowTouchEndListener = null;
        }
    }

    onMouseMove(event) {
        if (!this.props.disabled && !this.props.readOnly) {
            this.updateValue(event.offsetX, event.offsetY);
            event.preventDefault();
        }
    }

    onTouchMove(event) {
        if (!this.props.disabled && !this.props.readOnly && event.touches.length === 1) {
            const rect = this.element.getBoundingClientRect();
            const touch = event.targetTouches.item(0);
            const offsetX = touch.clientX - rect.left;
            const offsetY = touch.clientY - rect.top;
            this.updateValue(offsetX, offsetY);
            event.preventDefault();
        }
    }

    rangePath() {
        return `M ${this.minX()} ${this.minY()} A ${this.radius} ${this.radius} 0 1 1 ${this.maxX()} ${this.maxY()}`;
    }

    valuePath() {
        return `M ${this.zeroX()} ${this.zeroY()} A ${this.radius} ${this.radius} 0 ${this.largeArc()} ${this.sweep()} ${this.valueX()} ${this.valueY()}`;
    }

    zeroRadians() {
        if (this.props.min > 0 && this.props.max > 0)
            return this.mapRange(this.props.min, this.props.min, this.props.max, this.minRadians, this.maxRadians);
        else
            return this.mapRange(0, this.props.min, this.props.max, this.minRadians, this.maxRadians);
    }

    valueRadians() {
        return this.mapRange(this.props.value, this.props.min, this.props.max, this.minRadians, this.maxRadians);
    }

    minX() {
        return this.midX + Math.cos(this.minRadians) * this.radius;
    }

    minY() {
        return this.midY - Math.sin(this.minRadians) * this.radius;
    }

    maxX() {
        return this.midX + Math.cos(this.maxRadians) * this.radius;
    }

    maxY() {
        return this.midY - Math.sin(this.maxRadians) * this.radius;
    }

    zeroX() {
        return this.midX + Math.cos(this.zeroRadians()) * this.radius;
    }

    zeroY() {
        return this.midY - Math.sin(this.zeroRadians()) * this.radius;
    }

    valueX() {
        return this.midX + Math.cos(this.valueRadians()) * this.radius;
    }

    valueY() {
        return this.midY - Math.sin(this.valueRadians()) * this.radius;
    }

    largeArc() {
        return Math.abs(this.zeroRadians() - this.valueRadians()) < Math.PI ? 0 : 1;
    }

    sweep() {
        return this.valueRadians() > this.zeroRadians() ? 0 : 1;
    }

    valueToDisplay() {
        return this.props.valueTemplate.replace("{value}", this.props.value.toString());
    }

    render() {
        const containerClassName = classNames('p-knob p-component', {
            'p-disabled': this.props.disabled,
        }, this.props.className);

        let text = this.props.showValue && <text x={50} y={57} textAnchor={'middle'} fill={this.props.textColor} className={'p-knob-text'} name={this.props.name}>{this.valueToDisplay()}</text>

        return (
            <div className={containerClassName} style={this.props.style} ref={(el) => this.element = el}>
                <svg viewBox="0 0 100 100" width={this.props.size} height={this.props.size} onClick={this.onClick} onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp}
                     onTouchStart={this.onTouchStart} onTouchEnd={this.onTouchEnd}>
                    <path d={this.rangePath()} strokeWidth={this.props.strokeWidth} stroke={this.props.rangeColor} className={'p-knob-range'}></path>
                    <path d={this.valuePath()} strokeWidth={this.props.strokeWidth} stroke={this.props.valueColor} className={'p-knob-value'}></path>
                    {text}
                </svg>
            </div>
        )
    }

}
