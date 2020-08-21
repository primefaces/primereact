import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ObjectUtils from '../utils/ObjectUtils';
import { Ripple } from '../ripple/Ripple';

export class MultiSelectItem extends Component {

    static defaultProps = {
        option: null,
        label: null,
        selected: false,
        tabIndex: null,
        template: null,
        onClick: null,
        onKeyDown: null,
    };

    static propTypes = {
        option: PropTypes.object,
        label: PropTypes.string,
        selected: PropTypes.bool,
        tabIndex: PropTypes.string,
        template: PropTypes.any,
        onClick: PropTypes.func,
        onKeyDown: PropTypes.func,
    };

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    onClick(event) {
        if (this.props.onClick) {
            this.props.onClick({
                originalEvent: event,
                option: this.props.option
            });
        }

        event.preventDefault();
    }

    onKeyDown(event) {
        if (this.props.onKeyDown) {
            this.props.onKeyDown({
                originalEvent: event,
                option: this.props.option
            });
        }
    }

    render() {
        const className = classNames('p-multiselect-item', { 'p-highlight': this.props.selected }, this.props.option.className);
        const checkboxClassName = classNames('p-checkbox-box', { 'p-highlight': this.props.selected });
        const checkboxIcon = classNames('p-checkbox-icon p-c', { 'pi pi-check': this.props.selected });
        const content = this.props.template ? ObjectUtils.getJSXElement(this.props.template, this.props.option) : this.props.label;

        return (
            <li className={className} onClick={this.onClick} tabIndex={this.props.tabIndex} onKeyDown={this.onKeyDown} role="option" aria-selected={this.props.selected}>
                <div className="p-checkbox p-component">
                    <div className={checkboxClassName}>
                        <span className={checkboxIcon}></span>
                    </div>
                </div>
                <span>{content}</span>
                <Ripple />
            </li>
        );
    }

}
