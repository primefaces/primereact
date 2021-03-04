import { classNames } from '../utils/ClassNames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { tip } from '../tooltip/Tooltip';
import DomHandler from '../utils/DomHandler';
import FilterUtils from '../utils/FilterUtils';
import ObjectUtils from '../utils/ObjectUtils';
import { MultiSelectHeader } from './MultiSelectHeader';
import { MultiSelectItem } from './MultiSelectItem';
import { MultiSelectPanel } from './MultiSelectPanel';
import UniqueComponentId from '../utils/UniqueComponentId';
import ConnectedOverlayScrollHandler from '../utils/ConnectedOverlayScrollHandler';
import OverlayEventBus from '../overlayeventbus/OverlayEventBus';

export class MultiSelect extends Component {

    static defaultProps = {
        id: null,
        name: null,
        value: null,
        options: null,
        optionLabel: null,
        optionValue: null,
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
        onChange: null,
        onFocus: null,
        onBlur: null
    };

    static propTypes = {
        id: PropTypes.string,
        name: PropTypes.string,
        value: PropTypes.any,
        options: PropTypes.array,
        optionLabel: PropTypes.string,
        optionValue: PropTypes.string,
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
        this.onOptionClick = this.onOptionClick.bind(this);
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

        this.id = this.props.id || UniqueComponentId();
        this.overlayRef = React.createRef();
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

    onOptionClick(event) {
        let { originalEvent, option } = event;
        let optionValue = this.getOptionValue(option);
        let selectionIndex = this.findSelectionIndex(optionValue);
        let allowOptionSelect = this.allowOptionSelect();

        if (selectionIndex !== -1)
            this.updateModel(originalEvent, this.props.value.filter((val, i) => i !== selectionIndex));
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
                this.onOptionClick(event);
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
            return !DomHandler.hasClass(nextItem, 'p-multiselect-item') ? this.findNextItem(nextItem) : nextItem;
        else
            return null;
    }

    findPrevItem(item) {
        let prevItem = item.previousElementSibling;

        if (prevItem)
            return !DomHandler.hasClass(prevItem, 'p-multiselect-item') ? this.findPrevItem(prevItem) : prevItem;
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
                if (!this.state.overlayVisible) {
                    this.show();
                    event.preventDefault();
                }
                break;

            //escape
            case 27:
                this.hide();
                break;

            default:
                break;
        }
    }

    onToggleAll(event) {
        let newValue;

        if (event.checked) {
            newValue = [];
        }
        else {
            let options = this.hasFilter() ? this.filterOptions(this.props.options) : this.props.options;
            if (options) {
                newValue = [];
                for (let option of options) {
                    newValue.push(this.getOptionValue(option));
                }
            }
        }

        this.updateModel(event.originalEvent, newValue);
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
                    id: this.id,
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
        this.overlayRef.current.style.zIndex = String(DomHandler.generateZIndex());
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
    }

    alignPanel() {
        const container = this.label.parentElement;
        if (this.props.appendTo) {
            this.overlayRef.current.style.minWidth = DomHandler.getWidth(container) + 'px';
            DomHandler.absolutePosition(this.overlayRef.current, container);
        }
        else {
            DomHandler.relativePosition(this.overlayRef.current, container);
        }
    }

    onCloseClick(event) {
        this.hide();
        this.focusInput.focus();
        event.preventDefault();
        event.stopPropagation();
    }

    findSelectionIndex(value) {
        let index = -1;

        if (this.props.value) {
            const key = this.equalityKey();
            for (let i = 0; i < this.props.value.length; i++) {
                if (ObjectUtils.equals(this.props.value[i], value, key)) {
                    index = i;
                    break;
                }
            }
        }

        return index;
    }

    isSelected(option) {
        return this.findSelectionIndex(this.getOptionValue(option)) !== -1;
    }

