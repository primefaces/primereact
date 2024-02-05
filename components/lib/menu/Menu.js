import * as React from 'react';
import PrimeReact, { PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { CSSTransition } from '../csstransition/CSSTransition';
import { ESC_KEY_HANDLING_PRIORITIES, useDisplayOrder, useGlobalOnEscapeKey, useMergeProps, useMountEffect, useOverlayListener, useUnmountEffect } from '../hooks/Hooks';
import { OverlayService } from '../overlayservice/OverlayService';
import { Portal } from '../portal/Portal';
import { Ripple } from '../ripple/Ripple';
import { DomHandler, IconUtils, ObjectUtils, UniqueComponentId, ZIndexUtils, classNames } from '../utils/Utils';
import { MenuBase } from './MenuBase';

export const Menu = React.memo(
    React.forwardRef((inProps, ref) => {
        const mergeProps = useMergeProps();
        const context = React.useContext(PrimeReactContext);
        const props = MenuBase.getProps(inProps, context);
        const [idState, setIdState] = React.useState(props.id);
        const [visibleState, setVisibleState] = React.useState(!props.popup);
        const [focusedOptionIndex, setFocusedOptionIndex] = React.useState(-1);
        const [selectedOptionIndex, setSelectedOptionIndex] = React.useState(-1);
        const [focused, setFocused] = React.useState(false);

        const { ptm, cx, sx, isUnstyled } = MenuBase.setMetaData({
            props,
            state: {
                id: idState,
                visible: visibleState,
                focused: focused
            }
        });

        useHandleStyle(MenuBase.css.styles, isUnstyled, { name: 'menu' });
        const menuRef = React.useRef(null);
        const listRef = React.useRef(null);
        const targetRef = React.useRef(null);
        const popupMenuDisplayOrder = useDisplayOrder('menu', !!(visibleState && props.popup));

        useGlobalOnEscapeKey({
            callback: (event) => {
                hide(event);
            },
            when: visibleState && props.popup && props.closeOnEscape && popupMenuDisplayOrder,
            priority: [ESC_KEY_HANDLING_PRIORITIES.MENU, popupMenuDisplayOrder]
        });

        const [bindOverlayListener, unbindOverlayListener] = useOverlayListener({
            target: targetRef,
            overlay: menuRef,
            listener: (event, { valid }) => {
                if (valid) {
                    hide(event);
                    setFocusedOptionIndex(-1);
                }
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

        const onItemClick = (event, item, key) => {
            if (item.disabled) {
                event.preventDefault();

                return;
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

            if (!props.popup && focusedOptionIndex !== key) {
                setFocusedOptionIndex(key);
            }

            if (!item.url) {
                event.preventDefault();
                event.stopPropagation();
            }
        };

        const onListFocus = (event) => {
            setFocused(true);

            if (!props.popup) {
                if (selectedOptionIndex !== -1) {
                    changeFocusedOptionIndex(selectedOptionIndex);
                    setSelectedOptionIndex(-1);
                } else changeFocusedOptionIndex(0);
            }

            props.onFocus && props.onFocus(event);
        };

        const onListBlur = (event) => {
            setFocused(false);
            setFocusedOptionIndex(-1);
            props.onBlur && props.onBlur(event);
        };

        const onListKeyDown = (event) => {
            switch (event.code) {
                case 'ArrowDown':
                    onArrowDownKey(event);
                    break;

                case 'ArrowUp':
                    onArrowUpKey(event);
                    break;

                case 'Home':
                    onHomeKey(event);
                    break;

                case 'End':
                    onEndKey(event);
                    break;

                case 'Enter':
                    onEnterKey(event);
                    break;

                case 'Space':
                    onSpaceKey(event);
                    break;

                case 'Escape':
                    if (props.popup) {
                        DomHandler.focus(targetRef.current);
                        hide(event);
                    }

                case 'Tab':
                    props.popup && visibleState && hide(event);
                    break;

                default:
                    break;
            }
        };

        const onArrowDownKey = (event) => {
            const optionIndex = findNextOptionIndex(focusedOptionIndex);

            changeFocusedOptionIndex(optionIndex);
            event.preventDefault();
        };

        const onArrowUpKey = (event) => {
            if (event.altKey && props.popup) {
                DomHandler.focus(targetRef.current);
                hide(event);
                event.preventDefault();
            } else {
                const optionIndex = findPrevOptionIndex(focusedOptionIndex);

                changeFocusedOptionIndex(optionIndex);
                event.preventDefault();
            }
        };

        const onHomeKey = (event) => {
            changeFocusedOptionIndex(0);
            event.preventDefault();
        };

        const onEndKey = (event) => {
            changeFocusedOptionIndex(DomHandler.find(menuRef.current, 'li[data-pc-section="menuitem"][data-p-disabled="false"]').length - 1);
            event.preventDefault();
        };

        const onEnterKey = (event) => {
            const element = DomHandler.findSingle(menuRef.current, `li[id="${`${focusedOptionIndex}`}"]`);
            const anchorElement = element && DomHandler.findSingle(element, 'a[data-pc-section="action"]');

            props.popup && DomHandler.focus(targetRef.current);
            anchorElement ? anchorElement.click() : element && element.click();

            event.preventDefault();
        };

        const onSpaceKey = (event) => {
            onEnterKey(event);
        };

        const findNextOptionIndex = (index) => {
            const links = DomHandler.find(menuRef.current, 'li[data-pc-section="menuitem"][data-p-disabled="false"]');
            const matchedOptionIndex = [...links].findIndex((link) => link.id === index);

            return matchedOptionIndex > -1 ? matchedOptionIndex + 1 : 0;
        };

        const findPrevOptionIndex = (index) => {
            const links = DomHandler.find(menuRef.current, 'li[data-pc-section="menuitem"][data-p-disabled="false"]');
            const matchedOptionIndex = [...links].findIndex((link) => link.id === index);

            return matchedOptionIndex > -1 ? matchedOptionIndex - 1 : 0;
        };

        const changeFocusedOptionIndex = (index) => {
            const links = DomHandler.find(menuRef.current, 'li[data-pc-section="menuitem"][data-p-disabled="false"]');
            let order = index >= links.length ? links.length - 1 : index < 0 ? 0 : index;

            order > -1 && setFocusedOptionIndex(links[order].getAttribute('id'));
        };

        const focusedOptionId = () => {
            return focusedOptionIndex !== -1 ? focusedOptionIndex : null;
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

            if (props.popup) {
                DomHandler.focus(listRef.current);
                changeFocusedOptionIndex(0);
            }
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
            const items = submenu.items.map((item, index) => createMenuItem(item, index, key));
            const submenuHeaderProps = mergeProps(
                {
                    id: key,
                    key,
                    role: 'none',
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

        const createMenuItem = (item, index, parentId = null) => {
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
            const key = item.id || (parentId || idState) + '_' + index;
            const contentProps = mergeProps(
                {
                    onClick: (event) => onItemClick(event, item, key),
                    className: cx('content')
                },
                ptm('content')
            );

            const actionProps = mergeProps(
                {
                    href: item.url || '#',
                    className: cx('action', { item }),
                    onFocus: (event) => event.stopPropagation(),
                    target: item.target,
                    tabIndex: '-1',
                    'aria-label': item.label,
                    'aria-hidden': true,
                    'aria-disabled': item.disabled,
                    'data-p-disabled': item.disabled
                },
                ptm('action')
            );

            let content = (
                <div {...contentProps}>
                    <a {...actionProps}>
                        {icon}
                        {label}
                        <Ripple />
                    </a>
                </div>
            );

            if (item.template) {
                const defaultContentOptions = {
                    onClick: (event) => onItemClick(event, item, key),
                    className: linkClassName,
                    tabIndex: '-1',
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
                    className: classNames(item.className, cx('menuitem', { focused: focusedOptionIndex === key })),
                    style: sx('menuitem', { item }),
                    role: 'menuitem',
                    'aria-label': item.label,
                    'aria-disabled': item.disabled,
                    'data-p-focused': focusedOptionId() === key,
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
                        ref: listRef,
                        className: cx('menu'),
                        id: idState + '_list',
                        tabIndex: props.tabIndex || '0',
                        role: 'menu',
                        'aria-label': props.ariaLabel,
                        'aria-labelledby': props.ariaLabelledBy,
                        'aria-activedescendant': focused ? focusedOptionId() : undefined,
                        onFocus: onListFocus,
                        onKeyDown: onListKeyDown,
                        onBlur: onListBlur
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
