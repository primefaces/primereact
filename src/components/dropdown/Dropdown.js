import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DomHandler from '../utils/DomHandler';
import ObjectUtils from '../utils/ObjectUtils';
import FilterUtils from '../utils/ObjectUtils';
import classNames from 'classnames';
import { DropdownPanel } from './DropdownPanel';
import { DropdownItem } from './DropdownItem';
import Tooltip from "../tooltip/Tooltip";

export class Dropdown extends Component {

    static defaultProps = {
        id: null,
        name: null,
        value: null,
        options: null,
        optionLabel: null,
        optionValue: null,
        itemTemplate: null,
        style: null,
        className: null,
        scrollHeight: '200px',
        filter: false,
        filterBy: null,
        filterMatchMode: 'contains',
        filterPlaceholder: null,
        editable: false,
        placeholder:null,
        required: false,
        disabled: false,
        appendTo: null,
        tabIndex: null,
        autoFocus: false,
        filterInputAutoFocus: true,
        panelClassName: null,
        panelStyle: null,
        dataKey: null,
        inputId: null,
        showClear: false,
        maxLength: null,
        tooltip: null,
        tooltipOptions: null,
        ariaLabel: null,
        ariaLabelledBy: null,
        onChange: null,
        onMouseDown: null,
        onContextMenu: null
    };

