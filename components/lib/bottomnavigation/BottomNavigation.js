import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useMergeProps, useMountEffect } from '../hooks/Hooks';
import { Ripple } from '../ripple/Ripple';
import { DomHandler, IconUtils, ObjectUtils, UniqueComponentId, classNames } from '../utils/Utils';
import { BottomNavigationBase } from './BottomNavigationBase';

export const BottomNavigation = React.memo(
    React.forwardRef((inProps, ref) => {
        const mergeProps = useMergeProps();
        const context = React.useContext(PrimeReactContext);
        const props = BottomNavigationBase.getProps(inProps, context);

        const [idState, setIdState] = React.useState(props.id);
        const [activeIndexState, setActiveIndexState] = React.useState(props.activeIndex);
        const elementRef = React.useRef(null);
        const navRef = React.useRef(null);
        const activeIndex = props.onChange ? props.activeIndex : activeIndexState;
        const metaData = {
            props,
            state: {
                id: idState,
                activeIndex
            }
        };

        const { ptm, cx, isUnstyled } = BottomNavigationBase.setMetaData({
            ...metaData
        });

        const getPTOptions = (key, item, index) => {
            return ptm(key, {
                parent: metaData,
                context: {
                    item,
                    index,
                    active: isSelected(index),
                    disabled: item.disabled
                }
            });
        };

        useHandleStyle(BottomNavigationBase.css.styles, isUnstyled, { name: 'bottomnavigation' });

        useMountEffect(() => {
            if (!idState) {
                setIdState(UniqueComponentId());
            }
        });

        React.useImperativeHandle(ref, () => ({
            props,
            getElement: () => elementRef.current
        }));

        const itemClick = (event, item, index) => {
            if (item.disabled) {
                event.preventDefault();

                return;
            }

            if (item.command) {
                item.command({
                    originalEvent: event,
                    item
                });
            }

            if (props.onChange) {
                props.onChange({
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
                case 'NumpadEnter':
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
            const firstItem = findFirstItem();

            firstItem && setFocusToMenuitem(target, firstItem);
        };

        const navigateToLastItem = (target) => {
            const lastItem = findLastItem();

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

            if (activeItem && focusedItem && focusedItem !== activeItem.children[0]) {
                activeItem.children[0].tabIndex = '0';
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
            const label = props.showLabels && _label && <span {...labelProps}>{_label}</span>;
            const indicatorProps = mergeProps(
                {
                    className: cx('indicator')
                },
                getPTOptions('indicator', item, index)
            );
            const indicator = props.indicator !== 'none' && <span {...indicatorProps} />;
            const actionProps = mergeProps(
                {
                    href: url || '#',
                    role: 'menuitem',
                    'aria-label': _label,
                    'aria-current': active ? 'page' : undefined,
                    tabIndex: active ? '0' : '-1',
                    className: cx('action'),
                    target,
                    onClick: (event) => itemClick(event, item, index)
                },
                getPTOptions('action', item, index)
            );

            let content = (
                <a {...actionProps}>
                    {icon}
                    {label}
                    {indicator}
                    <Ripple />
                </a>
            );

            if (template) {
                const defaultContentOptions = {
                    onClick: (event) => itemClick(event, item, index),
                    className: 'p-menuitem-link',
                    labelClassName: 'p-menuitem-text',
                    iconClassName,
                    indicatorClassName: 'p-bottomnavigation-indicator',
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
                    id: key,
                    onKeyDown: (event) => onKeyDownItem(event, item, index),
                    className: cx('menuitem', { _className, active, disabled }),
                    style,
                    role: 'presentation',
                    'data-p-highlight': active,
                    'data-p-disabled': disabled || false,
                    'aria-disabled': disabled
                },
                getPTOptions('menuitem', item, index)
            );

            return (
                <li {...menuItemProps} key={key}>
                    {content}
                </li>
            );
        };

        if (props.model) {
            const items = props.model.map(createMenuItem);
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
                    className: classNames(props.className, cx('root')),
                    style: props.style
                },
                BottomNavigationBase.getOtherProps(props),
                ptm('root')
            );

            return (
                <div {...rootProps}>
                    <ul {...menuProps}>{items}</ul>
                </div>
            );
        }

        return null;
    })
);

BottomNavigation.displayName = 'BottomNavigation';
