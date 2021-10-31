import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { classNames } from '../utils/Utils';
import { Ripple } from '../ripple/Ripple';

export class PickListItem extends Component {

    static defaultProps = {
        value: null,
        className: null,
        template: null,
        selected: false,
        tabIndex: null,
        onClick: null,
        onKeyDown: null
    }

    static propTypes = {
        value: PropTypes.any,
        className: PropTypes.string,
        template: PropTypes.func,
        selected: PropTypes.bool,
        tabIndex: PropTypes.number,
        onClick: PropTypes.func,
        onKeyDown: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    onClick(event) {
        if(this.props.onClick) {
            this.props.onClick({
                originalEvent: event,
                value: this.props.value
            });
        }
    }

    onKeyDown(event) {
        if (this.props.onKeyDown) {
            this.props.onKeyDown({
                originalEvent: event,
                value: this.props.value
            });
        }
    }

    render() {
        let content = this.props.template ? this.props.template(this.props.value) : this.props.value;
        let className = classNames('p-picklist-item', {'p-highlight': this.props.selected}, this.props.className);

        return (
            <li className={className} onClick={this.onClick} onKeyDown={this.onKeyDown} tabIndex={this.props.tabIndex} role="option" aria-selected={this.props.selected}>
                {content}
                <Ripple />
            </li>
        );
    }
}
