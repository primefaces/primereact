import React, { Component } from 'react'
import PropTypes from 'prop-types';
import DomHandler from '../utils/DomHandler';
import classNames from 'classnames'

export class Slider extends Component {

    static defaultProps = {
        id: null,
        value: null,
        animate: false,
        min: 0,
        max: 100,
        orientation: "horizontal",
        step: null,
        range: false,
        style: null,
        disabled: false,
        className: null,
        onChange: null
    }

    static propsTypes = {
        id: PropTypes.string,
        value: PropTypes.number,
        animate: PropTypes.bool,
        min: PropTypes.number,
        max: PropTypes.number,
        orientation: PropTypes.string,
        step: PropTypes.number,
        range: PropTypes.bool,
        style: PropTypes.object,
        disabled: PropTypes.bool,
        className: PropTypes.string,
        onChange: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.onBarClick = this.onBarClick.bind(this);
    }

    componentWillUnmount() {
        this.unbindDragListeners();
    }

    onMouseDown(event, index) {
        if(this.disabled) {
            return;
        }
        
        this.dragging = true;
        this.updateDomData();
        this.sliderHandleClick = true;
        this.handleIndex = index;
        this.bindDragListeners();
        event.preventDefault();
    }

    onBarClick(event) {
        if (this.props.disabled) {
            return;
        }
        
        if (!this.sliderHandleClick) {
            this.updateDomData();
            this.setValueWithMouse(event);
        }

        this.sliderHandleClick = false;
    }

    onDrag(event) {
        if (this.dragging) {
            this.setValueWithMouse(event);
        }
    }

    onDragEnd(event) {
        if (this.dragging) {
            this.dragging = false;

            if (this.props.onSlideEnd) {
                if (this.props.range)
                    this.props.onSlideEnd({originalEvent: event, values: this.values});
                else
                    this.props.onSlideEnd({originalEvent: event, value: this.value});
            }

            this.unbindDragListeners();
        }
    }
    
    bindDragListeners() {
        if (!this.dragListener) {
            this.dragListener = this.onDrag.bind(this);
            document.addEventListener('mousemove', this.dragListener);
        }

        if (!this.dragEndListener) {
            this.dragEndListener = this.onDragEnd.bind(this);
            document.addEventListener('mouseup', this.dragEndListener);
        }
    }
    
    unbindDragListeners() {
        if (this.dragListener) {
            document.removeEventListener('mousemove', this.dragListener);
            this.dragListener = null;
        }
        
        if (this.dragEndListener) {
            document.removeEventListener('mouseup', this.dragEndListener)
            this.dragEndListener = null;
        }
    }
    
    updateDomData() {
        let rect = this.el.getBoundingClientRect();
        this.initX = rect.left + DomHandler.getWindowScrollLeft();
        this.initY = rect.top + DomHandler.getWindowScrollTop();
        this.barWidth = this.el.offsetWidth;
        this.barHeight = this.el.offsetHeight;
    }

    setValueWithMouse(event) {
        let handleValue;

        if(this.props.orientation === 'horizontal')
            handleValue = ((event.pageX - this.initX) * 100) / (this.barWidth);
        else
            handleValue = (((this.initY + this.barHeight) - event.pageY) * 100) / (this.barHeight);

        let newValue = (this.props.max - this.props.min) * (handleValue / 100) + this.props.min;

        if(this.props.step) {
            const oldValue = this.props.range ? this.props.value[this.handleIndex] : this.props.value;
            const diff = (newValue - oldValue);
            
            if(diff < 0)
                newValue = oldValue + Math.ceil(newValue / this.props.step - oldValue / this.props.step) * this.props.step;
            else if(diff > 0)
                newValue = oldValue + Math.floor(newValue / this.props.step - oldValue / this.props.step) * this.props.step;
        }
 
        this.updateValue(event, newValue);            
    }

    updateValue(event, value) {
        if(this.props.range) {
            let newValue = value;
            
            if (this.handleIndex === 0) {
                if (newValue < this.props.min)
                    newValue = this.props.min;
                else if (newValue > this.props.value[1])
                    newValue = this.props.value[1];
            }
            else {
                if(newValue > this.props.max)
                    newValue = this.props.max;
                else if (newValue < this.props.value[0])
                    newValue = this.props.value[0];
            }

            let newValues = [...this.props.value];
            newValues[this.handleIndex] = Math.floor(newValue);

            if (this.props.onChange) {
                this.props.onChange({
                    originalEvent: event,
                    value: newValues
                });
            }
        }
        else {
            let newValue = value;

            if (newValue < this.props.min)
                newValue = this.props.min;
            else if (newValue > this.props.max)
                newValue = this.props.max;

            if (this.props.onChange) {
                this.props.onChange({
                    originalEvent: event,
                    value: Math.floor(newValue)
                });
            }
        }
    }

    renderHandle(leftValue, bottomValue, index) {
        return (
            <span onMouseDown={event => this.onMouseDown(event, index)}  className="p-slider-handle" 
                    style={{transition: this.dragging ? 'none' : null, left: leftValue + '%', bottom: bottomValue + '%'}}></span>
        );
    }

    renderRangeSlider() {
        let values = this.props.value||[0,0];
        let horizontal = (this.props.orientation === 'horizontal');
        const handleValueStart = (values[0] < this.props.min ? 0 : values[0] - this.props.min) * 100 / (this.props.max - this.props.min);
        const handleValueEnd = (values[1] > this.props.max ? 100 : values[1] - this.props.min) * 100 / (this.props.max - this.props.min);
        const rangeStartHandle = horizontal ? this.renderHandle(handleValueStart, 'auto', 0) : this.renderHandle('auto', handleValueStart, 0);
        const rangeEndHandle = horizontal ? this.renderHandle(handleValueEnd, 'auto', 1) : this.renderHandle('auto', handleValueEnd, 1);
        const rangeStyle = horizontal ? {left: handleValueStart + '%', width: (handleValueEnd - handleValueStart) + '%'} : {bottom: handleValueStart + '%', height: (handleValueEnd - handleValueStart) + '%'};

        return (
            <React.Fragment>
                <span className="p-slider-range" style={rangeStyle}></span>
                {rangeStartHandle}
                {rangeEndHandle}
            </React.Fragment>
        )
    }

    renderSingleSlider() {
        let value = this.props.value||0;
        let handleValue;

        if (value < this.props.min)
            handleValue = 0;
        else if(value > this.props.max)
            handleValue = 100;
        else
            handleValue = (value - this.props.min) * 100 / (this.props.max - this.props.min);

        const rangeStyle = this.props.orientation === 'horizontal' ? {width: handleValue + '%'} : {height: handleValue + '%'};
        const handle = this.props.orientation === 'horizontal' ? this.renderHandle(handleValue, 'auto', null) : this.renderHandle('auto', handleValue, null);

        return (
            <React.Fragment>
                <span className="p-slider-range p-slider-range-min ui-widget-header ui-corner-all" style={rangeStyle}></span>
                {handle}
            </React.Fragment>
        );
    }

    render() {
        const className = classNames('p-slider p-component', this.props.className, {
            'p-disabled': this.props.disabled,
            'p-slider-horizontal': this.props.orientation === 'horizontal',
            'p-slider-vertical': this.props.orientation === 'vertical',
            'p-slider-animate': this.props.animate
        });

        const content = this.props.range ? this.renderRangeSlider() : this.renderSingleSlider();

        return (
            <div id={this.props.id} ref={el => this.el = el} style={this.props.style} className={className} onClick={this.onBarClick}>
                {content}
            </div>
        );
    }

}