import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
        template: PropTypes.func,
        onClick: PropTypes.func,
        onKeyDown: PropTypes.func,
    };

    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    onClick(event) {
        if(this.props.onClick) {
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
        const className = classNames(this.props.option.className, 'p-multiselect-item', {'p-highlight': this.props.selected});
        const checkboxClassName = classNames('p-checkbox-box p-component', {'p-highlight': this.props.selected});
        const checkboxIcon = classNames('p-checkbox-icon p-c', {'pi pi-check': this.props.selected});
        const content = this.props.template ? this.props.template(this.props.option) : this.props.label;

        return (
            <li className={className} onClick={this.onClick} tabIndex={this.props.tabIndex} onKeyDown={this.onKeyDown} role="option" aria-selected={this.props.selected}>
                <div className="p-checkbox p-component">
                    <div className={checkboxClassName}>
                        <span className={checkboxIcon}></span>
                    </div>
                </div>
                <label>{content}</label>
            </li>
        );
    }

}
