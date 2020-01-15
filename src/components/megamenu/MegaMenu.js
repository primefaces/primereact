import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DomHandler from '../utils/DomHandler';

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
        var nextItem = this.findNextItem(listItem);
        if (nextItem) {
            nextItem.children[0].focus();
        }
    }

    navigateToPrevItem(listItem) {
        var prevItem = this.findPrevItem(listItem);
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
                columnClass= 'p-col-6';
            break;

            case 3:
                columnClass= 'p-col-4';
            break;

            case 4:
                columnClass= 'p-col-3';
            break;

            case 6:
                columnClass= 'p-col-2';
            break;

            default:
                columnClass= 'p-col-12';
            break;
        }

        return columnClass;
    }

    renderSeparator(index) {
        return (
            <li key={'separator_' + index} className="p-menu-separator"></li>
        );
    }

    renderSubmenuIcon(item) {
        if (item.items) {
            const className = classNames('p-submenu-icon pi pi-fw', {'pi-caret-down': this.isHorizontal(),'pi-caret-right': this.isVertical()});

            return (
                <span className={className}></span>
            );
        }
        else {
            return null;
        }
    }

    renderSubmenuItem(item, index) {
        if (item.separator) {
            return (
                <li key={'separator_' + index} className="p-menu-separator" role="separator"></li>
            );
        }
        else {
            const className = classNames('p-menuitem', item.className, {'p-disabled': item.disabled});
            const iconClassName = classNames(item.icon, 'p-menuitem-icon');
            const icon = item.icon ? <span className={iconClassName}></span>: null;

            return (
                <li key={item.label + '_' + index} className={className} style={item.style} role="none">
                    <a href={item.url || '#'} className="p-menuitem-link" target={item.target} onClick={(event) => this.onLeafClick(event, item)} role="menuitem">
                        {icon}
                        <span className="p-menuitem-text">{item.label}</span>
                    </a>
                </li>
            );
        }
    }

    renderSubmenu(submenu) {
        const className = classNames('p-megamenu-submenu-header', submenu.className, {'p-disabled': submenu.disabled});
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
        else {
            return null;
        }
    }

    renderCategoryPanel(category) {
        if (category.items) {
            const columns = this.renderColumns(category);

            return (
                <div className="p-megamenu-panel">
                    <div className="p-grid">
                        {columns}
                    </div>
                </div>
            );
        }
        else {
            return null;
        }
    }

    renderCategory(category, index) {
        const className = classNames('p-menuitem', {'p-menuitem-active': category === this.state.activeItem, 'p-disabled': category.disabled}, category.className);
        const iconClassName = classNames(category.icon, 'p-menuitem-icon');
        const icon = category.icon ? <span className={iconClassName}></span>: null;
        const submenuIcon = this.renderSubmenuIcon(category);
        const panel = this.renderCategoryPanel(category);

        return (
            <li key={category.label + '_' + index} className={className} style={category.style} onMouseEnter={e => this.onCategoryMouseEnter(e, category)} role="none">
                <a href={category.url || '#'} className="p-menuitem-link" target={category.target} onClick={e => this.onCategoryClick(e, category)} onKeyDown={e => this.onCategoryKeyDown(e, category)}
                   role="menuitem" aria-haspopup={category.items != null}>
                    {icon}
                    <span className="p-menuitem-text">{category.label}</span>
                    {submenuIcon}
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
        else {
            return null;
        }
    }

    renderCustomContent() {
        if(this.props.children) {
            return (
                <div className="p-megamenu-custom">
                    {this.props.children}
                </div>
            );
        }
        else {
            return null;
        }
    }

    render() {
        const className = classNames('p-megamenu p-component',
                {'p-megamenu-horizontal': this.props.orientation === 'horizontal',
                'p-megamenu-vertical': this.props.orientation === 'vertical'}, this.props.className);
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
