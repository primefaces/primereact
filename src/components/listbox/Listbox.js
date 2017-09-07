import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ObjectUtils from '../utils/ObjectUtils';

export class ListboxItem extends Component {
    
    static defaultProps = {
        option: null,
        selected: false,
        onClick: null,
        onTouchEnd: null,
        template: null
    }
    
    static propTypes = {
        option: PropTypes.any,
        selected: PropTypes.bool,
        onClick: PropTypes.func,
        onTouchEnd: PropTypes.func,
        template: PropTypes.func
    }
    
    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
        this.onTouchEnd = this.onTouchEnd.bind(this);
    }
    
    onClick(event) {
        if(this.props.onClick) {
            this.props.onClick({
                originalEvent: event,
                option: this.props.option
            });
        }
        
        event.preventDefault();
    }
    
    onTouchEnd(event) {
        if(this.props.onTouchEnd) {
            this.props.onTouchEnd({
                originalEvent: event,
                option: this.props.option
            });
        }
    }
    
    render() {
        let className = classNames('ui-listbox-item ui-corner-all', {'ui-state-highlight': this.props.selected});
        let content = this.props.template ? this.props.template(this.props.option) : this.props.option.label;
        
        return (
               <li className={className} onClick={this.onClick} onTouchEnd={this.onTouchEnd}>
                   {content}
               </li>
        );
    }
}

export class Listbox extends Component {
    
    static defaultProps = {
        id: null,
        value: null,
        options: null,
        itemTemplate: null,
        style: null,
        className: null,
        disabled: null,
        key: null,
        multiple: false,
        metaKeySelection: false,
        onChange: null
    }
    
    static propTypes = {
        id: PropTypes.string,
        value: PropTypes.any,
        options: PropTypes.array,
        itemTemplate: PropTypes.func,
        style: PropTypes.object,
        className: PropTypes.string,
        key: PropTypes.string,
        multiple: PropTypes.bool,
        metaKeySelection: PropTypes.bool,
        onChange: PropTypes.func,
    };
    
    onOptionClick(event, option, index) {
        if(this.props.disabled) {
            return;
        }
        
        if(this.props.multiple)
            this.onOptionClickMultiple(event, option, index);
        else
            this.onOptionClickSingle(event, option, index);
            
        this.optionTouched = false;
    }
    
    onOptionTouchEnd(event, option) {
        if(this.props.disabled) {
            return;
        }
        
        this.optionTouched = true;
    }
    
    onOptionClickSingle(event, option) {        
        let selected = this.isSelected(option);
        let valueChanged = false;
        let value = null;
        let metaSelection = this.optionTouched ? false : this.props.metaKeySelection;

        if(metaSelection) {
            let metaKey = (event.metaKey || event.ctrlKey);
            
            if(selected) {
                if(metaKey) {
                    value = null;
                    valueChanged = true;
                }
            }
            else {
                value = option.value;
                valueChanged = true;
            }
        }
        else {
            value = selected ? null : option.value;            
            valueChanged = true;
        }

        if(valueChanged) {
            this.updateModel(event, value);
        }
    }

    onOptionClickMultiple(event, option) {        
        let selected = this.isSelected(option);
        let valueChanged = false;
        let value = null;
        let metaSelection = this.optionTouched ? false : this.props.metaKeySelection;

        if(metaSelection) {
            let metaKey = (event.metaKey || event.ctrlKey);
            
            if(selected) {
                if(metaKey)
                    value = this.removeOption(option);
                else
                    value = [option.value];
                
                valueChanged = true;
            }
            else {
                value = (metaKey) ? this.props.value || [] : [];
                value = [...value, option.value];
                valueChanged = true;
            }
        }
        else {
            if(selected)
                value = this.removeOption(option);
            else
                value = [...this.props.value || [], option.value];
            
            valueChanged = true;
        }

        if(valueChanged) {
            this.props.onChange({
                originalEvent: event,
                value: value
            });
        }
    }
    
    updateModel(event, value) {
        if(this.props.onChange) {
            this.props.onChange({
                originalEvent: event,
                value: value
            });
        }
    }
    
    removeOption(option) {
        return this.props.value.filter(val => !ObjectUtils.equals(val, option.value, this.props.key));
    }
    
    isSelected(option) {
        let selected = false;

        if(this.props.multiple) {
            if(this.props.value) {
                for(let val of this.props.value) {
                    if(ObjectUtils.equals(val, option.value, this.props.key)) {
                        selected = true;
                        break;
                    }
                }
            }
        }
        else {
            selected = ObjectUtils.equals(this.props.value, option.value, this.props.key);
        }

        return selected;
    }

    render() {
        let className = classNames('ui-listbox ui-inputtext ui-widget ui-widget-content ui-corner-all', this.props.className, {
            'ui-state-disabled': this.props.disabled
        });
        let items;
        
        if(this.props.options) {
            items = this.props.options.map((option, index) => {
                return <ListboxItem key={option.label} option={option} template={this.props.itemTemplate} selected={this.isSelected(option)}
                        onClick={(e) => this.onOptionClick(e, option, index)} onTouchEnd={(e) => this.onOptionTouchEnd(e, option, index)} />;
            });
        }
        
        return (
            <div id={this.props.id} className={className} style={this.props.style}>
                <ul className="ui-listbox-list">
                    {items}
                </ul>
            </div>
        );
    }
}