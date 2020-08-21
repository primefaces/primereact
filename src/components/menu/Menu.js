import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import DomHandler from '../utils/DomHandler';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';

export class Menu extends Component {

    static defaultProps = {
        id: null,
        model: null,
        popup: false,
        style: null,
        className: null,
        autoZIndex: true,
        baseZIndex: 0,
        appendTo: null,
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
        appendTo: PropTypes.any,
        onShow: PropTypes.func,
        onHide: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
            visible: !props.popup
        };

        this.onEnter = this.onEnter.bind(this);
        this.onEntered = this.onEntered.bind(this);
        this.onExit = this.onExit.bind(this);
    }

    onItemClick(event, item){
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

    onItemKeyDown(event, item) {
        let listItem = event.currentTarget.parentElement;

        switch(event.which) {
            //down
            case 40:
                var nextItem = this.findNextItem(listItem);
                if(nextItem) {
                    nextItem.children[0].focus();
                }

                event.preventDefault();
            break;

            //up
            case 38:
                var prevItem = this.findPrevItem(listItem);
                if(prevItem) {
                    prevItem.children[0].focus();
                }

                event.preventDefault();
            break;

            default:
            break;
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

    toggle(event) {
        if (this.props.popup) {
            if (this.state.visible)
                this.hide(event);
            else
                this.show(event);
        }
    }

    show(event) {
        this.target = event.currentTarget;
        let currentEvent = event;

        this.setState({ visible: true }, () => {
            if (this.props.onShow) {
                this.props.onShow(currentEvent);
            }
        });
    }

    hide(event) {
        let currentEvent = event;
        this.setState({ visible: false }, () => {
            if (this.props.onHide) {
                this.props.onHide(currentEvent);
            }
        });
    }

    onEnter() {
        this.container.style.zIndex = String(this.props.baseZIndex + DomHandler.generateZIndex());
        DomHandler.absolutePosition(this.container,  this.target);
    }

    onEntered() {
        this.bindDocumentListeners();
    }

    onExit() {
        this.target = null;
        this.unbindDocumentListeners();
    }

    bindDocumentListeners() {
        if (!this.documentClickListener) {
            this.documentClickListener = (event) => {
                if (this.state.visible && this.isOutsideClicked(event)) {
                    this.hide(event);
                }
            };

            document.addEventListener('click', this.documentClickListener);
        }

        if (!this.documentResizeListener) {
            this.documentResizeListener = (event) => {
                if (this.state.visible) {
                    this.hide(event);
                }
            };

            window.addEventListener('resize', this.documentResizeListener);
        }
    }

    isOutsideClicked(event) {
        return this.container && !(this.container.isSameNode(event.target) || this.container.contains(event.target));
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
        const className = classNames('p-submenu-header', {'p-disabled': submenu.disabled}, submenu.className);
        const items = submenu.items.map((item, index)=> {
            return this.renderMenuitem(item, index);
        });

        return (
            <React.Fragment key={submenu.label + '_' + index}>
                <li className={className} style={submenu.style} role="presentation">{submenu.label}</li>
                {items}
            </React.Fragment>
        );
    }

    renderSeparator(index) {
        return (
            <li key={'separator_' + index} className="p-menu-separator" role="separator"></li>
        );
    }

    renderMenuitem(item, index) {
        const className = classNames('p-menuitem', item.className);
        const linkClassName = classNames('p-menuitem-link', {'p-disabled': item.disabled})
        const iconClassName = classNames('p-menuitem-icon', item.icon);
        const icon = item.icon && <span className={iconClassName}></span>;
        const tabIndex = item.disabled ? null : 0;

        return (
            <li key={item.label + '_' + index} className={className} style={item.style} role="none">
                <a href={item.url||'#'} className={linkClassName} role="menuitem" target={item.target} onClick={e => this.onItemClick(e, item)} onKeyDown={e => this.onItemKeyDown(e, item)} tabIndex={tabIndex}>
                    {icon}
                    <span className="p-menuitem-text">{item.label}</span>
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

    renderElement() {
        if (this.props.model) {
            const className = classNames('p-menu p-component', this.props.className, {'p-menu-overlay': this.props.popup});
            const menuitems = this.renderMenu();

            return (
                <CSSTransition classNames="p-connected-overlay" in={this.state.visible} timeout={{ enter: 120, exit: 100 }}
                    unmountOnExit onEnter={this.onEnter} onEntered={this.onEntered} onExit={this.onExit}>
                    <div id={this.props.id} className={className} style={this.props.style} ref={el => this.container = el}>
                        <ul className="p-menu-list p-reset" role="menu">
                            {menuitems}
                        </ul>
                    </div>
                </CSSTransition>
            );
        }

        return null;
    }

    render() {
        const element = this.renderElement();

        if (this.props.appendTo)
            return ReactDOM.createPortal(element, this.props.appendTo);
        else
            return element;
    }
}
