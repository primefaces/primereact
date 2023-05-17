import * as React from 'react';
import { CSSTransition } from '../csstransition/CSSTransition';
import { useUpdateEffect } from '../hooks/Hooks';
import { Ripple } from '../ripple/Ripple';
import { classNames, DomHandler, IconUtils, mergeProps } from '../utils/Utils';
import { AngleRightIcon } from '../icons/angleright';

export const ContextMenuSub = React.memo((props) => {
    const [activeItemState, setActiveItemState] = React.useState(null);
    const submenuRef = React.useRef(null);
    const active = props.root || !props.resetMenu;

    const getPTOptions = (item, key) => {
        return props.ptm(key, {
            context: {
                active: activeItemState === item
            }
        });
    };

    if (props.resetMenu === true && activeItemState !== null) {
        setActiveItemState(null);
    }

    const onItemMouseEnter = (event, item) => {
        if (item.disabled || props.isMobileMode) {
            event.preventDefault();

            return;
        }

        setActiveItemState(item);
    };

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
                item
            });
        }

        if (props.isMobileMode && item.items) {
            if (activeItemState && item === activeItemState) setActiveItemState(null);
            else setActiveItemState(item);
        }

        if (!item.items) {
            props.onLeafClick(event);
        }
    };

    const position = () => {
        if (!props.isMobileMode) {
            const parentItem = submenuRef.current.parentElement;
            const containerOffset = DomHandler.getOffset(parentItem);
            const viewport = DomHandler.getViewport();
            const sublistWidth = submenuRef.current.offsetParent ? submenuRef.current.offsetWidth : DomHandler.getHiddenElementOuterWidth(submenuRef.current);
            const itemOuterWidth = DomHandler.getOuterWidth(parentItem.children[0]);
            const top = parseInt(containerOffset.top, 10) + submenuRef.current.offsetHeight - DomHandler.getWindowScrollTop();

            if (top > viewport.height) {
                submenuRef.current.style.top = viewport.height - top + 'px';
            } else {
                submenuRef.current.style.top = '0px';
            }

            if (parseInt(containerOffset.left, 10) + itemOuterWidth + sublistWidth > viewport.width - DomHandler.calculateScrollbarWidth()) {
                submenuRef.current.style.left = -1 * sublistWidth + 'px';
            } else {
                submenuRef.current.style.left = itemOuterWidth + 'px';
            }
        }
    };

    const onEnter = () => {
        position();
    };

    useUpdateEffect(() => {
        active && position();
    });

    const createSeparator = (index) => {
        const separatorProps = mergeProps(
            {
                role: 'separator',
                key: 'separator_' + index,
                className: 'p-menu-separator'
            },
            props.ptm('separator')
        );

        return <li {...separatorProps}></li>;
    };

    const createSubmenu = (item) => {
        if (item.items) {
            return <ContextMenuSub menuProps={props.menuProps} model={item.items} resetMenu={item !== activeItemState} onLeafClick={props.onLeafClick} isMobileMode={props.isMobileMode} submenuIcon={props.submenuIcon} ptm={props.ptm} />;
        }

        return null;
    };

    const createMenuItem = (item, index) => {
        if (item.visible === false) {
            return null;
        }

        const active = activeItemState === item;
        const key = item.label + '_' + index;
        const className = classNames('p-menuitem', { 'p-menuitem-active': active }, item.className);
        const linkClassName = classNames('p-menuitem-link', { 'p-disabled': item.disabled });
        const iconClassName = 'p-menuitem-icon';
        const iconProps = mergeProps(
            {
                className: iconClassName
            },
            getPTOptions(item, 'icon')
        );
        const icon = IconUtils.getJSXIcon(item.icon, { ...iconProps }, { props: props.menuProps });
        const submenuIconClassName = 'p-submenu-icon';
        const submenuIconProps = mergeProps(
            {
                className: submenuIconClassName
            },
            getPTOptions(item, 'submenuIcon')
        );

        const labelProps = mergeProps(
            {
                className: 'p-menuitem-text'
            },
            getPTOptions(item, 'label')
        );
        const submenuIcon = item.items && IconUtils.getJSXIcon(props.submenuIcon || <AngleRightIcon {...submenuIconProps} />, { ...submenuIconProps }, { props: props.menuProps });
        const label = item.label && <span {...labelProps}>{item.label}</span>;
        const submenu = createSubmenu(item);
        const actionProps = mergeProps(
            {
                href: item.url || '#',
                className: linkClassName,
                target: item.target,
                onClick: (event) => onItemClick(event, item, index),
                role: 'menuitem',
                'aria-haspopup': item.items != null,
                'aria-disabled': item.disabled
            },
            getPTOptions(item, 'action')
        );

        let content = (
            <a {...actionProps}>
                {icon}
                {label}
                {submenuIcon}
                <Ripple />
            </a>
        );

        const menuitemProps = mergeProps(
            {
                id: item.id,
                role: 'none',
                className,
                style: item.style,
                key,
                onMouseEnter: (event) => onItemMouseEnter(event, item)
            },
            getPTOptions(item, 'menuitem')
        );

        return (
            <li {...menuitemProps}>
                {content}
                {submenu}
            </li>
        );
    };

    const createItem = (item, index) => {
        return item.separator ? createSeparator(index) : createMenuItem(item, index);
    };

    const createMenu = () => {
        return props.model ? props.model.map(createItem) : null;
    };

    const className = classNames({
        'p-submenu-list': !props.root
    });
    const submenu = createMenu();
    const menuProps = mergeProps(
        {
            ref: submenuRef,
            className
        },
        props.ptm('menu')
    );

    return (
        <CSSTransition nodeRef={submenuRef} classNames="p-contextmenusub" in={active} timeout={{ enter: 0, exit: 0 }} unmountOnExit onEnter={onEnter}>
            <ul {...menuProps}>{submenu}</ul>
        </CSSTransition>
    );
});

ContextMenuSub.displayName = 'ContextMenuSub';
