import * as React from 'react';
import { useEventListener, useMountEffect, useUpdateEffect } from '../hooks/Hooks';
import { Ripple } from '../ripple/Ripple';
import { classNames, DomHandler, IconUtils, mergeProps, ObjectUtils } from '../utils/Utils';
import { AngleRightIcon } from '../icons/angleright';
import { AngleDownIcon } from '../icons/angledown';

export const MenubarSub = React.memo(
    React.forwardRef((props, ref) => {
        const [activeItemState, setActiveItemState] = React.useState(null);

        const getPTOptions = (item, key) => {
            return props.ptm(key, {
                context: {
                    active: activeItemState === item
                }
            });
        };

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
            const separatorProps = mergeProps(
                {
                    key,
                    className: 'p-menu-separator',
                    role: 'separator'
                },
                props.ptm('separator')
            );

            return <li {...separatorProps}></li>;
        };

        const createSubmenu = (item) => {
            if (item.items) {
                return (
                    <MenubarSub
                        menuProps={props.menuProps}
                        model={item.items}
                        mobileActive={props.mobileActive}
                        onLeafClick={onLeafClick}
                        onKeyDown={onChildItemKeyDown}
                        parentActive={item === activeItemState}
                        submenuIcon={props.submenuIcon}
                        ptm={props.ptm}
                    />
                );
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
            const iconProps = mergeProps(
                {
                    className: 'p-menuitem-icon'
                },
                getPTOptions(item, 'icon')
            );
            const icon = IconUtils.getJSXIcon(item.icon, { ...iconProps }, { props: props.menuProps });
            const labelProps = mergeProps(
                {
                    className: 'p-menuitem-text'
                },
                getPTOptions(item, 'label')
            );
            const label = item.label && <span {...labelProps}>{item.label}</span>;
            const submenuIconClassName = 'p-submenu-icon';
            const submenuIconProps = mergeProps(
                {
                    className: submenuIconClassName
                },
                getPTOptions(item, 'submenuIcon')
            );
            const submenuIcon =
                item.items &&
                IconUtils.getJSXIcon(
                    !props.root ? props.submenuIcon || <AngleRightIcon {...submenuIconProps} /> : props.submenuIcon || <AngleDownIcon {...submenuIconProps} />,
                    { ...submenuIconProps },
                    { props: { menuProps: props.menuProps, ...props } }
                );
            const submenu = createSubmenu(item);
            const actionProps = mergeProps(
                {
                    href: item.url || '#',
                    role: 'menuitem',
                    className: linkClassName,
                    target: item.target,
                    'aria-haspopup': item.items != null,
                    onClick: (event) => onItemClick(event, item),
                    onKeyDown: (event) => onItemKeyDown(event, item)
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

            const menuitemProps = mergeProps(
                {
                    key,
                    role: 'none',
                    id: item.id,
                    className,
                    style: item.style,
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
        const menuProps = mergeProps(
            {
                ref,
                className,
                role
            },
            props.ptm('menu')
        );

        return <ul {...menuProps}>{submenu}</ul>;
    })
);

MenubarSub.displayName = 'MenubarSub';
