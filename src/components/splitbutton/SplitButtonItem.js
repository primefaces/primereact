import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class SplitButtonItem extends Component {

    static defaultProps = {
        menuitem: null
    }

    static propTypes = {
        menuitem: PropTypes.any
    }

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        if (this.props.menuitem.command) {
            this.props.menuitem.command({ originalEvent: e, item: this.props.menuitem });
        }
        e.preventDefault();
    }

    render() {
        var className = classNames('p-menuitem-link', { 'p-disabled': this.props.menuitem.disabled });
        var icon = this.props.menuitem.icon ? <span className={classNames('p-menuitem-icon', this.props.menuitem.icon)}></span> : null;
        var label = <span className="p-menuitem-text">{this.props.menuitem.label}</span>;

        return (
            <li className="p-menuitem" role="none">
                <a href={this.props.menuitem.url || '#'} role="menuitem" className={className} target={this.props.menuitem.target} onClick={this.onClick}>
                    {icon}
                    {label}
                </a>
            </li>
        );
    }
}
