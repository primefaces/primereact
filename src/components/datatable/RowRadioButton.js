import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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

    render() {
        let className = classNames('p-radiobutton-box p-component', { 'p-highlight': this.props.selected, 'p-focus': this.state.focused });

        return (
            <div className="p-radiobutton p-component">
                <div className="p-hidden-accessible">
                    <input ref={(el) => this.input = el} type="radio" defaultChecked={this.props.selected} onFocus={this.onFocus} onBlur={this.onBlur} />
                </div>
                <div className={className} onClick={this.onClick} role="radio" aria-checked={this.props.selected}>
                    <div className="p-radiobutton-icon"></div>
                </div>
            </div>
        );
    }
}
