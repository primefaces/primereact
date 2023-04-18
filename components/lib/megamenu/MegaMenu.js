import * as React from 'react';
import PrimeReact from '../api/Api';
import { useEventListener, useMatchMedia, useMountEffect, useResizeListener, useUpdateEffect } from '../hooks/Hooks';
import { Ripple } from '../ripple/Ripple';
import { DomHandler, IconUtils, ObjectUtils, UniqueComponentId, ZIndexUtils, classNames } from '../utils/Utils';
import { MegaMenuBase } from './MegaMenuBase';
import { AngleRightIcon } from '../icon/angleright';
import { AngleDownIcon } from '../icon/angledown';
import { BarsIcon } from '../icon/bars';

export const MegaMenu = React.memo(
    React.forwardRef((inProps, ref) => {
        const props = MegaMenuBase.getProps(inProps);

        const [activeItemState, setActiveItemState] = React.useState(null);
        const [attributeSelectorState, setAttributeSelectorState] = React.useState(null);
        const [mobileActiveState, setMobileActiveState] = React.useState(false);
        const elementRef = React.useRef(null);
        const styleElementRef = React.useRef(null);
        const menuButtonRef = React.useRef(null);
        const horizontal = props.orientation === 'horizontal';
        const vertical = props.orientation === 'vertical';
        const isMobileMode = useMatchMedia(`screen and (max-width: ${props.breakpoint})`, !!props.breakpoint);

        const [bindDocumentClickListener] = useEventListener({
            type: 'click',
            listener: (event) => {
                if ((!isMobileMode || mobileActiveState) && isOutsideClicked(event)) {
                    setActiveItemState(null);
                    setMobileActiveState(false);
                }
            }
        });

        const [bindDocumentResizeListener] = useResizeListener({
            listener: () => {
                if (!isMobileMode || mobileActiveState) {
                    setActiveItemState(null);
                    setMobileActiveState(false);
                }
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
            setMobileActiveState(false);
        };

        const onCategoryMouseEnter = (event, item) => {
            if (item.disabled || isMobileMode) {
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

        const toggle = (event) => {
            event.preventDefault();

            setMobileActiveState((prevMobileActive) => !prevMobileActive);
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
            return elementRef.current && !(elementRef.current.isSameNode(event.target) || elementRef.current.contains(event.target) || (menuButtonRef.current && menuButtonRef.current.contains(event.target)));
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
            if (props.breakpoint) {
                !attributeSelectorState && setAttributeSelectorState(UniqueComponentId());
            }

            bindDocumentClickListener();
            bindDocumentResizeListener();
        });

        useUpdateEffect(() => {
            const currentPanel = DomHandler.findSingle(elementRef.current, '.p-menuitem-active > .p-megamenu-panel');

            if (activeItemState && !isMobileMode) {
                ZIndexUtils.set('menu', currentPanel, PrimeReact.autoZIndex, PrimeReact.zIndex['menu']);
            }

            if (isMobileMode) {
                currentPanel && currentPanel.previousElementSibling.scrollIntoView({ block: 'nearest', inline: 'nearest' });
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
                const iconClassName = 'p-submenu-icon';
                const icon = vertical ? props.submenuIcon || <AngleRightIcon className={iconClassName} /> : props.submenuIcon || <AngleDownIcon className={iconClassName} />;
                const submenuIcon = IconUtils.getJSXIcon(icon, { className: iconClassName }, { props });

                return submenuIcon;
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
            if (submenu.visible === false) {
                return null;
            }

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

        const createStyle = () => {
            if (!styleElementRef.current) {
                styleElementRef.current = DomHandler.createInlineStyle(PrimeReact.nonce);

                const selector = `${attributeSelectorState}`;
                const innerHTML = `
@media screen and (max-width: ${props.breakpoint}) {
    .p-megamenu[${selector}] > .p-megamenu-root-list .p-menuitem-active .p-megamenu-panel {
        position: relative;
        left: 0 !important;
        box-shadow: none;
        border-radius: 0;
        background: inherit;
    }

    .p-megamenu[${selector}] .p-menuitem-active > .p-menuitem-link > .p-submenu-icon {
        transform: rotate(-180deg);
    }

    .p-megamenu[${selector}] .p-megamenu-grid {
        flex-wrap: wrap;
    }

    ${
        horizontal
            ? `
.p-megamenu[${selector}] .p-megamenu-button {
    display: flex;
}

.p-megamenu[${selector}].p-megamenu-horizontal {
    position: relative;
}

.p-megamenu[${selector}].p-megamenu-horizontal .p-megamenu-root-list {
    display: none;
}

.p-megamenu-horizontal[${selector}] div[class*="p-megamenu-col-"] {
    width: auto;
    flex: 1;
    padding: 0;
}

.p-megamenu[${selector}].p-megamenu-mobile-active .p-megamenu-root-list {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    top: 100%;
    left: 0;
    z-index: 1;
}
        `
            : ''
    }

    ${
        vertical
            ? `
.p-megamenu-vertical[${selector}] {
    width: 100%;
}

.p-megamenu-vertical[${selector}] .p-megamenu-root-list {
    max-height: ${props.scrollHeight};
    overflow: ${props.scrollHeight ? 'auto' : ''};
}
.p-megamenu-vertical[${selector}] div[class*="p-megamenu-col-"] {
    width: 100%;
    padding: 0;
}

.p-megamenu-vertical[${selector}] .p-megamenu-submenu {
    width: 100%;
}

.p-megamenu-vertical[${selector}] div[class*="p-megamenu-col-"] .p-megamenu-submenu-header {
    background: inherit;
}

.p-megamenu-vertical[${selector}] .p-submenu-icon:before {
    content: "\\e930";
}
        `
            : ''
    }
}
`;

                styleElementRef.current.innerHTML = innerHTML;
            }
        };

        const destroyStyle = () => {
            styleElementRef.current = DomHandler.removeInlineStyle(styleElementRef.current);
        };

        useUpdateEffect(() => {
            if (attributeSelectorState && elementRef.current) {
                elementRef.current.setAttribute(attributeSelectorState, '');
                createStyle();
            }

            return () => {
                destroyStyle();
            };
        }, [attributeSelectorState, props.breakpoint]);

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

        const createMenuButton = () => {
            if (props.orientation === 'vertical' || (props.model && props.model.length < 1)) {
                return null;
            }

            const icon = props.menuIcon || <BarsIcon />;
            const menuIcon = IconUtils.getJSXIcon(icon, undefined, { props });
            /* eslint-disable */
            const button = (
                <a ref={menuButtonRef} href={'#'} role="button" tabIndex={0} className="p-megamenu-button" onClick={toggle}>
                    {menuIcon}
                </a>
            );
            /* eslint-enable */

            return button;
        };

        const otherProps = MegaMenuBase.getOtherProps(props);
        const className = classNames(
            'p-megamenu p-component',
            {
                'p-megamenu-horizontal': props.orientation === 'horizontal',
                'p-megamenu-vertical': props.orientation === 'vertical',
                'p-megamenu-mobile-active': mobileActiveState
            },
            props.className
        );
        const menu = createMenu();
        const start = createStartContent();
        const end = createEndContent();
        const menuButton = createMenuButton();

        return (
            <div ref={elementRef} id={props.id} className={className} style={props.style} {...otherProps}>
                {start}
                {menuButton}
                {menu}
                {end}
            </div>
        );
    })
);

MegaMenu.displayName = 'MegaMenu';
