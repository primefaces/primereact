import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { InputText } from '../inputtext/InputText';
import { Button } from '../button/Button';
import DomHandler from '../utils/DomHandler';
import ObjectUtils from '../utils/ObjectUtils';
import classNames from 'classnames';

export class AutoComplete extends Component {

    static defaultProps = {
        id: null,
        value: null,
        suggestions: null,
        field: null,
        scrollHeight: '200px',
        dropdown: false,
        dropdownMode: 'blank',
        multiple: false,
        minLength: 1,
        delay: 300,
        style: null,
        className: null,
        inputStyle: null,
        inputClassName: null,
        placeholder: null,
        readonly: false,
        disabled: false,
        maxlength: null,
        size: null,
        appendTo: null,
        tabindex: null,
        completeMethod: null,
        itemTemplate: null,
        selectedItemTemplate: null,
        onChange: null,
        onFocus: null,
        onBlur: null,
        onSelect: null,
        onUnselect: null,
        onDropdownClick: null,
        onClick: null,
        onDblClick: null,
        onMouseDown: null,
        onKeyUp: null,
        onKeyPress: null,
        onContextMenu: null,
        onClear: null
    }

    static propTypes = {
        id: PropTypes.string,
        value: PropTypes.any,
        suggestions: PropTypes.array,
        field: PropTypes.string,
        scrollHeight: PropTypes.string,
        dropdown: PropTypes.bool,
        dropdownMode: PropTypes.string,
        multiple: PropTypes.bool,
        minLength: PropTypes.number,
        delay: PropTypes.number,
        style: PropTypes.object,
        className: PropTypes.string,
        inputStyle: PropTypes.object,
        inputClassName: PropTypes.string,
        placeholder: PropTypes.string,
        readonly: PropTypes.bool,
        disabled: PropTypes.bool,
        maxlength: PropTypes.number,
        size: PropTypes.number,
        appendTo: PropTypes.any,
        tabindex: PropTypes.number,
        completeMethod: PropTypes.func,
        itemTemplate: PropTypes.func,
        selectedItemTemplate: PropTypes.func,
        onChange: PropTypes.func,
        onFocus: PropTypes.func,
        onBlur: PropTypes.func,
        onSelect: PropTypes.func,
        onUnselect: PropTypes.func,
        onDropdownClick: PropTypes.func,
        onClick: PropTypes.func,
        onDblClick: PropTypes.func,
        onMouseDown: PropTypes.func,
        onKeyUp: PropTypes.func,
        onKeyPress: PropTypes.func,
        onContextMenu: PropTypes.func,
        onClear: PropTypes.func
    };

    constructor(props) {
        super(props);
        
        this.onInputChange = this.onInputChange.bind(this);
        this.onInputFocus = this.onInputFocus.bind(this);
        this.onInputBlur = this.onInputBlur.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onDropdownClick = this.onDropdownClick.bind(this);
        this.onMultiContainerClick = this.onMultiContainerClick.bind(this);
        this.onMultiInputFocus = this.onMultiInputFocus.bind(this);
        this.onMultiInputBlur = this.onMultiInputBlur.bind(this);
    }
    
    shouldComponentUpdate() {
        if(this.manualModelChange) {
            this.manualModelChange = false;
            return false;
        }
        else {
            return true;
        }
    }
    
    onInputChange(event) {
        //Cancel the search request if user types within the timeout
        if(this.timeout) {
            clearTimeout(this.timeout);
        }
        
        let query = event.target.value.trim();
        if(!this.props.multiple) {
            this.manualModelChange = true;
            this.updateModel(event, query);
        }

        if(query.length === 0) {
            this.hidePanel();
            if(this.props.onClear) {
                this.props.onClear(event);
            }
        }
        else {
            if(query.length >= this.props.minLength) {
                this.timeout = setTimeout(() => {
                    this.search(event, query);
                }, this.props.delay);
            }
            else {
                this.hidePanel();
            }
        }
    }

    search(event, query) {
        //allow empty string but not undefined or null
        if(query === undefined || query === null) {
            return;
        }

        if(this.props.completeMethod) {
            this.props.completeMethod({
                originalEvent: event,
                query: query
            });
        }
    }

    selectItem(event, option) {
        if(this.props.multiple) {
            this.inputEl.value = '';
            if(!this.isSelected(option)) {
                let newValue = this.props.value ? [...this.props.value, option] : [option];
                this.updateModel(event, newValue);
            }
        }
        else {
            this.inputEl.value = this.props.field ? ObjectUtils.resolveFieldData(option, this.props.field): option;
            this.updateModel(event, option);
        }

        if(this.props.onSelect) {
            this.props.onSelect({
                originalEvent: event,
                value: option
            })
        }

        this.inputEl.focus();
    }
    
    updateModel(event, value) {
        if(this.props.onChange) {
            this.props.onChange({
                originalEvent: event,
                value: value
            });
        }
    }

