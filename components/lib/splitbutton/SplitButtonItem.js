import * as React from 'react';
import { classNames, IconUtils, mergeProps, ObjectUtils } from '../utils/Utils';

export const SplitButtonItem = React.memo((props) => {
    const onClick = (e) => {
        if (props.menuitem.command) {
            props.menuitem.command({ originalEvent: e, item: props.menuitem });
        }

        if (props.onItemClick) {
            props.onItemClick(e);
        }

        e.preventDefault();
    };

    const createSeparator = () => {
        const separatorProps = mergeProps(
            {
                className: 'p-menu-separator',
                role: 'separator'
            },
            props.ptm('separator')
        );

        return <li {...separatorProps}></li>;
    };

    const createMenuitem = () => {
        if (props.menuitem.visible === false) {
            return null;
        }

        const { disabled, icon: _icon, label: _label, template, url, target, className: _className } = props.menuitem;
        const className = classNames('p-menuitem-link', _className, { 'p-disabled': disabled });
        const iconClassName = classNames('p-menuitem-icon', _icon);

        const menuIconProps = mergeProps(
            {
                className: 'p-menuitem-icon'
            },
            props.ptm('menuIcon')
        );
        const icon = IconUtils.getJSXIcon(_icon, { ...menuIconProps }, { props: props.splitButtonProps });

        const menuLabelProps = mergeProps(
            {
                className: 'p-menuitem-text'
            },
            props.ptm('menuLabel')
        );
        const label = _label && <span {...menuLabelProps}>{_label}</span>;

        const anchorProps = mergeProps(
            {
                href: url || '#',
                role: 'menuitem',
                className: className,
                target: target,
                onClick: onClick,
                'aria-label': _label
            },
            props.ptm('anchor')
        );

        let content = (
            <a {...anchorProps}>
                {icon}
                {label}
            </a>
        );

        if (template) {
            const defaultContentOptions = {
                onClick,
                className,
                labelClassName: 'p-menuitem-text',
                iconClassName,
                element: content,
                props
            };

            content = ObjectUtils.getJSXElement(template, props.menuitem, defaultContentOptions);
        }

        const menuItemProps = mergeProps(
            {
                className: 'p-menuitem',
                role: 'none'
            },
            props.ptm('menuItem')
        );

        return <li {...menuItemProps}>{content}</li>;
    };

    const createItem = () => {
        return props.menuitem.separator ? createSeparator() : createMenuitem();
    };

    const item = createItem();

    return item;
});

SplitButtonItem.displayName = 'SplitButtonItem';
