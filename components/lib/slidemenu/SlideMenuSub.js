import * as React from 'react';
import { AngleRightIcon } from '../icons/angleright';
import { PrimeReactContext } from '../api/Api';
import { classNames, IconUtils, mergeProps, ObjectUtils } from '../utils/Utils';

export const SlideMenuSub = React.memo((props) => {
    const [activeItemState, setActiveItemState] = React.useState(null);
    const [renderSubMenu, setRenderSubMenu] = React.useState({});
    const { ptm, cx, sx } = props;
    const context = React.useContext(PrimeReactContext);

    const getPTOptions = (item, key) => {
        return ptm(key, {
            hostName: props.hostName,
            context: {
                active: activeItemState === item
            }
        });
    };

    const onItemClick = (event, item, index) => {
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

        if (item.items) {
            const key = createKey(item, index);

            setRenderSubMenu({ ...renderSubMenu, [key]: true });
            setActiveItemState(item);
            props.onForward();
        }
    };

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
                ptm('separator', { hostName: props.hostName })
            ],
            { useTailwind: context.useTailwind }
        );

        return <li {...separatorProps}></li>;
    };

    const createSubmenu = (item, index) => {
        const shouldRender = renderSubMenu[createKey(item, index)];

        if (item.items && shouldRender) {
            return (
                <SlideMenuSub
                    id={props.id + '_' + index}
                    menuProps={props.menuProps}
                    model={item.items}
                    index={props.index + 1}
                    menuWidth={props.menuWidth}
                    effectDuration={props.effectDuration}
                    onForward={props.onForward}
                    parentActive={item === activeItemState}
                    submenuIcon={props.submenuIcon}
                    ptm={ptm}
                    cx={cx}
                    sx={sx}
                />
            );
        }

        return null;
    };

    const createKey = (item, index) => {
        return item.id || props.id + '_' + index;
    };

    const createMenuitem = (item, index) => {
        if (item.visible === false) {
            return null;
        }

        const key = createKey(item, index);
        const active = activeItemState === item;
        const iconClassName = classNames('p-menuitem-icon', item.icon);
        const iconProps = mergeProps(
            [
                {
                    className: cx('icon')
                },
                getPTOptions(item, 'icon')
            ],
            { useTailwind: context.useTailwind }
        );
        const icon = IconUtils.getJSXIcon(item.icon, { ...iconProps }, { props: props.menuProps });
        const submenuIconProps = mergeProps(
            [
                {
                    className: cx('submenuIcon')
                },
                getPTOptions(item, 'submenuIcon')
            ],
            { useTailwind: context.useTailwind }
        );
        const labelProps = mergeProps(
            [
                {
                    className: cx('label')
                },
                getPTOptions(item, 'label')
            ],
            { useTailwind: context.useTailwind }
        );
        const submenuIcon = item.items && IconUtils.getJSXIcon(props.submenuIcon || <AngleRightIcon {...submenuIconProps} />, { ...submenuIconProps }, { props });
        const label = item.label && <span {...labelProps}>{item.label}</span>;
        const submenu = createSubmenu(item, index);
        const actionProps = mergeProps(
            [
                {
                    href: item.url || '#',
                    className: cx('action'),
                    target: item.target,
                    onClick: (event) => onItemClick(event, item, index),
                    'aria-disabled': item.disabled
                },
                getPTOptions(item, 'action')
            ],
            { useTailwind: context.useTailwind }
        );

        let content = (
            <a {...actionProps}>
                {icon}
                {label}
                {submenuIcon}
            </a>
        );

        if (item.template) {
            const defaultContentOptions = {
                onClick: (event) => onItemClick(event, item, index),
                className: 'p-menuitem-link',
                labelClassName: 'p-menuitem-text',
                iconClassName,
                submenuIconClassName: 'p-submenu-icon',
                element: content,
                props,
                active
            };

            content = ObjectUtils.getJSXElement(item.template, item, defaultContentOptions);
        }

        const menuitemProps = mergeProps(
            [
                {
                    id: key,
                    key,
                    className: cx('menuitem', { active, item }),
                    style: item.style
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
        return item.separator ? createSeparator(index) : createMenuitem(item, index);
    };

    const createItems = () => {
        return props.model ? props.model.map(createItem) : null;
    };

    const items = createItems();
    const menuProps = mergeProps(
        [
            {
                className: cx('menu', { subProps: props }),
                style: sx('menu', { subProps: props })
            },
            ptm('menu', { hostName: props.hostName })
        ],
        { useTailwind: context.useTailwind }
    );

    return <ul {...menuProps}>{items}</ul>;
});

SlideMenuSub.displayName = 'SlideMenuSub';
