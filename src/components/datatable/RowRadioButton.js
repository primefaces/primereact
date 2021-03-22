import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils/ClassNames';

export class RowRadioButton extends Component {

    static defaultProps = {
        rowData: null,
        onClick: null,
        selected: false
    }

    static propTypes = {
        rowData: PropTypes.object,
        onClick: PropTypes.func,
        selected: PropTypes.bool
    }

    constructor(props) {
        super(props);

        this.state = {
            focused: false
        };

        this.onClick = this.onClick.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onClick(event) {
        if (this.props.onClick) {
            this.props.onClick({
                originalEvent: event,
                data: this.props.rowData
            })
        }

        this.input.focus();
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

    render() {
        const className = classNames('p-radiobutton-box p-component p-clickable', { 'p-highlight': this.props.selected, 'p-focus': this.state.focused });
        const name = `${this.props.tableId ? this.props.tableId + '_' : ''}dt_radio`;

        return (
            <div className="p-radiobutton p-component">
                <div className="p-hidden-accessible">
                    <input name={name} ref={(el) => this.input = el} type="radio" checked={this.props.selected} onFocus={this.onFocus} onBlur={this.onBlur} onChange={this.onChange} />
                </div>
                <div className={className} onClick={this.onClick} role="radio" aria-checked={this.props.selected}>
                    <div className="p-radiobutton-icon p-clickable"></div>
                </div>
            </div>
        );
    }
}
