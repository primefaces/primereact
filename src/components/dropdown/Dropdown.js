import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import DomHandler from '../utils/DomHandler';
import ObjectUtils from '../utils/ObjectUtils';
import FilterUtils from '../utils/FilterUtils';
import { classNames } from '../utils/ClassNames';
import { DropdownPanel } from './DropdownPanel';
import { tip } from '../tooltip/Tooltip';
import ConnectedOverlayScrollHandler from '../utils/ConnectedOverlayScrollHandler';
import OverlayEventBus from '../overlayeventbus/OverlayEventBus';
import { ZIndexUtils } from '../utils/ZIndexUtils';
import PrimeReact from '../api/PrimeReact';

export class Dropdown extends Component {

    static defaultProps = {
        id: null,
        inputRef: null,
        name: null,
        value: null,
        options: null,
        optionLabel: null,
        optionValue: null,
        optionDisabled: null,
        optionGroupLabel: null,
        optionGroupChildren: null,
        optionGroupTemplate: null,
        valueTemplate: null,
        itemTemplate: null,
        style: null,
        className: null,
        virtualScrollerOptions: null,
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
        showFilterClear: false,
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
        transitionOptions: null,
        showOnFocus: false,
        onChange: null,
        onFocus: null,
        onBlur: null,
        onMouseDown: null,
        onContextMenu: null,
        onShow: null,
        onHide: null,
        onFilter: null
    };

    static propTypes = {
        id: PropTypes.string,
        inputRef: PropTypes.any,
        name: PropTypes.string,
        value: PropTypes.any,
        options: PropTypes.array,
        optionLabel: PropTypes.string,
        optionValue: PropTypes.string,
        optionDisabled: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
        optionGroupLabel: PropTypes.string,
        optionGroupChildren: PropTypes.string,
        optionGroupTemplate: PropTypes.any,
        valueTemplate: PropTypes.any,
        itemTemplate: PropTypes.any,
        style: PropTypes.object,
        className: PropTypes.string,
        virtualScrollerOptions: PropTypes.object,
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
        appendTo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        tabIndex: PropTypes.number,
        autoFocus: PropTypes.bool,
        filterInputAutoFocus: PropTypes.bool,
        resetFilterOnHide: PropTypes.bool,
        showFilterClear: PropTypes.bool,
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
        transitionOptions: PropTypes.object,
        showOnFocus: PropTypes.bool,
        onChange: PropTypes.func,
        onFocus: PropTypes.func,
        onBlur: PropTypes.func,
        onMouseDown: PropTypes.func,
        onContextMenu: PropTypes.func,
        onShow: PropTypes.func,
        onHide: PropTypes.func,
        onFilter: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {
            filter: '',
            focused: false,
            overlayVisible: false
        };

        this.onClick = this.onClick.bind(this);
        this.onFilterContainerClick = this.onFilterContainerClick.bind(this);
        this.onInputFocus = this.onInputFocus.bind(this);
        this.onInputBlur = this.onInputBlur.bind(this);
        this.onInputKeyDown = this.onInputKeyDown.bind(this);
        this.onEditableInputChange = this.onEditableInputChange.bind(this);
        this.onEditableInputFocus = this.onEditableInputFocus.bind(this);
        this.onOptionClick = this.onOptionClick.bind(this);
        this.onFilterInputChange = this.onFilterInputChange.bind(this);
        this.onFilterInputKeyDown = this.onFilterInputKeyDown.bind(this);
        this.onFilterClearIconClick = this.onFilterClearIconClick.bind(this);
        this.onPanelClick = this.onPanelClick.bind(this);
        this.onOverlayEnter = this.onOverlayEnter.bind(this);
        this.onOverlayEntered = this.onOverlayEntered.bind(this);
        this.onOverlayExit = this.onOverlayExit.bind(this);
        this.onOverlayExited = this.onOverlayExited.bind(this);
        this.resetFilter = this.resetFilter.bind(this);
        this.clear = this.clear.bind(this);
        this.hasFilter = this.hasFilter.bind(this);

        this.getOptionLabel = this.getOptionLabel.bind(this);
        this.getOptionRenderKey = this.getOptionRenderKey.bind(this);
        this.isOptionDisabled = this.isOptionDisabled.bind(this);
        this.getOptionGroupChildren = this.getOptionGroupChildren.bind(this);
        this.getOptionGroupLabel = this.getOptionGroupLabel.bind(this);
        this.getOptionGroupRenderKey = this.getOptionGroupRenderKey.bind(this);
        this.getSelectedOptionIndex = this.getSelectedOptionIndex.bind(this);
        this.isSelected = this.isSelected.bind(this);

        this.overlayRef = createRef();
        this.inputRef = createRef(this.props.inputRef);
    }

