import React, { Component } from 'react';
import { classNames } from '../utils/Utils';

export class RowRadioButton extends Component {

    constructor(props) {
        super(props);

        this.state = {
            focused: false
        };

        this.onClick = this.onClick.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    onClick(event) {
        if (!this.props.disabled) {
            this.props.onChange({
                originalEvent: event,
                data: this.props.value
            });

            this.input.focus();
        }
    }

    onFocus() {
        this.setState({ focused: true });
    }

    onBlur() {
        this.setState({ focused: false });
    }

    onChange(event) {
        this.onClick(event);
    }

    onKeyDown(event) {
        if (event.code === 'Space') {
            this.onClick(event);
            event.preventDefault();
        }
    }

    render() {
        const className = classNames('p-radiobutton-box p-component', { 'p-highlight': this.props.checked, 'p-focus': this.state.focused, 'p-disabled': this.props.disabled });
        const name = `${this.props.tableSelector}_dt_radio`;

        return (
            <div className="p-radiobutton p-component">
                <div className="p-hidden-accessible">
                    <input name={name} ref={(el) => this.input = el} type="radio" checked={this.props.checked}
                        onFocus={this.onFocus} onBlur={this.onBlur} onChange={this.onChange} onKeyDown={this.onKeyDown} />
                </div>
                <div className={className} onClick={this.onClick} role="radio" aria-checked={this.props.checked}>
                    <div className="p-radiobutton-icon"></div>
                </div>
            </div>
        );
    }
}
