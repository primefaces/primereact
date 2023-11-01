import * as React from 'react';
import { CSSTransition } from '../csstransition/CSSTransition';
import { useMountEffect } from '../hooks/Hooks';
import { ChevronDownIcon } from '../icons/chevrondown';
import { ChevronRightIcon } from '../icons/chevronright';
import { PrimeReactContext } from '../api/Api';
import { IconUtils, ObjectUtils, classNames, mergeProps } from '../utils/Utils';

export const PanelMenuSub = React.memo((props) => {
    const { ptm, cx } = props;
    const [activeItemState, setActiveItemState] = React.useState(null);
    const context = React.useContext(PrimeReactContext);

    const _ptm = (key, options) => {
        return ptm(key, {
            hostName: props.hostName,
            ...options
        });
    };

    const getPTOptions = (item, key) => {
        return _ptm(key, {
            context: {
                active: isItemActive(item)
            }
        });
    };

    const findActiveItem = () => {
        if (props.model) {
            if (props.multiple) {
                return props.model.filter((item) => item.expanded);
            } else {
                let activeItem = null;

                props.model.forEach((item) => {
                    if (item.expanded) {
                        if (!activeItem) activeItem = item;
                        else item.expanded = false;
                    }
                });

                return activeItem;
            }
        }

        return null;
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
                item
            });
        }

        let activeItem = activeItemState;
        let active = isItemActive(item);

        if (active) {
            item.expanded = false;
            setActiveItemState(props.multiple ? activeItem.filter((a_item) => a_item !== item) : null);
        } else {
            if (!props.multiple && activeItem) {
                activeItem.expanded = false;
            }

            item.expanded = true;
            setActiveItemState(props.multiple ? [...(activeItem || []), item] : item);
        }
    };

    const isItemActive = (item) => {
        return activeItemState && (props.multiple ? activeItemState.indexOf(item) > -1 : activeItemState === item);
    };

    useMountEffect(() => {
        setActiveItemState(findActiveItem());
    });

    const createSeparator = (index) => {
        const key = props.id + '_sep_' + index;

        const separatorProps = mergeProps(
            [
                {
                    id: key,
                    key,
                    className: cx('separator'),
                    role: 'separator'
                },
                _ptm('separator')
            ],
            { useTailwind: context.useTailwind }
        );

        return <li {...separatorProps}></li>;
    };

    const createSubmenu = (item, active, index) => {
        const submenuRef = React.createRef();

        const toggleableContentProps = mergeProps(
            [
                {
                    className: cx('toggleableContent', { active })
                },
                _ptm('toggleableContent')
            ],
            { useTailwind: context.useTailwind }
        );

        if (item.items) {
            const transitionProps = mergeProps(
                [
                    {
                        classNames: cx('transition'),
                        timeout: { enter: 1000, exit: 450 },
                        in: active,
                        unmountOnExit: true
                    },
                    _ptm('transition')
                ],
                { useTailwind: context.useTailwind }
            );

            return (
                <CSSTransition nodeRef={submenuRef} {...transitionProps}>
                    <div ref={submenuRef} {...toggleableContentProps}>
                        <PanelMenuSub id={props.id + '_' + index} menuProps={props.menuProps} model={item.items} multiple={props.multiple} submenuIcon={props.submenuIcon} ptm={ptm} cx={cx} />
                    </div>
                </CSSTransition>
            );
        }

        return null;
    };

    const createMenuItem = (item, index) => {
        if (item.visible === false) {
            return null;
        }

        const key = item.id || props.id + '_' + index;
        const active = isItemActive(item);
        const linkClassName = classNames('p-menuitem-link', { 'p-disabled': item.disabled });
        const iconClassName = classNames('p-menuitem-icon', item.icon);
        const iconProps = mergeProps(
            [
                {
                    className: cx('icon', { item })
                },
                getPTOptions(item, 'icon')
            ],
            { useTailwind: context.useTailwind }
        );
        const icon = IconUtils.getJSXIcon(item.icon, { ...iconProps }, { props: props.menuProps });
        const labelProps = mergeProps(
            [
                {
                    className: cx('label')
                },
                getPTOptions(item, 'label')
            ],
            { useTailwind: context.useTailwind }
        );
        const label = item.label && <span {...labelProps}>{item.label}</span>;
        const submenuIconClassName = 'p-panelmenu-icon';
        const submenuIconProps = mergeProps(
            [
                {
                    className: cx('submenuicon')
                },
                getPTOptions(item, 'submenuicon')
            ],
            { useTailwind: context.useTailwind }
        );
        const submenuIcon = item.items && IconUtils.getJSXIcon(active ? props.submenuIcon || <ChevronDownIcon {...submenuIconProps} /> : props.submenuIcon || <ChevronRightIcon {...submenuIconProps} />);
        const submenu = createSubmenu(item, active, index);
        const actionProps = mergeProps(
            [
                {
                    href: item.url || '#',
                    className: cx('action', { item }),
                    target: item.target,
                    onClick: (event) => onItemClick(event, item, index),
                    role: 'menuitem',
                    'aria-disabled': item.disabled
                },
                getPTOptions(item, 'action')
            ],
            { useTailwind: context.useTailwind }
        );

        let content = (
            <a {...actionProps}>
                {submenuIcon}
                {icon}
                {label}
            </a>
        );

        if (item.template) {
            const defaultContentOptions = {
                onClick: (event) => onItemClick(event, item, index),
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

        const menuitemProps = mergeProps(
            [
                {
                    key,
                    id: key,
                    className: cx('menuitem', { item }),
                    style: item.style,
                    role: 'none'
                },
                getPTOptions(item, 'menuitem')
            ],
            { useTailwind: context.useTailwind }
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

    const menu = createMenu();

    const ptKey = props.root ? 'menu' : 'submenu';
    const menuProps = mergeProps(
        [
            {
                className: classNames(cx(ptKey), props.className),
                role: 'tree'
            },
            ptm(ptKey)
        ],
        { useTailwind: context.useTailwind }
    );

    return <ul {...menuProps}>{menu}</ul>;
});

PanelMenuSub.displayName = 'PanelMenuSub';
