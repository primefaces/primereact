import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useMergeProps, useMountEffect } from '../hooks/Hooks';
import { Ripple } from '../ripple/Ripple';
import { DomHandler, IconUtils, ObjectUtils, UniqueComponentId, classNames } from '../utils/Utils';
import { TabMenuBase } from './TabMenuBase';

export const TabMenu = React.memo(
    React.forwardRef((inProps, ref) => {
        const mergeProps = useMergeProps();
        const context = React.useContext(PrimeReactContext);
        const props = TabMenuBase.getProps(inProps, context);

        const [idState, setIdState] = React.useState(props.id);
        const [activeIndexState, setActiveIndexState] = React.useState(props.activeIndex);
        const elementRef = React.useRef(null);
        const inkbarRef = React.useRef(null);
        const navRef = React.useRef(null);
        const tabsRef = React.useRef({});
        const activeIndex = props.onTabChange ? props.activeIndex : activeIndexState;
        const metaData = {
            props,
            state: {
                id: idState,
                activeIndex: activeIndex
            }
        };

        const { ptm, cx, isUnstyled } = TabMenuBase.setMetaData({
            ...metaData
        });

        const getPTOptions = (key, item, index) => {
            return ptm(key, {
                parent: metaData,
                context: {
                    item,
                    index
                }
            });
        };

        useHandleStyle(TabMenuBase.css.styles, isUnstyled, { name: 'tabmenu' });

        const itemClick = (event, item, index) => {
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

            if (props.onTabChange) {
                props.onTabChange({
                    originalEvent: event,
                    value: item,
                    index
                });
            } else {
                setActiveIndexState(index);
            }

            if (!item.url) {
                event.preventDefault();
                event.stopPropagation();
            }
        };

        const isSelected = (index) => {
            return index === (activeIndex || 0);
        };

        const updateInkBar = () => {
            if (props.model) {
                let tabs = navRef.current.children;
                let inkHighlighted = false;

                for (let i = 0; i < tabs.length; i++) {
                    let tab = tabs[i];

                    if (DomHandler.getAttribute(tab, 'data-p-highlight')) {
                        inkbarRef.current.style.width = DomHandler.getWidth(tab) + 'px';
                        inkbarRef.current.style.left = DomHandler.getOffset(tab).left - DomHandler.getOffset(navRef.current).left + 'px';
                        inkHighlighted = true;
                    }
                }

                if (!inkHighlighted) {
                    inkbarRef.current.style.width = '0px';
                    inkbarRef.current.style.left = '0px';
                }
            }
        };

        useMountEffect(() => {
            if (!idState) {
                setIdState(UniqueComponentId());
            }
        });

        React.useImperativeHandle(ref, () => ({
            props,
            getElement: () => elementRef.current
        }));

        React.useEffect(() => {
            updateInkBar();
        });

        const onKeyDownItem = (event, item, index) => {
            switch (event.code) {
                case 'ArrowRight':
                    navigateToNextItem(event.target);
                    event.preventDefault();
                    break;

                case 'ArrowLeft':
                    navigateToPrevItem(event.target);
                    event.preventDefault();
                    break;

                case 'Home':
                    navigateToFirstItem(event.target);
                    event.preventDefault();
                    break;

                case 'End':
                    navigateToLastItem(event.target);
                    event.preventDefault();
                    break;

                case 'Space':
                case 'Enter':
                    itemClick(event, item, index);
                    event.preventDefault();
                    break;

                case 'Tab':
                    onTabKey();
                    break;

                default:
                    break;
            }
        };

        const navigateToNextItem = (target) => {
            const nextItem = findNextItem(target);

            nextItem && setFocusToMenuitem(target, nextItem);
        };

        const navigateToPrevItem = (target) => {
            const prevItem = findPrevItem(target);

            prevItem && setFocusToMenuitem(target, prevItem);
        };

        const navigateToFirstItem = (target) => {
            const firstItem = findFirstItem(target);

            firstItem && setFocusToMenuitem(target, firstItem);
        };

        const navigateToLastItem = (target) => {
            const lastItem = findLastItem(target);

            lastItem && setFocusToMenuitem(target, lastItem);
        };

        const findNextItem = (item) => {
            const nextItem = item.parentElement.nextElementSibling;

            return nextItem ? (DomHandler.getAttribute(nextItem, 'data-p-disabled') === true ? findNextItem(nextItem.children[0]) : nextItem.children[0]) : null;
        };

        const findPrevItem = (item) => {
            const prevItem = item.parentElement.previousElementSibling;

            return prevItem ? (DomHandler.getAttribute(prevItem, 'data-p-disabled') === true ? findPrevItem(prevItem.children[0]) : prevItem.children[0]) : null;
        };

        const findFirstItem = () => {
            const firstSibling = DomHandler.findSingle(navRef.current, '[data-pc-section="menuitem"][data-p-disabled="false"]');

            return firstSibling ? firstSibling.children[0] : null;
        };

        const findLastItem = () => {
            const siblings = DomHandler.find(navRef.current, '[data-pc-section="menuitem"][data-p-disabled="false"]');

            return siblings ? siblings[siblings.length - 1].children[0] : null;
        };

        const setFocusToMenuitem = (target, focusableItem) => {
            target.tabIndex = '-1';
            focusableItem.tabIndex = '0';
            focusableItem.focus();
        };

        const onTabKey = () => {
            const activeItem = DomHandler.findSingle(navRef.current, '[data-pc-section="menuitem"][data-p-disabled="false"][data-p-highlight="true"]');
            const focusedItem = DomHandler.findSingle(navRef.current, '[data-pc-section="action"][tabindex="0"]');

            if (focusedItem !== activeItem.children[0]) {
                activeItem && (activeItem.children[0].tabIndex = '0');
                focusedItem.tabIndex = '-1';
            }
        };

        const createMenuItem = (item, index) => {
            if (item.visible === false) {
                return null;
            }

            const { className: _className, style, disabled, icon: _icon, label: _label, template, url, target } = item;
            const key = item.id || idState + '_' + index;
            const active = isSelected(index);
            const iconClassName = classNames('p-menuitem-icon', _icon);
            const iconProps = mergeProps(
                {
                    className: cx('icon', { _icon })
                },
                getPTOptions('icon', item, index)
            );

            const icon = IconUtils.getJSXIcon(_icon, { ...iconProps }, { props });

            const labelProps = mergeProps(
                {
                    className: cx('label')
                },
                getPTOptions('label', item, index)
            );

            const label = _label && <span {...labelProps}>{_label}</span>;

            const actionProps = mergeProps(
                {
                    href: url || '#',
                    role: 'menuitem',
                    'aria-label': _label,
                    tabIndex: active ? '0' : '-1',
                    className: cx('action'),
                    target: target,
                    onClick: (event) => itemClick(event, item, index)
                },
                getPTOptions('action', item, index)
            );

            let content = (
                <a {...actionProps}>
                    {icon}
                    {label}
                    <Ripple />
                </a>
            );

            if (template) {
                const defaultContentOptions = {
                    onClick: (event) => itemClick(event, item, index),
                    className: 'p-menuitem-link',
                    labelClassName: 'p-menuitem-text',
                    iconClassName,
                    element: content,
                    props,
                    active,
                    index,
                    disabled
                };

                content = ObjectUtils.getJSXElement(template, item, defaultContentOptions);
            }

            const menuItemProps = mergeProps(
                {
                    ref: tabsRef.current[`tab_${index}`],
                    id: key,
                    key,
                    onKeyDown: (event) => onKeyDownItem(event, item, index),
                    className: cx('menuitem', { _className, active, disabled }),
                    style: style,
                    role: 'presentation',
                    'data-p-highlight': active,
                    'data-p-disabled': disabled || false,
                    'aria-disabled': disabled
                },
                getPTOptions('menuitem', item, index)
            );

            return <li {...menuItemProps}>{content}</li>;
        };

        const createItems = () => {
            return props.model.map(createMenuItem);
        };

        if (props.model) {
            const items = createItems();

            const inkbarProps = mergeProps(
                {
                    ref: inkbarRef,
                    role: 'none',
                    className: cx('inkbar')
                },
                ptm('inkbar')
            );
            const menuProps = mergeProps(
                {
                    ref: navRef,
                    'aria-label': props.ariaLabel,
                    'aria-labelledby': props.ariaLabelledBy,
                    className: cx('menu'),
                    role: 'menubar'
                },
                ptm('menu')
            );

            const rootProps = mergeProps(
                {
                    id: props.id,
                    ref: elementRef,
                    className: cx('root'),
                    style: props.style
                },
                TabMenuBase.getOtherProps(props),
                ptm('root')
            );

            return (
                <div {...rootProps}>
                    <ul {...menuProps}>
                        {items}
                        <li {...inkbarProps}></li>
                    </ul>
                </div>
            );
        }

        return null;
    })
);

TabMenu.displayName = 'TabMenu';
