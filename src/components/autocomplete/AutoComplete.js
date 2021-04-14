import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { InputText } from '../inputtext/InputText';
import { Button } from '../button/Button';
import DomHandler from '../utils/DomHandler';
import ObjectUtils from '../utils/ObjectUtils';
import { AutoCompletePanel } from './AutoCompletePanel';
import { classNames } from '../utils/ClassNames';
import { tip } from '../tooltip/Tooltip';
import UniqueComponentId from '../utils/UniqueComponentId';
import ConnectedOverlayScrollHandler from '../utils/ConnectedOverlayScrollHandler';
import OverlayEventBus from '../overlayeventbus/OverlayEventBus';
import { ZIndexUtils } from '../utils/ZIndexUtils';

export class AutoComplete extends Component {

    static defaultProps = {
        id: null,
        inputRef: null,
        value: null,
        name: null,
        type: 'text',
        suggestions: null,
        field: null,
        optionGroupLabel: null,
        optionGroupChildren: null,
        optionGroupTemplate: null,
        forceSelection: false,
        autoHighlight: false,
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
        panelClassName: null,
        panelStyle: null,
        placeholder: null,
        readOnly: false,
        disabled: false,
        maxlength: null,
        size: null,
        appendTo: null,
        tabIndex: null,
        autoFocus: false,
        tooltip: null,
        tooltipOptions: null,
        ariaLabelledBy: null,
        completeMethod: null,
        itemTemplate: null,
        selectedItemTemplate: null,
        transitionOptions: null,
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
        onClear: null,
        onShow: null,
        onHide: null
    }

