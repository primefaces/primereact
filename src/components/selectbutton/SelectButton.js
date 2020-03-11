import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ObjectUtils from '../utils/ObjectUtils';
import {SelectButtonItem} from './SelectButtonItem';
import Tooltip from "../tooltip/Tooltip";

export class SelectButton extends Component {

    static defaultProps = {
        id: null,
        value: null,
        options: null,
        optionLabel: null,
        optionValue: null,
        tabIndex: null,
        multiple: null,
        disabled: null,
        style: null,
        className: null,
        dataKey: null,
        tooltip: null,
        tooltipOptions: null,
        ariaLabelledBy: null,
        itemTemplate: null,
        onChange: null
    };

    static propTypes = {
        id: PropTypes.string,
        value: PropTypes.any,
        options: PropTypes.array,
        optionLabel: PropTypes.string,
        optionValue: PropTypes.string,
        tabIndex: PropTypes.string,
        multiple: PropTypes.bool,
        disabled: PropTypes.bool,
        style: PropTypes.object,
        className: PropTypes.string,
        dataKey: PropTypes.string,
        tooltip: PropTypes.string,
        tooltipOptions: PropTypes.object,
        ariaLabelledBy: PropTypes.string,
        itemTemplate: PropTypes.func,
        onChange: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {};
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

        let selected = this.isSelected(event.option);
        let optionValue = this.getOptionValue(event.option);
        let newValue;

        if (this.props.multiple) {
            let currentValue = this.props.value ? [...this.props.value] : [];

            if (selected)
                newValue = currentValue.filter((val) => !ObjectUtils.equals(val, optionValue, this.props.dataKey));
            else
                newValue = [...currentValue, optionValue];
        }
        else {
            if (selected)
                newValue = null;
            else
                newValue = optionValue;
        }

        if (this.props.onChange) {
            this.props.onChange({
                originalEvent: event.originalEvent,
                value: newValue,
                stopPropagation : () =>{},
                preventDefault : () =>{},
                target: {
                    name: this.props.name,
                    id: this.props.id,
                    value: newValue,
                }
            });
        }
    }

    getOptionLabel(option) {
        return this.props.optionLabel ? ObjectUtils.resolveFieldData(option, this.props.optionLabel) : (option['label'] !== undefined ? option['label'] : option);
    }

    getOptionValue(option) {
        return this.props.optionValue ? ObjectUtils.resolveFieldData(option, this.props.optionValue) : (option['value'] !== undefined ? option['value'] : option);
    }

    isSelected(option) {
        let selected = false;
        let optionValue = this.getOptionValue(option);

        if (this.props.multiple) {
            if (this.props.value && this.props.value.length) {
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

    renderItems() {
        if (this.props.options && this.props.options.length) {
            return this.props.options.map((option, index) => {
                let optionLabel = this.getOptionLabel(option);

                return <SelectButtonItem key={optionLabel} label={optionLabel} className={option.className} option={option} onClick={this.onOptionClick} template={this.props.itemTemplate}
                            selected={this.isSelected(option)} tabIndex={this.props.tabIndex} disabled={this.props.disabled} ariaLabelledBy={this.props.ariaLabelledBy}/>;
            });
        }
        else {
            return null;
        }
    }

    render() {
        let className = classNames('p-selectbutton p-buttonset p-component p-buttonset-3', this.props.className);
        let items = this.renderItems();

        return (
            <div id={this.props.id} ref={(el) => this.element = el} role="group">
                <div className={className} style={this.props.style}>
                    {items}
                </div>
            </div>
        );
    }
}
