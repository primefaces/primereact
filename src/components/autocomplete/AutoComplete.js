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
        onDropdownClick: null
    }

    static propTypes = {
        id: PropTypes.string,
        value: PropTypes.any,
        suggestions: PropTypes.array,
        field: PropTypes.string,
        scrollHeight: PropTypes.string,
        dropdown: PropTypes.bool,
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
        onDropdownClick: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {panelVisible: false, focus: false};
    }

    onInput(event) {
        let value = event.target.value;
        if(!this.props.multiple) {
            this.value = value;
        }

        if(value.length === 0) {
           this.hide();
        }

        if(value.length >= this.props.minLength) {
            //Cancel the search request if user types within the timeout
            if(this.timeout) {
                clearTimeout(this.timeout);
            }

            this.timeout = setTimeout(() => {
                this.search(event, value);
            }, this.props.delay);
        }
        else {
            this.suggestions = null;
            clearTimeout(this.timeout);
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
            
    selectItem(e, option) {
        if(this.props.multiple) {
            this.inputEl.value = '';
            this.value = this.value||[];
            if(!this.isSelected(option)) {
                this.value.push(option);
            }
        }
        else {
            this.inputEl.value = this.props.field ? ObjectUtils.resolveFieldData(option, this.props.field): option;
            this.value = option;
        }
        
        this.props.onChange({
            originalEvent: e,
            value: this.value
        });

        if(this.props.onSelect) {
            this.props.onSelect({
                originalEvent: e,
                value: option
            })
        }
        
        this.inputEl.focus();
    }
    
    show() {
        if(!this.state.panelVisible && (this.state.focus||this.dropdownFocus)) {
            
            this.setState({panelVisible: true});
            this.panel.style.zIndex = DomHandler.getZindex();
            this.panel.style.display = "block";
            DomHandler.fadeIn(this.panel, 200);
        }        
    }
    
    align() {
        if(this.props.appendTo)
            DomHandler.absolutePosition(this.panel, (this.props.multiple ? this.multipleContainerEl : this.inputEl));
        else
            DomHandler.relativePosition(this.panel, (this.props.multiple ? this.multipleContainerEl : this.inputEl));
    }
    
    hide() {
        this.setState({panelVisible: false});
        this.panel.style.display = 'none';  
    }
    
    handleDropdownClick(event) {
        if(this.props.onDropdownClick) {
            this.props.onDropdownClick({
                originalEvent: event,
                query: this.inputEl.value
            });
        }
    }
    
    removeItem(e, itemIndex) {
        let removedValue = this.value.splice(itemIndex, 1)[0];
        if(this.props.onUnselect) {
            this.props.onUnselect({
                originalEvent: e,
                value: removedValue
            })
        }

        this.props.onChange({
            originalEvent: e,
            value: this.value
        });
    }
        
    onKeydown(event) {
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
                        this.hide();
                    }
                    event.preventDefault();
                break;
                
                //escape
                case 27:
                    this.hide();
                    event.preventDefault();
                break;

                
                //tab
                case 9:
                    if(this.highlightOption) {
                        this.selectItem(event, this.highlightOption);
                    }
                    this.hide();
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
        this.setState({focus: true});
        if(this.props.onFocus) {
            this.props.onFocus(event);
        }
    }

    onInputChange(event) {
        this.props.onChange({
            originalEvent: event,
            value: event.target.value
        });

        if(this.props.completeMethod) {
            this.props.completeMethod({
                originalEvent: event,
                query: event.target.value
            });
        }
    }
    
    onBlur(event) {
        this.setState({focus: false});
        if(this.props.onBlur) {
            this.props.onBlur(event);
        }
    }
    
    onDropdownFocus() {
        this.dropdownFocus = true;
        this.inputEl.focus();
    }
    
    onDropdownBlur() {
        this.dropdownFocus = false;
    }
    
    isSelected(val) {
        let selected = false;
        if(this.value && this.value.length) {
            for(let i = 0; i < this.value.length; i++) {
                if(ObjectUtils.equals(this.value[i], val)) {
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

    onMouseEnterForItem(suggestion) {
        this.setState({highlightOption: suggestion});
    }

    onMouseLeaveForItem() {
        this.setState({highlightOption: null});
    }

    writeValue(value) {        
        if(this.props.multiple) {
            this.value = value;
        }
        else {
            this.value = value ? this.props.field ? ObjectUtils.resolveFieldData(value, this.props.field) : value : '';
            this.inputEl.value = this.value;
        }
    }

    componentDidMount() {
        this.panel = this.autoComplete.querySelector('div.ui-autocomplete-panel');

        this.documentClickListener = () => {
            this.hide();
        }

        document.addEventListener('click', this.documentClickListener); 

        if(this.props.appendTo) {
            if(this.props.appendTo === 'body')
                document.body.appendChild(this.panel);
            else
                DomHandler.appendChild(this.panel, this.props.appendTo);
        }
        this.writeValue(this.props.value);
       
    }

    componentWillReceiveProps(nextProps) {
        var newSuggestions = nextProps.suggestions;
        if (newSuggestions && this.state.focus) {
            this.suggestions = newSuggestions;
            if(this.suggestions && this.suggestions.length) {
                this.show();
                this.align();
            }
        } 
    }

    componentWillUnmount() {
        if (this.documentClickListener) {
            document.removeEventListener('click', this.documentClickListener);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.highlightOption !== this.state.highlightOption) {
            let listItem = this.panel.querySelector('li.ui-state-highlight');
            if(listItem) {
                DomHandler.scrollInView(this.panel, listItem);
            }
        }   
    }
    
    render() {
        var className = classNames('ui-autocomplete ui-widget', this.props.className, {
            'ui-autocomplete-dd': this.props.dropdown,
            'ui-autocomplete-multiple': this.props.multiple
        });

        if(this.props.multiple) {
            var multipleContainerClass = classNames("ui-autocomplete-multiple-container ui-widget ui-inputtext ui-state-default ui-corner-all", {
                'ui-state-disabled': this.props.disabled,
                'ui-state-focus': this.state.focus
            }),
            multipleContainer = (
                <ul ref={(el) => {this.multipleContainerEl = el}} className={multipleContainerClass}>
                    { 
                        this.value && this.value.map((val, index) => {
                            var itemContainer = this.props.selectedItemTemplate ? this.props.selectedItemTemplate(val) : (<span className="ui-autocomplete-token-label">{this.props.field ? ObjectUtils.resolveFieldData(val, this.props.field) : val}</span>);
                            return (<li className="ui-autocomplete-token ui-state-highlight ui-corner-all" key={index + 'multipleItem'}>
                                        <span className="ui-autocomplete-token-icon fa fa-fw fa-close" onClick={(e) => this.removeItem(e, index)}></span>
                                        {itemContainer}
                                    </li>);
                        })
                    }
                 
                    <li className="ui-autocomplete-input-token">
                        <InputText ref={(el) => {this.inputEl = ReactDOM.findDOMNode(el)}} type="text" disabled={this.props.disabled} placeholder={this.props.placeholder} tabIndex={this.props.tabindex} onInput={this.onInput.bind(this)} 
                            onKeyDown={this.onKeydown.bind(this)} onFocus={this.onInputFocus.bind(this)} onBlur={this.onBlur.bind(this)} autoComplete="off" />
                    </li>
                </ul>
            );
        }
        else {
            var inputClass = classNames('ui-autocomplete-input', this.props.inputClassName, {
                'ui-autocomplete-dd-input': this.props.dropdown
            }),
            input = (<InputText ref={(el) => {this.inputEl = ReactDOM.findDOMNode(el)}}  type="text" className={inputClass} style={this.props.inputStyle} autoComplete="off" 
                         onInput={this.onInput.bind(this)} onKeyDown={this.onKeydown.bind(this)} onFocus={this.onInputFocus.bind(this)} onChange={this.onInputChange.bind(this)}
                         onBlur={this.onBlur.bind(this)} placeholder={this.props.placeholder} size={this.props.size} maxLength={this.props.maxlength} tabIndex={this.props.tabindex}
                         readOnly={this.props.readonly} disabled={this.props.disabled} />);
            
        }
        
        var dropdownButton = (this.props.dropdown && (<Button type="button" icon="fa-fw fa-caret-down" className="ui-autocomplete-dropdown" disabled={this.props.disabled}
                                onClick={this.handleDropdownClick.bind(this)} onFocus={this.onDropdownFocus.bind(this)} onBlur={this.onDropdownBlur.bind(this)} />))
        
        if(this.suggestions) {
            var suggestions = this.suggestions.map((suggestion, index) => {
                var itemClass = classNames('ui-autocomplete-list-item ui-corner-all', {
                    'ui-state-highlight': (this.state.highlightOption===suggestion)
                }), 
                itemContent = this.props.itemTemplate ? this.props.itemTemplate(suggestion) : this.props.field ? ObjectUtils.resolveFieldData(suggestion, this.props.field): suggestion;
                return <li className={itemClass} onClick={(event) => this.selectItem(event, suggestion)} key={index + '_item'} onMouseEnter={(e) => this.onMouseEnterForItem(suggestion)} onMouseLeave={this.onMouseLeaveForItem.bind(this)}>{itemContent}</li>;
            });
        }

        var hasSuggestions = this.suggestions && this.suggestions.length;

        return (
            <span id={this.props.id} className={className} style={this.props.style} ref={(el) => {this.autoComplete = ReactDOM.findDOMNode(el)}}>
                {input}
                {multipleContainer}
                {dropdownButton}

                <div className="ui-autocomplete-panel ui-widget-content ui-corner-all ui-shadow" style={{display: hasSuggestions ? 'block': 'none', width: this.props.appendTo ? 'auto' : '100%', maxHeight: this.props.scrollHeight}}>
                    { this.state.panelVisible && (<ul className="ui-autocomplete-items ui-autocomplete-list ui-widget-content ui-widget ui-corner-all ui-helper-reset">
                            {suggestions}
                        </ul>)
                    }
                </div>
            </span>
        );
    }
}