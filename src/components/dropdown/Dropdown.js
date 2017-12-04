import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DomHandler from '../utils/DomHandler';
import ObjectUtils from '../utils/ObjectUtils';
import classNames from 'classnames';
import {DropdownPanel} from './DropdownPanel';

export class Dropdown extends Component {

    static defaultProps = {
        id: null,
        value: null,
        options: null,
        optionLabel: null,
        itemTemplate: null,
        style: null,
        className: null,
        autoWidth: true,
        scrollHeight: '200px',
        filter: false,
        filterPlaceholder: null,
        editable: false,
        placeholder:null,
        required: false,
        disabled: false,
        appendTo: null,
        tabIndex: null,
        autoFocus: false,
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
        optionLabel: PropTypes.string,
        itemTemplate: PropTypes.func,
        style: PropTypes.object,
        className: PropTypes.string,
        autoWidth: PropTypes.bool,
        scrollHeight: PropTypes.string,
        filter: PropTypes.bool,
        filterPlaceholder: PropTypes.string,
        editable:PropTypes.bool,
        placeholder: PropTypes.string,
        required: PropTypes.bool,
        disabled: PropTypes.bool,
        appendTo: PropTypes.any,
        tabIndex: PropTypes.number,
        autoFocus: PropTypes.bool,
        lazy: PropTypes.bool,
        panelClassName: PropTypes.string,
        panelstyle: PropTypes.object,
        dataKey: PropTypes.string,
        inputId: PropTypes.string,
        onChange: PropTypes.func,
        onMouseDown: PropTypes.func,
        onContextMenu: PropTypes.func
    };

    constructor(props) {
        super(props);
        
        this.onClick = this.onClick.bind(this);
        this.onInputFocus = this.onInputFocus.bind(this);
        this.onInputBlur = this.onInputBlur.bind(this);
        this.onInputKeyDown = this.onInputKeyDown.bind(this);
        this.onEditableInputClick = this.onEditableInputClick.bind(this);
        this.onEditableInputChange = this.onEditableInputChange.bind(this);
        this.onEditableInputFocus = this.onEditableInputFocus.bind(this);
        this.onOptionClick = this.onOptionClick.bind(this);
        this.panelClick = this.panelClick.bind(this);
        this.onAfterFilter = this.onAfterFilter.bind(this);
    }
    
    onClick(event) {
        if(this.props.disabled) {
            return;
        }
        
        if(this.documentClickListener) {
            this.selfClick = true;
        }
                
        if(!this.overlayClick && !this.editableInputClick) {
            this.focusInput.focus();
            
            if(this.panel.element.offsetParent) {
                this.hide();                
            }
            else {
                this.show();
            }
        }
        
        if(this.editableInputClick) {
            this.expeditableInputClick = false;
        }
    }
    
    panelClick() {
        this.overlayClick = true;
    }   
     
    onInputFocus(event) {
        DomHandler.addClass(this.container, 'ui-state-focus');
    }
    
    onInputBlur(event) {
        DomHandler.removeClass(this.container, 'ui-state-focus');
    }
    
    onInputKeyDown(event) {
        let selectedItemIndex = this.findOptionIndex(this.props.value);

        switch(event.which) {
            //down
            case 40:
                if(!this.panel.element.offsetParent && event.altKey) {
                    this.show();
                }
                else {
                    if(selectedItemIndex !== -1) {
                        let nextItemIndex = selectedItemIndex + 1;
                        if(nextItemIndex !== (this.props.options.length)) {
                            this.selectItem({
                                originalEvent: event,
                                option: this.props.options[nextItemIndex]
                            });
                        }
                    }
                    if(selectedItemIndex === -1) {
                        this.selectItem({
                            originalEvent: event,
                            option: this.props.options[0]
                        });
                    }                    
                }
                
                event.preventDefault();
            break;
            
            //up
            case 38:
                if(selectedItemIndex > 0) {
                    let prevItemIndex = selectedItemIndex - 1;                    
                    this.selectItem({
                        originalEvent: event,
                        option: this.props.options[prevItemIndex]
                    });
                }
                
                event.preventDefault();
            break;

            //space
            case 32:
                if(!this.panel.element.offsetParent){
                    this.show();
                    event.preventDefault();
                }
            break;
            
            //enter
            case 13:                                        
                this.hide();
                this.unbindDocumentClickListener();
                event.preventDefault();
            break;
            
            //escape and tab
            case 27:
            case 9:
                this.hide();
                this.unbindDocumentClickListener();
            break;
            
            default:
            break;
        
        }
    }
    
    onEditableInputClick(event) {
        this.editableInputClick = true;
        this.bindDocumentClickListener();
    }
    
