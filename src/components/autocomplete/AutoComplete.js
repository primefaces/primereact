import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {InputText} from '../inputtext/InputText';
import {Button} from '../button/Button';
import DomHandler from '../utils/DomHandler';
import ObjectUtils from '../utils/ObjectUtils';
import {AutoCompletePanel} from './AutoCompletePanel';
import classNames from 'classnames';
import Tooltip from "../tooltip/Tooltip";
import UniqueComponentId from "../utils/UniqueComponentId";

export class AutoComplete extends Component {

    static defaultProps = {
        id: null,
        value: null,
        name: null,
        type: 'text',
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
        inputId: null,
        inputStyle: null,
        inputClassName: null,
        placeholder: null,
        readonly: false,
        disabled: false,
        maxlength: null,
        size: null,
        appendTo: null,
        tabindex: null,
        autoFocus: false,
        tooltip: null,
        tooltipOptions: null,
        ariaLabelledBy: null,
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
        name: PropTypes.string,
        type: PropTypes.string,
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
        inputId: PropTypes.string,
        inputStyle: PropTypes.object,
        inputClassName: PropTypes.string,
        placeholder: PropTypes.string,
        readonly: PropTypes.bool,
        disabled: PropTypes.bool,
        maxlength: PropTypes.number,
        size: PropTypes.number,
        appendTo: PropTypes.any,
        tabindex: PropTypes.number,
        autoFocus: PropTypes.bool,
        tooltip: PropTypes.string,
        tooltipOptions: PropTypes.object,
        ariaLabelledBy: PropTypes.string,
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
        this.onInputClick = this.onInputClick.bind(this);
        this.onInputKeyDown = this.onInputKeyDown.bind(this);
        this.onDropdownClick = this.onDropdownClick.bind(this);
        this.onMultiContainerClick = this.onMultiContainerClick.bind(this);
        this.onMultiInputFocus = this.onMultiInputFocus.bind(this);
        this.onMultiInputBlur = this.onMultiInputBlur.bind(this);
        this.selectItem = this.selectItem.bind(this);

        this.listId = UniqueComponentId() + '_list';
    }

    onInputChange(event) {
        //Cancel the search request if user types within the timeout
        if (this.timeout) {
            clearTimeout(this.timeout);
        }

        let query = event.target.value;
        if (!this.props.multiple) {
            this.updateModel(event, query);
        }

        if (query.length === 0) {
            this.hidePanel();
            if (this.props.onClear) {
                this.props.onClear(event);
            }
        }
        else {
            if (query.length >= this.props.minLength) {
                this.timeout = setTimeout(() => {
                    this.search(event, query, 'input');
                }, this.props.delay);
            }
            else {
                this.hidePanel();
            }
        }
    }

    onInputClick(event) {
        if (this.documentClickListener) {
            this.inputClick = true;
        }

        if (this.props.onClick) {
            this.props.onClick(event);
        }
    }

    search(event, query, source) {
        //allow empty string but not undefined or null
        if (query === undefined || query === null) {
            return;
        }

        //do not search blank values on input change
        if (source === 'input' && query.trim().length === 0) {
            return;
        }

        if (this.props.completeMethod) {
            this.searching = true;
            this.showLoader();
            this.props.completeMethod({
                originalEvent: event,
                query: query
            });
        }
    }

    selectItem(event, option) {
        if (this.props.multiple) {
            this.inputEl.value = '';
            if (!this.isSelected(option)) {
                let newValue = this.props.value ? [...this.props.value, option] : [option];
                this.updateModel(event, newValue);
            }
        }
        else {
            this.updateInputField(option);
            this.updateModel(event, option);
        }

        if (this.props.onSelect) {
            this.props.onSelect({
                originalEvent: event,
                value: option
            })
        }

        this.inputEl.focus();
    }

    updateModel(event, value) {
        if (this.props.onChange) {
            this.props.onChange({
                originalEvent: event,
                value: value,
                stopPropagation : () =>{},
                preventDefault : () =>{},
                target: {
                    name: this.props.name,
                    id: this.props.id,
                    value: value
                }
            });
        }

        this.ariaSelected = value;
    }

