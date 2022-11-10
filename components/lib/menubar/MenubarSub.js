import * as React from 'react';
import { useEventListener, useMountEffect, useUpdateEffect } from '../hooks/Hooks';
import { Ripple } from '../ripple/Ripple';
import { classNames, DomHandler, IconUtils, ObjectUtils } from '../utils/Utils';

export const MenubarSub = React.memo(
    React.forwardRef((props, ref) => {
        const [activeItemState, setActiveItemState] = React.useState(null);

        const [bindDocumentClickListener] = useEventListener({
            type: 'click',
            listener: (event) => {
                if (ref && ref.current && !ref.current.contains(event.target)) {
                    setActiveItemState(null);
                }
            }
        });

        const onItemMouseEnter = (event, item) => {
            if (item.disabled || props.mobileActive) {
                event.preventDefault();

                return;
            }

            if (props.root) {
                if (activeItemState || props.popup) {
                    setActiveItemState(item);
                }
            } else {
                setActiveItemState(item);
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

            if (item.items) activeItemState && item === activeItemState ? setActiveItemState(null) : setActiveItemState(item);
            else onLeafClick();
        };

        const onItemKeyDown = (event, item) => {
            const listItem = event.currentTarget.parentElement;

            switch (event.which) {
                //down
                case 40:
                    if (props.root) item.items && expandSubmenu(item, listItem);
                    else navigateToNextItem(listItem);

                    event.preventDefault();
                    break;

                //up
                case 38:
                    !props.root && navigateToPrevItem(listItem);
                    event.preventDefault();
                    break;

                //right
                case 39:
                    if (props.root) {
                        const nextItem = findNextItem(listItem);

                        nextItem && nextItem.children[0].focus();
                    } else {
                        item.items && expandSubmenu(item, listItem);
                    }

                    event.preventDefault();
                    break;

                //left
                case 37:
                    props.root && navigateToPrevItem(listItem);
                    event.preventDefault();
                    break;

                default:
                    break;
            }

            props.onKeyDown && props.onKeyDown(event, listItem);
        };

        const onChildItemKeyDown = (event, childListItem) => {
            if (props.root) {
                //up
                if (event.which === 38 && childListItem.previousElementSibling == null) {
                    collapseMenu(childListItem);
                }
            } else {
                //left
                if (event.which === 37) {
                    collapseMenu(childListItem);
                }
            }
        };

        const expandSubmenu = (item, listItem) => {
            setActiveItemState(item);

            setTimeout(() => {
                listItem.children[1].children[0].children[0].focus();
            }, 50);
        };

        const collapseMenu = (listItem) => {
            setActiveItemState(null);
            listItem.parentElement.previousElementSibling.focus();
        };

        const navigateToNextItem = (listItem) => {
            const nextItem = findNextItem(listItem);

            nextItem && nextItem.children[0].focus();
        };

        const navigateToPrevItem = (listItem) => {
            const prevItem = findPrevItem(listItem);

            prevItem && prevItem.children[0].focus();
        };

        const findNextItem = (item) => {
            const nextItem = item.nextElementSibling;

            return nextItem ? (DomHandler.hasClass(nextItem, 'p-disabled') || !DomHandler.hasClass(nextItem, 'p-menuitem') ? findNextItem(nextItem) : nextItem) : null;
        };

        const findPrevItem = (item) => {
            const prevItem = item.previousElementSibling;

            return prevItem ? (DomHandler.hasClass(prevItem, 'p-disabled') || !DomHandler.hasClass(prevItem, 'p-menuitem') ? findPrevItem(prevItem) : prevItem) : null;
        };

        const onLeafClick = () => {
            setActiveItemState(null);
            props.onLeafClick && props.onLeafClick();
        };

        useMountEffect(() => {
            bindDocumentClickListener();
        });

        useUpdateEffect(() => {
            !props.parentActive && setActiveItemState(null);
        }, [props.parentActive]);

        const createSeparator = (index) => {
            const key = 'separator_' + index;

            return <li key={key} className="p-menu-separator" role="separator"></li>;
        };

        const createSubmenu = (item) => {
            if (item.items) {
                return <MenubarSub menuProps={props.menuProps} model={item.items} mobileActive={props.mobileActive} onLeafClick={onLeafClick} onKeyDown={onChildItemKeyDown} parentActive={item === activeItemState} />;
            }

            return null;
        };

        const createMenuitem = (item, index) => {
            if (item.visible === false) {
                return null;
            }

            const key = item.label + '_' + index;
            const className = classNames('p-menuitem', { 'p-menuitem-active': activeItemState === item }, item.className);
            const linkClassName = classNames('p-menuitem-link', { 'p-disabled': item.disabled });
            const iconClassName = classNames('p-menuitem-icon', item.icon);
            const submenuIconClassName = classNames('p-submenu-icon pi', { 'pi-angle-down': props.root, 'pi-angle-right': !props.root });
            const icon = IconUtils.getJSXIcon(item.icon, { className: 'p-menuitem-icon' }, { props: props.menuProps });
            const label = item.label && <span className="p-menuitem-text">{item.label}</span>;
            const submenuIcon = item.items && <span className={submenuIconClassName}></span>;
            const submenu = createSubmenu(item);
            let content = (
                <a href={item.url || '#'} role="menuitem" className={linkClassName} target={item.target} aria-haspopup={item.items != null} onClick={(event) => onItemClick(event, item)} onKeyDown={(event) => onItemKeyDown(event, item)}>
                    {icon}
                    {label}
                    {submenuIcon}
                    <Ripple />
                </a>
            );

            if (item.template) {
                const defaultContentOptions = {
                    onClick: (event) => onItemClick(event, item),
                    onKeyDown: (event) => onItemKeyDown(event, item),
                    className: linkClassName,
                    labelClassName: 'p-menuitem-text',
                    iconClassName,
                    submenuIconClassName,
                    element: content,
                    props
                };

                content = ObjectUtils.getJSXElement(item.template, item, defaultContentOptions);
            }

            return (
                <li key={key} role="none" id={item.id} className={className} style={item.style} onMouseEnter={(event) => onItemMouseEnter(event, item)}>
                    {content}
                    {submenu}
                </li>
            );
        };

        const createItem = (item, index) => {
            return item.separator ? createSeparator(index) : createMenuitem(item, index);
        };

        const createMenu = () => {
            return props.model ? props.model.map(createItem) : null;
        };

        const role = props.root ? 'menubar' : 'menu';
        const className = classNames({
            'p-submenu-list': !props.root,
            'p-menubar-root-list': props.root
        });
        const submenu = createMenu();

        return (
            <ul ref={ref} className={className} role={role}>
                {submenu}
            </ul>
        );
    })
);

MenubarSub.displayName = 'MenubarSub';
