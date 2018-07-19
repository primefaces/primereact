import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DomHandler from '../utils/DomHandler';

class TieredMenuSub extends Component {

    static defaultProps = {
        model: null,
        root: false,
        className: null,
        popup: false,
        resetMenu: false,
        onLeafClick: null
    };

    static propTypes = {
        model: PropTypes.any,
        root: PropTypes.bool,
        className: PropTypes.string,
        popup: PropTypes.bool,
        resetMenu: PropTypes.bool,
        onLeafClick: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {
            activeItem : null
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.resetMenu === true) {
            return {
                activeItem: null
            }
        }

        return null;
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
        }

        if (!item.items) {
            this.props.onLeafClick(event);
        }
    }

    renderSeparator(index) {
        return (
            <li key={'separator_' + index} className="ui-menu-separator ui-widget-content"></li>
        );
    }
    
    renderIcon(item) {
        const className = classNames('ui-menuitem-icon', item.icon);
        
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
        if (item.items) {
            return (
                <span className="ui-submenu-icon pi pi-fw pi-caret-right"></span>
            );
        }
        else {
            return null;
        }
    }

    renderSubmenu(item) {
        if(item.items) {
            return (
                <TieredMenuSub model={item.items} resetMenu={item !== this.state.activeItem} onLeafClick={this.props.onLeafClick} popup={this.props.popup} />
            );
        }
        else {
            return null;
        }
    }

    renderMenuitem(item, index) {
        const className = classNames('ui-menuitem ui-widget ui-corner-all', {'ui-menuitem-active': this.state.activeItem === item, 'ui-state-disabled': item.disabled}, item.className);
        const icon = this.renderIcon(item);
        const submenuIcon = this.renderSubmenuIcon(item);
        const submenu = this.renderSubmenu(item);

        return (
            <li key={item.label + '_' + index} className={className} style={item.style} onMouseEnter={(event) => this.onItemMouseEnter(event, item)}>
                <a href={item.url || '#'} className="ui-menuitem-link ui-corner-all" target={item.target} onClick={(event) => this.onItemClick(event, item, index)}>
                    {icon}
                    <span className="ui-menuitem-text">{item.label}</span>
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
        const className = classNames({'ui-widget-content ui-corner-all ui-shadow ui-submenu-list': !this.props.root});
        const submenu = this.renderMenu();

        return (
            <ul className={className}>
                {submenu}
            </ul>
        );   
    }
 }

export class TieredMenu extends Component {

    static defaultProps = {
        id: null,
        model: null,
        popup: false,
        style: null,
        className: null,
        autoZIndex: true,
        baseZIndex: 0,
        onShow: null,
        onHide: null
    };

    static propTypes = {
        id: PropTypes.string,
        model: PropTypes.array,
        popup: PropTypes.bool,
        style: PropTypes.object,
        className: PropTypes.string,
        autoZIndex: PropTypes.bool,
        baseZIndex: PropTypes.number,
        onShow: PropTypes.func,
        onHide: PropTypes.func
    };

    constructor(props) {
        super();
        this.state = {
            resetMenu: false
        }
        this.onMenuClick = this.onMenuClick.bind(this);
        this.onLeafClick = this.onLeafClick.bind(this);
        this.onMenuMouseEnter = this.onMenuMouseEnter.bind(this);
    }

    componentDidMount() {
        this.bindDocumentClickListener();
    }

    toggle(event) {
        if (this.props.popup) {
            this.targetClick = true;

            this.setState({
                resetMenu: true
            });

            if (this.container.offsetParent)
                this.hide(event);
            else
                this.show(event);
        }
    }

    onMenuClick() {
        this.selfClick = true;

        this.setState({
            resetMenu: false
        });

        if (!this.props.popup && this.props.autoZIndex) {
            this.container.style.zIndex = String(this.props.baseZIndex + DomHandler.generateZIndex());
        }
    }

    onMenuMouseEnter() {
        this.setState({
            resetMenu: false
        });
    }

    show(event) {
        if (this.props.autoZIndex) {
            this.container.style.zIndex = String(this.props.baseZIndex + DomHandler.generateZIndex());
        }
        this.container.style.display = 'block';
        
        setTimeout(() => {
            DomHandler.addClass(this.container, 'ui-menu-overlay-visible');
            DomHandler.removeClass(this.container, 'ui-menu-overlay-hidden');
        }, 1);

        DomHandler.absolutePosition(this.container,  event.currentTarget);
        this.bindDocumentResizeListener();
        
        if (this.props.onShow) {
            this.props.onShow(event);
        }
    }

    hide(event) {
        if (this.container) {
            DomHandler.addClass(this.container, 'ui-menu-overlay-hidden');
            DomHandler.removeClass(this.container, 'ui-menu-overlay-visible');

            setTimeout(() => {
                if (this.container) {
                    this.container.style.display = 'none';
                    DomHandler.removeClass(this.container, 'ui-menu-overlay-hidden');
                }
            }, 150);
        }
            
        if (this.props.onHide) {
            this.props.onHide(event);
        }

        this.unbindDocumentResizeListener();
    }

    bindDocumentClickListener() {
        if (!this.documentClickListener) {
            this.documentClickListener = (event) => {
                if (!this.targetClick && !this.selfClick) {
                    if (this.props.popup) {
                        this.hide(event);
                    }
                    
                    this.setState({
                        resetMenu: true
                    });
                }

                this.selfClick = false;
                this.targetClick = false;
            };

            document.addEventListener('click', this.documentClickListener);
        }
    }

    onLeafClick(event) {
        this.setState({
            resetMenu: true
        });

        event.stopPropagation();
    }

    bindDocumentResizeListener() {
        if (!this.documentResizeListener) {
            this.documentResizeListener = (event) => {
                if(this.container.offsetParent) {
                    this.hide(event);
                }
            };

            window.addEventListener('resize', this.documentResizeListener);
        }
    }

    unbindDocumentClickListener() {
        if(this.documentClickListener) {
            document.removeEventListener('click', this.documentClickListener);
            this.documentClickListener = null;
        }
    }

    unbindDocumentResizeListener() {
        if(this.documentResizeListener) {
            window.removeEventListener('resize', this.documentResizeListener);
            this.documentResizeListener = null;
        }
    }

    componentWillUnmount() {
        this.unbindDocumentClickListener();
        this.unbindDocumentResizeListener();
    }

    render() {
        const className = classNames('ui-tieredmenu ui-widget ui-widget-content ui-corner-all', {'ui-tieredmenu-dynamic ui-menu-overlay ui-shadow': this.props.popup}, this.props.className);

        return(
            <div id={this.props.id} className={className} style={this.props.style} ref={el => this.container = el} onClick={this.onMenuClick} onMouseEnter={this.onMenuMouseEnter}>
                <TieredMenuSub model={this.props.model} root={true} resetMenu={this.state.resetMenu} onLeafClick={this.onLeafClick} popup={this.props.popup} />
            </div>
        );
    }
}