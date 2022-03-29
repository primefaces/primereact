import React, { useRef, useState, memo } from 'react';
import { Ripple } from '../ripple/Ripple';
import { CSSTransition } from '../csstransition/CSSTransition';
import { DomHandler, ObjectUtils, classNames } from '../utils/Utils';
import {useUpdateEffect } from '../hooks/Hooks';

export const ContextMenuSub = memo((props) => {
    const [activeItemState, setActiveItemState] = useState(null);
    const submenuRef = useRef(null);
    const active = props.root || !props.resetMenu;

    if (props.resetMenu === true && activeItemState !== null) {
        setActiveItemState(null);
    }

    const onItemMouseEnter = (event, item) => {
        if (item.disabled) {
            event.preventDefault();
            return;
        }
        setActiveItemState(item);
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

        if (!item.items) {
            props.onLeafClick(event);
        }
    }

    const position = () => {
        const parentItem = submenuRef.current.parentElement;
        const containerOffset = DomHandler.getOffset(submenuRef.current.parentElement)
        const viewport = DomHandler.getViewport();
        const sublistWidth = submenuRef.current.offsetParent ? submenuRef.current.offsetWidth : DomHandler.getHiddenElementOuterWidth(submenuRef.current);
        const itemOuterWidth = DomHandler.getOuterWidth(parentItem.children[0]);

        submenuRef.current.style.top = '0px';

        if ((parseInt(containerOffset.left, 10) + itemOuterWidth + sublistWidth) > (viewport.width - DomHandler.calculateScrollbarWidth())) {
            submenuRef.current.style.left = -1 * sublistWidth + 'px';
        }
        else {
            submenuRef.current.style.left = itemOuterWidth + 'px';
        }
    }

    const onEnter = () => {
        position();
    }

    useUpdateEffect(() => {
        active && position();
    });

    const createSeparator = (index) => {
        return <li key={'separator_' + index} className="p-menu-separator" role="separator"></li>
    }

    const createSubmenu = (item) => {
        if (item.items) {
            return <ContextMenuSub model={item.items} resetMenu={item !== activeItemState} onLeafClick={props.onLeafClick} />
        }

        return null;
    }

    const createMenuItem = (item, index) => {
        const active = activeItemState === item;
        const key = item.label + '_' + index;
        const className = classNames('p-menuitem', { 'p-menuitem-active': active }, item.className);
        const linkClassName = classNames('p-menuitem-link', { 'p-disabled': item.disabled });
        const iconClassName = classNames('p-menuitem-icon', item.icon);
        const submenuIconClassName = 'p-submenu-icon pi pi-angle-right';
        const icon = item.icon && <span className={iconClassName}></span>;
        const label = item.label && <span className="p-menuitem-text">{item.label}</span>;
        const submenuIcon = item.items && <span className={submenuIconClassName}></span>;
        const submenu = createSubmenu(item);
        let content = (
            <a href={item.url || '#'} className={linkClassName} target={item.target} onClick={(event) => onItemClick(event, item, index)} role="menuitem"
                aria-haspopup={item.items != null} aria-disabled={item.disabled}>
                {icon}
                {label}
                {submenuIcon}
                <Ripple />
            </a>
        );

        if (item.template) {
            const defaultContentOptions = {
                onClick: (event) => onItemClick(event, item, index),
                className: linkClassName,
                labelClassName: 'p-menuitem-text',
                iconClassName,
                submenuIconClassName,
                element: content,
                props,
                active
            };

            content = ObjectUtils.getJSXElement(item.template, item, defaultContentOptions);
        }

        return (
            <li key={key} role="none" className={className} style={item.style} onMouseEnter={(event) => onItemMouseEnter(event, item)}>
                {content}
                {submenu}
            </li>
        )
    }

    const createItem = (item, index) => {
        return item.separator ? createSeparator(index) : createMenuItem(item, index);
    }

    const createMenu = () => {
        return props.model ? props.model.map(createItem) : null;
    }

    const className = classNames({
        'p-submenu-list': !props.root
    });
    const submenu = createMenu();

    return (
        <CSSTransition nodeRef={submenuRef} classNames="p-contextmenusub" in={active} timeout={{ enter: 0, exit: 0 }} unmountOnExit onEnter={onEnter}>
            <ul ref={submenuRef} className={className}>
                {submenu}
            </ul>
        </CSSTransition>
    )
});
