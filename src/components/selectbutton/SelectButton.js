import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ObjectUtils from '../utils/ObjectUtils';
import {SelectButtonItem} from './SelectButtonItem';

export class SelectButton extends Component {

    static defaultProps = {
        id: null,
        value: null,
        options: null,
        tabindex: null,
        multiple: null,
        disabled: null,
        style: null,
        className: null,
        dataKey: null,
        onChange: null
    };

    static propTypes = {
        id: PropTypes.string,
        value: PropTypes.any,
        options: PropTypes.array,
        tabindex: PropTypes.number,
        multiple: PropTypes.bool,
        disabled: PropTypes.bool,
        style: PropTypes.object,
        className: PropTypes.string,
        dataKey: PropTypes.string,
        onChange: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {};
        this.onOptionClick = this.onOptionClick.bind(this);
    }

    onOptionClick(event) {
        if(this.props.disabled) {
            return;
        }
        
        let selected = this.isSelected(event.option);
        let optionValue = event.option.value;
        let newValue;

        if(this.props.multiple) {
            let currentValue = this.props.value ? [...this.props.value] : [];
    
            if(selected)
                newValue = currentValue.filter((val) => !ObjectUtils.equals(val, optionValue, this.props.dataKey));
            else
                newValue = [...currentValue, optionValue];
        }
        else {
            if(selected)
                newValue = null;
            else
                newValue = optionValue;
        }
        
        if(this.props.onChange) {
            this.props.onChange({
                originalEvent: event.originalEvent,
                value: newValue
            });
        }
    }

    isSelected(option) {
        let selected = false;
        
        if(this.props.multiple) {
            if(this.props.value && this.props.value.length) {
                for(let val of this.props.value) {
                    if(ObjectUtils.equals(val, option.value, this.props.dataKey)) {
                        selected = true;
                        break;
                    }
                }
            }
        }
        else {
            selected = ObjectUtils.equals(this.props.value, option.value, this.props.dataKey);
        }
        
        return selected;
    }
    
    renderItems() {
        if(this.props.options && this.props.options.length) {
            return this.props.options.map((option, index) => {
                return <SelectButtonItem key={option.label} option={option} onClick={this.onOptionClick} selected={this.isSelected(option)} />;
            });
        }
        else {
            return null;
        }
    }

    render() {
        let className = classNames('ui-selectbutton ui-buttonset ui-widget ui-corner-all ui-buttonset-3', this.props.className);
        let items = this.renderItems();

        return (
            <div id={this.props.id}>
                <div className={className} style={this.props.style}>
                    {items}
                </div>
            </div>
        );
    }
}