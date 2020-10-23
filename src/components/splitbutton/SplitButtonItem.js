import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
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

    render() {
        let { disabled, icon, label, template } = this.props.menuitem;
        const className = classNames('p-menuitem-link', { 'p-disabled': disabled });
        const itemContent = template ? ObjectUtils.getJSXElement(template, this.props.menuitem) : null;
        icon = icon && <span className={classNames('p-menuitem-icon', icon)}></span>;
        label = label && <span className="p-menuitem-text">{label}</span>;

        return (
            <li className="p-menuitem" role="none">
                <a href={this.props.menuitem.url || '#'} role="menuitem" className={className} target={this.props.menuitem.target} onClick={this.onClick}>
                    {icon}
                    {label}
                    {itemContent}
                </a>
            </li>
        );
    }
}
