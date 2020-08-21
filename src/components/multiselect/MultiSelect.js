import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { tip } from "../tooltip/Tooltip";
import DomHandler from '../utils/DomHandler';
import FilterUtils from '../utils/FilterUtils';
import ObjectUtils from '../utils/ObjectUtils';
import { MultiSelectHeader } from './MultiSelectHeader';
import { MultiSelectItem } from './MultiSelectItem';
import { MultiSelectPanel } from './MultiSelectPanel';

export class MultiSelect extends Component {

    static defaultProps = {
        id: null,
        name: null,
        value: null,
        options: null,
        optionLabel: null,
        optionValue: null,
        style: null,
        className: null,
        scrollHeight: '200px',
        placeholder: null,
        fixedPlaceholder: false,
        disabled: false,
        filter: false,
        filterBy: null,
        filterMatchMode: 'contains',
        filterPlaceholder: null,
        filterLocale: undefined,
        tabIndex: '0',
        dataKey: null,
        inputId: null,
        required: false,
        appendTo: null,
        tooltip: null,
        tooltipOptions: null,
        maxSelectedLabels: 3,
        selectedItemsLabel: '{0} items selected',
        ariaLabelledBy: null,
        itemTemplate: null,
        selectedItemTemplate: null,
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
        style: PropTypes.object,
        className: PropTypes.string,
        scrollHeight: PropTypes.string,
        placeholder: PropTypes.string,
        fixedPlaceholder: PropTypes.bool,
        disabled: PropTypes.bool,
        filter: PropTypes.bool,
        filterBy: PropTypes.string,
        filterMatchMode: PropTypes.string,
        filterPlaceholder: PropTypes.string,
        filterLocale: PropTypes.string,
        tabIndex: PropTypes.string,
        dataKey: PropTypes.string,
        inputId: PropTypes.string,
        required: PropTypes.bool,
        appendTo: PropTypes.object,
        tooltip: PropTypes.string,
        tooltipOptions: PropTypes.object,
        maxSelectedLabels: PropTypes.number,
        selectedItemsLabel: PropTypes.string,
        ariaLabelledBy: PropTypes.string,
        itemTemplate: PropTypes.any,
        selectedItemTemplate: PropTypes.any,
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
    }

    onOptionClick(event) {
        let optionValue = this.getOptionValue(event.option);
        let selectionIndex = this.findSelectionIndex(optionValue);
        let newValue;

        if(selectionIndex !== -1)
            newValue = this.props.value.filter((val, i) => i !== selectionIndex);
        else
            newValue = [...this.props.value || [], optionValue];

        this.updateModel(event.originalEvent, newValue);
    }

