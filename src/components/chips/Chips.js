import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {InputText} from '../inputtext/InputText';
import DomHandler from '../utils/DomHandler';
import classNames from 'classnames';

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
        itemTemplate: null,
        onAdd: null,
        onRemove: null,
        onChange: null,
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
        itemTemplate: PropTypes.func,
        onAdd: PropTypes.func,
        onRemove: PropTypes.func,
        onChange: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.focusInput = this.focusInput.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
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
                value: values
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
                            value: values
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

    onFocus() {
        DomHandler.addClass(this.listElement, 'ui-state-focus');
    }

    onBlur() {
        DomHandler.removeClass(this.listElement, 'ui-state-focus');
    }

    isMaxedOut() {
        return this.props.max && this.props.value && this.props.max === this.props.value.length;
    }

    renderItem(value, index) {
        const content = this.props.itemTemplate ? this.props.itemTemplate(value) : value;

        return (
            <li key={index} className="ui-chips-token ui-state-highlight ui-corner-all">
                <span className="ui-chips-token-icon pi pi-fw pi-times" onClick={(event) => this.removeItem(event, index)}></span>
                <span className="ui-chips-token-label">{content}</span>
            </li>
        );
    }

    renderInputElement() {
        return (
            <li className="ui-chips-input-token">
                <InputText ref={(el) => this.inputElement = ReactDOM.findDOMNode(el)} placeholder={this.props.placeholder} type="text" name={this.props.name} disabled={this.props.disabled||this.isMaxedOut()}
                            onKeyDown={this.onKeyDown} onFocus={this.onFocus} onBlur={this.onBlur} />
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
        const className = classNames('ui-inputtext ui-state-default ui-corner-all', {'ui-state-disabled': this.props.disabled});
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
        const className = classNames('ui-chips ui-widget', this.props.className);
        const list = this.renderList();

        return (
            <div id={this.props.id} className={className} style={this.props.style}>
                {list}
            </div>
        );
    }
}