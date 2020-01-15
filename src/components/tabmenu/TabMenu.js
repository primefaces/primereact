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
        model: PropTypes.array,
        activeItem: PropTypes.any,
        style: PropTypes.any,
        className: PropTypes.string,
        onTabChange: PropTypes.func
    };

    constructor(props) {
        super(props);
        if (!this.props.onTabChange) {
            this.state = {
                activeItem: props.activeItem
            };
        }
    }

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

        if (this.props.onTabChange) {
            this.props.onTabChange({
                originalEvent: event,
                value: item
            });
        }
        else {
            this.setState({
                activeItem: item
            });
        }
    }

    renderMenuItem(item, index) {
        const activeItem = this.props.onTabChange ? this.props.activeItem : this.state.activeItem;
        const className = classNames('p-tabmenuitem', item.className, {'p-highlight': activeItem ? activeItem === item : index === 0, 'p-disabled': item.disabled});
        const iconClassName = classNames(item.icon, 'p-menuitem-icon');
        const icon = item.icon ? <span className={iconClassName}></span>: null;

        return (
            <li key={item.label + '_' + index} className={className} style={item.style} role="tab" aria-selected={activeItem ? activeItem === item : index === 0} aria-expanded={activeItem ? activeItem === item : index === 0}>
                 <a href={item.url||'#'} className="p-menuitem-link" target={item.target} onClick={(event) => this.itemClick(event, item)} role="presentation">
                    {icon}
                    <span className="p-menuitem-text">{item.label}</span>
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
            const className = classNames('p-tabmenu p-component', this.props.className);
            const items = this.renderItems();

            return (
                <div id={this.props.id} className={className} style={this.props.style}>
                    <ul className="p-tabmenu-nav p-reset" role="tablist">
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
