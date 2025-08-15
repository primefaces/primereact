import * as React from 'react';
import { CSSTransition } from '../csstransition/CSSTransition';
import { useMergeProps, useUpdateEffect } from '../hooks/Hooks';
import { AngleRightIcon } from '../icons/angleright';
import { Ripple } from '../ripple/Ripple';
import { DomHandler, IconUtils, ObjectUtils } from '../utils/Utils';

export const ContextMenuSub = React.memo(
    React.forwardRef((props, ref) => {
        const mergeProps = useMergeProps();
        const submenuRef = React.useRef(null);
        const active = props.root || !props.resetMenu;
        const { ptm, cx } = props;

        const getPTOptions = (processedItem, key, index) => {
            return ptm(key, {
                hostName: props.hostName,
                context: {
                    active: isItemActive(processedItem),
                    focused: isItemFocused(processedItem),
                    disabled: isItemDisabled(processedItem),
                    index
                }
            });
        };

        const onItemMouseEnter = (event, item) => {
            if (item.disabled || props.isMobileMode) {
                event.preventDefault();

                return;
            }

            props.onItemMouseEnter({ originalEvent: event, processedItem: item });
        };

        const onItemClick = (event, processedItem) => {
            const item = processedItem.item;

            if (item.disabled) {
                event.preventDefault();

                return;
            }

            if (item.command) {
                item.command({
                    originalEvent: event,
                    item
                });
            }

            props.onItemClick({ originalEvent: event, processedItem, isFocus: true });

            if (!item.items) {
                props.onLeafClick(event);
            }

            if (!item.url) {
                event.preventDefault();
                event.stopPropagation();
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

        const getItemId = (processedItem) => {
            return `${props.menuId}_${processedItem.key}`;
        };

        const getItemProp = (processedItem, name, params) => {
            return processedItem && processedItem.item ? ObjectUtils.getItemValue(processedItem.item[name], params) : undefined;
        };

        const getItemLabel = (processedItem) => {
            return getItemProp(processedItem, 'label');
        };

        const isItemActive = (processedItem) => {
            return props.activeItemPath && props.activeItemPath.some((path) => path.key === processedItem.key);
        };

        const isItemVisible = (processedItem) => {
            return getItemProp(processedItem, 'visible') !== false;
        };

        const isItemDisabled = (processedItem) => {
            return getItemProp(processedItem, 'disabled');
        };

        const isItemFocused = (processedItem) => {
            return props.focusedItemId === getItemId(processedItem);
        };

        const isItemGroup = (processedItem) => {
            return ObjectUtils.isNotEmpty(processedItem.items);
        };

        const getAriaSetSize = () => {
            return props.model.filter((processedItem) => isItemVisible(processedItem) && !getItemProp(processedItem, 'separator')).length;
        };

        const getAriaPosInset = (index) => {
            return index - props.model.slice(0, index).filter((processedItem) => isItemVisible(processedItem) && getItemProp(processedItem, 'separator')).length + 1;
        };

        React.useImperativeHandle(ref, () => ({
            props,
            getElement: () => submenuRef.current
        }));

        const createSeparator = (index) => {
            const key = props.id + '_separator_' + index;
            const separatorProps = mergeProps(
                {
                    id: key,
                    className: cx('separator'),
                    role: 'separator'
                },
                ptm('separator', { hostName: props.hostName })
            );

            return <li {...separatorProps} key={key} />;
        };

        const createSubmenu = (item, index) => {
            if (isItemGroup(item)) {
                return (
                    <ContextMenuSub
                        id={props.id + '_' + index}
                        role="menu"
                        menuId={props.menuId}
                        focusedItemId={props.focusedItemId}
                        activeItemPath={props.activeItemPath}
                        level={props.level + 1}
                        hostName={props.hostName}
                        ariaLabelledby={getItemId(item)}
                        menuProps={props.menuProps}
                        model={item.items}
                        resetMenu={!isItemActive(item)}
                        onLeafClick={props.onLeafClick}
                        onItemClick={props.onItemClick}
                        onItemMouseEnter={props.onItemMouseEnter}
                        isMobileMode={props.isMobileMode}
                        submenuIcon={props.submenuIcon}
                        ptm={ptm}
                        cx={cx}
                    />
                );
            }

            return null;
        };

        const createMenuItem = (processedItem, index) => {
            if (!isItemVisible(processedItem)) {
                return null;
            }

            const item = processedItem.item;
            const active = isItemActive(processedItem);
            const disabled = isItemDisabled(processedItem);
            const focused = isItemFocused(processedItem);
            const isGroup = isItemGroup(processedItem);
            const key = getItemId(processedItem);
            const iconProps = mergeProps(
                {
                    className: cx('icon')
                },
                getPTOptions(processedItem, 'icon', index)
            );
            const icon = IconUtils.getJSXIcon(item.icon, { ...iconProps }, { props: props.menuProps });
            const submenuIconProps = mergeProps(
                {
                    className: cx('submenuIcon')
                },
                getPTOptions(processedItem, 'submenuIcon', index)
            );

            const labelProps = mergeProps(
                {
                    className: cx('label')
                },
                getPTOptions(processedItem, 'label', index)
            );

            const items = getItemProp(processedItem, 'items');

            const submenuIcon = items && IconUtils.getJSXIcon(props.submenuIcon || <AngleRightIcon {...submenuIconProps} />, { ...submenuIconProps }, { props: props.menuProps });
            const label = item.label && <span {...labelProps}>{item.label}</span>;
            const submenu = createSubmenu(processedItem, index);
            const actionProps = mergeProps(
                {
                    href: item.url || '#',
                    tabIndex: -1,
                    className: cx('action', { item }),
                    target: item.target
                },
                getPTOptions(processedItem, 'action', index)
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
                    className: 'p-menuitem-link',
                    labelClassName: 'p-menuitem-text',
                    iconClassName: 'p-menuitem-icon',
                    submenuIconClassName: cx('submenuIcon'),
                    element: content,
                    props,
                    active
                };

                content = ObjectUtils.getJSXElement(item.template, item, defaultContentOptions);
            }

            const contentProps = mergeProps(
                {
                    onClick: (event) => onItemClick(event, processedItem, index),
                    onMouseEnter: (event) => onItemMouseEnter(event, processedItem),
                    className: cx('content')
                },
                getPTOptions(processedItem, 'content', index)
            );

            const menuitemProps = mergeProps(
                {
                    id: key,
                    role: 'menuitem',
                    'aria-label': item.label,
                    'aria-disabled': disabled,
                    'aria-expanded': isGroup ? active : undefined,
                    'aria-haspopup': isGroup && !item.url ? 'menu' : undefined,
                    'aria-level': props.level + 1,
                    'aria-setsize': getAriaSetSize(),
                    'aria-posinset': getAriaPosInset(index),
                    'data-p-highlight': active,
                    'data-p-focused': focused,
                    'data-p-disabled': disabled,
                    className: cx('menuitem', { item, active, focused, disabled: isItemDisabled(item) }),
                    style: item.style
                },
                getPTOptions(processedItem, 'menuitem', index)
            );

            return (
                <li {...menuitemProps} key={key}>
                    <div {...contentProps}>{content}</div>
                    {submenu}
                </li>
            );
        };

        const createItem = (processedItem, index) => {
            if (processedItem.visible === false) {
                return null;
            }

            return processedItem.separator ? createSeparator(index) : createMenuItem(processedItem, index);
        };

        const createMenu = () => {
            return props.model ? props.model.map(createItem) : null;
        };

        const submenu = createMenu();

        const menuProps = mergeProps(
            {
                className: cx('menu', { menuProps: props }),
                onFocus: props.onFocus,
                onBlur: props.onBlur,
                onKeyDown: props.onKeyDown,
                'aria-label': props.ariaLabel,
                'aria-labelledby': props.ariaLabelledby,
                'aria-orientation': 'vertical',
                'aria-activedescendant': props.ariaActivedescendant,
                tabIndex: props.tabIndex,
                role: props.role
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
    })
);

ContextMenuSub.displayName = 'ContextMenuSub';