    onClick(event) {
        if (this.props.disabled) {
            return;
        }

        if (!this.isClearClicked(event) && event.target.tagName !== 'INPUT') {
            this.focusInput.focus();

            if (this.state.overlayVisible) {
                this.hideOverlay();
            }
            else {
                this.showOverlay();
            }
        }
    }

    onFilterContainerClick(event) {
        event.stopPropagation();
    }

    onInputFocus(event) {
        event.persist();

        if (this.props.showOnFocus && !this.state.overlayVisible) {
            this.showOverlay();
        }

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
                if (this.state.overlayVisible)
                    this.hideOverlay();
                else
                    this.showOverlay();

                event.preventDefault();
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
        let visibleOptions = this.getVisibleOptions();
        if (visibleOptions) {
            let prevOption = this.findPrevOption(this.getSelectedOptionIndex());
            if (prevOption) {
                this.selectItem({
                    originalEvent: event,
                    option: prevOption
                });
            }
        }

        event.preventDefault();
    }

    onDownKey(event) {
        let visibleOptions = this.getVisibleOptions();
        if (visibleOptions) {
            if (!this.state.overlayVisible && event.altKey) {
                this.showOverlay();
            }
            else {
                let nextOption = this.findNextOption(this.getSelectedOptionIndex());
                if (nextOption) {
                    this.selectItem({
                        originalEvent: event,
                        option: nextOption
                    });
                }
            }
        }

        event.preventDefault();
    }

    findNextOption(index) {
        let visibleOptions = this.getVisibleOptions();

        if (this.props.optionGroupLabel) {
            let groupIndex = index === -1 ? 0 : index.group;
            let optionIndex = index === -1 ? -1 : index.option;
            let option = this.findNextOptionInList(this.getOptionGroupChildren(visibleOptions[groupIndex]), optionIndex);

            if (option)
                return option;
            else if ((groupIndex + 1) !== visibleOptions.length)
                return this.findNextOption({ group: (groupIndex + 1), option: -1 });
            else
                return null;
        }
        else {
            return this.findNextOptionInList(visibleOptions, index);
        }
    }

    findNextOptionInList(list, index) {
        let i = index + 1;
        if (i === list.length) {
            return null;
        }

        let option = list[i];
        if (this.isOptionDisabled(option))
            return this.findNextOptionInList(i);
        else
            return option;
    }

    findPrevOption(index) {
        if (index === -1) {
            return null;
        }

        let visibleOptions = this.getVisibleOptions();

        if (this.props.optionGroupLabel) {
            let groupIndex = index.group;
            let optionIndex = index.option;
            let option = this.findPrevOptionInList(this.getOptionGroupChildren(visibleOptions[groupIndex]), optionIndex);

            if (option)
                return option;
            else if (groupIndex > 0)
                return this.findPrevOption({ group: (groupIndex - 1), option: this.getOptionGroupChildren(visibleOptions[groupIndex - 1]).length });
            else
                return null;
        }
        else {
            return this.findPrevOptionInList(visibleOptions, index);
        }
    }

    findPrevOptionInList(list, index) {
        let i = index - 1;
        if (i < 0) {
            return null;
        }

        let option = list[i];
        if (this.isOptionDisabled(option))
            return this.findPrevOption(i);
        else
            return option;
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

        if (this.searchValue) {
            let searchIndex = this.getSelectedOptionIndex();
            let newOption = this.props.optionGroupLabel ? this.searchOptionInGroup(searchIndex) : this.searchOption(++searchIndex);
            if (newOption) {
                this.selectItem({
                    originalEvent: event,
                    option: newOption
                });
                this.selectedOptionUpdated = true;
            }
        }

        this.searchTimeout = setTimeout(() => {
            this.searchValue = null;
        }, 250);
    }

