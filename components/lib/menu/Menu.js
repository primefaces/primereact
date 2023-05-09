import * as React from 'react';
import PrimeReact from '../api/Api';
import { CSSTransition } from '../csstransition/CSSTransition';
import { useOverlayListener, useUnmountEffect } from '../hooks/Hooks';
import { OverlayService } from '../overlayservice/OverlayService';
import { Portal } from '../portal/Portal';
import { classNames, DomHandler, IconUtils, ObjectUtils, ZIndexUtils } from '../utils/Utils';
import { MenuBase } from './MenuBase';

export const Menu = React.memo(
    React.forwardRef((inProps, ref) => {
        const props = MenuBase.getProps(inProps);

        const [visibleState, setVisibleState] = React.useState(!props.popup);
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
            ZIndexUtils.set('menu', menuRef.current, PrimeReact.autoZIndex, props.baseZIndex || PrimeReact.zIndex['menu']);
            DomHandler.absolutePosition(menuRef.current, targetRef.current);
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

            return (
                <React.Fragment key={key}>
                    <li className={className} style={submenu.style} role="presentation">
                        {submenu.label}
                    </li>
                    {items}
                </React.Fragment>
            );
        };

        const createSeparator = (index) => {
            const key = 'separator_' + index;

            return <li key={key} className="p-menu-separator" role="separator"></li>;
        };

        const createMenuItem = (item, index) => {
            if (item.visible === false) {
                return null;
            }

            const className = classNames('p-menuitem', item.className);
            const linkClassName = classNames('p-menuitem-link', { 'p-disabled': item.disabled });
            const iconClassName = classNames('p-menuitem-icon', item.icon);
            const icon = IconUtils.getJSXIcon(item.icon, { className: 'p-menuitem-icon' }, { props });
            const label = item.label && <span className="p-menuitem-text">{item.label}</span>;
            const tabIndex = item.disabled ? null : 0;
            const key = item.label + '_' + index;
            let content = (
                <a
                    href={item.url || '#'}
                    className={linkClassName}
                    role="menuitem"
                    target={item.target}
                    onClick={(event) => onItemClick(event, item)}
                    onKeyDown={(event) => onItemKeyDown(event, item)}
                    tabIndex={tabIndex}
                    aria-disabled={item.disabled}
                >
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
            );
        };

        const createItem = (item, index) => {
            return item.separator ? createSeparator(index) : item.items ? createSubmenu(item, index) : createMenuItem(item, index);
        };

        const createMenu = () => {
            return props.model.map(createItem);
        };

        const createElement = () => {
            if (props.model) {
                const otherProps = MenuBase.getOtherProps(props);
                const className = classNames(
                    'p-menu p-component',
                    {
                        'p-menu-overlay': props.popup,
                        'p-input-filled': PrimeReact.inputStyle === 'filled',
                        'p-ripple-disabled': PrimeReact.ripple === false
                    },
                    props.className
                );
                const menuitems = createMenu();

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
                        <div ref={menuRef} id={props.id} className={className} style={props.style} {...otherProps} onClick={onPanelClick}>
                            <ul className="p-menu-list p-reset" role="menu">
                                {menuitems}
                            </ul>
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