    static propTypes = {
        id: PropTypes.string,
        inputRef: PropTypes.any,
        value: PropTypes.any,
        name: PropTypes.string,
        type: PropTypes.string,
        suggestions: PropTypes.array,
        field: PropTypes.string,
        optionGroupLabel: PropTypes.string,
        optionGroupChildren: PropTypes.string,
        optionGroupTemplate: PropTypes.any,
        forceSelection: PropTypes.bool,
        autoHighlight: PropTypes.bool,
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
        panelClassName: PropTypes.string,
        panelStyle: PropTypes.object,
        placeholder: PropTypes.string,
        readOnly: PropTypes.bool,
        disabled: PropTypes.bool,
        maxlength: PropTypes.number,
        size: PropTypes.number,
        appendTo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        tabIndex: PropTypes.number,
        autoFocus: PropTypes.bool,
        tooltip: PropTypes.string,
        tooltipOptions: PropTypes.object,
        ariaLabelledBy: PropTypes.string,
        completeMethod: PropTypes.func,
        itemTemplate: PropTypes.any,
        selectedItemTemplate: PropTypes.any,
        transitionOptions: PropTypes.object,
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
        onClear: PropTypes.func,
        onShow: PropTypes.func,
        onHide: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            searching: false,
            focused: false,
            overlayVisible: false
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onInputFocus = this.onInputFocus.bind(this);
        this.onInputBlur = this.onInputBlur.bind(this);
        this.onInputKeyDown = this.onInputKeyDown.bind(this);
        this.onDropdownClick = this.onDropdownClick.bind(this);
        this.onMultiContainerClick = this.onMultiContainerClick.bind(this);
        this.onMultiInputFocus = this.onMultiInputFocus.bind(this);
        this.onMultiInputBlur = this.onMultiInputBlur.bind(this);
        this.selectItem = this.selectItem.bind(this);
        this.getOptionGroupLabel = this.getOptionGroupLabel.bind(this);
        this.getOptionGroupChildren = this.getOptionGroupChildren.bind(this);
        this.onOverlayEnter = this.onOverlayEnter.bind(this);
        this.onOverlayEntering = this.onOverlayEntering.bind(this);
        this.onOverlayEntered = this.onOverlayEntered.bind(this);
        this.onOverlayExit = this.onOverlayExit.bind(this);
        this.onOverlayExited = this.onOverlayExited.bind(this);
        this.onPanelClick = this.onPanelClick.bind(this);

        this.overlayRef = createRef();
        this.inputRef = createRef(this.props.inputRef);
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
            this.hideOverlay();
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
                this.hideOverlay();
            }
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
            this.setState({ searching: true });
            this.props.completeMethod({
                originalEvent: event,
                query: query
            });
        }
    }

    selectItem(event, option, preventInputFocus) {
        if (this.props.multiple) {
            this.inputRef.current.value = '';
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

        if (!preventInputFocus) {
            this.inputRef.current.focus();
            this.hideOverlay();
        }
    }

    updateModel(event, value) {
        if (this.props.onChange) {
            this.props.onChange({
                originalEvent: event,
                value: value,
                stopPropagation: () => { },
                preventDefault: () => { },
                target: {
                    name: this.props.name,
                    id: this.state.id,
                    value: value
                }
            });
        }

        this.ariaSelected = value;
    }

    formatValue(value) {
        if (value) {
            if (this.props.selectedItemTemplate && (this.props.multiple ? this.isSelected(value) : this.findOptionIndex(value) > -1)) {
                const resolvedFieldData = ObjectUtils.getJSXElement(this.props.selectedItemTemplate, value);
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
        this.inputRef.current.value = formattedValue;
    }

    showOverlay() {
        this.setState({ overlayVisible: true });
    }

    hideOverlay() {
        this.setState({
            overlayVisible: false,
            searching: false
        });
    }

    onOverlayEnter() {
        ZIndexUtils.set('overlay', this.overlayRef.current);
        this.alignOverlay();
    }

    onOverlayEntering() {
        if (this.props.autoHighlight && this.props.suggestions && this.props.suggestions.length) {
            DomHandler.addClass(this.overlayRef.current.firstChild.firstChild, 'p-highlight');
        }
    }

    onOverlayEntered() {
        this.bindDocumentClickListener();
        this.bindScrollListener();
        this.bindResizeListener();

        this.props.onShow && this.props.onShow();
    }

    onOverlayExit() {
        this.unbindDocumentClickListener();
        this.unbindScrollListener();
        this.unbindResizeListener();
    }

    onOverlayExited() {
        ZIndexUtils.clear(this.overlayRef.current);

        this.props.onHide && this.props.onHide();
    }

    alignOverlay() {
        let target = this.props.multiple ? this.multiContainer : this.inputRef.current;

        if (this.props.appendTo === 'self') {
            DomHandler.relativePosition(this.overlayRef.current, target);
        }
        else {
            this.overlayRef.current.style.minWidth = DomHandler.getOuterWidth(target) + 'px';
            DomHandler.absolutePosition(this.overlayRef.current, target);
        }
    }

    onPanelClick(event) {
        OverlayEventBus.emit('overlay-click', {
            originalEvent: event,
            target: this.container
        });
    }

    onDropdownClick(event) {
        this.inputRef.current.focus();

        if (this.props.dropdownMode === 'blank')
            this.search(event, '', 'dropdown');
        else if (this.props.dropdownMode === 'current')
            this.search(event, this.inputRef.current.value, 'dropdown');

        if (this.props.onDropdownClick) {
            this.props.onDropdownClick({
                originalEvent: event,
                query: this.inputRef.current.value
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
        if (this.state.overlayVisible) {
            let highlightItem = DomHandler.findSingle(this.overlayRef.current, 'li.p-highlight');

            switch (event.which) {
                //down
                case 40:
                    if (highlightItem) {
                        let nextElement = this.findNextItem(highlightItem);
                        if (nextElement) {
                            DomHandler.addClass(nextElement, 'p-highlight');
                            DomHandler.removeClass(highlightItem, 'p-highlight');
                            DomHandler.scrollInView(this.overlayRef.current, nextElement);
                        }
                    }
                    else {
                        highlightItem = this.overlayRef.current.firstChild.firstChild;
                        if (DomHandler.hasClass(highlightItem, 'p-autocomplete-item-group')) {
                            highlightItem = this.findNextItem(highlightItem);
                        }

                        if (highlightItem) {
                            DomHandler.addClass(highlightItem, 'p-highlight');
                        }
                    }

                    event.preventDefault();
                    break;

                //up
                case 38:
                    if (highlightItem) {
                        let previousElement = this.findPrevItem(highlightItem);
                        if (previousElement) {
                            DomHandler.addClass(previousElement, 'p-highlight');
                            DomHandler.removeClass(highlightItem, 'p-highlight');
                            DomHandler.scrollInView(this.overlayRef.current, previousElement);
                        }
                    }

                    event.preventDefault();
                    break;

                //enter
                case 13:
                    if (highlightItem) {
                        this.selectHighlightItem(event, highlightItem);
                        this.hideOverlay();
                    }

                    event.preventDefault();
                    break;

                //escape
                case 27:
                    this.hideOverlay();
                    event.preventDefault();
                    break;

                //tab
                case 9:
                    if (highlightItem) {
                        this.selectHighlightItem(event, highlightItem);
                    }

                    this.hideOverlay();
                    break;

                default:
                    break;
            }
        }

        if (this.props.multiple) {
            switch (event.which) {
                //backspace
                case 8:
                    if (this.props.value && this.props.value.length && !this.inputRef.current.value) {
                        let removedValue = this.props.value[this.props.value.length - 1];
                        let newValue = this.props.value.slice(0, -1);

                        this.updateModel(event, newValue);

                        if (this.props.onUnselect) {
                            this.props.onUnselect({
                                originalEvent: event,
                                value: removedValue
                            })
                        }
                    }
                    break;

                default:
                    break;
            }
        }
    }

    selectHighlightItem(event, item) {
        if (this.props.optionGroupLabel) {
            let optionGroup = this.props.suggestions[item.dataset.group];
            this.selectItem(event, this.getOptionGroupChildren(optionGroup)[item.dataset.index]);
        }
        else {
            this.selectItem(event, this.props.suggestions[DomHandler.index(item)]);
        }
    }

    findNextItem(item) {
        let nextItem = item.nextElementSibling;

        return nextItem ? (DomHandler.hasClass(nextItem, 'p-autocomplete-item-group') ? this.findNextItem(nextItem) : nextItem) : null;
    }

    findPrevItem(item) {
        let prevItem = item.previousElementSibling;

        return prevItem ? (DomHandler.hasClass(prevItem, 'p-autocomplete-item-group') ? this.findPrevItem(prevItem) : prevItem) : null;
    }

    onInputFocus(event) {
        event.persist();

        this.setState({ focused: true }, () => {
            if (this.props.onFocus) {
                this.props.onFocus(event);
            }
        });
    }

    forceItemSelection(event) {
        let valid = false;
        let inputValue = event.target.value.trim();

        if (this.props.suggestions)  {
            for (let item of this.props.suggestions) {
                let itemValue = this.props.field ? ObjectUtils.resolveFieldData(item, this.props.field) : item;
                if (itemValue && inputValue === itemValue.trim()) {
                    valid = true;
                    this.selectItem(event, item, true);
                    break;
                }
            }
        }

        if (!valid) {
            this.inputRef.current.value = '';
            this.updateModel(event, null);

            if (this.props.onClear) {
                this.props.onClear(event);
            }
        }
    }

    onInputBlur(event) {
        event.persist();

        this.setState({ focused: false }, () => {
            if (this.props.forceSelection) {
                this.forceItemSelection(event);
            }

            if (this.props.onBlur) {
                this.props.onBlur(event);
            }
        });
    }

    onMultiContainerClick(event) {
        this.inputRef.current.focus();

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
        if (this.props.suggestions) {
            for (let i = 0; i < this.props.suggestions.length; i++) {
                if (ObjectUtils.equals(option, this.props.suggestions[i])) {
                    index = i;
                    break;
                }
            }
        }

        return index;
    }

    getOptionGroupLabel(optionGroup) {
        return this.props.optionGroupLabel ? ObjectUtils.resolveFieldData(optionGroup, this.props.optionGroupLabel) : optionGroup;
    }

    getOptionGroupChildren(optionGroup) {
        return ObjectUtils.resolveFieldData(optionGroup, this.props.optionGroupChildren);
    }

    bindDocumentClickListener() {
        if (!this.documentClickListener) {
            this.documentClickListener = (event) => {
                if (event.which === 3) { // right click
                    return;
                }

                if (this.state.overlayVisible && this.isOutsideClicked(event)) {
                    this.hideOverlay();
                }
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

    bindScrollListener() {
        if (!this.scrollHandler) {
            this.scrollHandler = new ConnectedOverlayScrollHandler(this.container, () => {
                if (this.state.overlayVisible) {
                    this.hideOverlay();
                }
            });
        }

        this.scrollHandler.bindScrollListener();
    }

    unbindScrollListener() {
        if (this.scrollHandler) {
            this.scrollHandler.unbindScrollListener();
        }
    }

    bindResizeListener() {
        if (!this.resizeListener) {
            this.resizeListener = () => {
                if (this.state.overlayVisible) {
                    this.hideOverlay();
                }
            };
            window.addEventListener('resize', this.resizeListener);
        }
    }

    unbindResizeListener() {
        if (this.resizeListener) {
            window.removeEventListener('resize', this.resizeListener);
            this.resizeListener = null;
        }
    }

    isOutsideClicked(event) {
        return this.container && (this.overlayRef && this.overlayRef.current && !this.overlayRef.current.contains(event.target)) && !this.isInputClicked(event);
    }

    isInputClicked(event) {
        if (this.props.multiple)
            return event.target === this.multiContainer || this.multiContainer.contains(event.target);
        else
            return event.target === this.inputRef.current;
    }

    updateInputRef() {
        let ref = this.props.inputRef;

        if (ref) {
            if (typeof ref === 'function') {
                ref(this.inputRef.current);
            }
            else {
                ref.current = this.inputRef.current;
            }
        }
    }

    componentDidMount() {
        this.updateInputRef();

        if (!this.state.id) {
            this.setState({ id: UniqueComponentId() });
        }

        if (this.props.autoFocus && this.inputRef && this.inputRef.current) {
            this.inputRef.current.focus();
        }

        if (this.props.tooltip) {
            this.renderTooltip();
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.suggestions !== this.props.suggestions && this.state.searching) {
            if (this.props.suggestions && this.props.suggestions.length) {
                this.showOverlay();
            }
            else {
                this.hideOverlay();
            }

            this.setState({ searching: false });
        }

        if (this.inputRef && this.inputRef.current && !this.props.multiple) {
            this.updateInputField(this.props.value);
        }

        if (prevProps.tooltip !== this.props.tooltip || prevProps.tooltipOptions !== this.props.tooltipOptions) {
            if (this.tooltip)
                this.tooltip.update({ content: this.props.tooltip, ...(this.props.tooltipOptions || {}) });
            else
                this.renderTooltip();
        }
    }

    componentWillUnmount() {
        this.unbindDocumentClickListener();
        this.unbindResizeListener();
        if (this.scrollHandler) {
            this.scrollHandler.destroy();
            this.scrollHandler = null;
        }

        if (this.tooltip) {
            this.tooltip.destroy();
            this.tooltip = null;
        }

        if (this.timeout) {
            clearTimeout(this.timeout);
        }

        ZIndexUtils.clear(this.overlayRef.current);
    }

    renderTooltip() {
        this.tooltip = tip({
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
            <InputText ref={this.inputRef} id={this.props.inputId} type={this.props.type} name={this.props.name}
                defaultValue={this.formatValue(this.props.value)} role="searchbox" aria-autocomplete="list" aria-controls={this.state.id + '_list'}
                aria-labelledby={this.props.ariaLabelledBy} className={inputClassName} style={this.props.inputStyle} autoComplete="off"
                readOnly={this.props.readOnly} disabled={this.props.disabled} placeholder={this.props.placeholder} size={this.props.size}
                maxLength={this.props.maxlength} tabIndex={this.props.tabIndex}
                onBlur={this.onInputBlur} onFocus={this.onInputFocus} onChange={this.onInputChange}
                onMouseDown={this.props.onMouseDown} onKeyUp={this.props.onKeyUp} onKeyDown={this.onInputKeyDown}
                onKeyPress={this.props.onKeyPress} onContextMenu={this.props.onContextMenu}
                onClick={this.props.onClick} onDoubleClick={this.props.onDblClick} />
        );
    }

    renderChips() {
        if (this.props.value && this.props.value.length) {
            return this.props.value.map((val, index) => {
                return (
                    <li key={index + 'multi-item'} className="p-autocomplete-token p-highlight">
                        <span className="p-autocomplete-token-label">{this.formatValue(val)}</span>
                        {!this.props.disabled && <span className="p-autocomplete-token-icon pi pi-times-circle" onClick={(e) => this.removeItem(e, index)}></span>}
                    </li>
                );
            });
        }

        return null;
    }

    renderMultiInput() {
        return (
            <li className="p-autocomplete-input-token">
                <input ref={this.inputRef} type={this.props.type} disabled={this.props.disabled} placeholder={this.props.placeholder}
                    role="searchbox" aria-autocomplete="list" aria-controls={this.state.id + '_list'} aria-labelledby={this.props.ariaLabelledBy}
                    autoComplete="off" tabIndex={this.props.tabIndex} onChange={this.onInputChange} id={this.props.inputId} name={this.props.name}
                    style={this.props.inputStyle} className={this.props.inputClassName} maxLength={this.props.maxlength}
                    onKeyUp={this.props.onKeyUp} onKeyDown={this.onInputKeyDown} onKeyPress={this.props.onKeyPress}
                    onFocus={this.onMultiInputFocus} onBlur={this.onMultiInputBlur} />
            </li>
        );
    }

    renderMultipleAutoComplete() {
        let multiContainerClass = classNames('p-autocomplete-multiple-container p-component p-inputtext', {
            'p-disabled': this.props.disabled
        });
        let tokens = this.renderChips();
        let input = this.renderMultiInput();

        return (
            <ul ref={(el) => { this.multiContainer = el }} className={multiContainerClass} onContextMenu={this.props.onContextMenu} onMouseDown={this.props.onMouseDown}
                onClick={this.onMultiContainerClick} onDoubleClick={this.props.onDblClick} >
                {tokens}
                {input}
            </ul>
        );
    }

    renderDropdown() {
        return <Button ref={(el) => this.dropdownButton = el} type="button" icon="pi pi-chevron-down" className="p-autocomplete-dropdown" disabled={this.props.disabled} onClick={this.onDropdownClick} />
    }

    renderLoader() {
        if (this.state.searching) {
            return <i className="p-autocomplete-loader pi pi-spinner pi-spin"></i>;
        }

        return null;
    }

    render() {
        let input, dropdown;
        let className = classNames('p-autocomplete p-component p-inputwrapper', this.props.className, {
            'p-autocomplete-dd': this.props.dropdown,
            'p-autocomplete-multiple': this.props.multiple,
            'p-inputwrapper-filled': this.props.value,
            'p-inputwrapper-focus': this.state.focused
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
            <span ref={(el) => this.container = el} id={this.state.id} style={this.props.style} className={className} aria-haspopup="listbox"
                aria-expanded={this.state.overlayVisible} aria-owns={this.state.id + '_list'}>
                {input}
                {loader}
                {dropdown}
                <AutoCompletePanel ref={this.overlayRef} suggestions={this.props.suggestions} field={this.props.field} listId={this.state.id + '_list'}
                    appendTo={this.props.appendTo} scrollHeight={this.props.scrollHeight} itemTemplate={this.props.itemTemplate} onItemClick={this.selectItem} ariaSelected={this.ariaSelected}
                    panelStyle={this.props.panelStyle} panelClassName={this.props.panelClassName} onClick={this.onPanelClick}
                    optionGroupLabel={this.props.optionGroupLabel} optionGroupChildren={this.props.optionGroupChildren} optionGroupTemplate={this.props.optionGroupTemplate}
                    getOptionGroupLabel={this.getOptionGroupLabel} getOptionGroupChildren={this.getOptionGroupChildren}
                    in={this.state.overlayVisible} onEnter={this.onOverlayEnter} onEntering={this.onOverlayEntering} onEntered={this.onOverlayEntered} onExit={this.onOverlayExit} onExited={this.onOverlayExited}
                    transitionOptions={this.props.transitionOptions} />
            </span>
        );
    }
}
