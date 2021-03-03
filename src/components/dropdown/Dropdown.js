import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DomHandler from '../utils/DomHandler';
import ObjectUtils from '../utils/ObjectUtils';
import FilterUtils from '../utils/FilterUtils';
import { classNames } from '../utils/ClassNames';
import { DropdownPanel } from './DropdownPanel';
import { DropdownItem } from './DropdownItem';
import { tip } from '../tooltip/Tooltip';
import UniqueComponentId from '../utils/UniqueComponentId';
import ConnectedOverlayScrollHandler from '../utils/ConnectedOverlayScrollHandler';
import OverlayEventBus from '../overlayeventbus/OverlayEventBus';

export class Dropdown extends Component {

    static defaultProps = {
        id: null,
        name: null,
        value: null,
        options: null,
        optionLabel: null,
        optionValue: null,
        valueTemplate: null,
        itemTemplate: null,
        style: null,
        className: null,
        scrollHeight: '200px',
        filter: false,
        filterBy: null,
        filterMatchMode: 'contains',
        filterPlaceholder: null,
        filterLocale: undefined,
        emptyFilterMessage: 'No results found',
        editable: false,
        placeholder: null,
        required: false,
        disabled: false,
        appendTo: null,
        tabIndex: null,
        autoFocus: false,
        filterInputAutoFocus: true,
        resetFilterOnHide: false,
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
        onFocus: null,
        onBlur: null,
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
        valueTemplate: PropTypes.any,
        itemTemplate: PropTypes.any,
        style: PropTypes.object,
        className: PropTypes.string,
        scrollHeight: PropTypes.string,
        filter: PropTypes.bool,
        filterBy: PropTypes.string,
        filterMatchMode: PropTypes.string,
        filterPlaceholder: PropTypes.string,
        filterLocale: PropTypes.string,
        emptyFilterMessage: PropTypes.any,
        editable: PropTypes.bool,
        placeholder: PropTypes.string,
        required: PropTypes.bool,
        disabled: PropTypes.bool,
        appendTo: PropTypes.any,
        tabIndex: PropTypes.number,
        autoFocus: PropTypes.bool,
        filterInputAutoFocus: PropTypes.bool,
        resetFilterOnHide: PropTypes.bool,
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
        onFocus: PropTypes.func,
        onBlur: PropTypes.func,
        onMouseDown: PropTypes.func,
        onContextMenu: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {
            filter: '',
            focused: false,
            overlayVisible: false
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
        this.onPanelClick = this.onPanelClick.bind(this);
        this.onOverlayEnter = this.onOverlayEnter.bind(this);
        this.onOverlayEntered = this.onOverlayEntered.bind(this);
        this.onOverlayExit = this.onOverlayExit.bind(this);
        this.onOverlayExited = this.onOverlayExited.bind(this);
        this.clear = this.clear.bind(this);

        this.id = this.props.id || UniqueComponentId();
        this.overlayRef = React.createRef();
    }

    onClick(event) {
        if (this.props.disabled) {
            return;
        }

        if (!this.isClearClicked(event)) {
            this.focusInput.focus();

            if (this.state.overlayVisible) {
                this.hideOverlay();
            }
            else {
                this.showOverlay();
            }
        }
    }

    onInputFocus(event) {
        event.persist();
        this.setState({ focused: true }, () => {
            if (this.props.onFocus) {
                this.props.onFocus(event);
            }
        });
    }

    onInputBlur(event) {
        event.persist();
        this.setState({ focused: false }, () => {
            if (this.props.onBlur) {
                this.props.onBlur(event);
            }
        });
    }

    onPanelClick(event) {
        OverlayEventBus.emit('overlay-click', {
            originalEvent: event,
            target: this.container
        });
    }

    onInputKeyDown(event) {
        switch (event.which) {
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
                if (!this.state.overlayVisible) {
                    this.showOverlay();
                    event.preventDefault();
                }
                break;

            //enter
            case 13:
                this.hideOverlay();
                event.preventDefault();
                break;

            //escape and tab
            case 27:
            case 9:
                this.hideOverlay();
                break;

            default:
                this.search(event);
                break;
        }
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

            //enter and escape
            case 13:
            case 27:
                this.hideOverlay();
                event.preventDefault();
                break;

            default:
                break;
        }
    }

