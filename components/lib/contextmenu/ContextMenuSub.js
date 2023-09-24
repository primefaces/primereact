import * as React from 'react';
import { CSSTransition } from '../csstransition/CSSTransition';
import { useUpdateEffect } from '../hooks/Hooks';
import { AngleRightIcon } from '../icons/angleright';
import { Ripple } from '../ripple/Ripple';
import { DomHandler, IconUtils, mergeProps, ObjectUtils } from '../utils/Utils';

export const ContextMenuSub = React.memo((props) => {
    const [activeItemState, setActiveItemState] = React.useState(null);
    const submenuRef = React.useRef(null);
    const active = props.root || !props.resetMenu;
    const { ptm, cx } = props;

    const getPTOptions = (item, key) => {
        return ptm(key, {
            hostName: props.hostName,
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
        const key = props.id + '_separator_' + index;
        const separatorProps = mergeProps(
            {
                id: key,
                key,
                className: cx('separator'),
                role: 'separator'
            },
            ptm('separator', { hostName: props.hostName })
        );

        return <li {...separatorProps}></li>;
    };

    const createSubmenu = (item, index) => {
        if (item.items) {
            return (
                <ContextMenuSub
                    id={props.id + '_' + index}
                    hostName={props.hostName}
                    menuProps={props.menuProps}
                    model={item.items}
                    resetMenu={item !== activeItemState}
                    onLeafClick={props.onLeafClick}
                    isMobileMode={props.isMobileMode}
                    submenuIcon={props.submenuIcon}
                    ptm={ptm}
                    cx={cx}
                />
            );
        }

        return null;
    };

    const createMenuItem = (item, index) => {
        if (item.visible === false) {
            return null;
        }

        const active = activeItemState === item;
        const key = item.id || props.id + '_' + index;
        const iconProps = mergeProps(
            {
                className: cx('icon')
            },
            getPTOptions(item, 'icon')
        );
        const icon = IconUtils.getJSXIcon(item.icon, { ...iconProps }, { props: props.menuProps });
        const submenuIconProps = mergeProps(
            {
                className: cx('submenuIcon')
            },
            getPTOptions(item, 'submenuIcon')
        );

        const labelProps = mergeProps(
            {
                className: cx('label')
            },
            getPTOptions(item, 'label')
        );
        const submenuIcon = item.items && IconUtils.getJSXIcon(props.submenuIcon || <AngleRightIcon {...submenuIconProps} />, { ...submenuIconProps }, { props: props.menuProps });
        const label = item.label && <span {...labelProps}>{item.label}</span>;
        const submenu = createSubmenu(item, index);
        const actionProps = mergeProps(
            {
                href: item.url || '#',
                className: cx('action', { item }),
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

        if (item.template) {
            const defaultContentOptions = {
                onClick: (event) => onItemClick(event, item, index),
                className: 'p-menuitem-link',
                labelClassName: 'p-menuitem-text',
                iconClassName: 'p-menuitem-icon',
                submenuIconClassName,
                element: content,
                props,
                active
            };

            content = ObjectUtils.getJSXElement(item.template, item, defaultContentOptions);
        }

        const menuitemProps = mergeProps(
            {
                id: key,
                key,
                role: 'none',
                className: cx('menuitem', { item, active }),
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

    const submenu = createMenu();
    const menuProps = mergeProps(
        {
            className: cx('menu', { menuProps: props })
        },
        ptm('menu', { hostName: props.hostName })
    );

    const transitionProps = mergeProps(
        {
            classNames: cx('submenuTransition'),
            in: active,
            timeout: { enter: 0, exit: 0 },
            unmountOnExit: true,
            onEnter
        },
        ptm('menu.transition', { hostName: props.hostName })
    );

    return (
        <CSSTransition nodeRef={submenuRef} {...transitionProps}>
            <ul ref={submenuRef} {...menuProps}>
                {submenu}
            </ul>
        </CSSTransition>
    );
});

ContextMenuSub.displayName = 'ContextMenuSub';
