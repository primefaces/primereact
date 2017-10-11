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
        panelStyle: PropTypes.string,
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
        event.stopPropagation();
        if(this.props.disabled) {
            return;
        }
        
        if(this.documentClickListener) {
            this.selfClick = true;
        }
        
        if(!this.overlayClick) {
            this.focusInput.focus();
            
            if(this.panel.offsetParent) {
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
                if(!this.panel.offsetParent && event.altKey) {
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
                    else if(this.optionsToDisplay) {
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
                if(!this.panel.offsetParent){
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
        this.itemClick = true;
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
        this.itemClick = true;
        this.selectItem(event);
        this.focusInput.focus();
        this.hide();
    }
        
    onFilterInputChange(event) {
        this.setState({filter: event.target.value});
    }
    
    onFilterInputKeyDown(event) {
        if(event.which === 13) {
            event.preventDefault();
        }
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
                if(!this.selfClick && !this.itemClick && !this.overlayClick) {
                    this.hide();
                    this.unbindDocumentClickListener();
                }
                
                this.selfClick = false;
                this.itemClick = false;
                this.overlayClick = false;
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
    
    filter(option) {
        let filterValue = this.state.filter.trim().toLowerCase();
        return option.label.toLowerCase().indexOf(filterValue.toLowerCase()) > -1;
    }
    
    hasFilter() {
        return this.state.filter && this.state.filter.trim().length > 0;
    }
    
    renderHiddenSelect() {
        if(this.props.autoWidth) {
            let options = this.props.options && this.props.options.map((option, i) => {
                return <option key={option.label} value={option.value}>{option.label}</option>;
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
    
    renderPanel(selectedOption) {
        let className = classNames('ui-dropdown-panel ui-widget-content ui-corner-all ui-helper-hidden ui-shadow', this.props.panelClassName);
        let items = this.props.options;
        let filter = this.renderFilter();
        
        if(this.hasFilter()) {
            items = items && items.filter((option) => {
                return this.filter(option);
            });
        }
        
        items = items && items.map((option, index) => {
            return <DropdownItem key={option.label} option={option} template={this.props.itemTemplate} selected={selectedOption === option}
                    onClick={this.onOptionClick} />;
        });
        
        return <div ref={(el) => this.panel = el} className={className} style={this.props.panelStyle} onClick={this.panelClick}>
                    {filter}
                    <div className="ui-dropdown-items-wrapper" style={{maxHeight: this.props.scrollHeight||'auto'}}>
                        <ul className="ui-dropdown-items ui-dropdown-list ui-widget-content ui-widget ui-corner-all ui-helper-reset">
                            {items}
                        </ul>
                    </div>
            </div>;
    }
    
    renderFilter() {
        if(this.props.filter) {
            return <div className="ui-dropdown-filter-container">
                        <input ref={(el) => this.filterInput = el} type="text" autoComplete="off" className="ui-dropdown-filter ui-inputtext ui-widget ui-state-default ui-corner-all" placeholder={this.props.filterPlaceholder}
                            onKeyDown={this.onFilterKeyDown} onChange={this.onFilterInputChange} />
                        <span className="fa fa-search"></span>
                   </div>;
        }
        else {
            return null;
        }
    }
    
    componentDidMount() {
        if(this.props.autoWidth) {
            if(!this.props.style || (!this.props.style['width'] && !this.props.style['min-width'])) {
                this.container.style.width = this.nativeSelect.offsetWidth + 30 + 'px';
            }
        }
        
        if(this.props.appendTo) {
            if(this.props.appendTo === 'body')
                document.body.appendChild(this.panel);
            else
                DomHandler.appendChild(this.panel, this.props.appendTo);
        }
    }
    
    componentWillUnmount() {
        this.unbindDocumentClickListener();
        
        if(this.props.appendTo) {
            this.container.appendChild(this.panel);
        }
    }
    
    componentDidUpdate(prevProps, prevState) {
        if(this.props.filter) {
            this.alignPanel();
        }
    }

    render() {
        let className = classNames('ui-dropdown ui-widget ui-state-default ui-corner-all ui-helper-clearfix', this.props.className, {'ui-state-disabled': this.props.disabled});
        let selectedOption = this.findOption(this.props.value);
        let label = selectedOption ? selectedOption.label : null;
        
        let hiddenSelect = this.renderHiddenSelect();
        let keyboardHelper = this.renderKeyboardHelper();
        let labelElement = this.renderLabel(label);
        let dropdownIcon = this.renderDropdownIcon();
        let panel = this.renderPanel(selectedOption);
        
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