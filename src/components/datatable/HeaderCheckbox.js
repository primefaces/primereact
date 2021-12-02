import React, { Component } from 'react';
import { classNames } from '../utils/Utils';

export class HeaderCheckbox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            focused: false
        };

        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    onFocus() {
        this.setState({ focused: true });
    }

    onBlur() {
        this.setState({ focused: false });
    }

    onClick(event) {
        if (!this.props.disabled) {
            this.setState({ focused: true });

            this.props.onChange({
                originalEvent: event,
                checked: !this.props.checked
            });
        }
    }

    onKeyDown(event) {
        if (event.code === 'Space') {
            this.onClick(event);
            event.preventDefault();
        }
    }

    render() {
        const boxClassName = classNames('p-checkbox-box p-component', {
            'p-highlight': this.props.checked,
            'p-disabled': this.props.disabled,
            'p-focus': this.state.focused
        });
        const iconClassName = classNames('p-checkbox-icon', {
            'pi pi-check': this.props.checked
        });
        const tabIndex = this.props.disabled ? null : 0;

        return (
            <div className="p-checkbox p-component" onClick={this.onClick}>
                <div className={boxClassName} role="checkbox" aria-checked={this.props.checked} tabIndex={tabIndex} onFocus={this.onFocus} onBlur={this.onBlur} onKeyDown={this.onKeyDown}>
                    <span className={iconClassName}></span>
                </div>
            </div>
        );
    }
}
