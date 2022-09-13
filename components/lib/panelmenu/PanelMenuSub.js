import * as React from 'react';
import { CSSTransition } from '../csstransition/CSSTransition';
import { useMountEffect } from '../hooks/Hooks';
import { classNames, IconUtils, ObjectUtils } from '../utils/Utils';

export const PanelMenuSub = React.memo((props) => {
    const [activeItemState, setActiveItemState] = React.useState(null);

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
        const key = 'separator_' + index;

        return <li key={key} className="p-menu-separator"></li>;
    };

    const createSubmenu = (item, active) => {
        const className = classNames('p-toggleable-content', {
            'p-toggleable-content-collapsed': !active
        });
        const submenuRef = React.createRef();

        if (item.items) {
            return (
                <CSSTransition nodeRef={submenuRef} classNames="p-toggleable-content" timeout={{ enter: 1000, exit: 450 }} in={active} unmountOnExit>
                    <div ref={submenuRef} className={className}>
                        <PanelMenuSub menuProps={props.menuProps} model={item.items} multiple={props.multiple} />
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

        const key = item.label + '_' + index;
        const active = isItemActive(item);
        const className = classNames('p-menuitem', item.className);
        const linkClassName = classNames('p-menuitem-link', { 'p-disabled': item.disabled });
        const iconClassName = classNames('p-menuitem-icon', item.icon);
        const submenuIconClassName = classNames('p-panelmenu-icon pi pi-fw', { 'pi-angle-right': !active, 'pi-angle-down': active });
        const icon = IconUtils.getJSXIcon(item.icon, { className: 'p-menuitem-icon' }, { props: props.menuProps });
        const label = item.label && <span className="p-menuitem-text">{item.label}</span>;
        const submenuIcon = item.items && <span className={submenuIconClassName}></span>;
        const submenu = createSubmenu(item, active);
        let content = (
            <a href={item.url || '#'} className={linkClassName} target={item.target} onClick={(event) => onItemClick(event, item, index)} role="menuitem" aria-disabled={item.disabled}>
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

        return (
            <li key={key} id={item.id} className={className} style={item.style} role="none">
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

    const className = classNames('p-submenu-list', props.className);
    const menu = createMenu();

    return (
        <ul className={className} role="tree">
            {menu}
        </ul>
    );
});

PanelMenuSub.displayName = 'PanelMenuSub';