    showPanel() {
        if(this.focus) {
            this.alignPanel();
            
            if(!this.panel.offsetParent) {
                this.panel.style.zIndex = DomHandler.getZindex();
                this.panel.style.display = "block";
                DomHandler.fadeIn(this.panel, 200);
            }
        }
    }

    alignPanel() {
        let target = this.props.multiple ? this.multiContainer : this.inputEl;
        
        if(this.props.appendTo)
            DomHandler.absolutePosition(this.panel, target);
        else
            DomHandler.relativePosition(this.panel, target);
    }

    hidePanel() {
        this.panel.style.display = 'none';
    }

    onDropdownClick(event) {
        this.inputEl.focus();
        
        if(this.props.dropdownMode === 'blank')
            this.search(event, '');
        else if(this.props.dropdownMode === 'current')
            this.search(event, this.inputEl.value);

        if(this.props.onDropdownClick) {
            this.props.onDropdownClick({
                originalEvent: event,
                query: this.inputEl.value
            });
        }
    }

    removeItem(event, index) {
        let removedValue = this.props.value[index];
        let newValue = this.props.value.filter((val, i) => (index !== i));
        this.updateModel(event, newValue);
        
        if(this.props.onUnselect) {
            this.props.onUnselect({
                originalEvent: event,
                value: removedValue
            })
        }
    }

    onKeyDown(event) {
        if(this.state.panelVisible) {
            let highlightItemIndex = this.findOptionIndex(this.state.highlightOption);

            switch(event.which) {
                //down
                case 40:
                    if(highlightItemIndex !== -1) {
                        var nextItemIndex = highlightItemIndex + 1;
                        if(nextItemIndex !== (this.suggestions.length)) {
                            this.highlightOption = this.suggestions[nextItemIndex];
                            this.highlightOptionChanged = true;
                        }
                    }
                    else {
                        this.highlightOption = this.suggestions[0];
                    }
                    event.preventDefault();
                    break;

                //up
                case 38:
                    if(highlightItemIndex > 0) {
                        let prevItemIndex = highlightItemIndex - 1;
                        this.highlightOption = this.suggestions[prevItemIndex];
                        this.highlightOptionChanged = true;
                    }

                    event.preventDefault();
                    break;

                //enter
                case 13:
                    if(this.highlightOption) {
                        this.selectItem(event, this.highlightOption);
                        this.hidePanel();
                    }
                    event.preventDefault();
                    break;

                //escape
                case 27:
                    this.hidePanel();
                    event.preventDefault();
                    break;


                //tab
                case 9:
                    if(this.highlightOption) {
                        this.selectItem(event, this.highlightOption);
                    }
                    this.hidePanel();
                    break;

                default:
                    break;

            }
        } else {
            if(event.which === 40 && this.suggestions) {
                this.search(event,event.target.value);
            }
        }

        this.setState({highlightOption: this.highlightOption});

        if(this.props.multiple) {
            switch(event.which) {
                //backspace
                case 8:
                    if(this.value && this.value.length && !this.inputEl.value) {
                        let removedValue = this.value.pop();
                        if(this.props.onUnselect) {
                            this.props.onUnselect({
                                originalEvent: event,
                                value: removedValue
                            })
                        }
                        this.props.onChange({
                            originalEvent: event,
                            value: this.value
                        });
                    }
                    break;

                default:
                    break;
            }
        }
    }

    onInputFocus(event) {
        this.focus = true;
        
        if(this.props.onFocus) {
            this.props.onFocus(event);
        }
    }
    
    onInputBlur(event) {
        this.focus = false;

        if(this.props.onBlur) {
            this.props.onBlur(event);
        }
    }
    
    onMultiContainerClick(event) {
        this.inputEl.focus();
        if(this.props.onClick) {
            this.props.onClick(event);
        }
    }
    
    onMultiInputFocus(event) {
        this.onInputFocus(event);
        DomHandler.addClass(this.multiContainer, 'ui-state-focus');
    }
    
    onMultiInputBlur(event) {
        this.onInputBlur(event);
        DomHandler.removeClass(this.multiContainer, 'ui-state-focus');
    }
    
    isSelected(val) {
        let selected = false;
        if(this.props.value && this.props.value.length) {
            for(let i = 0; i < this.props.value.length; i++) {
                if(ObjectUtils.equals(this.props.value[i], val)) {
                    selected = true;
                    break;
                }
            }
        }
        
        return selected;
    }

    findOptionIndex(option) {
        let index = -1;
        if(this.suggestions) {
            for(let i = 0; i < this.suggestions.length; i++) {
                if(ObjectUtils.equals(option, this.suggestions[i])) {
                    index = i;
                    break;
                }
            }
        }

        return index;
    }

    componentDidMount() {
        if(this.props.appendTo) {
            if(this.props.appendTo === 'body')
                document.body.appendChild(this.panel);
            else
                DomHandler.appendChild(this.panel, this.props.appendTo);
        }
    }

    componentDidUpdate() {
        if(this.props.suggestions && this.props.suggestions.length) {
            this.showPanel();
        }
        else {
            this.hidePanel();
        }
    }

