import * as React from 'react';
import PrimeReact, { PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { CSSTransition } from '../csstransition/CSSTransition';
import { ESC_KEY_HANDLING_PRIORITIES, useDisplayOrder, useGlobalOnEscapeKey, useMountEffect, useOverlayListener, useUnmountEffect } from '../hooks/Hooks';
import { OverlayService } from '../overlayservice/OverlayService';
import { Portal } from '../portal/Portal';
import { DomHandler, IconUtils, ObjectUtils, UniqueComponentId, ZIndexUtils, classNames, mergeProps } from '../utils/Utils';
import { MenuBase } from './MenuBase';

export const Menu = React.memo(
    React.forwardRef((inProps, ref) => {
        const context = React.useContext(PrimeReactContext);
        const props = MenuBase.getProps(inProps, context);
        const [idState, setIdState] = React.useState(props.id);
        const [visibleState, setVisibleState] = React.useState(!props.popup);
        const { ptm, cx, sx, isUnstyled } = MenuBase.setMetaData({
            props,
            state: {
                id: idState,
                visible: visibleState
            }
        });

        useHandleStyle(MenuBase.css.styles, isUnstyled, { name: 'menu' });
        const menuRef = React.useRef(null);
        const targetRef = React.useRef(null);

        const popupMenuDisplayOrder = useDisplayOrder('menu', !!(visibleState && props.popup));

        useGlobalOnEscapeKey({
            callback: (event) => {
                hide(event);
            },
            when: visibleState && props.popup && props.closeOnEscape,
            priority: [ESC_KEY_HANDLING_PRIORITIES.MENU, popupMenuDisplayOrder]
        });

        const [bindOverlayListener, unbindOverlayListener] = useOverlayListener({
            target: targetRef,
            overlay: menuRef,
            listener: (event, { valid }) => {
                valid && hide(event);
            },
            when: visibleState
        });

        const onPanelClick = (event) => {
            if (props.popup) {
                OverlayService.emit('overlay-click', {
                    originalEvent: event,
                    target: targetRef.current
                });
            }
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
                    item: item
                });
            }

            if (props.popup) {
                hide(event);
            }
        };

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
        };

        const findNextItem = (item) => {
            const nextItem = item.nextElementSibling;

            return nextItem ? (DomHandler.getAttribute(nextItem, '[data-p-disabled="true"]') || !DomHandler.getAttribute(nextItem, '[data-pc-section="menuitem"]') ? findNextItem(nextItem) : nextItem) : null;
        };

        const findPrevItem = (item) => {
            const prevItem = item.previousElementSibling;

            return prevItem ? (DomHandler.getAttribute(prevItem, '[data-p-disabled="true"]') || !DomHandler.getAttribute(prevItem, '[data-pc-section="menuitem"]') ? findPrevItem(prevItem) : prevItem) : null;
        };

        const toggle = (event) => {
            if (props.popup) {
                visibleState ? hide(event) : show(event);
            }
        };

        const show = (event) => {
            targetRef.current = event.currentTarget;
            setVisibleState(true);
            props.onShow && props.onShow(event);
        };

        const hide = (event) => {
            targetRef.current = event.currentTarget;
            setVisibleState(false);
            props.onHide && props.onHide(event);
        };

        const onEnter = () => {
            DomHandler.addStyles(menuRef.current, { position: 'absolute', top: '0', left: '0' });
            ZIndexUtils.set('menu', menuRef.current, (context && context.autoZIndex) || PrimeReact.autoZIndex, props.baseZIndex || (context && context.zIndex['menu']) || PrimeReact.zIndex['menu']);
            DomHandler.absolutePosition(menuRef.current, targetRef.current, props.popupAlignment);
        };

        const onEntered = () => {
            bindOverlayListener();
        };

        const onExit = () => {
            targetRef.current = null;
            unbindOverlayListener();
        };

        const onExited = () => {
            ZIndexUtils.clear(menuRef.current);
        };

        useMountEffect(() => {
            if (!idState) {
                setIdState(UniqueComponentId());
            }
        });

        useUnmountEffect(() => {
            ZIndexUtils.clear(menuRef.current);
        });

        React.useImperativeHandle(ref, () => ({
            props,
            toggle,
            show,
            hide,
            getElement: () => menuRef.current,
            getTarget: () => targetRef.current
        }));

        const createSubmenu = (submenu, index) => {
            const key = idState + '_sub_' + index;
            const items = submenu.items.map(createMenuItem);
            const submenuHeaderProps = mergeProps(
                {
                    id: key,
                    key,
                    role: 'presentation',
                    className: classNames(submenu.className, cx('submenuHeader', { submenu })),
                    style: sx('submenuHeader', { submenu }),
                    'data-p-disabled': submenu.disabled
                },
                ptm('submenuHeader')
            );

            return (
                <React.Fragment key={key}>
                    <li {...submenuHeaderProps}>{submenu.label}</li>
                    {items}
                </React.Fragment>
            );
        };

        const createSeparator = (index) => {
            const key = idState + '_separator_' + index;
            const separatorProps = mergeProps(
                {
                    id: key,
                    key,
                    className: cx('separator'),
                    role: 'separator'
                },
                ptm('separator')
            );

            return <li {...separatorProps}></li>;
        };

        const createMenuItem = (item, index) => {
            if (item.visible === false) {
                return null;
            }

            const linkClassName = classNames('p-menuitem-link', { 'p-disabled': item.disabled });
            const iconClassName = classNames('p-menuitem-icon', item.icon);
            const iconProps = mergeProps(
                {
                    className: cx('icon')
                },
                ptm('icon')
            );
            const icon = IconUtils.getJSXIcon(item.icon, { ...iconProps }, { props });
            const labelProps = mergeProps(
                {
                    className: cx('label')
                },
                ptm('label')
            );
            const label = item.label && <span {...labelProps}>{item.label}</span>;
            const tabIndex = item.disabled ? null : 0;
            const key = item.id || idState + '_' + index;
            const actionProps = mergeProps(
                {
                    href: item.url || '#',
                    className: cx('action', { item }),
                    role: 'menuitem',
                    target: item.target,
                    onClick: (event) => onItemClick(event, item),
                    onKeyDown: (event) => onItemKeyDown(event, item),
                    tabIndex: tabIndex,
                    'aria-disabled': item.disabled,
                    'data-p-disabled': item.disabled
                },
                ptm('action')
            );

            let content = (
                <a {...actionProps}>
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

            const menuitemProps = mergeProps(
                {
                    id: key,
                    key,
                    className: classNames(item.className, cx('menuitem')),
                    style: sx('menuitem', { item }),
                    role: 'none',
                    'data-p-disabled': item.disabled || false
                },
                ptm('menuitem')
            );

            return <li {...menuitemProps}>{content}</li>;
        };

        const createItem = (item, index) => {
            return item.separator ? createSeparator(index) : item.items ? createSubmenu(item, index) : createMenuItem(item, index);
        };

        const createMenu = () => {
            return props.model.map(createItem);
        };

        const createElement = () => {
            if (props.model) {
                const menuitems = createMenu();
                const rootProps = mergeProps(
                    {
                        className: classNames(props.className, cx('root', { context })),
                        style: props.style,
                        onClick: (e) => onPanelClick(e)
                    },
                    MenuBase.getOtherProps(props),
                    ptm('root')
                );

                const menuProps = mergeProps(
                    {
                        className: cx('menu'),
                        role: 'menu'
                    },
                    ptm('menu')
                );

                const transitionProps = mergeProps(
                    {
                        classNames: cx('transition'),
                        in: visibleState,
                        timeout: { enter: 120, exit: 100 },
                        options: props.transitionOptions,
                        unmountOnExit: true,
                        onEnter,
                        onEntered,
                        onExit,
                        onExited
                    },
                    ptm('transition')
                );

                return (
                    <CSSTransition nodeRef={menuRef} {...transitionProps}>
                        <div id={props.id} ref={menuRef} {...rootProps}>
                            <ul {...menuProps}>{menuitems}</ul>
                        </div>
                    </CSSTransition>
                );
            }

            return null;
        };

        const element = createElement();

        return props.popup ? <Portal element={element} appendTo={props.appendTo} /> : element;
    })
);

Menu.displayName = 'Menu';