    static propTypes = {
        id: PropTypes.string,
        name: PropTypes.string,
        value: PropTypes.any,
        options: PropTypes.array,
        optionLabel: PropTypes.string,
        optionValue: PropTypes.string,
        itemTemplate: PropTypes.func,
        style: PropTypes.object,
        className: PropTypes.string,
        scrollHeight: PropTypes.string,
        filter: PropTypes.bool,
        filterBy: PropTypes.string,
        filterMatchMode: PropTypes.string,
        filterPlaceholder: PropTypes.string,
        editable:PropTypes.bool,
        placeholder: PropTypes.string,
        required: PropTypes.bool,
        disabled: PropTypes.bool,
        appendTo: PropTypes.any,
        tabIndex: PropTypes.number,
        autoFocus: PropTypes.bool,
        filterInputAutoFocus: PropTypes.bool,
        lazy: PropTypes.bool,
        panelClassName: PropTypes.string,
        panelStyle: PropTypes.object,
        dataKey: PropTypes.string,
        inputId: PropTypes.string,
        showClear: PropTypes.bool,
        maxLength: PropTypes.number,
        tooltip: PropTypes.string,
        tooltipOptions: PropTypes.object,
        ariaLabel: PropTypes.string,
        ariaLabelledBy: PropTypes.string,
        onChange: PropTypes.func,
        onMouseDown: PropTypes.func,
        onContextMenu: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {
            filter: '',
            overlayVisible: null
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
        this.clear = this.clear.bind(this);
    }

    onClick(event) {
        if(this.props.disabled) {
            return;
        }

        if(this.documentClickListener) {
            this.selfClick = true;
        }

        let clearClick = DomHandler.hasClass(event.target, 'p-dropdown-clear-icon');

        if(!this.overlayClick && !this.editableInputClick && !clearClick) {
            this.focusInput.focus();

            if(this.panel.element.offsetParent) {
                this.hide();
            }
            else {
                this.show();

                if (this.props.filter && this.props.filterInputAutoFocus) {
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
        if (this.state.overlayVisible)
            this.overlayClick = true;
    }

    onInputFocus(event) {
        DomHandler.addClass(this.container, 'p-focus');
    }

    onInputBlur(event) {
        DomHandler.removeClass(this.container, 'p-focus');
    }

    onUpKey(event) {
        if (this.props.options) {
            let selectedItemIndex = this.findOptionIndex(this.props.value);
            let prevItem = this.findPrevVisibleItem(selectedItemIndex);

            if (prevItem) {
                this.selectItem({
                    originalEvent: event,
                    option: prevItem
                });
            }
        }

        event.preventDefault();
    }

    onDownKey(event) {
        if (this.props.options) {
            if (!this.panel.element.offsetParent && event.altKey) {
                this.show();
            }
            else {
                let selectedItemIndex = this.findOptionIndex(this.props.value);
                let nextItem = this.findNextVisibleItem(selectedItemIndex);

                if (nextItem) {
                    this.selectItem({
                        originalEvent: event,
                        option: nextItem
                    });
                }
            }
        }

        event.preventDefault();
    }

    onInputKeyDown(event) {
        switch(event.which) {
            //down
            case 40:
                this.onDownKey(event);
            break;

            //up
            case 38:
                this.onUpKey(event);
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
                event.preventDefault();
            break;

            //escape and tab
            case 27:
            case 9:
                this.hide();
            break;

            default:
                this.search(event);
            break;
        }
    }

    search(event) {
        if (this.searchTimeout) {
            clearTimeout(this.searchTimeout);
        }

        const char = String.fromCharCode(event.keyCode);
        this.previousSearchChar = this.currentSearchChar;
        this.currentSearchChar = char;

        if (this.previousSearchChar === this.currentSearchChar)
            this.searchValue = this.currentSearchChar;
        else
            this.searchValue = this.searchValue ? this.searchValue + char : char;

        let searchIndex = this.props.value ? this.findOptionIndex(this.props.value) : -1;
        let newOption = this.searchOption(++searchIndex);

        if (newOption) {
            this.selectItem({
                originalEvent: event,
                option: newOption
            });
            this.selectedOptionUpdated = true;
        }

        this.searchTimeout = setTimeout(() => {
            this.searchValue = null;
        }, 250);
    }

    searchOption(index) {
        let option;

        if (this.searchValue) {
            option = this.searchOptionInRange(index, this.props.options.length);

            if (!option) {
                option = this.searchOptionInRange(0, index);
            }
        }

        return option;
    }

    searchOptionInRange(start, end) {
        for (let i = start; i < end; i++) {
            let opt = this.props.options[i];
            let label = this.getOptionLabel(opt).toString().toLowerCase();
            if (label.startsWith(this.searchValue.toLowerCase())) {
                return opt;
            }
        }

        return null;
    }

    findNextVisibleItem(index) {
        let i = index + 1;
        if (i === this.props.options.length) {
            return null;
        }

        let option = this.props.options[i];

        if (option.disabled) {
            return this.findNextVisibleItem(i);
        }

        if (this.hasFilter()) {
            if (this.filter(option))
                return option;
            else
                return this.findNextVisibleItem(i);
        }
        else {
            return option;
        }
    }

    findPrevVisibleItem(index) {
        let i = index - 1;
        if (i === -1) {
            return null;
        }

        let option = this.props.options[i];

        if (option.disabled) {
            return this.findPrevVisibleItem(i);
        }

        if (this.hasFilter()) {
            if (this.filter(option))
                return option;
            else
                return this.findPrevVisibleItem(i);
        }
        else {
            return option;
        }
    }

    onEditableInputClick(event) {
        this.editableInputClick = true;
        this.bindDocumentClickListener();
    }

    onEditableInputChange(event) {
        this.props.onChange({
            originalEvent: event.originalEvent,
            value: event.target.value,
            stopPropagation : () =>{},
            preventDefault : () =>{},
            target: {
                name: this.props.name,
                id: this.props.id,
                value : event.target.value,
            }
        });
    }

    onEditableInputFocus(event) {
        DomHandler.addClass(this.container, 'p-focus');
        this.hide();
    }

    onOptionClick(event) {
        const option = event.option;

        if (!option.disabled) {
            this.selectItem(event);
            this.focusInput.focus();
        }

        setTimeout(() => {
            this.hide();
        }, 100);
    }

    onFilterInputChange(event) {
        this.setState({filter: event.target.value});
    }

    onFilterInputKeyDown(event) {
        switch (event.which) {
            //down
            case 40:
                this.onDownKey(event);
                break;

            //up
            case 38:
                this.onUpKey(event);
                break;

            //enter
            case 13:
                this.hide();
                event.preventDefault();
            break;

            default:
            break;
        }
    }

    clear(event) {
        this.props.onChange({
            originalEvent: event,
            value: null,
            stopPropagation : () =>{},
            preventDefault : () =>{},
            target: {
                name: this.props.name,
                id: this.props.id,
                value : null
            }
        });
        this.updateEditableLabel();
    }

    selectItem(event) {
        let currentSelectedOption = this.findOption(this.props.value);

        if(currentSelectedOption !== event.option) {
            this.updateEditableLabel(event.option);
            const optionValue = this.getOptionValue(event.option);

            this.props.onChange({
                originalEvent: event.originalEvent,
                value: optionValue,
                stopPropagation : () =>{},
                preventDefault : () =>{},
                target: {
                    name: this.props.name,
                    id: this.props.id,
                    value: optionValue
                }
            });
        }
    }

    findOptionIndex(value) {
        let index = -1;
        if (this.props.options) {
            for (let i = 0; i < this.props.options.length; i++) {
                let optionValue = this.getOptionValue(this.props.options[i]);
                if ((value === null && optionValue == null) || ObjectUtils.equals(value, optionValue, this.props.dataKey)) {
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
        this.panel.element.style.zIndex = String(DomHandler.generateZIndex());
        this.panel.element.style.display = 'block';

        setTimeout(() => {
            DomHandler.addClass(this.panel.element, 'p-input-overlay-visible');
            DomHandler.removeClass(this.panel.element, 'p-input-overlay-hidden');
        }, 1);

        this.alignPanel();
        this.bindDocumentClickListener();
        this.setState({overlayVisible: true})
    }

    hide() {
        if (this.panel && this.panel.element && this.panel.element.offsetParent) {
            DomHandler.addClass(this.panel.element, 'p-input-overlay-hidden');
            DomHandler.removeClass(this.panel.element, 'p-input-overlay-visible');

            this.unbindDocumentClickListener();
            this.clearClickState();

            this.hideTimeout = setTimeout(() => {
                this.panel.element.style.display = 'none';
                DomHandler.removeClass(this.panel.element, 'p-input-overlay-hidden');
            }, 150);
            this.setState({overlayVisible: false})
        }
    }

    alignPanel() {
        if(this.props.appendTo) {
            this.panel.element.style.minWidth = DomHandler.getWidth(this.container) + 'px';
            DomHandler.absolutePosition(this.panel.element, this.container);
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

    hasFilter() {
        return this.state.filter && this.state.filter.trim().length > 0;
    }

    renderHiddenSelect(selectedOption) {
        let placeHolderOption = <option value="">{this.props.placeholder}</option>;
        let option = selectedOption ? <option value={selectedOption.value}>{this.getOptionLabel(selectedOption)}</option> : null;

        return (
            <div className="p-hidden-accessible p-dropdown-hidden-select">
                <select ref={(el) => this.nativeSelect = el} required={this.props.required} name={this.props.name} tabIndex="-1" aria-hidden="true">
                    {placeHolderOption}
                    {option}
                </select>
            </div>
        );
    }

    renderKeyboardHelper() {
        return <div className="p-hidden-accessible">
                    <input ref={(el) => this.focusInput = el} id={this.props.inputId} type="text" readOnly={true} aria-haspopup="listbox"
                        onFocus={this.onInputFocus} onBlur={this.onInputBlur} onKeyDown={this.onInputKeyDown}
                        disabled={this.props.disabled} tabIndex={this.props.tabIndex} aria-label={this.props.ariaLabel} aria-labelledby={this.props.ariaLabelledBy}/>
                </div>;
    }

    renderLabel(label) {
        if(this.props.editable) {
            let value = label||this.props.value||'';

            return <input ref={(el) => this.editableInput = el} type="text" defaultValue={value} className="p-dropdown-label p-inputtext" disabled={this.props.disabled}
                          placeholder={this.props.placeholder} maxLength={this.props.maxLength} onClick={this.onEditableInputClick} onInput={this.onEditableInputChange}
                          onFocus={this.onEditableInputFocus} onBlur={this.onInputBlur} aria-label={this.props.ariaLabel} aria-labelledby={this.props.ariaLabelledBy}
                          aria-haspopup="listbox"/>;
        }
        else {
            let className = classNames('p-dropdown-label p-inputtext', {
                'p-placeholder': label === null && this.props.placeholder,
                'p-dropdown-label-empty': label === null && !this.props.placeholder}
            );

            return <label className={className}>{label||this.props.placeholder||'empty'}</label>;
        }
    }

    renderClearIcon() {
        if(this.props.value != null && this.props.showClear && !this.props.disabled) {
            return (
                <i className="p-dropdown-clear-icon pi pi-times" onClick={this.clear}></i>
            );
        }
        else {
            return null;
        }
    }

    renderDropdownIcon() {
        return <div className="p-dropdown-trigger" role="button" aria-haspopup="listbox" aria-expanded={this.state.overlayVisible}>
                    <span className="p-dropdown-trigger-icon pi pi-chevron-down p-clickable"></span>
                </div>;
    }

    renderItems(selectedOption) {
        let items = this.props.options;

        if (items && this.hasFilter()) {
            let filterValue = this.state.filter.trim().toLowerCase();
            let searchFields = this.props.filterBy ? this.props.filterBy.split(',') : [this.props.optionLabel || 'label'];
            items = FilterUtils.filter(items, searchFields, filterValue, this.props.filterMatchMode);
        }

        if(items) {
            return items.map((option) => {
                let optionLabel = this.getOptionLabel(option);
                return (
                    <DropdownItem key={this.getOptionKey(option)} label={optionLabel} option={option} template={this.props.itemTemplate} selected={selectedOption === option} disabled={option.disabled} onClick={this.onOptionClick} />
                );
            });
        }
        else {
            return null;
        }
    }

    renderFilter() {
        if(this.props.filter) {
            return <div className="p-dropdown-filter-container">
                        <input ref={(el) => this.filterInput = el} type="text" autoComplete="off" className="p-dropdown-filter p-inputtext p-component" placeholder={this.props.filterPlaceholder}
                            onKeyDown={this.onFilterInputKeyDown} onChange={this.onFilterInputChange} value={this.state.filter} />
                        <span className="p-dropdown-filter-icon pi pi-search"></span>
                   </div>;
        }
        else {
            return null;
        }
    }

    getOptionLabel(option) {
        return this.props.optionLabel ? ObjectUtils.resolveFieldData(option, this.props.optionLabel) : (option['label'] !== undefined ? option['label'] : option);
    }

    getOptionValue(option) {
        return this.props.optionValue ? ObjectUtils.resolveFieldData(option, this.props.optionValue) : (option['value'] !== undefined ? option['value'] : option);
    }

    getOptionKey(option) {
        return this.props.dataKey ? ObjectUtils.resolveFieldData(option, this.props.dataKey) : this.getOptionLabel(option);
    }

    checkValidity() {
        return this.nativeSelect.checkValidity;
    }

    componentDidMount() {
        if (this.props.autoFocus && this.focusInput) {
            this.focusInput.focus();
        }

        if (this.props.tooltip) {
            this.renderTooltip();
        }

        this.nativeSelect.selectedIndex = 1;
    }

    componentWillUnmount() {
        this.unbindDocumentClickListener();

        if (this.tooltip) {
            this.tooltip.destroy();
            this.tooltip = null;
        }

        if (this.hideTimeout) {
            clearTimeout(this.hideTimeout);
            this.hideTimeout = null;
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.filter) {
            this.alignPanel();
        }

        if (this.panel.element.offsetParent) {
            let highlightItem = DomHandler.findSingle(this.panel.element, 'li.p-highlight');
            if (highlightItem) {
                DomHandler.scrollInView(this.panel.itemsWrapper, highlightItem);
            }
        }

        if (prevProps.tooltip !== this.props.tooltip) {
            if (this.tooltip)
                this.tooltip.updateContent(this.props.tooltip);
            else
                this.renderTooltip();
        }

        if (this.state.filter && (!this.props.options || this.props.options.length === 0)) {
            this.setState({filter: ''});
        }

        this.nativeSelect.selectedIndex = 1;
    }

    renderTooltip() {
        this.tooltip = new Tooltip({
            target: this.container,
            content: this.props.tooltip,
            options: this.props.tooltipOptions
        });
    }

    render() {
        let className = classNames('p-dropdown p-component', this.props.className, {'p-disabled': this.props.disabled,
                                    'p-dropdown-clearable': this.props.showClear && !this.props.disabled});
        let selectedOption = this.findOption(this.props.value);
        let label = selectedOption ? this.getOptionLabel(selectedOption) : null;

        let hiddenSelect = this.renderHiddenSelect(selectedOption);
        let keyboardHelper = this.renderKeyboardHelper();
        let labelElement = this.renderLabel(label);
        let dropdownIcon = this.renderDropdownIcon();
        let items = this.renderItems(selectedOption);
        let filterElement = this.renderFilter();
        let clearIcon = this.renderClearIcon();

        if(this.props.editable && this.editableInput) {
            let value = label||this.props.value||'';
            this.editableInput.value = value;
        }

        return (
            <div id={this.props.id} ref={(el) => this.container = el} className={className} style={this.props.style} onClick={this.onClick}
                 onMouseDown={this.props.onMouseDown} onContextMenu={this.props.onContextMenu}>
                 {keyboardHelper}
                 {hiddenSelect}
                 {labelElement}
                 {clearIcon}
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
