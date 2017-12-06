import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DomHandler from '../utils/DomHandler';
import ObjectUtils from '../utils/ObjectUtils';
import classNames from 'classnames';
import { DropdownPanel } from './DropdownPanel';
import { DropdownItem } from './DropdownItem';

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
        filterplaceholder: null,
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
        panelstyle: PropTypes.object,
        dataKey: PropTypes.string,
        inputId: PropTypes.string,
        onChange: PropTypes.func,
        onMouseDown: PropTypes.func,
        onContextMenu: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {
            filter: ''
        };
        
        this.onClick = this.onClick.bind(this);
        this.onInputFocus = this.onInputFocus.bind(this);
        this.onInputBlur = this.onInputBlur.bind(this);
        this.onInputKeyDown = this.onInputKeyDown.bind(this);
        this.onEditableInputClick = this.onEditableInputClick.bind(this);
        this.onEditableInputChange = this.onEditableInputChange.bind(this);
        this.onEditableInputFocus = this.onEditableInputFocus.bind(this);
        this.onOptionClick = this.onOptionClick.bind(this);
        this.onFilterInputChange = this.onFilterInputChange.bind(this);
        this.onFilterInputKeyDown = this.onFilterInputKeyDown.bind(this);
        this.panelClick = this.panelClick.bind(this);
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

                if (this.props.filter) {
                    setTimeout(() => {
                        this.filterInput.focus();
                    }, 200);
                }
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

    onUpKey(event) {
        if (!this.panel.element.offsetParent && event.altKey) {
            this.show();
        }
        else {
            let selectedItemIndex = this.findOptionIndex(this.props.value);

            if (selectedItemIndex !== -1) {
                let nextItemIndex = selectedItemIndex + 1;
                if (nextItemIndex !== (this.props.options.length)) {
                    this.selectItem({
                        originalEvent: event,
                        option: this.props.options[nextItemIndex]
                    });
                }
            }

            if (selectedItemIndex === -1) {
                this.selectItem({
                    originalEvent: event,
                    option: this.props.options[0]
                });
            }
        }

        event.preventDefault();
    }

    onDownKey(event) {
        let selectedItemIndex = this.findOptionIndex(this.props.value);
        
        if (selectedItemIndex > 0) {
            let prevItemIndex = selectedItemIndex - 1;
            this.selectItem({
                originalEvent: event,
                option: this.props.options[prevItemIndex]
            });
        }

        event.preventDefault();
    }
    
    onInputKeyDown(event) {
        switch(event.which) {
            //down
            case 40:
                this.onUpKey(event);
            break;
            
            //up
            case 38:
                this.onDownKey(event);
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
        
    onFilterInputChange(event) {
        this.setState({filter: event.target.value});
    }
    
    onFilterInputKeyDown(event) {
        switch (event.which) {
            //down
            case 40:
                this.onUpKey(event);
                break;

            //up
            case 38:
                this.onDownKey(event);
                break;

            //enter
            case 13:
                event.preventDefault();
            break;

            default:
            break;
        }
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
    
    updateEditableLabel(option): void {
        if(this.editableInput) {
            this.editableInput.value = (option ? this.getOptionLabel(option) : this.props.value||'');
        }
    }
    
    filter(option) {
        let filterValue = this.state.filter.trim().toLowerCase();
        let optionLabel = this.getOptionLabel(option);
        
        return optionLabel.toLowerCase().indexOf(filterValue.toLowerCase()) > -1;
    }
    
    hasFilter() {
        return this.state.filter && this.state.filter.trim().length > 0;
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

    renderItems(selectedOption) {
        let items = this.props.options;
 
        if (items && this.hasFilter()) {
            items = items && items.filter((option) => {
                return this.filter(option);
            });
        }

        if(items) {
            return items.map((option, index) => {
                let optionLabel = this.getOptionLabel(option);
                return <DropdownItem key={optionLabel} label={optionLabel} option={option} template={this.props.itemTemplate} selected={selectedOption === option}
                    onClick={this.onOptionClick} />;
            });   
        }
        else {
            return null;
        }
    }
        
    renderFilter() {
        if(this.props.filter) {
            return <div className="ui-dropdown-filter-container">
                        <input ref={(el) => this.filterInput = el} type="text" autoComplete="off" className="ui-dropdown-filter ui-inputtext ui-widget ui-state-default ui-corner-all" placeholder={this.props.filterPlaceholder}
                            onKeyDown={this.onFilterInputKeyDown} onChange={this.onFilterInputChange} />
                        <span className="fa fa-search"></span>
                   </div>;
        }
        else {
            return null;
        }
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
    
    componentDidUpdate(prevProps, prevState) {
        if (this.props.filter) {
            this.alignPanel();
        }

        if (this.panel.element.offsetParent) {
            let highlightItem = DomHandler.findSingle(this.panel.element, 'li.ui-state-highlight');
            if (highlightItem) {
                DomHandler.scrollInView(this.panel.itemsWrapper, highlightItem);
            }
        } 
    }

    render() {
        let className = classNames('ui-dropdown ui-widget ui-state-default ui-corner-all ui-helper-clearfix', this.props.className, {'ui-state-disabled': this.props.disabled});
        let selectedOption = this.findOption(this.props.value);
        let label = selectedOption ? this.getOptionLabel(selectedOption) : null;
        
        let hiddenSelect = this.renderHiddenSelect();
        let keyboardHelper = this.renderKeyboardHelper();
        let labelElement = this.renderLabel(label);
        let dropdownIcon = this.renderDropdownIcon();
        let items = this.renderItems(selectedOption);
        let filterElement = this.renderFilter();
        
        return (
            <div id={this.props.id} ref={(el) => this.container = el} className={className} style={this.props.style} onClick={this.onClick}
                 onMouseDown={this.props.onMouseDown} onContextMenu={this.props.onContextMenu}>
                 {hiddenSelect}
                 {keyboardHelper}
                 {labelElement}
                 {dropdownIcon}
                 <DropdownPanel ref={(el) => this.panel = el} appendTo={this.props.appendTo} 
                    panelStyle={this.props.panelStyle} panelClassName={this.props.panelClassName}
                    scrollHeight={this.props.scrollHeight} onClick={this.panelClick} filter={filterElement}>
                    {items}
                 </DropdownPanel> 
            </div>
        );
    }
}