import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils/Utils';
import { tip } from '../tooltip/Tooltip';

export class Checkbox extends Component {

    static defaultProps = {
        id: null,
        inputRef: null,
        inputId: null,
        value: null,
        name: null,
        checked: false,
        trueValue: true,
        falseValue: false,
        style: null,
        className: null,
        disabled: false,
        required: false,
        readOnly: false,
        tabIndex: null,
        icon: 'pi pi-check',
        tooltip: null,
        tooltipOptions: null,
        ariaLabelledBy: null,
        onChange: null,
        onMouseDown: null,
        onContextMenu: null
    };

    static propTypes = {
        id: PropTypes.string,
        inputRef: PropTypes.any,
        inputId: PropTypes.string,
        value: PropTypes.any,
        name: PropTypes.string,
        checked: PropTypes.any,
        trueValue: PropTypes.any,
        falseValue: PropTypes.any,
        style: PropTypes.object,
        className: PropTypes.string,
        disabled: PropTypes.bool,
        required: PropTypes.bool,
        readOnly: PropTypes.bool,
        tabIndex: PropTypes.number,
        icon: PropTypes.string,
        tooltip: PropTypes.string,
        tooltipOptions: PropTypes.object,
        ariaLabelledBy: PropTypes.string,
        onChange: PropTypes.func,
        onMouseDown: PropTypes.func,
        onContextMenu: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {
            focused: false
        };

        this.onClick = this.onClick.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);

        this.inputRef = createRef(this.props.inputRef);
    }

    onClick(e) {
        if (!this.props.disabled && !this.props.readOnly && this.props.onChange) {
            let value = this.isChecked() ? this.props.falseValue : this.props.trueValue;

            this.props.onChange({
                originalEvent: e,
                value: this.props.value,
                checked: value,
                stopPropagation : () =>{},
                preventDefault : () =>{},
                target: {
                    type: 'checkbox',
                    name: this.props.name,
                    id: this.props.id,
                    value: this.props.value,
                    checked: value,
                }
            });

            this.inputRef.current.checked = !this.isChecked();
            this.inputRef.current.focus();

            e.preventDefault();
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

    componentWillUnmount() {
        if (this.tooltip) {
            this.tooltip.destroy();
            this.tooltip = null;
        }
    }

    componentDidUpdate(prevProps) {
        this.inputRef.current.checked = this.isChecked();

        if (prevProps.tooltip !== this.props.tooltip || prevProps.tooltipOptions !== this.props.tooltipOptions) {
            if (this.tooltip)
                this.tooltip.update({ content: this.props.tooltip, ...(this.props.tooltipOptions || {}) });
            else
                this.renderTooltip();
        }
    }

    onFocus() {
        this.setState({ focused: true });
    }

    onBlur() {
        this.setState({ focused: false });
    }

    onKeyDown(event) {
        if (event.key === 'Enter') {
            this.onClick(event);
            event.preventDefault();
        }
    }

    renderTooltip() {
        this.tooltip = tip({
            target: this.element,
            content: this.props.tooltip,
            options: this.props.tooltipOptions
        });
    }

    isChecked() {
        return this.props.checked === this.props.trueValue;
    }

    render() {
        const containerClass = classNames('p-checkbox p-component', {
            'p-checkbox-checked': this.isChecked(),
            'p-checkbox-disabled': this.props.disabled,
            'p-checkbox-focused': this.state.focused
        }, this.props.className);
        const boxClass = classNames('p-checkbox-box', {
            'p-highlight': this.isChecked(),
            'p-disabled': this.props.disabled,
            'p-focus': this.state.focused
        });
        const iconClass = classNames('p-checkbox-icon p-c', {
            [this.props.icon]: this.isChecked()
        });

        return (
            <div ref={(el) => this.element = el} id={this.props.id} className={containerClass} style={this.props.style} onClick={this.onClick} onContextMenu={this.props.onContextMenu} onMouseDown={this.props.onMouseDown}>
                <div className="p-hidden-accessible">
                    <input ref={this.inputRef} type="checkbox" aria-labelledby={this.props.ariaLabelledBy} id={this.props.inputId} name={this.props.name} tabIndex={this.props.tabIndex} defaultChecked={this.isChecked()}
                             onKeyDown={this.onKeyDown} onFocus={this.onFocus} onBlur={this.onBlur} disabled={this.props.disabled} readOnly={this.props.readOnly} required={this.props.required}/>
                </div>
                <div className={boxClass} ref={el => this.box = el} role="checkbox" aria-checked={this.isChecked()}>
                    <span className={iconClass}></span>
                </div>
            </div>
        )
    }
}
