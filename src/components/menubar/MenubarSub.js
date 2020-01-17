import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DomHandler from '../utils/DomHandler';

export class MenubarSub extends Component {

    static defaultProps = {
        model: null,
        root: false,
        className: null,
        popup: false,
        onLeafClick: null,
        onKeyDown: null,
        parentActive: false
    };

    static propTypes = {
        model: PropTypes.any,
        root: PropTypes.bool,
        className: PropTypes.string,
        popup: PropTypes.bool,
        onLeafClick: PropTypes.func,
        onKeyDown: PropTypes.func,
        parentActive: PropTypes.bool
    };

    constructor(props) {
        super(props);
        this.state = {
            activeItem: null
        };

        this.onLeafClick = this.onLeafClick.bind(this);
        this.onChildItemKeyDown = this.onChildItemKeyDown.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.parentActive && !this.props.parentActive) {
            this.setState({
                activeItem: null
            });
        }
    }

    componentDidMount() {
        if (!this.documentClickListener) {
            this.documentClickListener = (event) => {
                if (this.element && !this.element.contains(event.target)) {
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

    onItemMouseEnter(event, item) {
        if (item.disabled) {
            event.preventDefault();
            return;
        }

        if (this.props.root) {
            if (this.state.activeItem || this.props.popup) {
                this.setState({
                    activeItem: item
                });
            }
        }
        else {
            this.setState({
                activeItem: item
            });
        }
    }

    onItemClick(event, item) {
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

        if (this.props.root) {
            if (item.items) {
                if (this.state.activeItem && item === this.state.activeItem) {
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
        }

        if (!item.items) {
            this.onLeafClick();
        }
    }

    onItemKeyDown(event, item) {
        let listItem = event.currentTarget.parentElement;

        switch(event.which) {
            //down
            case 40:
                if (this.props.root) {
                    if (item.items) {
                        this.expandSubmenu(item, listItem);
                    }
                }
                else {
                    this.navigateToNextItem(listItem);
                }

                event.preventDefault();
            break;

            //up
            case 38:
                if (!this.props.root) {
                    this.navigateToPrevItem(listItem);
                }

                event.preventDefault();
            break;

            //right
            case 39:
                if (this.props.root) {
                    var nextItem = this.findNextItem(listItem);
                    if (nextItem) {
                        nextItem.children[0].focus();
                    }
                }
                else {
                    if (item.items) {
                        this.expandSubmenu(item, listItem);
                    }
                }

                event.preventDefault();
            break;

            //left
            case 37:
                if (this.props.root) {
                    this.navigateToPrevItem(listItem);
                }

                event.preventDefault();
            break;

            default:
            break;
        }

        if (this.props.onKeyDown) {
            this.props.onKeyDown(event, listItem);
        }
    }

    onChildItemKeyDown(event, childListItem) {
        if (this.props.root) {
            //up
            if (event.which === 38 && childListItem.previousElementSibling == null) {
                this.collapseMenu(childListItem);
            }
        }
        else {
            //left
            if (event.which === 37) {
                this.collapseMenu(childListItem);
            }
        }
    }

    expandSubmenu(item, listItem) {
        this.setState({
            activeItem: item
        });

        setTimeout(() => {
            listItem.children[1].children[0].children[0].focus();
        }, 50);
    }

    collapseMenu(listItem) {
        this.setState({activeItem: null});
        listItem.parentElement.previousElementSibling.focus();
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

    onLeafClick() {
        this.setState({
            activeItem: null
        });

        if (this.props.onLeafClick) {
            this.props.onLeafClick();
        }
    }

    renderSeparator(index) {
        return (
            <li key={'separator_' + index} className="p-menu-separator" role="separator"></li>
        );
    }

    renderIcon(item) {
        const className = classNames('p-menuitem-icon', item.icon);

        if (item.icon) {
            return (
                <span className={className}></span>
            );
        }
        else {
            return null;
        }
    }

    renderSubmenuIcon(item) {
        const icon = classNames('p-submenu-icon pi pi-fw', {'pi-caret-down': this.props.root, 'pi-caret-right': !this.props.root});

        if (item.items) {
            return (
                <span className={icon}></span>
            );
        }
        else {
            return null;
        }
    }

    renderSubmenu(item) {
        if(item.items) {
            return (
                <MenubarSub model={item.items} onLeafClick={this.onLeafClick} onKeyDown={this.onChildItemKeyDown} parentActive={item === this.state.activeItem} />
            );
        }
        else {
            return null;
        }
    }

    renderMenuitem(item, index) {
        const className = classNames('p-menuitem', {'p-menuitem-active': this.state.activeItem === item, 'p-disabled': item.disabled}, item.className);
        const icon = this.renderIcon(item);
        const submenuIcon = this.renderSubmenuIcon(item);
        const submenu = this.renderSubmenu(item);

        return (
            <li key={item.label + '_' + index} role="none" className={className} style={item.style} onMouseEnter={(event) => this.onItemMouseEnter(event, item)}>
                <a href={item.url || '#'} role="menuitem" className="p-menuitem-link" target={item.target} aria-haspopup={item.items != null}
                    onClick={(event) => this.onItemClick(event, item)} onKeyDown={(event) => this.onItemKeyDown(event, item)}>
                    {icon}
                    <span className="p-menuitem-text">{item.label}</span>
                    {submenuIcon}
                </a>
                {submenu}
            </li>
        );
    }

    renderItem(item, index) {
        if (item.separator)
            return this.renderSeparator(index);
        else
            return this.renderMenuitem(item, index);
    }

    renderMenu() {
        if (this.props.model) {
            return (
                this.props.model.map((item, index) => {
                    return this.renderItem(item, index);
                })
            );
        }
        else {
            return null;
        }
    }

    render() {
        const className = classNames({'p-submenu-list': !this.props.root, 'p-menubar-root-list': this.props.root});
        const submenu = this.renderMenu();

        return (
            <ul ref={el => this.element = el} className={className} role={this.props.root ? 'menubar' : 'menu'}>
                {submenu}
            </ul>
        );
    }
}
