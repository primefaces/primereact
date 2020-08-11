import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import UniqueComponentId from '../utils/UniqueComponentId';

export class Steps extends Component {

    static defaultProps = {
        id: UniqueComponentId(),
        model: null,
        activeIndex: 0,
        readOnly: true,
        style: null,
        className: null,
        onSelect: null
    };

    static propTypes = {
        id: PropTypes.string,
        model: PropTypes.array.isRequired,
        activeIndex: PropTypes.number,
        readOnly: PropTypes.bool,
        style: PropTypes.object,
        className: PropTypes.string,
        onSelect: PropTypes.func
    };

    itemClick(event, item, index) {
        if (this.props.readOnly || item.disabled) {
            event.preventDefault();
            return;
        }

        if (this.props.onSelect){
            this.props.onSelect({
                originalEvent: event,
                item: item,
                index: index
            });
        }

        if (!item.url) {
            event.preventDefault();
        }

        if (item.command) {
            item.command({
                originalEvent: event,
                item: item,
                index: index
            });
        }
    }

    renderItem(item, index) {
        const isDisabled = (item.disabled || (index !== this.props.activeIndex && this.props.readOnly))
        const className = classNames('p-steps-item', item.className, {
            'p-highlight p-steps-current': (index === this.props.activeIndex),
            'p-disabled': isDisabled
        });

        return (
            <li key={item.label + '_' + index} className={className} style={item.style} role="tab" aria-selected={index === this.props.activeIndex} aria-expanded={index === this.props.activeIndex}>
                <a href={item.url || '#'} className="p-menuitem-link" role="presentation" target={item.target} onClick={event => this.itemClick(event, item, index)} tabIndex={isDisabled ? -1 : ''}>
                    <span className="p-steps-number">{index + 1}</span>
                    <span className="p-steps-title">{item.label}</span>
                </a>
            </li>
        );
    }

    renderItems() {
        if (this.props.model) {
            const items = this.props.model.map((item, index) => {
                return this.renderItem(item, index);
            });

            return (
                <ul role="tablist">
                    {items}
                </ul>
            );
        }

        return null;
    }

    render() {
        const className = classNames('p-steps p-component', this.props.className, {'p-readonly': this.props.readonly});
        const items = this.renderItems();

        return (
            <div id={this.id} className={className} style={this.props.style}>
                {items}
            </div>
        );
    }
}