    onEditableInputChange(event) {              
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
        this.selectItem(event);
        this.focusInput.focus();
        this.hide();
        event.originalEvent.stopPropagation();
    }
        
    selectItem(event) {
        let selectedOption = this.findOption(this.props.value);
        
        if(selectedOption !== event.option) {                
            this.updateEditableLabel(event.option);
            this.props.onChange({
                originalEvent: event.originalEvent,
                value: this.props.optionLabel ? event.option : event.option.value
            });
        } 
    }
    
    findOptionIndex(value) {    
        let index = -1;
        if(this.props.options) {
            for(let i = 0; i < this.props.options.length; i++) {
                let optionValue = this.props.optionLabel ? this.props.options[i] : this.props.options[i].value;
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
        this.panel.element.style.zIndex = DomHandler.getZindex();
        this.panel.element.style.display = 'block';
        this.alignPanel();
        DomHandler.fadeIn(this.panel.element, 250);
        this.bindDocumentClickListener();

        if (this.props.filter) {
            setTimeout(() => {
                this.panel.filterInput.focus();
            }, 200);
        }
    }

    hide() {
        this.panel.element.style.display = 'none';
        this.unbindDocumentClickListener();
        this.clearClickState();
    }
    
    alignPanel() {
        if(this.props.appendTo) {
            DomHandler.absolutePosition(this.panel.element, this.container);
            this.panel.element.style.minWidth = DomHandler.getWidth(this.container) + 'px';
        }
        else {
            DomHandler.relativePosition(this.panel.element, this.container);
        }
    }
    
    bindDocumentClickListener() {
        if(!this.documentClickListener) {
            this.documentClickListener = () => {
                if(!this.selfClick && !this.overlayClick) {
                    this.hide();
                }
                
                this.clearClickState();
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
    
    clearClickState() {
        this.selfClick = false;
        this.editableInputClick = false;
        this.overlayClick = false;
    }
    
    updateEditableLabel(option) {
        if(this.editableInput) {
            this.editableInput.value = (option ? this.getOptionLabel(option) : this.props.value||'');
        }
    }
     
    renderHiddenSelect() {
        if(this.props.autoWidth) {
            let options = this.props.options && this.props.options.map((option, i) => {
                return <option key={this.getOptionLabel(option)} value={option.value}>{this.getOptionLabel(option)}</option>;
            });
            
            return (<div className="ui-helper-hidden-accessible">
                        <select ref={(el) => this.nativeSelect = el} required={this.props.required} tabIndex="-1" aria-hidden="true">
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
            
    getOptionLabel(option) {
        return this.props.optionLabel ? ObjectUtils.resolveFieldData(option, this.props.optionLabel) : option.label;
    }
    
    componentDidMount() {
        if(this.props.autoWidth) {
            if(!this.props.style || (!this.props.style['width'] && !this.props.style['min-width'])) {
                this.container.style.width = this.nativeSelect.offsetWidth + 30 + 'px';
            }
        }
    }
    
    componentWillUnmount() {
        this.unbindDocumentClickListener();
    }

    onAfterFilter() {
        this.alignPanel();
    }
    
    render() {
        let className = classNames('ui-dropdown ui-widget ui-state-default ui-corner-all ui-helper-clearfix', this.props.className, {'ui-state-disabled': this.props.disabled});
        let selectedOption = this.findOption(this.props.value);
        let label = selectedOption ? this.getOptionLabel(selectedOption) : null;
        
        let hiddenSelect = this.renderHiddenSelect();
        let keyboardHelper = this.renderKeyboardHelper();
        let labelElement = this.renderLabel(label);
        let dropdownIcon = this.renderDropdownIcon();
        
        return (
            <div id={this.props.id} ref={(el) => this.container = el} className={className} style={this.props.style} onClick={this.onClick}
                 onMouseDown={this.props.onMouseDown} onContextMenu={this.props.onContextMenu}>
                 {hiddenSelect}
                 {keyboardHelper}
                 {labelElement}
                 {dropdownIcon}
                 <DropdownPanel ref={(el) => this.panel = el} options={this.props.options} optionLabel={this.props.optionLabel} selectedOption={selectedOption} 
                    filter={this.props.filter} filterplaceholder={this.props.filterPlaceholder} 
                    panelStyle={this.props.panelStyle} panelClassName={this.props.panelClassName}
                    itemTemplate={this.props.itemTemplate} scrollHeight={this.props.scrollHeight}  
                    onOptionClick={this.onOptionClick} onAfterFilter={this.onAfterFilter} onClick={this.panelClick}/>
            </div>
        );
    }
}