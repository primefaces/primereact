import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils/ClassNames';
import ObjectUtils from '../utils/ObjectUtils';
import FilterUtils from '../utils/FilterUtils';
import { ListBoxItem } from './ListBoxItem';
import { ListBoxHeader } from './ListBoxHeader';
import { tip } from '../tooltip/Tooltip';

export class ListBox extends Component {

    static defaultProps = {
        id: null,
        value: null,
        options: null,
        optionLabel: null,
        optionValue: null,
        optionDisabled: null,
        optionGroupLabel: null,
        optionGroupChildren: null,
        optionGroupTemplate: null,
        itemTemplate: null,
        style: null,
        listStyle: null,
        listClassName: null,
        className: null,
        disabled: null,
        dataKey: null,
        multiple: false,
        metaKeySelection: false,
        filter: false,
        filterBy: null,
        filterValue: null,
        filterMatchMode: 'contains',
        filterPlaceholder: null,
        filterLocale: undefined,
        tabIndex: 0,
        tooltip: null,
        tooltipOptions: null,
        ariaLabelledBy: null,
        onChange: null,
        onFilterValueChange: null
    }

    static propTypes = {
        id: PropTypes.string,
        value: PropTypes.any,
        options: PropTypes.array,
        optionLabel: PropTypes.string,
        optionValue: PropTypes.string,
        optionDisabled: PropTypes.string,
        optionGroupLabel: PropTypes.string,
        optionGroupChildren: PropTypes.string,
        optionGroupTemplate: PropTypes.any,
        itemTemplate: PropTypes.any,
        style: PropTypes.object,
        listStyle: PropTypes.object,
        listClassName: PropTypes.string,
        className: PropTypes.string,
        disabled: PropTypes.bool,
        dataKey: PropTypes.string,
        multiple: PropTypes.bool,
        metaKeySelection: PropTypes.bool,
        filter: PropTypes.bool,
        filterBy: PropTypes.string,
        filterValue: PropTypes.string,
        filterMatchMode: PropTypes.string,
        filterPlaceholder: PropTypes.string,
        filterLocale: PropTypes.string,
        tabIndex: PropTypes.number,
        tooltip: PropTypes.string,
        tooltipOptions: PropTypes.object,
        ariaLabelledBy: PropTypes.string,
        onChange: PropTypes.func,
        onFilterValueChange: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {};

        if (!this.props.onFilterValueChange) {
            this.state.filterValue = '';
        }

        this.onFilter = this.onFilter.bind(this);
        this.onOptionSelect = this.onOptionSelect.bind(this);
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
        if (this.tooltip) {
            this.tooltip.destroy();
            this.tooltip = null;
        }
    }

    renderTooltip() {
        this.tooltip = tip({
            target: this.element,
            content: this.props.tooltip,
            options: this.props.tooltipOptions
        });
    }

    getFilterValue() {
        return (this.props.onFilterValueChange ? this.props.filterValue : this.state.filterValue) || '';
    }

    onOptionSelect(event) {
        const option = event.option;
        if (this.props.disabled || this.isOptionDisabled(option)) {
            return;
        }

        if (this.props.multiple)
            this.onOptionSelectMultiple(event.originalEvent, option);
        else
            this.onOptionSelectSingle(event.originalEvent, option);

        this.optionTouched = false;
    }

    onOptionTouchEnd() {
        if (this.props.disabled) {
            return;
        }

        this.optionTouched = true;
    }

    onOptionSelectSingle(event, option) {
        let selected = this.isSelected(option);
        let valueChanged = false;
        let value = null;
        let metaSelection = this.optionTouched ? false : this.props.metaKeySelection;

        if (metaSelection) {
            let metaKey = (event.metaKey || event.ctrlKey);

            if (selected) {
                if (metaKey) {
                    value = null;
                    valueChanged = true;
                }
            }
            else {
                value = this.getOptionValue(option);
                valueChanged = true;
            }
        }
        else {
            value = selected ? null : this.getOptionValue(option);
            valueChanged = true;
        }

        if (valueChanged) {
            this.updateModel(event, value);
        }
    }

