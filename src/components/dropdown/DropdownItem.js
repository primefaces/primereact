import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { ObjectUtils, classNames } from '../utils/Utils';
import { Ripple } from '../ripple/Ripple';

export class DropdownItem extends Component {

    static defaultProps = {
        option: null,
        label: null,
        template: null,
        selected: false,
        disabled: false,
        onClick: null
    };

    static propTypes = {
        option: PropTypes.any,
        label: PropTypes.any,
        template: PropTypes.any,
        selected: PropTypes.bool,
        disabled: PropTypes.bool,
        onClick: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick(event) {
        if(this.props.onClick) {
            this.props.onClick({
                originalEvent: event,
                option: this.props.option
            })
        }
    }

    render() {
        let className = classNames('p-dropdown-item', {
            'p-highlight': this.props.selected,
            'p-disabled': this.props.disabled,
            'p-dropdown-item-empty': (!this.props.label || this.props.label.length === 0)
        }, this.props.option.className);
        let content = this.props.template ? ObjectUtils.getJSXElement(this.props.template, this.props.option) : this.props.label;

        return (
            <li className={className} onClick={this.onClick} aria-label={this.props.label} key={this.props.label} role="option" aria-selected={this.props.selected}>
                {content}
                <Ripple />
            </li>
        );
    }
}

