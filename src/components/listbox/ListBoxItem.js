import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DomHandler from '../utils/DomHandler';

export class ListBoxItem extends Component {

    static defaultProps = {
        option: null,
        label: null,
        selected: false,
        tabIndex: null,
        onClick: null,
        onTouchEnd: null,
        template: null,
    }

    static propTypes = {
        option: PropTypes.any,
        label: PropTypes.string,
        selected: PropTypes.bool,
        tabIndex: PropTypes.string,
        onClick: PropTypes.func,
        onTouchEnd: PropTypes.func,
        template: PropTypes.func
    }

    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
        this.onTouchEnd = this.onTouchEnd.bind(this);
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

    onTouchEnd(event) {
        if(this.props.onTouchEnd) {
            this.props.onTouchEnd({
                originalEvent: event,
                option: this.props.option
            });
        }
    }

    onKeyDown(event) {
        let item = event.currentTarget;

        switch(event.which) {
            //down
            case 40:
                var nextItem = this.findNextItem(item);
                if(nextItem) {
                    nextItem.focus();
                }

                event.preventDefault();
            break;

            //up
            case 38:
                var prevItem = this.findPrevItem(item);
                if(prevItem) {
                    prevItem.focus();
                }

                event.preventDefault();
            break;

            //enter
            case 13:
                this.onClick(event);
                event.preventDefault();
            break;

            default:
            break;
        }
    }

    findNextItem(item) {
        let nextItem = item.nextElementSibling;

        if (nextItem)
            return DomHandler.hasClass(nextItem, 'p-disabled') ? this.findNextItem(nextItem) : nextItem;
        else
            return null;
    }

    findPrevItem(item) {
        let prevItem = item.previousElementSibling;

        if (prevItem)
            return DomHandler.hasClass(prevItem, 'p-disabled') ? this.findPrevItem(prevItem) : prevItem;
        else
            return null;
    }

    render() {
        let className = classNames(this.props.option.className, 'p-listbox-item', {'p-highlight': this.props.selected});
        let content = this.props.template ? this.props.template(this.props.option) : this.props.label;

        return (
            <li className={className} onClick={this.onClick} onTouchEnd={this.onTouchEnd} onKeyDown={this.onKeyDown} tabIndex={this.props.tabIndex}
                aria-label={this.props.label} key={this.props.label} role="option" aria-selected={this.props.selected}>
                {content}
            </li>
        );
    }
}
