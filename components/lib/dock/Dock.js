import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useMergeProps, useMountEffect } from '../hooks/Hooks';
import { Ripple } from '../ripple/Ripple';
import { DomHandler, IconUtils, ObjectUtils, UniqueComponentId, classNames } from '../utils/Utils';
import { DockBase } from './DockBase';

export const Dock = React.memo(
    React.forwardRef((inProps, ref) => {
        const [currentIndexState, setCurrentIndexState] = React.useState(-3);
        const [focused, setFocused] = React.useState(false);
        const [focusedOptionIndex, setFocusedOptionIndex] = React.useState(-1);
        const mergeProps = useMergeProps();
        const context = React.useContext(PrimeReactContext);
        const props = DockBase.getProps(inProps, context);
        const [idState, setIdState] = React.useState(props.id);
        const { ptm, cx, isUnstyled } = DockBase.setMetaData({
            props,
            state: {
                id: idState,
                currentIndex: currentIndexState
            }
        });
        const elementRef = React.useRef(null);
        const listRef = React.useRef(null);

        useHandleStyle(DockBase.css.styles, isUnstyled, { name: 'dock' });

        const getPTOptions = (key, item, index) => {
            return ptm(key, {
                context: {
                    index,
                    item
                }
            });
        };

        const onListMouseLeave = () => {
            setCurrentIndexState(-3);
        };

        const onItemMouseEnter = (index) => {
            setCurrentIndexState(index);
        };

        const onItemClick = (e, item) => {
            if (item.command) {
                item.command({ originalEvent: e, item });
            }

            e.preventDefault();
        };

        const onListFocus = (event) => {
            setFocused(true);
            changeFocusedOptionIndex(0);
            props.onFocus && props.onFocus(event);
        };

        const onListBlur = (event) => {
            setFocused(false);
            setFocusedOptionIndex(-1);
            props.onBlur && props.onBlur(event);
        };

        const onListKeyDown = (event) => {
            switch (event.code) {
                case 'ArrowDown':
                    if (props.position === 'left' || props.position === 'right') onArrowDownKey();
                    event.preventDefault();
                    break;

                case 'ArrowUp':
                    if (props.position === 'left' || props.position === 'right') onArrowUpKey();
                    event.preventDefault();
                    break;

                case 'ArrowRight':
                    if (props.position === 'top' || props.position === 'bottom') onArrowDownKey();
                    event.preventDefault();
                    break;

                case 'ArrowLeft':
                    if (props.position === 'top' || props.position === 'bottom') onArrowUpKey();
                    event.preventDefault();
                    break;

                case 'Home':
                    onHomeKey();
                    event.preventDefault();
                    break;

                case 'End':
                    onEndKey();
                    event.preventDefault();
                    break;

                case 'Enter':
                case 'Space':
                    onSpaceKey(event);
                    event.preventDefault();
                    break;

                default:
                    break;
            }
        };

        const onArrowDownKey = () => {
            const optionIndex = findNextOptionIndex(focusedOptionIndex);

            changeFocusedOptionIndex(optionIndex);
        };

        const onArrowUpKey = () => {
            const optionIndex = findPrevOptionIndex(focusedOptionIndex);

            changeFocusedOptionIndex(optionIndex);
        };

        const onHomeKey = () => {
            changeFocusedOptionIndex(0);
        };

        const onEndKey = () => {
            changeFocusedOptionIndex(DomHandler.find(listRef.current, 'li[data-pc-section="menuitem"][data-p-disabled="false"]').length - 1);
        };

        const onSpaceKey = () => {
            const element = DomHandler.findSingle(listRef.current, `li[id="${`${focusedOptionIndex}`}"]`);
            const anchorElement = element && DomHandler.findSingle(element, '[data-pc-section="action"]');

            anchorElement ? anchorElement.click() : element && element.click();
        };

        const findNextOptionIndex = (index) => {
            const menuitems = DomHandler.find(listRef.current, 'li[data-pc-section="menuitem"][data-p-disabled="false"]');
            const matchedOptionIndex = [...menuitems].findIndex((link) => link.id === index);

            return matchedOptionIndex > -1 ? matchedOptionIndex + 1 : 0;
        };

        const findPrevOptionIndex = (index) => {
            const menuitems = DomHandler.find(listRef.current, 'li[data-pc-section="menuitem"][data-p-disabled="false"]');
            const matchedOptionIndex = [...menuitems].findIndex((link) => link.id === index);

            return matchedOptionIndex > -1 ? matchedOptionIndex - 1 : 0;
        };

        const changeFocusedOptionIndex = (index) => {
            const menuitems = DomHandler.find(listRef.current, 'li[data-pc-section="menuitem"][data-p-disabled="false"]');
            let order = index >= menuitems.length ? menuitems.length - 1 : index < 0 ? 0 : index;

            setFocusedOptionIndex(menuitems[order].getAttribute('id'));
        };

        const isItemActive = (id) => {
            return id === focusedOptionIndex;
        };

        const createItem = (item, index) => {
            if (item.visible === false) {
                return null;
            }

            const { disabled, icon: _icon, label, template, url, target } = item;
            const key = item.id || idState + '_' + index;
            const contentClassName = classNames('p-dock-action', { 'p-disabled': disabled });
            const iconClassName = classNames('p-dock-action-icon', _icon);
            const iconProps = mergeProps(
                {
                    className: cx('icon')
                },
                getPTOptions('icon', item, index)
            );
            const icon = IconUtils.getJSXIcon(_icon, { ...iconProps }, { props });
            const actionProps = mergeProps(
                {
                    href: url || '#',
                    onFocus: (event) => event.stopPropagation(),
                    className: cx('action', { disabled }),
                    'aria-hidden': 'true',
                    tabIndex: -1,
                    target,
                    'data-pr-tooltip': label,
                    onClick: (e) => onItemClick(e, item)
                },
                getPTOptions('action', item, index)
            );

            let content = (
                <a {...actionProps}>
                    {icon}
                    <Ripple />
                </a>
            );

            if (template) {
                const defaultContentOptions = {
                    onClick: (e) => onItemClick(e, item),
                    className: contentClassName,
                    iconClassName,
                    'aria-hidden': 'true',
                    tabIndex: -1,
                    element: content,
                    props,
                    index
                };

                content = ObjectUtils.getJSXElement(template, item, defaultContentOptions);
            }

            const contentProps = mergeProps(
                {
                    className: cx('content')
                },
                getPTOptions('content', item, index)
            );

            const active = isItemActive(key);

            const menuitemProps = mergeProps(
                {
                    id: key,
                    role: 'menuitem',
                    key,
                    'aria-label': label,
                    'aria-disabled': disabled,
                    'data-p-focused': active,
                    'data-p-disabled': disabled || false,
                    className: cx('menuitem', { currentIndexState, index, active: isItemActive(key) }),
                    role: 'none',
                    onMouseEnter: () => onItemMouseEnter(index)
                },
                getPTOptions('menuitem', item, index)
            );

            return (
                <li {...menuitemProps}>
                    <div {...contentProps}>{content}</div>
                </li>
            );
        };

        const createItems = () => {
            return props.model ? props.model.map(createItem) : null;
        };

        const createHeader = () => {
            if (props.header) {
                const header = ObjectUtils.getJSXElement(props.header, { props });
                const headerProps = mergeProps(
                    {
                        className: cx('header')
                    },
                    ptm('header')
                );

                return <div {...headerProps}>{header}</div>;
            }

            return null;
        };

        const createList = () => {
            const items = createItems();
            const menuProps = mergeProps(
                {
                    ref: listRef,
                    className: cx('menu'),
                    role: 'menu',
                    'aria-orientation': props.position === 'bottom' || props.position === 'top' ? 'horizontal' : 'vertical',
                    'aria-activedescendant': focused ? (focusedOptionIndex !== -1 ? focusedOptionIndex : null) : undefined,
                    tabIndex: props.tabIndex || 0,
                    onFocus: onListFocus,
                    onBlur: onListBlur,
                    onKeyDown: onListKeyDown,
                    onMouseLeave: onListMouseLeave
                },
                ptm('menu')
            );

            return <ul {...menuProps}>{items}</ul>;
        };

        const createFooter = () => {
            if (props.footer) {
                const footer = ObjectUtils.getJSXElement(props.footer, { props });
                const footerProps = mergeProps(
                    {
                        className: cx('footer')
                    },
                    ptm('footer')
                );

                return <div {...footerProps}>{footer}</div>;
            }

            return null;
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

        const header = createHeader();
        const list = createList();
        const footer = createFooter();
        const rootProps = mergeProps(
            {
                className: classNames(props.className, cx('root')),
                style: props.style
            },
            DockBase.getOtherProps(props),
            ptm('root')
        );

        const containerProps = mergeProps(
            {
                className: cx('container')
            },
            ptm('container')
        );

        return (
            <div id={props.id} ref={elementRef} {...rootProps}>
                <div {...containerProps}>
                    {header}
                    {list}
                    {footer}
                </div>
            </div>
        );
    })
);

Dock.displayName = 'Dock';