    onOptionSelectMultiple(event, option) {
        let selected = this.isSelected(option);
        let valueChanged = false;
        let value = null;
        let metaSelection = this.optionTouched ? false : this.props.metaKeySelection;

        if (metaSelection) {
            let metaKey = (event.metaKey || event.ctrlKey);

            if (selected) {
                if (metaKey)
                    value = this.removeOption(option);
                else
                    value = [this.getOptionValue(option)];

                valueChanged = true;
            }
            else {
                value = (metaKey) ? this.props.value || [] : [];
                value = [...value, this.getOptionValue(option)];
                valueChanged = true;
            }
        }
        else {
            if (selected)
                value = this.removeOption(option);
            else
                value = [...this.props.value || [], this.getOptionValue(option)];

            valueChanged = true;
        }

        if (valueChanged) {
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
        const { originalEvent, value } = event;
        if (this.props.onFilterValueChange) {
            this.props.onFilterValueChange({
                originalEvent,
                value
            });
        }
        else {
            this.setState({ filterValue: value });
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

    removeOption(option) {
        return this.props.value.filter(val => !ObjectUtils.equals(val, this.getOptionValue(option), this.props.dataKey));
    }

    isSelected(option) {
        let selected = false;
        let optionValue = this.getOptionValue(option);

        if (this.props.multiple) {
            if (this.props.value) {
                for (let val of this.props.value) {
                    if (ObjectUtils.equals(val, optionValue, this.props.dataKey)) {
                        selected = true;
                        break;
                    }
                }
            }
        }
        else {
            selected = ObjectUtils.equals(this.props.value, optionValue, this.props.dataKey);
        }

        return selected;
    }

    filter(option) {
        let filterValue = this.getFilterValue().trim().toLocaleLowerCase(this.props.filterLocale);
        let optionLabel = this.getOptionLabel(option).toLocaleLowerCase(this.props.filterLocale);

        return optionLabel.indexOf(filterValue) > -1;
    }

    hasFilter() {
        let filter = this.getFilterValue();
        return filter && filter.trim().length > 0;
    }

    getOptionLabel(option) {
        return this.props.optionLabel ? ObjectUtils.resolveFieldData(option, this.props.optionLabel) : (option['label'] !== undefined ? option['label'] : option);
    }

    getOptionValue(option) {
        return this.props.optionValue ? ObjectUtils.resolveFieldData(option, this.props.optionValue) : (option['value'] !== undefined ? option['value'] : option);
    }

    getOptionRenderKey(option) {
        return this.props.dataKey ? ObjectUtils.resolveFieldData(option, this.props.dataKey) : this.getOptionLabel(option);
    }

    isOptionDisabled(option) {
        return this.props.optionDisabled ? ObjectUtils.resolveFieldData(option, this.props.optionDisabled) : (option.disabled !== undefined ? option.disabled : false);
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

    getVisibleOptions() {
        if (this.hasFilter()) {
            let filterValue = this.getFilterValue().trim().toLocaleLowerCase(this.props.filterLocale)
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

    renderGroupChildren(optionGroup) {
        const groupChildren = this.getOptionGroupChildren(optionGroup);
        return (
            groupChildren.map((option, j) => {
                let optionLabel = this.getOptionLabel(option);
                let optionKey = j + '_' + this.getOptionRenderKey(option);
                let disabled = this.isOptionDisabled(option)
                let tabIndex = disabled ? null : this.props.tabIndex || 0;

                return (
                    <ListBoxItem key={optionKey} label={optionLabel} option={option} template={this.props.itemTemplate} selected={this.isSelected(option)}
                        onClick={this.onOptionSelect} onTouchEnd={this.onOptionTouchEnd} tabIndex={tabIndex} disabled={disabled} />
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
                            <li className="p-listbox-item-group">
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
                        <ListBoxItem key={optionKey} label={optionLabel} option={option} template={this.props.itemTemplate} selected={this.isSelected(option)}
                            onClick={this.onOptionSelect} onTouchEnd={this.onOptionTouchEnd} tabIndex={tabIndex} disabled={disabled} />
                    );
                });
            }
        }

        return null;
    }

    render() {
        let className = classNames('p-listbox p-component', {
            'p-disabled': this.props.disabled
        }, this.props.className);
        let listClassName = classNames('p-listbox-list-wrapper', this.props.listClassName);
        let items = this.renderItems();
        let header;

        if (this.props.filter) {
            header = <ListBoxHeader filter={this.getFilterValue()} onFilter={this.onFilter} disabled={this.props.disabled} filterPlaceholder={this.props.filterPlaceholder} />
        }

        return (
            <div ref={(el) => this.element = el} id={this.props.id} className={className} style={this.props.style}>
                {header}
                <div className={listClassName} style={this.props.listStyle}>
                    <ul className="p-listbox-list" role="listbox" aria-multiselectable={this.props.multiple}>
                        {items}
                    </ul>
                </div>
            </div>
        );
    }
}
