import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DomHandler from '../utils/DomHandler';
import ObjectUtils from '../utils/ObjectUtils';
import classNames from 'classnames';
import {DropdownItem} from './DropdownItem';

export class Dropdown extends Component {

    static defaultProps = {
        id: null,
        value: null,
        options: null,
        itemTemplate: null,
        style: null,
        className: null,
        autoWidth: true,
        scrollHeight: '200px',
        filter: false,
        filterBy: null,
        filterplaceholder: null,
        editable: false,
        placeholder:null,
        required: false,
        disabled: false,
        appendTo: null,
        tabIndex: null,
        autoFocus: false,
        lazy: true,
        panelClassName: null,
        panelStyle: null,
        dataKey: null,
        inputId: null,
        onChange: null,
        onMouseDown: null,
        onContextMenu: null
    };

    static propTypes = {
        id: PropTypes.string,
        value: PropTypes.any,
        options: PropTypes.array,
        itemTemplate: PropTypes.func,
        style: PropTypes.object,
        className: PropTypes.string,
        autoWidth: PropTypes.bool,
        scrollHeight: PropTypes.string,
        filter: PropTypes.bool,
        filterBy: PropTypes.string,
        filterplaceholder: PropTypes.string,
        editable:PropTypes.bool,
        placeholder: PropTypes.string,
        required: PropTypes.bool,
        disabled: PropTypes.bool,
        appendTo: PropTypes.any,
        tabIndex: PropTypes.number,
        autoFocus: PropTypes.bool,
        lazy: PropTypes.bool,
        panelClassName: PropTypes.string,
        panelStyle: PropTypes.string,
        dataKey: PropTypes.string,
        inputId: PropTypes.string,
        onChange: PropTypes.func,
        onMouseDown: PropTypes.func,
        onContextMenu: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {};
        
        this.onClick = this.onClick.bind(this);
        this.onInputFocus = this.onInputFocus.bind(this);
        this.onInputBlur = this.onInputBlur.bind(this);
        this.onInputKeyDown = this.onInputKeyDown.bind(this);
        this.onEditableInputClick = this.onEditableInputClick.bind(this);
        this.onEditableInputChange = this.onEditableInputChange.bind(this);
        this.onEditableInputFocus = this.onEditableInputFocus.bind(this);
        this.onOptionClick = this.onOptionClick.bind(this);
    }
    
    onClick(event) {
        if(this.props.disabled) {
            return;
        }
        
        if(this.documentClickListener) {
            this.selfClick = true;
        }
        
        if(!this.itemClick) {
            this.focusInput.focus();
            
            if(this.panel.offsetParent) {
                this.hide();
            }
            else {
                this.show();

                /*if (this.filterViewChild != undefined) {
                    setTimeout(() => {
                        this.filterViewChild.nativeElement.focus();
                    }, 200);
                }*/
            }
        }
    }
    
    onInputFocus(event) {
        DomHandler.addClass(this.container, 'ui-state-focus');
    }
    
    onInputBlur(event) {
        DomHandler.removeClass(this.container, 'ui-state-focus');
    }
    
    onInputKeyDown(event) {
        
    }
    
    onEditableInputClick(event) {
        this.itemClick = true;
        this.bindDocumentClickListener();
    }
    
    onEditableInputChange(event) {
        let value = event.target.value;       
        this.props.onChange({
            originalEvent: event.originalEvent,
            value: event.target.value
        });
    }
    
    onEditableInputFocus(event) {
        DomHandler.addClass(this.container, 'ui-state-focus');
        this.hide();
    }
    
    onOptionClick(event) {
        this.itemClick = true;
        this.selectItem(event);
        this.focusInput.focus();
        this.hide();
    }
    
    selectItem(event) {
        let selectedOption = this.findOption(this.props.value);
        
        if(selectedOption !== event.option) {                
            this.updateEditableLabel(event.option);
            this.props.onChange({
                originalEvent: event.originalEvent,
                value: event.option.value
            });
        } 
    }
    
    findOptionIndex(value) {    
        let index = -1;
        if(this.props.options) {
            for(let i = 0; i < this.props.options.length; i++) {
                let optionValue = this.props.options[i].value;
                if((value === null && optionValue == null) || ObjectUtils.equals(value, optionValue, this.props.dataKey)) {
                    index = i;
                    break;
                }
            }
        }
                    
        return index;
    }

    findOption(value) {
        let index = this.findOptionIndex(value);
        return (index !== -1) ? this.props.options[index] : null;
    }
    
    show() {        
        this.panel.style.zIndex = DomHandler.getZindex() + 1;
        this.panel.style.display = 'block';
        this.alignPanel();
        DomHandler.fadeIn(this.panel, 250);
        this.bindDocumentClickListener();
    }

