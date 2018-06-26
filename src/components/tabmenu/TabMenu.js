import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class TabMenu extends Component {

    static defaultProps = {
        id: null,
        model: null,
        activeItem: null,
        style: null,
        className: null,
        onTabChange: null
    };

    static propTypes = {
        id: PropTypes.string,
        model: PropTypes.array.isRequired,
        activeItem: PropTypes.any.isRequired,
        style: PropTypes.any,
        className: PropTypes.string,
        onTabChange: PropTypes.func.isRequired
    };

    itemClick(event, item) {
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

        this.props.onTabChange({
            originalEvent: event,
            value: item
        });
    }

    renderMenuItem(item, index) {
        const className = classNames('ui-tabmenuitem ui-state-default ui-corner-top', {'ui-state-active': this.props.activeItem ? this.props.activeItem === item : index === 0});
        const iconClassName = classNames(item.icon, 'ui-menuitem-icon');
        const icon = item.icon ? <span className={iconClassName}></span>: null;

        return (
            <li key={item.label + '_' + index} className={className}>
                 <a href={item.url||'#'} className="ui-menuitem-link ui-corner-all" target={item.target} onClick={(event) => this.itemClick(event, item)}>
                    {icon}
                    <span className="ui-menuitem-text">{item.label}</span>
                </a>
            </li>
        );
    }

    renderItems() {
        return (
            this.props.model.map((item, index) => {
                return this.renderMenuItem(item, index);
            })
        );
    }

    render() {
        if (this.props.model) {
            const className = classNames('ui-tabmenu ui-widget ui-widget-content ui-corner-all', this.props.className);
            const items = this.renderItems();

            return (
                <div id={this.props.id} className={className} style={this.props.style}>
                    <ul className="ui-tabmenu-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all" role="tablist">
                        {items}
                    </ul>
                </div>
            );
        }
        else {
            return null;
        }
    }
}