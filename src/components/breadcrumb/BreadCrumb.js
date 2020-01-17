import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class BreadCrumb extends Component {

    static defaultProps = {
        id: null,
        model: null,
        home: null,
        style: null,
        className: null
    };

    static propTypes = {
        id: PropTypes.string,
        model: PropTypes.array,
        home: PropTypes.any,
        style: PropTypes.object,
        className: PropTypes.string
    };

    itemClick(event, item){
        if (item.disabled) {
            event.preventDefault();
            return;
        }

        if (!item.url) {
            event.preventDefault();
        }

        if (item.command) {
            item.command({
                originalEvent: event,
                item: item
            });
        }
    }

    renderHome() {
        if(this.props.home) {
            const className = classNames('p-breadcrumb-home', this.props.home.className,  {'p-disabled': this.props.home.disabled});

            return (
                <li className={className} style={this.props.home.style}>
                    <a href={this.props.home.url || '#'} className="p-menuitem-link" target={this.props.home.target} onClick={event => this.itemClick(event, this.props.home)}>
                        <span className={this.props.home.icon}></span>
                    </a>
                </li>
            );
        }
        else {
            return null;
        }
    }

    renderSeparator() {
        return (
            <li className="p-breadcrumb-chevron pi pi-chevron-right"></li>
        );
    }

    renderMenuitem(item, index) {
        const className = classNames(item.className, {'p-disabled': item.disabled});

        return (
            <li className={className} style={item.style}>
                <a href={item.url || '#'} className="p-menuitem-link" target={item.target} onClick={event => this.itemClick(event, item)}>
                    <span className="p-menuitem-text">{item.label}</span>
                </a>
            </li>
        );
    }

    renderMenuitems() {
        if (this.props.model) {
            const items = this.props.model.map((item, index)=> {
                const menuitem = this.renderMenuitem(item, index);
                const separator = (index === this.props.model.length - 1) ? null : this.renderSeparator();

                return (
                    <React.Fragment key={item.label + '_' + index}>
                        {menuitem}
                        {separator}
                    </React.Fragment>
                );
            });

            return items;
        }
        else {
            return null;
        }
    }

    render() {
        const className=classNames('p-breadcrumb p-component', this.props.className);
        const home = this.renderHome();
        const items = this.renderMenuitems();
        const separator = this.renderSeparator();

        return (
            <nav id={this.props.id} className={className} style={this.props.style} aria-label="Breadcrumb">
                <ul>
                    {home}
                    {separator}
                    {items}
                </ul>
            </nav>
        );
    }
}
