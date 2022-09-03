import * as React from 'react';
import { classNames, IconUtils, ObjectUtils } from '../utils/Utils';

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
        return <li className="p-menu-separator" role="separator"></li>;
    };

    const createMenuitem = () => {
        if (props.menuitem.visible === false) {
            return null;
        }
        const { disabled, icon: _icon, label: _label, template, url, target } = props.menuitem;
        const className = classNames('p-menuitem-link', { 'p-disabled': disabled });
        const iconClassName = classNames('p-menuitem-icon', _icon);
        const icon = IconUtils.getJSXIcon(_icon, { className: 'p-menuitem-icon' }, { props: props.splitButtonProps });
        const label = _label && <span className="p-menuitem-text">{_label}</span>;
        let content = (
            <a href={url || '#'} role="menuitem" className={className} target={target} onClick={onClick} aria-label={_label}>
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

        return (
            <li className="p-menuitem" role="none">
                {content}
            </li>
        );
    };

    const createItem = () => {
        return props.menuitem.separator ? createSeparator() : createMenuitem();
    };

    const item = createItem();

    return item;
});

SplitButtonItem.displayName = 'SplitButtonItem';
