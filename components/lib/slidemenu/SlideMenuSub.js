import * as React from 'react';
import { classNames, IconUtils, ObjectUtils } from '../utils/Utils';

export const SlideMenuSub = React.memo((props) => {
    const [activeItemState, setActiveItemState] = React.useState(null);
    const [renderSubMenu, setRenderSubMenu] = React.useState({});

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
        const key = 'separator_' + index;

        return <li key={key} className="p-menu-separator"></li>;
    };

    const createSubmenu = (item, index) => {
        const shouldRender = renderSubMenu[createKey(item, index)];

        if (item.items && shouldRender) {
            return <SlideMenuSub menuProps={props.menuProps} model={item.items} index={props.index + 1} menuWidth={props.menuWidth} effectDuration={props.effectDuration} onForward={props.onForward} parentActive={item === activeItemState} />;
        }

        return null;
    };

    const createKey = (item, index) => {
        return item.label + '_' + index;
    };

    const createMenuitem = (item, index) => {
        if (item.visible === false) {
            return null;
        }

        const key = createKey(item, index);
        const active = activeItemState === item;
        const className = classNames('p-menuitem', { 'p-menuitem-active': active, 'p-disabled': item.disabled }, item.className);
        const iconClassName = classNames('p-menuitem-icon', item.icon);
        const submenuIconClassName = 'p-submenu-icon pi pi-fw pi-angle-right';
        const icon = IconUtils.getJSXIcon(item.icon, { className: 'p-menuitem-icon' }, { props: props.menuProps });
        const label = item.label && <span className="p-menuitem-text">{item.label}</span>;
        const submenuIcon = item.items && <span className={submenuIconClassName}></span>;
        const submenu = createSubmenu(item, index);
        let content = (
            <a href={item.url || '#'} className="p-menuitem-link" target={item.target} onClick={(event) => onItemClick(event, item, index)} aria-disabled={item.disabled}>
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
                submenuIconClassName,
                element: content,
                props,
                active
            };

            content = ObjectUtils.getJSXElement(item.template, item, defaultContentOptions);
        }

        return (
            <li key={key} id={item.id} className={className} style={item.style}>
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

    const style = {
        width: props.menuWidth + 'px',
        left: props.root ? -1 * props.level * props.menuWidth + 'px' : props.menuWidth + 'px',
        transitionProperty: props.root ? 'left' : 'none',
        transitionDuration: props.effectDuration + 'ms',
        transitionTimingFunction: props.easing
    };
    const className = classNames({
        'p-slidemenu-rootlist': props.root,
        'p-submenu-list': !props.root,
        'p-active-submenu': props.parentActive
    });
    const items = createItems();

    return (
        <ul className={className} style={style}>
            {items}
        </ul>
    );
});

SlideMenuSub.displayName = 'SlideMenuSub';
