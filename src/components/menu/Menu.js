import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DomHandler from '../utils/DomHandler';
import classNames from 'classnames';

export class Menu extends Component {

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
        this.onMenuClick = this.onMenuClick.bind(this);
    }

    onMenuClick() {
        if (this.documentClickListener) {
            this.selfClick = true;
        }
    }

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

        if (this.props.popup) {
            this.hide(event);
        }
    }

    toggle(event) {
        if (this.props.popup) {
            if (this.documentClickListener) {
                this.selfClick = true;
            }
    
            if (this.container.offsetParent)
                this.hide(event);
            else
                this.show(event);
        }
    }

    show(event) {
        this.container.style.zIndex = String(this.props.baseZIndex + DomHandler.generateZIndex());
        this.container.style.display = 'block';

        setTimeout(() => {
            DomHandler.addClass(this.container, 'ui-menu-overlay-visible');
            DomHandler.removeClass(this.container, 'ui-menu-overlay-hidden');
        }, 1);

        DomHandler.absolutePosition(this.container,  event.currentTarget);
        this.bindDocumentListeners();
        
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

        this.unbindDocumentListeners();
        this.selfClick = false;
    }

    bindDocumentListeners() {
        if (!this.documentClickListener) {
            this.documentClickListener = (event) => {
                if (this.selfClick)
                    this.selfClick = false;
                else
                    this.hide(event);
            };

            document.addEventListener('click', this.documentClickListener);
        }

        if (!this.documentResizeListener) {
            this.documentResizeListener = (event) => {
                if(this.container.offsetParent) {
                    this.hide(event);
                }
            };

            window.addEventListener('resize', this.documentResizeListener);
        }
    }

    unbindDocumentListeners() {
        if(this.documentClickListener) {
            document.removeEventListener('click', this.documentClickListener);
            this.documentClickListener = null;
        }

        if(this.documentResizeListener) {
            window.removeEventListener('resize', this.documentResizeListener);
            this.documentResizeListener = null;
        }
    }

    componentWillUnmount() {
        this.unbindDocumentListeners();
    }

    renderSubmenu(submenu, index) {
        const className = classNames('ui-submenu-header ui-widget-header ui-corner-all', submenu.className,  {'ui-state-disabled': submenu.disabled});
        const items = submenu.items.map((item, index)=> {
            return this.renderMenuitem(item, index);
        });

        return (
            <React.Fragment key={submenu.label + '_' + index}>
                <li className={className} style={submenu.style}>{submenu.label}</li>
                {items}
            </React.Fragment>
        );
    }

    renderSeparator(index) {
        return (
            <li key={'separator_' + index} className="ui-menu-separator ui-widget-content"></li>
        );
    }

    renderMenuitem(item, index) {
        const className = classNames('ui-menuitem ui-widget ui-corner-all', item.className, {'ui-state-disabled': item.disabled});
        const iconClassName = classNames(item.icon, 'ui-menuitem-icon');
        const icon = item.icon ? <span className={iconClassName}></span>: null;

        return (
            <li key={item.label + '_' + index} className={className} style={item.style}>
                <a href={item.url||'#'} className="ui-menuitem-link ui-corner-all" target={item.target} onClick={(event) => this.itemClick(event, item)}>
                    {icon}
                    <span className="ui-menuitem-text">{item.label}</span>
                </a>
            </li>
        );
    }

    renderItem(item, index) {
        if (item.separator) {
            return this.renderSeparator(index);
        }
        else {
            if (item.items)
                return this.renderSubmenu(item, index);
            else
                return this.renderMenuitem(item, index);
        }
    }

    renderMenu() {
        return (
            this.props.model.map((item, index) => {
                return this.renderItem(item, index);
            })
        );
    }
  
    render() {
        if (this.props.model) {
            const className = classNames('ui-menu ui-widget ui-widget-content ui-corner-all ui-helper-clearfix', this.props.className, {'ui-menu-dynamic ui-menu-overlay ui-shadow': this.props.popup});
            const menuitems = this.renderMenu();

            return (
                <div id={this.props.id} className={className} style={this.props.style} ref={el => this.container = el} onClick={this.onMenuClick}>
                    <ul className="ui-menu-list ui-helper-reset">
                        {menuitems}
                    </ul>
                </div>
            );
        }
        else {
            return null;
        }
    }
}