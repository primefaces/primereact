import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DomHandler from '../utils/DomHandler';
import ObjectUtils from '../utils/ObjectUtils';
import classNames from 'classnames';

export class Dropdown extends Component {

    static defaultProps = {
        id: null,
        value: null,
        options: null,
        onChange: null,
        itemTemplate: null,
        style: null,
        className: null,
        autoWidth: true,
        scrollHeight: '200px',
        filter: false,
        filterBy: null,
        filterPlaceholder: null,
        editable: false,
        placeholder:null,
        required: false,
        disabled: false,
        appendTo: null,
        tabindex: null,
        autofocus: false,
        lazy: true,
        panelStyleClass: null,
        panelStyle: null,
        dataKey: null,
        onMouseDown: null,
        onContextMenu: null
    };

    static propTypes = {
        id: PropTypes.string,
        value: PropTypes.any,
        options: PropTypes.array,
        onChange: PropTypes.func,
        itemTemplate: PropTypes.func,
        style: PropTypes.object,
        className: PropTypes.string,
        autoWidth: PropTypes.bool,
        scrollHeight: PropTypes.string,
        filter: PropTypes.bool,
        filterBy: PropTypes.string,
        filterPlaceholder: PropTypes.string,
        editable:PropTypes.bool,
        placeholder: PropTypes.string,
        required: PropTypes.bool,
        disabled: PropTypes.bool,
        appendTo: PropTypes.any,
        tabindex: PropTypes.number,
        autofocus: PropTypes.bool,
        lazy: PropTypes.bool,
        panelStyleClass: PropTypes.string,
        panelStyle: PropTypes.string,
        dataKey: PropTypes.string,
        onMouseDown: PropTypes.func,
        onContextMenu: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {panelVisible: false, focus: false, optionsToDisplay: this.props.options};
        this.onMouseclick = this.onMouseclick.bind(this);
        this.onInputFocus = this.onInputFocus.bind(this);
        this.onInputBlur = this.onInputBlur.bind(this);
        this.onKeydown = this.onKeydown.bind(this);
        this.onEditableInputClick = this.onEditableInputClick.bind(this);
        this.onEditableInputChange = this.onEditableInputChange.bind(this);
        this.onEditableInputFocus = this.onEditableInputFocus.bind(this);
        this.onInputBlur = this.onInputBlur.bind(this);
        this.onFilter = this.onFilter.bind(this);
        

        this.value = this.props.value;
        this.optionsToDisplay = this.props.options;
        if(this.value) {
            this.updateSelectedOption(this.value);
        }

        if(this.filterValue && this.filterValue.length) {
            this.activateFilter();
        }
    }    

    getLabel() {
        return (this.selectedOption ? this.selectedOption.label : this.props.placeholder);
    }
    
    updateEditableLabel() {
        if(this.editableInput) {
            this.editableInput.value = (this.selectedOption ? this.selectedOption.label : this.value||'');
        }
    }

    updateOptions() {
        if(this.optionsChanged && this.panelVisible) {
            this.optionsChanged = false;
            
            setTimeout(() => {
                this.updateDimensions();
                this.alignPanel();
            }, 1);
        }
    }
        
    onItemClick(event, option) {
        this.itemClick = true;
        this.selectItem(event, option);
        this.hiddenInput.focus();
                                
        this.hide();
    }
    
    selectItem(event, option) {
        if(this.selectedOption !== option) {
            this.selectedOption = option;
            this.value = option.value;

            this.updateEditableLabel();
            this.props.onChange({
                originalEvent: event,
                value: this.value
            });
        }  
    }
    
    resetFilter() {
        if(this.filterInput) {
            this.filterInput.value = '';
        }
        
        this.optionsToDisplay = this.props.options;
        this.setState({optionsToDisplay: this.optionsToDisplay});
    }
    
    updateSelectedOption(val) {
        this.selectedOption = this.findOption(val, this.optionsToDisplay);
        if(!this.props.placeholder && !this.selectedOption && this.optionsToDisplay && this.optionsToDisplay.length && !this.props.editable) {
            this.selectedOption = this.optionsToDisplay[0];
        }
        this.selectedOptionUpdated = true;
    }
                 