    formatValue(value) {
        if (value) {
            if (this.props.selectedItemTemplate) {
                const resolvedFieldData = this.props.selectedItemTemplate(value);
                return resolvedFieldData ? resolvedFieldData : value;
            }
            else if (this.props.field) {
                const resolvedFieldData = ObjectUtils.resolveFieldData(value, this.props.field);
                return resolvedFieldData !== null && resolvedFieldData !== undefined ? resolvedFieldData : value;
            }
            else
                return value;
        }
        else
            return '';
    }

    updateInputField(value) {
        const formattedValue = this.formatValue(value);
        this.inputEl.value = formattedValue;
    }

    showPanel() {
        if (this.focus) {
            this.alignPanel();

            if (this.panel && this.panel.element && !this.panel.element.offsetParent) {
                this.panel.element.style.zIndex = String(DomHandler.generateZIndex());
                this.panel.element.style.display = "block";

                setTimeout(() => {
                    if (this.panel && this.panel.element) {
                        DomHandler.addClass(this.panel.element, 'p-input-overlay-visible');
                        DomHandler.removeClass(this.panel.element, 'p-input-overlay-hidden');
                    }
                }, 1);

                this.alignPanel();
                this.bindDocumentClickListener();
            }
        }
    }

    alignPanel() {
        if (this.panel.element.offsetParent) {
            let target = this.props.multiple ? this.multiContainer : this.inputEl;

            if (this.props.appendTo) {
                this.panel.element.style.minWidth = DomHandler.getWidth(target) + 'px';
                DomHandler.absolutePosition(this.panel.element, target);
            }
            else {
                DomHandler.relativePosition(this.panel.element, target);
            }
        }
    }

    hidePanel() {
        DomHandler.addClass(this.panel.element, 'p-input-overlay-hidden');
        DomHandler.removeClass(this.panel.element, 'p-input-overlay-visible');

        setTimeout(() => {
            if (this.panel && this.panel.element) {
                this.panel.element.style.display = 'none';
                DomHandler.removeClass(this.panel.element, 'p-input-overlay-hidden');
            }
        }, 150);

        this.unbindDocumentClickListener();
    }

