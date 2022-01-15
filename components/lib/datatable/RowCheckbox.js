import React, { Component } from 'react';
import { classNames } from '../utils/Utils';

export class RowCheckbox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            focused: false
        };

        this.onClick = this.onClick.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    onClick(event) {
        if (!this.props.disabled) {
            this.setState({ focused: true });

            this.props.onChange(event);
        }
    }

    onFocus() {
        this.setState({ focused: true });
    }

    onBlur() {
        this.setState({ focused: false });
    }

    onKeyDown(event) {
        if (event.code === 'Space') {
            this.onClick(event);
            event.preventDefault();
        }
    }

    render() {
        const className = classNames('p-checkbox p-component', {'p-checkbox-focused': this.state.focused} )
        const boxClassName = classNames('p-checkbox-box p-component', { 'p-highlight': this.props.checked, 'p-disabled': this.props.disabled, 'p-focus': this.state.focused});
        const iconClassName = classNames('p-checkbox-icon', { 'pi pi-check': this.props.checked });
        const tabIndex = this.props.disabled ? null : '0';

        return (
            <div className={className} onClick={this.onClick}>
                <div className={boxClassName} role="checkbox" aria-checked={this.props.checked} tabIndex={tabIndex}
                    onKeyDown={this.onKeyDown} onFocus={this.onFocus} onBlur={this.onBlur}>
                    <span className={iconClassName}></span>
                </div>
            </div>
        );
    }
}
