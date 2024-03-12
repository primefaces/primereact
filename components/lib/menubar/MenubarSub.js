import * as React from 'react';
import { useMergeProps } from '../hooks/Hooks';
import { AngleDownIcon } from '../icons/angledown';
import { AngleRightIcon } from '../icons/angleright';
import { Ripple } from '../ripple/Ripple';
import { IconUtils, ObjectUtils, classNames } from '../utils/Utils';

export const MenubarSub = React.memo(
    React.forwardRef((props, ref) => {
        const mergeProps = useMergeProps();
        const { ptm, cx } = props;

        const getPTOptions = (processedItem, key, index) => {
            return ptm(key, {
                props,
                hostName: props.hostName,
                context: {
                    item: processedItem,
                    index,
                    active: isItemActive(processedItem),
                    focused: isItemFocused(processedItem),
                    disabled: isItemDisabled(processedItem),
                    level: props.level
                }
            });
        };

        const onItemMouseEnter = (event, item) => {
            if (isItemDisabled(item) || props.mobileActive) {
                event.preventDefault();

                return;
            }

            props.onItemMouseEnter && props.onItemMouseEnter({ originalEvent: event, processedItem: item });
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

            onLeafClick({ originalEvent: event, processedItem, isFocus: true });

            if (!item.url) {
                event.preventDefault();
                event.stopPropagation();
            }
        };

        const onLeafClick = (event) => {
            props.onLeafClick && props.onLeafClick(event);
        };

        const getItemId = (processedItem) => {
            return processedItem.item?.id;
        };

        const getItemDataId = (processedItem) => {
            return `${props.id}_${processedItem.key}`;
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
            return props.focusedItemId === getItemDataId(processedItem);
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

        const createSeparator = (index) => {
            const key = props.id + '_separator_' + index;
            const separatorProps = mergeProps(
                {
                    key,
                    'data-id': key,
                    className: cx('separator'),
                    role: 'separator'
                },
                ptm('separator', { hostName: props.hostName })
            );

            return <li {...separatorProps}></li>;
        };

        const createSubmenu = (processedItem) => {
            const items = processedItem && processedItem.items;

            if (items) {
                return (
                    <MenubarSub
                        id={props.id}
                        hostName={props.hostName}
                        menuProps={props.menuProps}
                        level={props.level + 1}
                        model={items}
                        activeItemPath={props.activeItemPath}
                        focusedItemId={props.focusedItemId}
                        onLeafClick={onLeafClick}
                        onItemMouseEnter={props.onItemMouseEnter}
                        submenuIcon={props.submenuIcon}
                        ptm={ptm}
                        style={{ display: isItemActive(processedItem) ? 'block' : 'none' }}
                        cx={cx}
                    />
                );
            }

            return null;
        };

        const createMenuitem = (processedItem, index) => {
            const item = processedItem.item;

            if (!isItemVisible(processedItem)) {
                return null;
            }

            const id = getItemId(processedItem);
            const dataId = getItemDataId(processedItem);
            const active = isItemActive(processedItem);
            const focused = isItemFocused(processedItem);
            const disabled = isItemDisabled(processedItem) || false;
            const group = isItemGroup(processedItem);

            const linkClassName = classNames('p-menuitem-link', { 'p-disabled': disabled });
            const iconClassName = classNames('p-menuitem-icon', getItemProp(processedItem, 'icon'));
            const iconProps = mergeProps(
                {
                    className: cx('icon')
                },
                getPTOptions(processedItem, 'icon', index)
            );
            const icon = IconUtils.getJSXIcon(item.icon, { ...iconProps }, { props: props.menuProps });
            const labelProps = mergeProps(
                {
                    className: cx('label')
                },
                getPTOptions(processedItem, 'label', index)
            );
            const label = item.label && <span {...labelProps}>{item.label}</span>;
            const items = getItemProp(processedItem, 'items');
            const submenuIconClassName = 'p-submenu-icon';
            const submenuIconProps = mergeProps(
                {
                    className: cx('submenuIcon')
                },
                getPTOptions(processedItem, 'submenuIcon', index)
            );
            const submenuIcon =
                items &&
                IconUtils.getJSXIcon(
                    !props.root ? props.submenuIcon || <AngleRightIcon {...submenuIconProps} /> : props.submenuIcon || <AngleDownIcon {...submenuIconProps} />,
                    { ...submenuIconProps },
                    { props: { menuProps: props.menuProps, ...props } }
                );
            const submenu = createSubmenu(processedItem);
            const actionProps = mergeProps(
                {
                    href: item.url || '#',
                    tabIndex: '-1',
                    'aria-hidden': 'true',
                    className: cx('action', { disabled }),
                    onFocus: (event) => event.stopPropagation(),
                    target: getItemProp(processedItem, 'target'),
                    'aria-haspopup': items != null
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
                    className: linkClassName,
                    labelClassName: 'p-menuitem-text',
                    iconClassName,
                    submenuIconClassName,
                    element: content,
                    props
                };

                content = ObjectUtils.getJSXElement(item.template, item, defaultContentOptions);
            }

            const contentProps = mergeProps(
                {
                    onClick: (event) => onItemClick(event, processedItem),
                    onMouseEnter: (event) => onItemMouseEnter(event, processedItem),
                    className: cx('content')
                },
                getPTOptions(processedItem, 'content', index)
            );

            const itemClassName = getItemProp(processedItem, 'className');

            const menuitemProps = mergeProps(
                {
                    id,
                    key: dataId,
                    'data-id': dataId,
                    role: 'menuitem',
                    'aria-label': item.label,
                    'aria-disabled': disabled,
                    'aria-expanded': group ? active : undefined,
                    'aria-haspopup': group && !item.url ? 'menu' : undefined,
                    'aria-level': props.level + 1,
                    'aria-setsize': getAriaSetSize(),
                    'aria-posinset': getAriaPosInset(index),
                    'data-p-highlight': active,
                    'data-p-focused': focused,
                    'data-p-disabled': disabled,
                    className: classNames(itemClassName, cx('menuitem', { active, focused, disabled })),
                    'data-p-disabled': disabled || false
                },
                getPTOptions(processedItem, 'menuitem', index)
            );

            return (
                <li {...menuitemProps}>
                    <div {...contentProps}>{content}</div>
                    {submenu}
                </li>
            );
        };

        const createItem = (processedItem, index) => {
            return getItemProp(processedItem, 'separator') ? createSeparator(index) : createMenuitem(processedItem, index);
        };

        const createMenu = () => {
            return props.model ? props.model.map(createItem) : null;
        };

        const role = props.root ? 'menubar' : 'menu';
        const ptKey = props.root ? 'menu' : 'submenu';
        const tabIndex = props.root ? '0' : null;
        const submenu = createMenu();
        const menuProps = mergeProps(
            {
                ref,
                className: cx(ptKey),
                level: props.level,
                onFocus: props.onFocus,
                onBlur: props.onBlur,
                onKeyDown: props.onKeyDown,
                'data-id': props.id,
                tabIndex: tabIndex,
                'aria-activedescendant': props.ariaActivedescendant,
                style: props.style,
                role
            },
            ptm(ptKey)
        );

        return <ul {...menuProps}>{submenu}</ul>;
    })
);

MenubarSub.displayName = 'MenubarSub';