    onUpKey(event) {
        if (this.props.options) {
            let visibleOptions = this.getVisibleOptions();
            let selectedItemIndex = this.findOptionIndex(this.props.value, visibleOptions);
            let prevItem = this.findPrevVisibleItem(selectedItemIndex, visibleOptions);

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
            if (!this.state.overlayVisible && event.altKey) {
                this.showOverlay();
            }
            else {
                let visibleOptions = this.getVisibleOptions();
                let selectedItemIndex = this.findOptionIndex(this.props.value, visibleOptions);
                let nextItem = this.findNextVisibleItem(selectedItemIndex, visibleOptions);

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

        let searchIndex = this.props.value ? this.findOptionIndex(this.props.value, this.props.options) : -1;
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
            let label = this.getOptionLabel(opt).toString().toLocaleLowerCase(this.props.filterLocale)
            if (label.startsWith(this.searchValue.toLocaleLowerCase(this.props.filterLocale))) {
                return opt;
            }
        }

        return null;
    }

    filter(options) {
        let filterValue = this.state.filter.trim().toLocaleLowerCase(this.props.filterLocale);
        let searchFields = this.props.filterBy ? this.props.filterBy.split(',') : [this.props.optionLabel || 'label'];
        let items = FilterUtils.filter(options, searchFields, filterValue, this.props.filterMatchMode, this.props.filterLocale);

        return (items && items.length) ? items : null;
    }

    findNextVisibleItem(index, options) {
        let i = index + 1;
        if (i === options.length) {
            return null;
        }

        let option = options[i];
        if (option.disabled)
            return this.findNextVisibleItem(i);
        else
            return option;
    }

    findPrevVisibleItem(index, options) {
        let i = index - 1;
        if (i < 0) {
            return null;
        }

        let option = options[i];
        if (option.disabled)
            return this.findPrevVisibleItem(i);
        else
            return option;
    }

    onEditableInputClick(event) {
        this.bindDocumentClickListener();
        event.stopPropagation();
    }

    onEditableInputChange(event) {
        this.props.onChange({
            originalEvent: event.originalEvent,
            value: event.target.value,
            stopPropagation: () => { },
            preventDefault: () => { },
            target: {
                name: this.props.name,
                id: this.id,
                value: event.target.value,
            }
        });
    }

    onEditableInputFocus(event) {
        event.persist();
        this.setState({ focused: true }, () => {
            this.hideOverlay();

            if (this.props.onFocus) {
                this.props.onFocus(event);
            }
        });
    }

    onOptionClick(event) {
        const option = event.option;

        if (!option.disabled) {
            this.selectItem(event);
            this.focusInput.focus();
        }

        this.hideOverlay();
    }

    onFilterInputChange(event) {
        this.setState({ filter: event.target.value });
    }

    resetFilter() {
        this.setState({ filter: '' });
    }

    clear(event) {
        this.props.onChange({
            originalEvent: event,
            value: undefined,
            stopPropagation: () => { },
            preventDefault: () => { },
            target: {
                name: this.props.name,
                id: this.id,
                value: undefined
            }
        });

        this.updateEditableLabel();
    }

    selectItem(event) {
        let currentSelectedOption = this.findOption(this.props.value);

        if (currentSelectedOption !== event.option) {
            this.updateEditableLabel(event.option);
            const optionValue = this.getOptionValue(event.option);

            this.props.onChange({
                originalEvent: event.originalEvent,
                value: optionValue,
                stopPropagation: () => { },
                preventDefault: () => { },
                target: {
                    name: this.props.name,
                    id: this.id,
                    value: optionValue
                }
            });
        }
    }

    findOptionIndex(value, options) {
        let selectedOptionIndex = -1;
        if (options) {
            for (let i = 0; i < options.length; i++) {
                let optionValue = this.getOptionValue(options[i]);
                if ((value === null && optionValue == null) || ObjectUtils.equals(value, optionValue, this.props.dataKey)) {
                    selectedOptionIndex = i;
                    break;
                }
            }
        }

        return selectedOptionIndex;
    }

    findOption(value) {
        let index = this.findOptionIndex(value, this.props.options);
        return (index !== -1) ? this.props.options[index] : null;
    }

    showOverlay() {
        this.setState({ overlayVisible: true });
    }

    hideOverlay() {
        this.setState({ overlayVisible: false });
    }

    onOverlayEnter() {
        this.overlayRef.current.style.zIndex = String(DomHandler.generateZIndex());
        this.alignPanel();
    }

    onOverlayEntered() {
        this.scrollInView();
        this.bindDocumentClickListener();
        this.bindScrollListener();
        this.bindResizeListener();

        if (this.props.filter && this.props.filterInputAutoFocus) {
            this.filterInput.focus();
        }
    }

    onOverlayExit() {
        this.unbindDocumentClickListener();
        this.unbindScrollListener();
        this.unbindResizeListener();
    }

    onOverlayExited() {
        if (this.props.filter && this.props.resetFilterOnHide) {
            this.resetFilter();
        }
    }

    alignPanel() {
        const container = this.input.parentElement;
        if (this.props.appendTo) {
            this.overlayRef.current.style.minWidth = DomHandler.getWidth(container) + 'px';
            DomHandler.absolutePosition(this.overlayRef.current, container);
        }
        else {
            DomHandler.relativePosition(this.overlayRef.current, container);
        }
    }

    scrollInView() {
        let highlightItem = DomHandler.findSingle(this.overlayRef.current, 'li.p-highlight');
        if (highlightItem) {
            let itemsWrapper = DomHandler.findSingle(this.overlayRef.current, '.p-dropdown-items-wrapper');
            DomHandler.scrollInView(itemsWrapper, highlightItem);
        }
    }

    bindDocumentClickListener() {
        if (!this.documentClickListener) {
            this.documentClickListener = (event) => {
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
        return this.container && !(this.container.isSameNode(event.target) || this.isClearClicked(event) || this.container.contains(event.target)
            || (this.overlayRef && this.overlayRef.current.contains(event.target)));
    }

    isClearClicked(event) {
        return DomHandler.hasClass(event.target, 'p-dropdown-clear-icon')
    }

    updateEditableLabel(option) {
        if (this.input) {
            this.input.value = (option ? this.getOptionLabel(option) : this.props.value || '');
        }
    }

    hasFilter() {
        return this.state.filter && this.state.filter.trim().length > 0;
    }

    getOptionLabel(option) {
        return this.props.optionLabel ? ObjectUtils.resolveFieldData(option, this.props.optionLabel) : (option['label'] !== undefined ? option['label'] : option);
    }

    getOptionValue(option) {
        return this.props.optionValue ? ObjectUtils.resolveFieldData(option, this.props.optionValue) : (option['value'] !== undefined ? option['value'] : option);
    }

    getOptionKey(option, index) {
        return this.props.dataKey ? ObjectUtils.resolveFieldData(option, this.props.dataKey) : `pr_id__${this.getOptionLabel(option)}-${index}`;
    }

    checkValidity() {
        return this.nativeSelect.checkValidity();
    }

    getVisibleOptions() {
        if (this.props.options && this.hasFilter()) {
            return this.filter(this.props.options);
        }

        return this.props.options;
    }

    updateInputField() {
        if (this.props.editable && this.input) {
            let selectedOption = this.findOption(this.props.value);
            const label = selectedOption ? this.getOptionLabel(selectedOption) : null;
            const value = label || this.props.value || '';
            this.input.value = value;
        }
    }

    componentDidMount() {
        if (this.props.autoFocus && this.focusInput) {
            this.focusInput.focus();
        }

        if (this.props.tooltip) {
            this.renderTooltip();
        }

        this.updateInputField();
        this.nativeSelect.selectedIndex = 1;
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

        if (this.hideTimeout) {
            clearTimeout(this.hideTimeout);
            this.hideTimeout = null;
        }
    }

    componentDidUpdate(prevProps) {
        if (this.state.overlayVisible) {
            if (this.props.filter) {
                this.alignPanel();
            }

            if (prevProps.value !== this.props.value) {
                this.scrollInView();
            }
        }

        if (prevProps.tooltip !== this.props.tooltip || prevProps.tooltipOptions !== this.props.tooltipOptions) {
            if (this.tooltip)
                this.tooltip.update({ content: this.props.tooltip, ...(this.props.tooltipOptions || {}) });
            else
                this.renderTooltip();
        }

        if (this.state.filter && (!this.props.options || this.props.options.length === 0)) {
            this.setState({ filter: '' });
        }

        this.updateInputField();
        this.nativeSelect.selectedIndex = 1;
    }

    renderHiddenSelect(selectedOption) {
        let placeHolderOption = <option value="">{this.props.placeholder}</option>;
        let option = selectedOption ? <option value={selectedOption.value}>{this.getOptionLabel(selectedOption)}</option> : null;

        return (
            <div className="p-hidden-accessible p-dropdown-hidden-select">
                <select ref={(el) => this.nativeSelect = el} required={this.props.required} name={this.props.name} tabIndex={-1} aria-hidden="true">
                    {placeHolderOption}
                    {option}
                </select>
            </div>
        );
    }

    renderTooltip() {
        this.tooltip = tip({
            target: this.container,
            content: this.props.tooltip,
            options: this.props.tooltipOptions
        });
    }

    renderKeyboardHelper() {
        return <div className="p-hidden-accessible">
            <input ref={(el) => this.focusInput = el} id={this.props.inputId} type="text" readOnly aria-haspopup="listbox"
                onFocus={this.onInputFocus} onBlur={this.onInputBlur} onKeyDown={this.onInputKeyDown}
                disabled={this.props.disabled} tabIndex={this.props.tabIndex} aria-label={this.props.ariaLabel} aria-labelledby={this.props.ariaLabelledBy} />
        </div>;
    }

    renderLabel(selectedOption) {
        const label = selectedOption ? this.getOptionLabel(selectedOption) : null;

        if (this.props.editable) {
            let value = label || this.props.value || '';

            return <input ref={(el) => this.input = el} type="text" defaultValue={value} className="p-dropdown-label p-inputtext" disabled={this.props.disabled}
                placeholder={this.props.placeholder} maxLength={this.props.maxLength} onClick={this.onEditableInputClick} onInput={this.onEditableInputChange}
                onFocus={this.onEditableInputFocus} onBlur={this.onInputBlur} aria-label={this.props.ariaLabel} aria-labelledby={this.props.ariaLabelledBy}
                aria-haspopup="listbox" />;
        }
        else {
            let className = classNames('p-dropdown-label p-inputtext', {
                'p-placeholder': label === null && this.props.placeholder,
                'p-dropdown-label-empty': label === null && !this.props.placeholder
            });

            let content = this.props.valueTemplate ? ObjectUtils.getJSXElement(this.props.valueTemplate, selectedOption, this.props) : (label || this.props.placeholder || 'empty');

            return <span ref={(el) => this.input = el} className={className}>{content}</span>;
        }
    }

    renderClearIcon() {
        if (this.props.value != null && this.props.showClear && !this.props.disabled) {
            return (
                <i className="p-dropdown-clear-icon pi pi-times" onClick={this.clear}></i>
            );
        }

        return null;
    }

    renderDropdownIcon() {
        return (
            <div ref={(el) => this.trigger = el} className="p-dropdown-trigger" role="button" aria-haspopup="listbox" aria-expanded={this.state.overlayVisible}>
                <span className="p-dropdown-trigger-icon pi pi-chevron-down p-clickable"></span>
            </div>
        );
    }

    renderItems(selectedOption) {
        let visibleOptions = this.getVisibleOptions();

        if (visibleOptions && visibleOptions.length) {
            return visibleOptions.map((option, index) => {
                let optionLabel = this.getOptionLabel(option);
                let optionKey = this.getOptionKey(option, index);

                return (
                    <DropdownItem key={optionKey} label={optionLabel} option={option} template={this.props.itemTemplate} selected={selectedOption === option} disabled={option.disabled} onClick={this.onOptionClick} />
                );
            });
        }

        if (this.hasFilter()) {
            const emptyFilterMessage = ObjectUtils.getJSXElement(this.props.emptyFilterMessage, this.props);
            return (
                <li className="p-dropdown-empty-message">
                    {emptyFilterMessage}
                </li>
            );
        }

        return null;
    }

    renderFilter() {
        if (this.props.filter) {
            return (
                <div className="p-dropdown-header">
                    <div className="p-dropdown-filter-container">
                        <input ref={(el) => this.filterInput = el} type="text" autoComplete="off" className="p-dropdown-filter p-inputtext p-component" placeholder={this.props.filterPlaceholder}
                            onKeyDown={this.onFilterInputKeyDown} onChange={this.onFilterInputChange} value={this.state.filter} />
                        <span className="p-dropdown-filter-icon pi pi-search"></span>
                    </div>
                </div>
            );
        }

        return null;
    }

    render() {
        let className = classNames('p-dropdown p-component p-inputwrapper', this.props.className, {
            'p-disabled': this.props.disabled,
            'p-focus': this.state.focused,
            'p-dropdown-clearable': this.props.showClear && !this.props.disabled,
            'p-inputwrapper-filled': this.props.value,
            'p-inputwrapper-focus': this.state.focused || this.state.overlayVisible
        });
        let selectedOption = this.findOption(this.props.value);

        let hiddenSelect = this.renderHiddenSelect(selectedOption);
        let keyboardHelper = this.renderKeyboardHelper();
        let labelElement = this.renderLabel(selectedOption);
        let dropdownIcon = this.renderDropdownIcon();
        let items = this.renderItems(selectedOption);
        let filterElement = this.renderFilter();
        let clearIcon = this.renderClearIcon();

        return (
            <div id={this.id} ref={(el) => this.container = el} className={className} style={this.props.style} onClick={this.onClick}
                onMouseDown={this.props.onMouseDown} onContextMenu={this.props.onContextMenu}>
                {keyboardHelper}
                {hiddenSelect}
                {labelElement}
                {clearIcon}
                {dropdownIcon}
                <DropdownPanel ref={this.overlayRef} appendTo={this.props.appendTo} panelStyle={this.props.panelStyle} panelClassName={this.props.panelClassName}
                    scrollHeight={this.props.scrollHeight} filter={filterElement} onClick={this.onPanelClick}
                    in={this.state.overlayVisible} onEnter={this.onOverlayEnter} onEntered={this.onOverlayEntered} onExit={this.onOverlayExit} onExited={this.onOverlayExited}>
                    {items}
                </DropdownPanel>
            </div>
        );
    }
}
