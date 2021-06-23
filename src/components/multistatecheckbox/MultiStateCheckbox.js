import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { ObjectUtils, classNames } from '../utils/Utils';
import { tip } from '../tooltip/Tooltip';

export class MultiStateCheckbox extends Component {

    static defaultProps = {
        id: null,
        inputRef: null,
        inputId: null,
        value: null,
        options: null,
        optionValue: null,
        iconTemplate: null,
        dataKey: null,
        name: null,
        style: null,
        className: null,
        disabled: false,
        readOnly: false,
        tooltip: null,
        tooltipOptions: null,
        ariaLabelledBy: null,
        onChange: null
    };

    static propTypes = {
        id: PropTypes.string,
        inputRef: PropTypes.any,
        inputId: PropTypes.string,
        value: PropTypes.any,
        options: PropTypes.any,
        optionValue: PropTypes.string,
        iconTemplate: PropTypes.any,
        dataKey: PropTypes.string,
        name: PropTypes.string,
        style: PropTypes.object,
        className: PropTypes.string,
        disabled: PropTypes.bool,
        readOnly: PropTypes.bool,
        tooltip: PropTypes.string,
        tooltipOptions: PropTypes.object,
        ariaLabelledBy: PropTypes.string,
        onChange: PropTypes.func
    }

    constructor(props) {
        super(props);

        this.state = {
            focused: false
        };

        this.onClick = this.onClick.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);

        this.inputRef = createRef(this.props.inputRef);
    }

    onClick(event) {
        if (!this.props.disabled && !this.props.readOnly) {
            this.toggle(event);
            this.inputRef.current.focus();
        }
    }

    getOptionValue(option) {
        return this.props.optionValue ? ObjectUtils.resolveFieldData(option, this.props.optionValue) : option;
    }

    equalityKey() {
        return this.props.optionValue ? null : this.props.dataKey;
    }

    findSelectedOptionMap() {
        let option, index;

        if (this.props.options) {
            const key = this.equalityKey();
            index = this.props.options.findIndex(option => ObjectUtils.equals(this.props.value, this.getOptionValue(option), key));
            option = this.props.options[index];
        }

        return { option, index };
    }

    findNextOption() {
        if (this.props.options) {
            const { index } = this.findSelectedOptionMap();
            return index === this.props.options.length - 1 ? null : this.props.options[index + 1];
        }

        return null;
    }

    toggle(event) {
        let newValue = this.getOptionValue(this.findNextOption());

        if (this.props.onChange) {
            this.props.onChange({
                originalEvent: event,
                value: newValue,
                stopPropagation : () =>{},
                preventDefault : () =>{},
                target: {
                    name: this.props.name,
                    id: this.props.id,
                    value: newValue
                }
            })
        }
    }

    onFocus() {
        this.setState({ focused: true });
    }

    onBlur() {
        this.setState({ focused: false });
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

        if (this.props.tooltip && !this.props.disabled) {
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

    renderIcon(option) {
        const icon = (option && option.icon) || '';
        const className = classNames('p-checkbox-icon p-c', {
            [`${icon}`]: true
        });
        const content = <span className={className}></span>;

        if (this.props.iconTemplate) {
            const defaultOptions = {
                option,
                className,
                element: content,
                props: this.props
            }

            return ObjectUtils.getJSXElement(this.props.iconTemplate, defaultOptions);
        }

        return content;
    }

    render() {
        const { option } = this.findSelectedOptionMap();
        const containerClassName = classNames('p-multistatecheckbox p-checkbox p-component', this.props.className);
        const boxClassName = classNames('p-checkbox-box', {
            'p-highlight': !!option,
            'p-disabled': this.props.disabled,
            'p-focus': this.state.focused
        }, option && option.className);
        const icon = this.renderIcon(option);

        return (
            <div ref={el => this.element = el} id={this.props.id} className={containerClassName} style={this.props.style} onClick={this.onClick}>
                <div className="p-hidden-accessible">
                    <input ref={this.inputRef} type="checkbox" aria-labelledby={this.props.ariaLabelledBy} id={this.props.inputId} name={this.props.name}
                           onFocus={this.onFocus} onBlur={this.onBlur} disabled={this.props.disabled} readOnly={this.props.readOnly} defaultChecked={!!option} />
                </div>
                <div className={boxClassName} ref={el => this.box = el} role="checkbox" aria-checked={!!option} style={option && option.style}>
                    {icon}
                </div>
            </div>
        );
    }
}
