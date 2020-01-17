import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class RowCheckbox extends Component {

    static defaultProps = {
        rowData: null,
        onClick: null,
        disabled: false
    }

    static propTypes = {
        rowData: PropTypes.object,
        onClick: PropTypes.func,
        disabled: PropTypes.bool
    }

    constructor(props) {
        super(props);
        this.state = {};

        this.onClick = this.onClick.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    onClick(event) {
        if(this.props.onClick && !this.props.disabled) {
            this.props.onClick({
                originalEvent: event,
                data: this.props.rowData,
                checked: this.props.selected
            })
        }
    }

    onFocus() {
        this.setState({focused: true});
    }

    onBlur() {
        this.setState({focused: false});
    }

    onKeyDown(event) {
        if (event.key === 'Enter') {
            this.onClick(event);
            event.preventDefault();
        }
    }

    render() {
        let className = classNames('p-checkbox-box p-component', {'p-highlight': this.props.selected, 'p-disabled': this.props.disabled, 'p-focus': this.state.focused});
        let iconClassName = classNames('p-checkbox-icon p-clickable', {'pi pi-check': this.props.selected});

        return <div className="p-checkbox p-component" onClick={this.onClick}>
                 <div className="p-hidden-accessible">
                    <input type="checkbox" defaultChecked={this.props.selected} disabled={this.props.disabled}
                        aria-checked={this.props.selected} onKeyDown={this.onKeyDown} onFocus={this.onFocus} onBlur={this.onBlur}/>
                </div>
                <div className={className} role="checkbox" aria-checked={this.props.selected}>
                    <span className={iconClassName}></span>
                </div>
            </div>;
    }
}