    searchOption(index) {
        let option;

        if (this.searchValue) {
            let visibleOptions = this.getVisibleOptions();
            option = this.searchOptionInRange(index, visibleOptions.length);

            if (!option) {
                option = this.searchOptionInRange(0, index);
            }
        }

        return option;
    }

    searchOptionInRange(start, end) {
        let visibleOptions = this.getVisibleOptions();
        for (let i = start; i < end; i++) {
            let opt = visibleOptions[i];
            if (this.matchesSearchValue(opt)) {
                return opt;
            }
        }

        return null;
    }

    searchOptionInGroup(index) {
        let searchIndex = index === -1 ? { group: 0, option: -1 } : index;
        let visibleOptions = this.getVisibleOptions();

        for (let i = searchIndex.group; i < visibleOptions.length; i++) {
            let groupOptions = this.getOptionGroupChildren(visibleOptions[i]);
            for (let j = (searchIndex.group === i ? searchIndex.option + 1 : 0); j < groupOptions.length; j++) {
                if (this.matchesSearchValue(groupOptions[j])) {
                    return groupOptions[j];
                }
            }
        }

        for (let i = 0; i <= searchIndex.group; i++) {
            let groupOptions = this.getOptionGroupChildren(visibleOptions[i]);
            for (let j = 0; j < (searchIndex.group === i ? searchIndex.option : groupOptions.length); j++) {
                if (this.matchesSearchValue(groupOptions[j])) {
                    return groupOptions[j];
                }
            }
        }

        return null;
    }

    matchesSearchValue(option) {
        let label = this.getOptionLabel(option).toLocaleLowerCase(this.props.filterLocale);
        return label.startsWith(this.searchValue.toLocaleLowerCase(this.props.filterLocale));
    }

    onEditableInputChange(event) {
        if (this.props.onChange) {
            this.props.onChange({
                originalEvent: event.originalEvent,
                value: event.target.value,
                stopPropagation: () => { },
                preventDefault: () => { },
                target: {
                    name: this.props.name,
                    id: this.props.id,
                    value: event.target.value,
                }
            });
        }
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
        const filter = event.target.value;

        this.setState({ filter }, () => {
            if (this.props.onFilter) {
                this.props.onFilter({
                    originalEvent: event,
                    filter
                });
            }
        });
    }

    onFilterClearIconClick(callback) {
        this.resetFilter(callback);
    }

    resetFilter(callback) {
        const filter = '';

        this.setState({ filter }, () => {
            this.props.onFilter && this.props.onFilter({ filter });
            callback && callback();
        });
    }

    clear(event) {
        if (this.props.onChange) {
            this.props.onChange({
                originalEvent: event,
                value: undefined,
                stopPropagation: () => { },
                preventDefault: () => { },
                target: {
                    name: this.props.name,
                    id: this.props.id,
                    value: undefined
                }
            });
        }

        this.updateEditableLabel();
    }

    selectItem(event) {
        let currentSelectedOption = this.getSelectedOption();

        if (currentSelectedOption !== event.option) {
            this.updateEditableLabel(event.option);
            const optionValue = this.getOptionValue(event.option);

            if (this.props.onChange) {
                this.props.onChange({
                    originalEvent: event.originalEvent,
                    value: optionValue,
                    stopPropagation: () => { },
                    preventDefault: () => { },
                    target: {
                        name: this.props.name,
                        id: this.props.id,
                        value: optionValue
                    }
                });
            }
        }
    }

    getSelectedOption() {
        let index = this.getSelectedOptionIndex();
        return index !== -1 ? (this.props.optionGroupLabel ? this.getOptionGroupChildren(this.props.options[index.group])[index.option] : this.props.options[index]) : null;
    }

