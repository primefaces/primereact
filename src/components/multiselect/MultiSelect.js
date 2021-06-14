import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils/ClassNames';
import { tip } from '../tooltip/Tooltip';
import DomHandler from '../utils/DomHandler';
import FilterUtils from '../utils/FilterUtils';
import ObjectUtils from '../utils/ObjectUtils';
import { MultiSelectPanel } from './MultiSelectPanel';
import ConnectedOverlayScrollHandler from '../utils/ConnectedOverlayScrollHandler';
import OverlayEventBus from '../overlayeventbus/OverlayEventBus';
import { ZIndexUtils } from '../utils/ZIndexUtils';
import PrimeReact from '../api/PrimeReact';

export class MultiSelect extends Component {

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
        display: 'comma',
        style: null,
        className: null,
        panelClassName: null,
        panelStyle: null,
        virtualScrollerOptions: null,
        scrollHeight: '200px',
        placeholder: null,
        fixedPlaceholder: false,
        disabled: false,
        showClear: false,
        filter: false,
        filterBy: null,
        filterMatchMode: 'contains',
        filterPlaceholder: null,
        filterLocale: undefined,
        emptyFilterMessage: 'No results found',
        resetFilterOnHide: false,
        tabIndex: 0,
        dataKey: null,
        inputId: null,
        appendTo: null,
        tooltip: null,
        tooltipOptions: null,
        maxSelectedLabels: 3,
        selectionLimit: null,
        selectedItemsLabel: '{0} items selected',
        ariaLabelledBy: null,
        itemTemplate: null,
        selectedItemTemplate: null,
        panelHeaderTemplate: null,
        panelFooterTemplate: null,
        transitionOptions: null,
        dropdownIcon: 'pi pi-chevron-down',
        showSelectAll: true,
        selectAll: false,
        onChange: null,
        onFocus: null,
        onBlur: null,
        onShow: null,
        onHide: null,
        onFilter: null,
        onSelectAll: null
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
        display: PropTypes.string,
        style: PropTypes.object,
        className: PropTypes.string,
        panelClassName: PropTypes.string,
        panelStyle: PropTypes.object,
        virtualScrollerOptions: PropTypes.object,
        scrollHeight: PropTypes.string,
        placeholder: PropTypes.string,
        fixedPlaceholder: PropTypes.bool,
        disabled: PropTypes.bool,
        showClear: PropTypes.bool,
        filter: PropTypes.bool,
        filterBy: PropTypes.string,
        filterMatchMode: PropTypes.string,
        filterPlaceholder: PropTypes.string,
        filterLocale: PropTypes.string,
        emptyFilterMessage: PropTypes.any,
        resetFilterOnHide: PropTypes.bool,
        tabIndex: PropTypes.number,
        dataKey: PropTypes.string,
        inputId: PropTypes.string,
        appendTo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        tooltip: PropTypes.string,
        tooltipOptions: PropTypes.object,
        maxSelectedLabels: PropTypes.number,
        selectionLimit: PropTypes.number,
        selectedItemsLabel: PropTypes.string,
        ariaLabelledBy: PropTypes.string,
        itemTemplate: PropTypes.any,
        selectedItemTemplate: PropTypes.any,
        panelHeaderTemplate: PropTypes.any,
        panelFooterTemplate: PropTypes.any,
        transitionOptions: PropTypes.object,
        dropdownIcon: PropTypes.string,
        showSelectAll: PropTypes.bool,
        selectAll: PropTypes.bool,
        onChange: PropTypes.func,
        onFocus: PropTypes.func,
        onBlur: PropTypes.func,
        onShow: PropTypes.func,
        onHide: PropTypes.func,
        onFilter: PropTypes.func,
        onSelectAll: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {
            filter: '',
            focused: false,
            overlayVisible: false
        };

        this.onClick = this.onClick.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onOptionSelect = this.onOptionSelect.bind(this);
        this.onOptionKeyDown = this.onOptionKeyDown.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onFilterInputChange = this.onFilterInputChange.bind(this);
        this.onCloseClick = this.onCloseClick.bind(this);
        this.onSelectAll = this.onSelectAll.bind(this);
        this.onOverlayEnter = this.onOverlayEnter.bind(this);
        this.onOverlayEntered = this.onOverlayEntered.bind(this);
        this.onOverlayExit = this.onOverlayExit.bind(this);
        this.onOverlayExited = this.onOverlayExited.bind(this);
        this.onPanelClick = this.onPanelClick.bind(this);

