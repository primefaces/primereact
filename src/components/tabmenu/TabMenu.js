import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils/ClassNames';
import DomHandler from '../utils/DomHandler';
import ObjectUtils from '../utils/ObjectUtils';
import { Ripple } from '../ripple/Ripple';

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

    getActiveItem() {
        return this.props.onTabChange ? this.props.activeItem : this.state.activeItem;
    }

    getActiveIndex() {
        const activeItem = this.getActiveItem();
        if (this.props.model) {
            for (let i = 0; i < this.props.model.length; i++) {
                if (activeItem === this.props.model[i]) {
                    return i;
                }
            }
        }

        return null;
    }

    updateInkBar() {
        const activeIndex = this.getActiveIndex();
        const tabHeader = this[`tab_${activeIndex}`];

        this.inkbar.style.width = DomHandler.getWidth(tabHeader) + 'px';
        this.inkbar.style.left =  DomHandler.getOffset(tabHeader).left - DomHandler.getOffset(this.nav).left + 'px';
    }

    componentDidMount() {
        this.updateInkBar();
    }

    componentDidUpdate() {
        this.updateInkBar();
    }

    renderMenuItem(item, index) {
        const activeItem = this.getActiveItem();
        const active = activeItem ? activeItem === item : index === 0;
        const className = classNames('p-tabmenuitem', {
            'p-highlight': active,
            'p-disabled': item.disabled
        }, item.className);
        const iconClassName = classNames('p-menuitem-icon', item.icon);
        const icon = item.icon && <span className={iconClassName}></span>;
        const label = item.label && <span className="p-menuitem-text">{item.label}</span>;
        let content = (
            <a href={item.url||'#'} className="p-menuitem-link" target={item.target} onClick={(event) => this.itemClick(event, item)} role="presentation">
                {icon}
                {label}
                <Ripple />
            </a>
        );

        if (item.template) {
            const defaultContentOptions = {
                onClick: (event) => this.itemClick(event, item),
                className: 'p-menuitem-link',
                labelClassName: 'p-menuitem-text',
                iconClassName,
                element: content,
                props: this.props,
                active
            };

            content = ObjectUtils.getJSXElement(item.template, item, defaultContentOptions);
        }

        return (
            <li ref={(el) => this[`tab_${index}`] = el} key={item.label + '_' + index} className={className} style={item.style} role="tab" aria-selected={active} aria-expanded={active}>
                {content}
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
                    <ul ref={(el) => this.nav = el} className="p-tabmenu-nav p-reset" role="tablist">
                        {items}
                        <li ref={(el) => this.inkbar = el} className="p-tabmenu-ink-bar"></li>
                    </ul>
                </div>
            );
        }

        return null;
    }
}
