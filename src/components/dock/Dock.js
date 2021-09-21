import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames, ObjectUtils } from '../utils/Utils';
import { Ripple } from '../ripple/Ripple';

export class Dock extends Component {

    static defaultProps = {
        id: null,
        style: null,
        className: null,
        model: null,
        position: 'bottom'
    };

    static propTypes = {
        id: PropTypes.string,
        style: PropTypes.object,
        className: PropTypes.string,
        model: PropTypes.array,
        position: PropTypes.string
    };

    constructor(props) {
        super(props);

        this.state = {
            currentIndex: -3
        };

        this.onListMouseLeave = this.onListMouseLeave.bind(this);
    }

    onListMouseLeave() {
        this.setState({ currentIndex: -3 });
    }

    onItemMouseEnter(index) {
        this.setState({ currentIndex: index });
    }

    onItemClick(e, item) {
        if (item.command) {
            item.command({ originalEvent: e, item });
        }

        e.preventDefault();
    }

    renderItem(item, index) {
        const { disabled, icon: _icon, label, template, url, target } = item;
        const className = classNames('p-dock-item', {
            'p-dock-item-second-prev': (this.state.currentIndex - 2) === index,
            'p-dock-item-prev': (this.state.currentIndex - 1) === index,
            'p-dock-item-current': this.state.currentIndex === index,
            'p-dock-item-next': (this.state.currentIndex + 1) === index,
            'p-dock-item-second-next': (this.state.currentIndex + 2) === index
        });
        const contentClassName = classNames('p-dock-action', { 'p-disabled': disabled });
        const iconClassName = classNames('p-dock-action-icon', _icon);
        const icon = typeof _icon === 'string' ? <span className={iconClassName}></span> : ObjectUtils.getJSXElement(_icon, this.props);

        let content = (
            <a href={url || '#'} role="menuitem" className={contentClassName} target={target} data-pr-tooltip={label} onClick={(e) => this.onItemClick(e, item)}>
                {icon}
                <Ripple />
            </a>
        );

        if (template) {
            const defaultContentOptions = {
                onClick: (e) => this.onItemClick(e, item),
                className: contentClassName,
                iconClassName,
                element: content,
                props: this.props,
                index
            };

            content = ObjectUtils.getJSXElement(template, item, defaultContentOptions);
        }

        return (
            <li key={index} className={className} role="none" onMouseEnter={() => this.onItemMouseEnter(index)}>
                {content}
            </li>
        )
    }

    renderItems() {
        if (this.props.model) {
            return this.props.model.map((item, index) => this.renderItem(item, index));
        }

        return null;
    }

    renderList() {
        const items = this.renderItems();

        return (
            <ul ref={(el) => this.list = el} className="p-dock-list" role="menu" onMouseLeave={this.onListMouseLeave}>
                {items}
            </ul>
        )
    }

    render() {
        const className = classNames(`p-dock p-component p-dock-${this.props.position}`, this.props.className);
        const list = this.renderList();

        return (
            <div id={this.props.id} className={className} style={this.props.style}>
                <div class="p-dock-list-container">
                    {list}
                </div>
            </div>
        );
    }
}
