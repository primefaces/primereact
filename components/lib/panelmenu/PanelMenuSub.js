import * as React from 'react';
import { CSSTransition } from '../csstransition/CSSTransition';
import { useMergeProps } from '../hooks/Hooks';
import { ChevronDownIcon } from '../icons/chevrondown';
import { ChevronRightIcon } from '../icons/chevronright';
import { Ripple } from '../ripple/Ripple';
import { IconUtils, ObjectUtils, classNames } from '../utils/Utils';

export const PanelMenuSub = React.memo(
    React.forwardRef((props, ref) => {
        const mergeProps = useMergeProps();
        const { ptm, cx } = props;
        const elementRef = React.useRef(null);

        const _ptm = (key, options) => {
            return ptm(key, {
                hostName: props.hostName,
                ...options
            });
        };

        const getPTOptions = (processedItem, key, index) => {
            return _ptm(key, {
                context: {
                    item: processedItem,
                    index,
                    active: isItemActive(processedItem),
                    focused: isItemFocused(processedItem),
                    disabled: isItemDisabled(processedItem)
                }
            });
        };

        const getItemId = (processedItem) => {
            return `${props.panelId}_${processedItem.key}`;
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

        const onItemClick = (event, processedItem) => {
            if (!getItemProp(processedItem, 'url')) {
                event.preventDefault();
            }

            getItemProp(processedItem, 'command', { originalEvent: event, item: processedItem.item });
            onItemToggle({ processedItem, expanded: !isItemActive(processedItem) });
        };

        const onItemToggle = (event) => {
            props.onItemToggle(event);
        };

        const getAriaSetSize = () => {
            return props.model.filter((processedItem) => isItemVisible(processedItem) && !getItemProp(processedItem, 'separator')).length;
        };

        const getAriaPosInset = (index) => {
            return index - props.model.slice(0, index).filter((processedItem) => isItemVisible(processedItem) && getItemProp(processedItem, 'separator')).length + 1;
        };

        React.useImperativeHandle(ref, () => ({
            getElement: () => elementRef.current
        }));

        const createSeparator = (index) => {
            const key = props.id + '_sep_' + index;

            const separatorProps = mergeProps(
                {
                    id: key,
                    key,
                    className: cx('separator'),
                    role: 'separator'
                },
                _ptm('separator')
            );

            return <li {...separatorProps}></li>;
        };

        const createSubmenu = (processedItem, active) => {
            const submenuRef = React.createRef();

            const toggleableContentProps = mergeProps(
                {
                    className: cx('toggleableContent', { active })
                },
                _ptm('toggleableContent')
            );

            if (isItemVisible(processedItem) && isItemGroup(processedItem)) {
                const transitionProps = mergeProps(
                    {
                        classNames: cx('transition'),
                        timeout: { enter: 1000, exit: 450 },
                        in: active,
                        unmountOnExit: true
                    },
                    _ptm('transition')
                );

                return (
                    <CSSTransition nodeRef={submenuRef} {...transitionProps}>
                        <div ref={submenuRef} {...toggleableContentProps}>
                            <PanelMenuSub
                                id={getItemId(processedItem) + '_list'}
                                role="group"
                                panelId={props.panelId}
                                level={props.level + 1}
                                focusedItemId={props.focusedItemId}
                                activeItemPath={props.activeItemPath}
                                onItemToggle={onItemToggle}
                                menuProps={props.menuProps}
                                model={processedItem.items}
                                submenuIcon={props.submenuIcon}
                                ptm={ptm}
                                cx={cx}
                            />
                        </div>
                    </CSSTransition>
                );
            }

            return null;
        };

        const createMenuItem = (processedItem, index) => {
            const item = processedItem.item;

            if (isItemVisible(processedItem) === false) {
                return null;
            }

            const key = getItemId(processedItem);
            const active = isItemActive(processedItem);
            const itemFocused = isItemFocused(processedItem);
            const disabled = isItemDisabled(item);
            const linkClassName = classNames('p-menuitem-link', { 'p-disabled': item.disabled });
            const iconClassName = classNames('p-menuitem-icon', item.icon);
            const iconProps = mergeProps(
                {
                    className: cx('icon', { item })
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
            const submenuIconClassName = 'p-panelmenu-icon';
            const submenuIconProps = mergeProps(
                {
                    className: cx('submenuicon')
                },
                getPTOptions(processedItem, 'submenuicon', index)
            );
            const submenuIcon = item.items && IconUtils.getJSXIcon(active ? props.submenuIcon || <ChevronDownIcon {...submenuIconProps} /> : props.submenuIcon || <ChevronRightIcon {...submenuIconProps} />);
            const submenu = createSubmenu(processedItem, active);
            const actionProps = mergeProps(
                {
                    href: item.url || '#',
                    className: cx('action', { item }),
                    target: item.target,
                    onFocus: (event) => event.stopPropagation(),
                    tabIndex: '-1',
                    'aria-hidden': true
                },
                getPTOptions(processedItem, 'action', index)
            );

            let content = (
                <a {...actionProps}>
                    {submenuIcon}
                    {icon}
                    {label}
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
                    leaf: !item.items,
                    active
                };

                content = ObjectUtils.getJSXElement(item.template, item, defaultContentOptions);
            }

            const contentProps = mergeProps(
                {
                    onClick: (event) => onItemClick(event, processedItem),
                    className: cx('content')
                },
                getPTOptions(processedItem, 'content', index)
            );

            const menuitemProps = mergeProps(
                {
                    key,
                    id: key,
                    className: cx('menuitem', { item, focused: itemFocused, disabled: disabled }),
                    style: item.style,
                    role: 'treeitem',
                    'aria-label': item.label,
                    'aria-expanded': isItemGroup(item) ? active : undefined,
                    'aria-level': props.level + 1,
                    'aria-setsize': getAriaSetSize(),
                    'aria-posinset': getAriaPosInset(index),
                    'data-p-focused': itemFocused,
                    'data-p-disabled': disabled
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

        const createItem = (item, index) => {
            return getItemProp(item, 'separator') ? createSeparator(index) : createMenuItem(item, index);
        };

        const createMenu = () => {
            return props.model ? props.model.map(createItem) : null;
        };

        const menu = createMenu();

        const ptKey = props.root ? 'menu' : 'submenu';
        const menuProps = mergeProps(
            {
                id: props.id,
                ref: elementRef,
                tabIndex: props.tabIndex,
                onFocus: props.onFocus,
                onBlur: props.onBlur,
                onKeyDown: props.onKeyDown,
                'aria-activedescendant': props.ariaActivedescendant,
                role: props.role,
                className: classNames(cx(ptKey), props.className)
            },
            ptm(ptKey)
        );

        return <ul {...menuProps}>{menu}</ul>;
    })
);

PanelMenuSub.displayName = 'PanelMenuSub';
