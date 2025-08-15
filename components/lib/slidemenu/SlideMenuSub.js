import * as React from 'react';
import { useMergeProps } from '../hooks/Hooks';
import { AngleRightIcon } from '../icons/angleright';
import { classNames, IconUtils, ObjectUtils } from '../utils/Utils';

export const SlideMenuSub = React.memo((props) => {
    const [activeItemState, setActiveItemState] = React.useState(null);
    const [renderSubMenu, setRenderSubMenu] = React.useState({});
    const mergeProps = useMergeProps();
    const { ptm, cx, sx } = props;

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

        if (!item.url) {
            event.preventDefault();
            event.stopPropagation();
        }
    };

    const createSeparator = (index) => {
        const key = props.id + '_sep_' + index;

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
            {
                className: cx('icon')
            },
            getPTOptions(item, 'icon')
        );
        const icon = IconUtils.getJSXIcon(item.icon, { ...iconProps }, { props: props.menuProps });
        const submenuIconProps = mergeProps(
            {
                className: cx('submenuIcon')
            },
            getPTOptions(item, 'submenuIcon')
        );
        const labelProps = mergeProps(
            {
                className: cx('label')
            },
            getPTOptions(item, 'label')
        );
        const submenuIcon = item.items && IconUtils.getJSXIcon(props.submenuIcon || <AngleRightIcon {...submenuIconProps} />, { ...submenuIconProps }, { props });
        const label = item.label && <span {...labelProps}>{item.label}</span>;
        const submenu = createSubmenu(item, index);
        const actionProps = mergeProps(
            {
                href: item.url || '#',
                className: cx('action'),
                target: item.target,
                onClick: (event) => onItemClick(event, item, index),
                'aria-disabled': item.disabled
            },
            getPTOptions(item, 'action')
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
            {
                id: key,
                className: cx('menuitem', { active, item }),
                style: item.style
            },
            getPTOptions(item, 'menuitem')
        );

        return (
            <li {...menuitemProps} key={key}>
                {content}
                {submenu}
            </li>
        );
    };

    const createItem = (item, index) => {
        if (item.visible === false) {
            return null;
        }

        return item.separator ? createSeparator(index) : createMenuitem(item, index);
    };

    const createItems = () => {
        return props.model ? props.model.map(createItem) : null;
    };

    const items = createItems();
    const menuProps = mergeProps(
        {
            className: cx('menu', { subProps: props }),
            style: sx('menu', { subProps: props })
        },
        ptm('menu', { hostName: props.hostName })
    );

    return <ul {...menuProps}>{items}</ul>;
});

SlideMenuSub.displayName = 'SlideMenuSub';