    getSelectedOptionIndex() {
        if (this.props.value != null && this.props.options) {
            if (this.props.optionGroupLabel) {
                for (let i = 0; i < this.props.options.length; i++) {
                    let selectedOptionIndex = this.findOptionIndexInList(this.props.value, this.getOptionGroupChildren(this.props.options[i]));
                    if (selectedOptionIndex !== -1) {
                        return { group: i, option: selectedOptionIndex };
                    }
                }
            }
            else {
                return this.findOptionIndexInList(this.props.value, this.props.options);
            }
        }

        return -1;
    }

    findOptionIndexInList(value, list) {
        const key = this.equalityKey();
        for (let i = 0; i < list.length; i++) {
            if ((ObjectUtils.equals(value, this.getOptionValue(list[i]), key))) {
                return i;
            }
        }

        return -1;
    }

    isSelected(option) {
        return ObjectUtils.equals(this.props.value, this.getOptionValue(option), this.equalityKey());
    }

    equalityKey() {
        return this.props.optionValue ? null : this.props.dataKey;
    }

    showOverlay() {
        this.setState({ overlayVisible: true });
    }

    hideOverlay() {
        this.setState({ overlayVisible: false });
    }

    onOverlayEnter(callback) {
        ZIndexUtils.set('overlay', this.overlayRef.current);
        this.alignOverlay();
        this.scrollInView();
        callback && callback();
    }

    onOverlayEntered(callback) {
        this.bindDocumentClickListener();
        this.bindScrollListener();
        this.bindResizeListener();

        callback && callback();
        this.props.onShow && this.props.onShow();
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

        ZIndexUtils.clear(this.overlayRef.current);

        this.props.onHide && this.props.onHide();
    }

    alignOverlay() {
        DomHandler.alignOverlay(this.overlayRef.current, this.input.parentElement, this.props.appendTo || PrimeReact.appendTo);
    }

