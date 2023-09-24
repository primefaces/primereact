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

        const [idState, setIdState] = React.useState(props.id);
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
                id: idState,
                activeItem: activeItemState,
                attributeSelector: attributeSelectorState,
                mobileActive: mobileActiveState
            }
        });

        useHandleStyle(MegaMenuBase.css.styles, isUnstyled, { name: 'megamenu' });

        const getPTOptions = (item, key, index) => {
            return ptm(key, {
                context: {
                    active: activeItemState === item,
                    item,
                    index
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

            return nextItem ? (DomHandler.getAttribute(nextItem, '[data-p-disabled="true"]') || !DomHandler.getAttribute(nextItem, '[data-pc-section="menuitem"]') ? findNextItem(nextItem) : nextItem) : null;
        };

        const findPrevItem = (item) => {
            const prevItem = item.previousElementSibling;

            return prevItem ? (DomHandler.getAttribute(prevItem, '[data-p-disabled="true"]') || !DomHandler.getAttribute(prevItem, '[data-pc-section="menuitem"]') ? findPrevItem(prevItem) : prevItem) : null;
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

        React.useImperativeHandle(ref, () => ({
            props,
            getElement: () => elementRef.current
        }));

        useMountEffect(() => {
            const uniqueId = UniqueComponentId();

            !idState && setIdState(uniqueId);

            if (props.breakpoint) {
                !attributeSelectorState && setAttributeSelectorState(uniqueId);
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
            const key = idState + '_separator__' + index;

            const separatorProps = mergeProps(
                {
                    id: key,
                    key,
                    className: cx('separator'),
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
                const key = item.id || idState + '_' + index;
                const linkClassName = classNames('p-menuitem-link', { 'p-disabled': item.disabled });
                const iconProps = mergeProps(
                    {
                        className: classNames(item.icon, cx('icon'))
                    },
                    ptm('icon')
                );
                const labelProps = mergeProps(
                    {
                        className: cx('label')
                    },
                    ptm('label')
                );
                const iconClassName = classNames(item.icon, 'p-menuitem-icon');
                const icon = IconUtils.getJSXIcon(item.icon, { ...iconProps }, { props });
                const label = item.label && <span {...labelProps}>{item.label}</span>;

                const actionProps = mergeProps(
                    {
                        href: item.url || '#',
                        className: cx('action', { item }),
                        target: item.target,
                        onClick: (event) => onLeafClick(event, item),
                        role: 'menuitem',
                        'aria-disabled': item.disabled
                    },
                    getPTOptions(item, 'action', index)
                );

                const submenuItemProps = mergeProps(
                    {
                        key,
                        id: key,
                        className: classNames(item.className, cx('submenuItem')),
                        style: item.style,
                        role: 'none'
                    },
                    getPTOptions(item, 'submenuItem', index)
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

        const createSubmenu = (submenu, index) => {
            if (submenu.visible === false) {
                return null;
            }

            const items = submenu.items.map(createSubmenuItem);

            const key = submenu.id || idState + '_sub_' + index;
            const submenuHeaderProps = mergeProps(
                {
                    id: key,
                    key,
                    className: classNames(submenu.className, cx('submenuHeader', { submenu })),
                    style: submenu.style,
                    role: 'presentation',
                    'data-p-disabled': submenu.disabled
                },
                ptm('submenuHeader')
            );

            return (
                <React.Fragment key={key}>
                    <li {...submenuHeaderProps}>{submenu.label}</li>
                    {items}
                </React.Fragment>
            );
        };

        const createSubmenus = (column) => {
            return column.map(createSubmenu);
        };

        const createColumn = (category, column, index) => {
            const key = category.label + '_column_' + index;
            const submenus = createSubmenus(column);

            const columnProps = mergeProps(
                {
                    key: key,
                    className: cx('column', { category })
                },
                ptm('column')
            );

            const submenuProps = mergeProps(
                {
                    className: cx('submenu'),
                    style: { display: activeItemState === category ? 'block' : 'none' },
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
                return category.items.map((column, index) => {
                    return createColumn(category, column, index);
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
                getPTOptions(category, 'icon', index)
            );
            const icon = IconUtils.getJSXIcon(category.icon, { ...iconProps }, { props });

            const labelProps = mergeProps(
                {
                    className: cx('label')
                },
                getPTOptions(category, 'label', index)
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
                    'aria-haspopup': category.items != null,
                    'data-p-disabled': category.disabled
                },
                getPTOptions(category, 'headerAction', index)
            );

            const key = category.id || idState + '_cat_' + index;
            const menuItemProps = mergeProps(
                {
                    key,
                    id: key,
                    className: classNames(category.className, cx('menuitem', { category, activeItemState })),
                    style: category.style,
                    onMouseEnter: (e) => onCategoryMouseEnter(e, category),
                    role: 'none',
                    'data-p-disabled': category.disabled || false
                },
                getPTOptions(category, 'menuitem', index)
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

            const menuButtonProps = mergeProps(
                {
                    className: cx('menuButton'),
                    href: '#',
                    role: 'button',
                    tabIndex: 0,
                    onClick: (e) => toggle(e)
                },
                ptm('menuButton')
            );

            const menuButtonIconProps = mergeProps(ptm('menuButtonIcon'));

            const icon = props.menuIcon || <BarsIcon {...menuButtonIconProps} />;
            const menuIcon = IconUtils.getJSXIcon(icon, { ...menuButtonIconProps }, { props });
            /* eslint-disable */
            const button = (
                <a ref={menuButtonRef} {...menuButtonProps}>
                    {menuIcon}
                </a>
            );
            /* eslint-enable */

            return button;
        };

        const rootProps = mergeProps(
            {
                className: classNames(props.className, cx('root', { mobileActiveState })),
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
            <div id={props.id} ref={elementRef} {...rootProps}>
                {start}
                {menuButton}
                {menu}
                {end}
            </div>
        );
    })
);

MegaMenu.displayName = 'MegaMenu';
