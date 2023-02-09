import * as React from 'react';
import PrimeReact from '../api/Api';
import { useEventListener, useMountEffect, useUpdateEffect } from '../hooks/Hooks';
import { Ripple } from '../ripple/Ripple';
import { classNames, DomHandler, IconUtils, ObjectUtils, ZIndexUtils } from '../utils/Utils';
import { MegaMenuBase } from './MegaMenuBase';

export const MegaMenu = React.memo(
    React.forwardRef((inProps, ref) => {
        const props = MegaMenuBase.getProps(inProps);

        const [activeItemState, setActiveItemState] = React.useState(null);
        const elementRef = React.useRef(null);
        const horizontal = props.orientation === 'horizontal';
        const vertical = props.orientation === 'vertical';

        const [bindDocumentClickListener] = useEventListener({
            type: 'click',
            listener: (event) => {
                isOutsideClicked(event) && setActiveItemState(null);
            }
        });

        const onLeafClick = (event, item) => {
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

            setActiveItemState(null);
        };

        const onCategoryMouseEnter = (event, item) => {
            if (item.disabled) {
                event.preventDefault();

                return;
            }

            if (activeItemState) {
                setActiveItemState(item);
            }
        };

        const onCategoryClick = (event, item) => {
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
                    item: props.item
                });
            }

            if (item.items) {
                activeItemState && activeItemState === item ? setActiveItemState(null) : setActiveItemState(item);
            }

            event.preventDefault();
        };

        const onCategoryKeyDown = (event, item) => {
            const listItem = event.currentTarget.parentElement;

            switch (event.which) {
                //down
                case 40:
                    horizontal ? expandMenu(item) : navigateToNextItem(listItem);
                    event.preventDefault();
                    break;

                //up
                case 38:
                    vertical ? navigateToPrevItem(listItem) : item.items && item === activeItemState && collapseMenu();
                    event.preventDefault();
                    break;

                //right
                case 39:
                    horizontal ? navigateToNextItem(listItem) : expandMenu(item);
                    event.preventDefault();
                    break;

                //left
                case 37:
                    horizontal ? navigateToPrevItem(listItem) : item.items && item === activeItemState && collapseMenu();
                    event.preventDefault();
                    break;

                default:
                    break;
            }
        };

        const expandMenu = (item) => {
            if (item.items) {
                setActiveItemState(item);
            }
        };

        const collapseMenu = (item) => {
            setActiveItemState(null);
        };

        const findNextItem = (item) => {
            const nextItem = item.nextElementSibling;

            return nextItem ? (DomHandler.hasClass(nextItem, 'p-disabled') || !DomHandler.hasClass(nextItem, 'p-menuitem') ? findNextItem(nextItem) : nextItem) : null;
        };

        const findPrevItem = (item) => {
            const prevItem = item.previousElementSibling;

            return prevItem ? (DomHandler.hasClass(prevItem, 'p-disabled') || !DomHandler.hasClass(prevItem, 'p-menuitem') ? findPrevItem(prevItem) : prevItem) : null;
        };

        const navigateToNextItem = (listItem) => {
            const nextItem = findNextItem(listItem);

            nextItem && nextItem.children[0].focus();
        };

        const navigateToPrevItem = (listItem) => {
            const prevItem = findPrevItem(listItem);

            prevItem && prevItem.children[0].focus();
        };

        const isOutsideClicked = (event) => {
            return elementRef.current && !(elementRef.current.isSameNode(event.target) || elementRef.current.contains(event.target));
        };

        const getColumnClassName = (category) => {
            const length = category.items ? category.items.length : 0;
            let columnClass;

            switch (length) {
                case 2:
                    columnClass = 'p-megamenu-col-6';
                    break;

                case 3:
                    columnClass = 'p-megamenu-col-4';
                    break;

                case 4:
                    columnClass = 'p-megamenu-col-3';
                    break;

                case 6:
                    columnClass = 'p-megamenu-col-2';
                    break;

                default:
                    columnClass = 'p-megamenu-col-12';
                    break;
            }

            return columnClass;
        };

        React.useImperativeHandle(ref, () => ({
            props,
            getElement: () => elementRef.current
        }));

        useMountEffect(() => {
            bindDocumentClickListener();
        });

        useUpdateEffect(() => {
            const currentPanel = DomHandler.findSingle(elementRef.current, '.p-menuitem-active > .p-megamenu-panel');

            if (activeItemState) {
                ZIndexUtils.set('menu', currentPanel, PrimeReact.autoZIndex, PrimeReact.zIndex['menu']);
            }

            return () => {
                ZIndexUtils.clear(currentPanel);
            };
        }, [activeItemState]);

        const createSeparator = (index) => {
            const key = 'separator_' + index;

            return <li key={key} className="p-menu-separator" role="separator"></li>;
        };

        const createSubmenuIcon = (item) => {
            if (item.items) {
                const className = classNames('p-submenu-icon pi', {
                    'pi-angle-down': horizontal,
                    'pi-angle-right': vertical
                });

                return <span className={className}></span>;
            }

            return null;
        };

        const createSubmenuItem = (item, index) => {
            if (item.visible === false) {
                return null;
            }

            if (item.separator) {
                return createSeparator(index);
            } else {
                const key = item.label + '_' + index;
                const className = classNames('p-menuitem', item.className);
                const linkClassName = classNames('p-menuitem-link', { 'p-disabled': item.disabled });
                const iconClassName = classNames(item.icon, 'p-menuitem-icon');
                const icon = IconUtils.getJSXIcon(item.icon, { className: 'p-menuitem-icon' }, { props });
                const label = item.label && <span className="p-menuitem-text">{item.label}</span>;
                let content = (
                    <a href={item.url || '#'} className={linkClassName} target={item.target} onClick={(event) => onLeafClick(event, item)} role="menuitem" aria-disabled={item.disabled}>
                        {icon}
                        {label}
                        <Ripple />
                    </a>
                );

                if (item.template) {
                    const defaultContentOptions = {
                        onClick: (event) => onLeafClick(event, item),
                        className: linkClassName,
                        labelClassName: 'p-menuitem-text',
                        iconClassName,
                        element: content,
                        props
                    };

                    content = ObjectUtils.getJSXElement(item.template, item, defaultContentOptions);
                }

                return (
                    <li key={key} id={item.id} className={className} style={item.style} role="none">
                        {content}
                    </li>
                );
            }
        };

        const createSubmenu = (submenu) => {
            const className = classNames(
                'p-megamenu-submenu-header',
                {
                    'p-disabled': submenu.disabled
                },
                submenu.className
            );
            const items = submenu.items.map(createSubmenuItem);

            return (
                <React.Fragment key={submenu.label}>
                    <li id={submenu.id} className={className} style={submenu.style} role="presentation">
                        {submenu.label}
                    </li>
                    {items}
                </React.Fragment>
            );
        };

        const createSubmenus = (column) => {
            return column.map(createSubmenu);
        };

        const createColumn = (category, column, index, columnClassName) => {
            const key = category.label + '_column_' + index;
            const submenus = createSubmenus(column);

            return (
                <div key={key} className={columnClassName}>
                    <ul className="p-megamenu-submenu" role="menu">
                        {submenus}
                    </ul>
                </div>
            );
        };

        const createColumns = (category) => {
            if (category.items) {
                const columnClassName = getColumnClassName(category);

                return category.items.map((column, index) => {
                    return createColumn(category, column, index, columnClassName);
                });
            }

            return null;
        };

        const createCategoryPanel = (category) => {
            if (category.items) {
                const columns = createColumns(category);

                return (
                    <div className="p-megamenu-panel">
                        <div className="p-megamenu-grid">{columns}</div>
                    </div>
                );
            }

            return null;
        };

        const createCategory = (category, index) => {
            const className = classNames('p-menuitem', { 'p-menuitem-active': category === activeItemState }, category.className);
            const linkClassName = classNames('p-menuitem-link', { 'p-disabled': category.disabled });
            const icon = IconUtils.getJSXIcon(category.icon, { className: 'p-menuitem-icon' }, { props });
            const label = category.label && <span className="p-menuitem-text">{category.label}</span>;
            const itemContent = category.template ? ObjectUtils.getJSXElement(category.template, category) : null;
            const submenuIcon = createSubmenuIcon(category);
            const panel = createCategoryPanel(category);

            return (
                <li key={category.label + '_' + index} id={category.id} className={className} style={category.style} onMouseEnter={(e) => onCategoryMouseEnter(e, category)} role="none">
                    <a
                        href={category.url || '#'}
                        className={linkClassName}
                        target={category.target}
                        onClick={(e) => onCategoryClick(e, category)}
                        onKeyDown={(e) => onCategoryKeyDown(e, category)}
                        role="menuitem"
                        aria-haspopup={category.items != null}
                    >
                        {icon}
                        {label}
                        {itemContent}
                        {submenuIcon}
                        <Ripple />
                    </a>
                    {panel}
                </li>
            );
        };

        const createMenu = () => {
            if (props.model) {
                return (
                    <ul className="p-megamenu-root-list" role="menubar">
                        {props.model.map((item, index) => {
                            return createCategory(item, index, true);
                        })}
                    </ul>
                );
            }

            return null;
        };

        const createStartContent = () => {
            if (props.start) {
                const start = ObjectUtils.getJSXElement(props.start, props);

                return <div className="p-megamenu-start">{start}</div>;
            }

            return null;
        };

        const createEndContent = () => {
            if (props.end) {
                const end = ObjectUtils.getJSXElement(props.end, props);

                return <div className="p-megamenu-end">{end}</div>;
            }

            return null;
        };

        const otherProps = MegaMenuBase.getOtherProps(props);
        const className = classNames(
            'p-megamenu p-component',
            {
                'p-megamenu-horizontal': props.orientation === 'horizontal',
                'p-megamenu-vertical': props.orientation === 'vertical'
            },
            props.className
        );
        const menu = createMenu();
        const start = createStartContent();
        const end = createEndContent();

        return (
            <div ref={elementRef} id={props.id} className={className} style={props.style} {...otherProps}>
                {start}
                {menu}
                {end}
            </div>
        );
    })
);

MegaMenu.displayName = 'MegaMenu';