    scrollInView() {
        let highlightItem = DomHandler.findSingle(this.overlayRef.current, 'li.p-highlight');
        if (highlightItem) {
            highlightItem.scrollIntoView({ block: 'nearest', inline: 'start' });
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
                if (this.state.overlayVisible && !DomHandler.isAndroid()) {
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
        return this.props.optionLabel ? ObjectUtils.resolveFieldData(option, this.props.optionLabel) : (option && option['label'] !== undefined ? option['label'] : option);
    }

    getOptionValue(option) {
        return this.props.optionValue ? ObjectUtils.resolveFieldData(option, this.props.optionValue) : (option && option['value'] !== undefined ? option['value'] : option);
    }

    getOptionRenderKey(option) {
        return this.props.dataKey ? ObjectUtils.resolveFieldData(option, this.props.dataKey) : this.getOptionLabel(option);
    }

    isOptionDisabled(option) {
        if (this.props.optionDisabled) {
            return ObjectUtils.isFunction(this.props.optionDisabled) ? this.props.optionDisabled(option) : ObjectUtils.resolveFieldData(option, this.props.optionDisabled);
        }

        return (option && option['disabled'] !== undefined ? option['disabled'] : false);
    }

    getOptionGroupRenderKey(optionGroup) {
        return ObjectUtils.resolveFieldData(optionGroup, this.props.optionGroupLabel);
    }

    getOptionGroupLabel(optionGroup) {
        return ObjectUtils.resolveFieldData(optionGroup, this.props.optionGroupLabel);
    }

    getOptionGroupChildren(optionGroup) {
        return ObjectUtils.resolveFieldData(optionGroup, this.props.optionGroupChildren);
    }

    checkValidity() {
        return this.inputRef.current.checkValidity();
    }

    getVisibleOptions() {
        if (this.hasFilter()) {
            let filterValue = this.state.filter.trim().toLocaleLowerCase(this.props.filterLocale)
            let searchFields = this.props.filterBy ? this.props.filterBy.split(',') : [this.props.optionLabel || 'label'];

            if (this.props.optionGroupLabel) {
                let filteredGroups = [];
                for (let optgroup of this.props.options) {
                    let filteredSubOptions = FilterUtils.filter(this.getOptionGroupChildren(optgroup), searchFields, filterValue, this.props.filterMatchMode, this.props.filterLocale);
                    if (filteredSubOptions && filteredSubOptions.length) {
                        filteredGroups.push({ ...optgroup, ...{ items: filteredSubOptions } });
                    }
                }
                return filteredGroups;
            }
            else {
                return FilterUtils.filter(this.props.options, searchFields, filterValue, this.props.filterMatchMode, this.props.filterLocale);
            }
        }
        else {
            return this.props.options;
        }
    }

    updateInputField() {
        if (this.props.editable && this.input) {
            let selectedOption = this.getSelectedOption();
            const label = selectedOption ? this.getOptionLabel(selectedOption) : null;
            const value = label || this.props.value || '';
            this.input.value = value;
        }
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

        if (this.props.autoFocus && this.focusInput) {
            this.focusInput.focus();
        }

        if (this.props.tooltip) {
            this.renderTooltip();
        }

        this.updateInputField();
        this.inputRef.current.selectedIndex = 1;
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

        ZIndexUtils.clear(this.overlayRef.current);
    }

    componentDidUpdate(prevProps) {
        if (this.state.overlayVisible) {
            if (this.props.filter) {
                this.alignOverlay();
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
        this.inputRef.current.selectedIndex = 1;
    }

    renderHiddenSelect(selectedOption) {
        let placeHolderOption = <option value="">{this.props.placeholder}</option>;
        let option = selectedOption ? <option value={selectedOption.value}>{this.getOptionLabel(selectedOption)}</option> : null;

        return (
            <div className="p-hidden-accessible p-dropdown-hidden-select">
                <select ref={this.inputRef} required={this.props.required} name={this.props.name} tabIndex={-1} aria-hidden="true">
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
                placeholder={this.props.placeholder} maxLength={this.props.maxLength} onInput={this.onEditableInputChange}
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

    render() {
        let className = classNames('p-dropdown p-component p-inputwrapper', this.props.className, {
            'p-disabled': this.props.disabled,
            'p-focus': this.state.focused,
            'p-dropdown-clearable': this.props.showClear && !this.props.disabled,
            'p-inputwrapper-filled': this.props.value,
            'p-inputwrapper-focus': this.state.focused || this.state.overlayVisible
        });
        let visibleOptions = this.getVisibleOptions();
        let selectedOption = this.getSelectedOption();

        let hiddenSelect = this.renderHiddenSelect(selectedOption);
        let keyboardHelper = this.renderKeyboardHelper();
        let labelElement = this.renderLabel(selectedOption);
        let dropdownIcon = this.renderDropdownIcon();
        let clearIcon = this.renderClearIcon();

        return (
            <div id={this.props.id} ref={(el) => this.container = el} className={className} style={this.props.style} onClick={this.onClick}
                onMouseDown={this.props.onMouseDown} onContextMenu={this.props.onContextMenu}>
                {keyboardHelper}
                {hiddenSelect}
                {labelElement}
                {clearIcon}
                {dropdownIcon}
                <DropdownPanel ref={this.overlayRef} visibleOptions={visibleOptions} {...this.props} onClick={this.onPanelClick} onOptionClick={this.onOptionClick}
                    filterValue={this.state.filter} hasFilter={this.hasFilter} onFilterClearIconClick={this.onFilterClearIconClick} onFilterInputKeyDown={this.onFilterInputKeyDown} onFilterInputChange={this.onFilterInputChange}
                    getOptionLabel={this.getOptionLabel} getOptionRenderKey={this.getOptionRenderKey} isOptionDisabled={this.isOptionDisabled}
                    getOptionGroupChildren={this.getOptionGroupChildren} getOptionGroupLabel={this.getOptionGroupLabel} getOptionGroupRenderKey={this.getOptionGroupRenderKey}
                    isSelected={this.isSelected} getSelectedOptionIndex={this.getSelectedOptionIndex}
                    in={this.state.overlayVisible} onEnter={this.onOverlayEnter} onEntered={this.onOverlayEntered} onExit={this.onOverlayExit} onExited={this.onOverlayExited} />
            </div>
        );
    }
}
