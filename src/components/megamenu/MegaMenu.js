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
        orientation: 'horizontal',
        autoZIndex: true,
        baseZIndex: 0
    };

    static propTypes = {
        id: PropTypes.string,
        model: PropTypes.array,
        style: PropTypes.object,
        className: PropTypes.string,
        orientation: PropTypes.string,
        autoZIndex: PropTypes.bool,
        baseZIndex: PropTypes.number
    };

    constructor(props) {
        super();
        this.state = {
            activeItem: null
        }
        this.onMenuClick = this.onMenuClick.bind(this);
        this.onLeafClick = this.onLeafClick.bind(this);
    }

    componentDidMount() {
        this.bindDocumentClickListener();
    }

    onMenuClick() {
        this.selfClick = true;

        if (this.props.autoZIndex) {
            this.container.style.zIndex = String(this.props.baseZIndex + DomHandler.generateZIndex());
        }
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

    bindDocumentClickListener() {
        if (!this.documentClickListener) {
            this.documentClickListener = (event) => {
                if (!this.selfClick) {                    
                    this.setState({
                        activeItem: null
                    });
                }

                this.selfClick = false;
            };

            document.addEventListener('click', this.documentClickListener);
        }
    }

    unbindDocumentClickListener() {
        if(this.documentClickListener) {
            document.removeEventListener('click', this.documentClickListener);
            this.documentClickListener = null;
        }
    }

    componentWillUnmount() {
        this.unbindDocumentClickListener();
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
            if (this.state.activeItem) {
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

    getColumnClassName(category) {
        let length = category.items ? category.items.length: 0;
        let columnClass;

        switch(length) {
            case 2:
                columnClass= 'ui-g-6';
            break;
            
            case 3:
                columnClass= 'ui-g-4';
            break;
            
            case 4:
                columnClass= 'ui-g-3';
            break;
            
            case 6:
                columnClass= 'ui-g-2';
            break;
                        
            default:
                columnClass= 'ui-g-12';
            break;
        }
        
        return columnClass;
    }

    renderSeparator(index) {
        return (
            <li key={'separator_' + index} className="ui-menu-separator ui-widget-content"></li>
        );
    }

    renderSubmenuIcon(item) {
        if (item.items) {
            const className = classNames('ui-submenu-icon pi pi-fw', {'pi-caret-down': this.props.orientation === 'horizontal','pi-caret-right': this.props.orientation === 'vertical'});
            
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
                <li key={'separator_' + index} className="ui-menu-separator ui-widget-content"></li>
            );
        }
        else {
            const className = classNames('ui-menuitem ui-corner-all', item.className, {'ui-state-disabled': item.disabled});
            const iconClassName = classNames(item.icon, 'ui-menuitem-icon');
            const icon = item.icon ? <span className={iconClassName}></span>: null;

            return (
                <li key={item.label + '_' + index} className={className} style={item.style}>
                    <a href={item.url || '#'} className="ui-menuitem-link ui-corner-all" target={item.target} onClick={(event) => this.onLeafClick(event, item)}>
                        {icon}
                        <span className="ui-menuitem-text">{item.label}</span>
                    </a>
                </li>
            );
        }
    }

    renderSubmenu(submenu) {
        const className = classNames('ui-widget-header ui-megamenu-submenu-header ui-corner-all', submenu.className, {'ui-state-disabled': submenu.disabled});
        const items = submenu.items.map((item, index) => {
            return this.renderSubmenuItem(item, index);
        });
        
        return (
            <React.Fragment key={submenu.label}>
                <li className={className} style={submenu.style}>{submenu.label}</li>
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
                <ul className="ui-megamenu-submenu">
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
                <div className="ui-megamenu-panel ui-widget-content ui-corner-all ui-shadow">
                    <div className="ui-g">
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
        const className = classNames('ui-menuitem ui-corner-all', {'ui-menuitem-active': category === this.state.activeItem, 'ui-state-disabled': category.disabled}, category.className);
        const iconClassName = classNames(category.icon, 'ui-menuitem-icon');
        const icon = category.icon ? <span className={iconClassName}></span>: null;
        const submenuIcon = this.renderSubmenuIcon(category);
        const panel = this.renderCategoryPanel(category);

        return (
            <li key={category.label + '_' + index} className={className} style={category.style} onMouseEnter={(event) => this.onCategoryMouseEnter(event, category)}>
                <a href={category.url || '#'} className="ui-menuitem-link ui-corner-all" target={category.target} onClick={(event) => this.onCategoryClick(event, category)}>
                    {icon}
                    <span className="ui-menuitem-text">{category.label}</span>
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
                <div className="ui-megamenu-custom">
                    {this.props.children}
                </div>
            );
        }
        else {
            return null;
        }
    }

    render() {
        const className = classNames('ui-megamenu ui-widget ui-widget-content ui-corner-all', 
                {'ui-megamenu-horizontal': this.props.orientation === 'horizontal', 'ui-megamenu-vertical': this.props.orientation === 'vertical'}, this.props.className);
        const menu = this.renderMenu();
        const customContent = this.renderCustomContent();

        return (
            <div id={this.props.id} className={className} style={this.props.style} onClick={this.onMenuClick} ref={el => this.container = el}>
                <ul className="ui-megamenu-root-list">
                    {menu}
                </ul>
                {customContent}
            </div>
        );
    }
}