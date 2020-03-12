import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ObjectUtils from '../utils/ObjectUtils';
import FilterUtils from '../utils/ObjectUtils';
import {ListBoxItem} from './ListBoxItem';
import {ListBoxHeader} from './ListBoxHeader';
import Tooltip from "../tooltip/Tooltip";

export class ListBox extends Component {

    static defaultProps = {
        id: null,
        value: null,
        options: null,
        optionLabel: null,
        optionValue: null,
        itemTemplate: null,
        style: null,
        listStyle: null,
        className: null,
        disabled: null,
        dataKey: null,
        multiple: false,
        metaKeySelection: false,
        filter: false,
        filterBy: null,
        filterMatchMode: 'contains',
        filterPlaceholder: null,
        tabIndex: '0',
        tooltip: null,
        tooltipOptions: null,
        ariaLabelledBy: null,
        onChange: null
    }

    static propTypes = {
        id: PropTypes.string,
        value: PropTypes.any,
        options: PropTypes.array,
        optionLabel: PropTypes.string,
        optionValue: PropTypes.string,
        itemTemplate: PropTypes.func,
        style: PropTypes.object,
        listStyle: PropTypes.object,
        className: PropTypes.string,
        dataKey: PropTypes.string,
        multiple: PropTypes.bool,
        metaKeySelection: PropTypes.bool,
        filter: PropTypes.bool,
        filterBy: PropTypes.string,
        filterMatchMode: PropTypes.string,
        filterPlaceholder: PropTypes.string,
        tabIndex: PropTypes.string,
        tooltip: PropTypes.string,
        tooltipOptions: PropTypes.object,
        ariaLabelledBy: PropTypes.string,
        onChange: PropTypes.func
    };

    constructor() {
        super();
        this.state = {
            filter: ''
        }

        this.onFilter = this.onFilter.bind(this);
        this.onOptionClick = this.onOptionClick.bind(this);
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
        if (this.tooltip) {
            this.tooltip.destroy();
            this.tooltip = null;
        }
    }

    renderTooltip() {
        this.tooltip = new Tooltip({
            target: this.element,
            content: this.props.tooltip,
            options: this.props.tooltipOptions
        });
    }

    onOptionClick(event) {
        if (this.props.disabled) {
            return;
        }

        if (this.props.multiple)
            this.onOptionClickMultiple(event.originalEvent, event.option);
        else
            this.onOptionClickSingle(event.originalEvent, event.option);

        this.optionTouched = false;
    }

    onOptionTouchEnd() {
        if (this.props.disabled) {
            return;
        }

        this.optionTouched = true;
    }

    onOptionClickSingle(event, option) {
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

    onOptionClickMultiple(event, option) {
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
        let filterValue = this.state.filter.trim().toLowerCase();
        let optionLabel = this.getOptionLabel(option);

        return optionLabel.toLowerCase().indexOf(filterValue.toLowerCase()) > -1;
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

    render() {
        let className = classNames('p-listbox p-inputtext p-component', this.props.className, {
            'p-disabled': this.props.disabled
        });
        let items = this.props.options;
        let header;

        if (this.props.options) {
            if (this.hasFilter()) {
                let filterValue = this.state.filter.trim().toLowerCase();
                let searchFields = this.props.filterBy ? this.props.filterBy.split(',') : [this.props.optionLabel || 'label'];
                items = FilterUtils.filter(items, searchFields, filterValue, this.props.filterMatchMode);
            }

            items = items.map((option, index) => {
                let optionLabel = this.getOptionLabel(option);

                return (
                    <ListBoxItem key={optionLabel} label={optionLabel} option={option} template={this.props.itemTemplate} selected={this.isSelected(option)}
                        onClick={this.onOptionClick} onTouchEnd={(e) => this.onOptionTouchEnd(e, option, index)} tabIndex={this.props.tabIndex} />
                );
            });
        }

        if (this.props.filter) {
            header = <ListBoxHeader filter={this.state.filter} onFilter={this.onFilter} disabled={this.props.disabled} filterPlaceholder={this.props.filterPlaceholder} />
        }

        return (
            <div ref={(el) => this.element = el} id={this.props.id} className={className} style={this.props.style}>
                {header}
                <div className="p-listbox-list-wrapper" style={this.props.listStyle}>
                    <ul className="p-listbox-list" role="listbox" aria-multiselectable={this.props.multiple}>
                        {items}
                    </ul>
                </div>
            </div>
        );
    }
}
