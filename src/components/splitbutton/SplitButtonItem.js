import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils/ClassNames';
import ObjectUtils from '../utils/ObjectUtils';

export class SplitButtonItem extends Component {

    static defaultProps = {
        menuitem: null,
        onItemClick: null
    }

    static propTypes = {
        menuitem: PropTypes.any,
        onItemClick: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        if (this.props.menuitem.command) {
            this.props.menuitem.command({ originalEvent: e, item: this.props.menuitem });
        }

        if (this.props.onItemClick) {
            this.props.onItemClick(e);
        }

        e.preventDefault();
    }

    renderSeparator() {
        return (
            <li className="p-menu-separator" role="separator"></li>
        );
    }

    renderMenuitem() {
        let { disabled, icon, label, template, url, target } = this.props.menuitem;
        const className = classNames('p-menuitem-link', { 'p-disabled': disabled });
        const iconClassName = classNames('p-menuitem-icon', icon);
        icon = icon && <span className={iconClassName}></span>;
        label = label && <span className="p-menuitem-text">{label}</span>;
        let content = (
            <a href={url || '#'} role="menuitem" className={className} target={target} onClick={this.onClick}>
                {icon}
                {label}
            </a>
        );

        if (template) {
            const defaultContentOptions = {
                onClick: (event) => this.onClick(event),
                className,
                labelClassName: 'p-menuitem-text',
                iconClassName,
                element: content,
                props: this.props
            };

            content = ObjectUtils.getJSXElement(template, this.props.menuitem, defaultContentOptions);
        }

        return (
            <li className="p-menuitem" role="none">
                {content}
            </li>
        );
    }

    renderItem() {
        if (this.props.menuitem.separator) {
            return this.renderSeparator();
        }

        return this.renderMenuitem();
    }

    render() {
        const item = this.renderItem();

        return item;
    }
}