    updateDimensions() {
        if(this.props.autoWidth) {
            let select = DomHandler.findSingle(this.container, 'select');
            if(!this.props.style||(!this.props.style['width']&&!this.props.style['min-width'])) {
                this.container.children[0].style.width = select.offsetWidth + 30 + 'px';
            }
        }
    }

    onMouseclick(event) {
        if(this.props.disabled||this.props.readonly) {
            return;
        }
        
        this.selfClick = true;
        
        if(!this.itemClick) {
            this.hiddenInput.focus();
            
            if(this.state.panelVisible)
                this.hide();
            else {
                this.show();

                if (this.filterInput !== undefined) {
                    setTimeout(() => {
                        this.filterInput.focus();
                    }, 200);
                }
            }
        }
    }
    
    onEditableInputClick(event) {
        this.itemClick = true;
        this.bindDocumentClickListener();
    }
    
    onEditableInputFocus(event) {
        this.setState({focus: true});
        this.hide();
    }
    
    onEditableInputChange(event) {
        this.value = event.target.value;
        this.updateSelectedOption(this.value);                

        this.props.onChange({
            originalEvent: event,
            value: this.value
        });
    }
             
    onShow() {
        if(this.props.options && this.props.options.length) {
            this.alignPanel();
            this.bindDocumentClickListener();
            
            let selectedListItem = DomHandler.findSingle(this.itemsWrapper, '.ui-dropdown-item.ui-state-highlight');
            if(selectedListItem) {
                DomHandler.scrollInView(this.itemsWrapper, selectedListItem);
            }
        }
    }
    
    show() {
        if(this.props.appendTo) {
            this.panel.style.minWidth = DomHandler.getWidth(this.container) + 'px';
        }
        
        var zIndex = DomHandler.getZindex() + 1;
        this.panel.style.zIndex = String(zIndex);
        this.panelVisible = true;
        this.onShow();

        this.setState({panelVisible: this.panelVisible});
    }
    
    hide() {
        this.panelVisible = false;
        this.setState({panelVisible: this.panelVisible});
    }
    
    alignPanel() {
        if(this.props.appendTo)
            DomHandler.absolutePosition(this.panel, this.container);
        else
            DomHandler.relativePosition(this.panel, this.container);
    }
    
    onInputFocus(event) {
        this.focus = true;
        this.setState({focus: this.focus});

        if(this.props.onFocus) {
            this.props.onFocus({
                originalEvent: event
            })
        }
    }
    
    onInputBlur(event) {
        this.focus = false;
        this.setState({focus: this.focus});
        this.selfClick = false;

        if(this.props.onBlur) {
            this.props.onBlur({
                originalEvent: event
            })
        }
    }
    
    onKeydown(event) {
        if(this.props.readonly) {
            return;
        }
        
        let selectedItemIndex = this.selectedOption ? this.findOptionIndex(this.selectedOption.value, this.optionsToDisplay) : -1;

        switch(event.which) {
            //down
            case 40:
                if(!this.panelVisible && event.altKey) {
                    this.show();
                }
                else {
                    if(selectedItemIndex !== -1) {
                        let nextItemIndex = selectedItemIndex + 1;
                        if(nextItemIndex !== (this.optionsToDisplay.length)) {
                            this.selectItem(event, this.optionsToDisplay[nextItemIndex]);
                            this.selectedOptionUpdated = true;
                        }
                    }
                    else if(this.optionsToDisplay) {
                        this.selectItem(event, this.optionsToDisplay[0]);
                    }                    
                }
                
                event.preventDefault();
                
            break;
            
            //up
            case 38:
                if(selectedItemIndex > 0) {
                    let prevItemIndex = selectedItemIndex - 1;                    
                    this.selectItem(event, this.optionsToDisplay[prevItemIndex]);
                    this.selectedOptionUpdated = true;
                }
                
                event.preventDefault();
            break;

            //space
            case 32:
                if(!this.panelVisible){
                    this.show();
                    event.preventDefault();
                }
            break;
            
            //enter
            case 13:                                        
                this.hide();

                event.preventDefault();
            break;
            
            //escape and tab
            case 27:
            case 9:
                this.hide();
            break;

            default:
            break;
        }
    }
                    