        this.getOptionLabel = this.getOptionLabel.bind(this);
        this.getOptionRenderKey = this.getOptionRenderKey.bind(this);
        this.isOptionDisabled = this.isOptionDisabled.bind(this);
        this.getOptionGroupChildren = this.getOptionGroupChildren.bind(this);
        this.getOptionGroupLabel = this.getOptionGroupLabel.bind(this);
        this.getOptionGroupRenderKey = this.getOptionGroupRenderKey.bind(this);
        this.allowOptionSelect = this.allowOptionSelect.bind(this);
        this.isSelected = this.isSelected.bind(this);
        this.isAllSelected = this.isAllSelected.bind(this);
        this.hasFilter = this.hasFilter.bind(this);
        this.getSelectedOptionIndex = this.getSelectedOptionIndex.bind(this);

        this.hide = this.hide.bind(this);
        this.onOptionKeyDown = this.onOptionKeyDown.bind(this);

        this.overlayRef = createRef();
        this.inputRef = createRef(this.props.inputRef);
    }

    onPanelClick(event) {
        OverlayEventBus.emit('overlay-click', {
            originalEvent: event,
            target: this.container
        });
    }

    allowOptionSelect() {
        return !this.props.selectionLimit || !this.props.value || (this.props.value && this.props.value.length < this.props.selectionLimit);
    }

    onOptionSelect(event) {
        let { originalEvent, option } = event;

        if (this.props.disabled || this.isOptionDisabled(option)) {
            return;
        }

        let optionValue = this.getOptionValue(option);
        let isOptionValueUsed = this.isOptionValueUsed(option);
        let selected = this.isSelected(option);
        let allowOptionSelect = this.allowOptionSelect();

        if (selected)
            this.updateModel(originalEvent, this.props.value.filter(val => !ObjectUtils.equals(isOptionValueUsed ? val : this.getOptionValue(val), optionValue, this.equalityKey())));
        else if (allowOptionSelect)
            this.updateModel(originalEvent, [...this.props.value || [], optionValue]);
    }

    onOptionKeyDown(event) {
        const originalEvent = event.originalEvent;
        let listItem = originalEvent.currentTarget;

        switch (originalEvent.which) {
            //down
            case 40:
                let nextItem = this.findNextItem(listItem);
                if (nextItem) {
                    nextItem.focus();
                }

                originalEvent.preventDefault();
                break;

            //up
            case 38:
                let prevItem = this.findPrevItem(listItem);
                if (prevItem) {
                    prevItem.focus();
                }

                originalEvent.preventDefault();
                break;

            //enter and space
            case 13:
            case 32:
                this.onOptionSelect(event);
                originalEvent.preventDefault();
                break;

            //escape
            case 27:
                this.hide();
                this.inputRef.current.focus();
                break;

            default:
                break;
        }
    }

    findNextItem(item) {
        let nextItem = item.nextElementSibling;

        if (nextItem)
            return DomHandler.hasClass(nextItem, 'p-disabled') || DomHandler.hasClass(nextItem, 'p-multiselect-item-group') ? this.findNextItem(nextItem) : nextItem;
        else
            return null;
    }

    findPrevItem(item) {
        let prevItem = item.previousElementSibling;

        if (prevItem)
            return DomHandler.hasClass(prevItem, 'p-disabled') || DomHandler.hasClass(prevItem, 'p-multiselect-item-group') ? this.findPrevItem(prevItem) : prevItem;
        else
            return null;
    }

    onClick(event) {
        if (!this.props.disabled && !this.isPanelClicked(event) && !DomHandler.hasClass(event.target, 'p-multiselect-token-icon') && !this.isClearClicked(event)) {
            if (this.state.overlayVisible) {
                this.hide();
            }
            else {
                this.show();
            }

            this.inputRef.current.focus();
        }
    }

    onKeyDown(event) {
        switch (event.which) {
            //down
            case 40:
                if (!this.state.overlayVisible && event.altKey) {
                    this.show();
                    event.preventDefault();
                }
                break;

            //space
            case 32:
                if (this.state.overlayVisible)
                    this.hide();
                else
                    this.show();

                event.preventDefault();
                break;

            //escape
            case 27:
                this.hide();
                break;

            //tab
            case 9:
                if (this.state.overlayVisible) {
                    const firstFocusableElement = DomHandler.getFirstFocusableElement(this.overlayRef.current);
                    if (firstFocusableElement) {
                        firstFocusableElement.focus();
                        event.preventDefault();
                    }
                }
                break;

            default:
                break;
        }
    }

    onSelectAll(event) {
        if (this.props.onSelectAll) {
            this.props.onSelectAll(event);
        }
        else {
            let value = null;
            let visibleOptions = this.getVisibleOptions();

            if (event.checked) {
                value = [];

                if (visibleOptions) {
                    const selectedOptions = visibleOptions.filter(option => this.isOptionDisabled(option) && this.isSelected(option));
                    value = selectedOptions.map(option => this.getOptionValue(option));
                }
            }
            else if (visibleOptions) {
                visibleOptions = visibleOptions.filter(option => !this.isOptionDisabled(option));

                if (this.props.optionGroupLabel) {
                    value = [];
                    visibleOptions.forEach(optionGroup => value = [...value, ...this.getOptionGroupChildren(optionGroup).filter((option) => !this.isOptionDisabled(option)).map(option => this.getOptionValue(option))]);
                }
                else {
                    value = visibleOptions.map(option => this.getOptionValue(option));
                }

                value = [...new Set([...value, ...(this.props.value||[])])];
            }

            this.updateModel(event.originalEvent, value);
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
                    id: this.props.id,
                    value: value
                }
            });
        }
    }

    onFilterInputChange(event) {
        const filter = event.query;

        this.setState({ filter }, () => {
            if (this.props.onFilter) {
                this.props.onFilter({
                    originalEvent: event,
                    filter
                });
            }
        });
    }

    resetFilter() {
        const filter = '';

        this.setState({ filter }, () => {
            this.props.onFilter && this.props.onFilter({ filter });
        });
    }

    show() {
        this.setState({ overlayVisible: true });
    }

    hide() {
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
        DomHandler.alignOverlay(this.overlayRef.current, this.label.parentElement, this.props.appendTo || PrimeReact.appendTo);
    }

    scrollInView() {
        let highlightItem = DomHandler.findSingle(this.overlayRef.current, 'li.p-highlight');
        if (highlightItem) {
            highlightItem.scrollIntoView({ block: 'nearest', inline: 'start' });
        }
    }

    onCloseClick(event) {
        this.hide();
        this.inputRef.current.focus();
        event.preventDefault();
        event.stopPropagation();
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

        return list.findIndex(item => value.some(val => ObjectUtils.equals(val, this.getOptionValue(item), key)));
    }

    isSelected(option) {
        let selected = false;

        if (this.props.value) {
            let optionValue = this.getOptionValue(option);
            let isOptionValueUsed = this.isOptionValueUsed(option);
            let key = this.equalityKey();

            selected = this.props.value.some(val => ObjectUtils.equals(isOptionValueUsed ? val : this.getOptionValue(val), optionValue, key));
        }

        return selected;
    }

    getLabelByValue(val) {
        let option;
        if (this.props.options) {
            if (this.props.optionGroupLabel) {
                for (let optionGroup of this.props.options) {
                    option = this.findOptionByValue(val, this.getOptionGroupChildren(optionGroup));
                    if (option) {
                        break;
                    }
                }
            }
            else {
                option = this.findOptionByValue(val, this.props.options);
            }
        }

        return option ? this.getOptionLabel(option) : null;
    }

    findOptionByValue(val, list) {
        let key = this.equalityKey();

        for (let option of list) {
            let optionValue = this.getOptionValue(option);

            if (ObjectUtils.equals(optionValue, val, key)) {
                return option;
            }
        }

        return null;
    }

    onFocus(event) {
        event.persist();

        this.setState({ focused: true }, () => {
            if (this.props.onFocus) {
                this.props.onFocus(event);
            }
        });
    }

    onBlur(event) {
        event.persist();

        this.setState({ focused: false }, () => {
            if (this.props.onBlur) {
                this.props.onBlur(event);
            }
        });
    }

    bindDocumentClickListener() {
        if (!this.documentClickListener) {
            this.documentClickListener = (event) => {
                if (this.state.overlayVisible && this.isOutsideClicked(event)) {
                    this.hide();
                }
            };

            document.addEventListener('click', this.documentClickListener);
        }
    }

    bindScrollListener() {
        if (!this.scrollHandler) {
            this.scrollHandler = new ConnectedOverlayScrollHandler(this.container, () => {
                if (this.state.overlayVisible) {
                    this.hide();
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
                    this.hide();
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
            || this.isPanelClicked(event));
    }

    isClearClicked(event) {
        return DomHandler.hasClass(event.target, 'p-multiselect-clear-icon')
    }

    isPanelClicked(event) {
        return this.overlayRef && this.overlayRef.current && this.overlayRef.current.contains(event.target);
    }

    unbindDocumentClickListener() {
        if (this.documentClickListener) {
            document.removeEventListener('click', this.documentClickListener);
            this.documentClickListener = null;
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

        if (this.props.tooltip) {
            this.renderTooltip();
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.tooltip !== this.props.tooltip || prevProps.tooltipOptions !== this.props.tooltipOptions) {
            if (this.tooltip)
                this.tooltip.update({ content: this.props.tooltip, ...(this.props.tooltipOptions || {}) });
            else
                this.renderTooltip();
        }

        if (this.state.overlayVisible && this.hasFilter()) {
            this.alignOverlay();
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

        ZIndexUtils.clear(this.overlayRef.current);
    }

    hasFilter() {
        return this.state.filter && this.state.filter.trim().length > 0;
    }

    isAllSelected() {
        if (this.props.onSelectAll) {
            return this.props.selectAll;
        }
        else {
            let visibleOptions = this.getVisibleOptions();
            if (visibleOptions.length === 0) {
                return false;
            }

            visibleOptions = visibleOptions.filter((option) => !this.isOptionDisabled(option));

            if (this.props.optionGroupLabel) {
                for (let optionGroup of visibleOptions) {
                    const visibleOptionsGroupChildren = this.getOptionGroupChildren(optionGroup).filter((option) => !this.isOptionDisabled(option));
                    for (let option of visibleOptionsGroupChildren) {
                        if (!this.isSelected(option)) {
                            return false;
                        }
                    }
                }
            }
            else {
                for (let option of visibleOptions) {
                    if (!this.isSelected(option)) {
                        return false;
                    }
                }
            }
        }

        return true;
    }

    getOptionLabel(option) {
        return this.props.optionLabel ? ObjectUtils.resolveFieldData(option, this.props.optionLabel) : (option && option['label'] !== undefined ? option['label'] : option);
    }

    getOptionValue(option) {
        if (this.props.optionValue) {
            const data = ObjectUtils.resolveFieldData(option, this.props.optionValue);
            return data !== null ? data : option;
        }

        return option && option['value'] !== undefined ? option['value'] : option;
    }

    getOptionRenderKey(option) {
        return this.props.dataKey ? ObjectUtils.resolveFieldData(option, this.props.dataKey) : this.getOptionLabel(option);
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

    isOptionDisabled(option) {
        if (this.props.optionDisabled) {
            return ObjectUtils.isFunction(this.props.optionDisabled) ? this.props.optionDisabled(option) : ObjectUtils.resolveFieldData(option, this.props.optionDisabled);
        }

        return (option && option['disabled'] !== undefined ? option['disabled'] : false);
    }

    isOptionValueUsed(option) {
        return this.props.optionValue || (option && option['value'] !== undefined);
    }

    getVisibleOptions() {
        if (this.hasFilter()) {
            let filterValue = this.state.filter.trim().toLocaleLowerCase(this.props.filterLocale);
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

    isEmpty() {
        return !this.props.value || this.props.value.length === 0;
    }

    equalityKey() {
        return this.props.optionValue ? null : this.props.dataKey;
    }

    checkValidity() {
        return this.inputRef.current.checkValidity();
    }

    removeChip(event, item) {
        let key = this.equalityKey();
        let value = this.props.value.filter(val => !ObjectUtils.equals(val, item, key));

        this.updateModel(event, value);
    }

    getSelectedItemsLabel() {
        let pattern = /{(.*?)}/;
        if (pattern.test(this.props.selectedItemsLabel)) {
            return this.props.selectedItemsLabel.replace(this.props.selectedItemsLabel.match(pattern)[0], this.props.value.length + '');
        }

        return this.props.selectedItemsLabel;
    }

    getLabel() {
        let label;

        if (!this.isEmpty() && !this.props.fixedPlaceholder) {
            if (this.props.value.length <= this.props.maxSelectedLabels) {
                label = '';
                for (let i = 0; i < this.props.value.length; i++) {
                    if (i !== 0) {
                        label += ',';
                    }
                    label += this.getLabelByValue(this.props.value[i]);
                }

                return label;
            }
            else {
                return this.getSelectedItemsLabel();
            }
        }

        return label;
    }

    getLabelContent() {
        if (this.props.selectedItemTemplate) {
            if (!this.isEmpty()) {
                if (this.props.value.length <= this.props.maxSelectedLabels) {
                    return this.props.value.map((val, index) => {
                        const item = ObjectUtils.getJSXElement(this.props.selectedItemTemplate, val);

                        return (
                            <React.Fragment key={index}>{item}</React.Fragment>
                        );
                    });
                }
                else {
                    return this.getSelectedItemsLabel();
                }
            }
            else {
                return ObjectUtils.getJSXElement(this.props.selectedItemTemplate);
            }
        }
        else {
            if (this.props.display === 'chip' && !this.isEmpty()) {
                return (
                    this.props.value.map((val) => {
                        const label = this.getLabelByValue(val);
                        return (
                            <div className="p-multiselect-token" key={label}>
                                <span className="p-multiselect-token-label">{label}</span>
                                { !this.props.disabled && <span className="p-multiselect-token-icon pi pi-times-circle" onClick={(e) => this.removeChip(e, val)}></span>}
                            </div>
                        )
                    })
                );
            }

            return this.getLabel();
        }
    }

    renderTooltip() {
        this.tooltip = tip({
            target: this.container,
            content: this.props.tooltip,
            options: this.props.tooltipOptions
        });
    }

    renderClearIcon() {
        const empty = this.isEmpty();
        if (!empty && this.props.showClear && !this.props.disabled) {
            return (
                <i className="p-multiselect-clear-icon pi pi-times" onClick={(e) => this.updateModel(e, null)}></i>
            );
        }

        return null;
    }

    renderLabel() {
        const empty = this.isEmpty();
        const content = this.getLabelContent();
        const labelClassName = classNames('p-multiselect-label', {
            'p-placeholder': empty && this.props.placeholder,
            'p-multiselect-label-empty': empty && !this.props.placeholder && !this.props.selectedItemTemplate,
            'p-multiselect-items-label': !empty && this.props.value.length > this.props.maxSelectedLabels
        });

        return (
            <div ref={(el) => this.label = el} className="p-multiselect-label-container">
                <div className={labelClassName}>{content || this.props.placeholder || 'empty'}</div>
            </div>
        );
    }

    render() {
        let className = classNames('p-multiselect p-component p-inputwrapper', {
            'p-multiselect-chip': this.props.display === 'chip',
            'p-disabled': this.props.disabled,
            'p-multiselect-clearable': this.props.showClear && !this.props.disabled,
            'p-focus': this.state.focused,
            'p-inputwrapper-filled': this.props.value && this.props.value.length > 0,
            'p-inputwrapper-focus': this.state.focused || this.state.overlayVisible
        }, this.props.className);
        let iconClassName = classNames('p-multiselect-trigger-icon p-c', this.props.dropdownIcon);
        let visibleOptions = this.getVisibleOptions();

        let label = this.renderLabel();
        let clearIcon = this.renderClearIcon();

        return (
            <div id={this.props.id} className={className} onClick={this.onClick} ref={el => this.container = el} style={this.props.style}>
                <div className="p-hidden-accessible">
                    <input ref={this.inputRef} id={this.props.inputId} name={this.props.name} readOnly type="text" onFocus={this.onFocus} onBlur={this.onBlur} onKeyDown={this.onKeyDown}
                        role="listbox" aria-haspopup="listbox" aria-labelledby={this.props.ariaLabelledBy} aria-expanded={this.state.overlayVisible} disabled={this.props.disabled} tabIndex={this.props.tabIndex} />
                </div>
                {label}
                {clearIcon}
                <div className="p-multiselect-trigger">
                    <span className={iconClassName}></span>
                </div>
                <MultiSelectPanel ref={this.overlayRef} visibleOptions={visibleOptions} {...this.props} onClick={this.onPanelClick} onOverlayHide={this.hide}
                    filterValue={this.state.filter} hasFilter={this.hasFilter} onFilterInputChange={this.onFilterInputChange} onCloseClick={this.onCloseClick} onSelectAll={this.onSelectAll}
                    getOptionLabel={this.getOptionLabel} getOptionRenderKey={this.getOptionRenderKey} isOptionDisabled={this.isOptionDisabled}
                    getOptionGroupChildren={this.getOptionGroupChildren} getOptionGroupLabel={this.getOptionGroupLabel} getOptionGroupRenderKey={this.getOptionGroupRenderKey}
                    isSelected={this.isSelected} getSelectedOptionIndex={this.getSelectedOptionIndex} isAllSelected={this.isAllSelected} onOptionSelect={this.onOptionSelect} allowOptionSelect={this.allowOptionSelect} onOptionKeyDown={this.onOptionKeyDown}
                    in={this.state.overlayVisible} onEnter={this.onOverlayEnter} onEntered={this.onOverlayEntered} onExit={this.onOverlayExit} onExited={this.onOverlayExited} />
            </div>
        );
    }
}
