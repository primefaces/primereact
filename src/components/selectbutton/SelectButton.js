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
        optionLabel: null,
        tabIndex: null,
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
        optionLabel: PropTypes.string,
        tabIndex: PropTypes.string,
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
        let optionValue = this.getOptionValue(event.option);
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
    
    getOptionValue(option) {
        return this.props.optionLabel ? option : option.value;
    }
    
    getOptionLabel(option) {
        return this.props.optionLabel ? ObjectUtils.resolveFieldData(option, this.props.optionLabel) : option.label;
    }

    isSelected(option) {
        let selected = false;
        let optionValue = this.getOptionValue(option);
        
        if(this.props.multiple) {
            if(this.props.value && this.props.value.length) {
                for(let val of this.props.value) {
                    if(ObjectUtils.equals(val, optionValue, this.props.dataKey)) {
                        selected = true;
                        break;
                    }
                }
            }
        }
        else {
            selected = ObjectUtils.equals(this.props.value, optionValue, this.props.dataKey);
        }
        
        return selected;
    }
    
    renderItems() {
        if(this.props.options && this.props.options.length) {
            return this.props.options.map((option, index) => {
                let optionLabel = this.getOptionLabel(option);
                
                return <SelectButtonItem key={optionLabel} label={optionLabel} option={option} onClick={this.onOptionClick}
                            selected={this.isSelected(option)} tabIndex={this.props.tabIndex} disabled={this.props.disabled} />;
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