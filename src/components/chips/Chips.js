import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {InputText} from '../inputtext/InputText';
import DomHandler from '../utils/DomHandler';
import classNames from 'classnames';
import Tooltip from "../tooltip/Tooltip";

export class Chips extends Component {

    static defaultProps = {
        id: null,
        name: null,
        placeholder: null,
        value: null,
        max: null,
        disabled: null,
        style: null,
        className: null,
        tooltip: null,
        tooltipOptions: null,
        ariaLabelledBy: null,
        itemTemplate: null,
        onAdd: null,
        onRemove: null,
        onChange: null,
        onFocus: null,
        onBlur: null
    }

    static propTypes = {
        id: PropTypes.string,
        name: PropTypes.string,
        placeholder: PropTypes.string,
        value: PropTypes.array,
        max: PropTypes.number,
        disabled: PropTypes.bool,
        style: PropTypes.object,
        className: PropTypes.string,
        tooltip: PropTypes.string,
        tooltipOptions: PropTypes.object,
        ariaLabelledBy: PropTypes.string,
        itemTemplate: PropTypes.func,
        onAdd: PropTypes.func,
        onRemove: PropTypes.func,
        onChange: PropTypes.func,
        onFocus: PropTypes.func,
        onBlur: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.focusInput = this.focusInput.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    componentDidMount() {
        if (this.props.tooltip) {
            this.renderTooltip();
        }
    }

    componentDidUpdate(prevProps) {
        let isValueSame = this.props.value && prevProps.value.length === this.props.value.length;
        if (this.props.tooltip) {
            if (prevProps.tooltip !== this.props.tooltip) {
                if (this.tooltip)
                    this.tooltip.updateContent(this.props.tooltip);
                else
                    this.renderTooltip();
            }
            else if (!isValueSame && this.tooltip) {
                this.tooltip.deactivate();
                this.tooltip.activate();
            }
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
            target: this.inputElement,
            targetContainer: this.listElement,
            content: this.props.tooltip,
            options: this.props.tooltipOptions
        });
    }

    removeItem(event, index) {
        if (this.props.disabled) {
            return;
        }

        let values = [...this.props.value];
        const removedItem = values.splice(index, 1);

        if (this.props.onRemove) {
            this.props.onRemove({
                originalEvent: event,
                value: removedItem
            });
        }

        if (this.props.onChange) {
            this.props.onChange({
                originalEvent: event,
                value: values,
                stopPropagation : () =>{},
                preventDefault : () =>{},
                target: {
                    name: this.props.name,
                    id: this.props.id,
                    value : values
                }
            });
        }
    }

    focusInput() {
        this.inputElement.focus();
    }

    onKeyDown(event) {
        const inputValue = event.target.value;

        switch(event.which) {
            //backspace
            case 8:
                if (this.inputElement.value.length === 0 && this.props.value && this.props.value.length > 0) {
                    this.removeItem(event, this.props.value.length - 1);
                }
            break;

            //enter
            case 13:
                if (inputValue && inputValue.trim().length && (!this.props.max || this.props.max > this.props.value.length)) {
                    let values = [...this.props.value];
                    values.push(inputValue);
                    this.setState({values: values});

                    if (this.props.onAdd) {
                        this.props.onAdd({
                            originalEvent: event,
                            value: inputValue
                        });
                    }

                    if (this.props.onChange) {
                        this.props.onChange({
                            originalEvent: event,
                            value: values,
                            stopPropagation : () =>{},
                            preventDefault : () =>{},
                            target: {
                                name: this.props.name,
                                id: this.props.id,
                                value : values
                            }
                        });
                    }
                }

                this.inputElement.value = '';
                event.preventDefault();
            break;

            default:
                if (this.isMaxedOut()) {
                    event.preventDefault();
                }
            break;
        }
    }

    onFocus(event) {
        DomHandler.addClass(this.listElement, 'p-focus');
        if (this.props.onFocus) {
            this.props.onFocus(event);
        }
    }

    onBlur(event) {
        DomHandler.removeClass(this.listElement, 'p-focus');

        if (this.props.onBlur) {
            this.props.onBlur(event);
        }
    }

    isMaxedOut() {
        return this.props.max && this.props.value && this.props.max === this.props.value.length;
    }

    renderItem(value, index) {
        const content = this.props.itemTemplate ? this.props.itemTemplate(value) : value;
        const icon = this.props.disabled ? null : <span className="p-chips-token-icon pi pi-fw pi-times" onClick={(event) => this.removeItem(event, index)}></span>;

        return (
            <li key={index} className="p-chips-token p-highlight">
                {icon}
                <span className="p-chips-token-label">{content}</span>
            </li>
        );
    }

    renderInputElement() {
        return (
            <li className="p-chips-input-token">
                <InputText ref={(el) => this.inputElement = ReactDOM.findDOMNode(el)} placeholder={this.props.placeholder} type="text" name={this.props.name} disabled={this.props.disabled||this.isMaxedOut()}
                            onKeyDown={this.onKeyDown} onFocus={this.onFocus} onBlur={this.onBlur} aria-labelledby={this.props.ariaLabelledBy}/>
            </li>
        );
    }

    renderItems() {
        if (this.props.value) {
            return this.props.value.map((value, index) => {
                return this.renderItem(value, index);
            });
        }
        else {
            return null;
        }
    }

    renderList() {
        const className = classNames('p-inputtext', {'p-disabled': this.props.disabled});
        const items = this.renderItems();
        const inputElement = this.renderInputElement();

        if (this.props.value) {
            return (
                <ul ref={(el) => this.listElement = el} className={className} onClick={this.focusInput}>
                    {items}
                    {inputElement}
                </ul>
            );
        }
        else {
            return null;
        }
    }

    render() {
        const className = classNames('p-chips p-component', this.props.className);
        const list = this.renderList();

        return (
            <div ref={(el) => this.element = el} id={this.props.id} className={className} style={this.props.style}>
                {list}
            </div>
        );
    }
}
