import * as React from 'react';
import { useMergeProps, useUpdateEffect } from '../hooks/Hooks';
import { AngleRightIcon } from '../icons/angleright';
import { Ripple } from '../ripple/Ripple';
import { DomHandler, IconUtils, ObjectUtils, classNames } from '../utils/Utils';

export const TieredMenuSub = React.memo(
    React.forwardRef((props, ref) => {
        const elementRef = React.useRef(null);
        const mergeProps = useMergeProps();
        const { ptm, cx, sx } = props;

        const getPTOptions = (item, key) => {
            return ptm(key, {
                hostName: props.hostName,
                context: {
                    active: isItemActive(item)
                }
            });
        };

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

        const onItemClick = (event, processedItem) => {
            const item = processedItem.item;

            if (isItemDisabled(processedItem)) {
                event.preventDefault();

                return;
            }

            if (item.command) {
                item.command({
                    originalEvent: event,
                    item: item
                });
            }

            props.onItemClick && props.onItemClick({ originalEvent: event, processedItem });

            if (!item.url) {
                event.preventDefault();
                event.stopPropagation();
            }
        };

        const getItemId = (processedItem) => {
            if (processedItem.item && processedItem.item.id) {
                return processedItem.item.id;
            }

            return `${props.menuId}_${processedItem.key}`;
        };

        const getItemProp = (processedItem, name, params) => {
            return processedItem && processedItem.item ? ObjectUtils.getItemValue(processedItem.item[name], params) : undefined;
        };

        const isItemActive = (processedItem) => {
            return props.activeItemPath.some((path) => path.key === processedItem.key);
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

        const onItemMouseEnter = (event, processedItem) => {
            props.onItemMouseEnter && props.onItemMouseEnter({ originalEvent: event, processedItem });
        };

        const getAriaSetSize = () => {
            return props.model.filter((processedItem) => isItemVisible(processedItem) && !getItemProp(processedItem, 'separator')).length;
        };

        const getAriaPosInset = (index) => {
            return index - props.model.slice(0, index).filter((processedItem) => isItemVisible(processedItem) && getItemProp(processedItem, 'separator')).length + 1;
        };

        useUpdateEffect(() => {
            if (!props.root && props.parentActive && !props.isMobileMode) {
                position();
            }
        }, [props.parentActive]);

        React.useImperativeHandle(ref, () => ({
            getElement: () => elementRef.current
        }));

        const createSeparator = (index) => {
            const key = 'separator_' + index;

            const separatorProps = mergeProps(
                {
                    className: cx('separator'),
                    role: 'separator'
                },
                ptm('separator', { hostName: props.hostName })
            );

            return <li {...separatorProps} key={key} />;
        };

        const createSubmenu = (processedItem, index) => {
            if (isItemGroup(processedItem)) {
                return (
                    <TieredMenuSub
                        id={props.id + '_' + index}
                        menuProps={props.menuProps}
                        model={processedItem.items}
                        menuId={props.menuId}
                        ariaLabelledby={getItemId(processedItem)}
                        focusedItemId={props.focusedItemId}
                        activeItemPath={props.activeItemPath}
                        level={props.level + 1}
                        onItemClick={props.onItemClick}
                        popup={props.popup}
                        onItemMouseEnter={props.onItemMouseEnter}
                        parentActive={isItemActive(processedItem)}
                        isMobileMode={props.isMobileMode}
                        submenuIcon={props.submenuIcon}
                        ptm={props.ptm}
                        cx={cx}
                        sx={sx}
                    />
                );
            }

            return null;
        };

        const createMenuItem = (processedItem, index) => {
            if (isItemVisible(processedItem) === false) {
                return null;
            }

            const item = processedItem.item;
            const style = getItemProp(processedItem, 'style');
            const itemClassName = getItemProp(processedItem, 'className');
            const _icon = getItemProp(processedItem, 'icon');
            const target = getItemProp(processedItem, 'target');
            const url = getItemProp(processedItem, 'url');
            const key = getItemId(processedItem);
            const focused = isItemFocused(processedItem);
            const active = isItemActive(processedItem);
            const disabled = isItemDisabled(processedItem);
            const grouped = isItemGroup(processedItem);
            const linkClassName = classNames('p-menuitem-link');
            const iconClassName = classNames('p-menuitem-icon', _icon);
            const iconProps = mergeProps(
                {
                    className: classNames(item.icon, 'p-menuitem-icon', 'icon')
                },
                getPTOptions(processedItem, 'icon')
            );
            const icon = IconUtils.getJSXIcon(_icon, { ...iconProps }, { props: props.menuProps });
            const labelProps = mergeProps(
                {
                    className: cx('label')
                },
                getPTOptions(processedItem, 'label')
            );
            const label = item.label && <span {...labelProps}>{item.label}</span>;
            const submenuIconClassName = 'p-submenu-icon';
            const submenuIconProps = mergeProps(
                {
                    className: cx('submenuIcon')
                },
                getPTOptions(processedItem, 'submenuIcon')
            );
            const submenuIcon = grouped && IconUtils.getJSXIcon(props.submenuIcon || <AngleRightIcon {...submenuIconProps} />, { ...submenuIconProps }, { props: props.menuProps });
            const submenu = createSubmenu(processedItem, index);
            const actionProps = mergeProps(
                {
                    href: url || '#',
                    tabIndex: '-1',
                    onFocus: (event) => event.stopPropagation(),
                    className: cx('action'),
                    target: target
                },
                getPTOptions(processedItem, 'action')
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
                    className: linkClassName,
                    labelClassName: 'p-menuitem-text',
                    iconClassName,
                    submenuIconClassName,
                    element: content,
                    props,
                    active: active,
                    disabled: disabled
                };

                content = ObjectUtils.getJSXElement(item.template, item, defaultContentOptions);
            }

            const contentProps = mergeProps(
                {
                    onClick: (event) => onItemClick(event, processedItem, index),
                    onMouseEnter: (event) => onItemMouseEnter(event, processedItem),
                    className: cx('content')
                },
                getPTOptions(processedItem, 'content')
            );

            const menuitemProps = mergeProps(
                {
                    id: key,
                    'aria-label': item.label,
                    'aria-disabled': disabled,
                    'aria-expanded': grouped ? active : undefined,
                    'aria-haspopup': grouped && !url ? 'menu' : undefined,
                    'aria-setsize': getAriaSetSize(),
                    'aria-posinset': getAriaPosInset(index),
                    'data-p-highlight': active,
                    'data-p-disabled': disabled,
                    'data-p-visited': focused,
                    className: cx('menuitem', { itemClassName, active, focused, disabled }),
                    style: style,
                    onMouseEnter: (event) => onItemMouseEnter(event, item),
                    role: 'menuitem'
                },
                getPTOptions(processedItem, 'menuitem')
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

            return getItemProp(processedItem, 'separator') ? createSeparator(index) : createMenuItem(processedItem, index);
        };

        const createMenu = () => {
            return props.model ? props.model.map(createItem) : null;
        };

        const submenu = createMenu();
        const ptKey = props.root ? 'menu' : 'submenu';
        const menuProps = mergeProps(
            {
                ref: elementRef,
                id: props.id,
                tabIndex: props.tabIndex,
                onFocus: props.onFocus,
                onBlur: props.onBlur,
                onKeyDown: props.onKeyDown,
                className: cx(ptKey, { subProps: props }),
                style: sx(ptKey, { subProps: props }),
                role: props.root ? 'menubar' : 'menu',
                'aria-label': props.ariaLabel,
                'aria-labelledby': props.ariaLabelledby,
                'aria-orientation': props.ariaOrientation,
                'aria-activedescendant': props.focusedItemId
            },
            ptm(ptKey, { hostName: props.hostName })
        );

        return <ul {...menuProps}>{submenu}</ul>;
    })
);

TieredMenuSub.displayName = 'TieredMenuSub';
