import React, { useState, useRef, forwardRef, useImperativeHandle, memo } from 'react';
import PropTypes from 'prop-types';
import PrimeReact from '../api/Api';
import { Portal } from '../portal/Portal';
import { CSSTransition } from '../csstransition/CSSTransition';
import { OverlayService } from '../overlayservice/OverlayService';
import { DomHandler, ObjectUtils, ZIndexUtils, classNames } from '../utils/Utils';
import { useUnmountEffect, useOverlayListener } from '../hooks/Hooks';

export const Menu = memo(forwardRef((props, ref) => {
    const [visibleState, setVisibleState] = useState(!props.popup);
    const menuRef = useRef(null);
    const targetRef = useRef(null);

    const [bindOverlayListener, unbindOverlayListener] = useOverlayListener({
        target: targetRef, overlay: menuRef, listener: (event, { valid }) => {
            valid && hide(event);
        }, when: visibleState
    });

    const onPanelClick = (event) => {
        if (props.popup) {
            OverlayService.emit('overlay-click', {
                originalEvent: event,
                target: targetRef.current
            });
        }
    }

    const onItemClick = (event, item) => {
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

        if (props.popup) {
            hide(event);
        }
    }

    const onItemKeyDown = (event, item) => {
        const listItem = event.currentTarget.parentElement;

        switch (event.which) {
            //down
            case 40:
                const nextItem = findNextItem(listItem);
                nextItem && nextItem.children[0].focus();
                event.preventDefault();
                break;

            //up
            case 38:
                const prevItem = findPrevItem(listItem);
                prevItem && prevItem.children[0].focus();
                event.preventDefault();
                break;

            default:
                break;
        }
    }

    const findNextItem = (item) => {
        const nextItem = item.nextElementSibling;
        return nextItem ? (DomHandler.hasClass(nextItem, 'p-disabled') || !DomHandler.hasClass(nextItem, 'p-menuitem') ? findNextItem(nextItem) : nextItem) : null;
    }

    const findPrevItem = (item) => {
        const prevItem = item.previousElementSibling;
        return prevItem ? (DomHandler.hasClass(prevItem, 'p-disabled') || !DomHandler.hasClass(prevItem, 'p-menuitem') ? findPrevItem(prevItem) : prevItem) : null;
    }

    const toggle = (event) => {
        if (props.popup) {
            visibleState ? hide(event) : show(event);
        }
    }

    const show = (event) => {
        targetRef.current = event.currentTarget;
        setVisibleState(true);
        props.onShow && props.onShow(event);
    }

    const hide = (event) => {
        targetRef.current = event.currentTarget;
        setVisibleState(false);
        props.onHide && props.onHide(event);
    }

    const onEnter = () => {
        ZIndexUtils.set('menu', menuRef.current, PrimeReact.autoZIndex, props.baseZIndex || PrimeReact.zIndex['menu']);
        DomHandler.absolutePosition(menuRef.current, targetRef.current);
    }

    const onEntered = () => {
        bindOverlayListener();
    }

    const onExit = () => {
        targetRef.current = null;
        unbindOverlayListener();
    }

    const onExited = () => {
        ZIndexUtils.clear(menuRef.current);
    }

    useUnmountEffect(() => {
        ZIndexUtils.clear(menuRef.current);
    });

    useImperativeHandle(ref, () => ({
        toggle,
        show,
        hide
    }));

    const createSubmenu = (submenu, index) => {
        const key = submenu.label + '_' + index;
        const className = classNames('p-submenu-header', {
            'p-disabled': submenu.disabled
        }, submenu.className);
        const items = submenu.items.map(createMenuItem);

        return (
            <React.Fragment key={key}>
                <li className={className} style={submenu.style} role="presentation">{submenu.label}</li>
                {items}
            </React.Fragment>
        )
    }

    const createSeparator = (index) => {
        const key = 'separator_' + index;

        return <li key={key} className="p-menu-separator" role="separator"></li>
    }

    const createMenuItem = (item, index) => {
        const className = classNames('p-menuitem', item.className);
        const linkClassName = classNames('p-menuitem-link', { 'p-disabled': item.disabled })
        const iconClassName = classNames('p-menuitem-icon', item.icon);
        const icon = item.icon && <span className={iconClassName}></span>;
        const label = item.label && <span className="p-menuitem-text">{item.label}</span>;
        const tabIndex = item.disabled ? null : 0;
        const key = item.label + '_' + index;
        let content = (
            <a href={item.url || '#'} className={linkClassName} role="menuitem" target={item.target} onClick={(event) => onItemClick(event, item)} onKeyDown={(event) => onItemKeyDown(event, item)} tabIndex={tabIndex} aria-disabled={item.disabled}>
                {icon}
                {label}
            </a>
        );

        if (item.template) {
            const defaultContentOptions = {
                onClick: (event) => onItemClick(event, item),
                onKeyDown: (event) => onItemKeyDown(event, item),
                className: linkClassName,
                tabIndex,
                labelClassName: 'p-menuitem-text',
                iconClassName,
                element: content,
                props
            };

            content = ObjectUtils.getJSXElement(item.template, item, defaultContentOptions);
        }

        return (
            <li key={key} className={className} style={item.style} role="none">
                {content}
            </li>
        )
    }

    const createItem = (item, index) => {
        return item.separator ? createSeparator(index) : (item.items ? createSubmenu(item, index) : createMenuItem(item, index));
    }

    const createMenu = () => {
        return props.model.map(createItem);
    }

    const createElement = () => {
        if (props.model) {
            const className = classNames('p-menu p-component', {
                'p-menu-overlay': props.popup
            }, props.className);
            const menuitems = createMenu();

            return (
                <CSSTransition nodeRef={menuRef} classNames="p-connected-overlay" in={visibleState} timeout={{ enter: 120, exit: 100 }} options={props.transitionOptions}
                    unmountOnExit onEnter={onEnter} onEntered={onEntered} onExit={onExit} onExited={onExited}>
                    <div ref={menuRef} id={props.id} className={className} style={props.style} onClick={onPanelClick}>
                        <ul className="p-menu-list p-reset" role="menu">
                            {menuitems}
                        </ul>
                    </div>
                </CSSTransition>
            )
        }

        return null;
    }

    const element = createElement();

    return props.popup ? <Portal element={element} appendTo={props.appendTo} /> : element;
}));

Menu.defaultProps = {
    __TYPE: 'Menu',
    id: null,
    model: null,
    popup: false,
    style: null,
    className: null,
    autoZIndex: true,
    baseZIndex: 0,
    appendTo: null,
    transitionOptions: null,
    onShow: null,
    onHide: null
}

Menu.propTypes /* remove-proptypes */ = {
    __TYPE: PropTypes.string,
    id: PropTypes.string,
    model: PropTypes.array,
    popup: PropTypes.bool,
    style: PropTypes.object,
    className: PropTypes.string,
    autoZIndex: PropTypes.bool,
    baseZIndex: PropTypes.number,
    appendTo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    transitionOptions: PropTypes.object,
    onShow: PropTypes.func,
    onHide: PropTypes.func
}
