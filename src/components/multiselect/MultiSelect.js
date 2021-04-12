import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils/ClassNames';
import { tip } from '../tooltip/Tooltip';
import DomHandler from '../utils/DomHandler';
import FilterUtils from '../utils/FilterUtils';
import ObjectUtils from '../utils/ObjectUtils';
import { MultiSelectHeader } from './MultiSelectHeader';
import { MultiSelectItem } from './MultiSelectItem';
import { MultiSelectPanel } from './MultiSelectPanel';
import ConnectedOverlayScrollHandler from '../utils/ConnectedOverlayScrollHandler';
import OverlayEventBus from '../overlayeventbus/OverlayEventBus';
import { ZIndexUtils } from '../utils/ZIndexUtils';

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
        required: false,
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
        onChange: null,
        onFocus: null,
        onBlur: null
    };

    static propTypes = {
        id: PropTypes.string,
        inputRef: PropTypes.any,
        name: PropTypes.string,
        value: PropTypes.any,
        options: PropTypes.array,
        optionLabel: PropTypes.string,
        optionValue: PropTypes.string,
        optionDisabled: PropTypes.bool,
        optionGroupLabel: PropTypes.string,
        optionGroupChildren: PropTypes.string,
        optionGroupTemplate: PropTypes.any,
        display: PropTypes.string,
        style: PropTypes.object,
        className: PropTypes.string,
        panelClassName: PropTypes.string,
        panelStyle: PropTypes.object,
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
        required: PropTypes.bool,
        appendTo: PropTypes.object,
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
        onChange: PropTypes.func,
        onFocus: PropTypes.func,
        onBlur: PropTypes.func
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
        this.onFilter = this.onFilter.bind(this);
        this.onCloseClick = this.onCloseClick.bind(this);
        this.onToggleAll = this.onToggleAll.bind(this);
        this.onOverlayEnter = this.onOverlayEnter.bind(this);
        this.onOverlayEntered = this.onOverlayEntered.bind(this);
        this.onOverlayExit = this.onOverlayExit.bind(this);
        this.onOverlayExited = this.onOverlayExited.bind(this);
        this.onPanelClick = this.onPanelClick.bind(this);

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
        let selected = this.isSelected(option);
        let allowOptionSelect = this.allowOptionSelect();

        if (selected)
            this.updateModel(originalEvent, this.props.value.filter(val => !ObjectUtils.equals(this.getOptionValue(val), optionValue, this.equalityKey())));
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
                this.focusInput.focus();
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

            this.focusInput.focus();
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

    onToggleAll(event) {
        let value = null;
        let visibleOptions = this.getVisibleOptions();

        if (event.checked) {
            value = [];
        }
        else if (visibleOptions) {
            if (this.props.optionGroupLabel) {
                value = [];
                visibleOptions.forEach(optionGroup => value = [...value, ...this.getOptionGroupChildren(optionGroup)]);
            }
            else  {
                value = visibleOptions.map(option => this.getOptionValue(option));
            }
        }

        this.updateModel(event.originalEvent, value);
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

    onFilter(event) {
        this.setState({ filter: event.query });
    }

    resetFilter() {
        this.setState({ filter: '' });
    }

    show() {
        this.setState({ overlayVisible: true });
    }

    hide() {
        this.setState({ overlayVisible: false });
    }

    onOverlayEnter() {
        ZIndexUtils.set('overlay', this.overlayRef.current);
        this.alignPanel();
    }

    onOverlayEntered() {
        this.bindDocumentClickListener();
        this.bindScrollListener();
        this.bindResizeListener();
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
    }

    alignPanel() {
        const container = this.label.parentElement;
        this.overlayRef.current.style.minWidth = DomHandler.getOuterWidth(container) + 'px';
        DomHandler.absolutePosition(this.overlayRef.current, container);
    }

    onCloseClick(event) {
        this.hide();
        this.focusInput.focus();
        event.preventDefault();
        event.stopPropagation();
    }

    isSelected(option) {
        let selected = false;

        if (this.props.value) {
            let optionValue = this.getOptionValue(option);
            let key = this.equalityKey();

            for (let val of this.props.value) {
                if (ObjectUtils.equals(this.getOptionValue(val), optionValue, key)) {
                    selected = true;
                    break;
                }
            }
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

        return option ? this.getOptionLabel(option): null;
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
                if (this.state.overlayVisible) {
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
        if (this.hasFilter()) {
            let visibleOptions = this.getVisibleOptions();
            if (visibleOptions.length === 0) {
                return false;
            }

            if (this.props.optionGroupLabel) {
                for (let optionGroup of visibleOptions) {
                    for (let option of this.getOptionGroupChildren(optionGroup)) {
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

            return true;
        }
        else {
            if (this.props.value && this.props.options) {
                let optionCount = 0;
                if (this.props.optionGroupLabel)
                    this.props.options.forEach(optionGroup => optionCount += this.getOptionGroupChildren(optionGroup).length);
                else
                    optionCount = this.props.options.length;

                return optionCount > 0 && optionCount === this.props.value.length;
            }

            return false;
        }
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
        return this.props.optionDisabled ? ObjectUtils.resolveFieldData(option, this.props.optionDisabled) : (option.disabled !== undefined ? option.disabled : false);
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
                        filteredGroups.push({...optgroup, ...{items: filteredSubOptions}});
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
            label = '';
            for (let i = 0; i < this.props.value.length; i++) {
                if (i !== 0) {
                    label += ',';
                }
                label += this.getLabelByValue(this.props.value[i]);
            }

            if (this.props.value.length <= this.props.maxSelectedLabels) {
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

    renderHeader() {
        return (
            <MultiSelectHeader filter={this.props.filter} filterValue={this.state.filter} onFilter={this.onFilter} filterPlaceholder={this.props.filterPlaceholder}
                onClose={this.onCloseClick} onToggleAll={this.onToggleAll} allSelected={this.isAllSelected()} template={this.props.panelHeaderTemplate} />
        );
    }

    renderFooter() {
        if (this.props.panelFooterTemplate) {
            const content = ObjectUtils.getJSXElement(this.props.panelFooterTemplate, this.props);

            return (
                <div className="p-multiselect-footer">
                    {content}
                </div>
            );
        }

        return null;
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

    renderHiddenSelect() {
        let selectedOptions = this.props.value ? this.props.value.map((option, index) => <option key={this.getOptionLabel(option) + '_' + index} value={this.getOptionValue(option)}></option>) : null;

        return (
            <div className="p-hidden-accessible p-multiselect-hidden-select">
                <select ref={this.inputRef} required={this.props.required} name={this.props.name} tabIndex={-1} aria-hidden="true" multiple>
                    {selectedOptions}
                </select>
            </div>
        );
    }

    renderGroupChildren(optionGroup) {
        const groupChildren = this.getOptionGroupChildren(optionGroup);
        return (
            groupChildren.map((option, j) => {
                let optionLabel = this.getOptionLabel(option);
                let optionKey = j + '_' + this.getOptionRenderKey(option);
                let disabled = this.isOptionDisabled(option)
                let tabIndex = disabled ? null : this.props.tabIndex || 0;

                return (
                    <MultiSelectItem key={optionKey} label={optionLabel} option={option} template={this.props.itemTemplate}
                        selected={this.isSelected(option)} onClick={this.onOptionSelect} onKeyDown={this.onOptionKeyDown} tabIndex={tabIndex} disabled={disabled} />
                );
            })
        )
    }

    renderItems() {
        const visibleOptions = this.getVisibleOptions();

        if (visibleOptions) {
            if (this.props.optionGroupLabel) {
                return visibleOptions.map((option, i) => {
                    const groupContent = this.props.optionGroupTemplate ? ObjectUtils.getJSXElement(this.props.optionGroupTemplate, option, i) : this.getOptionGroupLabel(option);
                    const groupChildrenContent = this.renderGroupChildren(option);
                    const key = i + '_' + this.getOptionGroupRenderKey(option);

                    return (
                        <React.Fragment key={key}>
                            <li className="p-multiselect-item-group">
                                {groupContent}
                            </li>
                            {groupChildrenContent}
                        </React.Fragment>
                    )
                });
            }
            else {
                return visibleOptions.map((option, index) => {
                    let optionLabel = this.getOptionLabel(option);
                    let optionKey = index + '_' + this.getOptionRenderKey(option);
                    let disabled = this.isOptionDisabled(option)
                    let tabIndex = disabled ? null : this.props.tabIndex || 0;

                    return (
                        <MultiSelectItem key={optionKey} label={optionLabel} option={option} template={this.props.itemTemplate}
                            selected={this.isSelected(option)} onClick={this.onOptionSelect} onKeyDown={this.onOptionKeyDown} tabIndex={tabIndex} disabled={disabled} />
                    );
                });
            }
        }
        else if (this.hasFilter()) {
            const emptyFilterMessage = ObjectUtils.getJSXElement(this.props.emptyFilterMessage, this.props);
            return (
                <li className="p-multiselect-empty-message">
                    {emptyFilterMessage}
                </li>
            );
        }

        return null;
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
        let panelClassName = classNames({ 'p-multiselect-limited': !this.allowOptionSelect() }, this.props.panelClassName);
        let label = this.renderLabel();
        let clearIcon = this.renderClearIcon();
        let hiddenSelect = this.renderHiddenSelect();
        let items = this.renderItems();
        let header = this.renderHeader();
        let footer = this.renderFooter();

        return (
            <div id={this.props.id} className={className} onClick={this.onClick} ref={el => this.container = el} style={this.props.style}>
                {hiddenSelect}
                <div className="p-hidden-accessible">
                    <input ref={el => this.focusInput = el} id={this.props.inputId} readOnly type="text" onFocus={this.onFocus} onBlur={this.onBlur} onKeyDown={this.onKeyDown}
                        role="listbox" aria-haspopup="listbox" aria-labelledby={this.props.ariaLabelledBy} aria-expanded={this.state.overlayVisible} disabled={this.props.disabled} tabIndex={this.props.tabIndex} />
                </div>
                {label}
                {clearIcon}
                <div className="p-multiselect-trigger">
                    <span className="p-multiselect-trigger-icon pi pi-chevron-down p-c"></span>
                </div>
                <MultiSelectPanel ref={this.overlayRef} header={header} footer={footer} appendTo={this.props.appendTo} onClick={this.onPanelClick}
                    scrollHeight={this.props.scrollHeight} panelClassName={panelClassName} panelStyle={this.props.panelStyle} transitionOptions={this.props.transitionOptions}
                    in={this.state.overlayVisible} onEnter={this.onOverlayEnter} onEntered={this.onOverlayEntered} onExit={this.onOverlayExit} onExited={this.onOverlayExited}>
                    {items}
                </MultiSelectPanel>
            </div>
        );
    }
}