    onDropdownClick(event) {
        this.inputEl.focus();
        if (this.documentClickListener) {
            this.dropdownClick = true;
        }

        if (this.props.dropdownMode === 'blank')
            this.search(event, '', 'dropdown');
        else if (this.props.dropdownMode === 'current')
            this.search(event, this.inputEl.value, 'dropdown');

        if (this.props.onDropdownClick) {
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

        if (this.props.onUnselect) {
            this.props.onUnselect({
                originalEvent: event,
                value: removedValue
            })
        }
    }

    onInputKeyDown(event) {
        if (this.isPanelVisible()) {
            let highlightItem = DomHandler.findSingle(this.panel.element, 'li.p-highlight');

            switch(event.which) {
                //down
                case 40:
                    if (highlightItem) {
                        let nextElement = highlightItem.nextElementSibling;
                        if (nextElement) {
                            DomHandler.addClass(nextElement, 'p-highlight');
                            DomHandler.removeClass(highlightItem, 'p-highlight');
                            DomHandler.scrollInView(this.panel.element, nextElement);
                        }
                    }
                    else {
                        DomHandler.addClass(this.panel.element.firstChild.firstChild, 'p-highlight');
                    }

                    event.preventDefault();
                break;

                //up
                case 38:
                    if (highlightItem) {
                        let previousElement = highlightItem.previousElementSibling;
                        if (previousElement) {
                            DomHandler.addClass(previousElement, 'p-highlight');
                            DomHandler.removeClass(highlightItem, 'p-highlight');
                            DomHandler.scrollInView(this.panel.element, previousElement);
                        }
                    }

                    event.preventDefault();
                break;

                //enter,tab
                case 13:
                    if (highlightItem) {
                        this.selectItem(event, this.props.suggestions[DomHandler.index(highlightItem)]);
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
                    if (highlightItem) {
                        this.selectItem(event, this.props.suggestions[DomHandler.index(highlightItem)]);
                    }

                    this.hidePanel();
                break;

                default:
                break;
            }
        }

        if (this.props.multiple) {
            switch(event.which) {
                //backspace
                case 8:
                    if (this.props.value && this.props.value.length && !this.inputEl.value) {
                        let removedValue = this.props.value[this.props.value.length - 1];
                        let newValue = this.props.value.slice(0, -1);

                        if (this.props.onUnselect) {
                            this.props.onUnselect({
                                originalEvent: event,
                                value: removedValue
                            })
                        }

                        this.updateModel(event, newValue);
                    }
                break;

                default:
                break;
            }
        }
    }

    onInputFocus(event) {
        this.focus = true;

        if (this.props.onFocus) {
            this.props.onFocus(event);
        }

        DomHandler.addClass(this.container, 'p-inputwrapper-focus');
    }

    onInputBlur(event) {
        this.focus = false;

        if (this.props.onBlur) {
            this.props.onBlur(event);
        }

        DomHandler.removeClass(this.container, 'p-inputwrapper-focus');
    }

    onMultiContainerClick(event) {
        this.inputEl.focus();
        if (this.documentClickListener) {
            this.inputClick = true;
        }

        if (this.props.onClick) {
            this.props.onClick(event);
        }
    }

    onMultiInputFocus(event) {
        this.onInputFocus(event);
        DomHandler.addClass(this.multiContainer, 'p-focus');
    }

    onMultiInputBlur(event) {
        this.onInputBlur(event);
        DomHandler.removeClass(this.multiContainer, 'p-focus');
    }

    isSelected(val) {
        let selected = false;
        if (this.props.value && this.props.value.length) {
            for (let i = 0; i < this.props.value.length; i++) {
                if (ObjectUtils.equals(this.props.value[i], val)) {
                    selected = true;
                    break;
                }
            }
        }

        return selected;
    }

    findOptionIndex(option) {
        let index = -1;
        if (this.suggestions) {
            for (let i = 0; i < this.suggestions.length; i++) {
                if (ObjectUtils.equals(option, this.suggestions[i])) {
                    index = i;
                    break;
                }
            }
        }

        return index;
    }

    componentDidMount() {
        if (this.props.autoFocus && this.inputEl) {
            this.inputEl.focus();
        }

        if (this.props.tooltip) {
            this.renderTooltip();
        }
    }

    componentWillUnmount() {
        this.unbindDocumentClickListener();

        if (this.tooltip) {
            this.tooltip.destroy();
            this.tooltip = null;
        }
    }

    componentDidUpdate(prevProps) {
        if (this.searching) {
            if (this.props.suggestions && this.props.suggestions.length)
                this.showPanel();
            else
                this.hidePanel();

            this.hideLoader();
        }

        this.searching = false;

        if (this.inputEl && !this.props.multiple) {
            this.updateInputField(this.props.value);
        }

        if (prevProps.tooltip !== this.props.tooltip) {
            if (this.tooltip)
                this.tooltip.updateContent(this.props.tooltip);
            else
                this.renderTooltip();
        }
    }

    showLoader() {
        this.loader.style.visibility = 'visible';
    }

    hideLoader() {
        this.loader.style.visibility = 'hidden';
    }

    renderTooltip() {
        this.tooltip = new Tooltip({
            target: this.container,
            content: this.props.tooltip,
            options: this.props.tooltipOptions
        });
    }

    renderSimpleAutoComplete() {
        const inputClassName = classNames('p-autocomplete-input', this.props.inputClassName, {
            'p-autocomplete-dd-input': this.props.dropdown
        });

        return (
            <InputText ref={(el) => this.inputEl = ReactDOM.findDOMNode(el)} id={this.props.inputId} type={this.props.type} name={this.props.name}
                        defaultValue={this.formatValue(this.props.value)} role="searchbox" aria-autocomplete="list" aria-controls={this.listId}
                        aria-labelledby={this.props.ariaLabelledBy} className={inputClassName} style={this.props.inputStyle} autoComplete="off"
                        readOnly={this.props.readonly} disabled={this.props.disabled} placeholder={this.props.placeholder} size={this.props.size}
                        maxLength={this.props.maxlength} tabIndex={this.props.tabindex}
                        onBlur={this.onInputBlur} onFocus={this.onInputFocus} onChange={this.onInputChange}
                        onMouseDown={this.props.onMouseDown} onKeyUp={this.props.onKeyUp} onKeyDown={this.onInputKeyDown}
                        onKeyPress={this.props.onKeyPress} onContextMenu={this.props.onContextMenu}
                        onClick={this.onInputClick} onDoubleClick={this.props.onDblClick} />
        );
    }

    renderChips() {
        if (this.props.value && this.props.value.length) {
            return this.props.value.map((val, index) => {
                return (
                    <li key={index + 'multi-item'} className="p-autocomplete-token p-highlight">
                        <span className="p-autocomplete-token-icon pi pi-fw pi-times" onClick={(e) => this.removeItem(e, index)}></span>
                        <span className="p-autocomplete-token-label">{this.formatValue(val)}</span>
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
            <li className="p-autocomplete-input-token">
                <input ref={(el) => this.inputEl = el} type={this.props.type} disabled={this.props.disabled} placeholder={this.props.placeholder}
                       role="searchbox" aria-autocomplete="list" aria-controls={this.listId} aria-labelledby={this.props.ariaLabelledBy}
                       autoComplete="off" tabIndex={this.props.tabindex} onChange={this.onInputChange} id={this.props.inputId} name={this.props.name}
                       style={this.props.inputStyle} className={this.props.inputClassName} maxLength={this.props.maxlength}
                       onKeyUp={this.props.onKeyUp} onKeyDown={this.onInputKeyDown} onKeyPress={this.props.onKeyPress}
                       onFocus={this.onMultiInputFocus} onBlur={this.onMultiInputBlur} />
            </li>
        );
    }

    renderMultipleAutoComplete() {
        let multiContainerClass = classNames("p-autocomplete-multiple-container p-component p-inputtext", {
            'p-disabled': this.props.disabled
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
            <Button type="button" icon="pi pi-fw pi-chevron-down" className="p-autocomplete-dropdown" disabled={this.props.disabled} onClick={this.onDropdownClick} />
        );
    }

    renderLoader() {
        return (
            <i ref={(el) => this.loader = el} className="p-autocomplete-loader pi pi-spinner pi-spin" style={{visibility: 'hidden'}}></i>
        );
    }

    bindDocumentClickListener() {
        if (!this.documentClickListener) {
            this.documentClickListener = (event) => {
                if (event.which === 3) {
                    return;
                }

                if (!this.inputClick && !this.dropdownClick) {
                    this.hidePanel();
                }

                this.inputClick = false;
                this.dropdownClick = false;
            };

            document.addEventListener('click', this.documentClickListener);
        }
    }

    unbindDocumentClickListener() {
        if (this.documentClickListener) {
            document.removeEventListener('click', this.documentClickListener);
            this.documentClickListener = null;
        }
    }

    isPanelVisible() {
        return this.panel.element.offsetParent != null;
    }

    render() {
        let input, dropdown;
        let className = classNames('p-autocomplete p-component', this.props.className, {
            'p-autocomplete-dd': this.props.dropdown,
            'p-autocomplete-multiple': this.props.multiple,
            'p-inputwrapper-filled': this.props.value,
            'p-inputwrapper-focus': this.focus
        });
        let loader = this.renderLoader();

        if (this.props.multiple)
            input = this.renderMultipleAutoComplete();
        else
            input = this.renderSimpleAutoComplete();

        if (this.props.dropdown) {
            dropdown = this.renderDropdown();
        }

        return (
            <span ref={(el) => this.container = el} id={this.props.id} style={this.props.style} className={className} aria-haspopup="listbox"
                  aria-expanded={this.panel && this.isPanelVisible()} aria-owns={this.listId}>
                {input}
                {loader}
                {dropdown}
                <AutoCompletePanel ref={(el) => this.panel = el} suggestions={this.props.suggestions} field={this.props.field} listId={this.listId}
                            appendTo={this.props.appendTo} itemTemplate={this.props.itemTemplate} onItemClick={this.selectItem} ariaSelected={this.ariaSelected}/>
            </span>
        );
    }
}
