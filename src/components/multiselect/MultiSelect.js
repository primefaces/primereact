import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DomHandler from '../utils/DomHandler';
import ObjectUtils from '../utils/ObjectUtils';
import FilterUtils from '../utils/ObjectUtils';
import classNames from 'classnames';
import { MultiSelectPanel } from './MultiSelectPanel';
import { MultiSelectItem } from './MultiSelectItem';
import { MultiSelectHeader } from './MultiSelectHeader';
import Tooltip from "../tooltip/Tooltip";

export class MultiSelect extends Component {

    static defaultProps = {
        id: null,
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
        tabIndex: '0',
        dataKey: null,
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
        tabIndex: PropTypes.string,
        dataKey: PropTypes.string,
        appendTo: PropTypes.object,
        tooltip: PropTypes.string,
        tooltipOptions: PropTypes.object,
        maxSelectedLabels: PropTypes.number,
        selectedItemsLabel: PropTypes.string,
        ariaLabelledBy: PropTypes.string,
        itemTemplate: PropTypes.func,
        selectedItemTemplate: PropTypes.func,
        onChange: PropTypes.func,
        onFocus: PropTypes.func,
        onBlur: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {
            filter: ''
        };

        this.onClick = this.onClick.bind(this);
        this.onPanelClick = this.onPanelClick.bind(this);
        this.onOptionClick = this.onOptionClick.bind(this);
        this.onOptionKeyDown = this.onOptionKeyDown.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onFilter = this.onFilter.bind(this);
        this.onCloseClick = this.onCloseClick.bind(this);
        this.onToggleAll = this.onToggleAll.bind(this);
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

    onClick() {
        if(this.props.disabled) {
            return;
        }

        if(this.documentClickListener) {
            this.selfClick = true;
        }

        if(!this.panelClick) {
            if(this.panel.element.offsetParent) {
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
        this.setState({filter: event.query});
    }

    onPanelClick() {
        this.panelClick = true;
    }

    show() {
        if(this.props.options && this.props.options.length) {
            this.panel.element.style.zIndex = String(DomHandler.generateZIndex());
            this.panel.element.style.display = 'block';

            setTimeout(() => {
                DomHandler.addClass(this.panel.element, 'p-input-overlay-visible');
                DomHandler.removeClass(this.panel.element, 'p-input-overlay-hidden');
            }, 1);

            this.alignPanel();
            this.bindDocumentClickListener();
        }
    }

    hide() {
        DomHandler.addClass(this.panel.element, 'p-input-overlay-hidden');
        DomHandler.removeClass(this.panel.element, 'p-input-overlay-visible');
        this.unbindDocumentClickListener();
        this.clearClickState();

        setTimeout(() => {
            this.panel.element.style.display = 'none';
            DomHandler.removeClass(this.panel.element, 'p-input-overlay-hidden');
        }, 150);
    }

    alignPanel() {
        if (this.props.appendTo) {
            this.panel.element.style.minWidth = DomHandler.getWidth(this.container) + 'px';
            DomHandler.absolutePosition(this.panel.element, this.container);
        }
        else {
            DomHandler.relativePosition(this.panel.element, this.container);
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
        DomHandler.addClass(this.container, 'p-focus');

        if (this.props.onFocus) {
            this.props.onFocus(event);
        }
    }

    onBlur(event) {
        DomHandler.removeClass(this.container, 'p-focus');

        if (this.props.onBlur) {
            this.props.onBlur(event);
        }
    }

    bindDocumentClickListener() {
        if(!this.documentClickListener) {
            this.documentClickListener = this.onDocumentClick.bind(this);
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

    onDocumentClick() {
        if(!this.selfClick && !this.panelClick && this.panel.element.offsetParent) {
            this.hide();
        }

        this.clearClickState();
    }

    clearClickState() {
        this.selfClick = false;
        this.panelClick = false;
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
        let filterValue = this.state.filter.trim().toLowerCase();
        let searchFields = this.props.filterBy ? this.props.filterBy.split(',') : [this.props.optionLabel || 'label'];
        return FilterUtils.filter(options, searchFields, filterValue, this.props.filterMatchMode);
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
                        return (
                            <React.Fragment key={index}>{this.props.selectedItemTemplate(val)}</React.Fragment>
                        );
                    });
                }
                else {
                    return this.getSelectedItemsLabel();
                }
            }
            else {
                return this.props.selectedItemTemplate();
            }
        }
        else {
            return this.getLabel();
        }
    }

    renderTooltip() {
        this.tooltip = new Tooltip({
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
        const className = classNames('p-multiselect-label', {
            'p-placeholder': empty && this.props.placeholder,
            'p-multiselect-label-empty': empty && !this.props.placeholder && !this.props.selectedItemTemplate}
        );

        return (
            <div className="p-multiselect-label-container">
                <label className={className}>{content||this.props.placeholder||'empty'}</label>
            </div>
        );
    }

    render() {
        let className = classNames('p-multiselect p-component', this.props.className, {'p-disabled': this.props.disabled});
        let label = this.renderLabel();
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
                <div className="p-hidden-accessible">
                    <input readOnly type="text" onFocus={this.onFocus} onBlur={this.onBlur} ref={el => this.focusInput = el} aria-haspopup="listbox"
                           aria-labelledby={this.props.ariaLabelledBy}/>
                </div>
                {label}
                <div className="p-multiselect-trigger">
                    <span className="p-multiselect-trigger-icon pi pi-chevron-down p-c"></span>
                </div>
                <MultiSelectPanel ref={el => this.panel = el} header={header} appendTo={this.props.appendTo} onClick={this.onPanelClick}
                    scrollHeight={this.props.scrollHeight}>
                    {items}
                </MultiSelectPanel>
            </div>
        );
    }
}
