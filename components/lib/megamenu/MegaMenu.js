import * as React from 'react';
import PrimeReact, { PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useEventListener, useMatchMedia, useMountEffect, useResizeListener, useUpdateEffect } from '../hooks/Hooks';
import { AngleDownIcon } from '../icons/angledown';
import { AngleRightIcon } from '../icons/angleright';
import { BarsIcon } from '../icons/bars';
import { Ripple } from '../ripple/Ripple';
import { DomHandler, IconUtils, ObjectUtils, UniqueComponentId, ZIndexUtils, classNames, mergeProps } from '../utils/Utils';
import { MegaMenuBase } from './MegaMenuBase';

export const MegaMenu = React.memo(
    React.forwardRef((inProps, ref) => {
        const context = React.useContext(PrimeReactContext);
        const props = MegaMenuBase.getProps(inProps, context);

        const [activeItemState, setActiveItemState] = React.useState(null);
        const [attributeSelectorState, setAttributeSelectorState] = React.useState(null);
        const [mobileActiveState, setMobileActiveState] = React.useState(false);
        const elementRef = React.useRef(null);
        const styleElementRef = React.useRef(null);
        const menuButtonRef = React.useRef(null);
        const horizontal = props.orientation === 'horizontal';
        const vertical = props.orientation === 'vertical';
        const isMobileMode = useMatchMedia(`screen and (max-width: ${props.breakpoint})`, !!props.breakpoint);

        const { ptm, cx, isUnstyled } = MegaMenuBase.setMetaData({
            props,
            state: {
                activeItem: activeItemState,
                attributeSelector: attributeSelectorState,
                mobileActive: mobileActiveState
            }
        });

        useHandleStyle(MegaMenuBase.css.styles, isUnstyled, { name: 'megamenu' });

        const getPTOptions = (item, key) => {
            return ptm(key, {
                context: {
                    active: activeItemState === item
                }
            });
        };

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
                ZIndexUtils.set('menu', currentPanel, (context && context.autoZIndex) || PrimeReact.autoZIndex, (context && context.zIndex['menu']) || PrimeReact.zIndex['menu']);
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

            const separatorProps = mergeProps(
                {
                    key,
                    className: cx('separatorProps'),
                    role: 'separator'
                },
                ptm('separator')
            );

            return <li {...separatorProps}></li>;
        };

        const createSubmenuIcon = (item) => {
            if (item.items) {
                const submenuIconProps = mergeProps(
                    {
                        className: cx('submenuIcon')
                    },
                    ptm('submenuIcon')
                );

                const icon = vertical ? props.submenuIcon || <AngleRightIcon {...submenuIconProps} /> : props.submenuIcon || <AngleDownIcon {...submenuIconProps} />;
                const submenuIcon = IconUtils.getJSXIcon(icon, { ...submenuIconProps }, { props });

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
                const linkClassName = classNames('p-menuitem-link', { 'p-disabled': item.disabled });
                const iconClassName = classNames(item.icon, 'p-menuitem-icon');
                const icon = IconUtils.getJSXIcon(item.icon, { className: 'p-menuitem-icon' }, { props });
                const label = item.label && <span className="p-menuitem-text">{item.label}</span>;

                const actionProps = mergeProps(
                    {
                        href: item.url || '#',
                        className: cx('action', { item }),
                        target: item.target,
                        onClick: (event) => onLeafClick(event, item),
                        role: 'menuitem',
                        'aria-disabled': item.disabled
                    },
                    getPTOptions(item, 'action')
                );

                const submenuItemProps = mergeProps(
                    {
                        key: key,
                        id: item.id,
                        className: cx('submenuItem', { item }),
                        style: item.style,
                        role: 'none'
                    },
                    getPTOptions(item, 'submenuItem')
                );

                let content = (
                    <a {...actionProps}>
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

                return <li {...submenuItemProps}>{content}</li>;
            }
        };

        const createSubmenu = (submenu) => {
            if (submenu.visible === false) {
                return null;
            }

            const items = submenu.items.map(createSubmenuItem);

            const submenuHeaderProps = mergeProps(
                {
                    id: submenu.id,
                    className: cx('submenuHeader', { submenu }),
                    style: submenu.style,
                    role: 'presentation'
                },
                ptm('submenuHeader')
            );

            return (
                <React.Fragment key={submenu.label}>
                    <li {...submenuHeaderProps}>{submenu.label}</li>
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

            const columnProps = mergeProps(
                {
                    key: key,
                    className: columnClassName
                },
                ptm('column')
            );

            const submenuProps = mergeProps(
                {
                    className: cx('submenu'),
                    role: 'menu'
                },
                ptm('submenu')
            );

            return (
                <div {...columnProps}>
                    <ul {...submenuProps}>{submenus}</ul>
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

                const panelProps = mergeProps(
                    {
                        className: cx('panel')
                    },
                    ptm('panel')
                );

                const gridProps = mergeProps(
                    {
                        className: cx('grid')
                    },
                    ptm('grid')
                );

                return (
                    <div {...panelProps}>
                        <div {...gridProps}>{columns}</div>
                    </div>
                );
            }

            return null;
        };

        const createStyle = () => {
            if (!styleElementRef.current) {
                styleElementRef.current = DomHandler.createInlineStyle((context && context.nonce) || PrimeReact.nonce);

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
            const iconProps = mergeProps(
                {
                    className: cx('icon')
                },
                getPTOptions(category, 'icon')
            );
            const icon = IconUtils.getJSXIcon(category.icon, { ...iconProps }, { props });

            const labelProps = mergeProps(
                {
                    className: cx('label')
                },
                getPTOptions(category, 'label')
            );
            const label = category.label && <span {...labelProps}>{category.label}</span>;
            const itemContent = category.template ? ObjectUtils.getJSXElement(category.template, category) : null;
            const submenuIcon = createSubmenuIcon(category);
            const panel = createCategoryPanel(category);

            const headerActionProps = mergeProps(
                {
                    href: category.url || '#',
                    className: cx('headerAction', { category }),
                    target: category.target,
                    onClick: (e) => onCategoryClick(e, category),
                    onKeyDown: (e) => onCategoryKeyDown(e, category),
                    role: 'menuitem',
                    'aria-haspopup': category.items != null
                },
                getPTOptions(category, 'headerAction')
            );

            const menuItemProps = mergeProps(
                {
                    key: category.label + '_' + index,
                    id: category.id,
                    className: cx('menuitem', { category, activeItemState }),
                    style: category.style,
                    onMouseEnter: (e) => onCategoryMouseEnter(e, category),
                    role: 'none'
                },
                getPTOptions(category, 'menuitem')
            );

            return (
                <li {...menuItemProps}>
                    <a {...headerActionProps}>
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
            const menuProps = mergeProps(
                {
                    className: cx('menu'),
                    role: 'menubar'
                },
                ptm('menu')
            );

            if (props.model) {
                return (
                    <ul {...menuProps}>
                        {props.model.map((item, index) => {
                            return createCategory(item, index, true);
                        })}
                    </ul>
                );
            }

            return null;
        };

        const createStartContent = () => {
            const startProps = mergeProps(
                {
                    className: cx('start')
                },
                ptm('start')
            );

            if (props.start) {
                const start = ObjectUtils.getJSXElement(props.start, props);

                return <div {...startProps}>{start}</div>;
            }

            return null;
        };

        const createEndContent = () => {
            const endProps = mergeProps(
                {
                    className: cx('end')
                },
                ptm('end')
            );

            if (props.end) {
                const end = ObjectUtils.getJSXElement(props.end, props);

                return <div {...endProps}>{end}</div>;
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

        const rootProps = mergeProps(
            {
                ref: elementRef,
                id: props.id,
                className: cx('root', { mobileActiveState }),
                style: props.style
            },
            MegaMenuBase.getOtherProps(props),
            ptm('root')
        );

        const menu = createMenu();
        const start = createStartContent();
        const end = createEndContent();
        const menuButton = createMenuButton();

        return (
            <div {...rootProps}>
                {start}
                {menuButton}
                {menu}
                {end}
            </div>
        );
    })
);

MegaMenu.displayName = 'MegaMenu';