    findOptionIndex(val, opts) {        
        let index = -1;
        if(opts) {
            for(let i = 0; i < opts.length; i++) {
                if((val == null && opts[i].value == null) || ObjectUtils.equals(val, opts[i].value, this.props.dataKey)) {
                    index = i;
                    break;
                }
            }
        }
                
        return index;
    }
    
    findOption(val, opts) {
        let index = this.findOptionIndex(val, opts);
        return (index !== -1) ? opts[index] : null;
    }
    
    onFilter(event) {
        let inputValue = event.target.value.toLowerCase();
        if(inputValue && inputValue.length) {
            this.filterValue = inputValue;
            this.activateFilter();
        }
        else {
            this.filterValue = null;
            this.optionsToDisplay = this.props.options;
            this.setState({optionsToDisplay: this.optionsToDisplay});
        }
        
        this.optionsChanged = true;
        this.updateOptions();
    }
    
    activateFilter() {
        let searchFields = this.props.filterBy.split(',');
        if(this.props.options && this.props.options.length) {
            this.optionsToDisplay = ObjectUtils.filter(this.props.options, searchFields, this.filterValue);
            this.setState({optionsToDisplay: this.optionsToDisplay});
            this.optionsChanged = true;
            this.updateOptions();
        }
    }
    
    applyFocus() {
        if(this.props.editable)
            DomHandler.findSingle(this.container, '.ui-dropdown-label.ui-inputtext').focus();
        else
            DomHandler.findSingle(this.container, 'input[readonly]').focus();
    }
    
    bindDocumentClickListener() {
        if(!this.documentClickListener) {
            this.documentClickListener = () => {
                if(!this.selfClick&&!this.itemClick) {
                    this.panelVisible = false;
                    this.unbindDocumentClickListener();
                    this.setState({panelVisible: this.panelVisible});
                }
                
                this.selfClick = false;
                this.itemClick = false;
            }

            document.addEventListener('click', this.documentClickListener);
        }    
    }
    
    unbindDocumentClickListener() {
        if(this.documentClickListener) {
            document.removeEventListener('click', this.documentClickListener);
            this.documentClickListener = null;
        }
    }

