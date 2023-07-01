import * as React from 'react';
import { useEventListener, useMountEffect, useResizeListener, useUpdateEffect } from '../hooks/Hooks';
import { Ripple } from '../ripple/Ripple';
import { classNames, DomHandler, IconUtils, ObjectUtils, mergeProps } from '../utils/Utils';
import { AngleRightIcon } from '../icons/angleright';

export const TieredMenuSub = React.memo((props) => {
    const [activeItemState, setActiveItemState] = React.useState(null);
    const elementRef = React.useRef(null);

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
            if (!props.isMobileMode && elementRef.current && !elementRef.current.contains(event.target)) {
                setActiveItemState(null);
            }
        }
    });

    const [bindDocumentResizeListener] = useResizeListener({
        listener: () => {
            !props.isMobileMode && setActiveItemState(null);
        }
    });

    const position = () => {
        if (elementRef.current) {
            const parentItem = elementRef.current.parentElement;
            const containerOffset = DomHandler.getOffset(parentItem);
            const viewport = DomHandler.getViewport();
            const sublistWidth = elementRef.current.offsetParent ? elementRef.current.offsetWidth : DomHandler.getHiddenElementOuterWidth(elementRef.current);
            const itemOuterWidth = DomHandler.getOuterWidth(parentItem.children[0]);
            const top = parseInt(containerOffset.top, 10) + elementRef.current.offsetHeight - DomHandler.getWindowScrollTop();

            if (top > viewport.height) {
                elementRef.current.style.top = viewport.height - top + 'px';
            } else {
                elementRef.current.style.top = '0px';
            }

            if (parseInt(containerOffset.left, 10) + itemOuterWidth + sublistWidth > viewport.width - DomHandler.calculateScrollbarWidth()) {
                DomHandler.addClass(elementRef.current, 'p-submenu-list-flipped');
            }
        }
    };

    const onItemMouseEnter = (event, item) => {
        if (item.disabled || props.isMobileMode) {
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

        if (props.root || props.isMobileMode) {
            if (item.items) {
                if (activeItemState && item === activeItemState) setActiveItemState(null);
                else setActiveItemState(item);
            }
        }

        if (!item.items) {
            onLeafClick(event);
        }
    };

    const onItemKeyDown = (event, item) => {
        let listItem = event.currentTarget.parentElement;

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

            //right
            case 39:
                if (item.items) {
                    setActiveItemState(item);

                    setTimeout(() => {
                        listItem.children[1].children[0].children[0].focus();
                    }, 50);
                }

                event.preventDefault();
                break;

            default:
                break;
        }

        props.onKeyDown && props.onKeyDown(event, listItem);
    };

    const onChildItemKeyDown = (event, childListItem) => {
        //left
        if (event.which === 37) {
            setActiveItemState(null);
            childListItem.parentElement.previousElementSibling.focus();
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

    const onLeafClick = (event) => {
        if (!props.isMobileMode || props.popup) {
            setActiveItemState(null);
            props.onLeafClick && props.onLeafClick(event);
            props.onHide && props.onHide(event);
        }
    };

    useMountEffect(() => {
        bindDocumentClickListener();
        bindDocumentResizeListener();
    });

    useUpdateEffect(() => {
        if (!props.parentActive) {
            setActiveItemState(null);
        }

        if (!props.root && props.parentActive && !props.isMobileMode) {
            position();
        }
    }, [props.parentActive]);

    useUpdateEffect(() => {
        props.onItemToggle && props.onItemToggle();
    }, [activeItemState]);

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
                <TieredMenuSub
                    menuProps={props.menuProps}
                    model={item.items}
                    onLeafClick={onLeafClick}
                    popup={props.popup}
                    onKeyDown={onChildItemKeyDown}
                    parentActive={item === activeItemState}
                    isMobileMode={props.isMobileMode}
                    onItemToggle={props.onItemToggle}
                    submenuIcon={props.submenuIcon}
                    ptm={props.ptm}
                />
            );
        }

        return null;
    };

    const createMenuItem = (item, index) => {
        if (item.visible === false) {
            return null;
        }

        const { id, className: _className, style, disabled, icon: _icon, label: _label, items, target, url, template } = item;
        const key = _label + '_' + index;
        const active = activeItemState === item;
        const className = classNames('p-menuitem', { 'p-menuitem-active': active }, _className);
        const linkClassName = classNames('p-menuitem-link', { 'p-disabled': disabled });
        const iconClassName = classNames('p-menuitem-icon', _icon);
        const iconProps = mergeProps(
            {
                className: iconClassName
            },
            getPTOptions(item, 'icon')
        );
        const icon = IconUtils.getJSXIcon(_icon, { ...iconProps }, { props: props.menuProps });
        const labelProps = mergeProps(
            {
                className: 'p-menuitem-text'
            },
            getPTOptions(item, 'label')
        );
        const label = _label && <span {...labelProps}>{_label}</span>;
        const submenuIconClassName = 'p-submenu-icon';
        const submenuIconProps = mergeProps(
            {
                className: submenuIconClassName
            },
            getPTOptions(item, 'submenuIcon')
        );
        const submenuIcon = item.items && IconUtils.getJSXIcon(props.submenuIcon || <AngleRightIcon {...submenuIconProps} />, { ...submenuIconProps }, { props: props.menuProps });
        const submenu = createSubmenu(item);
        const actionProps = mergeProps(
            {
                href: url || '#',
                className: linkClassName,
                target: target,
                role: 'menuitem',
                'aria-haspopup': items != null,
                onClick: (event) => onItemClick(event, item),
                onKeyDown: (event) => onItemKeyDown(event, item),
                'aria-disabled': disabled
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

        if (template) {
            const defaultContentOptions = {
                onClick: (event) => onItemClick(event, item),
                onKeyDown: (event) => onItemKeyDown(event, item),
                className: linkClassName,
                labelClassName: 'p-menuitem-text',
                iconClassName,
                submenuIconClassName,
                element: content,
                props,
                active,
                disabled
            };

            content = ObjectUtils.getJSXElement(template, item, defaultContentOptions);
        }

        const menuitemProps = mergeProps(
            {
                key,
                id: item.id,
                className,
                style: style,
                onMouseEnter: (event) => onItemMouseEnter(event, item),
                role: 'none'
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
            ref: elementRef,
            className,
            role: props.root ? 'menubar' : 'menu',
            'aria-orientation': 'horizontal'
        },
        props.ptm('menu')
    );

    return <ul {...menuProps}>{submenu}</ul>;
});

TieredMenuSub.displayName = 'TieredMenuSub';