    componentWillUnmount() {
        
    }
    
    renderSimpleAutoComplete() {
        let inputClassName = classNames('ui-autocomplete-input', this.props.inputClassName, {
            'ui-autocomplete-dd-input': this.props.dropdown
        });
            
        return (
            <InputText ref={(el) => this.inputEl = ReactDOM.findDOMNode(el)} type="text" className={inputClassName} style={this.props.inputStyle} autoComplete="off"
                        readOnly={this.props.readonly} disabled={this.props.disabled} placeholder={this.props.placeholder} size={this.props.size}
                        maxLength={this.props.maxlength} tabIndex={this.props.tabindex}
                        onBlur={this.onInputBlur} onFocus={this.onInputFocus} onChange={this.onInputChange}
                        onMouseDown={this.props.onMouseDown} onKeyUp={this.props.onKeyUp} onKeyDown={this.onKeydown}
                        onKeyPress={this.props.onKeyPress} onContextMenu={this.props.onContextMenu} 
                        onClick={this.props.onClick} onDoubleClick={this.props.onDblClick} />
        );
    }
    
    renderChips() {
        if(this.props.value && this.props.value.length) {
            return this.props.value.map((val, index) => {
                let tokenContent = this.props.selectedItemTemplate ? this.props.selectedItemTemplate(val) : 
                    (<span className="ui-autocomplete-token-label">{this.props.field ? ObjectUtils.resolveFieldData(val, this.props.field) : val}</span>);
                
                return (
                    <li key={index + 'multi-item'} className="ui-autocomplete-token ui-state-highlight ui-corner-all">
                        <span className="ui-autocomplete-token-icon fa fa-fw fa-close" onClick={(e) => this.removeItem(e, index)}></span>
                        {tokenContent}
                    </li>
                );
            });
        }
        else {
            return null;
        }
    }
    
    renderMultiInput() {
        return (
            <li className="ui-autocomplete-input-token">
                <input ref={(el) => {this.inputEl = ReactDOM.findDOMNode(el)}} type="text" disabled={this.props.disabled} placeholder={this.props.placeholder}
                       autoComplete="off" tabIndex={this.props.tabindex} onChange={this.onInputChange}
                       onKeyUp={this.props.onKeyUp} onKeyDown={this.onKeydown} onKeyPress={this.props.onKeyPress}
                       onFocus={this.onMultiInputFocus} onBlur={this.onMultiInputBlur} />
            </li>
        );
    }
    
    renderMultipleAutoComplete() {
        let multiContainerClass = classNames("ui-autocomplete-multiple-container ui-widget ui-inputtext ui-state-default ui-corner-all", {
            'ui-state-disabled': this.props.disabled
        });
        let tokens = this.renderChips();
        let input = this.renderMultiInput();

        return (
                <ul ref={(el) => {this.multiContainer = el}} className={multiContainerClass} onContextMenu={this.props.onContextMenu} onMouseDown={this.props.onMouseDown}
                        onClick={this.onMultiContainerClick} onDoubleClick={this.props.onDblClick} >
                    {tokens}
                    {input}
                </ul>
        );
    }
    
    renderDropdown() {
        return (
            <Button type="button" icon="fa-fw fa-caret-down" className="ui-autocomplete-dropdown" disabled={this.props.disabled} onClick={this.onDropdownClick} />
        );
    }
    
    renderPanel() {
        let items;
        
        if(this.props.suggestions) {
            items = this.props.suggestions.map((suggestion, index) => {
                let itemContent = this.props.itemTemplate ? this.props.itemTemplate(suggestion) : this.props.field ? ObjectUtils.resolveFieldData(suggestion, this.props.field): suggestion;

                return (
                    <li key={index + '_item'} className="ui-autocomplete-list-item ui-corner-all" onClick={(e) => this.selectItem(e, suggestion)}>{itemContent}</li>
                );
            });
        }
        
        return (
            <div ref={(el) => this.panel = el} className="ui-autocomplete-panel ui-widget-content ui-corner-all ui-shadow" style={{maxHeight: this.props.scrollHeight}}>
                <ul className="ui-autocomplete-items ui-autocomplete-list ui-widget-content ui-widget ui-corner-all ui-helper-reset">
                    {items}
                </ul>
            </div>
        );
    }

    render() {
        let input, dropdown;
        let panel = this.renderPanel();
        let className = classNames('ui-autocomplete ui-widget', this.props.className, {
            'ui-autocomplete-dd': this.props.dropdown,
            'ui-autocomplete-multiple': this.props.multiple
        });

        if(this.props.multiple)
            input = this.renderMultipleAutoComplete();
        else
            input = this.renderSimpleAutoComplete();
        
        if(this.props.dropdown) {
            dropdown = this.renderDropdown();
        }

        return (
            <span ref={(el) => this.container = el} id={this.props.id} style={this.props.style} className={className} >
                {input}
                {dropdown}
                {panel}
            </span>
        );
    }
}
