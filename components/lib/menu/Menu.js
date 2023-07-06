import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { CSSTransition } from '../csstransition/CSSTransition';
import { useOverlayListener, useUnmountEffect } from '../hooks/Hooks';
import { OverlayService } from '../overlayservice/OverlayService';
import { Portal } from '../portal/Portal';
import { DomHandler, IconUtils, ObjectUtils, ZIndexUtils, classNames, mergeProps } from '../utils/Utils';
import { MenuBase } from './MenuBase';
import PrimeReact from '../api/Api';

export const Menu = React.memo(
    React.forwardRef((inProps, ref) => {
        const context = React.useContext(PrimeReactContext);
        const props = MenuBase.getProps(inProps, context);
        const [visibleState, setVisibleState] = React.useState(!props.popup);
        const { ptm } = MenuBase.setMetaData({
            props,
            state: {
                visible: visibleState
            }
        });
        const menuRef = React.useRef(null);
        const targetRef = React.useRef(null);

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

            return nextItem ? (DomHandler.hasClass(nextItem, 'p-disabled') || !DomHandler.hasClass(nextItem, 'p-menuitem') ? findNextItem(nextItem) : nextItem) : null;
        };

        const findPrevItem = (item) => {
            const prevItem = item.previousElementSibling;

            return prevItem ? (DomHandler.hasClass(prevItem, 'p-disabled') || !DomHandler.hasClass(prevItem, 'p-menuitem') ? findPrevItem(prevItem) : prevItem) : null;
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
            const key = submenu.label + '_' + index;
            const className = classNames(
                'p-submenu-header',
                {
                    'p-disabled': submenu.disabled
                },
                submenu.className
            );
            const items = submenu.items.map(createMenuItem);
            const submenuHeaderProps = mergeProps(
                {
                    className,
                    style: submenu.style,
                    role: 'presentation'
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
            const key = 'separator_' + index;
            const separatorProps = mergeProps(
                {
                    key,
                    className: 'p-menu-separator',
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

            const className = classNames('p-menuitem', item.className);
            const linkClassName = classNames('p-menuitem-link', { 'p-disabled': item.disabled });
            const iconClassName = classNames('p-menuitem-icon', item.icon);
            const iconProps = mergeProps(
                {
                    className: 'p-menuitem-icon'
                },
                ptm('icon')
            );
            const icon = IconUtils.getJSXIcon(item.icon, { ...iconProps }, { props });
            const labelProps = mergeProps(
                {
                    className: 'p-menuitem-text'
                },
                ptm('label')
            );
            const label = item.label && <span {...labelProps}>{item.label}</span>;
            const tabIndex = item.disabled ? null : 0;
            const key = item.label + '_' + index;
            const actionProps = mergeProps(
                {
                    href: item.url || '#',
                    className: linkClassName,
                    role: 'menuitem',
                    target: item.target,
                    onClick: (event) => onItemClick(event, item),
                    onKeyDown: (event) => onItemKeyDown(event, item),
                    tabIndex: tabIndex,
                    'aria-disabled': item.disabled
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
                    key,
                    className,
                    style: item.style,
                    role: 'none'
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
                const className = classNames(
                    'p-menu p-component',
                    {
                        'p-menu-overlay': props.popup,
                        'p-input-filled': (context && context.inputStyle === 'filled') || PrimeReact.inputStyle === 'filled',
                        'p-ripple-disabled': (context && context.ripple === false) || PrimeReact.ripple === false
                    },
                    props.className
                );
                const menuitems = createMenu();
                const rootProps = mergeProps(
                    {
                        ref: menuRef,
                        id: props.id,
                        className,
                        style: props.style,
                        onClick: (e) => onPanelClick(e)
                    },
                    MenuBase.getOtherProps(props),
                    ptm('root')
                );

                const menuProps = mergeProps(
                    {
                        className: 'p-menu-list p-reset',
                        role: 'menu'
                    },
                    ptm('menu')
                );

                return (
                    <CSSTransition
                        nodeRef={menuRef}
                        classNames="p-connected-overlay"
                        in={visibleState}
                        timeout={{ enter: 120, exit: 100 }}
                        options={props.transitionOptions}
                        unmountOnExit
                        onEnter={onEnter}
                        onEntered={onEntered}
                        onExit={onExit}
                        onExited={onExited}
                    >
                        <div {...rootProps}>
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