    hide() {
        this.panel.style.display = 'none';
    }
    
    alignPanel() {
        if(this.props.appendTo)
            DomHandler.absolutePosition(this.panel, this.container);
        else
            DomHandler.relativePosition(this.panel, this.container);
    }
    
    bindDocumentClickListener() {
        if(!this.documentClickListener) {
            this.documentClickListener = () => {
                if(!this.selfClick && !this.itemClick) {
                    this.hide();
                    this.unbindDocumentClickListener();
                }
                
                this.selfClick = false;
                this.itemClick = false;
            };

            document.addEventListener('click', this.documentClickListener);
        }    
    }

    unbindDocumentClickListener() {
        if(this.documentClickListener) {
            document.removeEventListener('click', this.documentClickListener);
            this.documentClickListener = null;
        }
    }
    
    updateEditableLabel(option): void {
        if(this.editableInput) {
            this.editableInput.value = (option ? option.label : this.props.value||'');
        }
    }
    
    renderHiddenSelect() {
        if(this.props.autoWidth) {
            let options = this.props.options && this.props.options.map((option, i) => {
                return <option key={option.label} value={option.value}>{option.label}</option>;
            });
            
            return (<div className="ui-helper-hidden-accessible">
                        <select required={this.props.required} tabIndex="-1" aria-hidden="true">
                            {options}
                        </select>
                    </div>);
        }
        else {
            return null;
        }
    }
    
    renderKeyboardHelper() {
        return <div className="ui-helper-hidden-accessible">
                    <input ref={(el) => this.focusInput = el} id={this.props.inputId} type="text" role="listbox"
                        onFocus={this.onInputFocus} onBlur={this.onInputBlur} onKeyDown={this.onInputKeyDown}
                        disabled={this.props.disabled} tabIndex={this.props.tabIndex} autoFocus={this.props.autoFocus} />
                </div>;
    }
    
    renderLabel(label) {
        if(this.props.editable) {
            let value = label||this.props.value||'';
            
            return <input ref={(el) => this.editableInput = el} type="text" defaultValue={value} className="ui-dropdown-label ui-inputtext ui-corner-all" disabled={this.props.disabled} placeholder={this.props.placeholder}
                        onClick={this.onEditableInputClick} onInput={this.onEditableInputChange} onFocus={this.onEditableInputFocus} onBlur={this.onInputBlur} />;
        }
        else {
            let className = classNames('ui-dropdown-label ui-inputtext ui-corner-all', {
                'ui-placeholder': label === null && this.props.placeholder, 
                'ui-dropdown-label-empty': label === null && !this.props.placeholder}
            );
            
            return <label className={className}>{label||this.props.placeholder||'empty'}</label>;
        }
    }
    
    renderDropdownIcon() {
        return <div className="ui-dropdown-trigger ui-state-default ui-corner-right">
                    <span className="fa fa-fw fa-caret-down ui-clickable"></span>
                </div>;
    }
    
    renderPanel(selectedOption) {
        let className = classNames('ui-dropdown-panel ui-widget-content ui-corner-all ui-helper-hidden ui-shadow', this.props.panelClassName);
        let items = this.props.options && this.props.options.map((option, index) => {
            return <DropdownItem key={option.label} option={option} template={this.props.itemTemplate} selected={selectedOption === option}
                    onClick={this.onOptionClick} />;
        });
        
        return <div ref={(el) => this.panel = el} className={className} style={this.props.panelStyle}>
                <div className="ui-dropdown-items-wrapper" style={{maxHeight: this.props.scrollHeight||'auto'}}>
                    <ul className="ui-dropdown-items ui-dropdown-list ui-widget-content ui-widget ui-corner-all ui-helper-reset">
                        {items}
                    </ul>
                </div>
            </div>;
    }

    render() {
        let className = classNames('ui-dropdown ui-widget ui-state-default ui-corner-all ui-helper-clearfix', this.props.className, {'ui-state-disabled': this.props.disabled});
        let selectedOption = this.findOption(this.props.value);
        let label = selectedOption ? selectedOption.label : null;
        
        let hiddenSelect = this.renderHiddenSelect();
        let keyboardHelper = this.renderKeyboardHelper();
        let labelElement = this.renderLabel(label);
        let dropdownIcon = this.renderDropdownIcon();
        let panel = this.renderPanel();
        
        return (
            <div id={this.props.id} ref={(el) => this.container = el} className={className} style={this.props.style} onClick={this.onClick}
                 onMouseDown={this.props.onMouseDown} onContextMenu={this.props.onContextMenu}>
                 {hiddenSelect}
                 {keyboardHelper}
                 {labelElement}
                 {dropdownIcon}
                 {panel}
            </div>
        );
    }
}