    onOptionKeyDown(event) {
        let listItem = event.originalEvent.currentTarget;

        switch(event.originalEvent.which) {
            //down
            case 40:
                var nextItem = this.findNextItem(listItem);
                if (nextItem) {
                    nextItem.focus();
                }

                event.originalEvent.preventDefault();
            break;

            //up
            case 38:
                var prevItem = this.findPrevItem(listItem);
                if (prevItem) {
                    prevItem.focus();
                }

                event.originalEvent.preventDefault();
            break;

            //enter
            case 13:
                this.onOptionClick(event);
                event.originalEvent.preventDefault();
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
        if (!this.props.disabled && !this.isPanelClicked(event)) {
            if (this.state.overlayVisible) {
                this.hide();
            }
            else {
                this.focusInput.focus();
                this.show();
            }
        }
    }

    onToggleAll(event) {
        let newValue;

        if(event.checked) {
            newValue = [];
        }
        else {
            let options = this.hasFilter() ? this.filterOptions(this.props.options) : this.props.options;
            if(options) {
                newValue = [];
                for(let option of options) {
                    newValue.push(this.getOptionValue(option));
                }
            }
        }

        this.updateModel(event.originalEvent, newValue);
    }

    updateModel(event, value) {
        if(this.props.onChange) {
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
    }

    onFilter(event) {
        this.setState({ filter: event.query });
    }

    show() {
        this.setState({ overlayVisible: true });
    }

    hide() {
        this.setState({ overlayVisible: false });
    }

    onOverlayEnter() {
        this.panel.element.style.zIndex = String(DomHandler.generateZIndex());
        this.alignPanel();
    }

    onOverlayEntered() {
        this.bindDocumentClickListener();
    }

    onOverlayExit() {
        this.unbindDocumentClickListener();
    }

    alignPanel() {
        const container = this.label.parentElement;
        if (this.props.appendTo) {
            this.panel.element.style.minWidth = DomHandler.getWidth(container) + 'px';
            DomHandler.absolutePosition(this.panel.element, container);
        }
        else {
            DomHandler.relativePosition(this.panel.element, container);
        }
    }

    onCloseClick(event) {
        this.hide();
        event.preventDefault();
        event.stopPropagation();
    }

    findSelectionIndex(value) {
        let index = -1;

        if (this.props.value) {
            for (let i = 0; i < this.props.value.length; i++) {
                if (ObjectUtils.equals(this.props.value[i], value, this.props.dataKey)) {
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

    findLabelByValue(val) {
        let label = null;

        for (let i = 0; i < this.props.options.length; i++) {
            let option = this.props.options[i];
            let optionValue = this.getOptionValue(option);

            if (ObjectUtils.equals(optionValue, val)) {
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
        if(!this.documentClickListener) {
            this.documentClickListener = (event) => {
                if (this.state.overlayVisible && this.isOutsideClicked(event)) {
                    this.hide();
                }
            };

            document.addEventListener('click', this.documentClickListener);
        }
    }

    isOutsideClicked(event) {
        return this.container && !(this.container.isSameNode(event.target) || this.container.contains(event.target)
            || (this.panel && this.panel.element && this.panel.element.contains(event.target)));
    }

    isPanelClicked(event) {
        return this.panel && this.panel.element && this.panel.element.contains(event.target);
    }

    unbindDocumentClickListener() {
        if(this.documentClickListener) {
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
        if (prevProps.tooltip !== this.props.tooltip) {
            if (this.tooltip)
                this.tooltip.updateContent(this.props.tooltip);
            else
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

    hasFilter() {
        return this.state.filter && this.state.filter.trim().length > 0;
    }

    isAllChecked(visibleOptions) {
        if(this.hasFilter())
            return this.props.value && visibleOptions && visibleOptions.length&&(this.props.value.length === visibleOptions.length);
        else
            return this.props.value && this.props.options && (this.props.value.length === this.props.options.length);
    }

    filterOptions(options) {
        let filterValue = this.state.filter.trim().toLocaleLowerCase(this.props.filterLocale);
        let searchFields = this.props.filterBy ? this.props.filterBy.split(',') : [this.props.optionLabel || 'label'];
        return FilterUtils.filter(options, searchFields, filterValue, this.props.filterMatchMode, this.props.filterLocale);
    }

    getOptionLabel(option) {
        return this.props.optionLabel ? ObjectUtils.resolveFieldData(option, this.props.optionLabel) : (option['label'] !== undefined ? option['label'] : option);
    }

    getOptionValue(option) {
        return this.props.optionValue ? ObjectUtils.resolveFieldData(option, this.props.optionValue) : (option['value'] !== undefined ? option['value'] : option);
    }

    isEmpty() {
        return !this.props.value || this.props.value.length === 0;
    }

    checkValidity() {
        return this.nativeSelect.checkValidity();
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
            for(let i = 0; i < this.props.value.length; i++) {
                if(i !== 0) {
                    label += ',';
                }
                label += this.findLabelByValue(this.props.value[i]);
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
                onClose={this.onCloseClick} onToggleAll={this.onToggleAll} allChecked={this.isAllChecked(items)} />
        );
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
                <div className={labelClassName}>{content||this.props.placeholder||'empty'}</div>
            </div>
        );
    }

    renderHiddenSelect() {
        let selectedOptions = this.props.value ? this.props.value.map((option,index) => <option key={this.getOptionLabel(option) + '_' + index} value={this.getOptionValue(option)}></option>): null;

        return (
            <div className="p-hidden-accessible p-multiselect-hidden-select">
                <select ref={(el) => this.nativeSelect = el} required={this.props.required} name={this.props.name} tabIndex="-1" aria-hidden="true" multiple>
                    {selectedOptions}
                </select>
            </div>
        );
    }

    render() {
        let className = classNames('p-multiselect p-component', {
            'p-disabled': this.props.disabled,
            'p-focus': this.state.focused,
            'p-inputwrapper-filled': this.props.value && this.props.value.length > 0,
            'p-inputwrapper-focus': this.state.focused
        }, this.props.className);
        let label = this.renderLabel();
        let hiddenSelect = this.renderHiddenSelect();
        let items = this.props.options;

        if (items) {
            if (this.hasFilter()) {
                items = this.filterOptions(items);
            }

            items = items.map((option, index) => {
                let optionLabel = this.getOptionLabel(option);

                return (
                    <MultiSelectItem key={optionLabel + '_' + index} label={optionLabel} option={option} template={this.props.itemTemplate}
                    selected={this.isSelected(option)} onClick={this.onOptionClick} onKeyDown={this.onOptionKeyDown} tabIndex={this.props.tabIndex} />
                );
            });
        }

        let header = this.renderHeader(items);

        return (
            <div id={this.props.id} className={className} onClick={this.onClick} ref={el => this.container = el} style={this.props.style}>
                {hiddenSelect}
                <div className="p-hidden-accessible">
                    <input readOnly type="text" onFocus={this.onFocus} onBlur={this.onBlur} ref={el => this.focusInput = el} aria-haspopup="listbox"
                           aria-labelledby={this.props.ariaLabelledBy} id={this.props.inputId} />
                </div>
                {label}
                <div className="p-multiselect-trigger">
                    <span className="p-multiselect-trigger-icon pi pi-chevron-down p-c"></span>
                </div>
                <CSSTransition classNames="p-connected-overlay" in={this.state.overlayVisible} timeout={{ enter: 120, exit: 100 }}
                    unmountOnExit onEnter={this.onOverlayEnter} onEntered={this.onOverlayEntered} onExit={this.onOverlayExit}>
                    <MultiSelectPanel ref={el => this.panel = el} header={header} appendTo={this.props.appendTo}
                        scrollHeight={this.props.scrollHeight}>
                        {items}
                    </MultiSelectPanel>
                </CSSTransition>
            </div>
        );
    }
}
