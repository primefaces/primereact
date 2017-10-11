import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DomHandler from '../utils/DomHandler';
import ObjectUtils from '../utils/ObjectUtils';
import classNames from 'classnames';
import {MultiSelectItem} from './MultiSelectItem';
import {MultiSelectHeader} from './MultiSelectHeader';

export class MultiSelect extends Component {
    
    static defaultProps = {
        id: null,
        value: null,
        options: null,
        style: null,
        className: null,
        scrollHeight: '200px',
        defaultLabel: 'Choose',
        disabled: false,
        filter: false,
        key: null,
        itemTemplate: null,
        onChange: null
    };

    static propTypes = {
        id: PropTypes.string,
        value: PropTypes.any,
        options: PropTypes.array,
        style: PropTypes.object,
        className: PropTypes.string,
        scrollHeight: PropTypes.string,
        defaultLabel: PropTypes.string,
        disabled: PropTypes.bool,
        filter: PropTypes.bool,
        key: PropTypes.string,
        itemTemplate: PropTypes.func,
        onChange: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {
            filter: ''
        };
        this.onClick = this.onClick.bind(this);
        this.onPanelClick = this.onPanelClick.bind(this);
        this.onOptionClick = this.onOptionClick.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onFilter = this.onFilter.bind(this);
        this.onCloseClick = this.onCloseClick.bind(this);
        this.onToggleAll = this.onToggleAll.bind(this);
    }

    onOptionClick(event) {
        let optionValue = event.option.value;
        let selectionIndex = this.findSelectionIndex(optionValue);
        let newValue;
        
        if(selectionIndex !== -1)
            newValue = this.props.value.filter((val, i) => i !== selectionIndex);
        else
            newValue = [...this.props.value || [], optionValue];
        
        this.updateModel(event.originalEvent, newValue);
    }

    onClick(e) {
      e.stopPropagation();
        if(this.disabled) {
            return;
        }
        
        if(this.documentClickListener) {
            this.selfClick = true;
        }

        if(!this.panelClick) {
            if(this.panel.offsetParent) {
                this.hide();
            }
            else {
                this.focusInput.focus();
                this.show();
            }
        }
    }
    
    onToggleAll(event) {
        let newValue;
        
        if(event.checked) {
            newValue = [];
        }
        else {
            let options = this.hasFilter() ? this.filterOptions(this.props.options) : this.props.options;
            if(options) {
                newValue = [];
                for(let option of options) {
                    newValue.push(option.value);
                } 
            }
        }
        
        this.updateModel(event.originalEvent, newValue);
    }
    
    updateModel(event, value) {
        if(this.props.onChange) {
            this.props.onChange({
                originalEvent: event,
                value: value
            });
        }
    }
    
    onFilter(event) {
        this.setState({filter: event.query});
    }
    
    onPanelClick() {
        this.panelClick = true;
    }

    show() {
        if(this.props.options && this.props.options.length) {
            this.panel.style.zIndex = DomHandler.getZindex();
            DomHandler.relativePosition(this.panel, this.container);
            DomHandler.fadeIn(this.panel, 250);
            this.panel.style.display = 'block';
            this.bindDocumentClickListener();
        }
    }

    hide() {
        this.panel.style.display = 'none';
        this.unbindDocumentClickListener();
    }
    
    onCloseClick(event) {
        this.hide();
        event.preventDefault();
        event.stopPropagation();
    }
    
    findSelectionIndex(value) {
        let index = -1;
        
        if(this.props.value) {
            for(let i = 0; i < this.props.value.length; i++) {
                if(ObjectUtils.equals(this.props.value[i], value, this.props.key)) {
                    index = i;
                    break;
                }
            }
        }
        
        return index;
    }

    isSelected(value) {
        return this.findSelectionIndex(value) !== -1;
    }