    getLabelByValue(val) {
        let label = null;

        for (let i = 0; i < this.props.options.length; i++) {
            let option = this.props.options[i];
            let optionValue = this.getOptionValue(option);
            let key = this.equalityKey();

            if (ObjectUtils.equals(optionValue, val, key)) {
                label = this.getOptionLabel(option);
                break;
            }
        }

        return label;
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

    componentDidMount() {
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
    }

    hasFilter() {
        return this.state.filter && this.state.filter.trim().length > 0;
    }

    isAllChecked(visibleOptions) {
        if (this.hasFilter())
            return this.props.value && visibleOptions && visibleOptions.length && (this.props.value.length === visibleOptions.length);
        else
            return this.props.value && this.props.options && (this.props.value.length === this.props.options.length);
    }

    filterOptions(options) {
        if (options) {
            let filterValue = this.state.filter.trim().toLocaleLowerCase(this.props.filterLocale);
            let searchFields = this.props.filterBy ? this.props.filterBy.split(',') : [this.props.optionLabel || 'label'];
            return FilterUtils.filter(options, searchFields, filterValue, this.props.filterMatchMode, this.props.filterLocale);
        }
    }

    getOptionLabel(option) {
        return this.props.optionLabel ? ObjectUtils.resolveFieldData(option, this.props.optionLabel) : (option && option['label'] !== undefined ? option['label'] : option);
    }

    getOptionValue(option) {
        return this.props.optionValue ? ObjectUtils.resolveFieldData(option, this.props.optionValue) : (option && option['value'] !== undefined ? option['value'] : option);
    }

    isEmpty() {
        return !this.props.value || this.props.value.length === 0;
    }

    equalityKey() {
        return this.props.optionValue ? null : this.props.dataKey;
    }

    checkValidity() {
        return this.nativeSelect.checkValidity();
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

    renderHeader(items) {
        return (
            <MultiSelectHeader filter={this.props.filter} filterValue={this.state.filter} onFilter={this.onFilter} filterPlaceholder={this.props.filterPlaceholder}
                onClose={this.onCloseClick} onToggleAll={this.onToggleAll} allChecked={this.isAllChecked(items)} template={this.props.panelHeaderTemplate} />
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
                <select ref={(el) => this.nativeSelect = el} required={this.props.required} name={this.props.name} tabIndex={-1} aria-hidden="true" multiple>
                    {selectedOptions}
                </select>
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
        let panelClassName = classNames({ 'p-multiselect-limited': !this.allowOptionSelect() }, this.props.panelClassName);
        let label = this.renderLabel();
        let clearIcon = this.renderClearIcon();
        let hiddenSelect = this.renderHiddenSelect();
        let items = this.props.options;
        const hasFilter = this.hasFilter();

        if (hasFilter) {
            items = this.filterOptions(items);
        }

        if (items && items.length) {
            items = items.map((option, index) => {
                let optionLabel = this.getOptionLabel(option);

                return (
                    <MultiSelectItem key={optionLabel + '_' + index} label={optionLabel} option={option} disabled={option.disabled} template={this.props.itemTemplate}
                        selected={this.isSelected(option)} onClick={this.onOptionClick} onKeyDown={this.onOptionKeyDown} tabIndex={this.props.tabIndex} />
                );
            });
        }
        else if (hasFilter) {
            const emptyFilterMessage = ObjectUtils.getJSXElement(this.props.emptyFilterMessage, this.props);
            items = (
                <li className="p-multiselect-empty-message">
                    {emptyFilterMessage}
                </li>
            );
        }

        let header = this.renderHeader(items);
        let footer = this.renderFooter();

        return (
            <div id={this.id} className={className} onClick={this.onClick} ref={el => this.container = el} style={this.props.style}>
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
                    scrollHeight={this.props.scrollHeight} panelClassName={panelClassName} panelStyle={this.props.panelStyle}
                    in={this.state.overlayVisible} onEnter={this.onOverlayEnter} onEntered={this.onOverlayEntered} onExit={this.onOverlayExit} onExited={this.onOverlayExited}>
                    {items}
                </MultiSelectPanel>
            </div>
        );
    }
}