    componentDidMount() {
        if(this.props.editable) {
            this.updateEditableLabel();
        }

        this.updateDimensions();
        this.initialized = true;
        
        if(this.props.appendTo) {
            if(this.props.appendTo === 'body')
                document.body.appendChild(this.panel);
            else
                DomHandler.appendChild(this.panel, this.props.appendTo);
        }

        if(this.filterContainer && !this.onFilterClick) {
            this.onFilterClick = this.filterContainer.addEventListener("click", (event) => {
                event.stopPropagation();
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        if(!ObjectUtils.equals(nextProps.options,this.props.options)) {
            this.optionsToDisplay = nextProps.options;
            this.optionsChanged = true;
            
            this.updateSelectedOption(this.value);
            if(this.filterValue && this.filterValue.length) {
                this.activateFilter();
            }
        }
        if(!ObjectUtils.equals(nextProps.value, this.value)) {
            this.value = nextProps.value;
            this.updateSelectedOption(this.value);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.selectedOptionUpdated && this.itemsWrapper) {
            let selectedItem = DomHandler.findSingle(this.panel, 'li.ui-state-highlight');
            if(selectedItem) {
                DomHandler.scrollInView(this.itemsWrapper, selectedItem);
            }
            this.selectedOptionUpdated = false;
        }
    }
    
    componentWillUnmount() {
        this.initialized = false;
        
        this.unbindDocumentClickListener();
        
        if(this.props.appendTo) {
            this.container.appendChild(this.panel);
        }
    }

    render() {
        let styleClass = classNames('ui-dropdown ui-widget ui-state-default ui-corner-all ui-helper-clearfix', this.props.className, {
            'ui-state-disabled': this.props.disabled,
            'ui-dropdown-open': this.state.panelVisible,
            'ui-state-focus': this.state.focus
        });

        let hiddenSelectElement;
        if(this.props.autoWidth) {
            hiddenSelectElement = (<div className="ui-helper-hidden-accessible">
                                        <select required={this.props.required} name="options" tabIndex="-1" value={this.value}>
                                            {   
                                                this.props.options && this.props.options.map((option, index) => {
                                                    return <option value={option.value} key={"option_" + option.label}>{option.label}</option>
                                                })
                                            }
                                        </select>
                                    </div>);
        }

        let hiddenInputElement = (<div className="ui-helper-hidden-accessible">
                                    <input ref={(el) => this.hiddenInput = el} type="text" readOnly onFocus={this.onInputFocus} role="listbox"
                                        onBlur={this.onInputBlur} onKeyDown={this.onKeydown} disabled={this.props.disabled} tabIndex={this.props.tabindex} autoFocus={this.props.autofocus} />
                                </div>);

        let labelElement;
        if(!this.props.editable) {
            let label = this.getLabel(),
            labelElementClass = classNames('ui-dropdown-label ui-inputtext ui-corner-all', {
                'ui-dropdown-label-empty': !label
            });

            labelElement = <label className={labelElementClass}>{label||'empty'}</label>
        }
        else {
            labelElement = <input ref={(el) => this.editableInput = el} type="text" className="ui-dropdown-label ui-inputtext ui-corner-all" disabled={this.props.disabled}
                                placeholder={this.props.placeholder} onClick={this.onEditableInputClick} onInput={this.onEditableInputChange} 
                                onFocus={this.onEditableInputFocus} onBlur={this.onInputBlur} />
        }

        let trigger = (<div className="ui-dropdown-trigger ui-state-default ui-corner-right">
                            <span className="fa fa-fw fa-caret-down ui-clickable"></span>
                        </div>)

        let filterContainer;
        if(this.props.filter) {
            filterContainer = (<div ref={(el) => this.filterContainer = el} className="ui-dropdown-filter-container" onInput={this.onFilter}>
                                    <input ref={(el) => this.filterInput = el} type="text" autoComplete="off" className="ui-dropdown-filter ui-inputtext ui-widget ui-state-default ui-corner-all" 
                                        placeholder={this.props.filterPlaceholder} onKeyDown={this.onKeydown} />
                                    <span className="fa fa-search"></span>
                               </div>);
        }

        let listItems,
        isRendered = this.props.lazy ? this.state.panelVisible : true;
        if(isRendered) {
            listItems = (<ul className="ui-dropdown-items ui-dropdown-list ui-widget-content ui-widget ui-corner-all ui-helper-reset">
                            {
                                this.state.optionsToDisplay && this.state.optionsToDisplay.map((option, index) => {
                                    let listItemContent = this.props.itemTemplate ? this.props.itemTemplate(option) : <span>{option.label||'empty'}</span>,
                                    itemClass = classNames('ui-dropdown-item ui-corner-all', {
                                        'ui-state-highlight': (this.selectedOption && this.selectedOption.label === option.label),
                                        'ui-dropdown-item-empty': !option.label||option.label.length === 0
                                    });

                                    return (<li className={itemClass} onClick={(e) => this.onItemClick(e, option)} key={'dd_item_' + option.label}>
                                                {listItemContent}
                                            </li>)
                                })
                            }
                        </ul>);
        }

        let panelStyle = Object.assign({'display': this.state.panelVisible ? 'block' : 'none'}, this.props.panelStyle),
        panelStyleClass = classNames('ui-dropdown-panel ui-widget-content ui-corner-all ui-helper-hidden ui-shadow', this.props.panelStyleClass), 
        panel = (<div ref={(el) => this.panel = el} className={panelStyleClass} style={panelStyle}>
                    {filterContainer}
                    <div ref={(el) => this.itemsWrapper = el} className="ui-dropdown-items-wrapper" style={{'maxHeight': this.props.scrollHeight||'auto'}}>
                        {listItems}
                    </div>
                </div>);
        

        return (
            <div id={this.props.id} ref={(el) => this.container = el} className={styleClass} style={this.props.style} onClick={this.onMouseclick}
                 onMouseDown={this.props.onMouseDown} onContextMenu={this.props.onContextMenu}>
                {hiddenSelectElement}
                {hiddenInputElement}
                {labelElement}
                {trigger}
                {panel}
            </div>
        );
    }
}