    getLabel() {
        let label;
        
        if(this.props.value && this.props.value.length) {
            label = '';
            for(let i = 0; i < this.props.value.length; i++) {
                if(i !== 0) {
                    label += ',';
                }
                label += this.findLabelByValue(this.props.value[i]);
            }
        }
        else {
            label = this.props.defaultLabel;
        }

        return label;
    }

    findLabelByValue(val) {
        var label = null;
        for(var i = 0; i < this.props.options.length; i++) {
            var option = this.props.options[i];
            if(option.value === val) {
                label = option.label;
                break; 
            }
        }
        return label;
    }

    onFocus() {
        DomHandler.addClass(this.container, 'ui-state-focus');
    }
    
    onBlur() {
        DomHandler.removeClass(this.container, 'ui-state-focus');
    }
    
    bindDocumentClickListener() {
        if(!this.documentClickListener) {
            this.documentClickListener = this.onDocumentClick.bind(this);
            document.addEventListener('click', this.documentClickListener);
        }
    }
    
    unbindDocumentClickListener() {
        if(this.documentClickListener) {
            document.removeEventListener('click', this.documentClickListener);
            this.documentClickListener = null;
        }
    }

    componentWillUnmount() {
        this.unbindDocumentClickListener();
    }

    onDocumentClick() {
        if(!this.selfClick && !this.panelClick && this.panel.offsetParent) {
            this.hide();
        }
        
        this.selfClick = false;
        this.panelClick = false;
    }
    
    filterOption(option) {
        let filterValue = this.state.filter.trim().toLowerCase();
        return option.label.toLowerCase().indexOf(filterValue.toLowerCase()) > -1;
    }
    
    hasFilter() {
        return this.state.filter && this.state.filter.trim().length > 0;
    }
    
    isAllChecked(visibleOptions) {
        if(this.hasFilter())
            return this.props.value && visibleOptions && visibleOptions.length&&(this.props.value.length === visibleOptions.length);
        else
            return this.props.value && this.props.options && (this.props.value.length === this.props.options.length);
    } 
    
    filterOptions(options) {
        return options.filter((option) => {
            return this.filterOption(option);
        });
    }

    render() {
        let className = classNames('ui-multiselect ui-widget ui-state-default ui-corner-all', this.props.className, {
            'ui-state-disabled': this.props.disabled
        });
        let label = this.getLabel();
        let items = this.props.options;
        
        if(items) {
            if(this.hasFilter()) {
                items = this.filterOptions(items);
            }
            
            items = items.map((option) => {
                return <MultiSelectItem key={option.label} option={option} template={this.props.itemTemplate} 
                        selected={this.isSelected(option.value)} onClick={this.onOptionClick} />;
                });
        }
        
        return (
            <div id={this.props.id} className={className} onClick={this.onClick} ref={(el) => {this.container = el;}} style={this.props.style}>
                <div className="ui-helper-hidden-accessible">
                    <input readOnly type="text" onFocus={this.onFocus} onBlur={this.onBlur} ref={(el) => {this.focusInput = el;}}/>
                </div>
                <div className="ui-multiselect-label-container" title="Choose">
                    <label className="ui-multiselect-label ui-corner-all">{label}</label>
                </div>
                <div className="ui-multiselect-trigger ui-state-default ui-corner-right">
                    <span className="fa fa-fw fa-caret-down ui-c"></span>
                </div>
                <div className="ui-multiselect-panel ui-widget-content ui-corner-all ui-helper-hidden ui-shadow" 
                    ref={(el) => this.panel = el} onClick={this.onPanelClick}>
                    <MultiSelectHeader filter={this.props.filter} filterValue={this.state.filter} onFilter={this.onFilter} 
                        onClose={this.onCloseClick} onToggleAll={this.onToggleAll} allChecked={this.isAllChecked(items)}/>
                    <div className="ui-multiselect-items-wrapper" style={{maxHeight: this.props.scrollHeight}}>
                        <ul className="ui-multiselect-items ui-multiselect-list ui-widget-content ui-widget ui-corner-all ui-helper-reset">
                            {items}  
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}