import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils/ClassNames';
import DomHandler from '../utils/DomHandler';
import { Ripple } from '../ripple/Ripple';
import ObjectUtils from '../utils/ObjectUtils';

export class MegaMenu extends Component {

    static defaultProps = {
        id: null,
        model: null,
        style: null,
        className: null,
        orientation: 'horizontal'
    };

    static propTypes = {
        id: PropTypes.string,
        model: PropTypes.array,
        style: PropTypes.object,
        className: PropTypes.string,
        orientation: PropTypes.string
    };

    constructor(props) {
        super(props);
        this.state = {
            activeItem: null
        }
        this.onLeafClick = this.onLeafClick.bind(this);
    }

    onLeafClick(event, item) {
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

        this.setState({
            activeItem: null
        });
    }

    onCategoryMouseEnter(event, item) {
        if (item.disabled) {
            event.preventDefault();
            return;
        }

        if (this.state.activeItem) {
            this.setState({
                activeItem: item
            });
        }
    }

    onCategoryClick(event, item) {
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
                item: this.props.item
            });
        }

        if (item.items) {
            if (this.state.activeItem && this.state.activeItem === item) {
                this.setState({
                    activeItem: null
                });
            }
            else {
                this.setState({
                    activeItem: item
                });
            }
        }

        event.preventDefault();
    }

    onCategoryKeyDown(event, item) {
        let listItem = event.currentTarget.parentElement;

        switch(event.which) {
            //down
            case 40:
                if (this.isHorizontal())
                    this.expandMenu(item);
                else
                    this.navigateToNextItem(listItem);

                event.preventDefault();
            break;

            //up
            case 38:
                if (this.isVertical())
                    this.navigateToPrevItem(listItem);
                else if (item.items && item === this.state.activeItem)
                    this.collapseMenu();

                event.preventDefault();
            break;

            //right
            case 39:
                if (this.isHorizontal())
                    this.navigateToNextItem(listItem);
                else
                    this.expandMenu(item);

                event.preventDefault()
            break;

            //left
            case 37:
                if (this.isHorizontal())
                    this.navigateToPrevItem(listItem);
                else if (item.items && item === this.state.activeItem)
                    this.collapseMenu();

                event.preventDefault();
            break;

            default:
            break;
        }
    }

    expandMenu(item) {
        if (item.items) {
            this.setState({
                activeItem: item
            });
        }
    }

    collapseMenu(item) {
        this.setState({
            activeItem: null
        });
    }

    findNextItem(item) {
        let nextItem = item.nextElementSibling;

        if (nextItem)
            return DomHandler.hasClass(nextItem, 'p-disabled') || !DomHandler.hasClass(nextItem, 'p-menuitem') ? this.findNextItem(nextItem) : nextItem;
        else
            return null;
    }

    findPrevItem(item) {
        let prevItem = item.previousElementSibling;

        if (prevItem)
            return DomHandler.hasClass(prevItem, 'p-disabled') || !DomHandler.hasClass(prevItem, 'p-menuitem') ? this.findPrevItem(prevItem) : prevItem;
        else
            return null;
    }

    navigateToNextItem(listItem) {
        let nextItem = this.findNextItem(listItem);
        if (nextItem) {
            nextItem.children[0].focus();
        }
    }

    navigateToPrevItem(listItem) {
        let prevItem = this.findPrevItem(listItem);
        if (prevItem) {
            prevItem.children[0].focus();
        }
    }

    isHorizontal() {
        return this.props.orientation === 'horizontal';
    }

    isVertical() {
        return this.props.orientation === 'vertical';
    }

    getColumnClassName(category) {
        let length = category.items ? category.items.length: 0;
        let columnClass;

        switch(length) {
            case 2:
                columnClass= 'p-megamenu-col-6';
            break;

            case 3:
                columnClass= 'p-megamenu-col-4';
            break;

            case 4:
                columnClass= 'p-megamenu-col-3';
            break;

            case 6:
                columnClass= 'p-megamenu-col-2';
            break;

            default:
                columnClass= 'p-megamenu-col-12';
            break;
        }

        return columnClass;
    }

    componentDidMount() {
        if (!this.documentClickListener) {
            this.documentClickListener = (event) => {
                if (this.container && !this.container.contains(event.target)) {
                    this.setState({activeItem: null});
                }
            };

            document.addEventListener('click', this.documentClickListener);
        }
    }

    componentWillUnmount() {
        if (this.documentClickListener) {
            document.removeEventListener('click', this.documentClickListener);
            this.documentClickListener = null;
        }
    }

    renderSeparator(index) {
        return (
            <li key={'separator_' + index} className="p-menu-separator" role="separator"></li>
        );
    }

    renderSubmenuIcon(item) {
        if (item.items) {
            const className = classNames('p-submenu-icon pi', {'pi-angle-down': this.isHorizontal(), 'pi-angle-right': this.isVertical()});

            return (
                <span className={className}></span>
            );
        }

        return null;
    }

    renderSubmenuItem(item, index) {
        if (item.separator) {
            return this.renderSeparator(index);
        }
        else {
            const className = classNames('p-menuitem', item.className);
            const linkClassName = classNames('p-menuitem-link', {'p-disabled': item.disabled});
            const iconClassName = classNames(item.icon, 'p-menuitem-icon');
            const icon = item.icon && <span className={iconClassName}></span>;
            const label = item.label && <span className="p-menuitem-text">{item.label}</span>;
            let content = (
                <a href={item.url || '#'} className={linkClassName} target={item.target} onClick={(event) => this.onLeafClick(event, item)} role="menuitem">
                    {icon}
                    {label}
                    <Ripple />
                </a>
            );

            if (item.template) {
                const defaultContentOptions = {
                    onClick: (event) => this.onLeafClick(event, item),
                    className: linkClassName,
                    labelClassName: 'p-menuitem-text',
                    iconClassName,
                    element: content,
                    props: this.props
                };

                content = ObjectUtils.getJSXElement(item.template, item, defaultContentOptions);
            }

            return (
                <li key={item.label + '_' + index} className={className} style={item.style} role="none">
                    {content}
                </li>
            );
        }
    }

    renderSubmenu(submenu) {
        const className = classNames('p-megamenu-submenu-header', {'p-disabled': submenu.disabled}, submenu.className);
        const items = submenu.items.map((item, index) => {
            return this.renderSubmenuItem(item, index);
        });

        return (
            <React.Fragment key={submenu.label}>
                <li className={className} style={submenu.style} role="presentation">{submenu.label}</li>
                {items}
            </React.Fragment>
        );
    }

    renderSubmenus(column) {
        return (
            column.map((submenu, index) => {
                return this.renderSubmenu(submenu, index);
            })
        );
    }

    renderColumn(category, column, index, columnClassName) {
        const submenus = this.renderSubmenus(column);

        return (
            <div key={category.label + '_column_' + index} className={columnClassName}>
                <ul className="p-megamenu-submenu" role="menu">
                    {submenus}
                </ul>
            </div>
        );
    }

    renderColumns(category) {
        if (category.items) {
            const columnClassName = this.getColumnClassName(category);

            return (
                category.items.map((column, index) => {
                    return this.renderColumn(category, column, index, columnClassName);
                })
            );
        }

        return null;
    }

    renderCategoryPanel(category) {
        if (category.items) {
            const columns = this.renderColumns(category);

            return (
                <div className="p-megamenu-panel">
                    <div className="p-megamenu-grid">
                        {columns}
                    </div>
                </div>
            );
        }

        return null;
    }

    renderCategory(category, index) {
        const className = classNames('p-menuitem', {'p-menuitem-active': category === this.state.activeItem}, category.className);
        const linkClassName = classNames('p-menuitem-link', {'p-disabled': category.disabled});
        const iconClassName = classNames('p-menuitem-icon', category.icon);
        const icon = category.icon && <span className={iconClassName}></span>;
        const label = category.label && <span className="p-menuitem-text">{category.label}</span>;
        const itemContent = category.template ? ObjectUtils.getJSXElement(category.template, category) : null;
        const submenuIcon = this.renderSubmenuIcon(category);
        const panel = this.renderCategoryPanel(category);

        return (
            <li key={category.label + '_' + index} className={className} style={category.style} onMouseEnter={e => this.onCategoryMouseEnter(e, category)} role="none">
                <a href={category.url || '#'} className={linkClassName} target={category.target} onClick={e => this.onCategoryClick(e, category)} onKeyDown={e => this.onCategoryKeyDown(e, category)}
                   role="menuitem" aria-haspopup={category.items != null}>
                    {icon}
                    {label}
                    {itemContent}
                    {submenuIcon}
                    <Ripple />
                </a>
                {panel}
            </li>
        );
    }

    renderMenu() {
        if (this.props.model) {
            return (
                this.props.model.map((item, index) => {
                    return this.renderCategory(item, index, true);
                })
            );
        }

        return null;
    }

    renderCustomContent() {
        if(this.props.children) {
            return (
                <div className="p-megamenu-custom">
                    {this.props.children}
                </div>
            );
        }

        return null;
    }

    render() {
        const className = classNames('p-megamenu p-component', {
            'p-megamenu-horizontal': this.props.orientation === 'horizontal',
            'p-megamenu-vertical': this.props.orientation === 'vertical'
        }, this.props.className);
        const menu = this.renderMenu();
        const customContent = this.renderCustomContent();

        return (
            <div ref={el => this.container = el} id={this.props.id} className={className} style={this.props.style}>
                <ul className="p-megamenu-root-list" role="menubar">
                    {menu}
                </ul>
                {customContent}
            </div>
        );
    }
}
